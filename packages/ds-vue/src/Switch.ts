import type { DefineComponent } from 'vue';
import { Switch as SwitchDef, type SwitchStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Switch component props.
 * Combines style props with specific allowed native props.
 */
export type SwitchProps = Prettify<
  SwitchStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * Switch component for toggle states.
 *
 * @example
 * ```vue
 * <Switch v-model:checked="isEnabled" />
 *
 * <Switch size="lg" color="success" :checked="true" />
 *
 * <Switch :disabled="true" />
 * ```
 */
export const Switch = createComponent(SwitchDef) as DefineComponent<SwitchProps>;
