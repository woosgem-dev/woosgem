/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { Popover, PopoverArrow } from '@woosgem-dev/lit';
import {
  Popover as PopoverDef,
  PopoverArrow as PopoverArrowDef,
} from '@woosgem-dev/core';

describe('Popover (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover>Content</wg-popover>
      `);

      expect(el.getAttribute('data-position')).toBe(coreAttrs['data-position']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.classList.contains('wg-popover')).toBe(true);
    });

    it('TC-L101: position prop이 core 결과와 일치한다', async () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ position: 'top' });

      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover position="top">Top</wg-popover>
      `);

      expect(el.getAttribute('data-position')).toBe(coreAttrs['data-position']);
      expect(el.getAttribute('data-position')).toBe('top');
    });

    it('TC-L102: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover size="lg">Large</wg-popover>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L103: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ variant: 'tooltip' });

      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover variant="tooltip">Tooltip</wg-popover>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('tooltip');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover>Popover Content</wg-popover>
      `);

      expect(el.textContent?.trim()).toContain('Popover Content');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover position="bottom">Content</wg-popover>
      `);

      expect(el.getAttribute('data-position')).toBe('bottom');

      el.position = 'top';
      await el.updateComplete;

      expect(el.getAttribute('data-position')).toBe('top');
    });

    it('TC-L302: size 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover size="sm">Content</wg-popover>
      `);

      expect(el.getAttribute('data-size')).toBe('sm');

      el.size = 'lg';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L303: variant 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover variant="default">Content</wg-popover>
      `);

      expect(el.getAttribute('data-variant')).toBe('default');

      el.variant = 'tooltip';
      await el.updateComplete;

      expect(el.getAttribute('data-variant')).toBe('tooltip');
    });

    it('TC-L304: role="dialog"가 적용된다', async () => {
      const el = await fixture<InstanceType<typeof Popover>>(html`
        <wg-popover>Content</wg-popover>
      `);

      expect(el.getAttribute('role')).toBe('dialog');
    });
  });
});

describe('PopoverArrow (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L400: class가 core 결과와 일치한다', async () => {
      const coreAttrs = PopoverArrowDef.mapPropsToAttrs();

      const el = await fixture<InstanceType<typeof PopoverArrow>>(html`
        <wg-popover-arrow></wg-popover-arrow>
      `);

      expect(el.classList.contains(coreAttrs.class)).toBe(true);
    });
  });

  it('TC-L401: popover-arrow 클래스가 적용된다', async () => {
    const el = await fixture<InstanceType<typeof PopoverArrow>>(html`
      <wg-popover-arrow></wg-popover-arrow>
    `);

    expect(el.classList.contains('wg-popover__arrow')).toBe(true);
  });
});
