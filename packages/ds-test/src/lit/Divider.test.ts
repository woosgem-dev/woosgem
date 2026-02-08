/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Divider } from '@woosgem/ds-lit';
import { Divider as DividerDef } from '@woosgem-dev/core';

describe('Divider (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Divider>>(html`
        <wg-divider></wg-divider>
      `);

      expect(el.getAttribute('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(el.classList.contains('divider')).toBe(true);
    });

    it('TC-L101: orientation prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ orientation: 'vertical' });

      const el = await fixture<InstanceType<typeof Divider>>(html`
        <wg-divider orientation="vertical"></wg-divider>
      `);

      expect(el.getAttribute('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(el.getAttribute('data-orientation')).toBe('vertical');
    });

    it('TC-L102: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ variant: 'dashed' });

      const el = await fixture<InstanceType<typeof Divider>>(html`
        <wg-divider variant="dashed"></wg-divider>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('dashed');
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
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
