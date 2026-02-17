import { describe, it, expect } from 'vitest';
import {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlSizes,
} from '@woosgem-dev/core';

describe('SegmentedControl', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(SegmentedControl.displayName).toBe('SegmentedControl');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(SegmentedControl.defaultProps).toEqual({
        size: 'md',
        fullWidth: false,
        disabled: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should include all sizes', () => {
      expect(SegmentedControlSizes).toContain('sm');
      expect(SegmentedControlSizes).toContain('md');
      expect(SegmentedControlSizes).toContain('lg');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = SegmentedControl.mapPropsToAttrs({});
      expect(attrs.class).toBe('segmented-control');
      expect(attrs.role).toBe('group');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-full-width']).toBeUndefined();
      expect(attrs['data-disabled']).toBeUndefined();
    });

    it('should apply custom size', () => {
      const attrs = SegmentedControl.mapPropsToAttrs({ size: 'lg' });
      expect(attrs['data-size']).toBe('lg');
    });

    it('should set fullWidth attribute', () => {
      const attrs = SegmentedControl.mapPropsToAttrs({ fullWidth: true });
      expect(attrs['data-full-width']).toBe(true);
    });

    it('should set disabled attribute', () => {
      const attrs = SegmentedControl.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-disabled']).toBe(true);
    });

    it('should handle all size variants', () => {
      for (const size of SegmentedControlSizes) {
        const attrs = SegmentedControl.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(SegmentedControl.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(SegmentedControl.template.slots).toContain('default');
    });
  });
});

describe('SegmentedControlItem', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(SegmentedControlItem.displayName).toBe('SegmentedControlItem');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(SegmentedControlItem.defaultProps).toEqual({
        selected: false,
        disabled: false,
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = SegmentedControlItem.mapPropsToAttrs({});
      expect(attrs.class).toBe('segmented-control-item');
      expect(attrs['data-state']).toBeUndefined();
      expect(attrs['aria-selected']).toBeUndefined();
      expect(attrs.disabled).toBeUndefined();
    });

    it('should set selected state', () => {
      const attrs = SegmentedControlItem.mapPropsToAttrs({ selected: true });
      expect(attrs['data-state']).toBe('selected');
      expect(attrs['aria-selected']).toBe(true);
    });

    it('should set disabled state', () => {
      const attrs = SegmentedControlItem.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('should prioritize selected over disabled state', () => {
      const attrs = SegmentedControlItem.mapPropsToAttrs({ selected: true, disabled: true });
      expect(attrs['data-state']).toBe('selected');
    });
  });

  describe('template', () => {
    it('should use button tag', () => {
      expect(SegmentedControlItem.template.tag).toBe('button');
    });

    it('should have default slot', () => {
      expect(SegmentedControlItem.template.slots).toContain('default');
    });
  });
});
