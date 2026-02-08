import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Badge } from '@woosgem/ds-react';
import { Badge as BadgeDef } from '@woosgem-dev/core';

describe('Badge', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({});

      render(<Badge>New</Badge>);
      const badge = screen.getByText('New');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(badge).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ variant: 'outline' });

      render(<Badge variant="outline">Outline</Badge>);
      const badge = screen.getByText('Outline');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-R102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'danger' });

      render(<Badge color="danger">Danger</Badge>);
      const badge = screen.getByText('Danger');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-R103: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ size: 'lg' });

      render(<Badge size="lg">Large</Badge>);
      const badge = screen.getByText('Large');

      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(badge).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R104: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'subtle' as const,
        color: 'success' as const,
        size: 'sm' as const,
      };
      const coreAttrs = BadgeDef.mapPropsToAttrs(props);

      render(
        <Badge variant="subtle" color="success" size="sm">
          Complex
        </Badge>
      );
      const badge = screen.getByText('Complex');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-C110: variant: solidê°€ ?ìš©?œë‹¤', () => {
      render(<Badge variant="solid">Solid</Badge>);
      const badge = screen.getByText('Solid');

      expect(badge).toHaveAttribute('data-variant', 'solid');
    });

    it('TC-C111: variant: outline???ìš©?œë‹¤', () => {
      render(<Badge variant="outline">Outline</Badge>);
      const badge = screen.getByText('Outline');

      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C112: variant: subtle???ìš©?œë‹¤', () => {
      render(<Badge variant="subtle">Subtle</Badge>);
      const badge = screen.getByText('Subtle');

      expect(badge).toHaveAttribute('data-variant', 'subtle');
    });

    it('TC-C120: color: primaryê°€ ?ìš©?œë‹¤', () => {
      render(<Badge color="primary">Primary</Badge>);
      const badge = screen.getByText('Primary');

      expect(badge).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C121: color: secondaryê°€ ?ìš©?œë‹¤', () => {
      render(<Badge color="secondary">Secondary</Badge>);
      const badge = screen.getByText('Secondary');

      expect(badge).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C122: color: dangerê°€ ?ìš©?œë‹¤', () => {
      render(<Badge color="danger">Danger</Badge>);
      const badge = screen.getByText('Danger');

      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-C123: color: successê°€ ?ìš©?œë‹¤', () => {
      render(<Badge color="success">Success</Badge>);
      const badge = screen.getByText('Success');

      expect(badge).toHaveAttribute('data-color', 'success');
    });

    it('TC-C124: color: warning???ìš©?œë‹¤', () => {
      render(<Badge color="warning">Warning</Badge>);
      const badge = screen.getByText('Warning');

      expect(badge).toHaveAttribute('data-color', 'warning');
    });

    it('TC-C125: color: infoê°€ ?ìš©?œë‹¤', () => {
      render(<Badge color="info">Info</Badge>);
      const badge = screen.getByText('Info');

      expect(badge).toHaveAttribute('data-color', 'info');
    });

    it('TC-C130: size: sm???ìš©?œë‹¤', () => {
      render(<Badge size="sm">Small</Badge>);
      const badge = screen.getByText('Small');

      expect(badge).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C131: size: mdê°€ ?ìš©?œë‹¤', () => {
      render(<Badge size="md">Medium</Badge>);
      const badge = screen.getByText('Medium');

      expect(badge).toHaveAttribute('data-size', 'md');
    });

    it('TC-C132: size: lgê°€ ?ìš©?œë‹¤', () => {
      render(<Badge size="lg">Large</Badge>);
      const badge = screen.getByText('Large');

      expect(badge).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R200: children???Œë”ë§ëœ??, () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('TC-R201: JSX children???Œë”ë§ëœ??, () => {
      render(
        <Badge>
          <span data-testid="icon">Icon</span>
          Text
        </Badge>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Text')).toBeInTheDocument();
    });

    it('TC-R202: className??ë³‘í•©?œë‹¤', () => {
      render(<Badge className="custom-class">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('custom-class');
    });

    it('TC-R203: aria-label???ìš©?œë‹¤', () => {
      render(<Badge aria-label="Status">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('aria-label', 'Status');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-O150: onMouseEnter ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleMouseEnter = vi.fn();

      render(<Badge onMouseEnter={handleMouseEnter}>Badge</Badge>);
      const badge = screen.getByText('Badge');

      await user.hover(badge);

      expect(handleMouseEnter).toHaveBeenCalled();
    });

    it('TC-O152: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Badge onClick={handleClick}>Click</Badge>);
      const badge = screen.getByText('Click');

      await user.click(badge);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Badge className="custom">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('custom');
    });

    it('TC-O101: className ?¬ëŸ¬ ê°?ì¶”ê?', () => {
      render(<Badge className="a b c">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('a');
      expect(badge).toHaveClass('b');
      expect(badge).toHaveClass('c');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<Badge style={{ marginLeft: 8 }}>Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveStyle({ marginLeft: '8px' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Badge data-testid="status-badge">Badge</Badge>);
      expect(screen.getByTestId('status-badge')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?ˆìš©', () => {
      render(<Badge aria-label="Status">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('aria-label', 'Status');
    });

    it('TC-O141: aria-live ?ˆìš©', () => {
      render(<Badge aria-live="polite">Update</Badge>);
      const badge = screen.getByText('Update');

      expect(badge).toHaveAttribute('aria-live', 'polite');
    });

    it('TC-O160: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Badge id="my-badge">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('id', 'my-badge');
    });

    it('TC-O161: title ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Badge title="Tooltip">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('title', 'Tooltip');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Badge data-variant="custom" variant="outline">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-color ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Badge data-color="custom" color="danger">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Badge data-size="custom" size="lg">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? solid?´ë‹¤', () => {
      render(<Badge>Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-variant', 'solid');
    });

    it('TC-C011: color ê¸°ë³¸ê°’ì? primary?´ë‹¤', () => {
      render(<Badge>Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(<Badge>Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-size', 'md');
    });
  });

  describe('ë³µí•© ì¡°í•©', () => {
    it('TC-C140: ëª¨ë“  props ì¡°í•© 1', () => {
      render(
        <Badge variant="outline" color="danger" size="lg">
          Error
        </Badge>
      );
      const badge = screen.getByText('Error');

      expect(badge).toHaveAttribute('data-variant', 'outline');
      expect(badge).toHaveAttribute('data-color', 'danger');
      expect(badge).toHaveAttribute('data-size', 'lg');
    });

    it('TC-C141: ëª¨ë“  props ì¡°í•© 2', () => {
      render(
        <Badge variant="subtle" color="warning" size="sm">
          Warning
        </Badge>
      );
      const badge = screen.getByText('Warning');

      expect(badge).toHaveAttribute('data-variant', 'subtle');
      expect(badge).toHaveAttribute('data-color', 'warning');
      expect(badge).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C142: ëª¨ë“  props ì¡°í•© 3', () => {
      render(
        <Badge variant="solid" color="info" size="md">
          Info
        </Badge>
      );
      const badge = screen.getByText('Info');

      expect(badge).toHaveAttribute('data-variant', 'solid');
      expect(badge).toHaveAttribute('data-color', 'info');
      expect(badge).toHaveAttribute('data-size', 'md');
    });
  });
});
