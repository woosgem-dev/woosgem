import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Badge } from '@woosgem/ds-vue';
import { Badge as BadgeDef } from '@woosgem-dev/core';

describe('Badge', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({});

      render(Badge, { slots: { default: 'New' } });
      const badge = screen.getByText('New');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(badge).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ variant: 'outline' });

      render(Badge, {
        props: { variant: 'outline' },
        slots: { default: 'Outline' },
      });
      const badge = screen.getByText('Outline');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-V102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'danger' });

      render(Badge, {
        props: { color: 'danger' },
        slots: { default: 'Danger' },
      });
      const badge = screen.getByText('Danger');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-V103: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ size: 'lg' });

      render(Badge, {
        props: { size: 'lg' },
        slots: { default: 'Large' },
      });
      const badge = screen.getByText('Large');

      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(badge).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V104: variant: subtle??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ variant: 'subtle' });

      render(Badge, {
        props: { variant: 'subtle' },
        slots: { default: 'Subtle' },
      });
      const badge = screen.getByText('Subtle');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V105: color: successê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'success' });

      render(Badge, {
        props: { color: 'success' },
        slots: { default: 'Success' },
      });
      const badge = screen.getByText('Success');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V106: color: warning??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'warning' });

      render(Badge, {
        props: { color: 'warning' },
        slots: { default: 'Warning' },
      });
      const badge = screen.getByText('Warning');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V107: color: infoê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'info' });

      render(Badge, {
        props: { color: 'info' },
        slots: { default: 'Info' },
      });
      const badge = screen.getByText('Info');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V108: color: secondaryê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'secondary' });

      render(Badge, {
        props: { color: 'secondary' },
        slots: { default: 'Secondary' },
      });
      const badge = screen.getByText('Secondary');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V109: size: sm??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ size: 'sm' });

      render(Badge, {
        props: { size: 'sm' },
        slots: { default: 'Small' },
      });
      const badge = screen.getByText('Small');

      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V110: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'subtle' as const,
        color: 'success' as const,
        size: 'sm' as const,
      };
      const coreAttrs = BadgeDef.mapPropsToAttrs(props);

      render(Badge, {
        props,
        slots: { default: 'Complex' },
      });
      const badge = screen.getByText('Complex');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
    });
  });

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: slot???Œë”ë§ëœ??, () => {
      render(Badge, { slots: { default: 'Active' } });
      expect(screen.getByText('Active')).toBeInTheDocument();
    });

    it('TC-V301: classê°€ ë³‘í•©?œë‹¤', () => {
      render(Badge, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label???ìš©?œë‹¤', () => {
      render(Badge, {
        attrs: { 'aria-label': 'Status badge' },
        slots: { default: 'Active' },
      });
      expect(screen.getByLabelText('Status badge')).toBeInTheDocument();
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(Badge, {
        attrs: { class: 'custom' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(Badge, {
        attrs: { 'data-testid': 'status-badge' },
        slots: { default: 'New' },
      });
      expect(screen.getByTestId('status-badge')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Badge, {
        props: { variant: 'outline' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-color ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Badge, {
        props: { color: 'danger' },
        attrs: { 'data-color': 'custom' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Badge, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Badge, {
        attrs: { style: 'margin-left: 4px;' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveStyle({ marginLeft: '4px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Badge, {
        attrs: { id: 'my-badge' },
        slots: { default: 'Badge' },
      });
      expect(screen.getByText('Badge')).toHaveAttribute('id', 'my-badge');
    });

    it('TC-O140: aria-describedby ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Badge, {
        attrs: { 'aria-describedby': 'badge-desc' },
        slots: { default: 'Badge' },
      });
      expect(screen.getByText('Badge')).toHaveAttribute('aria-describedby', 'badge-desc');
    });

    it('TC-O141: title ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Badge, {
        attrs: { title: 'Status: Active' },
        slots: { default: 'Active' },
      });
      expect(screen.getByText('Active')).toHaveAttribute('title', 'Status: Active');
    });
  });
});
