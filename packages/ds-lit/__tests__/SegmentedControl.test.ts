/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import { SegmentedControl } from '@woosgem-dev/lit';
import { SegmentedControl as SegmentedControlDef } from '@woosgem-dev/core';

describe('SegmentedControl (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control></wg-segmented-control>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('segmented-control')).toBe(true);
    });

    it('TC-L101: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control size="lg"></wg-segmented-control>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });

    it('TC-L102: fullWidth prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ fullWidth: true });

      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control full-width></wg-segmented-control>
      `);

      // Boolean attribute는 문자열로 설정됨
      expect(el.hasAttribute('data-full-width')).toBe(true);
      expect(coreAttrs['data-full-width']).toBe(true);
    });

    it('TC-L103: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control disabled></wg-segmented-control>
      `);

      // Boolean attribute는 문자열로 설정됨
      expect(el.hasAttribute('data-disabled')).toBe(true);
      expect(el.hasAttribute('disabled')).toBe(true);
      expect(coreAttrs['data-disabled']).toBe(true);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot이 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control>
          <button>Option 1</button>
          <button>Option 2</button>
        </wg-segmented-control>
      `);

      const buttons = el.querySelectorAll('button');
      expect(buttons.length).toBe(2);
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof SegmentedControl>>(html`
        <wg-segmented-control size="md"></wg-segmented-control>
      `);

      expect(el.getAttribute('data-size')).toBe('md');

      el.size = 'lg';
      await el.updateComplete;

      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });
});
