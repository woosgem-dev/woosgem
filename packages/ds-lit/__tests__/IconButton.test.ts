/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest';
import { html, fixture } from './setup';
import { IconButton } from '@woosgem-dev/lit';
import { IconButton as IconButtonDef } from '@woosgem-dev/core';

describe('IconButton (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button></wg-icon-button>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('icon-btn')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ variant: 'filled' });

      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button variant="filled"></wg-icon-button>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('filled');
    });

    it('TC-L102: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button disabled></wg-icon-button>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-L200: click 이벤트가 발생한다', async () => {
      const handleClick = vi.fn();

      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button></wg-icon-button>
      `);

      el.addEventListener('click', handleClick);
      el.click();

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof IconButton>>(html`
        <wg-icon-button>X</wg-icon-button>
      `);

      expect(el.textContent?.trim()).toBe('X');
    });
  });
});
