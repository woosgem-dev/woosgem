import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Pagination, PaginationItem } from '../src/Pagination';
import { Pagination as PaginationDef, PaginationItem as PaginationItemDef } from '@woosgem-dev/core';

describe('Pagination (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = PaginationDef.mapPropsToAttrs({});
      const wrapper = mount(Pagination);

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-shape')).toBe(coreAttrs['data-shape']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.attributes('aria-label')).toBe(coreAttrs['aria-label']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outline이 적용된다', () => {
      const wrapper = mount(Pagination, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C111: variant: filled가 적용된다', () => {
      const wrapper = mount(Pagination, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });

    it('TC-C112: variant: ghost가 적용된다', () => {
      const wrapper = mount(Pagination, { props: { variant: 'ghost' } });
      expect(wrapper.attributes('data-variant')).toBe('ghost');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      const wrapper = mount(Pagination, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Pagination, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Pagination, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Shape 변형', () => {
    it('TC-C130: shape: rounded가 적용된다', () => {
      const wrapper = mount(Pagination, { props: { shape: 'rounded' } });
      expect(wrapper.attributes('data-shape')).toBe('rounded');
    });

    it('TC-C131: shape: circle이 적용된다', () => {
      const wrapper = mount(Pagination, { props: { shape: 'circle' } });
      expect(wrapper.attributes('data-shape')).toBe('circle');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="navigation"이 적용된다', () => {
      const wrapper = mount(Pagination);
      expect(wrapper.attributes('role')).toBe('navigation');
    });

    it('TC-A101: aria-label="Pagination"이 적용된다', () => {
      const wrapper = mount(Pagination);
      expect(wrapper.attributes('aria-label')).toBe('Pagination');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 outline이다', () => {
      const wrapper = mount(Pagination);
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const wrapper = mount(Pagination);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C012: shape 기본값이 rounded이다', () => {
      const wrapper = mount(Pagination);
      expect(wrapper.attributes('data-shape')).toBe('rounded');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Pagination, { props: { class: 'custom' } });
      expect(wrapper.classes()).toContain('pagination');
      expect(wrapper.classes()).toContain('custom');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(Pagination, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
      });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });
});

describe('PaginationItem (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V200: 기본 props가 core 결과와 일치한다', () => {
      const coreAttrs = PaginationItemDef.mapPropsToAttrs({});
      const wrapper = mount(PaginationItem, { slots: { default: '1' } });
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('상태', () => {
    it('TC-S100: active 상태가 적용된다', () => {
      const wrapper = mount(PaginationItem, { props: { active: true }, slots: { default: '1' } });
      expect(wrapper.attributes('data-state')).toBe('active');
      expect(wrapper.attributes('aria-current')).toBe('page');
    });

    it('TC-S101: disabled 상태가 적용된다', () => {
      const wrapper = mount(PaginationItem, { props: { disabled: true }, slots: { default: '1' } });
      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('aria-disabled')).toBe('true');
    });

    it('TC-S102: active=false 시 aria-current 미적용', () => {
      const wrapper = mount(PaginationItem, { slots: { default: '1' } });
      expect(wrapper.attributes('aria-current')).toBeUndefined();
    });
  });
});
