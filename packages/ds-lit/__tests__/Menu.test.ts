/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Menu, MenuItem, MenuDivider, MenuGroup } from '@woosgem-dev/lit';
import {
  Menu as MenuDef,
  MenuItem as MenuItemDef,
  MenuDivider as MenuDividerDef,
  MenuGroup as MenuGroupDef,
} from '@woosgem-dev/core';

describe('Menu (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = MenuDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Menu>>(html`
        <wg-menu>
          <wg-menu-item>Action</wg-menu-item>
        </wg-menu>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.classList.contains('wg-menu')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = MenuDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Menu>>(html`
        <wg-menu size="lg">
          <wg-menu-item>Action</wg-menu-item>
        </wg-menu>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: sm size가 core 결과와 일치한다', async () => {
      const coreAttrs = MenuDef.mapPropsToAttrs({ size: 'sm' });

      const el = await fixture<InstanceType<typeof Menu>>(html`
        <wg-menu size="sm">
          <wg-menu-item>Action</wg-menu-item>
        </wg-menu>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('sm');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Menu>>(html`
        <wg-menu>
          <wg-menu-item>Action 1</wg-menu-item>
        </wg-menu>
      `);

      expect(el.textContent?.trim()).toContain('Action 1');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Menu>>(html`
        <wg-menu size="sm">
          <wg-menu-item>Action</wg-menu-item>
        </wg-menu>
      `);

      expect(el.getAttribute('data-size')).toBe('sm');

      el.size = 'lg';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });
});

describe('MenuItem (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L200: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = MenuItemDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof MenuItem>>(html`
        <wg-menu-item>Action</wg-menu-item>
      `);

      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.getAttribute('tabindex')).toBe(coreAttrs.tabindex);
      expect(el.classList.contains('wg-menu__item')).toBe(true);
    });

    it('TC-L201: active 상태가 core 결과와 일치한다', async () => {
      const coreAttrs = MenuItemDef.mapPropsToAttrs({ active: true });

      const el = await fixture<InstanceType<typeof MenuItem>>(html`
        <wg-menu-item active>Active Item</wg-menu-item>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('active');
    });

    it('TC-L202: disabled 상태가 core 결과와 일치한다', async () => {
      const coreAttrs = MenuItemDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof MenuItem>>(html`
        <wg-menu-item disabled>Disabled Item</wg-menu-item>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('aria-disabled')).toBe(coreAttrs['aria-disabled']);
    });

    it('TC-L203: destructive 상태가 core 결과와 일치한다', async () => {
      const el = await fixture<InstanceType<typeof MenuItem>>(html`
        <wg-menu-item destructive>Delete</wg-menu-item>
      `);

      expect(el.hasAttribute('data-destructive')).toBe(true);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L310: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof MenuItem>>(html`
        <wg-menu-item>Click me</wg-menu-item>
      `);

      expect(el.textContent?.trim()).toContain('Click me');
    });
  });
});

describe('MenuDivider (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L400: core 결과와 일치한다', async () => {
      const coreAttrs = MenuDividerDef.mapPropsToAttrs();

      const el = await fixture<InstanceType<typeof MenuDivider>>(html`
        <wg-menu-divider></wg-menu-divider>
      `);

      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.classList.contains('wg-menu__divider')).toBe(true);
    });
  });
});

describe('MenuGroup (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L500: core 결과와 일치한다', async () => {
      const coreAttrs = MenuGroupDef.mapPropsToAttrs();

      const el = await fixture<InstanceType<typeof MenuGroup>>(html`
        <wg-menu-group>
          <wg-menu-item>Item</wg-menu-item>
        </wg-menu-group>
      `);

      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.classList.contains('wg-menu__group')).toBe(true);
    });
  });
});
