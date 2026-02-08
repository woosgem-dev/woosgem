import { describe, it, expect } from 'vitest';
import {
  Tooltip,
  TooltipPositions,
  TooltipTriggers,
} from '@woosgem-dev/core';

describe('Tooltip Core', () => {
  describe('displayName', () => {
    it('should have displayName "Tooltip"', () => {
      expect(Tooltip.displayName).toBe('Tooltip');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Tooltip.defaultProps).toEqual({
        content: '',
        position: 'top',
        trigger: 'hover',
        delay: 0,
        arrow: true,
        visible: false,
        disabled: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct position options', () => {
      expect(TooltipPositions).toEqual(['top', 'bottom', 'left', 'right']);
    });

    it('should have correct trigger options', () => {
      expect(TooltipTriggers).toEqual(['hover', 'click', 'focus']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Tooltip.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'tooltip',
        'data-position': 'top',
        'data-trigger': 'hover',
        'data-arrow': true,
        'data-visible': undefined,
        'data-disabled': undefined,
        role: 'tooltip',
      });
    });

    it('should apply position prop', () => {
      for (const position of TooltipPositions) {
        const attrs = Tooltip.mapPropsToAttrs({ position });
        expect(attrs['data-position']).toBe(position);
      }
    });

    it('should apply trigger prop', () => {
      for (const trigger of TooltipTriggers) {
        const attrs = Tooltip.mapPropsToAttrs({ trigger });
        expect(attrs['data-trigger']).toBe(trigger);
      }
    });

    it('should apply arrow prop', () => {
      const attrsTrue = Tooltip.mapPropsToAttrs({ arrow: true });
      expect(attrsTrue['data-arrow']).toBe(true);

      const attrsFalse = Tooltip.mapPropsToAttrs({ arrow: false });
      expect(attrsFalse['data-arrow']).toBeUndefined();
    });

    it('should apply visible prop', () => {
      const attrs = Tooltip.mapPropsToAttrs({ visible: true });
      expect(attrs['data-visible']).toBe(true);
    });

    it('should not include data-visible when false', () => {
      const attrs = Tooltip.mapPropsToAttrs({ visible: false });
      expect(attrs['data-visible']).toBeUndefined();
    });

    it('should apply disabled prop', () => {
      const attrs = Tooltip.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-disabled']).toBe(true);
    });

    it('should not include data-disabled when false', () => {
      const attrs = Tooltip.mapPropsToAttrs({ disabled: false });
      expect(attrs['data-disabled']).toBeUndefined();
    });

    it('should always have role="tooltip"', () => {
      const attrs = Tooltip.mapPropsToAttrs({});
      expect(attrs.role).toBe('tooltip');
    });

    it('should use default values for undefined props', () => {
      const attrs = Tooltip.mapPropsToAttrs({
        position: undefined,
        trigger: undefined,
        arrow: undefined,
      });
      expect(attrs['data-position']).toBe('top');
      expect(attrs['data-trigger']).toBe('hover');
      expect(attrs['data-arrow']).toBe(true);
    });

    it('should combine multiple props', () => {
      const attrs = Tooltip.mapPropsToAttrs({
        position: 'bottom',
        trigger: 'click',
        arrow: false,
        visible: true,
        disabled: false,
      });
      expect(attrs).toEqual({
        class: 'tooltip',
        'data-position': 'bottom',
        'data-trigger': 'click',
        'data-arrow': undefined,
        'data-visible': true,
        'data-disabled': undefined,
        role: 'tooltip',
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Tooltip.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(Tooltip.template.slots).toEqual(['default']);
    });
  });
});
