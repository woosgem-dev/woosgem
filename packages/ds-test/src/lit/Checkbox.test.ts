/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Checkbox } from '@woosgem-dev/lit';
import { Checkbox as CheckboxDef } from '@woosgem-dev/core';

describe('Checkbox (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Checkbox>>(html`
        <wg-checkbox></wg-checkbox>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('checkbox')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Checkbox>>(html`
        <wg-checkbox size="lg"></wg-checkbox>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: checked prop이 core 결과와 일치한다', async () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ checked: true });

      const el = await fixture<InstanceType<typeof Checkbox>>(html`
        <wg-checkbox checked></wg-checkbox>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('checked');
    });

    it('TC-L103: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Checkbox>>(html`
        <wg-checkbox disabled></wg-checkbox>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });

    it('TC-L104: indeterminate prop이 core 결과와 일치한다', async () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true });

      const el = await fixture<InstanceType<typeof Checkbox>>(html`
        <wg-checkbox indeterminate></wg-checkbox>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('indeterminate');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Checkbox>>(html`
        <wg-checkbox></wg-checkbox>
      `);

      expect(el.getAttribute('data-state')).toBe('unchecked');

      el.checked = true;
      await el.updateComplete;

      expect(el.getAttribute('data-state')).toBe('checked');
    });

    it('TC-L301: checked + indeterminate 시 indeterminate 우선', async () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ checked: true, indeterminate: true });

      const el = await fixture<InstanceType<typeof Checkbox>>(html`
        <wg-checkbox checked indeterminate></wg-checkbox>
      `);

      expect(coreAttrs['data-state']).toBe('indeterminate');
      expect(el.getAttribute('data-state')).toBe('indeterminate');
    });
  });
});
