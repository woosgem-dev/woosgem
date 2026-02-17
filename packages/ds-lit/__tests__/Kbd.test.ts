/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Kbd } from '@woosgem-dev/lit';
import { Kbd as KbdDef } from '@woosgem-dev/core';

describe('Kbd (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Kbd>>(html`
        <wg-kbd>Ctrl</wg-kbd>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.classList.contains('wg-kbd')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Kbd>>(html`
        <wg-kbd size="lg">Enter</wg-kbd>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({ variant: 'flat' });

      const el = await fixture<InstanceType<typeof Kbd>>(html`
        <wg-kbd variant="flat">Shift</wg-kbd>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('flat');
    });

    it('TC-L103: outline variant가 core 결과와 일치한다', async () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({ variant: 'outline' });

      const el = await fixture<InstanceType<typeof Kbd>>(html`
        <wg-kbd variant="outline">Tab</wg-kbd>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('outline');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Kbd>>(html`
        <wg-kbd>Ctrl + C</wg-kbd>
      `);

      expect(el.textContent?.trim()).toContain('Ctrl + C');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Kbd>>(html`
        <wg-kbd size="sm">K</wg-kbd>
      `);

      expect(el.getAttribute('data-size')).toBe('sm');

      el.size = 'md';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('md');
    });
  });
});
