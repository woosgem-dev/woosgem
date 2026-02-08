import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { IconButton } from '@woosgem/ds-vue';
import { IconButton as IconButtonDef } from '@woosgem-dev/core';

describe('IconButton', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({});

      render(IconButton, {
        attrs: { 'aria-label': 'Search' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(btn).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ variant: 'outline' });

      render(IconButton, {
        props: { variant: 'outline' },
        attrs: { 'aria-label': 'Search' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-V102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ color: 'danger' });

      render(IconButton, {
        props: { color: 'danger' },
        attrs: { 'aria-label': 'Delete' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-V103: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ size: 'lg' });

      render(IconButton, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'Large button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V104: shape prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ shape: 'circle' });

      render(IconButton, {
        props: { shape: 'circle' },
        attrs: { 'aria-label': 'Circle button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(btn).toHaveAttribute('data-shape', 'circle');
    });

    it('TC-V105: variant: ghostê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ variant: 'ghost' });

      render(IconButton, {
        props: { variant: 'ghost' },
        attrs: { 'aria-label': 'Ghost button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V106: color: secondaryê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ color: 'secondary' });

      render(IconButton, {
        props: { color: 'secondary' },
        attrs: { 'aria-label': 'Secondary button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V107: size: xsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ size: 'xs' });

      render(IconButton, {
        props: { size: 'xs' },
        attrs: { 'aria-label': 'XS button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V108: size: sm??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ size: 'sm' });

      render(IconButton, {
        props: { size: 'sm' },
        attrs: { 'aria-label': 'SM button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V109: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'ghost' as const,
        color: 'secondary' as const,
        size: 'sm' as const,
        shape: 'circle' as const,
      };
      const coreAttrs = IconButtonDef.mapPropsToAttrs(props);

      render(IconButton, {
        props,
        attrs: { 'aria-label': 'Complex button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-V200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(IconButton, {
        props: { onClick: handleClick },
        attrs: { 'aria-label': 'Click me' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-V201: disabled ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(IconButton, {
        attrs: { 'aria-label': 'Disabled', disabled: true, onClick: handleClick },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-V202: ?¬ëŸ¬ ë²??´ë¦­ ??ë§¤ë²ˆ ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(IconButton, {
        props: { onClick: handleClick },
        attrs: { 'aria-label': 'Click multiple' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      await user.click(btn);
      await user.click(btn);
      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: slot???Œë”ë§ëœ??, () => {
      render(IconButton, {
        attrs: { 'aria-label': 'Search' },
        slots: { default: 'SearchIcon' },
      });
      expect(screen.getByRole('button')).toHaveTextContent('SearchIcon');
    });

    it('TC-V301: classê°€ ë³‘í•©?œë‹¤', () => {
      render(IconButton, {
        attrs: { class: 'custom-class', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('custom-class');
    });

    it('TC-V302: type prop???ìš©?œë‹¤', () => {
      render(IconButton, {
        attrs: { type: 'submit', 'aria-label': 'Submit' },
        slots: { default: 'Icon' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-V303: aria-label???ìš©?œë‹¤', () => {
      render(IconButton, {
        attrs: { 'aria-label': 'Close dialog' },
        slots: { default: 'X' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });

    it('TC-V304: disabled ?ì„±???ìš©?œë‹¤', () => {
      render(IconButton, {
        attrs: { disabled: true, 'aria-label': 'Disabled' },
        slots: { default: 'Icon' },
      });
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(IconButton, {
        attrs: { class: 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(IconButton, {
        attrs: { 'data-testid': 'close-btn', 'aria-label': 'Close' },
        slots: { default: 'X' },
      });
      expect(screen.getByTestId('close-btn')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(IconButton, {
        props: { variant: 'outline' },
        attrs: { 'data-variant': 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-color ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(IconButton, {
        props: { color: 'danger' },
        attrs: { 'data-color': 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(IconButton, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O203: ë³´í˜¸ ?ì„± data-shape ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(IconButton, {
        props: { shape: 'circle' },
        attrs: { 'data-shape': 'custom', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'circle');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(IconButton, {
        attrs: { style: 'margin-top: 8px;', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      const btn = screen.getByRole('button');

      expect(btn).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(IconButton, {
        attrs: { id: 'my-icon-btn', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-icon-btn');
    });

    it('TC-O140: aria-describedby ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(IconButton, {
        attrs: { 'aria-describedby': 'btn-desc', 'aria-label': 'Button' },
        slots: { default: 'Icon' },
      });
      expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'btn-desc');
    });
  });
});
