import type { ComponentPropsWithoutRef, ComponentType, KeyboardEvent, MouseEvent } from 'react';
import {
  Card as CardDef,
  CardHeader as CardHeaderDef,
  CardBody as CardBodyDef,
  CardFooter as CardFooterDef,
  type CardStyleProps,
  type CardHeaderStyleProps,
  type CardBodyStyleProps,
  type CardFooterStyleProps,
  type Prettify,
} from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Card component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type CardProps = Prettify<
  CardStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof CardStyleProps | 'data-variant' | 'data-padding' | 'data-hoverable' | 'data-clickable'
    > & {
      'data-variant'?: never;
      'data-padding'?: never;
      'data-hoverable'?: never;
      'data-clickable'?: never;
      /** Click handler for clickable cards */
      onClick?: (e: MouseEvent<HTMLDivElement>) => void;
      /** Keydown handler for clickable cards (Enter/Space) */
      onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
    }
>;

/** Ref type for Card component */
export type CardRef = HTMLDivElement;

/**
 * Card component for grouping related content.
 *
 * @example
 * ```tsx
 * // Basic card
 * <Card>
 *   <p>Card content here</p>
 * </Card>
 *
 * // Elevated card with large padding
 * <Card variant="elevated" padding="lg">
 *   <p>Elevated card content</p>
 * </Card>
 *
 * // Clickable card
 * <Card clickable onClick={() => console.log('clicked')}>
 *   <p>Click me!</p>
 * </Card>
 *
 * // With compound components
 * <Card>
 *   <CardHeader divider>Title</CardHeader>
 *   <CardBody>Content</CardBody>
 *   <CardFooter divider align="end">
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * ```
 */
export const Card = createComponent(CardDef, {}) as ComponentType<CardProps>;

// ============================================
// CardHeader
// ============================================

export type CardHeaderProps = Prettify<
  CardHeaderStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof CardHeaderStyleProps | 'data-divider'> & {
      'data-divider'?: never;
    }
>;

export type CardHeaderRef = HTMLDivElement;

/**
 * Card header section with optional divider.
 */
export const CardHeader = createComponent(CardHeaderDef, {}) as ComponentType<CardHeaderProps>;

// ============================================
// CardBody
// ============================================

export type CardBodyProps = Prettify<CardBodyStyleProps & ComponentPropsWithoutRef<'div'>>;

export type CardBodyRef = HTMLDivElement;

/**
 * Card body section for main content.
 */
export const CardBody = createComponent(CardBodyDef, {}) as ComponentType<CardBodyProps>;

// ============================================
// CardFooter
// ============================================

export type CardFooterProps = Prettify<
  CardFooterStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof CardFooterStyleProps | 'data-divider' | 'data-align'> & {
      'data-divider'?: never;
      'data-align'?: never;
    }
>;

export type CardFooterRef = HTMLDivElement;

/**
 * Card footer section with optional divider and alignment.
 */
export const CardFooter = createComponent(CardFooterDef, {}) as ComponentType<CardFooterProps>;
