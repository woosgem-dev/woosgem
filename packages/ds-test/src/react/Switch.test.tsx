import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '@woosgem/ds-react';
import { Switch as SwitchDef } from '@woosgem-dev/core';

describe('Switch', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({});

      render(<Switch />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(switchEl).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(switchEl).toHaveAttribute('aria-checked', String(coreAttrs['aria-checked']));
      expect(switchEl).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ size: 'lg' });

      render(<Switch size="lg" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(switchEl).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: color prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ color: 'success' });

      render(<Switch color="success" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(switchEl).toHaveAttribute('data-color', 'success');
    });

    it('TC-R103: checked prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ checked: true });

      render(<Switch checked />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('aria-checked', String(coreAttrs['aria-checked']));
      expect(switchEl).toHaveAttribute('data-state', coreAttrs['data-state']);
    });

    it('TC-R104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ disabled: true });

      render(<Switch disabled />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(switchEl).toBeDisabled();
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C110: size: sm???ìš©?œë‹¤', () => {
      render(<Switch size="sm" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C111: size: mdê°€ ?ìš©?œë‹¤', () => {
      render(<Switch size="md" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C112: size: lgê°€ ?ìš©?œë‹¤', () => {
      render(<Switch size="lg" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Color ë³€??, () => {
    it('TC-C120: color: primaryê°€ ?ìš©?œë‹¤', () => {
      render(<Switch color="primary" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C121: color: secondaryê°€ ?ìš©?œë‹¤', () => {
      render(<Switch color="secondary" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C122: color: successê°€ ?ìš©?œë‹¤', () => {
      render(<Switch color="success" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-color', 'success');
    });
  });

  describe('?íƒœ ë³€??, () => {
    it('TC-S100: checked ?íƒœê°€ ?ìš©?œë‹¤', () => {
      render(<Switch checked />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-state', 'checked');
      expect(switchEl).toHaveAttribute('aria-checked', 'true');
    });

    it('TC-S101: disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      render(<Switch disabled />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-state', 'disabled');
      expect(switchEl).toBeDisabled();
    });

    it('TC-S102: checked + disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      render(<Switch checked disabled />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-state', 'checked-disabled');
      expect(switchEl).toHaveAttribute('aria-checked', 'true');
      expect(switchEl).toBeDisabled();
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="switch"ê°€ ??ƒ ?ìš©?œë‹¤', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('TC-A101: aria-checkedê°€ checked ?íƒœë¥?ë°˜ì˜?œë‹¤', () => {
      render(<Switch checked={false} />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });

    it('TC-A102: aria-checkedê°€ true????ë°˜ì˜?œë‹¤', () => {
      render(<Switch checked />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: color ê¸°ë³¸ê°’ì? primary?´ë‹¤', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: checked ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });

    it('TC-C013: disabled ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).not.toBeDisabled();
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-O150: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Switch onClick={handleClick} />);
      const switchEl = screen.getByRole('switch');

      await user.click(switchEl);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-O151: disabled ?íƒœ?ì„œ onClick???¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Switch disabled onClick={handleClick} />);
      const switchEl = screen.getByRole('switch');

      await user.click(switchEl);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Switch className="custom-switch" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveClass('switch');
      expect(switchEl).toHaveClass('custom-switch');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<Switch style={{ marginTop: 16 }} />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Switch data-testid="my-switch" />);
      expect(screen.getByTestId('my-switch')).toBeInTheDocument();
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Switch data-size="custom" size="lg" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± role ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Switch role="checkbox" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('role', 'switch');
    });

    it('TC-O160: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Switch id="main-switch" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('id', 'main-switch');
    });

    it('TC-O161: aria-label ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Switch aria-label="Toggle dark mode" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('aria-label', 'Toggle dark mode');
    });
  });
});
