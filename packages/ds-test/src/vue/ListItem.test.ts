import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { ListItem } from '@woosgem/ds-vue';
import { ListItem as ListItemDef } from '@woosgem/ds-core';

describe('ListItem', () => {
  describe('core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({});

      render(ListItem, { slots: { default: 'Item' } });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ variant: 'interactive' });

      render(ListItem, {
        props: { variant: 'interactive' },
        slots: { default: 'Interactive' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveAttribute('data-variant', 'interactive');
    });

    it('TC-V102: selected prop이 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true });

      render(ListItem, {
        props: { selected: true },
        slots: { default: 'Selected' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-V103: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ disabled: true });

      render(ListItem, {
        props: { disabled: true },
        slots: { default: 'Disabled' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'disabled');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('TC-V104: divider prop이 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ divider: true });

      render(ListItem, {
        props: { divider: true },
        slots: { default: 'Divider' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-divider', String(coreAttrs['data-divider']));
    });

    it('TC-V105: selected + disabled 동시 true 시 selected 우선', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(ListItem, {
        props: { selected: true, disabled: true },
        slots: { default: 'Both' },
      });
      const item = screen.getByRole('listitem');

      expect(coreAttrs['data-state']).toBe('selected');
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('TC-V106: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'interactive' as const,
        selected: true,
        divider: true,
      };
      const coreAttrs = ListItemDef.mapPropsToAttrs(props);

      render(ListItem, {
        props,
        slots: { default: 'Complex' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-divider', 'true');
    });

    it('TC-V107: variant: default가 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ variant: 'default' });

      render(ListItem, {
        props: { variant: 'default' },
        slots: { default: 'Default' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V108: divider: false일 때 data-divider가 없다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ divider: false });

      render(ListItem, {
        props: { divider: false },
        slots: { default: 'No divider' },
      });
      const item = screen.getByRole('listitem');

      expect(coreAttrs['data-divider']).toBeUndefined();
      expect(item).not.toHaveAttribute('data-divider');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-V200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(ListItem, {
        props: { onClick: handleClick },
        slots: { default: 'Click me' },
      });
      const item = screen.getByRole('listitem');

      await user.click(item);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-V201: disabled 상태에서도 onClick이 호출된다 (li는 disabled 미지원)', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(ListItem, {
        props: { onClick: handleClick, disabled: true },
        slots: { default: 'Disabled' },
      });
      const item = screen.getByRole('listitem');

      await user.click(item);

      // li 요소는 네이티브 disabled를 지원하지 않으므로 클릭 이벤트가 발생함
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(ListItem, { slots: { default: 'Hello World' } });
      expect(screen.getByRole('listitem')).toHaveTextContent('Hello World');
    });

    it('TC-V301: class가 병합된다', () => {
      render(ListItem, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('custom-class');
    });

    // Note: role은 PROTECTED_ATTRS에 포함되어 있어 필터링됨
    // ListItem은 기본적으로 li 요소이므로 listitem role을 가짐
    it('TC-V302: listitem role이 기본 적용된다', () => {
      render(ListItem, {
        slots: { default: 'Option' },
      });
      expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

    it('TC-V303: aria-label이 적용된다', () => {
      render(ListItem, {
        attrs: { 'aria-label': 'Menu item' },
        slots: { default: 'Item' },
      });
      expect(screen.getByLabelText('Menu item')).toBeInTheDocument();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(ListItem, {
        attrs: { class: 'custom' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 허용', () => {
      render(ListItem, {
        attrs: { 'data-testid': 'list-item-1' },
        slots: { default: 'Item' },
      });
      expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 data-variant 오버라이드 차단', () => {
      render(ListItem, {
        props: { variant: 'interactive' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-variant', 'interactive');
    });

    it('TC-O201: 보호 속성 data-state 오버라이드 차단', () => {
      render(ListItem, {
        props: { selected: true },
        attrs: { 'data-state': 'custom' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O202: 보호 속성 data-divider 오버라이드 차단', () => {
      render(ListItem, {
        props: { divider: true },
        attrs: { 'data-divider': 'false' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('data-divider', 'true');
    });

    it('TC-O203: 보호 속성 aria-selected 오버라이드 차단', () => {
      render(ListItem, {
        props: { selected: true },
        attrs: { 'aria-selected': 'false' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-O204: 보호 속성 aria-disabled 오버라이드 차단', () => {
      render(ListItem, {
        props: { disabled: true },
        attrs: { 'aria-disabled': 'false' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('TC-O180: style 속성 전달 허용', () => {
      render(ListItem, {
        attrs: { style: 'margin-top: 8px;' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('listitem');

      expect(item).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id 속성 전달 허용', () => {
      render(ListItem, {
        attrs: { id: 'my-item' },
        slots: { default: 'Item' },
      });
      expect(screen.getByRole('listitem')).toHaveAttribute('id', 'my-item');
    });
  });
});
