import type { DefineComponent } from 'vue';
import {
  Accordion as AccordionDef,
  AccordionItem as AccordionItemDef,
  AccordionTrigger as AccordionTriggerDef,
  AccordionContent as AccordionContentDef,
  type AccordionStyleProps,
  type AccordionItemStyleProps,
  type AccordionTriggerStyleProps,
  type AccordionContentStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

// Accordion

export type AccordionProps = Prettify<AccordionStyleProps & { class?: string }>;

export const Accordion = createComponent(AccordionDef) as DefineComponent<AccordionProps>;

// AccordionItem

export type AccordionItemProps = Prettify<AccordionItemStyleProps & { class?: string }>;

export const AccordionItem = createComponent(AccordionItemDef) as DefineComponent<AccordionItemProps>;

// AccordionTrigger

export type AccordionTriggerProps = Prettify<AccordionTriggerStyleProps & { class?: string }>;

export const AccordionTrigger = createComponent(AccordionTriggerDef) as DefineComponent<AccordionTriggerProps>;

// AccordionContent

export type AccordionContentProps = Prettify<AccordionContentStyleProps & { class?: string }>;

export const AccordionContent = createComponent(AccordionContentDef) as DefineComponent<AccordionContentProps>;
