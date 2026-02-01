import type { DefineComponent } from 'vue';
import { Alert as AlertDef, type AlertStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Alert component props.
 * Combines style props with specific allowed native props.
 */
export type AlertProps = Prettify<
  AlertStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * Alert component for displaying important messages.
 *
 * @example
 * ```vue
 * <Alert status="info">
 *   This is an informational message.
 * </Alert>
 *
 * <Alert status="error" variant="filled">
 *   An error occurred!
 * </Alert>
 *
 * <Alert status="success" :closable="true" @close="handleClose">
 *   Operation completed successfully.
 * </Alert>
 * ```
 */
export const Alert = createComponent(AlertDef) as DefineComponent<AlertProps>;
