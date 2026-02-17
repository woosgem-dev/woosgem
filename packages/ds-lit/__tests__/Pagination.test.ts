/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Pagination, PaginationItem } from '@woosgem-dev/lit';
import { Pagination as PaginationDef, PaginationItem as PaginationItemDef } from '@woosgem-dev/core';

describe('Pagination (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = PaginationDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Pagination>>(html`
        <wg-pagination></wg-pagination>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-shape')).toBe(coreAttrs['data-shape']);
      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.getAttribute('aria-label')).toBe(coreAttrs['aria-label']);
      expect(el.classList.contains('wg-pagination')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = PaginationDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof Pagination>>(html`
        <wg-pagination variant="filled"></wg-pagination>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L102: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = PaginationDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Pagination>>(html`
        <wg-pagination size="lg"></wg-pagination>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: shape prop이 core 결과와 일치한다', async () => {
      const coreAttrs = PaginationDef.mapPropsToAttrs({ shape: 'circle' });

      const el = await fixture<InstanceType<typeof Pagination>>(html`
        <wg-pagination shape="circle"></wg-pagination>
      `);

      expect(el.getAttribute('data-shape')).toBe(coreAttrs['data-shape']);
      expect(el.getAttribute('data-shape')).toBe('circle');
    });

    it('TC-L104: ghost variant가 core 결과와 일치한다', async () => {
      const coreAttrs = PaginationDef.mapPropsToAttrs({ variant: 'ghost' });

      const el = await fixture<InstanceType<typeof Pagination>>(html`
        <wg-pagination variant="ghost"></wg-pagination>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('ghost');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Pagination>>(html`
        <wg-pagination>
          <wg-pagination-item>1</wg-pagination-item>
        </wg-pagination>
      `);

      expect(el.textContent?.trim()).toContain('1');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Pagination>>(html`
        <wg-pagination variant="outline"></wg-pagination>
      `);

      expect(el.getAttribute('data-variant')).toBe('outline');

      (el as any).variant = 'filled';
      await (el as any).updateComplete;

      expect(el.getAttribute('data-variant')).toBe('filled');
    });
  });
});

describe('PaginationItem (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L200: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = PaginationItemDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof PaginationItem>>(html`
        <wg-pagination-item>1</wg-pagination-item>
      `);

      expect(el.classList.contains('wg-pagination__item')).toBe(true);
      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state'] ?? null);
    });

    it('TC-L201: active prop이 core 결과와 일치한다', async () => {
      const coreAttrs = PaginationItemDef.mapPropsToAttrs({ active: true });

      const el = await fixture<InstanceType<typeof PaginationItem>>(html`
        <wg-pagination-item active>1</wg-pagination-item>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('active');
      expect(el.getAttribute('aria-current')).toBe('page');
    });

    it('TC-L202: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = PaginationItemDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof PaginationItem>>(html`
        <wg-pagination-item disabled>1</wg-pagination-item>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof PaginationItem>>(html`
        <wg-pagination-item>1</wg-pagination-item>
      `);

      expect(el.textContent?.trim()).toContain('1');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof PaginationItem>>(html`
        <wg-pagination-item>1</wg-pagination-item>
      `);

      expect(el.getAttribute('data-state')).toBeNull();

      (el as any).active = true;
      await (el as any).updateComplete;

      expect(el.getAttribute('data-state')).toBe('active');
      expect(el.getAttribute('aria-current')).toBe('page');
    });
  });
});
