import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Skeleton } from '@woosgem-dev/vue';
import { Skeleton as SkeletonDef } from '@woosgem-dev/core';

describe('Skeleton', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({});
      const wrapper = mount(Skeleton);

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-animation')).toBe(coreAttrs['data-animation']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ variant: 'circular' });
      const wrapper = mount(Skeleton, { props: { variant: 'circular' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-variant')).toBe('circular');
    });

    it('TC-V102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Skeleton, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-V103: animation prop이 core 결과와 일치한다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ animation: 'wave' });
      const wrapper = mount(Skeleton, { props: { animation: 'wave' } });

      expect(wrapper.attributes('data-animation')).toBe(coreAttrs['data-animation']);
      expect(wrapper.attributes('data-animation')).toBe('wave');
    });

    it('TC-V104: variant: rectangular이 core 결과와 일치한다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ variant: 'rectangular' });
      const wrapper = mount(Skeleton, { props: { variant: 'rectangular' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
    });

    it('TC-V105: animation: none이 core 결과와 일치한다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ animation: 'none' });
      const wrapper = mount(Skeleton, { props: { animation: 'none' } });

      expect(wrapper.attributes('data-animation')).toBe(coreAttrs['data-animation']);
    });

    it('TC-V106: size: sm이 core 결과와 일치한다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ size: 'sm' });
      const wrapper = mount(Skeleton, { props: { size: 'sm' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });

    it('TC-V107: size: full이 core 결과와 일치한다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ size: 'full' });
      const wrapper = mount(Skeleton, { props: { size: 'full' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });

    it('TC-V108: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'circular' as const,
        size: 'lg' as const,
        animation: 'wave' as const,
      };
      const coreAttrs = SkeletonDef.mapPropsToAttrs(props);
      const wrapper = mount(Skeleton, { props });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-animation')).toBe(coreAttrs['data-animation']);
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 text이다', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.attributes('data-variant')).toBe('text');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C012: animation 기본값이 pulse이다', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.attributes('data-animation')).toBe('pulse');
    });
  });

  describe('접근성', () => {
    it('TC-A100: aria-busy가 적용된다', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.attributes('aria-busy')).toBe('true');
    });

    it('TC-A101: aria-live가 적용된다', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.attributes('aria-live')).toBe('polite');
    });
  });

  describe('커스텀 크기', () => {
    it('TC-S100: width가 style로 적용된다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ width: '200px' });
      const wrapper = mount(Skeleton, { props: { width: '200px' } });

      expect(wrapper.attributes('style')).toContain('width: 200px');
      expect(coreAttrs.style).toContain('width: 200px');
    });

    it('TC-S101: height가 style로 적용된다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ height: '100px' });
      const wrapper = mount(Skeleton, { props: { height: '100px' } });

      expect(wrapper.attributes('style')).toContain('height: 100px');
      expect(coreAttrs.style).toContain('height: 100px');
    });

    it('TC-S102: 숫자 width가 px로 변환된다', () => {
      const coreAttrs = SkeletonDef.mapPropsToAttrs({ width: 150 });
      const wrapper = mount(Skeleton, { props: { width: 150 } });

      expect(wrapper.attributes('style')).toContain('width: 150px');
      expect(coreAttrs.style).toContain('width: 150px');
    });

    it('TC-S103: width와 height가 함께 적용된다', () => {
      const wrapper = mount(Skeleton, { props: { width: '100%', height: '48px' } });

      expect(wrapper.attributes('style')).toContain('width: 100%');
      expect(wrapper.attributes('style')).toContain('height: 48px');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Skeleton, { props: { class: 'custom-skeleton' } });

      expect(wrapper.classes()).toContain('skeleton');
      expect(wrapper.classes()).toContain('custom-skeleton');
    });

    it('TC-O130: 보호 속성 data-variant 오버라이드 차단', () => {
      const wrapper = mount(Skeleton, {
        props: { variant: 'circular' },
        attrs: { 'data-variant': 'custom' },
      });

      expect(wrapper.attributes('data-variant')).toBe('circular');
    });

    it('TC-O131: 보호 속성 data-size 오버라이드 차단', () => {
      const wrapper = mount(Skeleton, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });

      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-O132: 보호 속성 data-animation 오버라이드 차단', () => {
      const wrapper = mount(Skeleton, {
        props: { animation: 'wave' },
        attrs: { 'data-animation': 'custom' },
      });

      expect(wrapper.attributes('data-animation')).toBe('wave');
    });

    it('TC-O133: 보호 속성 aria-busy 오버라이드 차단', () => {
      const wrapper = mount(Skeleton, {
        attrs: { 'aria-busy': 'false' },
      });

      expect(wrapper.attributes('aria-busy')).toBe('true');
    });

    it('TC-O134: 보호 속성 aria-live 오버라이드 차단', () => {
      const wrapper = mount(Skeleton, {
        attrs: { 'aria-live': 'assertive' },
      });

      expect(wrapper.attributes('aria-live')).toBe('polite');
    });
  });
});
