import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { Input } from '@woosgem/ds-vue';
import { Input as InputDef } from '@woosgem-dev/core';

describe('Input', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({});

      render(Input, { attrs: { 'aria-label': 'test input' } });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ variant: 'filled' });

      render(Input, {
        props: { variant: 'filled' },
        attrs: { 'aria-label': 'filled input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(input).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-V102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ size: 'lg' });

      render(Input, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'large input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(input).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V103: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
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

    it('TC-V104: error prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true });

      render(Input, {
        props: { error: true },
        attrs: { 'aria-label': 'error input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-V105: success prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ success: true });

      render(Input, {
        props: { success: true },
        attrs: { 'aria-label': 'success input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(input).toHaveAttribute('data-state', 'success');
    });

    it('TC-V106: errorê°€ successë³´ë‹¤ ?°ì„ ?œìœ„ê°€ ?’ë‹¤', () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true, success: true });

      render(Input, {
        props: { error: true, success: true },
        attrs: { 'aria-label': 'error+success input' },
      });
      const input = screen.getByRole('textbox');

      expect(coreAttrs['data-state']).toBe('error');
      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-V107: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
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

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-V200: onInput ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
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

    it('TC-V201: onFocus ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
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

    it('TC-V202: onBlur ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
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

    it('TC-V203: disabled ?íƒœ?ì„œ ?…ë ¥???˜ì? ?ŠëŠ”??, async () => {
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

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: placeholderê°€ ?Œë”ë§ëœ??, () => {
      render(Input, {
        attrs: { placeholder: 'Enter text', 'aria-label': 'test input' },
      });
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('TC-V301: classê°€ ë³‘í•©?œë‹¤', () => {
      render(Input, {
        attrs: { class: 'custom-class', 'aria-label': 'test input' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('input');
      expect(input).toHaveClass('custom-class');
    });

    it('TC-V302: type prop???ìš©?œë‹¤', () => {
      render(Input, {
        attrs: { type: 'email', 'aria-label': 'email input' },
      });
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('TC-V303: name prop???ìš©?œë‹¤', () => {
      render(Input, {
        attrs: { name: 'email', 'aria-label': 'email input' },
      });
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(Input, {
        attrs: { class: 'custom', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveClass('input');
      expect(input).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(Input, {
        attrs: { 'data-testid': 'email-input', 'aria-label': 'test' },
      });
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Input, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Input, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Input, {
        props: { error: true },
        attrs: { 'data-state': 'custom', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-state', 'error');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Input, {
        attrs: { style: 'margin-top: 8px; width: 200px;', 'aria-label': 'test' },
      });
      const input = screen.getByRole('textbox');

      expect(input).toHaveStyle({ marginTop: '8px' });
      expect(input).toHaveStyle({ width: '200px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Input, {
        attrs: { id: 'my-input', 'aria-label': 'test' },
      });
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-input');
    });
  });
});
