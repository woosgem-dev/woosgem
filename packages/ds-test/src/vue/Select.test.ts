import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Select, SelectMenu, SelectOption } from '@woosgem-dev/vue';
import { Select as SelectDef } from '@woosgem-dev/core';

describe('Select (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({});
      const wrapper = mount(Select, { slots: { default: 'Choose' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ variant: 'filled' });
      const wrapper = mount(Select, { props: { variant: 'filled' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
    });

    it('TC-V102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Select, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outline 적용된다', () => {
      const wrapper = mount(Select, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C111: variant: filled가 적용된다', () => {
      const wrapper = mount(Select, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const wrapper = mount(Select, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Select, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Select, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="combobox"가 적용된다', () => {
      const wrapper = mount(Select);
      expect(wrapper.attributes('role')).toBe('combobox');
    });

    it('TC-A101: aria-haspopup="listbox"가 적용된다', () => {
      const wrapper = mount(Select);
      expect(wrapper.attributes('aria-haspopup')).toBe('listbox');
    });

    it('TC-A102: aria-expanded가 바르게 적용된다', () => {
      const wrapper = mount(Select, { props: { open: true } });
      expect(wrapper.attributes('aria-expanded')).toBe('true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 outline다', () => {
      const wrapper = mount(Select);
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C011: size 기본값 md다', () => {
      const wrapper = mount(Select);
      expect(wrapper.attributes('data-size')).toBe('md');
    });
  });

  describe('상태', () => {
    it('TC-S100: disabled 태가 적용된다', () => {
      const wrapper = mount(Select, { props: { disabled: true } });
      expect(wrapper.attributes('data-state')).toBe('disabled');
    });

    it('TC-S101: error 태가 적용된다', () => {
      const wrapper = mount(Select, { props: { error: true } });
      expect(wrapper.attributes('data-state')).toBe('error');
    });

    it('TC-S102: open 태가 적용된다', () => {
      const wrapper = mount(Select, { props: { open: true } });
      expect(wrapper.attributes('data-state')).toBe('open');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Select, { props: { class: 'custom-select' } });
      expect(wrapper.classes()).toContain('select');
      expect(wrapper.classes()).toContain('custom-select');
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
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
