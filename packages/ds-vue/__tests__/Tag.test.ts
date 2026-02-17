import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Tag } from '../src/Tag';
import { Tag as TagDef } from '@woosgem-dev/core';

describe('Tag (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = TagDef.mapPropsToAttrs({});
      const wrapper = mount(Tag, { slots: { default: 'Test' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: solid가 적용된다', () => {
      const wrapper = mount(Tag, { props: { variant: 'solid' } });
      expect(wrapper.attributes('data-variant')).toBe('solid');
    });

    it('TC-C111: variant: outline가 적용된다', () => {
      const wrapper = mount(Tag, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C112: variant: subtle가 적용된다', () => {
      const wrapper = mount(Tag, { props: { variant: 'subtle' } });
      expect(wrapper.attributes('data-variant')).toBe('subtle');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const wrapper = mount(Tag, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Tag, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Tag, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('상태', () => {
    it('TC-S100: closable 상태가 적용된다', () => {
      const wrapper = mount(Tag, { props: { closable: true } });
      expect(wrapper.attributes('data-closable')).toBe('true');
    });

    it('TC-S101: disabled 상태가 적용된다', () => {
      const wrapper = mount(Tag, { props: { disabled: true } });
      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('aria-disabled')).toBe('true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 subtle이다', () => {
      const wrapper = mount(Tag);
      expect(wrapper.attributes('data-variant')).toBe('subtle');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const wrapper = mount(Tag);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C012: color 기본값이 primary이다', () => {
      const wrapper = mount(Tag);
      expect(wrapper.attributes('data-color')).toBe('primary');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Tag, { props: { class: 'custom-tag' } });
      expect(wrapper.classes()).toContain('wg-tag');
      expect(wrapper.classes()).toContain('custom-tag');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(Tag, {
        props: { variant: 'solid' },
        attrs: { 'data-variant': 'custom' },
      });
      expect(wrapper.attributes('data-variant')).toBe('solid');
    });
  });
});
