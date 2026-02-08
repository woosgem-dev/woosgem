import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '@woosgem/ds-vue';
import { Checkbox as CheckboxDef } from '@woosgem-dev/core';

describe('Checkbox', () => {
  describe('core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-V100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({});

      render(Checkbox, { attrs: { 'aria-label': 'Accept terms' } });
      const checkbox = screen.getByLabelText('Accept terms');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ size: 'lg' });

      render(Checkbox, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'Large checkbox' },
      });
      const checkbox = screen.getByLabelText('Large checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V102: checked prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ checked: true });

      render(Checkbox, {
        props: { checked: true },
        attrs: { 'aria-label': 'Checked checkbox' },
      });
      const checkbox = screen.getByLabelText('Checked checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('TC-V103: indeterminate prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true });

      render(Checkbox, {
        props: { indeterminate: true },
        attrs: { 'aria-label': 'Indeterminate checkbox' },
      });
      const checkbox = screen.getByLabelText('Indeterminate checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('TC-V104: disabled prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true });

      render(Checkbox, {
        props: { disabled: true },
        attrs: { 'aria-label': 'Disabled checkbox' },
      });
      const checkbox = screen.getByLabelText('Disabled checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-V105: ?íƒœ ?°ì„ ?œìœ„ - disabled > indeterminate', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true, indeterminate: true });

      render(Checkbox, {
        props: { disabled: true, indeterminate: true },
        attrs: { 'aria-label': 'Priority test' },
      });
      const checkbox = screen.getByLabelText('Priority test');

      expect(coreAttrs['data-state']).toBe('disabled');
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-V106: ?íƒœ ?°ì„ ?œìœ„ - disabled > checked', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true, checked: true });

      render(Checkbox, {
        props: { disabled: true, checked: true },
        attrs: { 'aria-label': 'Priority test' },
      });
      const checkbox = screen.getByLabelText('Priority test');

      expect(coreAttrs['data-state']).toBe('disabled');
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-V107: ?íƒœ ?°ì„ ?œìœ„ - indeterminate > checked', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true, checked: true });

      render(Checkbox, {
        props: { indeterminate: true, checked: true },
        attrs: { 'aria-label': 'Priority test' },
      });
      const checkbox = screen.getByLabelText('Priority test');

      expect(coreAttrs['data-state']).toBe('indeterminate');
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('TC-V108: size: sm??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ size: 'sm' });

      render(Checkbox, {
        props: { size: 'sm' },
        attrs: { 'aria-label': 'Small checkbox' },
      });
      const checkbox = screen.getByLabelText('Small checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V109: ë³µí•© propsê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const props = {
        size: 'lg' as const,
        checked: true,
      };
      const coreAttrs = CheckboxDef.mapPropsToAttrs(props);

      render(Checkbox, {
        props,
        attrs: { 'aria-label': 'Complex checkbox' },
      });
      const checkbox = screen.getByLabelText('Complex checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
    });

    it('TC-V110: unchecked ?íƒœê°€ core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ checked: false });

      render(Checkbox, {
        props: { checked: false },
        attrs: { 'aria-label': 'Unchecked checkbox' },
      });
      const checkbox = screen.getByLabelText('Unchecked checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-V200: onClick ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Checkbox, {
        attrs: { 'aria-label': 'Click me', onClick: handleClick },
      });
      const checkbox = screen.getByLabelText('Click me');

      await user.click(checkbox);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Note: Checkbox??divë¡??Œë”ë§ë˜ë¯€ë¡?disabled ?™ìž‘??buttonê³??¤ë¦„
    it('TC-V201: disabled ?íƒœ?ì„œ???´ë¦­ ?´ë²¤?¸ê? ë°œìƒ?œë‹¤ (div??disabled ë¯¸ì???', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Checkbox, {
        props: { disabled: true },
        attrs: { 'aria-label': 'Disabled', onClick: handleClick },
      });
      const checkbox = screen.getByLabelText('Disabled');

      await user.click(checkbox);

      // div ?”ì†Œ???¤ì´?°ë¸Œ disabledë¥?ì§€?í•˜ì§€ ?ŠìŒ
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Vue ?„ìš© props', () => {
    it('TC-V300: slot???Œë”ë§ëœ??, () => {
      render(Checkbox, {
        slots: { default: 'I agree' },
        attrs: { 'aria-label': 'Agreement' },
      });
      const checkbox = screen.getByLabelText('Agreement');

      expect(checkbox).toHaveTextContent('I agree');
    });

    it('TC-V301: classê°€ ë³‘í•©?œë‹¤', () => {
      render(Checkbox, {
        attrs: { class: 'custom-class', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveClass('checkbox');
      expect(checkbox).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label???ìš©?œë‹¤', () => {
      render(Checkbox, {
        attrs: { 'aria-label': 'Accept terms and conditions' },
      });
      expect(screen.getByLabelText('Accept terms and conditions')).toBeInTheDocument();
    });

    it('TC-V303: name ?ì„±???ìš©?œë‹¤', () => {
      render(Checkbox, {
        attrs: { name: 'terms', 'aria-label': 'Terms' },
      });
      expect(screen.getByLabelText('Terms')).toHaveAttribute('name', 'terms');
    });

    it('TC-V304: id ?ì„±???ìš©?œë‹¤', () => {
      render(Checkbox, {
        attrs: { id: 'terms-checkbox', 'aria-label': 'Terms' },
      });
      expect(screen.getByLabelText('Terms')).toHaveAttribute('id', 'terms-checkbox');
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: class ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(Checkbox, {
        attrs: { class: 'custom', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveClass('checkbox');
      expect(checkbox).toHaveClass('custom');
    });

    it('TC-O120: data-testid ì¶”ê? ?ˆìš©', () => {
      render(Checkbox, {
        attrs: { 'data-testid': 'terms-checkbox', 'aria-label': 'Terms' },
      });
      expect(screen.getByTestId('terms-checkbox')).toBeInTheDocument();
    });

    it('TC-O200: ë³´í˜¸ ?ì„± data-size ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Checkbox, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O201: ë³´í˜¸ ?ì„± data-state ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      render(Checkbox, {
        props: { checked: true },
        attrs: { 'data-state': 'custom', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('TC-O180: style ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Checkbox, {
        attrs: { style: 'margin-top: 8px;', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Checkbox, {
        attrs: { id: 'my-checkbox', 'aria-label': 'Checkbox' },
      });
      expect(screen.getByLabelText('Checkbox')).toHaveAttribute('id', 'my-checkbox');
    });

    it('TC-O140: aria-describedby ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(Checkbox, {
        attrs: { 'aria-describedby': 'terms-desc', 'aria-label': 'Checkbox' },
      });
      expect(screen.getByLabelText('Checkbox')).toHaveAttribute('aria-describedby', 'terms-desc');
    });
  });
});
