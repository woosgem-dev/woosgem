import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '@woosgem-dev/react';
import { Switch as SwitchDef } from '@woosgem-dev/core';

describe('Switch', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({});

      render(<Switch />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(switchEl).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(switchEl).toHaveAttribute('aria-checked', String(coreAttrs['aria-checked']));
      expect(switchEl).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ size: 'lg' });

      render(<Switch size="lg" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(switchEl).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ color: 'success' });

      render(<Switch color="success" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(switchEl).toHaveAttribute('data-color', 'success');
    });

    it('TC-R103: checked prop이 core 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ checked: true });

      render(<Switch checked />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('aria-checked', String(coreAttrs['aria-checked']));
      expect(switchEl).toHaveAttribute('data-state', coreAttrs['data-state']);
    });

    it('TC-R104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ disabled: true });

      render(<Switch disabled />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(switchEl).toBeDisabled();
    });
  });

  describe('Size 변형', () => {
    it('TC-C110: size: sm가 적용된다', () => {
      render(<Switch size="sm" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C111: size: md가 적용된다', () => {
      render(<Switch size="md" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C112: size: lg가 적용된다', () => {
      render(<Switch size="lg" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Color 변형', () => {
    it('TC-C120: color: primary가 적용된다', () => {
      render(<Switch color="primary" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C121: color: secondary가 적용된다', () => {
      render(<Switch color="secondary" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C122: color: success가 적용된다', () => {
      render(<Switch color="success" />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-color', 'success');
    });
  });

  describe('상태 변경', () => {
    it('TC-S100: checked 상태가 적용된다', () => {
      render(<Switch checked />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-state', 'checked');
      expect(switchEl).toHaveAttribute('aria-checked', 'true');
    });

    it('TC-S101: disabled 상태가 적용된다', () => {
      render(<Switch disabled />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-state', 'disabled');
      expect(switchEl).toBeDisabled();
    });

    it('TC-S102: checked + disabled 상태가 적용된다', () => {
      render(<Switch checked disabled />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-state', 'checked-disabled');
      expect(switchEl).toHaveAttribute('aria-checked', 'true');
      expect(switchEl).toBeDisabled();
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="switch"가 적용된다', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('TC-A101: aria-checked가 checked 상태를 반영한다', () => {
      render(<Switch checked={false} />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });

    it('TC-A102: aria-checked가 true를 반영한다', () => {
      render(<Switch checked />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값 md이다', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: color 기본값 primary이다', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: checked 기본값 false이다', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });

    it('TC-C013: disabled 기본값 false이다', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).not.toBeDisabled();
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-O150: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Switch onClick={handleClick} />);
      const switchEl = screen.getByRole('switch');

      await user.click(switchEl);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-O151: disabled 상태에서 onClick 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Switch disabled onClick={handleClick} />);
      const switchEl = screen.getByRole('switch');

      await user.click(switchEl);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Switch className="custom-switch" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveClass('switch');
      expect(switchEl).toHaveClass('custom-switch');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<Switch style={{ marginTop: 16 }} />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Switch data-testid="my-switch" />);
      expect(screen.getByTestId('my-switch')).toBeInTheDocument();
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Switch data-size="custom" size="lg" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: 보호 속성 role 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Switch role="checkbox" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('role', 'switch');
    });

    it('TC-O160: id 속성 전달 적용', () => {
      render(<Switch id="main-switch" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('id', 'main-switch');
    });

    it('TC-O161: aria-label 적용', () => {
      render(<Switch aria-label="Toggle dark mode" />);
      const switchEl = screen.getByRole('switch');

      expect(switchEl).toHaveAttribute('aria-label', 'Toggle dark mode');
    });
  });
});
