/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Icon } from '@woosgem-dev/lit';
import { Icon as IconDef } from '@woosgem-dev/core';

describe('Icon (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = IconDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Icon>>(html`
        <wg-icon></wg-icon>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('wg-icon')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = IconDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Icon>>(html`
        <wg-icon size="lg"></wg-icon>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Icon>>(html`
        <wg-icon>
          <svg width="16" height="16"><path d="M0 0h16v16H0z"/></svg>
        </wg-icon>
      `);

      const svg = el.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Icon>>(html`
        <wg-icon size="md"></wg-icon>
      `);

      expect(el.getAttribute('data-size')).toBe('md');

      el.size = 'xl';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('xl');
    });
  });
});
