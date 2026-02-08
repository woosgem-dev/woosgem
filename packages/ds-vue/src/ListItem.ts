import type { DefineComponent } from 'vue';
import { ListItem as ListItemDef, type ListItemStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * ListItem component props.
 * Combines style props with specific allowed native props.
 */
export type ListItemProps = Prettify<
  ListItemStyleProps & {
    /** Click handler */
    onClick?: (e: MouseEvent) => void;
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * ListItem component for rendering list items with various states.
 *
 * @example
 * ```vue
 * <ListItem variant="default">
 *   Regular Item
 * </ListItem>
 *
 * <ListItem variant="interactive" :selected="true">
 *   Selected Item
 * </ListItem>
 *
 * <ListItem :disabled="true" :divider="true">
 *   Disabled Item
 * </ListItem>
 * ```
 */
export const ListItem = createComponent(ListItemDef) as DefineComponent<ListItemProps>;
