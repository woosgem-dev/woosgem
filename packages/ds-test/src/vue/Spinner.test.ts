import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Spinner } from '@woosgem/ds-vue';
import { Spinner as SpinnerDef } from '@woosgem/ds-core';

describe('Spinner (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({});
      const wrapper = mount(Spinner);

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('aria-label')).toBe(coreAttrs['aria-label']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Spinner, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-V102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ color: 'secondary' });
      const wrapper = mount(Spinner, { props: { color: 'secondary' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-color')).toBe('secondary');
    });

    it('TC-V103: label prop이 core 결과와 일치한다', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ label: '데이터 불러오는 중...' });
      const wrapper = mount(Spinner, { props: { label: '데이터 불러오는 중...' } });

      expect(wrapper.attributes('aria-label')).toBe(coreAttrs['aria-label']);
      expect(wrapper.attributes('aria-label')).toBe('데이터 불러오는 중...');
    });

    it('TC-V104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        size: 'lg' as const,
        color: 'muted' as const,
        label: 'Please wait',
      };
      const coreAttrs = SpinnerDef.mapPropsToAttrs(props);
      const wrapper = mount(Spinner, { props });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('aria-label')).toBe(coreAttrs['aria-label']);
    });
  });

  describe('Size 변형', () => {
    it('TC-C110: size: xs가 적용된다', () => {
      const wrapper = mount(Spinner, { props: { size: 'xs' } });
      expect(wrapper.attributes('data-size')).toBe('xs');
    });

    it('TC-C111: size: sm이 적용된다', () => {
      const wrapper = mount(Spinner, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C112: size: md가 적용된다', () => {
      const wrapper = mount(Spinner, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C113: size: lg가 적용된다', () => {
      const wrapper = mount(Spinner, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Color 변형', () => {
    it('TC-C120: color: primary가 적용된다', () => {
      const wrapper = mount(Spinner, { props: { color: 'primary' } });
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C121: color: secondary가 적용된다', () => {
      const wrapper = mount(Spinner, { props: { color: 'secondary' } });
      expect(wrapper.attributes('data-color')).toBe('secondary');
    });

    it('TC-C122: color: muted가 적용된다', () => {
      const wrapper = mount(Spinner, { props: { color: 'muted' } });
      expect(wrapper.attributes('data-color')).toBe('muted');
    });

    it('TC-C123: color: current가 적용된다', () => {
      const wrapper = mount(Spinner, { props: { color: 'current' } });
      expect(wrapper.attributes('data-color')).toBe('current');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="status"가 항상 적용된다', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('role')).toBe('status');
    });

    it('TC-A101: 기본 aria-label이 적용된다', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('aria-label')).toBe('Loading...');
    });

    it('TC-A102: 커스텀 label이 aria-label로 적용된다', () => {
      const wrapper = mount(Spinner, { props: { label: 'Saving changes...' } });
      expect(wrapper.attributes('aria-label')).toBe('Saving changes...');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값은 md이다', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C011: color 기본값은 primary이다', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C012: label 기본값은 "Loading..."이다', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('aria-label')).toBe('Loading...');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Spinner, { props: { class: 'custom-spinner' } });

      expect(wrapper.classes()).toContain('spinner');
      expect(wrapper.classes()).toContain('custom-spinner');
    });

    it('TC-O130: 보호 속성 data-size 오버라이드 차단', () => {
      const wrapper = mount(Spinner, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });

      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-O131: 보호 속성 data-color 오버라이드 차단', () => {
      const wrapper = mount(Spinner, {
        props: { color: 'muted' },
        attrs: { 'data-color': 'custom' },
      });

      expect(wrapper.attributes('data-color')).toBe('muted');
    });

    it('TC-O132: 보호 속성 role 오버라이드 차단', () => {
      const wrapper = mount(Spinner, {
        attrs: { role: 'progressbar' },
      });

      expect(wrapper.attributes('role')).toBe('status');
    });
  });
});
