/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Icon } from '@woosgem/ds-lit';
import { Icon as IconDef } from '@woosgem-dev/core';

describe('Icon (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = IconDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Icon>>(html`
        <wg-icon></wg-icon>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('icon')).toBe(true);
    });

    it('TC-L101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = IconDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Icon>>(html`
        <wg-icon size="lg"></wg-icon>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: slot ì»¨í…ì¸ ê? ?Œë”ë§ëœ??, async () => {
      const el = await fixture<InstanceType<typeof Icon>>(html`
        <wg-icon>
          <svg width="16" height="16"><path d="M0 0h16v16H0z"/></svg>
        </wg-icon>
      `);

      const svg = el.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('TC-L301: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof Icon>>(html`
        <wg-icon size="md"></wg-icon>
      `);

      expect(el.getAttribute('data-size')).toBe('md');

      el.size = 'xl';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('xl');
    });
  });
});
