import { describe, it, expect } from 'vitest';
import { Alert, AlertVariants, AlertStatuses } from '@woosgem-dev/core';

describe('Alert Core', () => {
  describe('displayName', () => {
    it('should have displayName "Alert"', () => {
      expect(Alert.displayName).toBe('Alert');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Alert.defaultProps).toEqual({
        variant: 'subtle',
        status: 'info',
        closable: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct variant options', () => {
      expect(AlertVariants).toEqual(['filled', 'outline', 'subtle']);
    });

    it('should have correct status options', () => {
      expect(AlertStatuses).toEqual(['info', 'success', 'warning', 'error']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Alert.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'alert',
        'data-variant': 'subtle',
        'data-status': 'info',
        'data-closable': undefined,
        role: 'alert',
      });
    });

    it('should apply variant prop', () => {
      for (const variant of AlertVariants) {
        const attrs = Alert.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should apply status prop', () => {
      for (const status of AlertStatuses) {
        const attrs = Alert.mapPropsToAttrs({ status });
        expect(attrs['data-status']).toBe(status);
      }
    });

    it('should apply closable prop', () => {
      const attrs = Alert.mapPropsToAttrs({ closable: true });
      expect(attrs['data-closable']).toBe(true);
    });

    it('should not include data-closable when false', () => {
      const attrs = Alert.mapPropsToAttrs({ closable: false });
      expect(attrs['data-closable']).toBeUndefined();
    });

    it('should always have role="alert"', () => {
      const attrs = Alert.mapPropsToAttrs({});
      expect(attrs.role).toBe('alert');
    });

    it('should use default values for undefined props', () => {
      const attrs = Alert.mapPropsToAttrs({
        variant: undefined,
        status: undefined,
        closable: undefined,
      });
      expect(attrs['data-variant']).toBe('subtle');
      expect(attrs['data-status']).toBe('info');
      expect(attrs['data-closable']).toBeUndefined();
    });

    it('should combine multiple props', () => {
      const attrs = Alert.mapPropsToAttrs({
        variant: 'filled',
        status: 'error',
        closable: true,
      });
      expect(attrs).toEqual({
        class: 'alert',
        'data-variant': 'filled',
        'data-status': 'error',
        'data-closable': true,
        role: 'alert',
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Alert.template.tag).toBe('div');
    });

    it('should have icon, default, action slots', () => {
      expect(Alert.template.slots).toEqual(['icon', 'default', 'action']);
    });
  });
});
