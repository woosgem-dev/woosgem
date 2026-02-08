import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';
import {
  Select as SelectDef,
  SelectMenu as SelectMenuDef,
  SelectOption as SelectOptionDef,
  type SelectStyleProps,
  type SelectMenuStyleProps,
  type SelectOptionStyleProps,
  type SelectOptionType,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Select component props (trigger button).
 */
export type SelectProps = Prettify<
  SelectStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      | keyof SelectStyleProps
      | 'data-variant'
      | 'data-size'
      | 'data-state'
      | 'data-multiple'
      | 'role'
      | 'aria-expanded'
      | 'aria-haspopup'
      | 'aria-disabled'
    > & {
      'data-variant'?: never;
      'data-size'?: never;
      'data-state'?: never;
      'data-multiple'?: never;
      role?: never;
      'aria-expanded'?: never;
      'aria-haspopup'?: never;
      /** Select options for controlled usage */
      options?: SelectOptionType[];
      /** Current selected value */
      value?: string | string[];
      /** Placeholder text when no value selected */
      placeholder?: string;
      /** Callback when value changes */
      onChange?: (value: string | string[]) => void;
      /** Custom trigger content */
      children?: ReactNode;
      /** Accessible label */
      'aria-label'?: string;
    }
>;

/** Ref type for Select component */
export type SelectRef = HTMLButtonElement;

const BaseSelect = createComponent(SelectDef);

/**
 * Select component for choosing from a list of options.
 *
 * @example
 * ```tsx
 * <Select
 *   placeholder="Select an option"
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' },
 *   ]}
 *   value={selected}
 *   onChange={setSelected}
 * />
 * ```
 */
export const Select = BaseSelect as ComponentType<SelectProps>;

/**
 * SelectMenu component props (dropdown container).
 */
export type SelectMenuProps = Prettify<
  SelectMenuStyleProps &
    Omit<ComponentPropsWithoutRef<'ul'>, keyof SelectMenuStyleProps | 'data-size' | 'data-state' | 'role'> & {
      'data-size'?: never;
      'data-state'?: never;
      role?: never;
      /** Enable multiple selection */
      multiple?: boolean;
      /** Menu children (SelectOption components) */
      children?: ReactNode;
    }
>;

/** Ref type for SelectMenu component */
export type SelectMenuRef = HTMLUListElement;

const BaseSelectMenu = createComponent(SelectMenuDef);

/**
 * SelectMenu component for dropdown options list.
 *
 * @example
 * ```tsx
 * <SelectMenu open size="md">
 *   <SelectOption value="1">Option 1</SelectOption>
 *   <SelectOption value="2">Option 2</SelectOption>
 * </SelectMenu>
 * ```
 */
export const SelectMenu = BaseSelectMenu as ComponentType<SelectMenuProps>;

/**
 * SelectOption component props (list item).
 */
export type SelectOptionProps = Prettify<
  SelectOptionStyleProps &
    Omit<
      ComponentPropsWithoutRef<'li'>,
      keyof SelectOptionStyleProps | 'data-size' | 'data-state' | 'role' | 'aria-selected' | 'aria-disabled'
    > & {
      'data-size'?: never;
      'data-state'?: never;
      role?: never;
      'aria-selected'?: never;
      /** Option value */
      value: string;
      /** Option label (children) */
      children?: ReactNode;
    }
>;

/** Ref type for SelectOption component */
export type SelectOptionRef = HTMLLIElement;

const BaseSelectOption = createComponent(SelectOptionDef);

/**
 * SelectOption component for individual options in the dropdown.
 *
 * @example
 * ```tsx
 * <SelectOption value="option1" selected>
 *   Option 1
 * </SelectOption>
 * ```
 */
export const SelectOption = BaseSelectOption as ComponentType<SelectOptionProps>;
