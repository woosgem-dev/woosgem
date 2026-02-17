import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { AvatarGroup } from '../src/AvatarGroup';
import { AvatarGroup as AvatarGroupDef } from '@woosgem-dev/core';

describe('AvatarGroup (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = AvatarGroupDef.mapPropsToAttrs({});
      const wrapper = mount(AvatarGroup);

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-spacing')).toBe(coreAttrs['data-spacing']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const wrapper = mount(AvatarGroup, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(AvatarGroup, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(AvatarGroup, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Spacing 변형', () => {
    it('TC-C130: spacing: tight가 적용된다', () => {
      const wrapper = mount(AvatarGroup, { props: { spacing: 'tight' } });
      expect(wrapper.attributes('data-spacing')).toBe('tight');
    });

    it('TC-C131: spacing: normal가 적용된다', () => {
      const wrapper = mount(AvatarGroup, { props: { spacing: 'normal' } });
      expect(wrapper.attributes('data-spacing')).toBe('normal');
    });

    it('TC-C132: spacing: loose가 적용된다', () => {
      const wrapper = mount(AvatarGroup, { props: { spacing: 'loose' } });
      expect(wrapper.attributes('data-spacing')).toBe('loose');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="group"이 적용된다', () => {
      const wrapper = mount(AvatarGroup);
      expect(wrapper.attributes('role')).toBe('group');
    });

    it('TC-A101: aria-label이 적용된다', () => {
      const wrapper = mount(AvatarGroup);
      expect(wrapper.attributes('aria-label')).toBe('Avatar group');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      const wrapper = mount(AvatarGroup);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C011: spacing 기본값이 tight이다', () => {
      const wrapper = mount(AvatarGroup);
      expect(wrapper.attributes('data-spacing')).toBe('tight');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(AvatarGroup, { props: { class: 'custom' } });
      expect(wrapper.classes()).toContain('avatar-group');
      expect(wrapper.classes()).toContain('custom');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(AvatarGroup, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });
});
