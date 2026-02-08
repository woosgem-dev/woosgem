/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { SegmentedControl } from '@woosgem/ds-lit';
import { SegmentedControl as SegmentedControlDef } from '@woosgem-dev/core';

describe('SegmentedControl (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control></wg-segmented-control>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('segmented-control')).toBe(true);
    });

    it('TC-L101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control size="lg"></wg-segmented-control>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: fullWidth prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ fullWidth: true });

      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control full-width></wg-segmented-control>
      `);

      // Boolean attribute??ë¹?ë¬¸ìž?´ë¡œ ?¤ì •??      expect(el.hasAttribute('data-full-width')).toBe(true);
      expect(coreAttrs['data-full-width']).toBe(true);
    });

    it('TC-L103: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control disabled></wg-segmented-control>
      `);

      // Boolean attribute??ë¹?ë¬¸ìž?´ë¡œ ?¤ì •??      expect(el.hasAttribute('data-disabled')).toBe(true);
      expect(el.hasAttribute('disabled')).toBe(true);
      expect(coreAttrs['data-disabled']).toBe(true);
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: slot ì»¨í…ì¸ ê? ?Œë”ë§ëœ??, async () => {
      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control>
          <button>Option 1</button>
          <button>Option 2</button>
        </wg-segmented-control>
      `);

      const buttons = el.querySelectorAll('button');
      expect(buttons.length).toBe(2);
    });

    it('TC-L301: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control size="md"></wg-segmented-control>
      `);

      expect(el.getAttribute('data-size')).toBe('md');

      el.size = 'lg';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });
});
