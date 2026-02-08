import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Divider } from '@woosgem/ds-react';
import { Divider as DividerDef } from '@woosgem-dev/core';

describe('Divider', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({});

      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: orientation prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ orientation: 'vertical' });

      render(<Divider orientation="vertical" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-orientation', 'vertical');
      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('TC-R102: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ variant: 'dashed' });

      render(<Divider variant="dashed" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-variant', 'dashed');
    });

    it('TC-R103: spacing prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ spacing: 'lg' });

      render(<Divider spacing="lg" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });

    it('TC-R104: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        orientation: 'vertical' as const,
        variant: 'dashed' as const,
        spacing: 'sm' as const,
      };
      const coreAttrs = DividerDef.mapPropsToAttrs(props);

      render(<Divider orientation="vertical" variant="dashed" spacing="sm" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
    });

    it('TC-R105: role ?ì„±??separator?´ë‹¤', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('role', 'separator');
    });

    it('TC-R106: aria-orientation??orientationê³??™ê¸°?”ëœ??(horizontal)', () => {
      render(<Divider orientation="horizontal" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('TC-C130: spacing: none???ìš©?œë‹¤', () => {
      render(<Divider spacing="none" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'none');
    });

    it('TC-C131: spacing: sm???ìš©?œë‹¤', () => {
      render(<Divider spacing="sm" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'sm');
    });

    it('TC-C132: spacing: mdê°€ ?ìš©?œë‹¤', () => {
      render(<Divider spacing="md" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'md');
    });

    it('TC-C133: spacing: lgê°€ ?ìš©?œë‹¤', () => {
      render(<Divider spacing="lg" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R200: className??ë³‘í•©?œë‹¤', () => {
      render(<Divider className="custom-class" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('custom-class');
    });

    it('TC-R201: className ?¬ëŸ¬ ê°?ì¶”ê?', () => {
      render(<Divider className="a b c" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('a');
      expect(divider).toHaveClass('b');
      expect(divider).toHaveClass('c');
    });

    it('TC-R202: aria-label???ìš©?œë‹¤', () => {
      render(<Divider aria-label="Section divider" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-label', 'Section divider');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Divider className="custom" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('custom');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<Divider style={{ marginTop: 8 }} />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O111: style ë³µí•© ?ì„±', () => {
      render(<Divider style={{ borderWidth: 2, opacity: 0.5 }} />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveStyle({ borderWidth: '2px' });
      expect(divider).toHaveStyle({ opacity: '0.5' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Divider data-testid="divider-1" />);
      expect(screen.getByTestId('divider-1')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?ˆìš©', () => {
      render(<Divider aria-label="Content separator" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-label', 'Content separator');
    });

    it('TC-O150: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Divider id="main-divider" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('id', 'main-divider');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-orientation ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Divider data-orientation="custom" orientation="vertical" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', 'vertical');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Divider data-variant="custom" variant="dashed" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', 'dashed');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± data-spacing ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Divider data-spacing="custom" spacing="lg" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });

    it('TC-O133: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Divider role="presentation" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('role', 'separator');
    });

    it('TC-O134: ë³´í˜¸ ?ì„± aria-orientation ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Divider aria-orientation="custom" orientation="vertical" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: orientation ê¸°ë³¸ê°’ì? horizontal?´ë‹¤', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', 'horizontal');
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('TC-C011: variant ê¸°ë³¸ê°’ì? solid?´ë‹¤', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', 'solid');
    });

    it('TC-C012: spacing ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'md');
    });
  });

  describe('?‘ê·¼??, () => {
    it('role="separator"ê°€ ? ì–¸?œë‹¤', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toBeInTheDocument();
    });

    it('aria-orientation??orientation propê³??™ê¸°?”ëœ??, () => {
      const { rerender } = render(<Divider orientation="horizontal" />);
      let divider = screen.getByRole('separator');
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');

      rerender(<Divider orientation="vertical" />);
      divider = screen.getByRole('separator');
      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });
  });
});
