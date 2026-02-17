import { describe, it, expect } from 'vitest';
import {
  Pagination,
  PaginationItem,
  PaginationVariants,
  PaginationSizes,
  PaginationShapes,
} from '../src/components/Pagination';

describe('Pagination Core', () => {
  describe('displayName', () => {
    it('should have displayName "Pagination"', () => {
      expect(Pagination.displayName).toBe('Pagination');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Pagination.defaultProps).toEqual({
        variant: 'outline',
        size: 'md',
        shape: 'rounded',
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Pagination.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-pagination',
        'data-variant': 'outline',
        'data-size': 'md',
        'data-shape': 'rounded',
        role: 'navigation',
        'aria-label': 'Pagination',
      });
    });

    it('should apply variant prop', () => {
      for (const variant of PaginationVariants) {
        const attrs = Pagination.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should apply size prop', () => {
      for (const size of PaginationSizes) {
        const attrs = Pagination.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply shape prop', () => {
      for (const shape of PaginationShapes) {
        const attrs = Pagination.mapPropsToAttrs({ shape });
        expect(attrs['data-shape']).toBe(shape);
      }
    });

    it('should have role="navigation"', () => {
      const attrs = Pagination.mapPropsToAttrs({});
      expect(attrs.role).toBe('navigation');
    });

    it('should have aria-label="Pagination"', () => {
      const attrs = Pagination.mapPropsToAttrs({});
      expect(attrs['aria-label']).toBe('Pagination');
    });
  });

  describe('template', () => {
    it('should use nav tag', () => {
      expect(Pagination.template.tag).toBe('nav');
    });
  });
});

describe('PaginationItem Core', () => {
  describe('displayName', () => {
    it('should have displayName "PaginationItem"', () => {
      expect(PaginationItem.displayName).toBe('PaginationItem');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(PaginationItem.defaultProps).toEqual({
        active: false,
        disabled: false,
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = PaginationItem.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-pagination__item',
        type: 'button',
        'data-state': undefined,
        'aria-current': undefined,
        'aria-disabled': undefined,
      });
    });

    it('should apply active state', () => {
      const attrs = PaginationItem.mapPropsToAttrs({ active: true });
      expect(attrs['data-state']).toBe('active');
      expect(attrs['aria-current']).toBe('page');
    });

    it('should apply disabled state', () => {
      const attrs = PaginationItem.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs['aria-disabled']).toBe('true');
    });

    it('should not include aria-current when not active', () => {
      const attrs = PaginationItem.mapPropsToAttrs({ active: false });
      expect(attrs['aria-current']).toBeUndefined();
    });

    it('should not include aria-disabled when not disabled', () => {
      const attrs = PaginationItem.mapPropsToAttrs({ disabled: false });
      expect(attrs['aria-disabled']).toBeUndefined();
    });

    it('should have type="button"', () => {
      const attrs = PaginationItem.mapPropsToAttrs({});
      expect(attrs.type).toBe('button');
    });

    it('should prioritize active over disabled when both are true', () => {
      const attrs = PaginationItem.mapPropsToAttrs({ active: true, disabled: true });
      expect(attrs['data-state']).toBe('active');
    });
  });

  describe('template', () => {
    it('should use button tag', () => {
      expect(PaginationItem.template.tag).toBe('button');
    });
  });
});
