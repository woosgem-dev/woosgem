import {
  forwardRef,
  memo,
  useMemo,
  type ComponentPropsWithoutRef,
  type ComponentType,
} from 'react';
import { Tag as TagDef, type TagStyleProps, type Prettify } from '@woosgem-dev/core';

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

const TagComponent = memo(
  forwardRef<TagRef, TagProps>(function Tag(props, ref) {
    const {
      variant,
      color,
      size,
      closable,
      disabled,
      onClose,
      children,
      className,
      ...restProps
    } = props;

    const attrs = useMemo(
      () => TagDef.mapPropsToAttrs({
        variant: variant ?? TagDef.defaultProps.variant,
        color: color ?? TagDef.defaultProps.color,
        size: size ?? TagDef.defaultProps.size,
        closable: closable ?? TagDef.defaultProps.closable,
        disabled: disabled ?? TagDef.defaultProps.disabled,
      }),
      [variant, color, size, closable, disabled],
    );

    const finalClassName = className ? `${attrs.class} ${className}` : attrs.class;

    return (
      <span
        ref={ref}
        className={finalClassName}
        data-variant={attrs['data-variant']}
        data-color={attrs['data-color']}
        data-size={attrs['data-size']}
        data-closable={attrs['data-closable']}
        data-state={attrs['data-state']}
        aria-disabled={attrs['aria-disabled']}
        {...restProps}
      >
        {children}
        {closable && (
          <button
            type="button"
            className="wg-tag__close"
            aria-label="Remove"
            onClick={onClose}
            disabled={disabled}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }),
);

TagComponent.displayName = 'Tag';

/**
 * Tag component for labels, filters, and removable items.
 *
 * @example
 * ```tsx
 * <Tag variant="subtle" color="primary">Label</Tag>
 *
 * <Tag variant="solid" color="danger" closable onClose={handleRemove}>
 *   Remove me
 * </Tag>
 * ```
 */
export const Tag = TagComponent as ComponentType<TagProps>;
