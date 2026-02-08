/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Textarea } from '@woosgem/ds-lit';
import { Textarea as TextareaDef } from '@woosgem-dev/core';

describe('Textarea (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea></wg-textarea>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('textarea')).toBe(true);
    });

    it('TC-L101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea variant="filled"></wg-textarea>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea size="lg"></wg-textarea>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: error prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ error: true });

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea error></wg-textarea>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('error');
    });

    it('TC-L104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea disabled></wg-textarea>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea variant="outline"></wg-textarea>
      `);

      expect(el.getAttribute('data-variant')).toBe('outline');

      el.variant = 'filled';
      await el.updateComplete;

      expect(el.getAttribute('data-variant')).toBe('filled');
    });
  });
});
