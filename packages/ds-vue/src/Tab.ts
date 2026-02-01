import type { DefineComponent } from 'vue';
import { Tab as TabDef, type TabStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Tab component props.
 * Combines style props with specific allowed native props.
 */
export type TabProps = Prettify<
  TabStyleProps & {
    /** Click handler */
    onClick?: (e: MouseEvent) => void;
    /** Additional CSS class */
    class?: string;
    /** Button type for forms */
    type?: 'button' | 'submit' | 'reset';
    /** Accessible label */
    'aria-label'?: string;
  }
>;

/**
 * Tab component with multiple variants and sizes.
 *
 * @example
 * ```vue
 * <Tab variant="underline" size="md" :selected="true">
 *   Home
 * </Tab>
 *
 * <Tab variant="filled" :disabled="true">
 *   Settings
 * </Tab>
 *
 * <Tab :fullWidth="true">
 *   Profile
 * </Tab>
 * ```
 */
export const Tab = createComponent(TabDef) as DefineComponent<TabProps>;
