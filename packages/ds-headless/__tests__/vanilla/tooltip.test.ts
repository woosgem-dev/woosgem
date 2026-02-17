/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { calculateTooltipPosition, createTooltipHandlers } from '../../src/vanilla/tooltip';

afterEach(() => {
  document.body.innerHTML = '';
});

/**
 * Helper to create an element with a mocked getBoundingClientRect.
 */
function createMockElement(rect: Partial<DOMRect>): HTMLElement {
  const el = document.createElement('div');
  document.body.appendChild(el);
  el.getBoundingClientRect = () => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    toJSON: () => ({}),
    ...rect,
  });
  return el;
}

describe('calculateTooltipPosition', () => {
  it('positions tooltip above the trigger (top)', () => {
    const trigger = createMockElement({
      left: 100,
      top: 200,
      width: 80,
      height: 40,
      bottom: 240,
      right: 180,
    });
    const tooltip = createMockElement({
      width: 60,
      height: 30,
    });

    const coords = calculateTooltipPosition(trigger, tooltip, 'top', 8);

    expect(coords.x).toBe(100 + (80 - 60) / 2);
    expect(coords.y).toBe(200 - 30 - 8);
  });

  it('positions tooltip below the trigger (bottom)', () => {
    const trigger = createMockElement({
      left: 100,
      top: 200,
      width: 80,
      height: 40,
      bottom: 240,
      right: 180,
    });
    const tooltip = createMockElement({
      width: 60,
      height: 30,
    });

    const coords = calculateTooltipPosition(trigger, tooltip, 'bottom', 8);

    expect(coords.x).toBe(100 + (80 - 60) / 2);
    expect(coords.y).toBe(240 + 8);
  });

  it('positions tooltip to the left of the trigger', () => {
    const trigger = createMockElement({
      left: 100,
      top: 200,
      width: 80,
      height: 40,
      bottom: 240,
      right: 180,
    });
    const tooltip = createMockElement({
      width: 60,
      height: 30,
    });

    const coords = calculateTooltipPosition(trigger, tooltip, 'left', 8);

    expect(coords.x).toBe(100 - 60 - 8);
    expect(coords.y).toBe(200 + (40 - 30) / 2);
  });

  it('positions tooltip to the right of the trigger', () => {
    const trigger = createMockElement({
      left: 100,
      top: 200,
      width: 80,
      height: 40,
      bottom: 240,
      right: 180,
    });
    const tooltip = createMockElement({
      width: 60,
      height: 30,
    });

    const coords = calculateTooltipPosition(trigger, tooltip, 'right', 8);

    expect(coords.x).toBe(180 + 8);
    expect(coords.y).toBe(200 + (40 - 30) / 2);
  });

  it('uses default position (top) and offset (8) when omitted', () => {
    const trigger = createMockElement({
      left: 50,
      top: 100,
      width: 100,
      height: 50,
      bottom: 150,
      right: 150,
    });
    const tooltip = createMockElement({
      width: 80,
      height: 20,
    });

    const coords = calculateTooltipPosition(trigger, tooltip);

    expect(coords.x).toBe(50 + (100 - 80) / 2);
    expect(coords.y).toBe(100 - 20 - 8);
  });

  it('respects a custom offset', () => {
    const trigger = createMockElement({
      left: 0,
      top: 100,
      width: 100,
      height: 50,
      bottom: 150,
      right: 100,
    });
    const tooltip = createMockElement({
      width: 100,
      height: 20,
    });

    const coords = calculateTooltipPosition(trigger, tooltip, 'bottom', 16);

    expect(coords.y).toBe(150 + 16);
  });
});

describe('createTooltipHandlers', () => {
  it('calls onShow/onHide on mouseenter/mouseleave for hover trigger', () => {
    const triggerEl = document.createElement('button');
    document.body.appendChild(triggerEl);

    const onShow = vi.fn();
    const onHide = vi.fn();

    createTooltipHandlers(triggerEl, { onShow, onHide, trigger: 'hover' });

    triggerEl.dispatchEvent(new MouseEvent('mouseenter'));
    expect(onShow).toHaveBeenCalledTimes(1);

    triggerEl.dispatchEvent(new MouseEvent('mouseleave'));
    expect(onHide).toHaveBeenCalledTimes(1);
  });

  it('calls onShow/onHide on focus/blur for hover trigger', () => {
    const triggerEl = document.createElement('button');
    document.body.appendChild(triggerEl);

    const onShow = vi.fn();
    const onHide = vi.fn();

    createTooltipHandlers(triggerEl, { onShow, onHide, trigger: 'hover' });

    triggerEl.dispatchEvent(new FocusEvent('focus'));
    expect(onShow).toHaveBeenCalledTimes(1);

    triggerEl.dispatchEvent(new FocusEvent('blur'));
    expect(onHide).toHaveBeenCalledTimes(1);
  });

  it('calls onShow/onHide on focus/blur for focus trigger', () => {
    const triggerEl = document.createElement('button');
    document.body.appendChild(triggerEl);

    const onShow = vi.fn();
    const onHide = vi.fn();

    createTooltipHandlers(triggerEl, { onShow, onHide, trigger: 'focus' });

    triggerEl.dispatchEvent(new FocusEvent('focus'));
    expect(onShow).toHaveBeenCalledTimes(1);

    triggerEl.dispatchEvent(new FocusEvent('blur'));
    expect(onHide).toHaveBeenCalledTimes(1);
  });

  it('does not respond to mouseenter/mouseleave for focus trigger', () => {
    const triggerEl = document.createElement('button');
    document.body.appendChild(triggerEl);

    const onShow = vi.fn();
    const onHide = vi.fn();

    createTooltipHandlers(triggerEl, { onShow, onHide, trigger: 'focus' });

    triggerEl.dispatchEvent(new MouseEvent('mouseenter'));
    expect(onShow).not.toHaveBeenCalled();

    triggerEl.dispatchEvent(new MouseEvent('mouseleave'));
    expect(onHide).not.toHaveBeenCalled();
  });

  it('delays onShow when delay is set', () => {
    vi.useFakeTimers();
    const triggerEl = document.createElement('button');
    document.body.appendChild(triggerEl);

    const onShow = vi.fn();
    const onHide = vi.fn();

    createTooltipHandlers(triggerEl, { onShow, onHide, trigger: 'hover', delay: 200 });

    triggerEl.dispatchEvent(new MouseEvent('mouseenter'));
    expect(onShow).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);
    expect(onShow).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });

  it('cancels delayed show on hide', () => {
    vi.useFakeTimers();
    const triggerEl = document.createElement('button');
    document.body.appendChild(triggerEl);

    const onShow = vi.fn();
    const onHide = vi.fn();

    createTooltipHandlers(triggerEl, { onShow, onHide, trigger: 'hover', delay: 200 });

    triggerEl.dispatchEvent(new MouseEvent('mouseenter'));
    vi.advanceTimersByTime(100);
    triggerEl.dispatchEvent(new MouseEvent('mouseleave'));

    vi.advanceTimersByTime(200);
    expect(onShow).not.toHaveBeenCalled();
    expect(onHide).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });

  it('removes all listeners on cleanup', () => {
    const triggerEl = document.createElement('button');
    document.body.appendChild(triggerEl);

    const onShow = vi.fn();
    const onHide = vi.fn();

    const cleanup = createTooltipHandlers(triggerEl, { onShow, onHide, trigger: 'hover' });
    cleanup();

    triggerEl.dispatchEvent(new MouseEvent('mouseenter'));
    triggerEl.dispatchEvent(new MouseEvent('mouseleave'));
    triggerEl.dispatchEvent(new FocusEvent('focus'));
    triggerEl.dispatchEvent(new FocusEvent('blur'));

    expect(onShow).not.toHaveBeenCalled();
    expect(onHide).not.toHaveBeenCalled();
  });

  it('defaults to hover trigger when not specified', () => {
    const triggerEl = document.createElement('button');
    document.body.appendChild(triggerEl);

    const onShow = vi.fn();
    const onHide = vi.fn();

    createTooltipHandlers(triggerEl, { onShow, onHide });

    triggerEl.dispatchEvent(new MouseEvent('mouseenter'));
    expect(onShow).toHaveBeenCalledTimes(1);
  });
});
