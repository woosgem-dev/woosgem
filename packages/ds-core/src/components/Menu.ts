import type { ComponentDefinition } from '../types';
import { filterNullish } from '../types';

export const MenuSizes = ['sm', 'md', 'lg'] as const;
export type MenuSize = (typeof MenuSizes)[number];

export interface MenuStyleProps {
  size?: MenuSize;
}

export interface MenuAttrs {
  class: string;
  'data-size': MenuSize;
  role: 'menu';
}

export const Menu = {
  displayName: 'Menu',

  defaultProps: {
    size: 'md',
  },

  propTypes: {
    size: MenuSizes,
  },

  mapPropsToAttrs: (props: MenuStyleProps): MenuAttrs => {
    const merged = { ...Menu.defaultProps, ...filterNullish(props) };
    return {
      class: 'menu',
      'data-size': merged.size,
      role: 'menu',
    };
  },

  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<MenuStyleProps, MenuAttrs, 'div'>;

// ============================================
// MenuItem
// ============================================

export interface MenuItemStyleProps {
  disabled?: boolean;
  active?: boolean;
  destructive?: boolean;
}

export interface MenuItemAttrs {
  class: string;
  type: 'button';
  role: 'menuitem';
  'data-state'?: 'active' | 'disabled' | undefined;
  'data-destructive'?: boolean | undefined;
  'aria-disabled'?: 'true' | undefined;
  tabindex: '-1';
}

export const MenuItem = {
  displayName: 'MenuItem',

  defaultProps: {
    disabled: false,
    active: false,
    destructive: false,
  },

  propTypes: {},

  mapPropsToAttrs: (props: MenuItemStyleProps): MenuItemAttrs => {
    const merged = { ...MenuItem.defaultProps, ...filterNullish(props) };
    const state = merged.active ? 'active' : merged.disabled ? 'disabled' : undefined;
    return {
      class: 'menu-item',
      type: 'button',
      role: 'menuitem',
      'data-state': state,
      'data-destructive': merged.destructive || undefined,
      'aria-disabled': merged.disabled ? 'true' : undefined,
      tabindex: '-1',
    };
  },

  template: {
    tag: 'button',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<MenuItemStyleProps, MenuItemAttrs, 'button'>;

// ============================================
// MenuDivider
// ============================================

export interface MenuDividerStyleProps {}

export interface MenuDividerAttrs {
  class: string;
  role: 'separator';
}

export const MenuDivider = {
  displayName: 'MenuDivider',

  defaultProps: {},

  propTypes: {},

  mapPropsToAttrs: (): MenuDividerAttrs => ({
    class: 'menu-divider',
    role: 'separator',
  }),

  template: {
    tag: 'div',
    slots: [] as const,
  },
} as const satisfies ComponentDefinition<Record<string, never>, MenuDividerAttrs, 'div'>;

// ============================================
// MenuGroup
// ============================================

export interface MenuGroupStyleProps {}

export interface MenuGroupAttrs {
  class: string;
  role: 'group';
}

export const MenuGroup = {
  displayName: 'MenuGroup',

  defaultProps: {},

  propTypes: {},

  mapPropsToAttrs: (): MenuGroupAttrs => ({
    class: 'menu-group',
    role: 'group',
  }),

  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<Record<string, never>, MenuGroupAttrs, 'div'>;
