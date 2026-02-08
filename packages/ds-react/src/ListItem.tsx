import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { ListItem as ListItemDef, type ListItemStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * ListItem component props.
 * Combines style props with all standard li HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type ListItemProps = Prettify<
  ListItemStyleProps &
    Omit<
      ComponentPropsWithoutRef<'li'>,
      keyof ListItemStyleProps | 'data-variant' | 'data-state' | 'data-divider' | 'aria-selected' | 'aria-disabled'
    > & {
      'data-variant'?: never;
      'data-state'?: never;
      'data-divider'?: never;
      'aria-selected'?: never;
      'aria-disabled'?: never;
    }
>;

/** Ref type for ListItem component */
export type ListItemRef = HTMLLIElement;

const BaseListItem = createComponent(ListItemDef);

/**
 * ListItem component with variants and states.
 *
 * @example
 * ```tsx
 * <ListItem variant="default">
 *   Item 1
 * </ListItem>
 *
 * <ListItem variant="interactive" selected>
 *   Selected Item
 * </ListItem>
 *
 * <ListItem disabled divider>
 *   Disabled Item
 * </ListItem>
 * ```
 */
export const ListItem = BaseListItem as ComponentType<ListItemProps>;
