/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { AvatarGroup } from '@woosgem-dev/lit';
import { AvatarGroup as AvatarGroupDef } from '@woosgem-dev/core';

describe('AvatarGroup (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = AvatarGroupDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof AvatarGroup>>(html`
        <wg-avatar-group></wg-avatar-group>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-spacing')).toBe(coreAttrs['data-spacing']);
      expect(el.classList.contains('wg-avatar-group')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AvatarGroupDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof AvatarGroup>>(html`
        <wg-avatar-group size="lg"></wg-avatar-group>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: spacing prop이 core 결과와 일치한다', async () => {
      const coreAttrs = AvatarGroupDef.mapPropsToAttrs({ spacing: 'normal' });

      const el = await fixture<InstanceType<typeof AvatarGroup>>(html`
        <wg-avatar-group spacing="normal"></wg-avatar-group>
      `);

      expect(el.getAttribute('data-spacing')).toBe(coreAttrs['data-spacing']);
      expect(el.getAttribute('data-spacing')).toBe('normal');
    });

    it('TC-L103: loose spacing이 core 결과와 일치한다', async () => {
      const coreAttrs = AvatarGroupDef.mapPropsToAttrs({ spacing: 'loose' });

      const el = await fixture<InstanceType<typeof AvatarGroup>>(html`
        <wg-avatar-group spacing="loose"></wg-avatar-group>
      `);

      expect(el.getAttribute('data-spacing')).toBe(coreAttrs['data-spacing']);
      expect(el.getAttribute('data-spacing')).toBe('loose');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof AvatarGroup>>(html`
        <wg-avatar-group><span>child</span></wg-avatar-group>
      `);

      expect(el.textContent?.trim()).toContain('child');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof AvatarGroup>>(html`
        <wg-avatar-group size="sm"></wg-avatar-group>
      `);

      expect(el.getAttribute('data-size')).toBe('sm');

      el.size = 'md';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('md');
    });
  });
});
