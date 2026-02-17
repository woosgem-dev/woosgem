/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Avatar } from '@woosgem-dev/lit';
import { Avatar as AvatarDef } from '@woosgem-dev/core';

describe('Avatar (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar></wg-avatar>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('wg-avatar')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar size="lg"></wg-avatar>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: shape prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ shape: 'square' });

      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar shape="square"></wg-avatar>
      `);

      expect(el.getAttribute('data-shape')).toBe(coreAttrs['data-shape']);
      expect(el.getAttribute('data-shape')).toBe('square');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar>JD</wg-avatar>
      `);

      expect(el.textContent?.trim()).toBe('JD');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Avatar>>(html`
        <wg-avatar size="md"></wg-avatar>
      `);

      expect(el.getAttribute('data-size')).toBe('md');

      el.size = 'xl';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('xl');
    });
  });
});
