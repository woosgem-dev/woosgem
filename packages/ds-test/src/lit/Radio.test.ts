/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Radio } from '@woosgem/ds-lit';
import { Radio as RadioDef } from '@woosgem-dev/core';

describe('Radio (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio></wg-radio>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('radio')).toBe(true);
    });

    it('TC-L101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio size="lg"></wg-radio>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: checked prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ checked: true });

      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio checked></wg-radio>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('checked');
    });

    it('TC-L103: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio disabled></wg-radio>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof Radio>>(html`
        <wg-radio></wg-radio>
      `);

      expect(el.getAttribute('data-state')).toBeFalsy();

      el.checked = true;
      await el.updateComplete;

      expect(el.getAttribute('data-state')).toBe('checked');
    });
  });
});
