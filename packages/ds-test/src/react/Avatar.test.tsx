import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Avatar } from '@woosgem/ds-react';
import { Avatar as AvatarDef } from '@woosgem/ds-core';

describe('Avatar', () => {
  describe('core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      render(<Avatar />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'lg' });

      render(<Avatar size="lg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: shape prop이 core 결과와 일치한다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ shape: 'square' });

      render(<Avatar shape="square" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveAttribute('data-shape', 'square');
    });

    it('TC-R103: src가 있을 때 data-has-image가 core 결과와 일치한다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ src: '/avatar.jpg' });

      render(<Avatar src="/avatar.jpg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-has-image', String(coreAttrs['data-has-image']));
    });

    it('TC-R104: src가 없을 때 data-has-image 속성이 없다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      render(<Avatar />);
      const avatar = document.querySelector('.avatar');

      expect(coreAttrs['data-has-image']).toBeUndefined();
      expect(avatar).not.toHaveAttribute('data-has-image');
    });

    it('TC-R105: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        size: 'xl' as const,
        shape: 'circle' as const,
        src: '/img.jpg',
      };
      const coreAttrs = AvatarDef.mapPropsToAttrs(props);

      render(<Avatar size="xl" shape="circle" src="/img.jpg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveAttribute('data-has-image', 'true');
    });

    it('TC-C110: size xs가 적용된다', () => {
      render(<Avatar size="xs" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'xs');
    });

    it('TC-C111: size sm이 적용된다', () => {
      render(<Avatar size="sm" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C112: size md가 적용된다', () => {
      render(<Avatar size="md" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'md');
    });

    it('TC-C113: size lg가 적용된다', () => {
      render(<Avatar size="lg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-C114: size xl이 적용된다', () => {
      render(<Avatar size="xl" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'xl');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R210: children이 렌더링된다', () => {
      render(<Avatar>AB</Avatar>);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveTextContent('AB');
    });

    it('TC-R300: className이 병합된다', () => {
      render(<Avatar className="custom-class" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('custom-class');
    });

    it('TC-R301: aria-label이 적용된다', () => {
      render(<Avatar aria-label="User profile" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('aria-label', 'User profile');
    });

    it('TC-R303: JSX children이 렌더링된다', () => {
      render(
        <Avatar>
          <span data-testid="initials">JD</span>
        </Avatar>
      );

      expect(screen.getByTestId('initials')).toHaveTextContent('JD');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      render(<Avatar className="custom" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('custom');
    });

    it('TC-O101: className 여러 개 추가', () => {
      render(<Avatar className="a b c" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('a');
      expect(avatar).toHaveClass('b');
      expect(avatar).toHaveClass('c');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<Avatar style={{ marginTop: 8 }} />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O120: data-testid 추가 허용', () => {
      render(<Avatar data-testid="user-avatar" />);
      expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 허용', () => {
      render(<Avatar aria-label="User profile" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('aria-label', 'User profile');
    });

    it('TC-O150: onClick 핸들러 추가 허용', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Avatar onClick={handleClick} />);
      const avatar = document.querySelector('.avatar');

      await user.click(avatar!);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-O160: id 속성 전달 허용', () => {
      render(<Avatar id="user-avatar" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('id', 'user-avatar');
    });

    it('TC-O130: 보호 속성 data-size 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Avatar data-size="custom" size="lg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: 보호 속성 data-shape 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Avatar data-shape="custom" shape="square" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-shape', 'square');
    });

    it('TC-O132: 보호 속성 data-has-image 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Avatar data-has-image="false" src="/img.jpg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-has-image', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값은 md이다', () => {
      render(<Avatar />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: shape 기본값은 circle이다', () => {
      render(<Avatar />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-shape', 'circle');
    });
  });
});
