import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Radio, RadioGroup } from '@woosgem/ds-vue';
import { Radio as RadioDef, RadioGroup as RadioGroupDef } from '@woosgem-dev/core';

describe('Radio (Vue)', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({});
      const wrapper = mount(Radio, { slots: { default: 'Option' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('aria-checked')).toBe(String(coreAttrs['aria-checked']));
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Radio, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });

    it('TC-V102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ color: 'success' });
      const wrapper = mount(Radio, { props: { color: 'success' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
    });

    it('TC-V103: checked prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ checked: true });
      const wrapper = mount(Radio, { props: { checked: true } });

      expect(wrapper.attributes('aria-checked')).toBe(String(coreAttrs['aria-checked']));
      expect(wrapper.attributes('data-state')).toBe(coreAttrs['data-state']);
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C110: size: sm???ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C111: size: mdê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C112: size: lgê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Color ë³€??, () => {
    it('TC-C120: color: primaryê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { color: 'primary' } });
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C121: color: secondaryê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { color: 'secondary' } });
      expect(wrapper.attributes('data-color')).toBe('secondary');
    });

    it('TC-C122: color: successê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { color: 'success' } });
      expect(wrapper.attributes('data-color')).toBe('success');
    });
  });

  describe('?íƒœ ë³€??, () => {
    it('TC-S100: checked ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { checked: true } });

      expect(wrapper.attributes('data-state')).toBe('checked');
      expect(wrapper.attributes('aria-checked')).toBe('true');
    });

    it('TC-S101: disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { disabled: true } });

      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('TC-S102: checked + disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { checked: true, disabled: true } });

      expect(wrapper.attributes('data-state')).toBe('checked-disabled');
      expect(wrapper.attributes('aria-checked')).toBe('true');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="radio"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Radio);
      expect(wrapper.attributes('role')).toBe('radio');
    });

    it('TC-A101: aria-checkedê°€ checked ?íƒœë¥?ë°˜ì˜?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { checked: false } });
      expect(wrapper.attributes('aria-checked')).toBe('false');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      const wrapper = mount(Radio);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C011: color ê¸°ë³¸ê°’ì? primary?´ë‹¤', () => {
      const wrapper = mount(Radio);
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C012: checked ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      const wrapper = mount(Radio);
      expect(wrapper.attributes('aria-checked')).toBe('false');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-O150: click ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
      const handleClick = vi.fn();
      const wrapper = mount(Radio, {
        attrs: { onClick: handleClick },
      });

      await wrapper.trigger('click');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      const wrapper = mount(Radio, { props: { class: 'custom-radio' } });

      expect(wrapper.classes()).toContain('radio');
      expect(wrapper.classes()).toContain('custom-radio');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Radio, {
        attrs: { role: 'checkbox' },
      });

      expect(wrapper.attributes('role')).toBe('radio');
    });
  });
});

describe('RadioGroup (Vue)', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V200: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = RadioGroupDef.mapPropsToAttrs({});
      const wrapper = mount(RadioGroup, {
        slots: { default: '<div>radios</div>' },
      });

      expect(wrapper.attributes('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V201: orientation prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = RadioGroupDef.mapPropsToAttrs({ orientation: 'horizontal' });
      const wrapper = mount(RadioGroup, { props: { orientation: 'horizontal' } });

      expect(wrapper.attributes('data-orientation')).toBe(coreAttrs['data-orientation']);
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A200: role="radiogroup"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      const wrapper = mount(RadioGroup);
      expect(wrapper.attributes('role')).toBe('radiogroup');
    });

    it('TC-A201: disabled ??aria-disabledê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(RadioGroup, { props: { disabled: true } });
      expect(wrapper.attributes('aria-disabled')).toBe('true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C200: orientation ê¸°ë³¸ê°’ì? vertical?´ë‹¤', () => {
      const wrapper = mount(RadioGroup);
      expect(wrapper.attributes('data-orientation')).toBe('vertical');
    });
  });
});
