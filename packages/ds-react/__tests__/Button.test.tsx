import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@woosgem-dev/react';
import { Button as ButtonDef } from '@woosgem-dev/core';

describe('Button', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({});

      render(<Button>Click me</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ variant: 'outline' });

      render(<Button variant="outline">Outline</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-R102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ color: 'danger' });

      render(<Button color="danger">Danger</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-R103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ size: 'lg' });

      render(<Button size="lg">Large</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ disabled: true });

      render(<Button disabled>Disabled</Button>);
      const btn = screen.getByRole('button');

      // Core는 data-state='disabled' 적용
      expect(btn).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(btn).toHaveAttribute('data-state', 'disabled');
      expect(btn).toBeDisabled();
    });

    it('TC-R105: loading prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ loading: true });

      render(<Button loading>Loading</Button>);
      const btn = screen.getByRole('button');

      // Core는 data-state='loading' 적용
      expect(btn).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(btn).toHaveAttribute('data-state', 'loading');
      // loading 상태에서는 disabled 속성이 설정됨
      expect(btn).toBeDisabled();
    });

    it('TC-R106: fullWidth prop이 core 결과와 일치한다', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ fullWidth: true });

      render(<Button fullWidth>Full Width</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-R107: 복합 props가 core 결과와 일치한다', () => {
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

    it('TC-C144: loading + disabled 동시 true 시 loading 우선', () => {
      const coreAttrs = ButtonDef.mapPropsToAttrs({ loading: true, disabled: true });

      render(<Button loading disabled>Both</Button>);
      const btn = screen.getByRole('button');

      // loading이 우선순위가 높음
      expect(coreAttrs['data-state']).toBe('loading');
      expect(btn).toHaveAttribute('data-state', 'loading');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-R200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Button onClick={handleClick}>Click me</Button>);
      const btn = screen.getByRole('button');

      await user.click(btn);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled 상태에서 onClick이 호출되지 않는다', async () => {
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

    it('TC-R202: loading 상태에서 onClick이 호출되지 않는다', async () => {
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

    it('TC-R203: 여러 번 클릭 시 매번 호출된다', async () => {
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

  describe('React 전용 props', () => {
    it('TC-R300: children이 렌더링된다', () => {
      render(<Button>Hello World</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Hello World');
    });

    it('TC-R302: className이 병합된다', () => {
      render(<Button className="custom-class">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('wg-btn');
      expect(btn).toHaveClass('custom-class');
    });

    it('TC-R303: type prop이 적용된다', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('TC-R306: aria-label이 적용된다', () => {
      render(<Button aria-label="Close dialog">X</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Button className="custom">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('wg-btn');
      expect(btn).toHaveClass('custom');
    });

    it('TC-O101: className 여러 개 추가', () => {
      render(<Button className="a b c">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveClass('wg-btn');
      expect(btn).toHaveClass('a');
      expect(btn).toHaveClass('b');
      expect(btn).toHaveClass('c');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Button data-testid="submit-btn">Submit</Button>);
      expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 적용', () => {
      render(<Button aria-label="Close">X</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
    });

    it('TC-O160: disabled=true 명시 적용', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('TC-O162: loading=true + disabled=false 시 disabled=true (loading 우선)', () => {
      render(<Button loading disabled={false}>Loading</Button>);
      const btn = screen.getByRole('button');

      // loading이 true면 무조건 disabled
      expect(btn).toBeDisabled();
      expect(btn).toHaveAttribute('data-state', 'loading');
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(<Button id="my-btn">Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-btn');
    });

    it('TC-O180: style prop 전달 적용', () => {
      render(<Button style={{ marginTop: 8, backgroundColor: 'blue' }}>Button</Button>);
      const btn = screen.getByRole('button');

      // jsdom은 정상적 rgb 형식으로 변환
      expect(btn).toHaveStyle({ marginTop: '8px' });
      expect(btn).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Button data-variant="custom" variant="outline">Button</Button>);
      const btn = screen.getByRole('button');

      // 사용자의 data-variant="custom"은 무시하고 variant="outline"이 적용됨
      expect(btn).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Button data-color="custom" color="danger">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Button data-size="custom" size="lg">Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O203: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Button data-state="custom" disabled>Button</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-O204: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Button data-full-width="custom" fullWidth={false}>Button</Button>);
      const btn = screen.getByRole('button');

      // fullWidth=false이면 data-full-width가 없어야 함
      expect(btn).not.toHaveAttribute('data-full-width');
    });
  });

  describe('기본값', () => {
    it('TC-D100: type 기본값은 "button"이다', () => {
      render(<Button>Button</Button>);
      const btn = screen.getByRole('button');

      // form 안에서 의도치 않은 submit을 방지
      expect(btn).toHaveAttribute('type', 'button');
    });

    it('TC-D101: type="submit" 명시 시 submit으로 렌더링', () => {
      render(<Button type="submit">Submit</Button>);
      const btn = screen.getByRole('button');

      expect(btn).toHaveAttribute('type', 'submit');
    });
  });
});
