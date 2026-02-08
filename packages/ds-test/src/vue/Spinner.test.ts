import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Spinner } from '@woosgem/ds-vue';
import { Spinner as SpinnerDef } from '@woosgem-dev/core';

describe('Spinner (Vue)', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({});
      const wrapper = mount(Spinner);

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('aria-label')).toBe(coreAttrs['aria-label']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Spinner, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-V102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ color: 'secondary' });
      const wrapper = mount(Spinner, { props: { color: 'secondary' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-color')).toBe('secondary');
    });

    it('TC-V103: label prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ label: '?°ì´??ë¶ˆëŸ¬?¤ëŠ” ì¤?..' });
      const wrapper = mount(Spinner, { props: { label: '?°ì´??ë¶ˆëŸ¬?¤ëŠ” ì¤?..' } });

      expect(wrapper.attributes('aria-label')).toBe(coreAttrs['aria-label']);
      expect(wrapper.attributes('aria-label')).toBe('?°ì´??ë¶ˆëŸ¬?¤ëŠ” ì¤?..');
    });

    it('TC-V104: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        size: 'lg' as const,
        color: 'muted' as const,
        label: 'Please wait',
      };
      const coreAttrs = SpinnerDef.mapPropsToAttrs(props);
      const wrapper = mount(Spinner, { props });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('aria-label')).toBe(coreAttrs['aria-label']);
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C110: size: xsê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { size: 'xs' } });
      expect(wrapper.attributes('data-size')).toBe('xs');
    });

    it('TC-C111: size: sm???ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C112: size: mdê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C113: size: lgê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Color ë³€??, () => {
    it('TC-C120: color: primaryê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { color: 'primary' } });
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C121: color: secondaryê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { color: 'secondary' } });
      expect(wrapper.attributes('data-color')).toBe('secondary');
    });

    it('TC-C122: color: mutedê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { color: 'muted' } });
      expect(wrapper.attributes('data-color')).toBe('muted');
    });

    it('TC-C123: color: currentê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { color: 'current' } });
      expect(wrapper.attributes('data-color')).toBe('current');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="status"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('role')).toBe('status');
    });

    it('TC-A101: ê¸°ë³¸ aria-label???ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('aria-label')).toBe('Loading...');
    });

    it('TC-A102: ì»¤ìŠ¤?€ label??aria-labelë¡??ìš©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { label: 'Saving changes...' } });
      expect(wrapper.attributes('aria-label')).toBe('Saving changes...');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C011: color ê¸°ë³¸ê°’ì? primary?´ë‹¤', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C012: label ê¸°ë³¸ê°’ì? "Loading..."?´ë‹¤', () => {
      const wrapper = mount(Spinner);
      expect(wrapper.attributes('aria-label')).toBe('Loading...');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      const wrapper = mount(Spinner, { props: { class: 'custom-spinner' } });

      expect(wrapper.classes()).toContain('spinner');
      expect(wrapper.classes()).toContain('custom-spinner');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Spinner, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });

      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-color ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Spinner, {
        props: { color: 'muted' },
        attrs: { 'data-color': 'custom' },
      });

      expect(wrapper.attributes('data-color')).toBe('muted');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Spinner, {
        attrs: { role: 'progressbar' },
      });

      expect(wrapper.attributes('role')).toBe('status');
    });
  });
});
