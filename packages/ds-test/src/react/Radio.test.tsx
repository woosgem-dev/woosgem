import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio, RadioGroup } from '@woosgem/ds-react';
import { Radio as RadioDef, RadioGroup as RadioGroupDef } from '@woosgem-dev/core';

describe('Radio', () => {
  describe('Core ?ºÏπò Í≤ÄÏ¶?, () => {
    it('TC-R100: Í∏∞Î≥∏ propsÍ∞Ä core mapPropsToAttrs Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({});

      render(<Radio>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(radio).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(radio).toHaveAttribute('aria-checked', String(coreAttrs['aria-checked']));
      expect(radio).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ size: 'lg' });

      render(<Radio size="lg">Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R102: color prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ color: 'success' });

      render(<Radio color="success">Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-R103: checked prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ checked: true });

      render(<Radio checked>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('aria-checked', String(coreAttrs['aria-checked']));
      expect(radio).toHaveAttribute('data-state', coreAttrs['data-state']);
    });
  });

  describe('Size Î≥Ä??, () => {
    it('TC-C110: size: sm???ÅÏö©?úÎã§', () => {
      render(<Radio size="sm">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C111: size: mdÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Radio size="md">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C112: size: lgÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Radio size="lg">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Color Î≥Ä??, () => {
    it('TC-C120: color: primaryÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Radio color="primary">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C121: color: secondaryÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Radio color="secondary">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C122: color: successÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Radio color="success">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-color', 'success');
    });
  });

  describe('?ÅÌÉú Î≥Ä??, () => {
    it('TC-S100: checked ?ÅÌÉúÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Radio checked>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-state', 'checked');
      expect(radio).toHaveAttribute('aria-checked', 'true');
    });

    it('TC-S101: disabled ?ÅÌÉúÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Radio disabled>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-state', 'disabled');
      expect(radio).toBeDisabled();
    });

    it('TC-S102: checked + disabled ?ÅÌÉúÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Radio checked disabled>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-state', 'checked-disabled');
      expect(radio).toHaveAttribute('aria-checked', 'true');
      expect(radio).toBeDisabled();
    });
  });

  describe('?ëÍ∑º??, () => {
    it('TC-A100: role="radio"Í∞Ä ??ÉÅ ?ÅÏö©?úÎã§', () => {
      render(<Radio>Option</Radio>);
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('TC-A101: aria-checkedÍ∞Ä checked ?ÅÌÉúÎ•?Î∞òÏòÅ?úÎã§', () => {
      render(<Radio checked={false}>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'false');
    });

    it('TC-A102: aria-checkedÍ∞Ä true????Î∞òÏòÅ?úÎã§', () => {
      render(<Radio checked>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('Í∏∞Î≥∏Í∞?, () => {
    it('TC-C010: size Í∏∞Î≥∏Í∞íÏ? md?¥Îã§', () => {
      render(<Radio>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: color Í∏∞Î≥∏Í∞íÏ? primary?¥Îã§', () => {
      render(<Radio>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: checked Í∏∞Î≥∏Í∞íÏ? false?¥Îã§', () => {
      render(<Radio>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('?¥Î≤§???∏Îì§??, () => {
    it('TC-O150: onClick ?∏Îì§?¨Í? ?∏Ï∂ú?úÎã§', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Radio onClick={handleClick}>Option</Radio>);
      const radio = screen.getByRole('radio');

      await user.click(radio);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-O151: disabled ?ÅÌÉú?êÏÑú onClick???∏Ï∂ú?òÏ? ?äÎäî??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Radio disabled onClick={handleClick}>Option</Radio>);
      const radio = screen.getByRole('radio');

      await user.click(radio);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Ïª§Ïä§?∞Îßà?¥Ï¶à ?§Î≤Ñ?ºÏù¥??, () => {
    it('TC-O100: className Ï∂îÍ? ??Î≥ëÌï©?úÎã§', () => {
      render(<Radio className="custom-radio">Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveClass('radio');
      expect(radio).toHaveClass('custom-radio');
    });

    it('TC-O130: Î≥¥Ìò∏ ?çÏÑ± role ?§Î≤Ñ?ºÏù¥??Ï∞®Îã®', () => {
      // @ts-expect-error - Î≥¥Ìò∏ ?çÏÑ± ?§Î≤Ñ?ºÏù¥???úÎèÑ
      render(<Radio role="checkbox">Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('role', 'radio');
    });
  });
});

describe('RadioGroup', () => {
  describe('Core ?ºÏπò Í≤ÄÏ¶?, () => {
    it('TC-R200: Í∏∞Î≥∏ propsÍ∞Ä core mapPropsToAttrs Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = RadioGroupDef.mapPropsToAttrs({});

      render(
        <RadioGroup>
          <Radio value="a">A</Radio>
        </RadioGroup>
      );
      const group = screen.getByRole('radiogroup');

      expect(group).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(group).toHaveClass(coreAttrs.class);
    });

    it('TC-R201: orientation prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = RadioGroupDef.mapPropsToAttrs({ orientation: 'horizontal' });

      render(
        <RadioGroup orientation="horizontal">
          <Radio value="a">A</Radio>
        </RadioGroup>
      );
      const group = screen.getByRole('radiogroup');

      expect(group).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
    });
  });

  describe('?ëÍ∑º??, () => {
    it('TC-A200: role="radiogroup"Í∞Ä ??ÉÅ ?ÅÏö©?úÎã§', () => {
      render(
        <RadioGroup>
          <Radio value="a">A</Radio>
        </RadioGroup>
      );
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('TC-A201: disabled ??aria-disabledÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(
        <RadioGroup disabled>
          <Radio value="a">A</Radio>
        </RadioGroup>
      );
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Í∏∞Î≥∏Í∞?, () => {
    it('TC-C200: orientation Í∏∞Î≥∏Í∞íÏ? vertical?¥Îã§', () => {
      render(
        <RadioGroup>
          <Radio value="a">A</Radio>
        </RadioGroup>
      );
      expect(screen.getByRole('radiogroup')).toHaveAttribute('data-orientation', 'vertical');
    });
  });
});
