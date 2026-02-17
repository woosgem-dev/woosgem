/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Tab } from '@woosgem-dev/lit';
import { Tab as TabDef } from '@woosgem-dev/core';

describe('Tab (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = TabDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Tab>>(html`
        <wg-tab></wg-tab>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('wg-tab')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof Tab>>(html`
        <wg-tab variant="filled"></wg-tab>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L102: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Tab>>(html`
        <wg-tab size="lg"></wg-tab>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: selected prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true });

      const el = await fixture<InstanceType<typeof Tab>>(html`
        <wg-tab selected></wg-tab>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('selected');
    });

    it('TC-L104: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Tab>>(html`
        <wg-tab disabled></wg-tab>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot이 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Tab>>(html`
        <wg-tab>Tab Title</wg-tab>
      `);

      expect(el.textContent?.trim()).toBe('Tab Title');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Tab>>(html`
        <wg-tab></wg-tab>
      `);

      expect(el.getAttribute('data-state')).toBeFalsy();

      el.selected = true;
      await el.updateComplete;

      expect(el.getAttribute('data-state')).toBe('selected');
    });
  });
});
