import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { Input } from '@woosgem-dev/vue';
import { Input as InputDef } from '@woosgem-dev/core';

describe('Input', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({});

      render(Input, { attrs: { 'aria-label': 'test input' } });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ variant: 'filled' });

      render(Input, {
        props: { variant: 'filled' },
        attrs: { 'aria-label': 'filled input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-V102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ size: 'lg' });

      render(Input, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'large input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V103: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ disabled: true });

      render(Input, {
        props: { disabled: true },
        attrs: { 'aria-label': 'disabled input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'disabled');
      expect(input).toBeDisabled();
    });

    it('TC-V104: error prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true });

      render(Input, {
        props: { error: true },
        attrs: { 'aria-label': 'error input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-V105: success prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ success: true });

      render(Input, {
        props: { success: true },
        attrs: { 'aria-label': 'success input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'success');
    });

    it('TC-V106: error가 success보다 우선순위가 높다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true, success: true });

      render(Input, {
        props: { error: true, success: true },
        attrs: { 'aria-label': 'error+success input' },
      });
      const input = screen.getByRole('textbox');

      expect(coreAttrs['data-state']).toBe('error');
      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-V107: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'filled' as const,
        size: 'sm' as const,
        error: true,
      };
      const coreAttrs = InputDef.mapPropsToAttrs(props);

      render(Input, {
        props,
        attrs: { 'aria-label': 'complex input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-V200: onInput 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleInput = vi.fn();

      render(Input, {
        props: { onInput: handleInput },
        attrs: { 'aria-label': 'test input' },
      });
      const input = screen.getByRole('textbox');

      await user.type(input, 'hello');

      expect(handleInput).toHaveBeenCalled();
    });

    it('TC-V201: onFocus 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(Input, {
        props: { onFocus: handleFocus },
        attrs: { 'aria-label': 'test input' },
      });
      const input = screen.getByRole('textbox');

      await user.click(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('TC-V202: onBlur 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      render(Input, {
        props: { onBlur: handleBlur },
        attrs: { 'aria-label': 'test input' },
      });
      const input = screen.getByRole('textbox');

      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('TC-V203: disabled 상태에서 입력이 되지 않는다', async () => {
      const user = userEvent.setup();
      const handleInput = vi.fn();

      render(Input, {
        props: { onInput: handleInput, disabled: true },
        attrs: { 'aria-label': 'disabled input' },
      });
      const input = screen.getByRole('textbox');

      await user.type(input, 'hello');

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: placeholder가 렌더링된다', () => {
      render(Input, {
        attrs: { placeholder: 'Enter text', 'aria-label': 'test input' },
      });
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('TC-V301: class가 병합된다', () => {
      render(Input, {
        attrs: { class: 'custom-class', 'aria-label': 'test input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('wg-input');
      expect(input).toHaveClass('custom-class');
    });

    it('TC-V302: type prop이 적용된다', () => {
      render(Input, {
        attrs: { type: 'email', 'aria-label': 'email input' },
      });
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('TC-V303: name prop 적용된다', () => {
      render(Input, {
        attrs: { name: 'email', 'aria-label': 'email input' },
      });
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email');
    });
  });

  describe('접근성', () => {
    it('TC-A100: error 시 aria-invalid="true"가 적용된다', () => {
      render(Input, {
        props: { error: true },
        attrs: { 'aria-label': 'error input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('TC-A101: error가 없으면 aria-invalid가 적용되지 않는다', () => {
      render(Input, {
        attrs: { 'aria-label': 'normal input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).not.toHaveAttribute('aria-invalid');
    });

    it('TC-A102: disabled 시 disabled 속성이 적용된다', () => {
      render(Input, {
        props: { disabled: true },
        attrs: { 'aria-label': 'disabled input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toBeDisabled();
    });

    it('TC-A103: aria-describedby가 전달된다', () => {
      render(Input, {
        attrs: { 'aria-label': 'input', 'aria-describedby': 'help-text' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('aria-describedby', 'help-text');
    });

    it('TC-A104: aria-required가 전달된다', () => {
      render(Input, {
        attrs: { 'aria-label': 'input', 'aria-required': 'true' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(Input, {
        attrs: { class: 'custom', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('wg-input');
      expect(input).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(Input, {
        attrs: { 'data-testid': 'email-input', 'aria-label': 'test' },
      });
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      render(Input, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      render(Input, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      render(Input, {
        props: { error: true },
        attrs: { 'data-state': 'custom', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-O180: style 속성 전달 적용', () => {
      render(Input, {
        attrs: { style: 'margin-top: 8px; width: 200px;', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveStyle({ marginTop: '8px' });
      expect(input).toHaveStyle({ width: '200px' });
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(Input, {
        attrs: { id: 'my-input', 'aria-label': 'test' },
      });
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-input');
    });
  });
});
