import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { Toast } from '@woosgem/ds-vue';
import { Toast as ToastDef } from '@woosgem-dev/core';

describe('Toast (Vue)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ToastDef.mapPropsToAttrs({});
      const wrapper = mount(Toast, { slots: { default: 'Message' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-position')).toBe(coreAttrs['data-position']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ToastDef.mapPropsToAttrs({ variant: 'success' });
      const wrapper = mount(Toast, { props: { variant: 'success' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
    });
  });

  describe('Variant ë³€??, () => {
    it('TC-C110: variant: infoê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Toast, { props: { variant: 'info' } });
      expect(wrapper.attributes('data-variant')).toBe('info');
    });

    it('TC-C111: variant: successê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Toast, { props: { variant: 'success' } });
      expect(wrapper.attributes('data-variant')).toBe('success');
    });

    it('TC-C112: variant: warning???ìš©?œë‹¤', () => {
      const wrapper = mount(Toast, { props: { variant: 'warning' } });
      expect(wrapper.attributes('data-variant')).toBe('warning');
    });

    it('TC-C113: variant: errorê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Toast, { props: { variant: 'error' } });
      expect(wrapper.attributes('data-variant')).toBe('error');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="alert"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('role')).toBe('alert');
    });

    it('TC-A101: aria-live="polite"ê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('aria-live')).toBe('polite');
    });

    it('TC-A102: aria-atomic="true"ê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('aria-atomic')).toBe('true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? info?´ë‹¤', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('data-variant')).toBe('info');
    });

    it('TC-C011: position ê¸°ë³¸ê°’ì? top-right?´ë‹¤', () => {
      const wrapper = mount(Toast);
      expect(wrapper.attributes('data-position')).toBe('top-right');
    });
  });

  describe('visible/?¨ê?', () => {
    it('TC-V100: visible=false?´ë©´ ?Œë”ë§ë˜ì§€ ?ŠëŠ”??, () => {
      const wrapper = mount(Toast, { props: { visible: false } });
      // Should render nothing (null)
      expect(wrapper.html()).toSatisfy((html: string) => html === '' || html === '<!---->');
    });

    it('TC-V101: visible=true?´ë©´ ?Œë”ë§ëœ??, () => {
      const wrapper = mount(Toast, {
        props: { visible: true },
        slots: { default: 'Visible' },
      });
      expect(wrapper.text()).toContain('Visible');
    });
  });

  describe('Auto-dismiss', () => {
    it('TC-AD100: duration ??close ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
      const wrapper = mount(Toast, {
        props: { duration: 3000, visible: true },
      });

      vi.advanceTimersByTime(3000);
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted('close')).toBeTruthy();
    });

    it('TC-AD101: duration=0?´ë©´ ?ë™ ?«íž˜??ë¹„í™œ?±í™”?œë‹¤', async () => {
      const wrapper = mount(Toast, {
        props: { duration: 0, visible: true },
      });

      vi.advanceTimersByTime(10000);
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted('close')).toBeFalsy();
    });
  });

  describe('?¬ë¡¯', () => {
    it('TC-S100: default ?¬ë¡¯???Œë”ë§ëœ??, () => {
      const wrapper = mount(Toast, {
        slots: { default: 'Toast message' },
      });
      expect(wrapper.text()).toContain('Toast message');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      const wrapper = mount(Toast, { props: { class: 'custom-toast' } });
      expect(wrapper.classes()).toContain('toast');
      expect(wrapper.classes()).toContain('custom-toast');
    });
  });

  describe('v-model:visible ì§€??, () => {
    it('TC-VM100: update:visible ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
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
