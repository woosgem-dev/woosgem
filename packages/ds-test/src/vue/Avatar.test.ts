import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Avatar } from '@woosgem-dev/vue';
import { Avatar as AvatarDef } from '@woosgem-dev/core';

describe('Avatar', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      render(Avatar, { attrs: { 'aria-label': 'User avatar' } });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'lg' });

      render(Avatar, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'Large avatar' },
      });
      const avatar = screen.getByLabelText('Large avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V102: shape prop이 core 결과와 일치한다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ shape: 'square' });

      render(Avatar, {
        props: { shape: 'square' },
        attrs: { 'aria-label': 'Square avatar' },
      });
      const avatar = screen.getByLabelText('Square avatar');

      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveAttribute('data-shape', 'square');
    });

    it('TC-V103: src가 을 core 결과 치다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ src: '/avatar.jpg' });

      render(Avatar, {
        props: { src: '/avatar.jpg' },
        attrs: { 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-has-image', String(coreAttrs['data-has-image']));
    });

    it('TC-V104: src가 을 core 결과 치다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      render(Avatar, {
        attrs: { 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(coreAttrs['data-has-image']).toBeUndefined();
      expect(avatar).not.toHaveAttribute('data-has-image');
    });

    it('TC-V105: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        size: 'xl' as const,
        shape: 'circle' as const,
        src: '/img.jpg',
      };
      const coreAttrs = AvatarDef.mapPropsToAttrs(props);

      render(Avatar, {
        props,
        attrs: { 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveAttribute('data-has-image', 'true');
    });

    it('TC-V106: size: xs가 core 결과 치다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'xs' });

      render(Avatar, {
        props: { size: 'xs' },
        attrs: { 'aria-label': 'XS avatar' },
      });
      const avatar = screen.getByLabelText('XS avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V107: size: smcore 결과 치다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'sm' });

      render(Avatar, {
        props: { size: 'sm' },
        attrs: { 'aria-label': 'SM avatar' },
      });
      const avatar = screen.getByLabelText('SM avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V108: size: xlcore 결과 치다', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'xl' });

      render(Avatar, {
        props: { size: 'xl' },
        attrs: { 'aria-label': 'XL avatar' },
      });
      const avatar = screen.getByLabelText('XL avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(Avatar, {
        slots: { default: 'AB' },
        attrs: { 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveTextContent('AB');
    });

    it('TC-V301: class가 병합된다', () => {
      render(Avatar, {
        attrs: { class: 'custom-class', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label이 적용된다', () => {
      render(Avatar, {
        attrs: { 'aria-label': 'User profile' },
      });
      expect(screen.getByLabelText('User profile')).toBeInTheDocument();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(Avatar, {
        attrs: { class: 'custom', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(Avatar, {
        attrs: { 'data-testid': 'user-avatar', 'aria-label': 'User avatar' },
      });
      expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      render(Avatar, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      render(Avatar, {
        props: { shape: 'square' },
        attrs: { 'data-shape': 'custom', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-shape', 'square');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      render(Avatar, {
        props: { src: '/avatar.jpg' },
        attrs: { 'data-has-image': 'false', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-has-image', 'true');
    });

    it('TC-O180: style 속성 전달 적용', () => {
      render(Avatar, {
        attrs: { style: 'margin-top: 8px;', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(Avatar, {
        attrs: { id: 'user-avatar', 'aria-label': 'User avatar' },
      });
      expect(screen.getByLabelText('User avatar')).toHaveAttribute('id', 'user-avatar');
    });

    it('TC-O140: aria-describedby 성 달 용', () => {
      render(Avatar, {
        attrs: { 'aria-describedby': 'avatar-desc', 'aria-label': 'User avatar' },
      });
      expect(screen.getByLabelText('User avatar')).toHaveAttribute('aria-describedby', 'avatar-desc');
    });
  });
});
