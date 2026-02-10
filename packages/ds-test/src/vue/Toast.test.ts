import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { Toast } from '@woosgem-dev/vue';
import { Toast as ToastDef } from '@woosgem-dev/core';

describe('Toast (Vue)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = ToastDef.mapPropsToAttrs({});
      const wrapper = mount(Toast, { slots: { default: 'Message' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-position')).toBe(coreAttrs['data-position']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = ToastDef.mapPropsToAttrs({ variant: 'success' });
      const wrapper = mount(Toast, { props: { variant: 'success' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: info가 적용된다', () => {
      const wrapper = mount(Toast, { props: { variant: 'info' } });
      expect(wrapper.attributes('data-variant')).toBe('info');
    });

    it('TC-C111: variant: success가 적용된다', () => {
      const wrapper = mount(Toast, { props: { variant: 'success' } });
      expect(wrapper.attributes('data-variant')).toBe('success');
    });

    it('TC-C112: variant: warning 적용된다', () => {
      const wrapper = mount(Toast, { props: { variant: 'warning' } });
      expect(wrapper.attributes('data-variant')).toBe('warning');
    });

    it('TC-C113: variant: error가 적용된다', () => {
      const wrapper = mount(Toast, { props: { variant: 'error' } });
      expect(wrapper.attributes('data-variant')).toBe('error');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="alert"가 적용된다', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('role')).toBe('alert');
    });

    it('TC-A101: aria-live="polite"가 적용된다', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('aria-live')).toBe('polite');
    });

    it('TC-A102: aria-atomic="true"가 적용된다', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('aria-atomic')).toBe('true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 info다', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('data-variant')).toBe('info');
    });

    it('TC-C011: position 기본값 top-right다', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('data-position')).toBe('top-right');
    });
  });

  describe('visible/숨김', () => {
    it('TC-V100: visible=false면 렌더링되지 않는다', () => {
      const wrapper = mount(Toast, { props: { visible: false } });
      // Should render nothing (null)
      expect(wrapper.html()).toSatisfy((html: string) => html === '' || html === '<!---->');
    });

    it('TC-V101: visible=true면 더링된', () => {
      const wrapper = mount(Toast, {
        props: { visible: true },
        slots: { default: 'Visible' },
      });
      expect(wrapper.text()).toContain('Visible');
    });
  });

  describe('Auto-dismiss', () => {
    it('TC-AD100: duration close 벤 발생다', async () => {
      const wrapper = mount(Toast, {
        props: { duration: 3000, visible: true },
      });

      vi.advanceTimersByTime(3000);
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted('close')).toBeTruthy();
    });

    it('TC-AD101: duration=0면 동 힘비활화다', async () => {
      const wrapper = mount(Toast, {
        props: { duration: 0, visible: true },
      });

      vi.advanceTimersByTime(10000);
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted('close')).toBeFalsy();
    });
  });

  describe('슬롯', () => {
    it('TC-S100: default 슬롯이 렌더링된다', () => {
      const wrapper = mount(Toast, {
        slots: { default: 'Toast message' },
      });
      expect(wrapper.text()).toContain('Toast message');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Toast, { props: { class: 'custom-toast' } });
      expect(wrapper.classes()).toContain('toast');
      expect(wrapper.classes()).toContain('custom-toast');
    });
  });

  describe('visible/숨김', () => {
    it('TC-VM100: update:visible 벤 발생다', async () => {
      const wrapper = mount(Toast, {
        props: { visible: true, duration: 1000 },
      });

      vi.advanceTimersByTime(1000);
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted('update:visible')).toBeTruthy();
      expect(wrapper.emitted('update:visible')![0]).toEqual([false]);
    });
  });
});
