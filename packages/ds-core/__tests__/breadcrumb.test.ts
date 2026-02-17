import { describe, it, expect } from 'vitest';
import { Breadcrumb, BreadcrumbItem, BreadcrumbSizes } from '../src/components/Breadcrumb';

describe('Breadcrumb Core', () => {
  describe('displayName', () => {
    it('should have displayName "Breadcrumb"', () => {
      expect(Breadcrumb.displayName).toBe('Breadcrumb');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Breadcrumb.defaultProps).toEqual({
        separator: '/',
        size: 'md',
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Breadcrumb.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-breadcrumb',
        'data-size': 'md',
        'aria-label': 'Breadcrumb',
      });
    });

    it('should apply size prop', () => {
      for (const size of BreadcrumbSizes) {
        const attrs = Breadcrumb.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should have aria-label', () => {
      const attrs = Breadcrumb.mapPropsToAttrs({});
      expect(attrs['aria-label']).toBe('Breadcrumb');
    });
  });

  describe('template', () => {
    it('should use nav tag', () => {
      expect(Breadcrumb.template.tag).toBe('nav');
    });
  });
});

describe('BreadcrumbItem Core', () => {
  describe('displayName', () => {
    it('should have displayName "BreadcrumbItem"', () => {
      expect(BreadcrumbItem.displayName).toBe('BreadcrumbItem');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(BreadcrumbItem.defaultProps).toEqual({
        active: false,
        disabled: false,
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = BreadcrumbItem.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-breadcrumb__item',
        'data-state': undefined,
        'aria-current': undefined,
        'aria-disabled': undefined,
      });
    });

    it('should apply active state', () => {
      const attrs = BreadcrumbItem.mapPropsToAttrs({ active: true });
      expect(attrs['data-state']).toBe('active');
      expect(attrs['aria-current']).toBe('page');
    });

    it('should apply disabled state', () => {
      const attrs = BreadcrumbItem.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs['aria-disabled']).toBe('true');
    });

    it('should not include aria-current when not active', () => {
      const attrs = BreadcrumbItem.mapPropsToAttrs({ active: false });
      expect(attrs['aria-current']).toBeUndefined();
    });
  });

  describe('template', () => {
    it('should use li tag', () => {
      expect(BreadcrumbItem.template.tag).toBe('li');
    });
  });
});
