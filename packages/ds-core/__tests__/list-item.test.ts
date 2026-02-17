import { describe, it, expect } from 'vitest';
import { ListItem, ListItemVariants } from '@woosgem-dev/core';

describe('ListItem', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(ListItem.displayName).toBe('ListItem');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(ListItem.defaultProps).toEqual({
        variant: 'default',
        selected: false,
        disabled: false,
        divider: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should include all variants', () => {
      expect(ListItemVariants).toContain('default');
      expect(ListItemVariants).toContain('interactive');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = ListItem.mapPropsToAttrs({});
      expect(attrs.class).toBe('wg-list-item');
      expect(attrs['data-variant']).toBe('default');
      expect(attrs['data-state']).toBeUndefined();
      expect(attrs['data-divider']).toBeUndefined();
      expect(attrs['aria-selected']).toBeUndefined();
      expect(attrs['aria-disabled']).toBeUndefined();
    });

    it('should apply custom variant', () => {
      const attrs = ListItem.mapPropsToAttrs({ variant: 'interactive' });
      expect(attrs['data-variant']).toBe('interactive');
    });

    it('should set selected state', () => {
      const attrs = ListItem.mapPropsToAttrs({ selected: true });
      expect(attrs['data-state']).toBe('selected');
      expect(attrs['aria-selected']).toBe(true);
    });

    it('should set disabled state', () => {
      const attrs = ListItem.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs['aria-disabled']).toBe(true);
    });

    it('should prioritize selected over disabled state', () => {
      const attrs = ListItem.mapPropsToAttrs({ selected: true, disabled: true });
      expect(attrs['data-state']).toBe('selected');
    });

    it('should set divider attribute', () => {
      const attrs = ListItem.mapPropsToAttrs({ divider: true });
      expect(attrs['data-divider']).toBe(true);
    });

    it('should not set divider when false', () => {
      const attrs = ListItem.mapPropsToAttrs({ divider: false });
      expect(attrs['data-divider']).toBeUndefined();
    });
  });

  describe('template', () => {
    it('should use li tag', () => {
      expect(ListItem.template.tag).toBe('li');
    });

    it('should have default slot', () => {
      expect(ListItem.template.slots).toContain('default');
    });
  });
});
