/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Skeleton } from '@woosgem-dev/lit';
import { Skeleton as SkeletonDef } from '@woosgem-dev/core';

describe('Skeleton (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton></wg-skeleton>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-animation')).toBe(coreAttrs['data-animation']);
      expect(el.classList.contains('wg-skeleton')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ variant: 'circular' });

      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton variant="circular"></wg-skeleton>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('circular');
    });

    it('TC-L102: rectangular variant가 core 결과와 일치한다', async () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ variant: 'rectangular' });

      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton variant="rectangular"></wg-skeleton>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('rectangular');
    });

    it('TC-L103: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton size="lg"></wg-skeleton>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L104: animation prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ animation: 'wave' });

      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton animation="wave"></wg-skeleton>
      `);

      expect(el.getAttribute('data-animation')).toBe(coreAttrs['data-animation']);
      expect(el.getAttribute('data-animation')).toBe('wave');
    });

    it('TC-L105: animation none이 core 결과와 일치한다', async () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ animation: 'none' });

      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton animation="none"></wg-skeleton>
      `);

      expect(el.getAttribute('data-animation')).toBe(coreAttrs['data-animation']);
      expect(el.getAttribute('data-animation')).toBe('none');
    });

    it('TC-L106: aria 속성이 설정된다', async () => {
      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton></wg-skeleton>
      `);

      expect(el.getAttribute('aria-busy')).not.toBeNull();
      expect(el.getAttribute('aria-live')).toBe('polite');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton variant="text"></wg-skeleton>
      `);

      expect(el.getAttribute('data-variant')).toBe('text');

      el.variant = 'circular';
      await el.updateComplete;

      expect(el.getAttribute('data-variant')).toBe('circular');
    });

    it('TC-L301: custom dimensions이 style로 적용된다', async () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ width: '200px', height: '100px' });

      const el = await fixture<InstanceType<typeof Skeleton>>(html`
        <wg-skeleton width="200px" height="100px"></wg-skeleton>
      `);

      expect(el.getAttribute('style')).toBe(coreAttrs.style);
    });
  });
});
