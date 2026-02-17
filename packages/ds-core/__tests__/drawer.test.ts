import { describe, it, expect } from 'vitest';
import { Drawer, DrawerPositions, DrawerSizes } from '../src/components/Drawer';

describe('Drawer Core', () => {
  describe('displayName', () => {
    it('should have displayName "Drawer"', () => {
      expect(Drawer.displayName).toBe('Drawer');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Drawer.defaultProps).toEqual({
        position: 'right',
        size: 'md',
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Drawer.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'drawer',
        'data-position': 'right',
        'data-size': 'md',
        role: 'dialog',
        'aria-modal': 'true',
      });
    });

    it('should apply position prop', () => {
      for (const position of DrawerPositions) {
        const attrs = Drawer.mapPropsToAttrs({ position });
        expect(attrs['data-position']).toBe(position);
      }
    });

    it('should apply size prop', () => {
      for (const size of DrawerSizes) {
        const attrs = Drawer.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should have role dialog', () => {
      const attrs = Drawer.mapPropsToAttrs({});
      expect(attrs.role).toBe('dialog');
    });

    it('should have aria-modal true', () => {
      const attrs = Drawer.mapPropsToAttrs({});
      expect(attrs['aria-modal']).toBe('true');
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Drawer.template.tag).toBe('div');
    });

    it('should have slots', () => {
      expect(Drawer.template.slots).toContain('default');
    });
  });
});
