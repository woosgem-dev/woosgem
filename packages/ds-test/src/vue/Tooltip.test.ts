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

    it('TC-V101: tooltip 퍼가 더링된', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Tooltip text' },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.classes()).toContain('tooltip-wrapper');
    });

    it('TC-V102: tooltip 내용이 숨겨진 상태로 렌더링된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hidden text' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });
  });

  describe('Position 변형', () => {
    it('TC-C110: position: top 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'top' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('top');
    });

    it('TC-C111: position: bottom 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'bottom' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('bottom');
    });

    it('TC-C112: position: left가 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'left' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('left');
    });

    it('TC-C113: position: right가 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'right' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('right');
    });
  });

  describe('Trigger 동작', () => {
    it('TC-T100: hover tooltip보인', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hover tooltip', trigger: 'hover' },
        slots: { default: '<button>Hover me</button>' },
      });

      await wrapper.trigger('mouseenter');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });

    it('TC-T101: hover 제 tooltip겨진다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hover tooltip', trigger: 'hover' },
        slots: { default: '<button>Hover me</button>' },
      });

      await wrapper.trigger('mouseenter');
      await wrapper.trigger('mouseleave');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });

    it('TC-T110: click tooltip다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Click tooltip', trigger: 'click' },
        slots: { default: '<button>Click me</button>' },
      });

      await wrapper.trigger('click');
      let tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');

      await wrapper.trigger('click');
      tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });

    it('TC-T120: focus tooltip보인', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Focus tooltip', trigger: 'focus' },
        slots: { default: '<button>Focus me</button>' },
      });

      await wrapper.trigger('focus');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });
  });

  describe('Disabled 상태', () => {
    it('TC-D100: disabled hover도 tooltip보이지 는', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Disabled', disabled: true },
        slots: { default: '<button>Hover me</button>' },
      });

      await wrapper.trigger('mouseenter');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });
  });

  describe('Arrow', () => {
    it('TC-A100: arrow=truearrow 소가 더링된', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Arrow', arrow: true },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.find('.tooltip-arrow').exists()).toBe(true);
    });

    it('TC-A101: arrow=falsearrow 소가 렌더링되지 않는다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'No arrow', arrow: false },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.find('.tooltip-arrow').exists()).toBe(false);
    });
  });

  describe('접근성', () => {
    it('TC-A200: role="tooltip"가 적용된다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Tooltip' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('role')).toBe('tooltip');
    });

    it('TC-A201: visible aria-describedby가 정다', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Desc tooltip', trigger: 'hover' },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      const trigger = wrapper.find('.tooltip-trigger');
      expect(trigger.attributes('aria-describedby')).toBeTruthy();
    });
  });

  describe('기본값', () => {
    it('TC-C010: position 기본값 top다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Default' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('top');
    });

    it('TC-C011: trigger 기본값 hover다', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Default' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-trigger')).toBe('hover');
    });
  });

  describe('Delay', () => {
    it('TC-DL100: delay가 0면 즉시 보인', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Immediate', delay: 0 },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });

    it('TC-DL101: delay가 정면 머 보인', async () => {
      vi.useFakeTimers();

      const wrapper = mount(Tooltip, {
        props: { content: 'Delayed', delay: 500 },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      // Not visible yet
      let tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');

      vi.advanceTimersByTime(500);
      await wrapper.vm.$nextTick();

      tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');

      vi.useRealTimers();
    });
  });

  describe('visible/숨김', () => {
    it('TC-VM100: update:visible 벤 발생다', async () => {
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
