import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react';
import { Toast, ToastContainer, useToast, type ToastItem } from '@woosgem-dev/react';
import { Toast as ToastDef } from '@woosgem-dev/core';

describe('Toast (React)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = ToastDef.mapPropsToAttrs({});

      render(<Toast>Message</Toast>);
      const toast = screen.getByRole('alert');

      expect(toast).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(toast).toHaveAttribute('data-position', coreAttrs['data-position']);
      expect(toast).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = ToastDef.mapPropsToAttrs({ variant: 'success' });

      render(<Toast variant="success">Success!</Toast>);
      const toast = screen.getByRole('alert');

      expect(toast).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: info가 적용된다', () => {
      render(<Toast variant="info">Info</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'info');
    });

    it('TC-C111: variant: success가 적용된다', () => {
      render(<Toast variant="success">Success</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'success');
    });

    it('TC-C112: variant: warning이 적용된다', () => {
      render(<Toast variant="warning">Warning</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'warning');
    });

    it('TC-C113: variant: error가 적용된다', () => {
      render(<Toast variant="error">Error</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'error');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="alert"가 적용된다', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('TC-A101: aria-live="polite"가 적용된다', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite');
    });

    it('TC-A102: aria-atomic="true"가 적용된다', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-atomic', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 info이다', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'info');
    });

    it('TC-C011: position 기본값 top-right이다', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-position', 'top-right');
    });
  });

  describe('visible/숨김', () => {
    it('TC-V100: visible=false이면 렌더링되지 않는다', () => {
      render(<Toast visible={false}>Hidden</Toast>);
      expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
    });

    it('TC-V101: visible=true이면 렌더링된다', () => {
      render(<Toast visible={true}>Visible</Toast>);
      expect(screen.getByText('Visible')).toBeInTheDocument();
    });
  });

  describe('Auto-dismiss', () => {
    it('TC-AD100: duration 후 onClose가 호출된다', () => {
      const onClose = vi.fn();

      render(
        <Toast duration={3000} onClose={onClose}>
          Auto-dismiss
        </Toast>
      );

      expect(onClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(3000);

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('TC-AD101: duration=0이면 자동 닫힘 비활성화된다', () => {
      const onClose = vi.fn();

      render(
        <Toast duration={0} onClose={onClose}>
          Persistent
        </Toast>
      );

      vi.advanceTimersByTime(10000);

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Toast>Important message</Toast>);
      expect(screen.getByText('Important message')).toBeInTheDocument();
    });

    it('TC-R201: className이 병합된다', () => {
      render(<Toast className="custom-toast">Message</Toast>);
      const toast = screen.getByRole('alert');
      expect(toast).toHaveClass('wg-toast');
      expect(toast).toHaveClass('custom-toast');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Toast data-variant="custom" variant="error">Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'error');
    });

    it('TC-O131: 보호 속성 role 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Toast role="status">Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('role', 'alert');
    });
  });
});

describe('ToastContainer (React)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('TC-TC100: 여러 토스트를 position별로 그룹핑하여 렌더링한다', () => {
    const toasts: ToastItem[] = [
      { id: '1', content: 'Top right', position: 'top-right' },
      { id: '2', content: 'Bottom left', position: 'bottom-left' },
      { id: '3', content: 'Top right 2', position: 'top-right' },
    ];
    const onDismiss = vi.fn();

    const { container } = render(
      <ToastContainer toasts={toasts} onDismiss={onDismiss} />
    );

    const groups = container.querySelectorAll('.wg-toast-container');
    expect(groups.length).toBe(2);

    const topRight = container.querySelector('[data-position="top-right"]');
    const bottomLeft = container.querySelector('[data-position="bottom-left"]');
    expect(topRight).toBeInTheDocument();
    expect(bottomLeft).toBeInTheDocument();

    const topRightAlerts = topRight!.querySelectorAll('[role="alert"]');
    expect(topRightAlerts.length).toBe(2);

    const bottomLeftAlerts = bottomLeft!.querySelectorAll('[role="alert"]');
    expect(bottomLeftAlerts.length).toBe(1);
  });

  it('TC-TC101: 각 토스트의 onClose가 올바른 id로 onDismiss를 호출한다', () => {
    const toasts: ToastItem[] = [
      { id: 'toast-a', content: 'First', duration: 1000 },
      { id: 'toast-b', content: 'Second', duration: 2000 },
    ];
    const onDismiss = vi.fn();

    render(<ToastContainer toasts={toasts} onDismiss={onDismiss} />);

    vi.advanceTimersByTime(1000);
    expect(onDismiss).toHaveBeenCalledWith('toast-a');

    vi.advanceTimersByTime(1000);
    expect(onDismiss).toHaveBeenCalledWith('toast-b');
  });

  it('TC-TC102: position prop이 기본 위치로 적용된다', () => {
    const toasts: ToastItem[] = [
      { id: '1', content: 'No position set' },
    ];
    const onDismiss = vi.fn();

    const { container } = render(
      <ToastContainer toasts={toasts} onDismiss={onDismiss} position="bottom-center" />
    );

    const group = container.querySelector('[data-position="bottom-center"]');
    expect(group).toBeInTheDocument();
    expect(group!.querySelectorAll('[role="alert"]').length).toBe(1);
  });

  it('TC-TC103: position 미지정 시 기본값 top-right가 적용된다', () => {
    const toasts: ToastItem[] = [
      { id: '1', content: 'Default position' },
    ];
    const onDismiss = vi.fn();

    const { container } = render(
      <ToastContainer toasts={toasts} onDismiss={onDismiss} />
    );

    const group = container.querySelector('[data-position="top-right"]');
    expect(group).toBeInTheDocument();
  });

  it('TC-TC104: 빈 배열이면 아무것도 렌더링하지 않는다', () => {
    const onDismiss = vi.fn();

    const { container } = render(
      <ToastContainer toasts={[]} onDismiss={onDismiss} />
    );

    expect(container.querySelectorAll('.wg-toast-container').length).toBe(0);
  });
});

describe('useToast (React)', () => {
  it('TC-UT100: addToast가 id를 반환한다', () => {
    const { result } = renderHook(() => useToast());

    let id: string;
    act(() => {
      id = result.current.addToast('Hello');
    });

    expect(id!).toBeDefined();
    expect(typeof id!).toBe('string');
    expect(id!).toMatch(/^toast-/);
  });

  it('TC-UT101: addToast 후 toasts 배열에 항목이 추가된다', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.addToast('First toast');
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].content).toBe('First toast');
  });

  it('TC-UT102: addToast에 옵션을 전달하면 반영된다', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.addToast('Custom toast', {
        variant: 'error',
        position: 'bottom-left',
        duration: 10000,
        closable: false,
      });
    });

    const toast = result.current.toasts[0];
    expect(toast.variant).toBe('error');
    expect(toast.position).toBe('bottom-left');
    expect(toast.duration).toBe(10000);
    expect(toast.closable).toBe(false);
  });

  it('TC-UT103: removeToast가 해당 id의 토스트를 제거한다', () => {
    const { result } = renderHook(() => useToast());

    let id: string;
    act(() => {
      id = result.current.addToast('To remove');
      result.current.addToast('Keep this');
    });

    expect(result.current.toasts).toHaveLength(2);

    act(() => {
      result.current.removeToast(id!);
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].content).toBe('Keep this');
  });

  it('TC-UT104: clearAll이 모든 토스트를 제거한다', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.addToast('Toast 1');
      result.current.addToast('Toast 2');
      result.current.addToast('Toast 3');
    });

    expect(result.current.toasts).toHaveLength(3);

    act(() => {
      result.current.clearAll();
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('TC-UT105: maxToasts 초과 시 오래된 토스트부터 제거된다', () => {
    const { result } = renderHook(() => useToast({ maxToasts: 2 }));

    act(() => {
      result.current.addToast('Toast 1');
      result.current.addToast('Toast 2');
      result.current.addToast('Toast 3');
    });

    expect(result.current.toasts).toHaveLength(2);
    expect(result.current.toasts[0].content).toBe('Toast 2');
    expect(result.current.toasts[1].content).toBe('Toast 3');
  });

  it('TC-UT106: defaultDuration이 새 토스트에 적용된다', () => {
    const { result } = renderHook(() => useToast({ defaultDuration: 8000 }));

    act(() => {
      result.current.addToast('With custom duration');
    });

    expect(result.current.toasts[0].duration).toBe(8000);
  });

  it('TC-UT107: defaultPosition이 새 토스트에 적용된다', () => {
    const { result } = renderHook(() => useToast({ defaultPosition: 'bottom-center' }));

    act(() => {
      result.current.addToast('Bottom center toast');
    });

    expect(result.current.toasts[0].position).toBe('bottom-center');
  });

  it('TC-UT108: 옵션 미지정 시 기본값이 적용된다', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.addToast('Default toast');
    });

    const toast = result.current.toasts[0];
    expect(toast.duration).toBe(ToastDef.defaultProps.duration);
    expect(toast.position).toBe(ToastDef.defaultProps.position);
    expect(toast.closable).toBe(true);
  });

  it('TC-UT109: addToast 개별 옵션이 defaultDuration/defaultPosition을 오버라이드한다', () => {
    const { result } = renderHook(() =>
      useToast({ defaultDuration: 3000, defaultPosition: 'top-left' })
    );

    act(() => {
      result.current.addToast('Override toast', {
        duration: 9000,
        position: 'bottom-right',
      });
    });

    const toast = result.current.toasts[0];
    expect(toast.duration).toBe(9000);
    expect(toast.position).toBe('bottom-right');
  });
});
