import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tab } from '@woosgem/ds-react';
import { Tab as TabDef } from '@woosgem-dev/core';

describe('Tab', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({});

      render(<Tab>Home</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Tab variant="filled">Filled</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-R102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ size: 'lg' });

      render(<Tab size="lg">Large</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R103: selected prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true });

      render(<Tab selected>Selected</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-R104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ disabled: true });

      render(<Tab disabled>Disabled</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(tab).toHaveAttribute('data-state', 'disabled');
      expect(tab).toBeDisabled();
    });

    it('TC-R105: fullWidth prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ fullWidth: true });

      render(<Tab fullWidth>Full Width</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-R106: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        variant: 'filled' as const,
        size: 'sm' as const,
        selected: true,
      };
      const coreAttrs = TabDef.mapPropsToAttrs(props);

      render(
        <Tab variant="filled" size="sm" selected>
          Complex
        </Tab>
      );
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
    });

    it('TC-R107: role????ƒ tab?´ë‹¤', () => {
      render(<Tab>Home</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('role', 'tab');
    });

    it('TC-C134: selected + disabled ?™ì‹œ true ??selected ?°ì„ ', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(
        <Tab selected disabled>
          Both
        </Tab>
      );
      const tab = screen.getByRole('tab');

      // selected ?°ì„ 
      expect(coreAttrs['data-state']).toBe('selected');
      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toBeDisabled();
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-R200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Tab onClick={handleClick}>Click me</Tab>);
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Tab onClick={handleClick} disabled>
          Disabled
        </Tab>
      );
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-R202: selected ?íƒœ?ì„œ onClick???¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Tab onClick={handleClick} selected>
          Selected
        </Tab>
      );
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R203: ?¬ëŸ¬ ë²??´ë¦­ ??ë§¤ë²ˆ ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Tab onClick={handleClick}>Click me</Tab>);
      const tab = screen.getByRole('tab');

      await user.click(tab);
      await user.click(tab);
      await user.click(tab);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R300: children???Œë”ë§ëœ??, () => {
      render(<Tab>Home</Tab>);
      expect(screen.getByRole('tab')).toHaveTextContent('Home');
    });

    it('TC-R302: className??ë³‘í•©?œë‹¤', () => {
      render(<Tab className="custom-class">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('custom-class');
    });

    it('TC-R303: type prop???ìš©?œë‹¤', () => {
      render(<Tab type="submit">Submit</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('type', 'submit');
    });

    it('TC-R304: type??ëª…ì‹œ?˜ì? ?Šìœ¼ë©?ê¸°ë³¸ ?™ì‘ (submit)', () => {
      // Tab?€ ê¸°ë³¸ type???¤ì •?˜ì? ?ŠìŒ (Buttonê³??¤ë¦„)
      // ëª…ì‹œ?ìœ¼ë¡?type="button"???„ë‹¬?´ì•¼ ??
      render(<Tab>Tab</Tab>);
      // type ?ì„±???†ìœ¼ë©?ë¸Œë¼?°ì? ê¸°ë³¸ê°?submit???ìš©??
      expect(screen.getByRole('tab')).not.toHaveAttribute('type');
    });

    it('TC-R305: aria-label???ìš©?œë‹¤', () => {
      render(<Tab aria-label="Close tab">X</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Close tab');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Tab className="custom">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('custom');
    });

    it('TC-O101: className ?¬ëŸ¬ ê°?ì¶”ê?', () => {
      render(<Tab className="a b c">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('a');
      expect(tab).toHaveClass('b');
      expect(tab).toHaveClass('c');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Tab data-testid="home-tab">Home</Tab>);
      expect(screen.getByTestId('home-tab')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?ˆìš©', () => {
      render(<Tab aria-label="Close">X</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Close');
    });

    it('TC-O142: aria-controls ?ˆìš©', () => {
      render(<Tab aria-controls="panel-1">Tab 1</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('aria-controls', 'panel-1');
    });

    it('TC-O160: disabled=true ëª…ì‹œ ?ˆìš©', () => {
      render(<Tab disabled>Disabled</Tab>);
      expect(screen.getByRole('tab')).toBeDisabled();
    });

    it('TC-O162: selected=true + disabled=true ??selected ?°ì„ ', () => {
      render(
        <Tab selected disabled>
          Both
        </Tab>
      );
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toBeDisabled();
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Tab id="my-tab">Tab</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('id', 'my-tab');
    });

    it('TC-O180: style prop ?„ë‹¬ ?ˆìš©', () => {
      render(<Tab style={{ marginTop: 8, backgroundColor: 'blue' }}>Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveStyle({ marginTop: '8px' });
      expect(tab).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Tab data-variant="custom" variant="filled">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Tab data-size="custom" size="lg">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O132: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Tab data-state="custom" selected>Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O133: ë³´í˜¸ ?ì„± data-full-width ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Tab data-full-width="custom" fullWidth={false}>Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).not.toHaveAttribute('data-full-width');
    });

    it('TC-O134: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Tab role="button">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('role', 'tab');
    });

    it('TC-O135: ë³´í˜¸ ?ì„± aria-selected ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Tab aria-selected="false" selected>Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-D100: type??ëª…ì‹œ?˜ì? ?Šìœ¼ë©??ì„±???†ë‹¤', () => {
      render(<Tab>Tab</Tab>);
      const tab = screen.getByRole('tab');

      // Tab?€ ê¸°ë³¸ type???¤ì •?˜ì? ?ŠìŒ (Buttonê³??¤ë¥´ê²?
      expect(tab).not.toHaveAttribute('type');
    });

    it('TC-D101: type="submit" ëª…ì‹œ ??submit?¼ë¡œ ?Œë”ë§?, () => {
      render(<Tab type="submit">Submit</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('type', 'submit');
    });

    it('TC-D102: type="button" ëª…ì‹œ ??button?¼ë¡œ ?Œë”ë§?, () => {
      render(<Tab type="button">Button</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('type', 'button');
    });
  });
});
