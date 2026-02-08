import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Select, SelectMenu, SelectOption } from '@woosgem/ds-vue';
import { Select as SelectDef } from '@woosgem-dev/core';

describe('Select (Vue)', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({});
      const wrapper = mount(Select, { slots: { default: 'Choose' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ variant: 'filled' });
      const wrapper = mount(Select, { props: { variant: 'filled' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
    });

    it('TC-V102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Select, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });
  });

  describe('Variant ë³€??, () => {
    it('TC-C110: variant: outline???ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C111: variant: filledê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C120: size: sm???ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: mdê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lgê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="combobox"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select);
      expect(wrapper.attributes('role')).toBe('combobox');
    });

    it('TC-A101: aria-haspopup="listbox"ê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select);
      expect(wrapper.attributes('aria-haspopup')).toBe('listbox');
    });

    it('TC-A102: aria-expandedê°€ ?¬ë°”ë¥´ê²Œ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { open: true } });
      expect(wrapper.attributes('aria-expanded')).toBe('true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? outline?´ë‹¤', () => {
      const wrapper = mount(Select);
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C011: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      const wrapper = mount(Select);
      expect(wrapper.attributes('data-size')).toBe('md');
    });
  });

  describe('?íƒœ', () => {
    it('TC-S100: disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { disabled: true } });
      expect(wrapper.attributes('data-state')).toBe('disabled');
    });

    it('TC-S101: error ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { error: true } });
      expect(wrapper.attributes('data-state')).toBe('error');
    });

    it('TC-S102: open ?íƒœê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { open: true } });
      expect(wrapper.attributes('data-state')).toBe('open');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      const wrapper = mount(Select, { props: { class: 'custom-select' } });
      expect(wrapper.classes()).toContain('select');
      expect(wrapper.classes()).toContain('custom-select');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Select, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
      });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });
});

describe('SelectMenu (Vue)', () => {
  it('should render with select-menu class', () => {
    const wrapper = mount(SelectMenu, { props: { open: true } });
    expect(wrapper.classes()).toContain('select-menu');
  });

  it('should have role="listbox"', () => {
    const wrapper = mount(SelectMenu);
    expect(wrapper.attributes('role')).toBe('listbox');
  });

  it('should set data-state="open" when open', () => {
    const wrapper = mount(SelectMenu, { props: { open: true } });
    expect(wrapper.attributes('data-state')).toBe('open');
  });
});

describe('SelectOption (Vue)', () => {
  it('should render with select-option class', () => {
    const wrapper = mount(SelectOption);
    expect(wrapper.classes()).toContain('select-option');
  });

  it('should have role="option"', () => {
    const wrapper = mount(SelectOption);
    expect(wrapper.attributes('role')).toBe('option');
  });

  it('should apply selected state', () => {
    const wrapper = mount(SelectOption, { props: { selected: true } });
    expect(wrapper.attributes('data-state')).toBe('selected');
    expect(wrapper.attributes('aria-selected')).toBe('true');
  });

  it('should apply disabled state', () => {
    const wrapper = mount(SelectOption, { props: { disabled: true } });
    expect(wrapper.attributes('data-state')).toBe('disabled');
  });

  it('should render slot content', () => {
    const wrapper = mount(SelectOption, { slots: { default: 'Option text' } });
    expect(wrapper.text()).toContain('Option text');
  });
});
