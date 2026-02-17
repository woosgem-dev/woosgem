import { describe, it, expect } from 'vitest';
import { Tag, TagVariants, TagColors, TagSizes } from '../src/components/Tag';

describe('Tag Core', () => {
  describe('displayName', () => {
    it('should have displayName "Tag"', () => {
      expect(Tag.displayName).toBe('Tag');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Tag.defaultProps).toEqual({
        variant: 'subtle',
        color: 'primary',
        size: 'md',
        closable: false,
        disabled: false,
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Tag.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-tag',
        'data-variant': 'subtle',
        'data-color': 'primary',
        'data-size': 'md',
        'data-closable': undefined,
        'data-state': undefined,
        'aria-disabled': undefined,
      });
    });

    it('should apply variant prop', () => {
      for (const variant of TagVariants) {
        const attrs = Tag.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should apply color prop', () => {
      for (const color of TagColors) {
        const attrs = Tag.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      }
    });

    it('should apply size prop', () => {
      for (const size of TagSizes) {
        const attrs = Tag.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply closable prop', () => {
      const attrs = Tag.mapPropsToAttrs({ closable: true });
      expect(attrs['data-closable']).toBe(true);
    });

    it('should not include data-closable when false', () => {
      const attrs = Tag.mapPropsToAttrs({ closable: false });
      expect(attrs['data-closable']).toBeUndefined();
    });

    it('should apply disabled state', () => {
      const attrs = Tag.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs['aria-disabled']).toBe('true');
    });

    it('should not include disabled attrs when not disabled', () => {
      const attrs = Tag.mapPropsToAttrs({ disabled: false });
      expect(attrs['data-state']).toBeUndefined();
      expect(attrs['aria-disabled']).toBeUndefined();
    });
  });

  describe('template', () => {
    it('should use span tag', () => {
      expect(Tag.template.tag).toBe('span');
    });

    it('should have default slot', () => {
      expect(Tag.template.slots).toContain('default');
    });
  });
});
