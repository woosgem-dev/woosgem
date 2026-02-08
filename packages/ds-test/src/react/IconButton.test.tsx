import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconButton } from '@woosgem/ds-react';
import { IconButton as IconButtonDef } from '@woosgem-dev/core';

describe('IconButton', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({});

      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(btn).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ variant: 'outline' });

      render(<IconButton variant="outline" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-R102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ color: 'danger' });

      render(<IconButton color="danger" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-R103: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ size: 'lg' });

      render(<IconButton size="lg" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R104: shape prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = IconButtonDef.mapPropsToAttrs({ shape: 'circle' });

      render(<IconButton shape="circle" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(btn).toHaveAttribute('data-shape', 'circle');
    });

    it('TC-R105: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'ghost' as const,
        color: 'secondary' as const,
        size: 'sm' as const,
        shape: 'circle' as const,
      };
      const coreAttrs = IconButtonDef.mapPropsToAttrs(props);

      render(
        <IconButton variant="ghost" color="secondary" size="sm" shape="circle" aria-label="Icon">
          X
        </IconButton>
      );
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-shape', coreAttrs['data-shape']);
    });

    it('TC-C110: variant: filledê°€ ?ìš©?œë‹¤', () => {
      render(<IconButton variant="filled" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-C111: variant: outline???ìš©?œë‹¤', () => {
      render(<IconButton variant="outline" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C112: variant: ghostê°€ ?ìš©?œë‹¤', () => {
      render(<IconButton variant="ghost" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'ghost');
    });

    it('TC-C130: size: xsê°€ ?ìš©?œë‹¤', () => {
      render(<IconButton size="xs" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'xs');
    });

    it('TC-C140: shape: squareê°€ ?ìš©?œë‹¤', () => {
      render(<IconButton shape="square" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'square');
    });

    it('TC-C141: shape: circle???ìš©?œë‹¤', () => {
      render(<IconButton shape="circle" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'circle');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-R200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<IconButton onClick={handleClick} aria-label="Click">X</IconButton>);
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <IconButton onClick={handleClick} disabled aria-label="Disabled">
          X
        </IconButton>
      );
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-R202: ?¬ëŸ¬ ë²??´ë¦­ ??ë§¤ë²ˆ ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<IconButton onClick={handleClick} aria-label="Click">X</IconButton>);
      const btn = screen.getByRole('button');

      await user.click(btn);
      await user.click(btn);
      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R300: children???Œë”ë§ëœ??, () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      expect(screen.getByRole('button')).toHaveTextContent('X');
    });

    it('TC-R301: JSX children???Œë”ë§ëœ??, () => {
      render(
        <IconButton aria-label="Search">
          <svg data-testid="icon">icon</svg>
        </IconButton>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('TC-R302: className??ë³‘í•©?œë‹¤', () => {
      render(<IconButton className="custom-class" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('custom-class');
    });

    it('TC-R303: type prop???ìš©?œë‹¤', () => {
      render(<IconButton type="submit" aria-label="Submit">X</IconButton>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-R304: type??ëª…ì‹œ?˜ì? ?Šìœ¼ë©??ì„±???†ë‹¤', () => {
      // IconButton?€ ê¸°ë³¸ type???¤ì •?˜ì? ?ŠìŒ (Buttonê³??¤ë¦„)
      render(<IconButton aria-label="Icon">X</IconButton>);
      expect(screen.getByRole('button')).not.toHaveAttribute('type');
    });

    it('TC-R306: aria-label???ìš©?œë‹¤', () => {
      render(<IconButton aria-label="Close">X</IconButton>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
    });

    it('TC-R308: disabled prop???ìš©?œë‹¤', () => {
      render(<IconButton disabled aria-label="Disabled">X</IconButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<IconButton className="custom" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('custom');
    });

    it('TC-O101: className ?¬ëŸ¬ ê°?ì¶”ê?', () => {
      render(<IconButton className="a b c" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('icon-btn');
      expect(btn).toHaveClass('a');
      expect(btn).toHaveClass('b');
      expect(btn).toHaveClass('c');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<IconButton style={{ marginTop: 8 }} aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<IconButton data-testid="close-btn" aria-label="Close">X</IconButton>);
      expect(screen.getByTestId('close-btn')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?ˆìš©', () => {
      render(<IconButton aria-label="Close">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('aria-label', 'Close');
    });

    it('TC-O141: aria-pressed ?ˆìš©', () => {
      render(<IconButton aria-pressed="true" aria-label="Toggle">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('aria-pressed', 'true');
    });

    it('TC-O142: aria-expanded ?ˆìš©', () => {
      render(<IconButton aria-expanded="false" aria-label="Expand">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });

    it('TC-O160: disabled=true ëª…ì‹œ ?ˆìš©', () => {
      render(<IconButton disabled aria-label="Disabled">X</IconButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<IconButton id="my-icon-btn" aria-label="Icon">X</IconButton>);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-icon-btn');
    });

    it('TC-O180: style prop ?„ë‹¬ ?ˆìš©', () => {
      render(
        <IconButton style={{ marginTop: 8, backgroundColor: 'blue' }} aria-label="Icon">
          X
        </IconButton>
      );
      const btn = screen.getByRole('button');

      expect(btn).toHaveStyle({ marginTop: '8px' });
      expect(btn).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<IconButton data-variant="custom" variant="outline" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-color ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<IconButton data-color="custom" color="danger" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<IconButton data-size="custom" size="lg" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O133: ë³´í˜¸ ?ì„± data-shape ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<IconButton data-shape="custom" shape="circle" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'circle');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? filled?´ë‹¤', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-C011: color ê¸°ë³¸ê°’ì? primary?´ë‹¤', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'md');
    });

    it('TC-C013: shape ê¸°ë³¸ê°’ì? square?´ë‹¤', () => {
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-shape', 'square');
    });

    it('TC-D100: type??ëª…ì‹œ?˜ì? ?Šìœ¼ë©??ì„±???†ë‹¤', () => {
      // IconButton?€ ê¸°ë³¸ type???¤ì •?˜ì? ?ŠìŒ
      render(<IconButton aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).not.toHaveAttribute('type');
    });

    it('TC-D101: type="button" ëª…ì‹œ ??button?¼ë¡œ ?Œë”ë§?, () => {
      render(<IconButton type="button" aria-label="Icon">X</IconButton>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('type', 'button');
    });
  });
});
