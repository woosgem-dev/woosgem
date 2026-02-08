import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Alert as AlertDef, type AlertStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Alert component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type AlertProps = Prettify<
  AlertStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof AlertStyleProps | 'data-variant' | 'data-status' | 'data-closable' | 'role'
    > & {
      'data-variant'?: never;
      'data-status'?: never;
      'data-closable'?: never;
      role?: never;
      /** Callback when close button is clicked */
      onClose?: () => void;
    }
>;

/** Ref type for Alert component */
export type AlertRef = HTMLDivElement;

const BaseAlert = createComponent(AlertDef);

/**
 * Alert component for displaying important messages.
 *
 * @example
 * ```tsx
 * <Alert status="info">
 *   This is an informational message.
 * </Alert>
 *
 * <Alert status="error" variant="filled">
 *   An error occurred!
 * </Alert>
 *
 * <Alert status="success" closable onClose={() => {}}>
 *   Operation completed successfully.
 * </Alert>
 * ```
 */
export const Alert = BaseAlert as ComponentType<AlertProps>;
