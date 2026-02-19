import {
  Card as CardCore,
  CardHeader as CardHeaderCore,
  CardBody as CardBodyCore,
  CardFooter as CardFooterCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Card - Lit Web Component
 *
 * @element wg-card
 * @slot - Card content
 *
 * @example
 * ```html
 * <wg-card variant="outlined" size="md">
 *   <p>Card content here</p>
 * </wg-card>
 *
 * <wg-card variant="elevated" size="lg" hoverable>
 *   <p>Hoverable elevated card</p>
 * </wg-card>
 *
 * <wg-card clickable>
 *   <p>Clickable card</p>
 * </wg-card>
 * ```
 */
export const Card = createComponent(
  CardCore,
  'wg-card',
  {
    props: {
      variant: { type: String, default: 'outlined' },
      size: { type: String, default: 'md' },
      hoverable: { type: Boolean, default: false },
      clickable: { type: Boolean, default: false },
    },
    events: {
      keydown: (e: KeyboardEvent, component) => {
        const el = component as unknown as { clickable: boolean };
        if (el.clickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          component.dispatchEvent(new CustomEvent('card-click', { bubbles: true, composed: true }));
        }
      },
    },
  }
);

customElements.define('wg-card', Card);

/**
 * CardHeader - Lit Web Component
 *
 * @element wg-card-header
 * @slot - Header content
 */
export const CardHeader = createComponent(
  CardHeaderCore,
  'wg-card-header',
  {
    props: {
      divider: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-card-header', CardHeader);

/**
 * CardBody - Lit Web Component
 *
 * @element wg-card-body
 * @slot - Body content
 */
export const CardBody = createComponent(
  CardBodyCore,
  'wg-card-body',
  {
    props: {},
  }
);

customElements.define('wg-card-body', CardBody);

/**
 * CardFooter - Lit Web Component
 *
 * @element wg-card-footer
 * @slot - Footer content
 */
export const CardFooter = createComponent(
  CardFooterCore,
  'wg-card-footer',
  {
    props: {
      divider: { type: Boolean, default: false },
      align: { type: String, default: 'start' },
    },
  }
);

customElements.define('wg-card-footer', CardFooter);

declare global {
  interface HTMLElementTagNameMap {
    'wg-card': InstanceType<typeof Card>;
    'wg-card-header': InstanceType<typeof CardHeader>;
    'wg-card-body': InstanceType<typeof CardBody>;
    'wg-card-footer': InstanceType<typeof CardFooter>;
  }
}
