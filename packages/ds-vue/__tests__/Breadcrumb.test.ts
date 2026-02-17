import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Breadcrumb, BreadcrumbItem } from '../src/Breadcrumb';
import { Breadcrumb as BreadcrumbDef, BreadcrumbItem as BreadcrumbItemDef } from '@woosgem-dev/core';

describe('Breadcrumb (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = BreadcrumbDef.mapPropsToAttrs({});
      const wrapper = mount(Breadcrumb);

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('aria-label')).toBe(coreAttrs['aria-label']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const wrapper = mount(Breadcrumb, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Breadcrumb, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Breadcrumb, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('접근성', () => {
    it('TC-A100: aria-label="Breadcrumb"이 적용된다', () => {
      const wrapper = mount(Breadcrumb);
      expect(wrapper.attributes('aria-label')).toBe('Breadcrumb');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      const wrapper = mount(Breadcrumb);
      expect(wrapper.attributes('data-size')).toBe('md');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Breadcrumb, { props: { class: 'custom' } });
      expect(wrapper.classes()).toContain('breadcrumb');
      expect(wrapper.classes()).toContain('custom');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(Breadcrumb, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });
});

describe('BreadcrumbItem (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V200: 기본 props가 core 결과와 일치한다', () => {
      const coreAttrs = BreadcrumbItemDef.mapPropsToAttrs({});
      const wrapper = mount(BreadcrumbItem, { slots: { default: 'Home' } });
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('상태', () => {
    it('TC-S100: active 상태가 적용된다', () => {
      const wrapper = mount(BreadcrumbItem, { props: { active: true }, slots: { default: 'Current' } });
      expect(wrapper.attributes('data-state')).toBe('active');
      expect(wrapper.attributes('aria-current')).toBe('page');
    });

    it('TC-S101: disabled 상태가 적용된다', () => {
      const wrapper = mount(BreadcrumbItem, { props: { disabled: true }, slots: { default: 'Disabled' } });
      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('aria-disabled')).toBe('true');
    });

    it('TC-S102: active=false 시 aria-current 미적용', () => {
      const wrapper = mount(BreadcrumbItem, { slots: { default: 'Item' } });
      expect(wrapper.attributes('aria-current')).toBeUndefined();
    });
  });
});
