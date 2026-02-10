import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio, RadioGroup } from '@woosgem-dev/react';
import { Radio as RadioDef, RadioGroup as RadioGroupDef } from '@woosgem-dev/core';

describe('Radio', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({});

      render(<Radio>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(radio).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(radio).toHaveAttribute('aria-checked', String(coreAttrs['aria-checked']));
      expect(radio).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ size: 'lg' });

      render(<Radio size="lg">Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ color: 'success' });

      render(<Radio color="success">Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-R103: checked prop이 core 결과와 일치한다', () => {
      const coreAttrs = RadioDef.mapPropsToAttrs({ checked: true });

      render(<Radio checked>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('aria-checked', String(coreAttrs['aria-checked']));
      expect(radio).toHaveAttribute('data-state', coreAttrs['data-state']);
    });
  });

  describe('Size 변형', () => {
    it('TC-C110: size: sm가 적용된다', () => {
      render(<Radio size="sm">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C111: size: md가 적용된다', () => {
      render(<Radio size="md">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C112: size: lg가 적용된다', () => {
      render(<Radio size="lg">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Color 변형', () => {
    it('TC-C120: color: primary가 적용된다', () => {
      render(<Radio color="primary">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C121: color: secondary가 적용된다', () => {
      render(<Radio color="secondary">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C122: color: success가 적용된다', () => {
      render(<Radio color="success">Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-color', 'success');
    });
  });

  describe('상태 변경', () => {
    it('TC-S100: checked 태가 적용된다', () => {
      render(<Radio checked>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-state', 'checked');
      expect(radio).toHaveAttribute('aria-checked', 'true');
    });

    it('TC-S101: disabled 태가 적용된다', () => {
      render(<Radio disabled>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-state', 'disabled');
      expect(radio).toBeDisabled();
    });

    it('TC-S102: checked + disabled 태가 적용된다', () => {
      render(<Radio checked disabled>Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('data-state', 'checked-disabled');
      expect(radio).toHaveAttribute('aria-checked', 'true');
      expect(radio).toBeDisabled();
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="radio"가 적용된다', () => {
      render(<Radio>Option</Radio>);
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('TC-A101: aria-checked가 checked 태반영다', () => {
      render(<Radio checked={false}>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'false');
    });

    it('TC-A102: aria-checked가 true반영다', () => {
      render(<Radio checked>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값 md다', () => {
      render(<Radio>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: color 기본값 primary다', () => {
      render(<Radio>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: checked 기본값 false다', () => {
      render(<Radio>Option</Radio>);
      expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-O150: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Radio onClick={handleClick}>Option</Radio>);
      const radio = screen.getByRole('radio');

      await user.click(radio);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-O151: disabled 태서 onClick출 는', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Radio disabled onClick={handleClick}>Option</Radio>);
      const radio = screen.getByRole('radio');

      await user.click(radio);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Radio className="custom-radio">Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveClass('radio');
      expect(radio).toHaveClass('custom-radio');
    });

    it('TC-O130: 보호 성 role 버이차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Radio role="checkbox">Option</Radio>);
      const radio = screen.getByRole('radio');

      expect(radio).toHaveAttribute('role', 'radio');
    });
  });
});

describe('RadioGroup', () => {
  describe('Core 일치 검증', () => {
    it('TC-R200: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
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

    it('TC-R201: orientation prop이 core 결과와 일치한다', () => {
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

  describe('접근성', () => {
    it('TC-A200: role="radiogroup"가 적용된다', () => {
      render(
        <RadioGroup>
          <Radio value="a">A</Radio>
        </RadioGroup>
      );
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('TC-A201: disabled aria-disabled가 적용된다', () => {
      render(
        <RadioGroup disabled>
          <Radio value="a">A</Radio>
        </RadioGroup>
      );
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-C200: orientation 기본값 vertical다', () => {
      render(
        <RadioGroup>
          <Radio value="a">A</Radio>
        </RadioGroup>
      );
      expect(screen.getByRole('radiogroup')).toHaveAttribute('data-orientation', 'vertical');
    });
  });
});
