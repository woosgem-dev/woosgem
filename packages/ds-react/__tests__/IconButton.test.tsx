import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconButton } from '@woosgem-dev/react';
import { IconButton as IconButtonDef } from '@woosgem-dev/core';

describe('IconButton', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({});

      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(btn).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ variant: 'outline' });

      render(<IconButton variant="outline" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-R102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ color: 'danger' });

      render(<IconButton color="danger" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-R103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ size: 'lg' });

      render(<IconButton size="lg" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R104: shape prop이 core 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ shape: 'circle' });

      render(<IconButton shape="circle" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(btn).toHaveAttribute('data-shape', 'circle');
    });

    it('TC-R105: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'ghost' as const,
        color: 'secondary' as const,
        size: 'sm' as const,
        shape: 'circle' as const,
      };
      const coreAttrs = IconButtonDef.mapPropsToAttrs(props);

      render(
        <IconButton variant="ghost" color="secondary" size="sm" shape="circle" aria-label="Icon">
          X
        </IconButton>
      );
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
    });

    it('TC-C110: variant: filled가 적용된다', () => {
      render(<IconButton variant="filled" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-C111: variant: outline이 적용된다', () => {
      render(<IconButton variant="outline" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C112: variant: ghost가 적용된다', () => {
      render(<IconButton variant="ghost" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'ghost');
    });

    it('TC-C130: size: xs가 적용된다', () => {
      render(<IconButton size="xs" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'xs');
    });

    it('TC-C140: shape: square가 적용된다', () => {
      render(<IconButton shape="square" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'square');
    });

    it('TC-C141: shape: circle이 적용된다', () => {
      render(<IconButton shape="circle" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'circle');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-R200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<IconButton onClick={handleClick} aria-label="Click">X</IconButton>);
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled 상태에서 onClick 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <IconButton onClick={handleClick} disabled aria-label="Disabled">
          X
        </IconButton>
      );
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-R202: 여러 번 클릭 시 매번 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<IconButton onClick={handleClick} aria-label="Click">X</IconButton>);
      const btn = screen.getByRole('button');

      await user.click(btn);
      await user.click(btn);
      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('React 전용 props', () => {
    it('TC-R300: children이 렌더링된다', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      expect(screen.getByRole('button')).toHaveTextContent('X');
    });

    it('TC-R301: children이 렌더링된다', () => {
      render(
        <IconButton aria-label="Search">
          <svg data-testid="icon">icon</svg>
        </IconButton>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('TC-R302: className이 병합된다', () => {
      render(<IconButton className="custom-class" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('custom-class');
    });

    it('TC-R303: type prop이 적용된다', () => {
      render(<IconButton type="submit" aria-label="Submit">X</IconButton>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-R304: type 미명시 시 기본값 설정된다', () => {
      // IconButton은 기본 type을 지정하지 않음 (Button과 다름)
      render(<IconButton aria-label="Icon">X</IconButton>);
      expect(screen.getByRole('button')).not.toHaveAttribute('type');
    });

    it('TC-R306: aria-label이 적용된다', () => {
      render(<IconButton aria-label="Close">X</IconButton>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
    });

    it('TC-R308: disabled prop이 적용된다', () => {
      render(<IconButton disabled aria-label="Disabled">X</IconButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<IconButton className="custom" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('custom');
    });

    it('TC-O101: className 여러 개 추가', () => {
      render(<IconButton className="a b c" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('a');
      expect(btn).toHaveClass('b');
      expect(btn).toHaveClass('c');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<IconButton style={{ marginTop: 8 }} aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<IconButton data-testid="close-btn" aria-label="Close">X</IconButton>);
      expect(screen.getByTestId('close-btn')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 적용', () => {
      render(<IconButton aria-label="Close">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('aria-label', 'Close');
    });

    it('TC-O141: aria-pressed 적용', () => {
      render(<IconButton aria-pressed="true" aria-label="Toggle">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('aria-pressed', 'true');
    });

    it('TC-O142: aria-expanded 적용', () => {
      render(<IconButton aria-expanded="false" aria-label="Expand">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });

    it('TC-O160: disabled=true 명시 적용', () => {
      render(<IconButton disabled aria-label="Disabled">X</IconButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(<IconButton id="my-icon-btn" aria-label="Icon">X</IconButton>);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-icon-btn');
    });

    it('TC-O180: style prop 전달 적용', () => {
      render(
        <IconButton style={{ marginTop: 8, backgroundColor: 'blue' }} aria-label="Icon">
          X
        </IconButton>
      );
      const btn = screen.getByRole('button');

      expect(btn).toHaveStyle({ marginTop: '8px' });
      expect(btn).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<IconButton data-variant="custom" variant="outline" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<IconButton data-color="custom" color="danger" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O132: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<IconButton data-size="custom" size="lg" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O133: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<IconButton data-shape="custom" shape="circle" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'circle');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 filled이다', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-C011: color 기본값 primary이다', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: size 기본값 md이다', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'md');
    });

    it('TC-C013: shape 기본값 square이다', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'square');
    });

    it('TC-D100: type 미명시 시 기본값 설정된다', () => {
      // IconButton은 기본 type을 지정하지 않음
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).not.toHaveAttribute('type');
    });

    it('TC-D101: type="button" 명시 시 button으로 렌더링', () => {
      render(<IconButton type="button" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('type', 'button');
    });
  });
});
