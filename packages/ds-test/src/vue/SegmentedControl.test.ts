import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { SegmentedControl, SegmentedControlItem } from '@woosgem/ds-vue';
import {
  SegmentedControl as SegmentedControlDef,
  SegmentedControlItem as SegmentedControlItemDef,
} from '@woosgem/ds-core';

describe('SegmentedControl', () => {
  describe('core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({});

      render(SegmentedControl, {
        attrs: { 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(group).toHaveAttribute('role', coreAttrs.role);
      expect(group).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ size: 'lg' });

      render(SegmentedControl, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(group).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V102: fullWidth prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ fullWidth: true });

      render(SegmentedControl, {
        props: { fullWidth: true },
        attrs: { 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-V103: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ disabled: true });

      render(SegmentedControl, {
        props: { disabled: true },
        attrs: { 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('data-disabled', String(coreAttrs['data-disabled']));
    });

    it('TC-V104: role은 항상 group이다', () => {
      render(SegmentedControl, {
        attrs: { 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('role', 'group');
    });

    it('TC-V105: size: sm이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ size: 'sm' });

      render(SegmentedControl, {
        props: { size: 'sm' },
        attrs: { 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V106: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        size: 'lg' as const,
        fullWidth: true,
        disabled: true,
      };
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs(props);

      render(SegmentedControl, {
        props,
        attrs: { 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(group).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
      expect(group).toHaveAttribute('data-disabled', String(coreAttrs['data-disabled']));
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(SegmentedControl, {
        attrs: { 'aria-label': 'View options' },
        slots: { default: 'Slot Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveTextContent('Slot Content');
    });

    it('TC-V301: class가 병합된다', () => {
      render(SegmentedControl, {
        attrs: { class: 'custom-class', 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveClass('segmented-control');
      expect(group).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label이 적용된다', () => {
      render(SegmentedControl, {
        attrs: { 'aria-label': 'Period selection' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('aria-label', 'Period selection');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(SegmentedControl, {
        attrs: { class: 'custom', 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveClass('segmented-control');
      expect(group).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 허용', () => {
      render(SegmentedControl, {
        attrs: { 'data-testid': 'segmented-control', 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      expect(screen.getByTestId('segmented-control')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 data-size 오버라이드 차단', () => {
      render(SegmentedControl, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O201: 보호 속성 role 오버라이드 차단', () => {
      render(SegmentedControl, {
        attrs: { role: 'tablist', 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      // group role이 유지됨
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('TC-O180: style 속성 전달 허용', () => {
      render(SegmentedControl, {
        attrs: { style: 'margin-top: 8px;', 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      const group = screen.getByRole('group');

      expect(group).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id 속성 전달 허용', () => {
      render(SegmentedControl, {
        attrs: { id: 'view-options', 'aria-label': 'View options' },
        slots: { default: 'Content' },
      });
      expect(screen.getByRole('group')).toHaveAttribute('id', 'view-options');
    });
  });
});

describe('SegmentedControlItem', () => {
  describe('core 일치 검증', () => {
    it('TC-I100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({});

      render(SegmentedControlItem, { slots: { default: 'Day' } });
      const item = screen.getByRole('button');

      expect(item).toHaveClass(coreAttrs.class);
    });

    it('TC-I101: selected prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ selected: true });

      render(SegmentedControlItem, {
        props: { selected: true },
        slots: { default: 'Selected' },
      });
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-I102: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ disabled: true });

      render(SegmentedControlItem, {
        props: { disabled: true },
        slots: { default: 'Disabled' },
      });
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'disabled');
      expect(item).toBeDisabled();
    });

    it('TC-I103: selected + disabled 동시 true 시 selected 우선', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(SegmentedControlItem, {
        props: { selected: true, disabled: true },
        slots: { default: 'Both' },
      });
      const item = screen.getByRole('button');

      expect(coreAttrs['data-state']).toBe('selected');
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-I200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(SegmentedControlItem, {
        props: { onClick: handleClick },
        slots: { default: 'Click me' },
      });
      const item = screen.getByRole('button');

      await user.click(item);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-I201: disabled 상태에서 onClick이 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(SegmentedControlItem, {
        props: { onClick: handleClick, disabled: true },
        slots: { default: 'Disabled' },
      });
      const item = screen.getByRole('button');

      await user.click(item);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-I300: slot이 렌더링된다', () => {
      render(SegmentedControlItem, { slots: { default: 'Week' } });
      expect(screen.getByRole('button')).toHaveTextContent('Week');
    });

    it('TC-I301: class가 병합된다', () => {
      render(SegmentedControlItem, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('button');

      expect(item).toHaveClass('segmented-control-item');
      expect(item).toHaveClass('custom-class');
    });

    it('TC-I302: type prop이 적용된다', () => {
      render(SegmentedControlItem, {
        attrs: { type: 'submit' },
        slots: { default: 'Submit' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-I303: aria-label이 적용된다', () => {
      render(SegmentedControlItem, {
        attrs: { 'aria-label': 'Select week view' },
        slots: { default: 'Week' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Select week view');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-IO100: class 추가 시 병합된다', () => {
      render(SegmentedControlItem, {
        attrs: { class: 'custom' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('button');

      expect(item).toHaveClass('segmented-control-item');
      expect(item).toHaveClass('custom');
    });

    it('TC-IO120: data-testid 추가 허용', () => {
      render(SegmentedControlItem, {
        attrs: { 'data-testid': 'day-option' },
        slots: { default: 'Day' },
      });
      expect(screen.getByTestId('day-option')).toBeInTheDocument();
    });

    it('TC-IO200: 보호 속성 data-state 오버라이드 차단', () => {
      render(SegmentedControlItem, {
        props: { selected: true },
        attrs: { 'data-state': 'custom' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', 'selected');
    });

    it('TC-IO201: 보호 속성 aria-selected 오버라이드 차단', () => {
      render(SegmentedControlItem, {
        props: { selected: true },
        attrs: { 'aria-selected': 'false' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-IO180: style 속성 전달 허용', () => {
      render(SegmentedControlItem, {
        attrs: { style: 'margin-left: 4px;' },
        slots: { default: 'Item' },
      });
      const item = screen.getByRole('button');

      expect(item).toHaveStyle({ marginLeft: '4px' });
    });

    it('TC-IO170: id 속성 전달 허용', () => {
      render(SegmentedControlItem, {
        attrs: { id: 'day-btn' },
        slots: { default: 'Day' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('id', 'day-btn');
    });
  });
});
