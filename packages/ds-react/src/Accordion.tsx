import type { ComponentPropsWithoutRef, ComponentType } from 'react';
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

//Accordion

export type AccordionProps = Prettify<
  AccordionStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof AccordionStyleProps | 'data-type' | 'data-size' | 'data-variant'
    > & {
      'data-type'?: never;
      'data-size'?: never;
      'data-variant'?: never;
    }
>;

export type AccordionRef = HTMLDivElement;

export const Accordion = createComponent(AccordionDef) as ComponentType<AccordionProps>;

//AccordionItem

export type AccordionItemProps = Prettify<
  AccordionItemStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof AccordionItemStyleProps | 'data-state'> & {
      'data-state'?: never;
    }
>;

export type AccordionItemRef = HTMLDivElement;

export const AccordionItem = createComponent(AccordionItemDef) as ComponentType<AccordionItemProps>;

//AccordionTrigger

export type AccordionTriggerProps = Prettify<
  AccordionTriggerStyleProps &
    Omit<ComponentPropsWithoutRef<'button'>, 'type'> & {
      type?: never;
    }
>;

export type AccordionTriggerRef = HTMLButtonElement;

export const AccordionTrigger = createComponent(AccordionTriggerDef) as ComponentType<AccordionTriggerProps>;

//AccordionContent

export type AccordionContentProps = Prettify<
  AccordionContentStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, 'role'> & {
      role?: never;
    }
>;

export type AccordionContentRef = HTMLDivElement;

export const AccordionContent = createComponent(AccordionContentDef) as ComponentType<AccordionContentProps>;
