/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Badge } from '@woosgem/ds-lit';
import { Badge as BadgeDef } from '@woosgem/ds-core';

describe('Badge (Lit)', () => {
  describe('core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge>Badge</wg-badge>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.classList.contains('badge')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ variant: 'outline' });

      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge variant="outline">Badge</wg-badge>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('outline');
    });

    it('TC-L102: color prop이 core 결과와 일치한다', async () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'danger' });

      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge color="danger">Badge</wg-badge>
      `);

      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-color')).toBe('danger');
    });

    it('TC-L103: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge size="lg">Badge</wg-badge>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge>Test Badge</wg-badge>
      `);

      expect(el.textContent?.trim()).toBe('Test Badge');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Badge>>(html`
        <wg-badge color="primary">Badge</wg-badge>
      `);

      expect(el.getAttribute('data-color')).toBe('primary');

      el.color = 'success';
      await el.updateComplete;

      expect(el.getAttribute('data-color')).toBe('success');
    });
  });
});
