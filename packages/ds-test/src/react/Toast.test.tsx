import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toast } from '@woosgem/ds-react';
import { Toast as ToastDef } from '@woosgem/ds-core';

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
    it('TC-A100: role="alert"가 항상 적용된다', () => {
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
    it('TC-C010: variant 기본값은 info이다', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'info');
    });

    it('TC-C011: position 기본값은 top-right이다', () => {
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

    it('TC-AD101: duration=0이면 자동 닫힘이 비활성화된다', () => {
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
      expect(toast).toHaveClass('toast');
      expect(toast).toHaveClass('custom-toast');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O130: 보호 속성 data-variant 오버라이드 차단', () => {
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
