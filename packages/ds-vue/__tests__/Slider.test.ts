import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Slider, SliderTrack, SliderFill, SliderThumb } from '../src/Slider';
import {
  Slider as SliderDef,
} from '@woosgem-dev/core';

describe('Slider (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({});
      const wrapper = mount(Slider, { slots: { default: 'Content' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Slider, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-V102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ color: 'danger' });
      const wrapper = mount(Slider, { props: { color: 'danger' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-color')).toBe('danger');
    });

    it('TC-V103: orientation prop이 core 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ orientation: 'vertical' });
      const wrapper = mount(Slider, { props: { orientation: 'vertical' } });

      expect(wrapper.attributes('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(wrapper.attributes('data-orientation')).toBe('vertical');
    });

    it('TC-V104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ disabled: true });
      const wrapper = mount(Slider, { props: { disabled: true } });

      expect(wrapper.attributes('data-state')).toBe(coreAttrs['data-state']);
      expect(wrapper.attributes('aria-disabled')).toBe(coreAttrs['aria-disabled']);
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      const wrapper = mount(Slider, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Slider, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Slider, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Color 변형', () => {
    it('TC-C130: color: primary가 적용된다', () => {
      const wrapper = mount(Slider, { props: { color: 'primary' } });
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C131: color: secondary가 적용된다', () => {
      const wrapper = mount(Slider, { props: { color: 'secondary' } });
      expect(wrapper.attributes('data-color')).toBe('secondary');
    });

    it('TC-C132: color: success가 적용된다', () => {
      const wrapper = mount(Slider, { props: { color: 'success' } });
      expect(wrapper.attributes('data-color')).toBe('success');
    });

    it('TC-C133: color: warning이 적용된다', () => {
      const wrapper = mount(Slider, { props: { color: 'warning' } });
      expect(wrapper.attributes('data-color')).toBe('warning');
    });

    it('TC-C134: color: danger가 적용된다', () => {
      const wrapper = mount(Slider, { props: { color: 'danger' } });
      expect(wrapper.attributes('data-color')).toBe('danger');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      const wrapper = mount(Slider);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C011: color 기본값이 primary이다', () => {
      const wrapper = mount(Slider);
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C012: orientation 기본값이 horizontal이다', () => {
      const wrapper = mount(Slider);
      expect(wrapper.attributes('data-orientation')).toBe('horizontal');
    });

    it('TC-C013: disabled 기본값이 false이다', () => {
      const wrapper = mount(Slider);
      expect(wrapper.attributes('data-state')).toBeUndefined();
      expect(wrapper.attributes('aria-disabled')).toBeUndefined();
    });
  });

  describe('슬롯', () => {
    it('TC-S100: default 슬롯이 렌더링된다', () => {
      const wrapper = mount(Slider, { slots: { default: 'Slider content' } });
      expect(wrapper.text()).toContain('Slider content');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Slider, { props: { class: 'custom-slider' } });
      expect(wrapper.classes()).toContain('wg-slider');
      expect(wrapper.classes()).toContain('custom-slider');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(Slider, {
        props: { color: 'danger' },
        attrs: { 'data-color': 'custom' },
      });
      expect(wrapper.attributes('data-color')).toBe('danger');
    });
  });
});

describe('SliderTrack (Vue)', () => {
  it('should render with slider-track class', () => {
    const wrapper = mount(SliderTrack, { slots: { default: 'Track' } });
    expect(wrapper.classes()).toContain('wg-slider__track');
  });

  it('should render slot content', () => {
    const wrapper = mount(SliderTrack, { slots: { default: 'Track content' } });
    expect(wrapper.text()).toContain('Track content');
  });

  it('should be a div element', () => {
    const wrapper = mount(SliderTrack, { slots: { default: 'Track' } });
    expect(wrapper.element.tagName).toBe('DIV');
  });
});

describe('SliderFill (Vue)', () => {
  it('should render with slider-fill class', () => {
    const wrapper = mount(SliderFill);
    expect(wrapper.classes()).toContain('wg-slider__fill');
  });

  it('should be a div element', () => {
    const wrapper = mount(SliderFill);
    expect(wrapper.element.tagName).toBe('DIV');
  });
});

describe('SliderThumb (Vue)', () => {
  it('should render with slider-thumb class', () => {
    const wrapper = mount(SliderThumb);
    expect(wrapper.classes()).toContain('wg-slider__thumb');
  });

  it('should have role="slider"', () => {
    const wrapper = mount(SliderThumb);
    expect(wrapper.attributes('role')).toBe('slider');
  });

  it('should have tabindex="0"', () => {
    const wrapper = mount(SliderThumb);
    expect(wrapper.attributes('tabindex')).toBe('0');
  });

  it('should be a div element', () => {
    const wrapper = mount(SliderThumb);
    expect(wrapper.element.tagName).toBe('DIV');
  });
});
