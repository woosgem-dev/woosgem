/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Slider, SliderTrack, SliderFill, SliderThumb } from '@woosgem-dev/lit';
import {
  Slider as SliderDef,
} from '@woosgem-dev/core';

describe('Slider (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Slider>>(html`
        <wg-slider>Content</wg-slider>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(el.classList.contains('wg-slider')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Slider>>(html`
        <wg-slider size="lg">Content</wg-slider>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: color prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ color: 'danger' });

      const el = await fixture<InstanceType<typeof Slider>>(html`
        <wg-slider color="danger">Content</wg-slider>
      `);

      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-color')).toBe('danger');
    });

    it('TC-L103: orientation prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ orientation: 'vertical' });

      const el = await fixture<InstanceType<typeof Slider>>(html`
        <wg-slider orientation="vertical">Content</wg-slider>
      `);

      expect(el.getAttribute('data-orientation')).toBe(coreAttrs['data-orientation']);
      expect(el.getAttribute('data-orientation')).toBe('vertical');
    });

    it('TC-L104: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Slider>>(html`
        <wg-slider disabled>Content</wg-slider>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('aria-disabled')).toBe(coreAttrs['aria-disabled']);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Slider>>(html`
        <wg-slider>Slider content</wg-slider>
      `);

      expect(el.textContent?.trim()).toContain('Slider content');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Slider>>(html`
        <wg-slider size="sm">Content</wg-slider>
      `);

      expect(el.getAttribute('data-size')).toBe('sm');

      el.size = 'lg';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });
});

describe('SliderTrack (Lit)', () => {
  it('TC-L200: slider-track 클래스가 적용된다', async () => {
    const el = await fixture<InstanceType<typeof SliderTrack>>(html`
      <wg-slider-track>Track</wg-slider-track>
    `);

    expect(el.classList.contains('wg-slider__track')).toBe(true);
  });

  it('TC-L201: slot 컨텐츠가 렌더링된다', async () => {
    const el = await fixture<InstanceType<typeof SliderTrack>>(html`
      <wg-slider-track>Track content</wg-slider-track>
    `);

    expect(el.textContent?.trim()).toContain('Track content');
  });
});

describe('SliderFill (Lit)', () => {
  it('TC-L300: slider-fill 클래스가 적용된다', async () => {
    const el = await fixture<InstanceType<typeof SliderFill>>(html`
      <wg-slider-fill></wg-slider-fill>
    `);

    expect(el.classList.contains('wg-slider__fill')).toBe(true);
  });
});

describe('SliderThumb (Lit)', () => {
  it('TC-L400: slider-thumb 클래스가 적용된다', async () => {
    const el = await fixture<InstanceType<typeof SliderThumb>>(html`
      <wg-slider-thumb></wg-slider-thumb>
    `);

    expect(el.classList.contains('wg-slider__thumb')).toBe(true);
  });

  it('TC-L401: role="slider" 속성이 설정된다', async () => {
    const el = await fixture<InstanceType<typeof SliderThumb>>(html`
      <wg-slider-thumb></wg-slider-thumb>
    `);

    expect(el.getAttribute('role')).toBe('slider');
  });

  it('TC-L402: tabindex="0" 속성이 설정된다', async () => {
    const el = await fixture<InstanceType<typeof SliderThumb>>(html`
      <wg-slider-thumb></wg-slider-thumb>
    `);

    expect(el.getAttribute('tabindex')).toBe('0');
  });
});
