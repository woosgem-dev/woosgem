import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { Button } from '@woosgem/ds-vue';
import { Button as ButtonDef } from '@woosgem-dev/core';

describe('Button', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({});

      render(Button, { slots: { default: 'Click me' } });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ variant: 'outline' });

      render(Button, {
        props: { variant: 'outline' },
        slots: { default: 'Outline' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-V102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ color: 'danger' });

      render(Button, {
        props: { color: 'danger' },
        slots: { default: 'Danger' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-V103: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ size: 'lg' });

      render(Button, {
        props: { size: 'lg' },
        slots: { default: 'Large' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
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

    it('TC-V105: loading prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
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

    it('TC-V106: fullWidth prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ fullWidth: true });

      render(Button, {
        props: { fullWidth: true },
        slots: { default: 'Full Width' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-V107: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
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

    it('TC-V108: loading + disabled ?™ì‹œ true ??loading ?°ì„ ', () => {
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

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-V200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
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

    it('TC-V201: disabled ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
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

    it('TC-V202: loading ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
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

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: slot???Œë”ë§ëœ??, () => {
      render(Button, { slots: { default: 'Hello World' } });
      expect(screen.getByRole('button')).toHaveTextContent('Hello World');
    });

    it('TC-V301: classê°€ ë³‘í•©?œë‹¤', () => {
      render(Button, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('btn');
      expect(btn).toHaveClass('custom-class');
    });

    it('TC-V302: type prop???ìš©?œë‹¤', () => {
      render(Button, {
        attrs: { type: 'submit' },
        slots: { default: 'Submit' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-V303: aria-label???ìš©?œë‹¤', () => {
      render(Button, {
        attrs: { 'aria-label': 'Close dialog' },
        slots: { default: 'X' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(Button, {
        attrs: { class: 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('btn');
      expect(btn).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(Button, {
        attrs: { 'data-testid': 'submit-btn' },
        slots: { default: 'Submit' },
      });
      expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Button, {
        props: { variant: 'outline' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      // ?¬ìš©?ì˜ data-variant="custom"??ë¬´ì‹œ?˜ê³  variant="outline"???ìš©??
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-color ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Button, {
        props: { color: 'danger' },
        attrs: { 'data-color': 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Button, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O203: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Button, {
        props: { disabled: true },
        attrs: { 'data-state': 'custom' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Button, {
        attrs: { style: 'margin-top: 8px; background-color: blue;' },
        slots: { default: 'Button' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Button, {
        attrs: { id: 'my-btn' },
        slots: { default: 'Button' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-btn');
    });
  });
});
