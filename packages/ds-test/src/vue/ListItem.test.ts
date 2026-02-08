import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { ListItem } from '@woosgem/ds-vue';
import { ListItem as ListItemDef } from '@woosgem-dev/core';

describe('ListItem', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({});

      render(ListItem, { slots: { default: 'Item' } });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ variant: 'interactive' });

      render(ListItem, {
        props: { variant: 'interactive' },
        slots: { default: 'Interactive' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveAttribute('data-variant', 'interactive');
    });

    it('TC-V102: selected prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true });

      render(ListItem, {
        props: { selected: true },
        slots: { default: 'Selected' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-V103: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ disabled: true });

      render(ListItem, {
        props: { disabled: true },
        slots: { default: 'Disabled' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'disabled');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('TC-V104: divider prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ divider: true });

      render(ListItem, {
        props: { divider: true },
        slots: { default: 'Divider' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-divider', String(coreAttrs['data-divider']));
    });

    it('TC-V105: selected + disabled ?™ì‹œ true ??selected ?°ì„ ', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(ListItem, {
        props: { selected: true, disabled: true },
        slots: { default: 'Both' },
      });
      const item = screen.getByRole('listitem');

      expect(coreAttrs['data-state']).toBe('selected');
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('TC-V106: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'interactive' as const,
        selected: true,
        divider: true,
      };
      const coreAttrs = ListItemDef.mapPropsToAttrs(props);

      render(ListItem, {
        props,
        slots: { default: 'Complex' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-divider', 'true');
    });

    it('TC-V107: variant: defaultê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ variant: 'default' });

      render(ListItem, {
        props: { variant: 'default' },
        slots: { default: 'Default' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V108: divider: false????data-dividerê°€ ?†ë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ divider: false });

      render(ListItem, {
        props: { divider: false },
        slots: { default: 'No divider' },
      });
      const item = screen.getByRole('listitem');

      expect(coreAttrs['data-divider']).toBeUndefined();
      expect(item).not.toHaveAttribute('data-divider');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-V200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(ListItem, {
        props: { onClick: handleClick },
        slots: { default: 'Click me' },
      });
      const item = screen.getByRole('listitem');

      await user.click(item);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-V201: disabled ?íƒœ?ì„œ??onClick???¸ì¶œ?œë‹¤ (li??disabled ë¯¸ì???', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(ListItem, {
        props: { onClick: handleClick, disabled: true },
        slots: { default: 'Disabled' },
      });
      const item = screen.getByRole('listitem');

      await user.click(item);

      // li ?”ì†Œ???¤ì´?°ë¸Œ disabledë¥?ì§€?í•˜ì§€ ?Šìœ¼ë¯€ë¡??´ë¦­ ?´ë²¤?¸ê? ë°œìƒ??
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: slot???Œë”ë§ëœ??, () => {
      render(ListItem, { slots: { default: 'Hello World' } });
      expect(screen.getByRole('listitem')).toHaveTextContent('Hello World');
    });

    it('TC-V301: classê°€ ë³‘í•©?œë‹¤', () => {
      render(ListItem, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('custom-class');
    });

    // Note: role?€ PROTECTED_ATTRS???¬í•¨?˜ì–´ ?ˆì–´ ?„í„°ë§ë¨
    // ListItem?€ ê¸°ë³¸?ìœ¼ë¡?li ?”ì†Œ?´ë?ë¡?listitem role??ê°€ì§?
    it('TC-V302: listitem role??ê¸°ë³¸ ?ìš©?œë‹¤', () => {
      render(ListItem, {
        slots: { default: 'Option' },
      });
      expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

    it('TC-V303: aria-label???ìš©?œë‹¤', () => {
      render(ListItem, {
        attrs: { 'aria-label': 'Menu item' },
        slots: { default: 'Item' },
      });
      expect(screen.getByLabelText('Menu item')).toBeInTheDocument();
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(ListItem, {
        attrs: { class: 'custom' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(ListItem, {
        attrs: { 'data-testid': 'list-item-1' },
        slots: { default: 'Item' },
      });
      expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(ListItem, {
        props: { variant: 'interactive' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', 'interactive');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(ListItem, {
        props: { selected: true },
        attrs: { 'data-state': 'custom' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-divider ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(ListItem, {
        props: { divider: true },
        attrs: { 'data-divider': 'false' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-divider', 'true');
    });

    it('TC-O203: ë³´í˜¸ ?ì„± aria-selected ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(ListItem, {
        props: { selected: true },
        attrs: { 'aria-selected': 'false' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-O204: ë³´í˜¸ ?ì„± aria-disabled ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(ListItem, {
        props: { disabled: true },
        attrs: { 'aria-disabled': 'false' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(ListItem, {
        attrs: { style: 'margin-top: 8px;' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(ListItem, {
        attrs: { id: 'my-item' },
        slots: { default: 'Item' },
      });
      expect(screen.getByRole('listitem')).toHaveAttribute('id', 'my-item');
    });
  });
});
