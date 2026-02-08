/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest';
import { html, fixture } from './setup';
import { Button } from '@woosgem/ds-lit';
import { Button as ButtonDef } from '@woosgem-dev/core';

describe('Button (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Button>>(html`
        <wg-button>Click me</wg-button>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('btn')).toBe(true);
    });

    it('TC-L101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ variant: 'outline' });

      const el = await fixture<InstanceType<typeof Button>>(html`
        <wg-button variant="outline">Outline</wg-button>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('outline');
    });

    it('TC-L102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ color: 'danger' });

      const el = await fixture<InstanceType<typeof Button>>(html`
        <wg-button color="danger">Danger</wg-button>
      `);

      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-color')).toBe('danger');
    });

    it('TC-L103: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Button>>(html`
        <wg-button size="lg">Large</wg-button>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Button>>(html`
        <wg-button disabled>Disabled</wg-button>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-L200: click ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
      const handleClick = vi.fn();

      const el = await fixture<InstanceType<typeof Button>>(html`
        <wg-button>Click me</wg-button>
      `);

      el.addEventListener('click', handleClick);
      el.click();

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: slot ì»¨í…ì¸ ê? ?Œë”ë§ëœ??, async () => {
      const el = await fixture<InstanceType<typeof Button>>(html`
        <wg-button>Hello World</wg-button>
      `);

      expect(el.textContent?.trim()).toBe('Hello World');
    });
  });
});
