import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Tooltip } from '@woosgem-dev/vue';

describe('Tooltip (Vue)', () => {
  describe('기본 렌더링', () => {
    it('TC-V100: default 슬롯이 렌더링된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hello' },
        slots: { default: '<button>Hover me</button>' },
      });
      expect(wrapper.text()).toContain('Hover me');
    });

    it('TC-V101: tooltip 래퍼가 렌더링된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Tooltip text' },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.classes()).toContain('wg-tooltip-wrapper');
    });

    it('TC-V102: tooltip 내용이 숨겨진 상태로 렌더링된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hidden text' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });
  });

  describe('Position 변형', () => {
    it('TC-C110: position: top이 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'top' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-position')).toBe('top');
    });

    it('TC-C111: position: bottom이 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'bottom' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-position')).toBe('bottom');
    });

    it('TC-C112: position: left가 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'left' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-position')).toBe('left');
    });

    it('TC-C113: position: right가 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'right' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-position')).toBe('right');
    });
  });

  describe('Trigger 동작', () => {
    it('TC-T100: hover 시 tooltip이 보인다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hover tooltip', trigger: 'hover' },
        slots: { default: '<button>Hover me</button>' },
      });

      await wrapper.trigger('mouseenter');

      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });

    it('TC-T101: hover 해제 시 tooltip이 숨겨진다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hover tooltip', trigger: 'hover' },
        slots: { default: '<button>Hover me</button>' },
      });

      await wrapper.trigger('mouseenter');
      await wrapper.trigger('mouseleave');

      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });

    it('TC-T110: click 시 tooltip이 토글된다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Click tooltip', trigger: 'click' },
        slots: { default: '<button>Click me</button>' },
      });

      await wrapper.trigger('click');
      let tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');

      await wrapper.trigger('click');
      tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });

    it('TC-T120: focus 시 tooltip이 보인다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Focus tooltip', trigger: 'focus' },
        slots: { default: '<button>Focus me</button>' },
      });

      await wrapper.trigger('focus');

      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });
  });

  describe('Disabled 상태', () => {
    it('TC-D100: disabled 시 hover해도 tooltip이 보이지 않는다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Disabled', disabled: true },
        slots: { default: '<button>Hover me</button>' },
      });

      await wrapper.trigger('mouseenter');

      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });
  });

  describe('Arrow', () => {
    it('TC-A100: arrow=true이면 arrow 요소가 렌더링된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Arrow', arrow: true },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.find('.wg-tooltip__arrow').exists()).toBe(true);
    });

    it('TC-A101: arrow=false이면 arrow 요소가 렌더링되지 않는다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'No arrow', arrow: false },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.find('.wg-tooltip__arrow').exists()).toBe(false);
    });
  });

  describe('접근성', () => {
    it('TC-A200: role="tooltip"가 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Tooltip' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('role')).toBe('tooltip');
    });

    it('TC-A201: visible 시 aria-describedby가 설정된다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Desc tooltip', trigger: 'hover' },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      const trigger = wrapper.find('.wg-tooltip__trigger');
      expect(trigger.attributes('aria-describedby')).toBeTruthy();
    });
  });

  describe('기본값', () => {
    it('TC-C010: position 기본값이 top이다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Default' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-position')).toBe('top');
    });

    it('TC-C011: trigger 기본값이 hover이다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Default' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-trigger')).toBe('hover');
    });
  });

  describe('Delay', () => {
    it('TC-DL100: delay가 0이면 즉시 보인다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Immediate', delay: 0 },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      const tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });

    it('TC-DL101: delay가 설정되면 지연 후 보인다', async () => {
      vi.useFakeTimers();

      const wrapper = mount(Tooltip, {
        props: { content: 'Delayed', delay: 500 },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      // Not visible yet
      let tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');

      vi.advanceTimersByTime(500);
      await wrapper.vm.$nextTick();

      tooltip = wrapper.find('.wg-tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');

      vi.useRealTimers();
    });
  });

  describe('visible/숨김', () => {
    it('TC-VM100: update:visible 이벤트 발생한다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Model', trigger: 'hover' },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      expect(wrapper.emitted('update:visible')).toBeTruthy();
      expect(wrapper.emitted('update:visible')![0]).toEqual([true]);
    });
  });
});
