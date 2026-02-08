/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest';
import { html, fixture } from './setup';
import { IconButton } from '@woosgem/ds-lit';
import { IconButton as IconButtonDef } from '@woosgem-dev/core';

describe('IconButton (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button></wg-icon-button>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('icon-btn')).toBe(true);
    });

    it('TC-L101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button variant="filled"></wg-icon-button>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L102: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button disabled></wg-icon-button>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-L200: click ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
      const handleClick = vi.fn();

      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button></wg-icon-button>
      `);

      el.addEventListener('click', handleClick);
      el.click();

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: slot ì»¨í…ì¸ ê? ?Œë”ë§ëœ??, async () => {
      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button>X</wg-icon-button>
      `);

      expect(el.textContent?.trim()).toBe('X');
    });
  });
});
