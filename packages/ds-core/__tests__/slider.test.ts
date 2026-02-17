import { describe, it, expect } from 'vitest';
import {
  Slider,
  SliderTrack,
  SliderFill,
  SliderThumb,
  SliderSizes,
  SliderColors,
  SliderOrientations,
} from '../src/components/Slider';

describe('Slider Core', () => {
  describe('displayName', () => {
    it('should have displayName "Slider"', () => {
      expect(Slider.displayName).toBe('Slider');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Slider.defaultProps).toEqual({
        size: 'md',
        color: 'primary',
        disabled: false,
        orientation: 'horizontal',
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct size options', () => {
      expect(SliderSizes).toEqual(['sm', 'md', 'lg']);
    });

    it('should have correct color options', () => {
      expect(SliderColors).toEqual(['primary', 'secondary', 'success', 'warning', 'danger']);
    });

    it('should have correct orientation options', () => {
      expect(SliderOrientations).toEqual(['horizontal', 'vertical']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Slider.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-slider',
        'data-size': 'md',
        'data-color': 'primary',
        'data-orientation': 'horizontal',
        'data-state': undefined,
        'aria-disabled': undefined,
      });
    });

    it('should apply size prop', () => {
      for (const size of SliderSizes) {
        const attrs = Slider.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply color prop', () => {
      for (const color of SliderColors) {
        const attrs = Slider.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      }
    });

    it('should apply orientation prop', () => {
      for (const orientation of SliderOrientations) {
        const attrs = Slider.mapPropsToAttrs({ orientation });
        expect(attrs['data-orientation']).toBe(orientation);
      }
    });

    it('should set disabled state', () => {
      const attrs = Slider.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs['aria-disabled']).toBe('true');
    });

    it('should not set disabled state when false', () => {
      const attrs = Slider.mapPropsToAttrs({ disabled: false });
      expect(attrs['data-state']).toBeUndefined();
      expect(attrs['aria-disabled']).toBeUndefined();
    });

    it('should use default values for undefined props', () => {
      const attrs = Slider.mapPropsToAttrs({
        size: undefined,
        color: undefined,
        orientation: undefined,
      });
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['data-orientation']).toBe('horizontal');
    });

    it('should combine multiple props', () => {
      const attrs = Slider.mapPropsToAttrs({
        size: 'lg',
        color: 'danger',
        orientation: 'vertical',
        disabled: true,
      });
      expect(attrs).toEqual({
        class: 'wg-slider',
        'data-size': 'lg',
        'data-color': 'danger',
        'data-orientation': 'vertical',
        'data-state': 'disabled',
        'aria-disabled': 'true',
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Slider.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(Slider.template.slots).toEqual(['default']);
    });
  });
});

describe('SliderTrack Core', () => {
  it('should have displayName "SliderTrack"', () => {
    expect(SliderTrack.displayName).toBe('SliderTrack');
  });

  it('should return correct attrs', () => {
    const attrs = SliderTrack.mapPropsToAttrs();
    expect(attrs).toEqual({
      class: 'wg-slider__track',
    });
  });

  it('should use div tag', () => {
    expect(SliderTrack.template.tag).toBe('div');
  });

  it('should have default slot', () => {
    expect(SliderTrack.template.slots).toEqual(['default']);
  });
});

describe('SliderFill Core', () => {
  it('should have displayName "SliderFill"', () => {
    expect(SliderFill.displayName).toBe('SliderFill');
  });

  it('should return correct attrs', () => {
    const attrs = SliderFill.mapPropsToAttrs();
    expect(attrs).toEqual({
      class: 'wg-slider__fill',
    });
  });

  it('should use div tag', () => {
    expect(SliderFill.template.tag).toBe('div');
  });

  it('should have empty slots', () => {
    expect(SliderFill.template.slots).toEqual([]);
  });
});

describe('SliderThumb Core', () => {
  it('should have displayName "SliderThumb"', () => {
    expect(SliderThumb.displayName).toBe('SliderThumb');
  });

  it('should return correct attrs', () => {
    const attrs = SliderThumb.mapPropsToAttrs();
    expect(attrs).toEqual({
      class: 'wg-slider__thumb',
      role: 'slider',
      tabindex: '0',
    });
  });

  it('should use div tag', () => {
    expect(SliderThumb.template.tag).toBe('div');
  });

  it('should have empty slots', () => {
    expect(SliderThumb.template.slots).toEqual([]);
  });
});
