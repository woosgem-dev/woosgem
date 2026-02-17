import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Menu, MenuItem, MenuDivider, MenuGroup } from '../src/Menu';
import {
  Menu as MenuDef,
  MenuItem as MenuItemDef,
  MenuDivider as MenuDividerDef,
  MenuGroup as MenuGroupDef,
  MenuSizes,
} from '@woosgem-dev/core';

describe('Menu (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = MenuDef.mapPropsToAttrs({});
      const wrapper = mount(Menu, { slots: { default: 'Content' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('Size 변형', () => {
    for (const size of MenuSizes) {
      it(`TC-C110: size: ${size}가 적용된다`, () => {
        const wrapper = mount(Menu, { props: { size } });
        expect(wrapper.attributes('data-size')).toBe(size);
      });
    }
  });

  describe('접근성', () => {
    it('TC-A100: role="menu"가 적용된다', () => {
      const wrapper = mount(Menu);
      expect(wrapper.attributes('role')).toBe('menu');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      const wrapper = mount(Menu);
      expect(wrapper.attributes('data-size')).toBe('md');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Menu, { props: { class: 'custom' } });
      expect(wrapper.classes()).toContain('menu');
      expect(wrapper.classes()).toContain('custom');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(Menu, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });
});

describe('MenuItem (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V200: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = MenuItemDef.mapPropsToAttrs({});
      const wrapper = mount(MenuItem, { slots: { default: 'Action' } });

      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.attributes('type')).toBe(coreAttrs.type);
      expect(wrapper.attributes('tabindex')).toBe(coreAttrs.tabindex);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('상태 변형', () => {
    it('TC-C210: active 상태가 적용된다', () => {
      const wrapper = mount(MenuItem, { props: { active: true } });
      expect(wrapper.attributes('data-state')).toBe('active');
    });

    it('TC-C211: disabled 상태가 적용된다', () => {
      const wrapper = mount(MenuItem, { props: { disabled: true } });
      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('aria-disabled')).toBe('true');
    });

    it('TC-C212: destructive 상태가 적용된다', () => {
      const wrapper = mount(MenuItem, { props: { destructive: true } });
      expect(wrapper.attributes('data-destructive')).toBe('true');
    });
  });

  describe('접근성', () => {
    it('TC-A200: role="menuitem"이 적용된다', () => {
      const wrapper = mount(MenuItem);
      expect(wrapper.attributes('role')).toBe('menuitem');
    });

    it('TC-A201: tabindex="-1"이 적용된다', () => {
      const wrapper = mount(MenuItem);
      expect(wrapper.attributes('tabindex')).toBe('-1');
    });

    it('TC-A202: type="button"이 적용된다', () => {
      const wrapper = mount(MenuItem);
      expect(wrapper.attributes('type')).toBe('button');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O200: class 추가 시 병합된다', () => {
      const wrapper = mount(MenuItem, { props: { class: 'custom' } });
      expect(wrapper.classes()).toContain('menu-item');
      expect(wrapper.classes()).toContain('custom');
    });
  });
});

describe('MenuDivider (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V300: core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = MenuDividerDef.mapPropsToAttrs();
      const wrapper = mount(MenuDivider);

      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('접근성', () => {
    it('TC-A300: role="separator"가 적용된다', () => {
      const wrapper = mount(MenuDivider);
      expect(wrapper.attributes('role')).toBe('separator');
    });
  });
});

describe('MenuGroup (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V400: core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = MenuGroupDef.mapPropsToAttrs();
      const wrapper = mount(MenuGroup, { slots: { default: 'Content' } });

      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('접근성', () => {
    it('TC-A400: role="group"이 적용된다', () => {
      const wrapper = mount(MenuGroup);
      expect(wrapper.attributes('role')).toBe('group');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O400: class 추가 시 병합된다', () => {
      const wrapper = mount(MenuGroup, { props: { class: 'custom' } });
      expect(wrapper.classes()).toContain('menu-group');
      expect(wrapper.classes()).toContain('custom');
    });
  });
});
