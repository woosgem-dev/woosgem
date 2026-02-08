import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Tooltip } from '@woosgem/ds-react';

describe('Tooltip (React)', () => {
  describe('ê¸°ë³¸ ?Œë”ë§?, () => {
    it('TC-R100: children???Œë”ë§ëœ??, () => {
      render(
        <Tooltip content="Hello">
          <button>Hover me</button>
        </Tooltip>
      );
      expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('TC-R101: tooltip ?˜í¼ê°€ ?Œë”ë§ëœ??, () => {
      render(
        <Tooltip content="Tooltip text">
          <button>Trigger</button>
        </Tooltip>
      );
      const wrapper = screen.getByText('Trigger').closest('.tooltip-wrapper');
      expect(wrapper).toBeInTheDocument();
    });

    it('TC-R102: tooltip ?´ìš©???¨ê²¨ì§??íƒœë¡??Œë”ë§ëœ??, () => {
      render(
        <Tooltip content="Hidden text">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Position ë³€??, () => {
    it('TC-C110: position: top???ìš©?œë‹¤', () => {
      render(
        <Tooltip content="Text" position="top">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('data-position', 'top');
    });

    it('TC-C111: position: bottom???ìš©?œë‹¤', () => {
      render(
        <Tooltip content="Text" position="bottom">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('data-position', 'bottom');
    });

    it('TC-C112: position: leftê°€ ?ìš©?œë‹¤', () => {
      render(
        <Tooltip content="Text" position="left">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('data-position', 'left');
    });

    it('TC-C113: position: rightê°€ ?ìš©?œë‹¤', () => {
      render(
        <Tooltip content="Text" position="right">
          <button>Trigger</button>
        </Tooltip>
      );
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveAttribute('data-position', 'right');
    });
  });

  describe('Trigger ?™ìž‘', () => {
    it('TC-T100: hover ??tooltip??ë³´ì¸??, () => {
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

    it('TC-T101: hover ?´ì œ ??tooltip???¨ê²¨ì§„ë‹¤', () => {
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

    it('TC-T110: click ??tooltip??? ê??œë‹¤', () => {
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

    it('TC-T120: focus ??tooltip??ë³´ì¸??, () => {
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

  describe('Disabled ?íƒœ', () => {
    it('TC-D100: disabled ??hover?´ë„ tooltip??ë³´ì´ì§€ ?ŠëŠ”??, () => {
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
    it('TC-A100: arrow=true????arrow ?”ì†Œê°€ ?Œë”ë§ëœ??, () => {
      render(
        <Tooltip content="Arrow tooltip" arrow>
          <button>Trigger</button>
        </Tooltip>
      );

      const tooltip = screen.getByRole('tooltip', { hidden: true });
      const arrow = tooltip.querySelector('.tooltip-arrow');
      expect(arrow).toBeInTheDocument();
    });

    it('TC-A101: arrow=false????arrow ?”ì†Œê°€ ?Œë”ë§ë˜ì§€ ?ŠëŠ”??, () => {
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

  describe('?‘ê·¼??, () => {
    it('TC-A200: role="tooltip"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      render(
        <Tooltip content="Accessible tooltip">
          <button>Trigger</button>
        </Tooltip>
      );
      expect(screen.getByRole('tooltip', { hidden: true })).toBeInTheDocument();
    });

    it('TC-A201: visible ??aria-describedbyê°€ ?¤ì •?œë‹¤', () => {
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

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: position ê¸°ë³¸ê°’ì? top?´ë‹¤', () => {
      render(
        <Tooltip content="Default">
          <button>Trigger</button>
        </Tooltip>
      );
      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute('data-position', 'top');
    });

    it('TC-C011: trigger ê¸°ë³¸ê°’ì? hover?´ë‹¤', () => {
      render(
        <Tooltip content="Default">
          <button>Trigger</button>
        </Tooltip>
      );
      expect(screen.getByRole('tooltip', { hidden: true })).toHaveAttribute('data-trigger', 'hover');
    });
  });

  describe('Delay', () => {
    it('TC-DL100: delayê°€ 0?´ë©´ ì¦‰ì‹œ ë³´ì¸??, () => {
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

    it('TC-DL101: delayê°€ ?¤ì •?˜ë©´ ?€?´ë¨¸ ??ë³´ì¸??, () => {
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

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ', () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
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
