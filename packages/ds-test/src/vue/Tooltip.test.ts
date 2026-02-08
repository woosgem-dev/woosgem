import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Tooltip } from '@woosgem/ds-vue';

describe('Tooltip (Vue)', () => {
  describe('ê¸°ë³¸ ?Œë”ë§?, () => {
    it('TC-V100: default ?¬ë¡¯???Œë”ë§ëœ??, () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hello' },
        slots: { default: '<button>Hover me</button>' },
      });
      expect(wrapper.text()).toContain('Hover me');
    });

    it('TC-V101: tooltip ?˜í¼ê°€ ?Œë”ë§ëœ??, () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Tooltip text' },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.classes()).toContain('tooltip-wrapper');
    });

    it('TC-V102: tooltip ?´ìš©???¨ê²¨ì§??íƒœë¡??Œë”ë§ëœ??, () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hidden text' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });
  });

  describe('Position ë³€??, () => {
    it('TC-C110: position: top???ìš©?œë‹¤', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'top' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('top');
    });

    it('TC-C111: position: bottom???ìš©?œë‹¤', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'bottom' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('bottom');
    });

    it('TC-C112: position: leftê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'left' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('left');
    });

    it('TC-C113: position: rightê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Text', position: 'right' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('right');
    });
  });

  describe('Trigger ?™ìž‘', () => {
    it('TC-T100: hover ??tooltip??ë³´ì¸??, async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hover tooltip', trigger: 'hover' },
        slots: { default: '<button>Hover me</button>' },
      });

      await wrapper.trigger('mouseenter');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });

    it('TC-T101: hover ?´ì œ ??tooltip???¨ê²¨ì§„ë‹¤', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Hover tooltip', trigger: 'hover' },
        slots: { default: '<button>Hover me</button>' },
      });

      await wrapper.trigger('mouseenter');
      await wrapper.trigger('mouseleave');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('aria-hidden')).toBe('true');
    });

    it('TC-T110: click ??tooltip??? ê??œë‹¤', async () => {
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

    it('TC-T120: focus ??tooltip??ë³´ì¸??, async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Focus tooltip', trigger: 'focus' },
        slots: { default: '<button>Focus me</button>' },
      });

      await wrapper.trigger('focus');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });
  });

  describe('Disabled ?íƒœ', () => {
    it('TC-D100: disabled ??hover?´ë„ tooltip??ë³´ì´ì§€ ?ŠëŠ”??, async () => {
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
    it('TC-A100: arrow=true????arrow ?”ì†Œê°€ ?Œë”ë§ëœ??, () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Arrow', arrow: true },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.find('.tooltip-arrow').exists()).toBe(true);
    });

    it('TC-A101: arrow=false????arrow ?”ì†Œê°€ ?Œë”ë§ë˜ì§€ ?ŠëŠ”??, () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'No arrow', arrow: false },
        slots: { default: '<button>Trigger</button>' },
      });
      expect(wrapper.find('.tooltip-arrow').exists()).toBe(false);
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A200: role="tooltip"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Tooltip' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('role')).toBe('tooltip');
    });

    it('TC-A201: visible ??aria-describedbyê°€ ?¤ì •?œë‹¤', async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Desc tooltip', trigger: 'hover' },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      const trigger = wrapper.find('.tooltip-trigger');
      expect(trigger.attributes('aria-describedby')).toBeTruthy();
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: position ê¸°ë³¸ê°’ì? top?´ë‹¤', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Default' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-position')).toBe('top');
    });

    it('TC-C011: trigger ê¸°ë³¸ê°’ì? hover?´ë‹¤', () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Default' },
        slots: { default: '<button>Trigger</button>' },
      });
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-trigger')).toBe('hover');
    });
  });

  describe('Delay', () => {
    it('TC-DL100: delayê°€ 0?´ë©´ ì¦‰ì‹œ ë³´ì¸??, async () => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Immediate', delay: 0 },
        slots: { default: '<button>Trigger</button>' },
      });

      await wrapper.trigger('mouseenter');

      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.attributes('data-visible')).toBe('true');
    });

    it('TC-DL101: delayê°€ ?¤ì •?˜ë©´ ?€?´ë¨¸ ??ë³´ì¸??, async () => {
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

  describe('v-model:visible ì§€??, () => {
    it('TC-VM100: update:visible ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
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
