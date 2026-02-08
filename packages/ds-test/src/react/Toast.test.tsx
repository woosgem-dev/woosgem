import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toast } from '@woosgem/ds-react';
import { Toast as ToastDef } from '@woosgem-dev/core';

describe('Toast (React)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ToastDef.mapPropsToAttrs({});

      render(<Toast>Message</Toast>);
      const toast = screen.getByRole('alert');

      expect(toast).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(toast).toHaveAttribute('data-position', coreAttrs['data-position']);
      expect(toast).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ToastDef.mapPropsToAttrs({ variant: 'success' });

      render(<Toast variant="success">Success!</Toast>);
      const toast = screen.getByRole('alert');

      expect(toast).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });
  });

  describe('Variant ë³€??, () => {
    it('TC-C110: variant: infoê°€ ?ìš©?œë‹¤', () => {
      render(<Toast variant="info">Info</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'info');
    });

    it('TC-C111: variant: successê°€ ?ìš©?œë‹¤', () => {
      render(<Toast variant="success">Success</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'success');
    });

    it('TC-C112: variant: warning???ìš©?œë‹¤', () => {
      render(<Toast variant="warning">Warning</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'warning');
    });

    it('TC-C113: variant: errorê°€ ?ìš©?œë‹¤', () => {
      render(<Toast variant="error">Error</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'error');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="alert"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('TC-A101: aria-live="polite"ê°€ ?ìš©?œë‹¤', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite');
    });

    it('TC-A102: aria-atomic="true"ê°€ ?ìš©?œë‹¤', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-atomic', 'true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? info?´ë‹¤', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'info');
    });

    it('TC-C011: position ê¸°ë³¸ê°’ì? top-right?´ë‹¤', () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-position', 'top-right');
    });
  });

  describe('visible/?¨ê?', () => {
    it('TC-V100: visible=false?´ë©´ ?Œë”ë§ë˜ì§€ ?ŠëŠ”??, () => {
      render(<Toast visible={false}>Hidden</Toast>);
      expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
    });

    it('TC-V101: visible=true?´ë©´ ?Œë”ë§ëœ??, () => {
      render(<Toast visible={true}>Visible</Toast>);
      expect(screen.getByText('Visible')).toBeInTheDocument();
    });
  });

  describe('Auto-dismiss', () => {
    it('TC-AD100: duration ??onCloseê°€ ?¸ì¶œ?œë‹¤', () => {
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

    it('TC-AD101: duration=0?´ë©´ ?ë™ ?«í˜??ë¹„í™œ?±í™”?œë‹¤', () => {
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

  describe('React ?„ìš© props', () => {
    it('TC-R200: children???Œë”ë§ëœ??, () => {
      render(<Toast>Important message</Toast>);
      expect(screen.getByText('Important message')).toBeInTheDocument();
    });

    it('TC-R201: className??ë³‘í•©?œë‹¤', () => {
      render(<Toast className="custom-toast">Message</Toast>);
      const toast = screen.getByRole('alert');
      expect(toast).toHaveClass('toast');
      expect(toast).toHaveClass('custom-toast');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Toast data-variant="custom" variant="error">Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'error');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Toast role="status">Message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('role', 'alert');
    });
  });
});
