import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Switch as SwitchDef, type SwitchStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Switch component props.
 * Combines style props with all standard button HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type SwitchProps = Prettify<
  SwitchStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      keyof SwitchStyleProps | 'data-size' | 'data-color' | 'data-state' | 'role' | 'aria-checked'
    > & {
      'data-size'?: never;
      'data-color'?: never;
      'data-state'?: never;
      role?: never;
      'aria-checked'?: never;
      /** Callback when switch is toggled */
      onChange?: (checked: boolean) => void;
    }
>;

/** Ref type for Switch component */
export type SwitchRef = HTMLButtonElement;

const BaseSwitch = createComponent(SwitchDef);

/**
 * Switch component for toggle states.
 *
 * @example
 * ```tsx
 * <Switch checked={isEnabled} onChange={setIsEnabled} />
 *
 * <Switch size="lg" color="success" checked />
 *
 * <Switch disabled />
 * ```
 */
export const Switch = BaseSwitch as ComponentType<SwitchProps>;
