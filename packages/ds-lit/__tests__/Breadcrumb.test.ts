/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Breadcrumb, BreadcrumbItem } from '@woosgem-dev/lit';
import { Breadcrumb as BreadcrumbDef, BreadcrumbItem as BreadcrumbItemDef } from '@woosgem-dev/core';

describe('Breadcrumb (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = BreadcrumbDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Breadcrumb>>(html`
        <wg-breadcrumb></wg-breadcrumb>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('aria-label')).toBe(coreAttrs['aria-label']);
      expect(el.classList.contains('breadcrumb')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = BreadcrumbDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Breadcrumb>>(html`
        <wg-breadcrumb size="lg"></wg-breadcrumb>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: size sm이 core 결과와 일치한다', async () => {
      const coreAttrs = BreadcrumbDef.mapPropsToAttrs({ size: 'sm' });

      const el = await fixture<InstanceType<typeof Breadcrumb>>(html`
        <wg-breadcrumb size="sm"></wg-breadcrumb>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('sm');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Breadcrumb>>(html`
        <wg-breadcrumb>
          <wg-breadcrumb-item>Home</wg-breadcrumb-item>
        </wg-breadcrumb>
      `);

      expect(el.textContent?.trim()).toContain('Home');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Breadcrumb>>(html`
        <wg-breadcrumb size="sm"></wg-breadcrumb>
      `);

      expect(el.getAttribute('data-size')).toBe('sm');

      (el as any).size = 'lg';
      await (el as any).updateComplete;

      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });
});

describe('BreadcrumbItem (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L200: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = BreadcrumbItemDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof BreadcrumbItem>>(html`
        <wg-breadcrumb-item>Home</wg-breadcrumb-item>
      `);

      expect(el.classList.contains('breadcrumb-item')).toBe(true);
      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state'] ?? null);
    });

    it('TC-L201: active prop이 core 결과와 일치한다', async () => {
      const coreAttrs = BreadcrumbItemDef.mapPropsToAttrs({ active: true });

      const el = await fixture<InstanceType<typeof BreadcrumbItem>>(html`
        <wg-breadcrumb-item active>Current</wg-breadcrumb-item>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('active');
      expect(el.getAttribute('aria-current')).toBe('page');
    });

    it('TC-L202: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = BreadcrumbItemDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof BreadcrumbItem>>(html`
        <wg-breadcrumb-item disabled>Disabled</wg-breadcrumb-item>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof BreadcrumbItem>>(html`
        <wg-breadcrumb-item>Home</wg-breadcrumb-item>
      `);

      expect(el.textContent?.trim()).toContain('Home');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof BreadcrumbItem>>(html`
        <wg-breadcrumb-item>Item</wg-breadcrumb-item>
      `);

      expect(el.getAttribute('data-state')).toBeNull();

      (el as any).active = true;
      await (el as any).updateComplete;

      expect(el.getAttribute('data-state')).toBe('active');
      expect(el.getAttribute('aria-current')).toBe('page');
    });
  });
});
