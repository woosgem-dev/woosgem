import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '@woosgem-dev/react';
import { Textarea as TextareaDef } from '@woosgem-dev/core';

describe('Textarea', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({});

      render(<Textarea data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(textarea).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(textarea).toHaveAttribute('data-resize', coreAttrs['data-resize']);
      expect(textarea).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Textarea variant="filled" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-R102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ size: 'lg' });

      render(<Textarea size="lg" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ resize: 'both' });

      render(<Textarea resize="both" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-resize', coreAttrs['data-resize']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outline이 적용된다', () => {
      render(<Textarea variant="outline" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C111: variant: filled가 적용된다', () => {
      render(<Textarea variant="filled" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-variant', 'filled');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      render(<Textarea size="sm" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      render(<Textarea size="md" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      render(<Textarea size="lg" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Resize 변형', () => {
    it('TC-C130: size: none가 적용된다', () => {
      render(<Textarea resize="none" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'none');
    });

    it('TC-C131: size: vertical가 적용된다', () => {
      render(<Textarea resize="vertical" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'vertical');
    });

    it('TC-C132: size: horizontal가 적용된다', () => {
      render(<Textarea resize="horizontal" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'horizontal');
    });

    it('TC-C133: size: both가 적용된다', () => {
      render(<Textarea resize="both" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'both');
    });
  });

  describe('상태 변경', () => {
    it('TC-S100: disabled 상태가 적용된다', () => {
      render(<Textarea disabled data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-state', 'disabled');
      expect(textarea).toBeDisabled();
    });

    it('TC-S101: error 상태가 적용된다', () => {
      render(<Textarea error data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-state', 'error');
      expect(textarea).toHaveAttribute('aria-invalid', 'true');
    });

    it('TC-S102: disabled가 error보다 우선한다', () => {
      render(<Textarea disabled error data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-state', 'disabled');
      expect(textarea).toBeDisabled();
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 outline이다', () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C011: size 기본값 md이다', () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C012: resize 기본값 vertical이다', () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'vertical');
    });
  });

  describe('접근성', () => {
    it('TC-A100: error 시 aria-invalid="true"가 적용된다', () => {
      render(<Textarea error data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('aria-invalid', 'true');
    });

    it('TC-A101: error가 없으면 aria-invalid가 적용되지 않는다', () => {
      render(<Textarea data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).not.toHaveAttribute('aria-invalid');
    });

    it('TC-A102: disabled 시 disabled 속성이 적용된다', () => {
      render(<Textarea disabled data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toBeDisabled();
    });

    it('TC-A103: aria-describedby가 전달된다', () => {
      render(<Textarea aria-describedby="help-text" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('aria-describedby', 'help-text');
    });

    it('TC-A104: aria-required가 전달된다', () => {
      render(<Textarea aria-required="true" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: placeholder가 적용된다', () => {
      render(<Textarea placeholder="Enter text..." data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('placeholder', 'Enter text...');
    });

    it('TC-R201: rows가 적용된다', () => {
      render(<Textarea rows={5} data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('rows', '5');
    });

    it('TC-R202: value가 적용된다', () => {
      render(<Textarea defaultValue="Hello" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveValue('Hello');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-O150: onChange 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Textarea onChange={handleChange} data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      await user.type(textarea, 'Hello');

      expect(handleChange).toHaveBeenCalled();
    });

    it('TC-O151: onFocus 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(<Textarea onFocus={handleFocus} data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      await user.click(textarea);

      expect(handleFocus).toHaveBeenCalled();
    });

    it('TC-O152: disabled 상태에서 onChange가 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Textarea disabled onChange={handleChange} data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      await user.type(textarea, 'Hello');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Textarea className="custom-textarea" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveClass('textarea');
      expect(textarea).toHaveClass('custom-textarea');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<Textarea style={{ minHeight: 100 }} data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveStyle({ minHeight: '100px' });
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Textarea data-variant="custom" variant="filled" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O160: id 속성 전달 적용', () => {
      render(<Textarea id="description" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('id', 'description');
    });

    it('TC-O161: aria-label 적용', () => {
      render(<Textarea aria-label="Description" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('aria-label', 'Description');
    });

    it('TC-O162: aria-describedby 속성 전달 적용', () => {
      render(<Textarea aria-describedby="error-msg" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('aria-describedby', 'error-msg');
    });
  });
});
