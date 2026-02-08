import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ListItem } from '@woosgem/ds-react';
import { ListItem as ListItemDef } from '@woosgem-dev/core';

describe('ListItem', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({});

      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ variant: 'interactive' });

      render(<ListItem variant="interactive">Interactive</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveAttribute('data-variant', 'interactive');
    });

    it('TC-R102: selected prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true });

      render(<ListItem selected>Selected</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-R103: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ disabled: true });

      render(<ListItem disabled>Disabled</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'disabled');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('TC-R104: divider prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ divider: true });

      render(<ListItem divider>With Divider</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-divider', String(coreAttrs['data-divider']));
    });

    it('TC-R105: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'interactive' as const,
        selected: true,
        divider: true,
      };
      const coreAttrs = ListItemDef.mapPropsToAttrs(props);

      render(
        <ListItem variant="interactive" selected divider>
          Complex
        </ListItem>
      );
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-divider', 'true');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-R106: selected + disabled ?™ì‹œ true????selected ?°ì„ ', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(
        <ListItem selected disabled>
          Both
        </ListItem>
      );
      const item = document.querySelector('.list-item');

      expect(coreAttrs['data-state']).toBe('selected');
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-R200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<ListItem onClick={handleClick}>Click me</ListItem>);
      const item = document.querySelector('.list-item');

      await user.click(item!);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled ?íƒœ?ì„œ??onClick???¸ì¶œ?œë‹¤ (li??disabled ë¯¸ì???', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <ListItem onClick={handleClick} disabled>
          Disabled
        </ListItem>
      );
      const item = document.querySelector('.list-item');

      await user.click(item!);

      // li ?”ì†Œ???¤ì´?°ë¸Œ disabledë¥?ì§€?í•˜ì§€ ?Šìœ¼ë¯€ë¡??´ë¦­??ë°œìƒ
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R202: ?¬ëŸ¬ ë²??´ë¦­ ??ë§¤ë²ˆ ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<ListItem onClick={handleClick}>Click me</ListItem>);
      const item = document.querySelector('.list-item');

      await user.click(item!);
      await user.click(item!);
      await user.click(item!);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R300: children???Œë”ë§ëœ??, () => {
      render(<ListItem>Hello</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveTextContent('Hello');
    });

    it('TC-R301: JSX children???Œë”ë§ëœ??, () => {
      render(
        <ListItem>
          <span data-testid="icon">Icon</span>
          Text
        </ListItem>
      );

      expect(screen.getByTestId('icon')).toHaveTextContent('Icon');
    });

    it('TC-R302: className??ë³‘í•©?œë‹¤', () => {
      render(<ListItem className="custom-class">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('custom-class');
    });

    it('TC-R303: role prop???ìš©?œë‹¤', () => {
      render(<ListItem role="option">Option</ListItem>);
      const item = screen.getByRole('option');

      expect(item).toBeInTheDocument();
    });

    it('TC-R304: aria-label???ìš©?œë‹¤', () => {
      render(<ListItem aria-label="Menu item">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-label', 'Menu item');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<ListItem className="custom">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('custom');
    });

    it('TC-O101: className ?¬ëŸ¬ ê°?ì¶”ê?', () => {
      render(<ListItem className="a b c">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('a');
      expect(item).toHaveClass('b');
      expect(item).toHaveClass('c');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<ListItem style={{ padding: 8 }}>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveStyle({ padding: '8px' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<ListItem data-testid="item-1">Item</ListItem>);
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?ˆìš©', () => {
      render(<ListItem aria-label="Menu item">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-label', 'Menu item');
    });

    it('TC-O141: aria-labelledby ?ˆìš©', () => {
      render(<ListItem aria-labelledby="label-id">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-labelledby', 'label-id');
    });

    it('TC-O143: aria-current ?ˆìš©', () => {
      render(<ListItem aria-current="page">Current</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-current', 'page');
    });

    it('TC-O160: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<ListItem id="my-item">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('id', 'my-item');
    });

    it('TC-O161: role ?ì„± ?ˆìš©', () => {
      render(<ListItem role="option">Option</ListItem>);
      const item = screen.getByRole('option');

      expect(item).toBeInTheDocument();
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<ListItem data-variant="custom" variant="interactive">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', 'interactive');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<ListItem data-state="custom" selected>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± data-divider ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<ListItem data-divider="custom" divider>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-divider', 'true');
    });

    it('TC-O133: ë³´í˜¸ ?ì„± aria-selected ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<ListItem aria-selected="false" selected>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-O134: ë³´í˜¸ ?ì„± aria-disabled ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<ListItem aria-disabled="false" disabled>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? default?´ë‹¤', () => {
      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', 'default');
    });

    it('TC-C011: selected ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).not.toHaveAttribute('data-state');
      expect(item).not.toHaveAttribute('aria-selected');
    });

    it('TC-C012: disabled ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).not.toHaveAttribute('aria-disabled');
    });

    it('TC-C013: divider ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).not.toHaveAttribute('data-divider');
    });
  });
});
