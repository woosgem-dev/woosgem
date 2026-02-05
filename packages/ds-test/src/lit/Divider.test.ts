/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Divider } from '@woosgem/ds-lit';
import { Divider as DividerDef } from '@woosgem/ds-core';

describe('Divider (Lit)', () => {
  describe('core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Divider>>(html`
        <wg-divider></wg-divider>
      `);

      expect(el.getAttribute('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(el.classList.contains('divider')).toBe(true);
    });

    it('TC-L101: orientation prop이 core 결과와 일치한다', async () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ orientation: 'vertical' });

      const el = await fixture<InstanceType<typeof Divider>>(html`
        <wg-divider orientation="vertical"></wg-divider>
      `);

      expect(el.getAttribute('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(el.getAttribute('data-orientation')).toBe('vertical');
    });

    it('TC-L102: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ variant: 'dashed' });

      const el = await fixture<InstanceType<typeof Divider>>(html`
        <wg-divider variant="dashed"></wg-divider>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('dashed');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Divider>>(html`
        <wg-divider orientation="horizontal"></wg-divider>
      `);

      expect(el.getAttribute('data-orientation')).toBe('horizontal');

      el.orientation = 'vertical';
      await el.updateComplete;

      expect(el.getAttribute('data-orientation')).toBe('vertical');
    });
  });
});
