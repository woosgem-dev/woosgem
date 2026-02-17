/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Tag } from '@woosgem-dev/lit';
import { Tag as TagDef } from '@woosgem-dev/core';

describe('Tag (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = TagDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag>Label</wg-tag>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('wg-tag')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TagDef.mapPropsToAttrs({ variant: 'solid' });

      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag variant="solid">Solid</wg-tag>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('solid');
    });

    it('TC-L102: color prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TagDef.mapPropsToAttrs({ color: 'danger' });

      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag color="danger">Danger</wg-tag>
      `);

      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-color')).toBe('danger');
    });

    it('TC-L103: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TagDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag size="lg">Large</wg-tag>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L104: outline variant가 core 결과와 일치한다', async () => {
      const coreAttrs = TagDef.mapPropsToAttrs({ variant: 'outline' });

      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag variant="outline">Outline</wg-tag>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('outline');
    });

    it('TC-L105: closable prop이 core 결과와 일치한다', async () => {
      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag closable>Closable</wg-tag>
      `);

      expect(el.hasAttribute('data-closable')).toBe(true);
    });

    it('TC-L106: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TagDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag disabled>Disabled</wg-tag>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag>Tag Content</wg-tag>
      `);

      expect(el.textContent?.trim()).toContain('Tag Content');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag size="sm">Tag</wg-tag>
      `);

      expect(el.getAttribute('data-size')).toBe('sm');

      el.size = 'md';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('md');
    });

    it('TC-L302: variant 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Tag>>(html`
        <wg-tag variant="subtle">Tag</wg-tag>
      `);

      expect(el.getAttribute('data-variant')).toBe('subtle');

      el.variant = 'solid';
      await el.updateComplete;

      expect(el.getAttribute('data-variant')).toBe('solid');
    });
  });
});
