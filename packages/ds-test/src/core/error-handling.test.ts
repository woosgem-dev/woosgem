import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Button, Input } from '@woosgem/ds-core';

describe('Error Handling', () => {
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  describe('TC-E140: props 미전달 시 defaultProps 적용', () => {
    it('Button: 빈 객체 전달 시 기본값 적용', () => {
      const attrs = Button.mapPropsToAttrs({});
      expect(attrs['data-variant']).toBe('filled');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['data-size']).toBe('md');
    });

    it('Input: 빈 객체 전달 시 기본값 적용', () => {
      const attrs = Input.mapPropsToAttrs({});
      expect(attrs['data-variant']).toBe('outline');
      expect(attrs['data-size']).toBe('md');
    });
  });

  describe('TC-E141: undefined 전달 시 defaultProps 적용', () => {
    it('Button: variant undefined 시 기본값 적용', () => {
      const attrs = Button.mapPropsToAttrs({ variant: undefined });
      expect(attrs['data-variant']).toBe('filled');
    });

    it('Button: color undefined 시 기본값 적용', () => {
      const attrs = Button.mapPropsToAttrs({ color: undefined });
      expect(attrs['data-color']).toBe('primary');
    });

    it('Button: size undefined 시 기본값 적용', () => {
      const attrs = Button.mapPropsToAttrs({ size: undefined });
      expect(attrs['data-size']).toBe('md');
    });

    it('Input: variant undefined 시 기본값 적용', () => {
      const attrs = Input.mapPropsToAttrs({ variant: undefined });
      expect(attrs['data-variant']).toBe('outline');
    });

    it('Input: size undefined 시 기본값 적용', () => {
      const attrs = Input.mapPropsToAttrs({ size: undefined });
      expect(attrs['data-size']).toBe('md');
    });
  });

  describe('TC-E142: null 전달 시 defaultProps 적용', () => {
    it('Button: variant null 시 기본값 적용', () => {
      // @ts-expect-error - testing invalid input
      const attrs = Button.mapPropsToAttrs({ variant: null });
      expect(attrs['data-variant']).toBe('filled');
    });

    it('Button: color null 시 기본값 적용', () => {
      // @ts-expect-error - testing invalid input
      const attrs = Button.mapPropsToAttrs({ color: null });
      expect(attrs['data-color']).toBe('primary');
    });

    it('Input: variant null 시 기본값 적용', () => {
      // @ts-expect-error - testing invalid input
      const attrs = Input.mapPropsToAttrs({ variant: null });
      expect(attrs['data-variant']).toBe('outline');
    });
  });

  describe('기본 동작 검증', () => {
    it('Button: disabled=true 시 data-state="disabled"', () => {
      const attrs = Button.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('Button: loading=true 시 data-state="loading"', () => {
      const attrs = Button.mapPropsToAttrs({ loading: true });
      expect(attrs['data-state']).toBe('loading');
      expect(attrs.disabled).toBe(true);
    });

    it('Button: loading 우선순위가 disabled보다 높다', () => {
      const attrs = Button.mapPropsToAttrs({ loading: true, disabled: true });
      expect(attrs['data-state']).toBe('loading');
    });

    it('Input: disabled=true 시 data-state="disabled"', () => {
      const attrs = Input.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
    });

    it('Input: error=true 시 data-state="error"', () => {
      const attrs = Input.mapPropsToAttrs({ error: true });
      expect(attrs['data-state']).toBe('error');
    });
  });
});
