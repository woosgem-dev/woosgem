/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Radio } from '@woosgem-dev/lit';
import { Radio as RadioDef } from '@woosgem-dev/core';

describe('Radio (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과 치다', async () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio></wg-radio>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('radio')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio size="lg"></wg-radio>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: checked prop이 core 결과와 일치한다', async () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ checked: true });

      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio checked></wg-radio>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('checked');
    });

    it('TC-L103: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio disabled></wg-radio>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: 로티 변성데트다', async () => {
      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio></wg-radio>
      `);

      expect(el.getAttribute('data-state')).toBeFalsy();

      el.checked = true;
      await el.updateComplete;

      expect(el.getAttribute('data-state')).toBe('checked');
    });
  });
});
