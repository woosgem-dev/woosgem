/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Switch } from '@woosgem/ds-lit';
import { Switch as SwitchDef } from '@woosgem-dev/core';

describe('Switch (Lit)', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-L100: ê¸°ë³¸ propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Switch>>(html`
        <wg-switch></wg-switch>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('switch')).toBe(true);
    });

    it('TC-L101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Switch>>(html`
        <wg-switch size="lg"></wg-switch>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: checked prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ checked: true });

      const el = await fixture<InstanceType<typeof Switch>>(html`
        <wg-switch checked></wg-switch>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('checked');
    });

    it('TC-L103: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', async () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Switch>>(html`
        <wg-switch disabled></wg-switch>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Web Component ?„ìš©', () => {
    it('TC-L300: ?„ë¡œ?¼í‹° ë³€ê²????ì„±???…ë°?´íŠ¸?œë‹¤', async () => {
      const el = await fixture<InstanceType<typeof Switch>>(html`
        <wg-switch></wg-switch>
      `);

      expect(el.getAttribute('data-state')).toBeFalsy();

      el.checked = true;
      await el.updateComplete;

      expect(el.getAttribute('data-state')).toBe('checked');
    });
  });
});
