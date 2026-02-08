/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Input } from '@woosgem/ds-lit';
import { Input as InputDef } from '@woosgem-dev/core';

describe('Input (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input></wg-input>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('input')).toBe(true);
    });

    it('TC-L101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input variant="filled"></wg-input>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input size="lg"></wg-input>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: error prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input error></wg-input>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('error');
    });

    it('TC-L104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input disabled></wg-input>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input variant="outline"></wg-input>
      `);

      expect(el.getAttribute('data-variant')).toBe('outline');

      el.variant = 'filled';
      await el.updateComplete;

      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L301: error?€ success ?™ì‹œ true ??error ?°ì„ ', async () => {
      const coreAttrs = InputDef.mapPropsToAttrs({ error: true, success: true });

      const el = await fixture<InstanceType<typeof Input>>(html`
        <wg-input error success></wg-input>
      `);

      expect(coreAttrs['data-state']).toBe('error');
      expect(el.getAttribute('data-state')).toBe('error');
    });
  });
});
