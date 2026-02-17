import {
  Accordion as AccordionCore,
  AccordionItem as AccordionItemCore,
  AccordionTrigger as AccordionTriggerCore,
  AccordionContent as AccordionContentCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Accordion - Lit Web Component
 *
 * @element wg-accordion
 * @slot - Accordion content (AccordionItem elements)
 */
export const Accordion = createComponent(
  AccordionCore,
  'wg-accordion',
  {
    props: {
      type: { type: String, default: 'single' },
      size: { type: String, default: 'md' },
      variant: { type: String, default: 'outline' },
    },
  }
);

customElements.define('wg-accordion', Accordion);

/**
 * AccordionItem - Lit Web Component
 *
 * @element wg-accordion-item
 * @slot - Item content (trigger + content)
 */
export const AccordionItem = createComponent(
  AccordionItemCore,
  'wg-accordion-item',
  {
    props: {
      open: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-accordion-item', AccordionItem);

/**
 * AccordionTrigger - Lit Web Component
 *
 * @element wg-accordion-trigger
 * @slot - Trigger content
 */
export const AccordionTrigger = createComponent(
  AccordionTriggerCore,
  'wg-accordion-trigger',
  {
    props: {},
  }
);

customElements.define('wg-accordion-trigger', AccordionTrigger);

/**
 * AccordionContent - Lit Web Component
 *
 * @element wg-accordion-content
 * @slot - Content body
 */
export const AccordionContent = createComponent(
  AccordionContentCore,
  'wg-accordion-content',
  {
    props: {},
  }
);

customElements.define('wg-accordion-content', AccordionContent);

declare global {
  interface HTMLElementTagNameMap {
    'wg-accordion': InstanceType<typeof Accordion>;
    'wg-accordion-item': InstanceType<typeof AccordionItem>;
    'wg-accordion-trigger': InstanceType<typeof AccordionTrigger>;
    'wg-accordion-content': InstanceType<typeof AccordionContent>;
  }
}
