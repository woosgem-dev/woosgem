import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { Tab } from '@woosgem/ds-vue';
import { Tab as TabDef } from '@woosgem-dev/core';

describe('Tab', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({});

      render(Tab, { slots: { default: 'Home' } });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('role', coreAttrs.role);
      expect(tab).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ variant: 'filled' });

      render(Tab, {
        props: { variant: 'filled' },
        slots: { default: 'Filled' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-V102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ size: 'lg' });

      render(Tab, {
        props: { size: 'lg' },
        slots: { default: 'Large' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V103: selected prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true });

      render(Tab, {
        props: { selected: true },
        slots: { default: 'Selected' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-V104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ disabled: true });

      render(Tab, {
        props: { disabled: true },
        slots: { default: 'Disabled' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(tab).toHaveAttribute('data-state', 'disabled');
      expect(tab).toBeDisabled();
    });

    it('TC-V105: fullWidth prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ fullWidth: true });

      render(Tab, {
        props: { fullWidth: true },
        slots: { default: 'Full Width' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-V106: role?€ ??ƒ tab?´ë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({});

      render(Tab, { slots: { default: 'Tab' } });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('role', coreAttrs.role);
      expect(tab).toHaveAttribute('role', 'tab');
    });

    it('TC-V107: selected + disabled ?™ì‹œ true ??selected ?°ì„ ', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(Tab, {
        props: { selected: true, disabled: true },
        slots: { default: 'Both' },
      });
      const tab = screen.getByRole('tab');

      expect(coreAttrs['data-state']).toBe('selected');
      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-V108: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'filled' as const,
        size: 'sm' as const,
        selected: true,
      };
      const coreAttrs = TabDef.mapPropsToAttrs(props);

      render(Tab, {
        props,
        slots: { default: 'Complex' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-V200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Tab, {
        props: { onClick: handleClick },
        slots: { default: 'Click me' },
      });
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-V201: disabled ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Tab, {
        props: { onClick: handleClick, disabled: true },
        slots: { default: 'Disabled' },
      });
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-V202: selected ?íƒœ?ì„œ onClick???¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Tab, {
        props: { onClick: handleClick, selected: true },
        slots: { default: 'Selected' },
      });
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: slot???Œë”ë§ëœ??, () => {
      render(Tab, { slots: { default: 'Home' } });
      expect(screen.getByRole('tab')).toHaveTextContent('Home');
    });

    it('TC-V301: classê°€ ë³‘í•©?œë‹¤', () => {
      render(Tab, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('custom-class');
    });

    it('TC-V302: type prop???ìš©?œë‹¤', () => {
      render(Tab, {
        attrs: { type: 'submit' },
        slots: { default: 'Submit' },
      });
      expect(screen.getByRole('tab')).toHaveAttribute('type', 'submit');
    });

    it('TC-V303: aria-label???ìš©?œë‹¤', () => {
      render(Tab, {
        attrs: { 'aria-label': 'Close tab' },
        slots: { default: 'X' },
      });
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Close tab');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(Tab, {
        attrs: { class: 'custom' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(Tab, {
        attrs: { 'data-testid': 'home-tab' },
        slots: { default: 'Home' },
      });
      expect(screen.getByTestId('home-tab')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Tab, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Tab, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Tab, {
        props: { selected: true },
        attrs: { 'data-state': 'custom' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O203: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Tab, {
        attrs: { role: 'button' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('role', 'tab');
    });

    it('TC-O204: ë³´í˜¸ ?ì„± aria-selected ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Tab, {
        props: { selected: true },
        attrs: { 'aria-selected': 'false' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Tab, {
        attrs: { style: 'margin-top: 8px;' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Tab, {
        attrs: { id: 'my-tab' },
        slots: { default: 'Tab' },
      });
      expect(screen.getByRole('tab')).toHaveAttribute('id', 'my-tab');
    });

    it('TC-O140: aria-controls ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Tab, {
        attrs: { 'aria-controls': 'panel-1' },
        slots: { default: 'Tab' },
      });
      expect(screen.getByRole('tab')).toHaveAttribute('aria-controls', 'panel-1');
    });
  });
});
