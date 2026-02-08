import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Alert } from '@woosgem/ds-vue';
import { Alert as AlertDef } from '@woosgem-dev/core';

describe('Alert (Vue)', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({});
      const wrapper = mount(Alert, { slots: { default: 'Message' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-status')).toBe(coreAttrs['data-status']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ variant: 'filled' });
      const wrapper = mount(Alert, { props: { variant: 'filled' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });

    it('TC-V102: status prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ status: 'error' });
      const wrapper = mount(Alert, { props: { status: 'error' } });

      expect(wrapper.attributes('data-status')).toBe(coreAttrs['data-status']);
      expect(wrapper.attributes('data-status')).toBe('error');
    });

    it('TC-V103: closable prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ closable: true });
      const wrapper = mount(Alert, { props: { closable: true } });

      expect(wrapper.attributes('data-closable')).toBe(String(coreAttrs['data-closable']));
    });

    it('TC-V104: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'filled' as const,
        status: 'success' as const,
        closable: true,
      };
      const coreAttrs = AlertDef.mapPropsToAttrs(props);
      const wrapper = mount(Alert, { props });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-status')).toBe(coreAttrs['data-status']);
      expect(wrapper.attributes('data-closable')).toBe(String(coreAttrs['data-closable']));
    });
  });

  describe('Variant ë³€??, () => {
    it('TC-C110: variant: filledê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Alert, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });

    it('TC-C111: variant: outline???ìš©?œë‹¤', () => {
      const wrapper = mount(Alert, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C112: variant: subtle???ìš©?œë‹¤', () => {
      const wrapper = mount(Alert, { props: { variant: 'subtle' } });
      expect(wrapper.attributes('data-variant')).toBe('subtle');
    });
  });

  describe('Status ë³€??, () => {
    it('TC-C120: status: infoê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Alert, { props: { status: 'info' } });
      expect(wrapper.attributes('data-status')).toBe('info');
    });

    it('TC-C121: status: successê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Alert, { props: { status: 'success' } });
      expect(wrapper.attributes('data-status')).toBe('success');
    });

    it('TC-C122: status: warning???ìš©?œë‹¤', () => {
      const wrapper = mount(Alert, { props: { status: 'warning' } });
      expect(wrapper.attributes('data-status')).toBe('warning');
    });

    it('TC-C123: status: errorê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Alert, { props: { status: 'error' } });
      expect(wrapper.attributes('data-status')).toBe('error');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="alert"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Alert);
      expect(wrapper.attributes('role')).toBe('alert');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? subtle?´ë‹¤', () => {
      const wrapper = mount(Alert);
      expect(wrapper.attributes('data-variant')).toBe('subtle');
    });

    it('TC-C011: status ê¸°ë³¸ê°’ì? info?´ë‹¤', () => {
      const wrapper = mount(Alert);
      expect(wrapper.attributes('data-status')).toBe('info');
    });

    it('TC-C012: closable ê¸°ë³¸ê°’ì? false?´ë‹¤ (?ì„± ?†ìŒ)', () => {
      const wrapper = mount(Alert);
      expect(wrapper.attributes('data-closable')).toBeUndefined();
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      const wrapper = mount(Alert, { props: { class: 'custom-alert' } });

      expect(wrapper.classes()).toContain('alert');
      expect(wrapper.classes()).toContain('custom-alert');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Alert, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
      });

      expect(wrapper.attributes('data-variant')).toBe('filled');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-status ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Alert, {
        props: { status: 'error' },
        attrs: { 'data-status': 'custom' },
      });

      expect(wrapper.attributes('data-status')).toBe('error');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      const wrapper = mount(Alert, {
        attrs: { role: 'status' },
      });

      expect(wrapper.attributes('role')).toBe('alert');
    });
  });
});
