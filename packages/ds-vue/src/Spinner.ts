import type { DefineComponent } from 'vue';
import { Spinner as SpinnerDef, type SpinnerStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Spinner component props.
 * Combines style props with specific allowed native props.
 */
export type SpinnerProps = Prettify<
  SpinnerStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * Spinner component for loading states.
 *
 * @example
 * ```vue
 * <Spinner />
 *
 * <Spinner size="lg" color="secondary" />
 *
 * <Spinner label="데이터 불러오는 중..." />
 * ```
 */
export const Spinner = createComponent(SpinnerDef) as DefineComponent<SpinnerProps>;
