import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Button, Input } from '@woosgem-dev/core';

describe('Error Handling', () => {
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  describe('TC-E140: props ë¯¸ì „????defaultProps ?ìš©', () => {
    it('Button: ë¹?ê°ì²´ ?„ë‹¬ ??ê¸°ë³¸ê°??ìš©', () => {
      const attrs = Button.mapPropsToAttrs({});
      expect(attrs['data-variant']).toBe('filled');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['data-size']).toBe('md');
    });

    it('Input: ë¹?ê°ì²´ ?„ë‹¬ ??ê¸°ë³¸ê°??ìš©', () => {
      const attrs = Input.mapPropsToAttrs({});
      expect(attrs['data-variant']).toBe('outline');
      expect(attrs['data-size']).toBe('md');
    });
  });

  describe('TC-E141: undefined ?„ë‹¬ ??defaultProps ?ìš©', () => {
    it('Button: variant undefined ??ê¸°ë³¸ê°??ìš©', () => {
      const attrs = Button.mapPropsToAttrs({ variant: undefined });
      expect(attrs['data-variant']).toBe('filled');
    });

    it('Button: color undefined ??ê¸°ë³¸ê°??ìš©', () => {
      const attrs = Button.mapPropsToAttrs({ color: undefined });
      expect(attrs['data-color']).toBe('primary');
    });

    it('Button: size undefined ??ê¸°ë³¸ê°??ìš©', () => {
      const attrs = Button.mapPropsToAttrs({ size: undefined });
      expect(attrs['data-size']).toBe('md');
    });

    it('Input: variant undefined ??ê¸°ë³¸ê°??ìš©', () => {
      const attrs = Input.mapPropsToAttrs({ variant: undefined });
      expect(attrs['data-variant']).toBe('outline');
    });

    it('Input: size undefined ??ê¸°ë³¸ê°??ìš©', () => {
      const attrs = Input.mapPropsToAttrs({ size: undefined });
      expect(attrs['data-size']).toBe('md');
    });
  });

  describe('TC-E142: null ?„ë‹¬ ??defaultProps ?ìš©', () => {
    it('Button: variant null ??ê¸°ë³¸ê°??ìš©', () => {
      // @ts-expect-error - testing invalid input
      const attrs = Button.mapPropsToAttrs({ variant: null });
      expect(attrs['data-variant']).toBe('filled');
    });

    it('Button: color null ??ê¸°ë³¸ê°??ìš©', () => {
      // @ts-expect-error - testing invalid input
      const attrs = Button.mapPropsToAttrs({ color: null });
      expect(attrs['data-color']).toBe('primary');
    });

    it('Input: variant null ??ê¸°ë³¸ê°??ìš©', () => {
      // @ts-expect-error - testing invalid input
      const attrs = Input.mapPropsToAttrs({ variant: null });
      expect(attrs['data-variant']).toBe('outline');
    });
  });

  describe('ê¸°ë³¸ ?™ìž‘ ê²€ì¦?, () => {
    it('Button: disabled=true ??data-state="disabled"', () => {
      const attrs = Button.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('Button: loading=true ??data-state="loading"', () => {
      const attrs = Button.mapPropsToAttrs({ loading: true });
      expect(attrs['data-state']).toBe('loading');
      expect(attrs.disabled).toBe(true);
    });

    it('Button: loading ?°ì„ ?œìœ„ê°€ disabledë³´ë‹¤ ?’ë‹¤', () => {
      const attrs = Button.mapPropsToAttrs({ loading: true, disabled: true });
      expect(attrs['data-state']).toBe('loading');
    });

    it('Input: disabled=true ??data-state="disabled"', () => {
      const attrs = Input.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
    });

    it('Input: error=true ??data-state="error"', () => {
      const attrs = Input.mapPropsToAttrs({ error: true });
      expect(attrs['data-state']).toBe('error');
    });
  });
});
