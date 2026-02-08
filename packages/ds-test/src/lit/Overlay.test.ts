/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Overlay } from '@woosgem/ds-lit';
import { Overlay as OverlayDef } from '@woosgem-dev/core';

describe('Overlay (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay></wg-overlay>
      `);

      expect(el.getAttribute('data-opacity')).toBe(coreAttrs['data-opacity']);
      expect(el.getAttribute('data-level')).toBe(coreAttrs['data-level']);
      expect(el.classList.contains('overlay')).toBe(true);
    });

    it('TC-L101: opacity prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ opacity: 'dark' });

      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay opacity="dark"></wg-overlay>
      `);

      expect(el.getAttribute('data-opacity')).toBe(coreAttrs['data-opacity']);
      expect(el.getAttribute('data-opacity')).toBe('dark');
    });

    it('TC-L102: blur prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ blur: true });

      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay blur></wg-overlay>
      `);

      // Boolean attribute??ë¹?ë¬¸ìž?´ë¡œ ?¤ì •??      expect(el.hasAttribute('data-blur')).toBe(true);
      expect(coreAttrs['data-blur']).toBe(true);
    });

    it('TC-L103: level prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ level: 'popover' });

      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay level="popover"></wg-overlay>
      `);

      expect(el.getAttribute('data-level')).toBe(coreAttrs['data-level']);
      expect(el.getAttribute('data-level')).toBe('popover');
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: slot ì»¨í…ì¸ ê? ?Œë”ë§ëœ??, async () => {
      const el = await fixture<InstanceType<typeof Overlay>>(html`
        <wg-overlay>
          <div>Overlay Content</div>
        </wg-overlay>
      `);

      expect(el.textContent?.trim()).toContain('Overlay Content');
    });

    it('TC-L301: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
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
