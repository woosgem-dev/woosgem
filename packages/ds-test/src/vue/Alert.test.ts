import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Alert } from '@woosgem-dev/vue';
import { Alert as AlertDef } from '@woosgem-dev/core';

describe('Alert (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({});
      const wrapper = mount(Alert, { slots: { default: 'Message' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-status')).toBe(coreAttrs['data-status']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ variant: 'filled' });
      const wrapper = mount(Alert, { props: { variant: 'filled' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });

    it('TC-V102: status prop이 core 결과와 일치한다', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ status: 'error' });
      const wrapper = mount(Alert, { props: { status: 'error' } });

      expect(wrapper.attributes('data-status')).toBe(coreAttrs['data-status']);
      expect(wrapper.attributes('data-status')).toBe('error');
    });

    it('TC-V103: closable prop이 core 결과와 일치한다', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ closable: true });
      const wrapper = mount(Alert, { props: { closable: true } });

      expect(wrapper.attributes('data-closable')).toBe(String(coreAttrs['data-closable']));
    });

    it('TC-V104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'filled' as const,
        status: 'success' as const,
        closable: true,
      };
      const coreAttrs = AlertDef.mapPropsToAttrs(props);
      const wrapper = mount(Alert, { props });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-status')).toBe(coreAttrs['data-status']);
      expect(wrapper.attributes('data-closable')).toBe(String(coreAttrs['data-closable']));
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: filled가 적용된다', () => {
      const wrapper = mount(Alert, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });

    it('TC-C111: variant: outline 적용된다', () => {
      const wrapper = mount(Alert, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C112: variant: subtle 적용된다', () => {
      const wrapper = mount(Alert, { props: { variant: 'subtle' } });
      expect(wrapper.attributes('data-variant')).toBe('subtle');
    });
  });

  describe('Status 변형', () => {
    it('TC-C120: status: info가 적용된다', () => {
      const wrapper = mount(Alert, { props: { status: 'info' } });
      expect(wrapper.attributes('data-status')).toBe('info');
    });

    it('TC-C121: status: success가 적용된다', () => {
      const wrapper = mount(Alert, { props: { status: 'success' } });
      expect(wrapper.attributes('data-status')).toBe('success');
    });

    it('TC-C122: status: warning 적용된다', () => {
      const wrapper = mount(Alert, { props: { status: 'warning' } });
      expect(wrapper.attributes('data-status')).toBe('warning');
    });

    it('TC-C123: status: error가 적용된다', () => {
      const wrapper = mount(Alert, { props: { status: 'error' } });
      expect(wrapper.attributes('data-status')).toBe('error');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="alert"가 적용된다', () => {
      const wrapper = mount(Alert);
      expect(wrapper.attributes('role')).toBe('alert');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 subtle다', () => {
      const wrapper = mount(Alert);
      expect(wrapper.attributes('data-variant')).toBe('subtle');
    });

    it('TC-C011: status 기본값 info다', () => {
      const wrapper = mount(Alert);
      expect(wrapper.attributes('data-status')).toBe('info');
    });

    it('TC-C012: closable 기본값 false다 (성 음)', () => {
      const wrapper = mount(Alert);
      expect(wrapper.attributes('data-closable')).toBeUndefined();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Alert, { props: { class: 'custom-alert' } });

      expect(wrapper.classes()).toContain('alert');
      expect(wrapper.classes()).toContain('custom-alert');
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      const wrapper = mount(Alert, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
      });

      expect(wrapper.attributes('data-variant')).toBe('filled');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      const wrapper = mount(Alert, {
        props: { status: 'error' },
        attrs: { 'data-status': 'custom' },
      });

      expect(wrapper.attributes('data-status')).toBe('error');
    });

    it('TC-O132: 보호 성 role 버이차단', () => {
      const wrapper = mount(Alert, {
        attrs: { role: 'status' },
      });

      expect(wrapper.attributes('role')).toBe('alert');
    });
  });
});
