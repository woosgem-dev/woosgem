import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import {
  Radio as RadioDef,
  RadioGroup as RadioGroupDef,
  type RadioStyleProps,
  type RadioGroupStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Radio component props.
 */
export type RadioProps = Prettify<
  RadioStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      keyof RadioStyleProps | 'data-size' | 'data-color' | 'data-state' | 'role' | 'aria-checked'
    > & {
      'data-size'?: never;
      'data-color'?: never;
      'data-state'?: never;
      role?: never;
      'aria-checked'?: never;
      /** Radio value */
      value?: string;
      /** Radio name for form grouping */
      name?: string;
    }
>;

/** Ref type for Radio component */
export type RadioRef = HTMLButtonElement;

const BaseRadio = createComponent(RadioDef);

/**
 * Radio component for single selection from multiple options.
 *
 * @example
 * ```tsx
 * <Radio value="option1" checked={selected === 'option1'} onClick={() => setSelected('option1')}>
 *   Option 1
 * </Radio>
 * ```
 */
export const Radio = BaseRadio as ComponentType<RadioProps>;

/**
 * RadioGroup component props.
 */
export type RadioGroupProps = Prettify<
  RadioGroupStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof RadioGroupStyleProps | 'data-orientation' | 'role'> & {
      'data-orientation'?: never;
      role?: never;
      /** Controlled value */
      value?: string;
      /** Default value for uncontrolled usage */
      defaultValue?: string;
      /** Callback when selection changes */
      onChange?: (value: string) => void;
      /** Radio group name */
      name?: string;
    }
>;

/** Ref type for RadioGroup component */
export type RadioGroupRef = HTMLDivElement;

const BaseRadioGroup = createComponent(RadioGroupDef);

/**
 * RadioGroup component for managing a group of Radio components.
 *
 * @example
 * ```tsx
 * <RadioGroup value={selected} onChange={setSelected} name="options">
 *   <Radio value="a">Option A</Radio>
 *   <Radio value="b">Option B</Radio>
 *   <Radio value="c">Option C</Radio>
 * </RadioGroup>
 * ```
 */
export const RadioGroup = BaseRadioGroup as ComponentType<RadioGroupProps>;
