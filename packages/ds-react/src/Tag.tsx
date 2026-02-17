import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Tag as TagDef, type TagStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Tag component props.
 * Combines style props with all standard span HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type TagProps = Prettify<
  TagStyleProps &
    Omit<
      ComponentPropsWithoutRef<'span'>,
      keyof TagStyleProps | 'data-variant' | 'data-color' | 'data-size' | 'data-closable' | 'data-state' | 'aria-disabled'
    > & {
      'data-variant'?: never;
      'data-color'?: never;
      'data-size'?: never;
      'data-closable'?: never;
      'data-state'?: never;
      'aria-disabled'?: never;
      onClose?: () => void;
    }
>;

/** Ref type for Tag component */
export type TagRef = HTMLSpanElement;

const BaseTag = createComponent(TagDef);

/**
 * Tag component for labels, filters, and removable items.
 *
 * @example
 * ```tsx
 * <Tag variant="subtle" color="primary">Label</Tag>
 *
 * <Tag variant="solid" color="danger" closable>
 *   Remove me
 * </Tag>
 *
 * <Tag variant="outline" color="success" size="sm">
 *   Active
 * </Tag>
 * ```
 */
export const Tag = BaseTag as ComponentType<TagProps>;
