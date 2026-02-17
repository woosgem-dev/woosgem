/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Drawer } from '@woosgem-dev/lit';
import { Drawer as DrawerDef } from '@woosgem-dev/core';

describe('Drawer (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = DrawerDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Drawer>>(html`
        <wg-drawer>Content</wg-drawer>
      `);

      expect(el.getAttribute('data-position')).toBe(coreAttrs['data-position']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.getAttribute('aria-modal')).toBe(coreAttrs['aria-modal']);
      expect(el.classList.contains('wg-drawer')).toBe(true);
    });

    it('TC-L101: position prop이 core 결과와 일치한다', async () => {
      const coreAttrs = DrawerDef.mapPropsToAttrs({ position: 'left' });

      const el = await fixture<InstanceType<typeof Drawer>>(html`
        <wg-drawer position="left">Content</wg-drawer>
      `);

      expect(el.getAttribute('data-position')).toBe(coreAttrs['data-position']);
      expect(el.getAttribute('data-position')).toBe('left');
    });

    it('TC-L102: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = DrawerDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Drawer>>(html`
        <wg-drawer size="lg">Content</wg-drawer>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: position bottom이 core 결과와 일치한다', async () => {
      const coreAttrs = DrawerDef.mapPropsToAttrs({ position: 'bottom' });

      const el = await fixture<InstanceType<typeof Drawer>>(html`
        <wg-drawer position="bottom">Content</wg-drawer>
      `);

      expect(el.getAttribute('data-position')).toBe(coreAttrs['data-position']);
      expect(el.getAttribute('data-position')).toBe('bottom');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Drawer>>(html`
        <wg-drawer>Drawer Content</wg-drawer>
      `);

      expect(el.textContent?.trim()).toContain('Drawer Content');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Drawer>>(html`
        <wg-drawer position="left">Content</wg-drawer>
      `);

      expect(el.getAttribute('data-position')).toBe('left');

      el.position = 'right';
      await el.updateComplete;

      expect(el.getAttribute('data-position')).toBe('right');
    });
  });
});
