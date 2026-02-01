import type { DefineComponent } from 'vue';
import {
  Radio as RadioDef,
  RadioGroup as RadioGroupDef,
  type RadioStyleProps,
  type RadioGroupStyleProps,
  type Prettify,
} from '@woosgem/ds-core';
import { createComponent } from './createComponent';

/**
 * Radio component props.
 */
export type RadioProps = Prettify<
  RadioStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Radio value */
    value?: string;
    /** Radio name for form grouping */
    name?: string;
  }
>;

/**
 * Radio component for single selection from multiple options.
 *
 * @example
 * ```vue
 * <Radio
 *   value="option1"
 *   :checked="selected === 'option1'"
 *   @click="selected = 'option1'"
 * >
 *   Option 1
 * </Radio>
 * ```
 */
export const Radio = createComponent(RadioDef) as DefineComponent<RadioProps>;

/**
 * RadioGroup component props.
 */
export type RadioGroupProps = Prettify<
  RadioGroupStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Controlled value (v-model:modelValue) */
    modelValue?: string;
    /** Radio group name */
    name?: string;
  }
>;

/**
 * RadioGroup component for managing a group of Radio components.
 *
 * @example
 * ```vue
 * <RadioGroup v-model="selected" name="options">
 *   <Radio value="a">Option A</Radio>
 *   <Radio value="b">Option B</Radio>
 *   <Radio value="c">Option C</Radio>
 * </RadioGroup>
 * ```
 */
export const RadioGroup = createComponent(RadioGroupDef) as DefineComponent<RadioGroupProps>;
