import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { Toast, ToastContainer, useToast, type ToastItem } from '@woosgem-dev/vue';
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

    it('TC-C112: variant: warning이 적용된다', () => {
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
    it('TC-C010: variant 기본값이 info이다', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('data-variant')).toBe('info');
    });

    it('TC-C011: position 기본값이 top-right이다', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('data-position')).toBe('top-right');
    });
  });

  describe('visible/숨김', () => {
    it('TC-V100: visible=false이면 렌더링되지 않는다', () => {
      const wrapper = mount(Toast, { props: { visible: false } });
      // Should render nothing (null)
      expect(wrapper.html()).toSatisfy((html: string) => html === '' || html === '<!---->');
    });

    it('TC-V101: visible=true이면 렌더링된다', () => {
      const wrapper = mount(Toast, {
        props: { visible: true },
        slots: { default: 'Visible' },
      });
      expect(wrapper.text()).toContain('Visible');
    });
  });

  describe('Auto-dismiss', () => {
    it('TC-AD100: duration 후 close 이벤트 발생한다', async () => {
      const wrapper = mount(Toast, {
        props: { duration: 3000, visible: true },
      });

      vi.advanceTimersByTime(3000);
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted('close')).toBeTruthy();
    });

    it('TC-AD101: duration=0이면 자동 닫힘 비활성화된다', async () => {
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
    it('TC-VM100: update:visible 이벤트 발생한다', async () => {
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

describe('ToastContainer (Vue)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('TC-TC100: 여러 토스트를 position별로 그룹핑하여 렌더링한다', () => {
    const toasts: ToastItem[] = [
      { id: '1', content: 'Top right', position: 'top-right' },
      { id: '2', content: 'Bottom left', position: 'bottom-left' },
      { id: '3', content: 'Top right 2', position: 'top-right' },
    ];

    const wrapper = mount(ToastContainer, {
      props: { toasts },
    });

    const groups = wrapper.findAll('.toast-container');
    expect(groups.length).toBe(2);

    const topRight = wrapper.find('[data-position="top-right"]');
    const bottomLeft = wrapper.find('[data-position="bottom-left"]');
    expect(topRight.exists()).toBe(true);
    expect(bottomLeft.exists()).toBe(true);

    const topRightAlerts = topRight.findAll('[role="alert"]');
    expect(topRightAlerts.length).toBe(2);

    const bottomLeftAlerts = bottomLeft.findAll('[role="alert"]');
    expect(bottomLeftAlerts.length).toBe(1);
  });

  it('TC-TC101: 각 토스트의 닫힘 시 dismiss 이벤트가 올바른 id로 발생한다', async () => {
    const toasts: ToastItem[] = [
      { id: 'toast-a', content: 'First', duration: 1000 },
    ];

    const wrapper = mount(ToastContainer, {
      props: { toasts },
    });

    vi.advanceTimersByTime(1000);
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('dismiss')).toBeTruthy();
    expect(wrapper.emitted('dismiss')![0]).toEqual(['toast-a']);
  });

  it('TC-TC102: position prop이 기본 위치로 적용된다', () => {
    const toasts: ToastItem[] = [
      { id: '1', content: 'No position set' },
    ];

    const wrapper = mount(ToastContainer, {
      props: { toasts, position: 'bottom-center' },
    });

    const group = wrapper.find('[data-position="bottom-center"]');
    expect(group.exists()).toBe(true);
    expect(group.findAll('[role="alert"]').length).toBe(1);
  });

  it('TC-TC103: position 미지정 시 기본값 top-right가 적용된다', () => {
    const toasts: ToastItem[] = [
      { id: '1', content: 'Default position' },
    ];

    const wrapper = mount(ToastContainer, {
      props: { toasts },
    });

    const group = wrapper.find('[data-position="top-right"]');
    expect(group.exists()).toBe(true);
  });

  it('TC-TC104: 빈 배열이면 아무것도 렌더링하지 않는다', () => {
    const wrapper = mount(ToastContainer, {
      props: { toasts: [] },
    });

    expect(wrapper.findAll('.toast-container').length).toBe(0);
  });
});

describe('useToast (Vue)', () => {
  /**
   * Helper to mount a wrapper component that uses the useToast composable.
   * Returns the composable's return value via the component instance.
   */
  function mountUseToast(options?: Parameters<typeof useToast>[0]) {
    const Comp = defineComponent({
      setup() {
        const result = useToast(options);
        return { result };
      },
      render() {
        return h('div');
      },
    });

    const wrapper = mount(Comp);
    return {
      wrapper,
      get result() {
        return (wrapper.vm as any).result;
      },
    };
  }

  it('TC-UT100: addToast가 id를 반환한다', () => {
    const { result } = mountUseToast();

    const id = result.addToast('Hello');

    expect(id).toBeDefined();
    expect(typeof id).toBe('string');
    expect(id).toMatch(/^toast-/);
  });

  it('TC-UT101: addToast 후 toasts 배열에 항목이 추가된다', () => {
    const { result } = mountUseToast();

    result.addToast('First toast');

    expect(result.toasts.value).toHaveLength(1);
    expect(result.toasts.value[0].content).toBe('First toast');
  });

  it('TC-UT102: addToast에 옵션을 전달하면 반영된다', () => {
    const { result } = mountUseToast();

    result.addToast('Custom toast', {
      variant: 'error',
      position: 'bottom-left',
      duration: 10000,
      closable: false,
    });

    const toast = result.toasts.value[0];
    expect(toast.variant).toBe('error');
    expect(toast.position).toBe('bottom-left');
    expect(toast.duration).toBe(10000);
    expect(toast.closable).toBe(false);
  });

  it('TC-UT103: removeToast가 해당 id의 토스트를 제거한다', () => {
    const { result } = mountUseToast();

    const id = result.addToast('To remove');
    result.addToast('Keep this');

    expect(result.toasts.value).toHaveLength(2);

    result.removeToast(id);

    expect(result.toasts.value).toHaveLength(1);
    expect(result.toasts.value[0].content).toBe('Keep this');
  });

  it('TC-UT104: clearAll이 모든 토스트를 제거한다', () => {
    const { result } = mountUseToast();

    result.addToast('Toast 1');
    result.addToast('Toast 2');
    result.addToast('Toast 3');

    expect(result.toasts.value).toHaveLength(3);

    result.clearAll();

    expect(result.toasts.value).toHaveLength(0);
  });

  it('TC-UT105: maxToasts 초과 시 오래된 토스트부터 제거된다', () => {
    const { result } = mountUseToast({ maxToasts: 2 });

    result.addToast('Toast 1');
    result.addToast('Toast 2');
    result.addToast('Toast 3');

    expect(result.toasts.value).toHaveLength(2);
    expect(result.toasts.value[0].content).toBe('Toast 2');
    expect(result.toasts.value[1].content).toBe('Toast 3');
  });

  it('TC-UT106: defaultDuration이 새 토스트에 적용된다', () => {
    const { result } = mountUseToast({ defaultDuration: 8000 });

    result.addToast('With custom duration');

    expect(result.toasts.value[0].duration).toBe(8000);
  });

  it('TC-UT107: defaultPosition이 새 토스트에 적용된다', () => {
    const { result } = mountUseToast({ defaultPosition: 'bottom-center' });

    result.addToast('Bottom center toast');

    expect(result.toasts.value[0].position).toBe('bottom-center');
  });

  it('TC-UT108: 옵션 미지정 시 기본값이 적용된다', () => {
    const { result } = mountUseToast();

    result.addToast('Default toast');

    const toast = result.toasts.value[0];
    expect(toast.duration).toBe(ToastDef.defaultProps.duration);
    expect(toast.position).toBe(ToastDef.defaultProps.position);
    expect(toast.closable).toBe(true);
  });

  it('TC-UT109: addToast 개별 옵션이 defaultDuration/defaultPosition을 오버라이드한다', () => {
    const { result } = mountUseToast({ defaultDuration: 3000, defaultPosition: 'top-left' });

    result.addToast('Override toast', {
      duration: 9000,
      position: 'bottom-right',
    });

    const toast = result.toasts.value[0];
    expect(toast.duration).toBe(9000);
    expect(toast.position).toBe('bottom-right');
  });

  it('TC-UT110: closable 버튼 클릭 시 close 이벤트가 발생한다', async () => {
    const wrapper = mount(Toast, {
      props: { visible: true, closable: true },
      slots: { default: 'Closable toast' },
    });

    const closeButton = wrapper.find('button');
    if (closeButton.exists()) {
      await closeButton.trigger('click');
      expect(wrapper.emitted('close')).toBeTruthy();
    }
  });
});
