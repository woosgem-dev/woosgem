import type { DefineComponent } from 'vue';
import { Tag as TagDef, type TagStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Tag component props.
 * Combines style props with specific allowed native props.
 */
export type TagProps = Prettify<
  TagStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * Tag component for labels, filters, and removable items.
 *
 * @example
 * ```vue
 * <Tag variant="subtle" color="primary">
 *   Label
 * </Tag>
 *
 * <Tag variant="solid" color="danger" :closable="true">
 *   Remove me
 * </Tag>
 *
 * <Tag variant="outline" color="success" size="sm">
 *   Active
 * </Tag>
 * ```
 */
export const Tag = createComponent(TagDef) as DefineComponent<TagProps>;
