/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Spinner } from '@woosgem/ds-lit';
import { Spinner as SpinnerDef } from '@woosgem-dev/core';

describe('Spinner (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Spinner>>(html`
        <wg-spinner></wg-spinner>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.classList.contains('spinner')).toBe(true);
    });

    it('TC-L101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Spinner>>(html`
        <wg-spinner size="lg"></wg-spinner>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ color: 'danger' });

      const el = await fixture<InstanceType<typeof Spinner>>(html`
        <wg-spinner color="danger"></wg-spinner>
      `);

      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-color')).toBe('danger');
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof Spinner>>(html`
        <wg-spinner size="md"></wg-spinner>
      `);

      expect(el.getAttribute('data-size')).toBe('md');

      el.size = 'xl';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('xl');
    });
  });
});
