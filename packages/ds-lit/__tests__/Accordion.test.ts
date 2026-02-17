/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@woosgem-dev/lit';
import {
  Accordion as AccordionDef,
  AccordionItem as AccordionItemDef,
} from '@woosgem-dev/core';

describe('Accordion (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Accordion>>(html`
        <wg-accordion>Content</wg-accordion>
      `);

      expect(el.getAttribute('data-type')).toBe(coreAttrs['data-type']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.classList.contains('wg-accordion')).toBe(true);
    });

    it('TC-L101: type prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ type: 'multiple' });

      const el = await fixture<InstanceType<typeof Accordion>>(html`
        <wg-accordion type="multiple">Content</wg-accordion>
      `);

      expect(el.getAttribute('data-type')).toBe(coreAttrs['data-type']);
      expect(el.getAttribute('data-type')).toBe('multiple');
    });

    it('TC-L102: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Accordion>>(html`
        <wg-accordion size="lg">Content</wg-accordion>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof Accordion>>(html`
        <wg-accordion variant="filled">Content</wg-accordion>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L104: ghost variant가 core 결과와 일치한다', async () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ variant: 'ghost' });

      const el = await fixture<InstanceType<typeof Accordion>>(html`
        <wg-accordion variant="ghost">Content</wg-accordion>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('ghost');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Accordion>>(html`
        <wg-accordion>Accordion content</wg-accordion>
      `);

      expect(el.textContent?.trim()).toContain('Accordion content');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Accordion>>(html`
        <wg-accordion size="sm">Content</wg-accordion>
      `);

      expect(el.getAttribute('data-size')).toBe('sm');

      el.size = 'lg';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });
});

describe('AccordionItem (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L200: 기본 props가 core 결과와 일치한다', async () => {
      const el = await fixture<InstanceType<typeof AccordionItem>>(html`
        <wg-accordion-item>Item</wg-accordion-item>
      `);

      expect(el.classList.contains('wg-accordion__item')).toBe(true);
    });

    it('TC-L201: open prop이 data-state="open"을 설정한다', async () => {
      const el = await fixture<InstanceType<typeof AccordionItem>>(html`
        <wg-accordion-item open>Item</wg-accordion-item>
      `);

      expect(el.getAttribute('data-state')).toBe('open');
    });

    it('TC-L202: disabled prop이 data-state="disabled"를 설정한다', async () => {
      const el = await fixture<InstanceType<typeof AccordionItem>>(html`
        <wg-accordion-item disabled>Item</wg-accordion-item>
      `);

      expect(el.getAttribute('data-state')).toBe('disabled');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L310: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof AccordionItem>>(html`
        <wg-accordion-item>Item</wg-accordion-item>
      `);

      el.open = true;
      await el.updateComplete;

      expect(el.getAttribute('data-state')).toBe('open');
    });
  });
});

describe('AccordionTrigger (Lit)', () => {
  it('TC-L400: accordion-trigger 클래스가 적용된다', async () => {
    const el = await fixture<InstanceType<typeof AccordionTrigger>>(html`
      <wg-accordion-trigger>Trigger</wg-accordion-trigger>
    `);

    expect(el.classList.contains('wg-accordion__trigger')).toBe(true);
  });

  it('TC-L401: type="button" 속성이 설정된다', async () => {
    const el = await fixture<InstanceType<typeof AccordionTrigger>>(html`
      <wg-accordion-trigger>Trigger</wg-accordion-trigger>
    `);

    expect(el.getAttribute('type')).toBe('button');
  });

  it('TC-L402: slot 컨텐츠가 렌더링된다', async () => {
    const el = await fixture<InstanceType<typeof AccordionTrigger>>(html`
      <wg-accordion-trigger>Click me</wg-accordion-trigger>
    `);

    expect(el.textContent?.trim()).toContain('Click me');
  });
});

describe('AccordionContent (Lit)', () => {
  it('TC-L500: accordion-content 클래스가 적용된다', async () => {
    const el = await fixture<InstanceType<typeof AccordionContent>>(html`
      <wg-accordion-content>Content body</wg-accordion-content>
    `);

    expect(el.classList.contains('wg-accordion__content')).toBe(true);
  });

  it('TC-L501: role="region" 속성이 설정된다', async () => {
    const el = await fixture<InstanceType<typeof AccordionContent>>(html`
      <wg-accordion-content>Content body</wg-accordion-content>
    `);

    expect(el.getAttribute('role')).toBe('region');
  });

  it('TC-L502: slot 컨텐츠가 렌더링된다', async () => {
    const el = await fixture<InstanceType<typeof AccordionContent>>(html`
      <wg-accordion-content>Panel content</wg-accordion-content>
    `);

    expect(el.textContent?.trim()).toContain('Panel content');
  });
});
