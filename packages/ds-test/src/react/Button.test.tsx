import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@woosgem/ds-react';
import { Button as ButtonDef } from '@woosgem-dev/core';

describe('Button', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({});

      render(<Button>Click me</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ variant: 'outline' });

      render(<Button variant="outline">Outline</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-R102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ color: 'danger' });

      render(<Button color="danger">Danger</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-R103: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ size: 'lg' });

      render(<Button size="lg">Large</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ disabled: true });

      render(<Button disabled>Disabled</Button>);
      const btn = screen.getByRole('button');

      // Core??data-state='disabled' ?¬ìš©
      expect(btn).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(btn).toHaveAttribute('data-state', 'disabled');
      expect(btn).toBeDisabled();
    });

    it('TC-R105: loading prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ loading: true });

      render(<Button loading>Loading</Button>);
      const btn = screen.getByRole('button');

      // Core??data-state='loading' ?¬ìš©
      expect(btn).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(btn).toHaveAttribute('data-state', 'loading');
      // loading ?íƒœ?ì„œ??disabled ?ì„±???¤ì •??
      expect(btn).toBeDisabled();
    });

    it('TC-R106: fullWidth prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ fullWidth: true });

      render(<Button fullWidth>Full Width</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-R107: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'ghost' as const,
        color: 'secondary' as const,
        size: 'sm' as const,
        disabled: true,
      };
      const coreAttrs = ButtonDef.mapPropsToAttrs(props);

      render(
        <Button variant="ghost" color="secondary" size="sm" disabled>
          Complex
        </Button>
      );
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-state', coreAttrs['data-state']);
    });

    it('TC-C144: loading + disabled ?™ì‹œ true ??loading ?°ì„ ', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ loading: true, disabled: true });

      render(<Button loading disabled>Both</Button>);
      const btn = screen.getByRole('button');

      // loading???°ì„ ?œìœ„ê°€ ?’ìŒ
      expect(coreAttrs['data-state']).toBe('loading');
      expect(btn).toHaveAttribute('data-state', 'loading');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-R200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Button onClick={handleClick}>Click me</Button>);
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-R202: loading ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Button onClick={handleClick} loading>
          Loading
        </Button>
      );
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-R203: ?¬ëŸ¬ ë²??´ë¦­ ??ë§¤ë²ˆ ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Button onClick={handleClick}>Click me</Button>);
      const btn = screen.getByRole('button');

      await user.click(btn);
      await user.click(btn);
      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R300: children???Œë”ë§ëœ??, () => {
      render(<Button>Hello World</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Hello World');
    });

    it('TC-R302: className??ë³‘í•©?œë‹¤', () => {
      render(<Button className="custom-class">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('btn');
      expect(btn).toHaveClass('custom-class');
    });

    it('TC-R303: type prop???ìš©?œë‹¤', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-R306: aria-label???ìš©?œë‹¤', () => {
      render(<Button aria-label="Close dialog">X</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Button className="custom">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('btn');
      expect(btn).toHaveClass('custom');
    });

    it('TC-O101: className ?¬ëŸ¬ ê°?ì¶”ê?', () => {
      render(<Button className="a b c">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('btn');
      expect(btn).toHaveClass('a');
      expect(btn).toHaveClass('b');
      expect(btn).toHaveClass('c');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Button data-testid="submit-btn">Submit</Button>);
      expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?ˆìš©', () => {
      render(<Button aria-label="Close">X</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
    });

    it('TC-O160: disabled=true ëª…ì‹œ ?ˆìš©', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('TC-O162: loading=true + disabled=false ??disabled=true (loading ?°ì„ )', () => {
      render(<Button loading disabled={false}>Loading</Button>);
      const btn = screen.getByRole('button');

      // loading??trueë©?ë¬´ì¡°ê±?disabled
      expect(btn).toBeDisabled();
      expect(btn).toHaveAttribute('data-state', 'loading');
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Button id="my-btn">Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-btn');
    });

    it('TC-O180: style prop ?„ë‹¬ ?ˆìš©', () => {
      render(<Button style={{ marginTop: 8, backgroundColor: 'blue' }}>Button</Button>);
      const btn = screen.getByRole('button');

      // jsdom?€ ?‰ìƒ??rgb ?•ì‹?¼ë¡œ ë³€??
      expect(btn).toHaveStyle({ marginTop: '8px' });
      expect(btn).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Button data-variant="custom" variant="outline">Button</Button>);
      const btn = screen.getByRole('button');

      // ?¬ìš©?ì˜ data-variant="custom"??ë¬´ì‹œ?˜ê³  variant="outline"???ìš©??
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-color ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Button data-color="custom" color="danger">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O202: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Button data-size="custom" size="lg">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O203: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Button data-state="custom" disabled>Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-O204: ë³´í˜¸ ?ì„± data-full-width ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Button data-full-width="custom" fullWidth={false}>Button</Button>);
      const btn = screen.getByRole('button');

      // fullWidth=false?´ë?ë¡?data-full-widthê°€ ?†ì–´????
      expect(btn).not.toHaveAttribute('data-full-width');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-D100: type ê¸°ë³¸ê°’ì? "button"?´ë‹¤', () => {
      render(<Button>Button</Button>);
      const btn = screen.getByRole('button');

      // form ?´ì—???¤ìˆ˜ë¡?submit ?˜ëŠ” ê²ƒì„ ë°©ì?
      expect(btn).toHaveAttribute('type', 'button');
    });

    it('TC-D101: type="submit" ëª…ì‹œ ??submit?¼ë¡œ ?Œë”ë§?, () => {
      render(<Button type="submit">Submit</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('type', 'submit');
    });
  });
});
