import type { DefineComponent } from 'vue';
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
  SelectStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Select options for controlled usage */
    options?: SelectOptionType[];
    /** Current selected value (v-model) */
    modelValue?: string | string[];
    /** Placeholder text */
    placeholder?: string;
    /** Accessible label */
    'aria-label'?: string;
    /** Click handler */
    onClick?: (e: MouseEvent) => void;
  }
>;

/**
 * Select component for choosing from a list of options.
 *
 * @example
 * ```vue
 * <Select
 *   v-model="selected"
 *   placeholder="Select an option"
 *   :options="options"
 * />
 * ```
 */
export const Select = createComponent(SelectDef) as DefineComponent<SelectProps>;

/**
 * SelectMenu component props (dropdown container).
 */
export type SelectMenuProps = Prettify<
  SelectMenuStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Enable multiple selection */
    multiple?: boolean;
  }
>;

/**
 * SelectMenu component for dropdown options list.
 *
 * @example
 * ```vue
 * <SelectMenu :open="isOpen" size="md">
 *   <SelectOption value="1">Option 1</SelectOption>
 *   <SelectOption value="2">Option 2</SelectOption>
 * </SelectMenu>
 * ```
 */
export const SelectMenu = createComponent(SelectMenuDef) as DefineComponent<SelectMenuProps>;

/**
 * SelectOption component props (list item).
 */
export type SelectOptionProps = Prettify<
  SelectOptionStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Option value */
    value: string;
    /** Click handler */
    onClick?: (e: MouseEvent) => void;
  }
>;

/**
 * SelectOption component for individual options in the dropdown.
 *
 * @example
 * ```vue
 * <SelectOption value="option1" :selected="selected === 'option1'">
 *   Option 1
 * </SelectOption>
 * ```
 */
export const SelectOption = createComponent(SelectOptionDef) as DefineComponent<SelectOptionProps>;
