import { describe, it, expect } from 'vitest';
import {
  Menu,
  MenuItem,
  MenuDivider,
  MenuGroup,
  MenuSizes,
} from '@woosgem-dev/core';

describe('Menu Core', () => {
  describe('displayName', () => {
    it('should have displayName "Menu"', () => {
      expect(Menu.displayName).toBe('Menu');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Menu.defaultProps).toEqual({
        size: 'md',
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct size options', () => {
      expect(MenuSizes).toEqual(['sm', 'md', 'lg']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Menu.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'menu',
        'data-size': 'md',
        role: 'menu',
      });
    });

    it('should apply size prop', () => {
      for (const size of MenuSizes) {
        const attrs = Menu.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should use default values for undefined props', () => {
      const attrs = Menu.mapPropsToAttrs({ size: undefined });
      expect(attrs['data-size']).toBe('md');
    });

    it('should have role="menu"', () => {
      const attrs = Menu.mapPropsToAttrs({});
      expect(attrs.role).toBe('menu');
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Menu.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(Menu.template.slots).toEqual(['default']);
    });
  });
});

describe('MenuItem Core', () => {
  it('should have displayName "MenuItem"', () => {
    expect(MenuItem.displayName).toBe('MenuItem');
  });

  it('should have correct default props', () => {
    expect(MenuItem.defaultProps).toEqual({
      disabled: false,
      active: false,
      destructive: false,
    });
  });

  it('should return default attrs when no props provided', () => {
    const attrs = MenuItem.mapPropsToAttrs({});
    expect(attrs).toEqual({
      class: 'menu-item',
      type: 'button',
      role: 'menuitem',
      'data-state': undefined,
      'data-destructive': undefined,
      'aria-disabled': undefined,
      tabindex: '-1',
    });
  });

  it('should set data-state to "active" when active is true', () => {
    const attrs = MenuItem.mapPropsToAttrs({ active: true });
    expect(attrs['data-state']).toBe('active');
  });

  it('should set data-state to "disabled" when disabled is true', () => {
    const attrs = MenuItem.mapPropsToAttrs({ disabled: true });
    expect(attrs['data-state']).toBe('disabled');
  });

  it('should prioritize "active" over "disabled" when both are true', () => {
    const attrs = MenuItem.mapPropsToAttrs({ active: true, disabled: true });
    expect(attrs['data-state']).toBe('active');
  });

  it('should have no data-state when both are false', () => {
    const attrs = MenuItem.mapPropsToAttrs({ active: false, disabled: false });
    expect(attrs['data-state']).toBeUndefined();
  });

  it('should set data-destructive to true when destructive is true', () => {
    const attrs = MenuItem.mapPropsToAttrs({ destructive: true });
    expect(attrs['data-destructive']).toBe(true);
  });

  it('should set data-destructive to undefined when destructive is false', () => {
    const attrs = MenuItem.mapPropsToAttrs({ destructive: false });
    expect(attrs['data-destructive']).toBeUndefined();
  });

  it('should set aria-disabled to "true" when disabled is true', () => {
    const attrs = MenuItem.mapPropsToAttrs({ disabled: true });
    expect(attrs['aria-disabled']).toBe('true');
  });

  it('should have no aria-disabled when disabled is false', () => {
    const attrs = MenuItem.mapPropsToAttrs({ disabled: false });
    expect(attrs['aria-disabled']).toBeUndefined();
  });

  it('should have role="menuitem"', () => {
    const attrs = MenuItem.mapPropsToAttrs({});
    expect(attrs.role).toBe('menuitem');
  });

  it('should have tabindex="-1"', () => {
    const attrs = MenuItem.mapPropsToAttrs({});
    expect(attrs.tabindex).toBe('-1');
  });

  it('should use button tag', () => {
    expect(MenuItem.template.tag).toBe('button');
  });
});

describe('MenuDivider Core', () => {
  it('should have displayName "MenuDivider"', () => {
    expect(MenuDivider.displayName).toBe('MenuDivider');
  });

  it('should return correct attrs', () => {
    const attrs = MenuDivider.mapPropsToAttrs();
    expect(attrs).toEqual({
      class: 'menu-divider',
      role: 'separator',
    });
  });

  it('should have role="separator"', () => {
    const attrs = MenuDivider.mapPropsToAttrs();
    expect(attrs.role).toBe('separator');
  });

  it('should use div tag', () => {
    expect(MenuDivider.template.tag).toBe('div');
  });
});

describe('MenuGroup Core', () => {
  it('should have displayName "MenuGroup"', () => {
    expect(MenuGroup.displayName).toBe('MenuGroup');
  });

  it('should return correct attrs', () => {
    const attrs = MenuGroup.mapPropsToAttrs();
    expect(attrs).toEqual({
      class: 'menu-group',
      role: 'group',
    });
  });

  it('should have role="group"', () => {
    const attrs = MenuGroup.mapPropsToAttrs();
    expect(attrs.role).toBe('group');
  });

  it('should use div tag', () => {
    expect(MenuGroup.template.tag).toBe('div');
  });
});
