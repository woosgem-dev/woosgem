/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest';
import { html, fixture } from './setup';
import { ListItem } from '@woosgem/ds-lit';
import { ListItem as ListItemDef } from '@woosgem/ds-core';

describe('ListItem (Lit)', () => {
  describe('core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof ListItem>>(html`
        <wg-list-item></wg-list-item>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.classList.contains('list-item')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ variant: 'interactive' });

      const el = await fixture<InstanceType<typeof ListItem>>(html`
        <wg-list-item variant="interactive"></wg-list-item>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('interactive');
    });

    it('TC-L102: selected prop이 core 결과와 일치한다', async () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true });

      const el = await fixture<InstanceType<typeof ListItem>>(html`
        <wg-list-item selected></wg-list-item>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('selected');
    });

    it('TC-L103: disabled prop이 core 결과와 일치한다', async () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ disabled: true });

      const el = await fixture<InstanceType<typeof ListItem>>(html`
        <wg-list-item disabled></wg-list-item>
      `);

      expect(el.getAttribute('data-state')).toBe(coreAttrs['data-state']);
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.hasAttribute('disabled')).toBe(true);
    });

    it('TC-L104: divider prop이 core 결과와 일치한다', async () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ divider: true });

      const el = await fixture<InstanceType<typeof ListItem>>(html`
        <wg-list-item divider></wg-list-item>
      `);

      expect(el.hasAttribute('data-divider')).toBe(true);
      expect(coreAttrs['data-divider']).toBe(true);
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-L200: click 이벤트가 발생한다', async () => {
      const handleClick = vi.fn();

      const el = await fixture<InstanceType<typeof ListItem>>(html`
        <wg-list-item variant="interactive">Item</wg-list-item>
      `);

      el.addEventListener('click', handleClick);
      el.click();

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof ListItem>>(html`
        <wg-list-item>List Item Content</wg-list-item>
      `);

      expect(el.textContent?.trim()).toBe('List Item Content');
    });
  });
});
