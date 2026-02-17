import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Drawer } from '../src/Drawer';
import { Drawer as DrawerDef } from '@woosgem-dev/core';

describe('Drawer (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = DrawerDef.mapPropsToAttrs({});
      const wrapper = mount(Drawer, { slots: { default: 'Content' } });

      expect(wrapper.attributes('data-position')).toBe(coreAttrs['data-position']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.attributes('aria-modal')).toBe(coreAttrs['aria-modal']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('Position 변형', () => {
    it('TC-C110: position: left가 적용된다', () => {
      const wrapper = mount(Drawer, { props: { position: 'left' } });
      expect(wrapper.attributes('data-position')).toBe('left');
    });

    it('TC-C111: position: right가 적용된다', () => {
      const wrapper = mount(Drawer, { props: { position: 'right' } });
      expect(wrapper.attributes('data-position')).toBe('right');
    });

    it('TC-C112: position: top이 적용된다', () => {
      const wrapper = mount(Drawer, { props: { position: 'top' } });
      expect(wrapper.attributes('data-position')).toBe('top');
    });

    it('TC-C113: position: bottom이 적용된다', () => {
      const wrapper = mount(Drawer, { props: { position: 'bottom' } });
      expect(wrapper.attributes('data-position')).toBe('bottom');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const wrapper = mount(Drawer, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Drawer, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Drawer, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-C123: size: full이 적용된다', () => {
      const wrapper = mount(Drawer, { props: { size: 'full' } });
      expect(wrapper.attributes('data-size')).toBe('full');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="dialog"가 적용된다', () => {
      const wrapper = mount(Drawer);
      expect(wrapper.attributes('role')).toBe('dialog');
    });

    it('TC-A101: aria-modal="true"가 적용된다', () => {
      const wrapper = mount(Drawer);
      expect(wrapper.attributes('aria-modal')).toBe('true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: position 기본값이 right이다', () => {
      const wrapper = mount(Drawer);
      expect(wrapper.attributes('data-position')).toBe('right');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const wrapper = mount(Drawer);
      expect(wrapper.attributes('data-size')).toBe('md');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Drawer, { props: { class: 'custom' } });
      expect(wrapper.classes()).toContain('wg-drawer');
      expect(wrapper.classes()).toContain('custom');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(Drawer, {
        props: { position: 'left' },
        attrs: { 'data-position': 'custom' },
      });
      expect(wrapper.attributes('data-position')).toBe('left');
    });
  });
});
