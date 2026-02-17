import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@woosgem-dev/react';
import { Input as InputDef } from '@woosgem-dev/core';

describe('Input', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({});

      render(<Input aria-label="test input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Input variant="filled" aria-label="filled input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-R102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ size: 'lg' });

      render(<Input size="lg" aria-label="large input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R103: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ disabled: true });

      render(<Input disabled aria-label="disabled input" />);
      const input = screen.getByRole('textbox');

      // Core는 data-state='disabled' 적용
      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'disabled');
      expect(input).toBeDisabled();
    });

    it('TC-R104: error prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true });

      render(<Input error aria-label="error input" />);
      const input = screen.getByRole('textbox');

      // Core는 data-state='error' 적용
      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-R105: success prop이 core 결과와 일치한다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ success: true });

      render(<Input success aria-label="success input" />);
      const input = screen.getByRole('textbox');

      // Core는 data-state='success' 적용
      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'success');
    });

    it('TC-R106: error가 success보다 우선순위가 높다', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true, success: true });

      render(<Input error success aria-label="error+success input" />);
      const input = screen.getByRole('textbox');

      // error > success > disabled 우선순위
      expect(coreAttrs['data-state']).toBe('error');
      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-R107: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'filled' as const,
        size: 'sm' as const,
        error: true,
      };
      const coreAttrs = InputDef.mapPropsToAttrs(props);

      render(
        <Input variant="filled" size="sm" error aria-label="complex input" />
      );
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-R200: onChange 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Input onChange={handleChange} aria-label="test input" />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'hello');

      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('hello');
    });

    it('TC-R201: onFocus 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(<Input onFocus={handleFocus} aria-label="test input" />);
      const input = screen.getByRole('textbox');

      await user.click(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('TC-R202: onBlur 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      render(<Input onBlur={handleBlur} aria-label="test input" />);
      const input = screen.getByRole('textbox');

      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('TC-R203: disabled 상태에서 입력되지 않는다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Input onChange={handleChange} disabled aria-label="disabled input" />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'hello');

      expect(handleChange).not.toHaveBeenCalled();
      expect(input).toHaveValue('');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R300: placeholder가 렌더링된다', () => {
      render(<Input placeholder="Enter text" aria-label="test input" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('TC-R301: value가 적용된다', () => {
      render(<Input value="initial" onChange={() => {}} aria-label="test input" />);
      expect(screen.getByRole('textbox')).toHaveValue('initial');
    });

    it('TC-R302: defaultValue가 적용된다', () => {
      render(<Input defaultValue="default" aria-label="test input" />);
      expect(screen.getByRole('textbox')).toHaveValue('default');
    });

    it('TC-R303: className이 병합된다', () => {
      render(<Input className="custom-class" aria-label="test input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('input');
      expect(input).toHaveClass('custom-class');
    });

    it('TC-R304: type prop이 적용된다', () => {
      render(<Input type="email" aria-label="email input" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('TC-R305: name prop이 적용된다', () => {
      render(<Input name="email" aria-label="email input" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email');
    });

    it('TC-R306: aria-describedby가 적용된다', () => {
      render(<Input aria-label="test input" aria-describedby="helper-text" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'helper-text');
    });
  });

  describe('접근성', () => {
    it('TC-A100: error 시 aria-invalid="true"가 적용된다', () => {
      render(<Input error aria-label="error input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('TC-A101: error가 없으면 aria-invalid가 적용되지 않는다', () => {
      render(<Input aria-label="normal input" />);
      const input = screen.getByRole('textbox');

      expect(input).not.toHaveAttribute('aria-invalid');
    });

    it('TC-A102: disabled 시 disabled 속성이 적용된다', () => {
      render(<Input disabled aria-label="disabled input" />);
      const input = screen.getByRole('textbox');

      expect(input).toBeDisabled();
    });

    it('TC-A103: aria-describedby가 전달된다', () => {
      render(<Input aria-label="input" aria-describedby="help-text" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('aria-describedby', 'help-text');
    });

    it('TC-A104: aria-required가 전달된다', () => {
      render(<Input aria-label="input" aria-required="true" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Input className="custom" aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('input');
      expect(input).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Input data-testid="email-input" aria-label="test" />);
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(<Input id="my-input" aria-label="test" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-input');
    });

    it('TC-O180: style prop 전달 적용', () => {
      render(<Input style={{ marginTop: 8, width: 200 }} aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveStyle({ marginTop: '8px' });
      expect(input).toHaveStyle({ width: '200px' });
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Input data-variant="custom" variant="filled" aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Input data-size="custom" size="lg" aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Input data-state="custom" error aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', 'error');
    });
  });
});
