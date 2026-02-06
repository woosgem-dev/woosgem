import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Tooltip } from '@woosgem/ds-react';

describe('Tooltip (React)', () => {
  describe('기본 렌더링', () => {
    it('TC-R100: children이 렌더링된다', () => {
      render(
        <Tooltip content="Hello">
          <button>Hover me</button>
        </Tooltip>
      );
      expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('TC-R101: tooltip 래퍼가 렌더링된다', () => {
      render(
        <Tooltip content="Tooltip text">
          <button>Trigger</button>
        </Tooltip>
      );
      const wrapper = screen.getByText('Trigger').closest('.tooltip-wrapper');
      expect(wrapper).toBeInTheDocument();
    });

    it('TC-R102: tooltip 내용이 숨겨진 상태로 렌더링된다', () => {
      render(
        <Tooltip content="Hidden text">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Position 변형', () => {
    it('TC-C110: position: top이 적용된다', () => {
      render(
        <Tooltip content="Text" position="top">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('data-position', 'top');
    });

    it('TC-C111: position: bottom이 적용된다', () => {
      render(
        <Tooltip content="Text" position="bottom">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('data-position', 'bottom');
    });

    it('TC-C112: position: left가 적용된다', () => {
      render(
        <Tooltip content="Text" position="left">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('data-position', 'left');
    });

    it('TC-C113: position: right가 적용된다', () => {
      render(
        <Tooltip content="Text" position="right">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('data-position', 'right');
    });
  });

  describe('Trigger 동작', () => {
    it('TC-T100: hover 시 tooltip이 보인다', () => {
      render(
        <Tooltip content="Hover tooltip" trigger="hover">
          <button>Hover me</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Hover me').closest('.tooltip-wrapper')!;

      act(() => {
        fireEvent.mouseEnter(wrapper);
      });

      const tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('data-visible', 'true');
    });

    it('TC-T101: hover 해제 시 tooltip이 숨겨진다', () => {
      render(
        <Tooltip content="Hover tooltip" trigger="hover">
          <button>Hover me</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Hover me').closest('.tooltip-wrapper')!;

      act(() => {
        fireEvent.mouseEnter(wrapper);
      });

      act(() => {
        fireEvent.mouseLeave(wrapper);
      });

      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });

    it('TC-T110: click 시 tooltip이 토글된다', () => {
      render(
        <Tooltip content="Click tooltip" trigger="click">
          <button>Click me</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Click me').closest('.tooltip-wrapper')!;

      act(() => {
        fireEvent.click(wrapper);
      });

      const tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('data-visible', 'true');

      act(() => {
        fireEvent.click(wrapper);
      });

      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });

    it('TC-T120: focus 시 tooltip이 보인다', () => {
      render(
        <Tooltip content="Focus tooltip" trigger="focus">
          <button>Focus me</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Focus me').closest('.tooltip-wrapper')!;

      act(() => {
        fireEvent.focus(wrapper);
      });

      const tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('data-visible', 'true');
    });
  });

  describe('Disabled 상태', () => {
    it('TC-D100: disabled 시 hover해도 tooltip이 보이지 않는다', () => {
      render(
        <Tooltip content="Disabled tooltip" disabled>
          <button>Hover me</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Hover me').closest('.tooltip-wrapper')!;

      act(() => {
        fireEvent.mouseEnter(wrapper);
      });

      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Arrow', () => {
    it('TC-A100: arrow=true일 때 arrow 요소가 렌더링된다', () => {
      render(
        <Tooltip content="Arrow tooltip" arrow>
          <button>Trigger</button>
        </Tooltip>
      );

      const tooltip = screen.getByRole('tooltip', { hidden: true });
      const arrow = tooltip.querySelector('.tooltip-arrow');
      expect(arrow).toBeInTheDocument();
    });

    it('TC-A101: arrow=false일 때 arrow 요소가 렌더링되지 않는다', () => {
      render(
        <Tooltip content="No arrow" arrow={false}>
          <button>Trigger</button>
        </Tooltip>
      );

      const tooltip = screen.getByRole('tooltip', { hidden: true });
      const arrow = tooltip.querySelector('.tooltip-arrow');
      expect(arrow).not.toBeInTheDocument();
    });
  });

  describe('접근성', () => {
    it('TC-A200: role="tooltip"가 항상 적용된다', () => {
      render(
        <Tooltip content="Accessible tooltip">
          <button>Trigger</button>
        </Tooltip>
      );
      expect(screen.getByRole('tooltip', { hidden: true })).toBeInTheDocument();
    });

    it('TC-A201: visible 시 aria-describedby가 설정된다', () => {
      render(
        <Tooltip content="Desc tooltip" trigger="hover">
          <button>Trigger</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Trigger').closest('.tooltip-wrapper')!;

      act(() => {
        fireEvent.mouseEnter(wrapper);
      });

      const trigger = wrapper.querySelector('.tooltip-trigger');
      expect(trigger).toHaveAttribute('aria-describedby');
    });
  });

  describe('기본값', () => {
    it('TC-C010: position 기본값은 top이다', () => {
      render(
        <Tooltip content="Default">
          <button>Trigger</button>
        </Tooltip>
      );
      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute('data-position', 'top');
    });

    it('TC-C011: trigger 기본값은 hover이다', () => {
      render(
        <Tooltip content="Default">
          <button>Trigger</button>
        </Tooltip>
      );
      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute('data-trigger', 'hover');
    });
  });

  describe('Delay', () => {
    it('TC-DL100: delay가 0이면 즉시 보인다', () => {
      render(
        <Tooltip content="Immediate" delay={0}>
          <button>Trigger</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Trigger').closest('.tooltip-wrapper')!;

      act(() => {
        fireEvent.mouseEnter(wrapper);
      });

      expect(screen.getByRole('tooltip')).toHaveAttribute('data-visible', 'true');
    });

    it('TC-DL101: delay가 설정되면 타이머 후 보인다', () => {
      vi.useFakeTimers();

      render(
        <Tooltip content="Delayed" delay={500}>
          <button>Trigger</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Trigger').closest('.tooltip-wrapper')!;

      act(() => {
        fireEvent.mouseEnter(wrapper);
      });

      // Not visible yet
      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute('aria-hidden', 'true');

      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(screen.getByRole('tooltip')).toHaveAttribute('data-visible', 'true');

      vi.useRealTimers();
    });
  });

  describe('커스터마이즈', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      render(
        <Tooltip content="Custom" className="custom-tooltip">
          <button>Trigger</button>
        </Tooltip>
      );

      const wrapper = screen.getByText('Trigger').closest('.tooltip-wrapper')!;
      expect(wrapper).toHaveClass('tooltip-wrapper');
      expect(wrapper).toHaveClass('custom-tooltip');
    });
  });
});
