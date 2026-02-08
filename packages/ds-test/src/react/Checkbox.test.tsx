import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '@woosgem/ds-react';
import { Checkbox as CheckboxDef } from '@woosgem-dev/core';

describe('Checkbox', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({});

      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ size: 'lg' });

      render(<Checkbox size="lg" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: checked prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ checked: true });

      render(<Checkbox checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('TC-R103: indeterminate prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true });

      render(<Checkbox indeterminate />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('TC-R104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true });

      render(<Checkbox disabled />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-R105: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        size: 'sm' as const,
        checked: true,
        disabled: true,
      };
      const coreAttrs = CheckboxDef.mapPropsToAttrs(props);

      render(<Checkbox size="sm" checked disabled />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
    });

    it('TC-C130: disabled > indeterminate ?°ì„ ?œìœ„', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true, indeterminate: true });

      render(<Checkbox disabled indeterminate />);
      const checkbox = document.querySelector('.checkbox');

      expect(coreAttrs['data-state']).toBe('disabled');
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-C131: disabled > checked ?°ì„ ?œìœ„', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true, checked: true });

      render(<Checkbox disabled checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(coreAttrs['data-state']).toBe('disabled');
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-C132: indeterminate > checked ?°ì„ ?œìœ„', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true, checked: true });

      render(<Checkbox indeterminate checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(coreAttrs['data-state']).toBe('indeterminate');
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('TC-C133: ëª¨ë“  ?íƒœ true????disabled ?°ì„ ', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({
        disabled: true,
        indeterminate: true,
        checked: true,
      });

      render(<Checkbox disabled indeterminate checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(coreAttrs['data-state']).toBe('disabled');
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-C110: size: sm???ìš©?œë‹¤', () => {
      render(<Checkbox size="sm" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C111: size: mdê°€ ?ìš©?œë‹¤', () => {
      render(<Checkbox size="md" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'md');
    });

    it('TC-C112: size: lgê°€ ?ìš©?œë‹¤', () => {
      render(<Checkbox size="lg" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-R200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Checkbox onClick={handleClick} />);
      const checkbox = document.querySelector('.checkbox');

      await user.click(checkbox!);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled ?íƒœ?ì„œ??onClick???¸ì¶œ?œë‹¤ (div??disabled ë¯¸ì???', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Checkbox onClick={handleClick} disabled />);
      const checkbox = document.querySelector('.checkbox');

      await user.click(checkbox!);

      // div ?”ì†Œ???¤ì´?°ë¸Œ disabledë¥?ì§€?í•˜ì§€ ?Šìœ¼ë¯€ë¡??´ë¦­??ë°œìƒ
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R202: ?¬ëŸ¬ ë²??´ë¦­ ??ë§¤ë²ˆ ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Checkbox onClick={handleClick} />);
      const checkbox = document.querySelector('.checkbox');

      await user.click(checkbox!);
      await user.click(checkbox!);
      await user.click(checkbox!);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R300: children???Œë”ë§ëœ??, () => {
      render(<Checkbox>Label</Checkbox>);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveTextContent('Label');
    });

    it('TC-R301: JSX children???Œë”ë§ëœ??, () => {
      render(
        <Checkbox>
          <span data-testid="label">Custom Label</span>
        </Checkbox>
      );

      expect(screen.getByTestId('label')).toHaveTextContent('Custom Label');
    });

    it('TC-R302: className??ë³‘í•©?œë‹¤', () => {
      render(<Checkbox className="custom-class" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveClass('checkbox');
      expect(checkbox).toHaveClass('custom-class');
    });

    it('TC-R303: aria-label???ìš©?œë‹¤', () => {
      render(<Checkbox aria-label="Accept terms" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('aria-label', 'Accept terms');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Checkbox className="custom" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveClass('checkbox');
      expect(checkbox).toHaveClass('custom');
    });

    it('TC-O101: className ?¬ëŸ¬ ê°?ì¶”ê?', () => {
      render(<Checkbox className="a b c" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveClass('checkbox');
      expect(checkbox).toHaveClass('a');
      expect(checkbox).toHaveClass('b');
      expect(checkbox).toHaveClass('c');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<Checkbox style={{ marginTop: 8 }} />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(<Checkbox data-testid="terms" />);
      expect(screen.getByTestId('terms')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?ˆìš©', () => {
      render(<Checkbox aria-label="Accept terms" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('aria-label', 'Accept terms');
    });

    it('TC-O141: aria-describedby ?ˆìš©', () => {
      render(<Checkbox aria-describedby="desc" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('aria-describedby', 'desc');
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Checkbox id="my-checkbox" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('id', 'my-checkbox');
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Checkbox data-size="custom" size="lg" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Checkbox data-state="custom" checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: checked ê¸°ë³¸ê°’ì? false (unchecked)?´ë‹¤', () => {
      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    });

    it('TC-C012: indeterminate ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    });

    it('TC-C013: disabled ê¸°ë³¸ê°’ì? false?´ë‹¤', () => {
      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).not.toHaveAttribute('data-state', 'disabled');
    });
  });

  describe('?íƒœ ì¡°í•©', () => {
    it('checked: true????data-state??checked', () => {
      render(<Checkbox checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('checked: false????data-state??unchecked', () => {
      render(<Checkbox checked={false} />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    });

    it('indeterminate: true????data-state??indeterminate', () => {
      render(<Checkbox indeterminate />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('disabled: true????data-state??disabled', () => {
      render(<Checkbox disabled />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });
  });
});
