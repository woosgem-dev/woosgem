import type { DefineComponent } from 'vue';
import { Divider as DividerDef, type DividerStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Divider component props.
 * Combines style props with specific allowed native props.
 */
export type DividerProps = Prettify<
  DividerStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * Divider component for visual separation of content.
 *
 * @example
 * ```vue
 * <Divider orientation="horizontal" variant="solid" spacing="md" />
 *
 * <Divider orientation="vertical" variant="dashed" spacing="lg" />
 *
 * <Divider spacing="none" />
 * ```
 */
export const Divider = createComponent(DividerDef) as DefineComponent<DividerProps>;
