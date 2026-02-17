import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Overlay } from '@woosgem-dev/vue';
import { Overlay as OverlayDef } from '@woosgem-dev/core';

describe('Overlay', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({});
      const wrapper = mount(Overlay);

      expect(wrapper.attributes('data-opacity')).toBe(coreAttrs['data-opacity']);
      expect(wrapper.attributes('data-level')).toBe(coreAttrs['data-level']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: opacity prop이 core 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ opacity: 'dark' });
      const wrapper = mount(Overlay, { props: { opacity: 'dark' } });

      expect(wrapper.attributes('data-opacity')).toBe(coreAttrs['data-opacity']);
      expect(wrapper.attributes('data-opacity')).toBe('dark');
    });

    it('TC-V102: level prop이 core 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ level: 'popover' });
      const wrapper = mount(Overlay, { props: { level: 'popover' } });

      expect(wrapper.attributes('data-level')).toBe(coreAttrs['data-level']);
      expect(wrapper.attributes('data-level')).toBe('popover');
    });

    it('TC-V103: blur prop이 core 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ blur: true });
      const wrapper = mount(Overlay, { props: { blur: true } });

      // data-blur should be present when blur is true
      expect(wrapper.attributes('data-blur')).toBe(String(coreAttrs['data-blur']));
    });

    it('TC-V104: visible prop이 core 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ visible: true });
      const wrapper = mount(Overlay, { props: { visible: true } });

      expect(wrapper.attributes('data-visible')).toBe(String(coreAttrs['data-visible']));
    });

    it('TC-V105: opacity: light가 core 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ opacity: 'light' });
      const wrapper = mount(Overlay, { props: { opacity: 'light' } });

      expect(wrapper.attributes('data-opacity')).toBe(coreAttrs['data-opacity']);
    });

    it('TC-V106: level: dropdown이 core 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ level: 'dropdown' });
      const wrapper = mount(Overlay, { props: { level: 'dropdown' } });

      expect(wrapper.attributes('data-level')).toBe(coreAttrs['data-level']);
    });

    it('TC-V107: level: toast가 core 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ level: 'toast' });
      const wrapper = mount(Overlay, { props: { level: 'toast' } });

      expect(wrapper.attributes('data-level')).toBe(coreAttrs['data-level']);
    });

    it('TC-V108: level: base가 core 결과와 일치한다', () => {
      const coreAttrs = OverlayDef.mapPropsToAttrs({ level: 'base' });
      const wrapper = mount(Overlay, { props: { level: 'base' } });

      expect(wrapper.attributes('data-level')).toBe(coreAttrs['data-level']);
    });

    it('TC-V109: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        opacity: 'dark' as const,
        level: 'popover' as const,
        blur: true,
        visible: true,
      };
      const coreAttrs = OverlayDef.mapPropsToAttrs(props);
      const wrapper = mount(Overlay, { props });

      expect(wrapper.attributes('data-opacity')).toBe(coreAttrs['data-opacity']);
      expect(wrapper.attributes('data-level')).toBe(coreAttrs['data-level']);
    });
  });

  describe('기본값', () => {
    it('TC-C010: opacity 기본값이 medium이다', () => {
      const wrapper = mount(Overlay);
      expect(wrapper.attributes('data-opacity')).toBe('medium');
    });

    it('TC-C011: level 기본값이 modal이다', () => {
      const wrapper = mount(Overlay);
      expect(wrapper.attributes('data-level')).toBe('modal');
    });

    it('TC-C012: blur 기본값이 false이다', () => {
      const wrapper = mount(Overlay);
      expect(wrapper.attributes('data-blur')).toBeUndefined();
    });

    it('TC-C013: visible 기본값이 true이다', () => {
      const wrapper = mount(Overlay);
      expect(wrapper.attributes('data-visible')).toBe('true');
    });
  });

  describe('접근성', () => {
    it('TC-A100: aria-hidden이 적용된다 (visible: true)', () => {
      const wrapper = mount(Overlay, { props: { visible: true } });
      expect(wrapper.attributes('aria-hidden')).toBe('false');
    });

    it('TC-A101: aria-hidden이 적용된다 (visible: false)', () => {
      const wrapper = mount(Overlay, { props: { visible: false } });
      expect(wrapper.attributes('aria-hidden')).toBe('true');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Overlay, { props: { class: 'custom-overlay' } });

      expect(wrapper.classes()).toContain('wg-overlay');
      expect(wrapper.classes()).toContain('custom-overlay');
    });

    it('TC-O130: 보호 속성 data-opacity 오버라이드 차단', () => {
      const wrapper = mount(Overlay, {
        props: { opacity: 'dark' },
        attrs: { 'data-opacity': 'custom' },
      });

      expect(wrapper.attributes('data-opacity')).toBe('dark');
    });

    it('TC-O131: 보호 속성 data-level 오버라이드 차단', () => {
      const wrapper = mount(Overlay, {
        props: { level: 'popover' },
        attrs: { 'data-level': 'custom' },
      });

      expect(wrapper.attributes('data-level')).toBe('popover');
    });

    it('TC-O132: 보호 속성 aria-hidden 오버라이드 차단', () => {
      const wrapper = mount(Overlay, {
        props: { visible: true },
        attrs: { 'aria-hidden': 'true' },
      });

      expect(wrapper.attributes('aria-hidden')).toBe('false');
    });
  });
});
