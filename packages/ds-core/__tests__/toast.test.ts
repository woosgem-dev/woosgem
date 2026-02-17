import { describe, it, expect } from 'vitest';
import {
  Toast,
  ToastVariants,
  ToastPositions,
} from '@woosgem-dev/core';

describe('Toast Core', () => {
  describe('displayName', () => {
    it('should have displayName "Toast"', () => {
      expect(Toast.displayName).toBe('Toast');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Toast.defaultProps).toEqual({
        variant: 'info',
        position: 'top-right',
        duration: 5000,
        closable: true,
        visible: true,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct variant options', () => {
      expect(ToastVariants).toEqual(['info', 'success', 'warning', 'error']);
    });

    it('should have correct position options', () => {
      expect(ToastPositions).toEqual([
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
        'top-center',
        'bottom-center',
      ]);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Toast.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'toast',
        'data-variant': 'info',
        'data-position': 'top-right',
        'data-closable': true,
        'data-visible': true,
        role: 'alert',
        'aria-live': 'polite',
        'aria-atomic': 'true',
      });
    });

    it('should apply variant prop', () => {
      for (const variant of ToastVariants) {
        const attrs = Toast.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should apply position prop', () => {
      for (const position of ToastPositions) {
        const attrs = Toast.mapPropsToAttrs({ position });
        expect(attrs['data-position']).toBe(position);
      }
    });

    it('should apply closable prop', () => {
      const attrsTrue = Toast.mapPropsToAttrs({ closable: true });
      expect(attrsTrue['data-closable']).toBe(true);

      const attrsFalse = Toast.mapPropsToAttrs({ closable: false });
      expect(attrsFalse['data-closable']).toBeUndefined();
    });

    it('should apply visible prop', () => {
      const attrsTrue = Toast.mapPropsToAttrs({ visible: true });
      expect(attrsTrue['data-visible']).toBe(true);

      const attrsFalse = Toast.mapPropsToAttrs({ visible: false });
      expect(attrsFalse['data-visible']).toBeUndefined();
    });

    it('should always have role="alert"', () => {
      const attrs = Toast.mapPropsToAttrs({});
      expect(attrs.role).toBe('alert');
    });

    it('should always have aria-live="polite"', () => {
      const attrs = Toast.mapPropsToAttrs({});
      expect(attrs['aria-live']).toBe('polite');
    });

    it('should always have aria-atomic="true"', () => {
      const attrs = Toast.mapPropsToAttrs({});
      expect(attrs['aria-atomic']).toBe('true');
    });

    it('should use default values for undefined props', () => {
      const attrs = Toast.mapPropsToAttrs({
        variant: undefined,
        position: undefined,
      });
      expect(attrs['data-variant']).toBe('info');
      expect(attrs['data-position']).toBe('top-right');
    });

    it('should combine multiple props', () => {
      const attrs = Toast.mapPropsToAttrs({
        variant: 'error',
        position: 'bottom-center',
        closable: false,
        visible: true,
      });
      expect(attrs).toEqual({
        class: 'toast',
        'data-variant': 'error',
        'data-position': 'bottom-center',
        'data-closable': undefined,
        'data-visible': true,
        role: 'alert',
        'aria-live': 'polite',
        'aria-atomic': 'true',
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Toast.template.tag).toBe('div');
    });

    it('should have icon, default, action slots', () => {
      expect(Toast.template.slots).toEqual(['icon', 'default', 'action']);
    });
  });
});
