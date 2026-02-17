/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Textarea } from '@woosgem-dev/lit';
import { Textarea as TextareaDef } from '@woosgem-dev/core';

describe('Textarea (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea></wg-textarea>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('textarea')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea variant="filled"></wg-textarea>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L102: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea size="lg"></wg-textarea>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: error prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ error: true });

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea error></wg-textarea>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('error');
    });

    it('TC-L104: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea disabled></wg-textarea>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Textarea>>(html`
        <wg-textarea variant="outline"></wg-textarea>
      `);

      expect(el.getAttribute('data-variant')).toBe('outline');

      el.variant = 'filled';
      await el.updateComplete;

      expect(el.getAttribute('data-variant')).toBe('filled');
    });
  });
});
