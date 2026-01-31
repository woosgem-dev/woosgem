import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { IconButton as IconButtonDef, type IconButtonStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * IconButton component props.
 * Combines style props with all standard button HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type IconButtonProps = Prettify<
  IconButtonStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      keyof IconButtonStyleProps | 'data-variant' | 'data-color' | 'data-size' | 'data-shape'
    > & {
      'data-variant'?: never;
      'data-color'?: never;
      'data-size'?: never;
      'data-shape'?: never;
    }
>;

/** Ref type for IconButton component */
export type IconButtonRef = HTMLButtonElement;

const BaseIconButton = createComponent(IconButtonDef);

/**
 * IconButton component for icon-only action buttons.
 *
 * @example
 * ```tsx
 * <IconButton variant="filled" color="primary" aria-label="Settings">
 *   <SettingsIcon />
 * </IconButton>
 *
 * <IconButton variant="outline" shape="circle" aria-label="Close">
 *   <CloseIcon />
 * </IconButton>
 *
 * <IconButton variant="ghost" size="sm" aria-label="Delete">
 *   <DeleteIcon />
 * </IconButton>
 * ```
 */
export const IconButton = BaseIconButton as ComponentType<IconButtonProps>;
