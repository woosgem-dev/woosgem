import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@woosgem/ds-react';
import { Input as InputDef } from '@woosgem-dev/core';

describe('Input', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({});

      render(<Input aria-label="test input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Input variant="filled" aria-label="filled input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-R102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ size: 'lg' });

      render(<Input size="lg" aria-label="large input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R103: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ disabled: true });

      render(<Input disabled aria-label="disabled input" />);
      const input = screen.getByRole('textbox');

      // Core??data-state='disabled' ?¬ìš©
      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'disabled');
      expect(input).toBeDisabled();
    });

    it('TC-R104: error prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true });

      render(<Input error aria-label="error input" />);
      const input = screen.getByRole('textbox');

      // Core??data-state='error' ?¬ìš©
      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-R105: success prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ success: true });

      render(<Input success aria-label="success input" />);
      const input = screen.getByRole('textbox');

      // Core??data-state='success' ?¬ìš©
      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'success');
    });

    it('TC-R106: errorê°€ successë³´ë‹¤ ?°ì„ ?œìœ„ê°€ ?’ë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true, success: true });

      render(<Input error success aria-label="error+success input" />);
      const input = screen.getByRole('textbox');

      // error > success > disabled ?°ì„ ?œìœ„
      expect(coreAttrs['data-state']).toBe('error');
      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-R107: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
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

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-R200: onChange ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Input onChange={handleChange} aria-label="test input" />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'hello');

      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('hello');
    });

    it('TC-R201: onFocus ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(<Input onFocus={handleFocus} aria-label="test input" />);
      const input = screen.getByRole('textbox');

      await user.click(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('TC-R202: onBlur ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      render(<Input onBlur={handleBlur} aria-label="test input" />);
      const input = screen.getByRole('textbox');

      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('TC-R203: disabled ?íƒœ?ì„œ ?…ë ¥???˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Input onChange={handleChange} disabled aria-label="disabled input" />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'hello');

      expect(handleChange).not.toHaveBeenCalled();
      expect(input).toHaveValue('');
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R300: placeholderê°€ ?Œë”ë§ëœ??, () => {
      render(<Input placeholder="Enter text" aria-label="test input" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('TC-R301: valueê°€ ?ìš©?œë‹¤', () => {
      render(<Input value="initial" onChange={() => {}} aria-label="test input" />);
      expect(screen.getByRole('textbox')).toHaveValue('initial');
    });

    it('TC-R302: defaultValueê°€ ?ìš©?œë‹¤', () => {
      render(<Input defaultValue="default" aria-label="test input" />);
      expect(screen.getByRole('textbox')).toHaveValue('default');
    });

    it('TC-R303: className??ë³‘í•©?œë‹¤', () => {
      render(<Input className="custom-class" aria-label="test input" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('input');
      expect(input).toHaveClass('custom-class');
    });

    it('TC-R304: type prop???ìš©?œë‹¤', () => {
      render(<Input type="email" aria-label="email input" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('TC-R305: name prop???ìš©?œë‹¤', () => {
      render(<Input name="email" aria-label="email input" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email');
    });

    it('TC-R306: aria-describedbyê°€ ?ìš©?œë‹¤', () => {
      render(<Input aria-label="test input" aria-describedby="helper-text" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'helper-text');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Input className="custom" aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('input');
      expect(input).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Input data-testid="email-input" aria-label="test" />);
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Input id="my-input" aria-label="test" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-input');
    });

    it('TC-O180: style prop ?„ë‹¬ ?ˆìš©', () => {
      render(<Input style={{ marginTop: 8, width: 200 }} aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveStyle({ marginTop: '8px' });
      expect(input).toHaveStyle({ width: '200px' });
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Input data-variant="custom" variant="filled" aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Input data-size="custom" size="lg" aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Input data-state="custom" error aria-label="test" />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', 'error');
    });
  });
});
