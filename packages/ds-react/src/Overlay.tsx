import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Overlay as OverlayDef, type OverlayStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Overlay component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type OverlayProps = Prettify<
  OverlayStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof OverlayStyleProps | 'data-blur' | 'data-opacity' | 'data-level' | 'data-visible' | 'aria-hidden'
    > & {
      'data-blur'?: never;
      'data-opacity'?: never;
      'data-level'?: never;
      'data-visible'?: never;
      'aria-hidden'?: never;
    }
>;

/** Ref type for Overlay component */
export type OverlayRef = HTMLDivElement;

const BaseOverlay = createComponent(OverlayDef, {});

/**
 * Overlay component for modal, bottom sheet, and drawer backgrounds.
 *
 * @example
 * ```tsx
 * <Overlay visible onClick={handleClose} />
 *
 * <Overlay opacity="dark" blur />
 *
 * <Overlay level="modal" visible={isOpen} />
 * ```
 */
export const Overlay = BaseOverlay as ComponentType<OverlayProps>;
