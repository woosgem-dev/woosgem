import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from '@woosgem/ds-react';
import { Spinner as SpinnerDef } from '@woosgem-dev/core';

describe('Spinner', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({});

      render(<Spinner />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(spinner).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(spinner).toHaveAttribute('aria-label', coreAttrs['aria-label']);
      expect(spinner).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ size: 'lg' });

      render(<Spinner size="lg" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(spinner).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ color: 'secondary' });

      render(<Spinner color="secondary" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(spinner).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-R103: label prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ label: '?°ì´??ë¶ˆëŸ¬?¤ëŠ” ì¤?..' });

      render(<Spinner label="?°ì´??ë¶ˆëŸ¬?¤ëŠ” ì¤?.." />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('aria-label', coreAttrs['aria-label']);
      expect(spinner).toHaveAttribute('aria-label', '?°ì´??ë¶ˆëŸ¬?¤ëŠ” ì¤?..');
    });

    it('TC-R104: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        size: 'lg' as const,
        color: 'muted' as const,
        label: 'Please wait',
      };
      const coreAttrs = SpinnerDef.mapPropsToAttrs(props);

      render(<Spinner size="lg" color="muted" label="Please wait" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(spinner).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(spinner).toHaveAttribute('aria-label', coreAttrs['aria-label']);
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C110: size: xsê°€ ?ìš©?œë‹¤', () => {
      render(<Spinner size="xs" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'xs');
    });

    it('TC-C111: size: sm???ìš©?œë‹¤', () => {
      render(<Spinner size="sm" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C112: size: mdê°€ ?ìš©?œë‹¤', () => {
      render(<Spinner size="md" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C113: size: lgê°€ ?ìš©?œë‹¤', () => {
      render(<Spinner size="lg" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Color ë³€??, () => {
    it('TC-C120: color: primaryê°€ ?ìš©?œë‹¤', () => {
      render(<Spinner color="primary" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C121: color: secondaryê°€ ?ìš©?œë‹¤', () => {
      render(<Spinner color="secondary" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C122: color: mutedê°€ ?ìš©?œë‹¤', () => {
      render(<Spinner color="muted" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'muted');
    });

    it('TC-C123: color: currentê°€ ?ìš©?œë‹¤', () => {
      render(<Spinner color="current" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'current');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="status"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('TC-A101: ê¸°ë³¸ aria-label???ìš©?œë‹¤', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading...');
    });

    it('TC-A102: ì»¤ìŠ¤?€ label??aria-labelë¡??ìš©?œë‹¤', () => {
      render(<Spinner label="Saving changes..." />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Saving changes...');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: color ê¸°ë³¸ê°’ì? primary?´ë‹¤', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: label ê¸°ë³¸ê°’ì? "Loading..."?´ë‹¤', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading...');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Spinner className="custom-spinner" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveClass('spinner');
      expect(spinner).toHaveClass('custom-spinner');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<Spinner style={{ marginTop: 16 }} />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Spinner data-testid="loading-spinner" />);
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Spinner data-size="custom" size="lg" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-color ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Spinner data-color="custom" color="muted" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-color', 'muted');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Spinner role="progressbar" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('role', 'status');
    });

    it('TC-O160: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Spinner id="main-spinner" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('id', 'main-spinner');
    });
  });
});
