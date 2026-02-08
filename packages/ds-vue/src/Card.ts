import type { DefineComponent } from 'vue';
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
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Card component props.
 * Combines style props with specific allowed native props.
 */
export type CardProps = Prettify<
  CardStyleProps & {
    /** Click handler for clickable cards */
    onClick?: (e: MouseEvent) => void;
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * Card component for grouping related content.
 *
 * @example
 * ```vue
 * <!-- Basic card -->
 * <Card>
 *   <p>Card content here</p>
 * </Card>
 *
 * <!-- Elevated card with large padding -->
 * <Card variant="elevated" padding="lg">
 *   <p>Elevated card content</p>
 * </Card>
 *
 * <!-- Clickable card -->
 * <Card clickable @click="handleClick">
 *   <p>Click me!</p>
 * </Card>
 *
 * <!-- With compound components -->
 * <Card>
 *   <CardHeader divider>Title</CardHeader>
 *   <CardBody>Content</CardBody>
 *   <CardFooter divider align="end">
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * ```
 */
export const Card = createComponent(CardDef) as DefineComponent<CardProps>;

// ============================================
// CardHeader
// ============================================

export type CardHeaderProps = Prettify<
  CardHeaderStyleProps & {
    class?: string;
  }
>;

/**
 * Card header section with optional divider.
 */
export const CardHeader = createComponent(CardHeaderDef) as DefineComponent<CardHeaderProps>;

// ============================================
// CardBody
// ============================================

export type CardBodyProps = Prettify<
  CardBodyStyleProps & {
    class?: string;
  }
>;

/**
 * Card body section for main content.
 */
export const CardBody = createComponent(CardBodyDef) as DefineComponent<CardBodyProps>;

// ============================================
// CardFooter
// ============================================

export type CardFooterProps = Prettify<
  CardFooterStyleProps & {
    class?: string;
  }
>;

/**
 * Card footer section with optional divider and alignment.
 */
export const CardFooter = createComponent(CardFooterDef) as DefineComponent<CardFooterProps>;
