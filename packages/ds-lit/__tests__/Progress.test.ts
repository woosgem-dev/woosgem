/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Progress } from '@woosgem-dev/lit';
import { Progress as ProgressDef } from '@woosgem-dev/core';

describe('Progress (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({});

      const el = await fixture<Progress>(html`
        <wg-progress></wg-progress>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('wg-progress')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ variant: 'gradient' });

      const el = await fixture<Progress>(html`
        <wg-progress variant="gradient"></wg-progress>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('gradient');
    });

    it('TC-L102: color prop이 core 결과와 일치한다', async () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ color: 'success' });

      const el = await fixture<Progress>(html`
        <wg-progress color="success"></wg-progress>
      `);

      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-color')).toBe('success');
    });

    it('TC-L103: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<Progress>(html`
        <wg-progress size="lg"></wg-progress>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });

  describe('ARIA 속성', () => {
    it('TC-L200: role="progressbar"이 설정된다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress></wg-progress>
      `);

      expect(el.getAttribute('role')).toBe('progressbar');
    });

    it('TC-L201: aria-valuenow가 value와 일치한다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="75"></wg-progress>
      `);

      expect(el.getAttribute('aria-valuenow')).toBe('75');
    });

    it('TC-L202: aria-valuemin과 aria-valuemax가 설정된다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="50" max="200"></wg-progress>
      `);

      expect(el.getAttribute('aria-valuemin')).toBe('0');
      expect(el.getAttribute('aria-valuemax')).toBe('200');
    });

    it('TC-L203: value가 max를 초과하면 clamping된다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="150" max="100"></wg-progress>
      `);

      expect(el.getAttribute('aria-valuenow')).toBe('100');
    });
  });

  describe('내부 렌더링', () => {
    it('TC-L250: progress-track과 progress-fill이 렌더링된다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="50"></wg-progress>
      `);

      const track = el.querySelector('.wg-progress__track');
      const fill = el.querySelector('.wg-progress__fill');
      expect(track).not.toBeNull();
      expect(fill).not.toBeNull();
    });

    it('TC-L251: showLabel이 false면 label이 렌더링되지 않는다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="50"></wg-progress>
      `);

      const label = el.querySelector('.wg-progress__label');
      expect(label).toBeNull();
    });

    it('TC-L252: showLabel이 true면 percentage label이 렌더링된다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="75" show-label></wg-progress>
      `);

      const label = el.querySelector('.wg-progress__label');
      expect(label).not.toBeNull();
      expect(label?.textContent).toContain('75%');
    });

    it('TC-L253: custom max에서 label percentage가 올바르다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="3" max="5" show-label></wg-progress>
      `);

      const label = el.querySelector('.wg-progress__label');
      expect(label?.textContent).toContain('60%');
    });

    it('TC-L254: --progress-value CSS 변수가 설정된다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="50"></wg-progress>
      `);

      const style = el.getAttribute('style');
      expect(style).toContain('--progress-value: 50%');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="25" color="primary"></wg-progress>
      `);

      expect(el.getAttribute('data-color')).toBe('primary');
      expect(el.getAttribute('aria-valuenow')).toBe('25');

      el.color = 'danger';
      el.value = 80;
      await el.updateComplete;

      expect(el.getAttribute('data-color')).toBe('danger');
      expect(el.getAttribute('aria-valuenow')).toBe('80');
    });

    it('TC-L301: showLabel 토글 시 label이 동적으로 렌더링된다', async () => {
      const el = await fixture<Progress>(html`
        <wg-progress value="50"></wg-progress>
      `);

      expect(el.querySelector('.wg-progress__label')).toBeNull();

      el.showLabel = true;
      await el.updateComplete;

      expect(el.querySelector('.wg-progress__label')).not.toBeNull();
      expect(el.querySelector('.wg-progress__label')?.textContent).toContain('50%');
    });
  });
});
