/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Badge } from '@woosgem/ds-lit';
import { Badge as BadgeDef } from '@woosgem-dev/core';

describe('Badge (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge>Badge</wg-badge>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.classList.contains('badge')).toBe(true);
    });

    it('TC-L101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ variant: 'outline' });

      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge variant="outline">Badge</wg-badge>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('outline');
    });

    it('TC-L102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'danger' });

      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge color="danger">Badge</wg-badge>
      `);

      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-color')).toBe('danger');
    });

    it('TC-L103: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge size="lg">Badge</wg-badge>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: slot ì»¨í…ì¸ ê? ?Œë”ë§ëœ??, async () => {
      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge>Test Badge</wg-badge>
      `);

      expect(el.textContent?.trim()).toBe('Test Badge');
    });

    it('TC-L301: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge color="primary">Badge</wg-badge>
      `);

      expect(el.getAttribute('data-color')).toBe('primary');

      el.color = 'success';
      await el.updateComplete;

      expect(el.getAttribute('data-color')).toBe('success');
    });
  });
});
