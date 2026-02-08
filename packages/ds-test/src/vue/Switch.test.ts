import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Switch } from '@woosgem/ds-vue';
import { Switch as SwitchDef } from '@woosgem-dev/core';

describe('Switch (Vue)', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({});
      const wrapper = mount(Switch);

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('aria-checked')).toBe(String(coreAttrs['aria-checked']));
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Switch, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-V102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ color: 'success' });
      const wrapper = mount(Switch, { props: { color: 'success' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-color')).toBe('success');
    });

    it('TC-V103: checked prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ checked: true });
      const wrapper = mount(Switch, { props: { checked: true } });

      expect(wrapper.attributes('aria-checked')).toBe(String(coreAttrs['aria-checked']));
      expect(wrapper.attributes('data-state')).toBe(coreAttrs['data-state']);
    });

    it('TC-V104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ disabled: true });
      const wrapper = mount(Switch, { props: { disabled: true } });

      expect(wrapper.attributes('data-state')).toBe(coreAttrs['data-state']);
      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C110: size: sm???ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C111: size: mdê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C112: size: lgê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Color ë³€??, () => {
    it('TC-C120: color: primaryê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { color: 'primary' } });
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C121: color: secondaryê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { color: 'secondary' } });
      expect(wrapper.attributes('data-color')).toBe('secondary');
    });

    it('TC-C122: color: successê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { color: 'success' } });
      expect(wrapper.attributes('data-color')).toBe('success');
    });
  });

  describe('?íƒœ ë³€??, () => {
    it('TC-S100: checked ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { checked: true } });

      expect(wrapper.attributes('data-state')).toBe('checked');
      expect(wrapper.attributes('aria-checked')).toBe('true');
    });

    it('TC-S101: disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { disabled: true } });

      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('TC-S102: checked + disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { checked: true, disabled: true } });

      expect(wrapper.attributes('data-state')).toBe('checked-disabled');
      expect(wrapper.attributes('aria-checked')).toBe('true');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="switch"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('role')).toBe('switch');
    });

    it('TC-A101: aria-checkedê°€ checked ?íƒœë¥?ë°˜ì˜?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { checked: false } });
      expect(wrapper.attributes('aria-checked')).toBe('false');
    });

    it('TC-A102: aria-checkedê°€ true????ë°˜ì˜?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { checked: true } });
      expect(wrapper.attributes('aria-checked')).toBe('true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C011: color ê¸°ë³¸ê°’ì? primary?´ë‹¤', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C012: checked ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('aria-checked')).toBe('false');
    });

    it('TC-C013: disabled ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('disabled')).toBeUndefined();
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-O150: click ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
      const handleClick = vi.fn();
      const wrapper = mount(Switch, {
        attrs: { onClick: handleClick },
      });

      await wrapper.trigger('click');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      const wrapper = mount(Switch, { props: { class: 'custom-switch' } });

      expect(wrapper.classes()).toContain('switch');
      expect(wrapper.classes()).toContain('custom-switch');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Switch, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });

      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Switch, {
        attrs: { role: 'checkbox' },
      });

      expect(wrapper.attributes('role')).toBe('switch');
    });
  });
});
