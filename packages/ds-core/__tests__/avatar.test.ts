import { describe, it, expect } from 'vitest';
import { Avatar, AvatarSizes, AvatarShapes } from '@woosgem-dev/core';

describe('Avatar', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(Avatar.displayName).toBe('Avatar');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(Avatar.defaultProps).toEqual({
        size: 'md',
        shape: 'circle',
        src: '',
        alt: '',
        fallback: '',
      });
    });
  });

  describe('propTypes', () => {
    it('should include all sizes', () => {
      expect(AvatarSizes).toContain('xs');
      expect(AvatarSizes).toContain('sm');
      expect(AvatarSizes).toContain('md');
      expect(AvatarSizes).toContain('lg');
      expect(AvatarSizes).toContain('xl');
    });

    it('should include all shapes', () => {
      expect(AvatarShapes).toContain('circle');
      expect(AvatarShapes).toContain('square');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = Avatar.mapPropsToAttrs({});
      expect(attrs.class).toBe('wg-avatar');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-shape']).toBe('circle');
      expect(attrs['data-has-image']).toBeUndefined();
    });

    it('should apply custom size and shape', () => {
      const attrs = Avatar.mapPropsToAttrs({
        size: 'lg',
        shape: 'square',
      });
      expect(attrs['data-size']).toBe('lg');
      expect(attrs['data-shape']).toBe('square');
    });

    it('should set data-has-image when src is provided', () => {
      const attrs = Avatar.mapPropsToAttrs({ src: '/avatar.jpg' });
      expect(attrs['data-has-image']).toBe(true);
    });

    it('should not set data-has-image when src is empty', () => {
      const attrs = Avatar.mapPropsToAttrs({ src: '' });
      expect(attrs['data-has-image']).toBeUndefined();
    });

    it('should handle all size variants', () => {
      for (const size of AvatarSizes) {
        const attrs = Avatar.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Avatar.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(Avatar.template.slots).toContain('default');
    });
  });
});
