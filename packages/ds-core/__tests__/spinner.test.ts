import { describe, it, expect } from 'vitest';
import { Spinner, SpinnerSizes, SpinnerColors } from '@woosgem-dev/core';

describe('Spinner Core', () => {
  describe('displayName', () => {
    it('should have displayName "Spinner"', () => {
      expect(Spinner.displayName).toBe('Spinner');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Spinner.defaultProps).toEqual({
        size: 'md',
        color: 'primary',
        label: 'Loading...',
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct size options', () => {
      expect(SpinnerSizes).toEqual(['xs', 'sm', 'md', 'lg']);
    });

    it('should have correct color options', () => {
      expect(SpinnerColors).toEqual(['primary', 'secondary', 'muted', 'current']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Spinner.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'spinner',
        'data-size': 'md',
        'data-color': 'primary',
        role: 'status',
        'aria-label': 'Loading...',
      });
    });

    it('should apply size prop', () => {
      for (const size of SpinnerSizes) {
        const attrs = Spinner.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply color prop', () => {
      for (const color of SpinnerColors) {
        const attrs = Spinner.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      }
    });

    it('should apply custom label', () => {
      const attrs = Spinner.mapPropsToAttrs({ label: '데이터를 불러오는 중...' });
      expect(attrs['aria-label']).toBe('데이터를 불러오는 중...');
    });

    it('should always have role="status"', () => {
      const attrs = Spinner.mapPropsToAttrs({});
      expect(attrs.role).toBe('status');
    });

    it('should use default values for undefined props', () => {
      const attrs = Spinner.mapPropsToAttrs({
        size: undefined,
        color: undefined,
        label: undefined,
      });
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['aria-label']).toBe('Loading...');
    });

    it('should combine multiple props', () => {
      const attrs = Spinner.mapPropsToAttrs({
        size: 'lg',
        color: 'secondary',
        label: 'Please wait',
      });
      expect(attrs).toEqual({
        class: 'spinner',
        'data-size': 'lg',
        'data-color': 'secondary',
        role: 'status',
        'aria-label': 'Please wait',
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Spinner.template.tag).toBe('div');
    });

    it('should have no slots', () => {
      expect(Spinner.template.slots).toEqual([]);
    });
  });
});
