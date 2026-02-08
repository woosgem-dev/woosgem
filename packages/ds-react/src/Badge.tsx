import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Badge as BadgeDef, type BadgeStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Badge component props.
 * Combines style props with all standard span HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type BadgeProps = Prettify<
  BadgeStyleProps &
    Omit<ComponentPropsWithoutRef<'span'>, keyof BadgeStyleProps | 'data-variant' | 'data-color' | 'data-size'> & {
      'data-variant'?: never;
      'data-color'?: never;
      'data-size'?: never;
    }
>;

/** Ref type for Badge component */
export type BadgeRef = HTMLSpanElement;

const BaseBadge = createComponent(BadgeDef);

/**
 * Badge component for labels, tags, and status indicators.
 *
 * @example
 * ```tsx
 * <Badge variant="solid" color="primary">New</Badge>
 *
 * <Badge variant="outline" color="danger">Error</Badge>
 *
 * <Badge variant="subtle" color="success" size="sm">
 *   Active
 * </Badge>
 * ```
 */
export const Badge = BaseBadge as ComponentType<BadgeProps>;
