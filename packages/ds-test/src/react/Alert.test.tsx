import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from '@woosgem/ds-react';
import { Alert as AlertDef } from '@woosgem-dev/core';

describe('Alert', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({});

      render(<Alert>Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(alert).toHaveAttribute('data-status', coreAttrs['data-status']);
      expect(alert).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Alert variant="filled">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(alert).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-R102: status prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ status: 'error' });

      render(<Alert status="error">Error!</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-status', coreAttrs['data-status']);
      expect(alert).toHaveAttribute('data-status', 'error');
    });

    it('TC-R103: closable prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ closable: true });

      render(<Alert closable>Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-closable', String(coreAttrs['data-closable']));
    });

    it('TC-R104: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'filled' as const,
        status: 'success' as const,
        closable: true,
      };
      const coreAttrs = AlertDef.mapPropsToAttrs(props);

      render(
        <Alert variant="filled" status="success" closable>
          Success!
        </Alert>
      );
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(alert).toHaveAttribute('data-status', coreAttrs['data-status']);
      expect(alert).toHaveAttribute('data-closable', String(coreAttrs['data-closable']));
    });
  });

  describe('Variant ë³€??, () => {
    it('TC-C110: variant: filledê°€ ?ìš©?œë‹¤', () => {
      render(<Alert variant="filled">Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-C111: variant: outline???ìš©?œë‹¤', () => {
      render(<Alert variant="outline">Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C112: variant: subtle???ìš©?œë‹¤', () => {
      render(<Alert variant="subtle">Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'subtle');
    });
  });

  describe('Status ë³€??, () => {
    it('TC-C120: status: infoê°€ ?ìš©?œë‹¤', () => {
      render(<Alert status="info">Info</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'info');
    });

    it('TC-C121: status: successê°€ ?ìš©?œë‹¤', () => {
      render(<Alert status="success">Success</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'success');
    });

    it('TC-C122: status: warning???ìš©?œë‹¤', () => {
      render(<Alert status="warning">Warning</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'warning');
    });

    it('TC-C123: status: errorê°€ ?ìš©?œë‹¤', () => {
      render(<Alert status="error">Error</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'error');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="alert"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? subtle?´ë‹¤', () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'subtle');
    });

    it('TC-C011: status ê¸°ë³¸ê°’ì? info?´ë‹¤', () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'info');
    });

    it('TC-C012: closable ê¸°ë³¸ê°’ì? false?´ë‹¤ (?ì„± ?†ìŒ)', () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole('alert')).not.toHaveAttribute('data-closable');
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R200: children???Œë”ë§ëœ??, () => {
      render(<Alert>Important message</Alert>);
      expect(screen.getByText('Important message')).toBeInTheDocument();
    });

    it('TC-R201: JSX children???Œë”ë§ëœ??, () => {
      render(
        <Alert>
          <span data-testid="icon">Icon</span>
          <span>Message</span>
        </Alert>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Message')).toBeInTheDocument();
    });

    it('TC-R202: className??ë³‘í•©?œë‹¤', () => {
      render(<Alert className="custom-alert">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('alert');
      expect(alert).toHaveClass('custom-alert');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Alert className="my-alert">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('alert');
      expect(alert).toHaveClass('my-alert');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<Alert style={{ marginTop: 16 }}>Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Alert data-testid="error-alert">Message</Alert>);
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Alert data-variant="custom" variant="filled">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-status ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Alert data-status="custom" status="error">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-status', 'error');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Alert role="status">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('role', 'alert');
    });

    it('TC-O160: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Alert id="main-alert">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('id', 'main-alert');
    });
  });
});
