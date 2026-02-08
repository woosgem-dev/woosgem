import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Card, CardHeader, CardBody, CardFooter } from '@woosgem/ds-vue';
import { Card as CardDef } from '@woosgem-dev/core';

describe('Card (Vue)', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({});
      const wrapper = mount(Card, { slots: { default: 'Content' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-padding')).toBe(coreAttrs['data-padding']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ variant: 'elevated' });
      const wrapper = mount(Card, { props: { variant: 'elevated' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-variant')).toBe('elevated');
    });

    it('TC-V102: padding prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ padding: 'lg' });
      const wrapper = mount(Card, { props: { padding: 'lg' } });

      expect(wrapper.attributes('data-padding')).toBe(coreAttrs['data-padding']);
    });

    it('TC-V103: clickable prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ clickable: true });
      const wrapper = mount(Card, { props: { clickable: true } });

      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
    });
  });

  describe('Variant ë³€??, () => {
    it('TC-C110: variant: outlinedê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Card, { props: { variant: 'outlined' } });
      expect(wrapper.attributes('data-variant')).toBe('outlined');
    });

    it('TC-C111: variant: elevatedê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Card, { props: { variant: 'elevated' } });
      expect(wrapper.attributes('data-variant')).toBe('elevated');
    });

    it('TC-C112: variant: filledê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Card, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });

  describe('Padding ë³€??, () => {
    it('TC-C120: padding: none???ìš©?œë‹¤', () => {
      const wrapper = mount(Card, { props: { padding: 'none' } });
      expect(wrapper.attributes('data-padding')).toBe('none');
    });

    it('TC-C121: padding: sm???ìš©?œë‹¤', () => {
      const wrapper = mount(Card, { props: { padding: 'sm' } });
      expect(wrapper.attributes('data-padding')).toBe('sm');
    });

    it('TC-C122: padding: mdê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Card, { props: { padding: 'md' } });
      expect(wrapper.attributes('data-padding')).toBe('md');
    });

    it('TC-C123: padding: lgê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Card, { props: { padding: 'lg' } });
      expect(wrapper.attributes('data-padding')).toBe('lg');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? outlined?´ë‹¤', () => {
      const wrapper = mount(Card);
      expect(wrapper.attributes('data-variant')).toBe('outlined');
    });

    it('TC-C011: padding ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      const wrapper = mount(Card);
      expect(wrapper.attributes('data-padding')).toBe('md');
    });
  });

  describe('?¬ë¡¯', () => {
    it('TC-S100: default ?¬ë¡¯???Œë”ë§ëœ??, () => {
      const wrapper = mount(Card, { slots: { default: 'Card content' } });
      expect(wrapper.text()).toContain('Card content');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      const wrapper = mount(Card, { props: { class: 'custom-card' } });
      expect(wrapper.classes()).toContain('card');
      expect(wrapper.classes()).toContain('custom-card');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Card, {
        props: { variant: 'elevated' },
        attrs: { 'data-variant': 'custom' },
      });
      expect(wrapper.attributes('data-variant')).toBe('elevated');
    });
  });
});

describe('CardHeader (Vue)', () => {
  it('should render with card-header class', () => {
    const wrapper = mount(CardHeader, { slots: { default: 'Header' } });
    expect(wrapper.classes()).toContain('card-header');
  });

  it('should render slot content', () => {
    const wrapper = mount(CardHeader, { slots: { default: 'My Header' } });
    expect(wrapper.text()).toContain('My Header');
  });

  it('should apply divider prop', () => {
    const wrapper = mount(CardHeader, { props: { divider: true } });
    expect(wrapper.attributes('data-divider')).toBe('true');
  });
});

describe('CardBody (Vue)', () => {
  it('should render with card-body class', () => {
    const wrapper = mount(CardBody, { slots: { default: 'Body' } });
    expect(wrapper.classes()).toContain('card-body');
  });

  it('should render slot content', () => {
    const wrapper = mount(CardBody, { slots: { default: 'Body content' } });
    expect(wrapper.text()).toContain('Body content');
  });
});

describe('CardFooter (Vue)', () => {
  it('should render with card-footer class', () => {
    const wrapper = mount(CardFooter, { slots: { default: 'Footer' } });
    expect(wrapper.classes()).toContain('card-footer');
  });

  it('should render slot content', () => {
    const wrapper = mount(CardFooter, { slots: { default: 'Footer content' } });
    expect(wrapper.text()).toContain('Footer content');
  });

  it('should apply divider prop', () => {
    const wrapper = mount(CardFooter, { props: { divider: true } });
    expect(wrapper.attributes('data-divider')).toBe('true');
  });

  it('should apply align prop', () => {
    const wrapper = mount(CardFooter, { props: { align: 'end' } });
    expect(wrapper.attributes('data-align')).toBe('end');
  });
});
