import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Kbd as KbdDef, type KbdStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Kbd component props.
 * Combines style props with all standard kbd HTML attributes.
 */
export type KbdProps = Prettify<
  KbdStyleProps &
    Omit<
      ComponentPropsWithoutRef<'kbd'>,
      keyof KbdStyleProps | 'data-size' | 'data-variant'
    > & {
      'data-size'?: never;
      'data-variant'?: never;
    }
>;

/** Ref type for Kbd component */
export type KbdRef = HTMLElement;

const BaseKbd = createComponent(KbdDef, {});

/**
 * Kbd component for displaying keyboard shortcuts.
 *
 * @example
 * ```tsx
 * <Kbd>⌘K</Kbd>
 * <Kbd size="md" variant="flat">Ctrl</Kbd>
 * <Kbd>Enter</Kbd>
 * ```
 */
export const Kbd = BaseKbd as ComponentType<KbdProps>;
