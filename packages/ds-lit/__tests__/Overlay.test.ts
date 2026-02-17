/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Overlay } from '@woosgem-dev/lit';
import { Overlay as OverlayDef } from '@woosgem-dev/core';

describe('Overlay (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay></wg-overlay>
      `);

      expect(el.getAttribute('data-opacity')).toBe(coreAttrs['data-opacity']);
      expect(el.getAttribute('data-level')).toBe(coreAttrs['data-level']);
      expect(el.classList.contains('wg-overlay')).toBe(true);
    });

    it('TC-L101: opacity prop이 core 결과와 일치한다', async () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ opacity: 'dark' });

      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay opacity="dark"></wg-overlay>
      `);

      expect(el.getAttribute('data-opacity')).toBe(coreAttrs['data-opacity']);
      expect(el.getAttribute('data-opacity')).toBe('dark');
    });

    it('TC-L102: blur prop이 core 결과와 일치한다', async () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ blur: true });

      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay blur></wg-overlay>
      `);

      // Boolean attribute는 문자열로 설정됨
      expect(el.hasAttribute('data-blur')).toBe(true);
      expect(coreAttrs['data-blur']).toBe(true);
    });

    it('TC-L103: level prop이 core 결과와 일치한다', async () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ level: 'popover' });

      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay level="popover"></wg-overlay>
      `);

      expect(el.getAttribute('data-level')).toBe(coreAttrs['data-level']);
      expect(el.getAttribute('data-level')).toBe('popover');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot이 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay>
          <div>Overlay Content</div>
        </wg-overlay>
      `);

      expect(el.textContent?.trim()).toContain('Overlay Content');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay opacity="medium"></wg-overlay>
      `);

      expect(el.getAttribute('data-opacity')).toBe('medium');

      el.opacity = 'dark';
      await el.updateComplete;

      expect(el.getAttribute('data-opacity')).toBe('dark');
    });
  });
});
