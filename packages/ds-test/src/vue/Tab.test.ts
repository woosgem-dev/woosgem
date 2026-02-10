import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { Tab } from '@woosgem-dev/vue';
import { Tab as TabDef } from '@woosgem-dev/core';

describe('Tab', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({});

      render(Tab, { slots: { default: 'Home' } });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('role', coreAttrs.role);
      expect(tab).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ variant: 'filled' });

      render(Tab, {
        props: { variant: 'filled' },
        slots: { default: 'Filled' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-V102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ size: 'lg' });

      render(Tab, {
        props: { size: 'lg' },
        slots: { default: 'Large' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V103: selected prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true });

      render(Tab, {
        props: { selected: true },
        slots: { default: 'Selected' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-V104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ disabled: true });

      render(Tab, {
        props: { disabled: true },
        slots: { default: 'Disabled' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(tab).toHaveAttribute('data-state', 'disabled');
      expect(tab).toBeDisabled();
    });

    it('TC-V105: fullWidth prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ fullWidth: true });

      render(Tab, {
        props: { fullWidth: true },
        slots: { default: 'Full Width' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-V106: role?  tab다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({});

      render(Tab, { slots: { default: 'Tab' } });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('role', coreAttrs.role);
      expect(tab).toHaveAttribute('role', 'tab');
    });

    it('TC-V107: selected + disabled 시 true selected 선', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(Tab, {
        props: { selected: true, disabled: true },
        slots: { default: 'Both' },
      });
      const tab = screen.getByRole('tab');

      expect(coreAttrs['data-state']).toBe('selected');
      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-V108: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'filled' as const,
        size: 'sm' as const,
        selected: true,
      };
      const coreAttrs = TabDef.mapPropsToAttrs(props);

      render(Tab, {
        props,
        slots: { default: 'Complex' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-V200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Tab, {
        props: { onClick: handleClick },
        slots: { default: 'Click me' },
      });
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-V201: disabled 상태에서 onClick이 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Tab, {
        props: { onClick: handleClick, disabled: true },
        slots: { default: 'Disabled' },
      });
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-V202: selected 태서 onClick출다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Tab, {
        props: { onClick: handleClick, selected: true },
        slots: { default: 'Selected' },
      });
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(Tab, { slots: { default: 'Home' } });
      expect(screen.getByRole('tab')).toHaveTextContent('Home');
    });

    it('TC-V301: class가 병합된다', () => {
      render(Tab, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('custom-class');
    });

    it('TC-V302: type prop이 적용된다', () => {
      render(Tab, {
        attrs: { type: 'submit' },
        slots: { default: 'Submit' },
      });
      expect(screen.getByRole('tab')).toHaveAttribute('type', 'submit');
    });

    it('TC-V303: aria-label이 적용된다', () => {
      render(Tab, {
        attrs: { 'aria-label': 'Close tab' },
        slots: { default: 'X' },
      });
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Close tab');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(Tab, {
        attrs: { class: 'custom' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(Tab, {
        attrs: { 'data-testid': 'home-tab' },
        slots: { default: 'Home' },
      });
      expect(screen.getByTestId('home-tab')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      render(Tab, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      render(Tab, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      render(Tab, {
        props: { selected: true },
        attrs: { 'data-state': 'custom' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O203: 보호 성 role 버이차단', () => {
      render(Tab, {
        attrs: { role: 'button' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('role', 'tab');
    });

    it('TC-O204: 보호 속성 $1 오버라이드 차단', () => {
      render(Tab, {
        props: { selected: true },
        attrs: { 'aria-selected': 'false' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-O180: style 속성 전달 적용', () => {
      render(Tab, {
        attrs: { style: 'margin-top: 8px;' },
        slots: { default: 'Tab' },
      });
      const tab = screen.getByRole('tab');

      expect(tab).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(Tab, {
        attrs: { id: 'my-tab' },
        slots: { default: 'Tab' },
      });
      expect(screen.getByRole('tab')).toHaveAttribute('id', 'my-tab');
    });

    it('TC-O140: aria-controls 성 달 용', () => {
      render(Tab, {
        attrs: { 'aria-controls': 'panel-1' },
        slots: { default: 'Tab' },
      });
      expect(screen.getByRole('tab')).toHaveAttribute('aria-controls', 'panel-1');
    });
  });
});
