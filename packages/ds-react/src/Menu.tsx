import type { ComponentPropsWithoutRef, ComponentType } from 'react';
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

//Menu

export type MenuProps = Prettify<
  MenuStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof MenuStyleProps | 'data-size' | 'role'
    > & {
      'data-size'?: never;
      role?: never;
    }
>;

export type MenuRef = HTMLDivElement;

export const Menu = createComponent(MenuDef) as ComponentType<MenuProps>;

//MenuItem

export type MenuItemProps = Prettify<
  MenuItemStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      keyof MenuItemStyleProps | 'type' | 'role' | 'data-state' | 'data-destructive' | 'aria-disabled' | 'tabindex'
    > & {
      type?: never;
      role?: never;
      'data-state'?: never;
      'data-destructive'?: never;
      'aria-disabled'?: never;
      tabindex?: never;
    }
>;

export type MenuItemRef = HTMLButtonElement;

export const MenuItem = createComponent(MenuItemDef) as ComponentType<MenuItemProps>;

//MenuDivider

export type MenuDividerProps = Prettify<
  MenuDividerStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, 'role'> & {
      role?: never;
    }
>;

export type MenuDividerRef = HTMLDivElement;

export const MenuDivider = createComponent(MenuDividerDef) as ComponentType<MenuDividerProps>;

//MenuGroup

export type MenuGroupProps = Prettify<
  MenuGroupStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, 'role'> & {
      role?: never;
    }
>;

export type MenuGroupRef = HTMLDivElement;

export const MenuGroup = createComponent(MenuGroupDef) as ComponentType<MenuGroupProps>;
