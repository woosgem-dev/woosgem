import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Textarea } from '@woosgem/ds-vue';
import { Textarea as TextareaDef } from '@woosgem-dev/core';

describe('Textarea (Vue)', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({});
      const wrapper = mount(Textarea);

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-resize')).toBe(coreAttrs['data-resize']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ variant: 'filled' });
      const wrapper = mount(Textarea, { props: { variant: 'filled' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
    });

    it('TC-V102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Textarea, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });

    it('TC-V103: resize prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ resize: 'both' });
      const wrapper = mount(Textarea, { props: { resize: 'both' } });

      expect(wrapper.attributes('data-resize')).toBe(coreAttrs['data-resize']);
    });
  });

  describe('Variant ë³€??, () => {
    it('TC-C110: variant: outline???ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C111: variant: filledê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C120: size: sm???ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: mdê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lgê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Resize ë³€??, () => {
    it('TC-C130: resize: none???ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { resize: 'none' } });
      expect(wrapper.attributes('data-resize')).toBe('none');
    });

    it('TC-C131: resize: vertical???ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { resize: 'vertical' } });
      expect(wrapper.attributes('data-resize')).toBe('vertical');
    });

    it('TC-C132: resize: horizontal???ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { resize: 'horizontal' } });
      expect(wrapper.attributes('data-resize')).toBe('horizontal');
    });

    it('TC-C133: resize: bothê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { resize: 'both' } });
      expect(wrapper.attributes('data-resize')).toBe('both');
    });
  });

  describe('?íƒœ ë³€??, () => {
    it('TC-S100: disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { disabled: true } });

      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('TC-S101: error ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { error: true } });

      expect(wrapper.attributes('data-state')).toBe('error');
      expect(wrapper.attributes('aria-invalid')).toBe('true');
    });

    it('TC-S102: disabledê°€ errorë³´ë‹¤ ?°ì„ ?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { disabled: true, error: true } });

      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? outline?´ë‹¤', () => {
      const wrapper = mount(Textarea);
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C011: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      const wrapper = mount(Textarea);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C012: resize ê¸°ë³¸ê°’ì? vertical?´ë‹¤', () => {
      const wrapper = mount(Textarea);
      expect(wrapper.attributes('data-resize')).toBe('vertical');
    });
  });

  describe('Vue ?„ìš© props', () => {
    it('TC-V200: placeholderê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { placeholder: 'Enter text...' } });
      expect(wrapper.attributes('placeholder')).toBe('Enter text...');
    });

    it('TC-V201: rowsê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { rows: 5 } });
      expect(wrapper.attributes('rows')).toBe('5');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-O150: input ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
      const wrapper = mount(Textarea);

      await wrapper.trigger('input');

      expect(wrapper.emitted()).toHaveProperty('input');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      const wrapper = mount(Textarea, { props: { class: 'custom-textarea' } });

      expect(wrapper.classes()).toContain('textarea');
      expect(wrapper.classes()).toContain('custom-textarea');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Textarea, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
      });

      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });
});
