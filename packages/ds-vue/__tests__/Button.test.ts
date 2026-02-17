import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { Button } from '@woosgem-dev/vue';
import { Button as ButtonDef } from '@woosgem-dev/core';

describe('Button', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({});

      render(Button, { slots: { default: 'Click me' } });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ variant: 'outline' });

      render(Button, {
        props: { variant: 'outline' },
        slots: { default: 'Outline' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-V102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ color: 'danger' });

      render(Button, {
        props: { color: 'danger' },
        slots: { default: 'Danger' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-V103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ size: 'lg' });

      render(Button, {
        props: { size: 'lg' },
        slots: { default: 'Large' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ disabled: true });

      render(Button, {
        props: { disabled: true },
        slots: { default: 'Disabled' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(btn).toHaveAttribute('data-state', 'disabled');
      expect(btn).toBeDisabled();
    });

    it('TC-V105: loading prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ loading: true });

      render(Button, {
        props: { loading: true },
        slots: { default: 'Loading' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(btn).toHaveAttribute('data-state', 'loading');
      expect(btn).toBeDisabled();
    });

    it('TC-V106: fullWidth prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ fullWidth: true });

      render(Button, {
        props: { fullWidth: true },
        slots: { default: 'Full Width' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-V107: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'ghost' as const,
        color: 'secondary' as const,
        size: 'sm' as const,
        disabled: true,
      };
      const coreAttrs = ButtonDef.mapPropsToAttrs(props);

      render(Button, {
        props,
        slots: { default: 'Complex' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-state', coreAttrs['data-state']);
    });

    it('TC-V108: loading + disabled 동시 true 시 loading 우선', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ loading: true, disabled: true });

      render(Button, {
        props: { loading: true, disabled: true },
        slots: { default: 'Both' },
      });
      const btn = screen.getByRole('button');

      expect(coreAttrs['data-state']).toBe('loading');
      expect(btn).toHaveAttribute('data-state', 'loading');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-V200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Button, {
        props: { onClick: handleClick },
        slots: { default: 'Click me' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-V201: disabled 상태에서 onClick이 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Button, {
        props: { onClick: handleClick, disabled: true },
        slots: { default: 'Disabled' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-V202: loading 상태에서 onClick이 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Button, {
        props: { onClick: handleClick, loading: true },
        slots: { default: 'Loading' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(Button, { slots: { default: 'Hello World' } });
      expect(screen.getByRole('button')).toHaveTextContent('Hello World');
    });

    it('TC-V301: class가 병합된다', () => {
      render(Button, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('btn');
      expect(btn).toHaveClass('custom-class');
    });

    it('TC-V302: type prop이 적용된다', () => {
      render(Button, {
        attrs: { type: 'submit' },
        slots: { default: 'Submit' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-V303: aria-label이 적용된다', () => {
      render(Button, {
        attrs: { 'aria-label': 'Close dialog' },
        slots: { default: 'X' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(Button, {
        attrs: { class: 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('btn');
      expect(btn).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(Button, {
        attrs: { 'data-testid': 'submit-btn' },
        slots: { default: 'Submit' },
      });
      expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      render(Button, {
        props: { variant: 'outline' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      // 사용자의 data-variant="custom"은 무시하고 variant="outline"이 적용됨
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      render(Button, {
        props: { color: 'danger' },
        attrs: { 'data-color': 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      render(Button, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O203: 보호 속성 $1 오버라이드 차단', () => {
      render(Button, {
        props: { disabled: true },
        attrs: { 'data-state': 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-O180: style 속성 전달 적용', () => {
      render(Button, {
        attrs: { style: 'margin-top: 8px; background-color: blue;' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(Button, {
        attrs: { id: 'my-btn' },
        slots: { default: 'Button' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-btn');
    });
  });
});
