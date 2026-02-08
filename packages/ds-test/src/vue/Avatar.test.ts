import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Avatar } from '@woosgem/ds-vue';
import { Avatar as AvatarDef } from '@woosgem-dev/core';

describe('Avatar', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      render(Avatar, { attrs: { 'aria-label': 'User avatar' } });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'lg' });

      render(Avatar, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'Large avatar' },
      });
      const avatar = screen.getByLabelText('Large avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V102: shape prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ shape: 'square' });

      render(Avatar, {
        props: { shape: 'square' },
        attrs: { 'aria-label': 'Square avatar' },
      });
      const avatar = screen.getByLabelText('Square avatar');

      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveAttribute('data-shape', 'square');
    });

    it('TC-V103: srcê°€ ?ˆì„ ??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ src: '/avatar.jpg' });

      render(Avatar, {
        props: { src: '/avatar.jpg' },
        attrs: { 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-has-image', String(coreAttrs['data-has-image']));
    });

    it('TC-V104: srcê°€ ?†ì„ ??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({});

      render(Avatar, {
        attrs: { 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(coreAttrs['data-has-image']).toBeUndefined();
      expect(avatar).not.toHaveAttribute('data-has-image');
    });

    it('TC-V105: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        size: 'xl' as const,
        shape: 'circle' as const,
        src: '/img.jpg',
      };
      const coreAttrs = AvatarDef.mapPropsToAttrs(props);

      render(Avatar, {
        props,
        attrs: { 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(avatar).toHaveAttribute('data-shape', coreAttrs['data-shape']);
      expect(avatar).toHaveAttribute('data-has-image', 'true');
    });

    it('TC-V106: size: xsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'xs' });

      render(Avatar, {
        props: { size: 'xs' },
        attrs: { 'aria-label': 'XS avatar' },
      });
      const avatar = screen.getByLabelText('XS avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V107: size: sm??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'sm' });

      render(Avatar, {
        props: { size: 'sm' },
        attrs: { 'aria-label': 'SM avatar' },
      });
      const avatar = screen.getByLabelText('SM avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V108: size: xl??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = AvatarDef.mapPropsToAttrs({ size: 'xl' });

      render(Avatar, {
        props: { size: 'xl' },
        attrs: { 'aria-label': 'XL avatar' },
      });
      const avatar = screen.getByLabelText('XL avatar');

      expect(avatar).toHaveAttribute('data-size', coreAttrs['data-size']);
    });
  });

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: slot???Œë”ë§ëœ??(fallback)', () => {
      render(Avatar, {
        slots: { default: 'AB' },
        attrs: { 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveTextContent('AB');
    });

    it('TC-V301: classê°€ ë³‘í•©?œë‹¤', () => {
      render(Avatar, {
        attrs: { class: 'custom-class', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label???ìš©?œë‹¤', () => {
      render(Avatar, {
        attrs: { 'aria-label': 'User profile' },
      });
      expect(screen.getByLabelText('User profile')).toBeInTheDocument();
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(Avatar, {
        attrs: { class: 'custom', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveClass('avatar');
      expect(avatar).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(Avatar, {
        attrs: { 'data-testid': 'user-avatar', 'aria-label': 'User avatar' },
      });
      expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Avatar, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-shape ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Avatar, {
        props: { shape: 'square' },
        attrs: { 'data-shape': 'custom', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-shape', 'square');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-has-image ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Avatar, {
        props: { src: '/avatar.jpg' },
        attrs: { 'data-has-image': 'false', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveAttribute('data-has-image', 'true');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Avatar, {
        attrs: { style: 'margin-top: 8px;', 'aria-label': 'User avatar' },
      });
      const avatar = screen.getByLabelText('User avatar');

      expect(avatar).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Avatar, {
        attrs: { id: 'user-avatar', 'aria-label': 'User avatar' },
      });
      expect(screen.getByLabelText('User avatar')).toHaveAttribute('id', 'user-avatar');
    });

    it('TC-O140: aria-describedby ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Avatar, {
        attrs: { 'aria-describedby': 'avatar-desc', 'aria-label': 'User avatar' },
      });
      expect(screen.getByLabelText('User avatar')).toHaveAttribute('aria-describedby', 'avatar-desc');
    });
  });
});
