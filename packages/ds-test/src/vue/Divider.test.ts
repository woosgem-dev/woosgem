import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Divider } from '@woosgem/ds-vue';
import { Divider as DividerDef } from '@woosgem-dev/core';

describe('Divider', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({});

      render(Divider);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveAttribute('aria-orientation', coreAttrs['aria-orientation']);
      expect(divider).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: orientation prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ orientation: 'vertical' });

      render(Divider, {
        props: { orientation: 'vertical' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-orientation', 'vertical');
      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('TC-V102: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ variant: 'dashed' });

      render(Divider, {
        props: { variant: 'dashed' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-variant', 'dashed');
    });

    it('TC-V103: spacing prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ spacing: 'lg' });

      render(Divider, {
        props: { spacing: 'lg' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });

    it('TC-V104: role?€ ??ƒ separator?´ë‹¤', () => {
      render(Divider);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('role', 'separator');
    });

    it('TC-V105: spacing: none??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ spacing: 'none' });

      render(Divider, {
        props: { spacing: 'none' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
    });

    it('TC-V106: spacing: sm??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ spacing: 'sm' });

      render(Divider, {
        props: { spacing: 'sm' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
    });

    it('TC-V107: orientation: horizontal??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ orientation: 'horizontal' });

      render(Divider, {
        props: { orientation: 'horizontal' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('TC-V108: variant: solidê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ variant: 'solid' });

      render(Divider, {
        props: { variant: 'solid' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V109: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        orientation: 'vertical' as const,
        variant: 'dashed' as const,
        spacing: 'lg' as const,
      };
      const coreAttrs = DividerDef.mapPropsToAttrs(props);

      render(Divider, { props });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveAttribute('aria-orientation', coreAttrs['aria-orientation']);
    });
  });

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: classê°€ ë³‘í•©?œë‹¤', () => {
      render(Divider, {
        attrs: { class: 'custom-class' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('custom-class');
    });

    it('TC-V301: aria-label???ìš©?œë‹¤', () => {
      render(Divider, {
        attrs: { 'aria-label': 'Section divider' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-label', 'Section divider');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(Divider, {
        attrs: { class: 'custom' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(Divider, {
        attrs: { 'data-testid': 'main-divider' },
      });
      expect(screen.getByTestId('main-divider')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-orientation ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Divider, {
        props: { orientation: 'vertical' },
        attrs: { 'data-orientation': 'custom' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', 'vertical');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Divider, {
        props: { variant: 'dashed' },
        attrs: { 'data-variant': 'custom' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', 'dashed');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-spacing ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Divider, {
        props: { spacing: 'lg' },
        attrs: { 'data-spacing': 'custom' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });

    it('TC-O203: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Divider, {
        attrs: { role: 'presentation' },
      });
      // separator role??? ì???
      expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('TC-O204: ë³´í˜¸ ?ì„± aria-orientation ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Divider, {
        props: { orientation: 'vertical' },
        attrs: { 'aria-orientation': 'horizontal' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Divider, {
        attrs: { style: 'margin-top: 16px;' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Divider, {
        attrs: { id: 'section-divider' },
      });
      expect(screen.getByRole('separator')).toHaveAttribute('id', 'section-divider');
    });
  });
});
