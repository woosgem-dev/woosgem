/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Input } from '@woosgem/ds-lit';
import { Input as InputDef } from '@woosgem/ds-core';

describe('Input (Lit)', () => {
  describe('core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input></wg-input>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('input')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input variant="filled"></wg-input>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L102: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input size="lg"></wg-input>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: error prop이 core 결과와 일치한다', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input error></wg-input>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('error');
    });

    it('TC-L104: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input disabled></wg-input>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input variant="outline"></wg-input>
      `);

      expect(el.getAttribute('data-variant')).toBe('outline');

      el.variant = 'filled';
      await el.updateComplete;

      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L301: error와 success 동시 true 시 error 우선', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true, success: true });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input error success></wg-input>
      `);

      expect(coreAttrs['data-state']).toBe('error');
      expect(el.getAttribute('data-state')).toBe('error');
    });
  });
});
