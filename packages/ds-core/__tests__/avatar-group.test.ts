import { describe, it, expect } from 'vitest';
import { AvatarGroup, AvatarGroupSizes, AvatarGroupSpacings } from '../src/components/AvatarGroup';

describe('AvatarGroup Core', () => {
  describe('displayName', () => {
    it('should have displayName "AvatarGroup"', () => {
      expect(AvatarGroup.displayName).toBe('AvatarGroup');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(AvatarGroup.defaultProps).toEqual({
        size: 'md',
        max: 5,
        spacing: 'tight',
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = AvatarGroup.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-avatar-group',
        'data-size': 'md',
        'data-spacing': 'tight',
        role: 'group',
        'aria-label': 'Avatar group',
      });
    });

    it('should apply size prop', () => {
      for (const size of AvatarGroupSizes) {
        const attrs = AvatarGroup.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply spacing prop', () => {
      for (const spacing of AvatarGroupSpacings) {
        const attrs = AvatarGroup.mapPropsToAttrs({ spacing });
        expect(attrs['data-spacing']).toBe(spacing);
      }
    });

    it('should have role group', () => {
      const attrs = AvatarGroup.mapPropsToAttrs({});
      expect(attrs.role).toBe('group');
    });

    it('should have aria-label', () => {
      const attrs = AvatarGroup.mapPropsToAttrs({});
      expect(attrs['aria-label']).toBe('Avatar group');
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(AvatarGroup.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(AvatarGroup.template.slots).toContain('default');
    });
  });
});
