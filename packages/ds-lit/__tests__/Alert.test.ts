/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Alert } from '@woosgem-dev/lit';
import { Alert as AlertDef } from '@woosgem-dev/core';

describe('Alert (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Alert>>(html`
        <wg-alert>Alert message</wg-alert>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-status')).toBe(coreAttrs['data-status']);
      expect(el.classList.contains('alert')).toBe(true);
    });

    it('TC-L101: status prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ status: 'error' });

      const el = await fixture<InstanceType<typeof Alert>>(html`
        <wg-alert status="error">Error message</wg-alert>
      `);

      expect(el.getAttribute('data-status')).toBe(coreAttrs['data-status']);
      expect(el.getAttribute('data-status')).toBe('error');
    });

    it('TC-L102: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof Alert>>(html`
        <wg-alert variant="filled">Filled alert</wg-alert>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L103: closable prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ closable: true });

      const el = await fixture<InstanceType<typeof Alert>>(html`
        <wg-alert closable>Closable alert</wg-alert>
      `);

      expect(el.getAttribute('data-closable')).toBe(String(coreAttrs['data-closable']));
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Alert>>(html`
        <wg-alert>Alert content</wg-alert>
      `);

      expect(el.textContent?.trim()).toBe('Alert content');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Alert>>(html`
        <wg-alert status="info">Alert</wg-alert>
      `);

      expect(el.getAttribute('data-status')).toBe('info');

      el.status = 'warning';
      await el.updateComplete;

      expect(el.getAttribute('data-status')).toBe('warning');
    });
  });
});
