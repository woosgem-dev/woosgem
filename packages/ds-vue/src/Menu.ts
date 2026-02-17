import type { DefineComponent } from 'vue';
import {
  Menu as MenuDef,
  MenuItem as MenuItemDef,
  MenuDivider as MenuDividerDef,
  MenuGroup as MenuGroupDef,
  type MenuStyleProps,
  type MenuItemStyleProps,
  type MenuDividerStyleProps,
  type MenuGroupStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

// ============================================
// Menu
// ============================================

export type MenuProps = Prettify<MenuStyleProps & { class?: string }>;

export const Menu = createComponent(MenuDef) as DefineComponent<MenuProps>;

// ============================================
// MenuItem
// ============================================

export type MenuItemProps = Prettify<MenuItemStyleProps & { class?: string }>;

export const MenuItem = createComponent(MenuItemDef) as DefineComponent<MenuItemProps>;

// ============================================
// MenuDivider
// ============================================

export type MenuDividerProps = Prettify<MenuDividerStyleProps & { class?: string }>;

export const MenuDivider = createComponent(MenuDividerDef) as DefineComponent<MenuDividerProps>;

// ============================================
// MenuGroup
// ============================================

export type MenuGroupProps = Prettify<MenuGroupStyleProps & { class?: string }>;

export const MenuGroup = createComponent(MenuGroupDef) as DefineComponent<MenuGroupProps>;
