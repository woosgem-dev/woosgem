/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Spinner } from '@woosgem-dev/lit';
import { Spinner as SpinnerDef } from '@woosgem-dev/core';

describe('Spinner (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Spinner>>(html`
        <wg-spinner></wg-spinner>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.classList.contains('spinner')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Spinner>>(html`
        <wg-spinner size="lg"></wg-spinner>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: color prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ color: 'danger' });

      const el = await fixture<InstanceType<typeof Spinner>>(html`
        <wg-spinner color="danger"></wg-spinner>
      `);

      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-color')).toBe('danger');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Spinner>>(html`
        <wg-spinner size="md"></wg-spinner>
      `);

      expect(el.getAttribute('data-size')).toBe('md');

      el.size = 'xl';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('xl');
    });
  });
});
