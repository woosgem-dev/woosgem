import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Avatar } from '@woosgem/ds-react';
import { Avatar as AvatarDef } from '@woosgem-dev/core';

describe('Avatar', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      render(<Avatar />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'lg' });

      render(<Avatar size="lg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: shape prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ shape: 'square' });

      render(<Avatar shape="square" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveAttribute('data-shape', 'square');
    });

    it('TC-R103: srcê°€ ?ˆì„ ??data-has-imageê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ src: '/avatar.jpg' });

      render(<Avatar src="/avatar.jpg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-has-image', String(coreAttrs['data-has-image']));
    });

    it('TC-R104: srcê°€ ?†ì„ ??data-has-image ?ì„±???†ë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      render(<Avatar />);
      const avatar = document.querySelector('.avatar');

      expect(coreAttrs['data-has-image']).toBeUndefined();
      expect(avatar).not.toHaveAttribute('data-has-image');
    });

    it('TC-R105: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        size: 'xl' as const,
        shape: 'circle' as const,
        src: '/img.jpg',
      };
      const coreAttrs = AvatarDef.mapPropsToAttrs(props);

      render(<Avatar size="xl" shape="circle" src="/img.jpg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveAttribute('data-has-image', 'true');
    });

    it('TC-C110: size xsê°€ ?ìš©?œë‹¤', () => {
      render(<Avatar size="xs" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'xs');
    });

    it('TC-C111: size sm???ìš©?œë‹¤', () => {
      render(<Avatar size="sm" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C112: size mdê°€ ?ìš©?œë‹¤', () => {
      render(<Avatar size="md" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'md');
    });

    it('TC-C113: size lgê°€ ?ìš©?œë‹¤', () => {
      render(<Avatar size="lg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-C114: size xl???ìš©?œë‹¤', () => {
      render(<Avatar size="xl" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'xl');
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R210: children???Œë”ë§ëœ??, () => {
      render(<Avatar>AB</Avatar>);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveTextContent('AB');
    });

    it('TC-R300: className??ë³‘í•©?œë‹¤', () => {
      render(<Avatar className="custom-class" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('custom-class');
    });

    it('TC-R301: aria-label???ìš©?œë‹¤', () => {
      render(<Avatar aria-label="User profile" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('aria-label', 'User profile');
    });

    it('TC-R303: JSX children???Œë”ë§ëœ??, () => {
      render(
        <Avatar>
          <span data-testid="initials">JD</span>
        </Avatar>
      );

      expect(screen.getByTestId('initials')).toHaveTextContent('JD');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Avatar className="custom" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('custom');
    });

    it('TC-O101: className ?¬ëŸ¬ ê°?ì¶”ê?', () => {
      render(<Avatar className="a b c" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('a');
      expect(avatar).toHaveClass('b');
      expect(avatar).toHaveClass('c');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<Avatar style={{ marginTop: 8 }} />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Avatar data-testid="user-avatar" />);
      expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?ˆìš©', () => {
      render(<Avatar aria-label="User profile" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('aria-label', 'User profile');
    });

    it('TC-O150: onClick ?¸ë“¤??ì¶”ê? ?ˆìš©', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Avatar onClick={handleClick} />);
      const avatar = document.querySelector('.avatar');

      await user.click(avatar!);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-O160: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Avatar id="user-avatar" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('id', 'user-avatar');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Avatar data-size="custom" size="lg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-shape ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Avatar data-shape="custom" shape="square" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-shape', 'square');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± data-has-image ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Avatar data-has-image="false" src="/img.jpg" />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-has-image', 'true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(<Avatar />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: shape ê¸°ë³¸ê°’ì? circle?´ë‹¤', () => {
      render(<Avatar />);
      const avatar = document.querySelector('.avatar');

      expect(avatar).toHaveAttribute('data-shape', 'circle');
    });
  });
});
