import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { IconButton } from '@woosgem-dev/vue';
import { IconButton as IconButtonDef } from '@woosgem-dev/core';

describe('IconButton', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({});

      render(IconButton, {
        attrs: { 'aria-label': 'Search' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(btn).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ variant: 'outline' });

      render(IconButton, {
        props: { variant: 'outline' },
        attrs: { 'aria-label': 'Search' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-V102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ color: 'danger' });

      render(IconButton, {
        props: { color: 'danger' },
        attrs: { 'aria-label': 'Delete' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-V103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ size: 'lg' });

      render(IconButton, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'Large button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V104: shape prop이 core 결과와 일치한다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ shape: 'circle' });

      render(IconButton, {
        props: { shape: 'circle' },
        attrs: { 'aria-label': 'Circle button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(btn).toHaveAttribute('data-shape', 'circle');
    });

    it('TC-V105: variant: ghost가 core 결과 치다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ variant: 'ghost' });

      render(IconButton, {
        props: { variant: 'ghost' },
        attrs: { 'aria-label': 'Ghost button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V106: color: secondary가 core 결과 치다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ color: 'secondary' });

      render(IconButton, {
        props: { color: 'secondary' },
        attrs: { 'aria-label': 'Secondary button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V107: size: xs가 core 결과 치다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ size: 'xs' });

      render(IconButton, {
        props: { size: 'xs' },
        attrs: { 'aria-label': 'XS button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V108: size: smcore 결과 치다', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ size: 'sm' });

      render(IconButton, {
        props: { size: 'sm' },
        attrs: { 'aria-label': 'SM button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V109: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'ghost' as const,
        color: 'secondary' as const,
        size: 'sm' as const,
        shape: 'circle' as const,
      };
      const coreAttrs = IconButtonDef.mapPropsToAttrs(props);

      render(IconButton, {
        props,
        attrs: { 'aria-label': 'Complex button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-V200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(IconButton, {
        props: { onClick: handleClick },
        attrs: { 'aria-label': 'Click me' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-V201: disabled 상태에서 onClick이 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(IconButton, {
        attrs: { 'aria-label': 'Disabled', disabled: true, onClick: handleClick },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-V202: 여러 번 클릭 시 매번 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(IconButton, {
        props: { onClick: handleClick },
        attrs: { 'aria-label': 'Click multiple' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);
      await user.click(btn);
      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(IconButton, {
        attrs: { 'aria-label': 'Search' },
        slots: { default: 'SearchIcon' },
      });
      expect(screen.getByRole('button')).toHaveTextContent('SearchIcon');
    });

    it('TC-V301: class가 병합된다', () => {
      render(IconButton, {
        attrs: { class: 'custom-class', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('custom-class');
    });

    it('TC-V302: type prop이 적용된다', () => {
      render(IconButton, {
        attrs: { type: 'submit', 'aria-label': 'Submit' },
        slots: { default: 'Icon' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-V303: aria-label이 적용된다', () => {
      render(IconButton, {
        attrs: { 'aria-label': 'Close dialog' },
        slots: { default: 'X' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });

    it('TC-V304: disabled 성 적용된다', () => {
      render(IconButton, {
        attrs: { disabled: true, 'aria-label': 'Disabled' },
        slots: { default: 'Icon' },
      });
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(IconButton, {
        attrs: { class: 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(IconButton, {
        attrs: { 'data-testid': 'close-btn', 'aria-label': 'Close' },
        slots: { default: 'X' },
      });
      expect(screen.getByTestId('close-btn')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      render(IconButton, {
        props: { variant: 'outline' },
        attrs: { 'data-variant': 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      render(IconButton, {
        props: { color: 'danger' },
        attrs: { 'data-color': 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      render(IconButton, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O203: 보호 속성 $1 오버라이드 차단', () => {
      render(IconButton, {
        props: { shape: 'circle' },
        attrs: { 'data-shape': 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'circle');
    });

    it('TC-O180: style 속성 전달 적용', () => {
      render(IconButton, {
        attrs: { style: 'margin-top: 8px;', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(IconButton, {
        attrs: { id: 'my-icon-btn', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-icon-btn');
    });

    it('TC-O140: aria-describedby 성 달 용', () => {
      render(IconButton, {
        attrs: { 'aria-describedby': 'btn-desc', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'btn-desc');
    });
  });
});
