import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tab } from '@woosgem-dev/react';
import { Tab as TabDef } from '@woosgem-dev/core';

describe('Tab', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({});

      render(<Tab>Home</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Tab variant="filled">Filled</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(tab).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-R102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ size: 'lg' });

      render(<Tab size="lg">Large</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(tab).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R103: selected prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true });

      render(<Tab selected>Selected</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-R104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ disabled: true });

      render(<Tab disabled>Disabled</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(tab).toHaveAttribute('data-state', 'disabled');
      expect(tab).toBeDisabled();
    });

    it('TC-R105: fullWidth prop이 core 결과와 일치한다', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ fullWidth: true });

      render(<Tab fullWidth>Full Width</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-R106: 복합 props가 core 결과와 일치한다', () => {
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

    it('TC-R107: role tab다', () => {
      render(<Tab>Home</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('role', 'tab');
    });

    it('TC-C134: selected + disabled 시 true selected 선', () => {
      const coreAttrs = TabDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(
        <Tab selected disabled>
          Both
        </Tab>
      );
      const tab = screen.getByRole('tab');

      // selected ?선
      expect(coreAttrs['data-state']).toBe('selected');
      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toBeDisabled();
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-R200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Tab onClick={handleClick}>Click me</Tab>);
      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled 태서 onClick출 는', async () => {
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

    it('TC-R202: selected 태서 onClick출다', async () => {
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

    it('TC-R203: 여러 번 클릭 시 매번 호출된다', async () => {
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

  describe('React 전용 props', () => {
    it('TC-R300: children이 렌더링된다', () => {
      render(<Tab>Home</Tab>);
      expect(screen.getByRole('tab')).toHaveTextContent('Home');
    });

    it('TC-R302: className이 병합된다', () => {
      render(<Tab className="custom-class">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('custom-class');
    });

    it('TC-R303: type prop이 적용된다', () => {
      render(<Tab type="submit">Submit</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('type', 'submit');
    });

    it('TC-R304: type명시 으기본 작 (submit)', () => {
      // Tab? 기본 type???정?? ?음 (Button??름)
      // 명시?으?type="button"???달?야 ??
      render(<Tab>Tab</Tab>);
      // type ?성???으?브라?? 기본?submit???용??
      expect(screen.getByRole('tab')).not.toHaveAttribute('type');
    });

    it('TC-R305: aria-label이 적용된다', () => {
      render(<Tab aria-label="Close tab">X</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Close tab');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Tab className="custom">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('custom');
    });

    it('TC-O101: className 여러 개 추가', () => {
      render(<Tab className="a b c">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveClass('tab');
      expect(tab).toHaveClass('a');
      expect(tab).toHaveClass('b');
      expect(tab).toHaveClass('c');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Tab data-testid="home-tab">Home</Tab>);
      expect(screen.getByTestId('home-tab')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 적용', () => {
      render(<Tab aria-label="Close">X</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Close');
    });

    it('TC-O142: aria-controls 용', () => {
      render(<Tab aria-controls="panel-1">Tab 1</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('aria-controls', 'panel-1');
    });

    it('TC-O160: disabled=true 명시 적용', () => {
      render(<Tab disabled>Disabled</Tab>);
      expect(screen.getByRole('tab')).toBeDisabled();
    });

    it('TC-O162: selected=true + disabled=true selected 선', () => {
      render(
        <Tab selected disabled>
          Both
        </Tab>
      );
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', 'selected');
      expect(tab).toBeDisabled();
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(<Tab id="my-tab">Tab</Tab>);
      expect(screen.getByRole('tab')).toHaveAttribute('id', 'my-tab');
    });

    it('TC-O180: style prop 전달 적용', () => {
      render(<Tab style={{ marginTop: 8, backgroundColor: 'blue' }}>Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveStyle({ marginTop: '8px' });
      expect(tab).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Tab data-variant="custom" variant="filled">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Tab data-size="custom" size="lg">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O132: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Tab data-state="custom" selected>Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O133: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Tab data-full-width="custom" fullWidth={false}>Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).not.toHaveAttribute('data-full-width');
    });

    it('TC-O134: 보호 성 role 버이차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Tab role="button">Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('role', 'tab');
    });

    it('TC-O135: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Tab aria-selected="false" selected>Tab</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-D100: type명시 으성다', () => {
      render(<Tab>Tab</Tab>);
      const tab = screen.getByRole('tab');

      // Tab? 기본 type???정?? ?음 (Button??르?
      expect(tab).not.toHaveAttribute('type');
    });

    it('TC-D101: type="submit" 명시 시 submit으로 렌더링', () => {
      render(<Tab type="submit">Submit</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('type', 'submit');
    });

    it('TC-D102: type="button" 명시 button로 더', () => {
      render(<Tab type="button">Button</Tab>);
      const tab = screen.getByRole('tab');

      expect(tab).toHaveAttribute('type', 'button');
    });
  });
});
