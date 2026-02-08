/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Avatar } from '@woosgem/ds-lit';
import { Avatar as AvatarDef } from '@woosgem-dev/core';

describe('Avatar (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar></wg-avatar>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('avatar')).toBe(true);
    });

    it('TC-L101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar size="lg"></wg-avatar>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: shape prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ shape: 'square' });

      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar shape="square"></wg-avatar>
      `);

      expect(el.getAttribute('data-shape')).toBe(coreAttrs['data-shape']);
      expect(el.getAttribute('data-shape')).toBe('square');
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: slot ì»¨í…ì¸ ê? ?Œë”ë§ëœ??, async () => {
      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar>JD</wg-avatar>
      `);

      expect(el.textContent?.trim()).toBe('JD');
    });

    it('TC-L301: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar size="md"></wg-avatar>
      `);

      expect(el.getAttribute('data-size')).toBe('md');

      el.size = 'xl';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('xl');
    });
  });
});
