import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '@woosgem-dev/react';
import { Checkbox as CheckboxDef } from '@woosgem-dev/core';

describe('Checkbox', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({});

      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ size: 'lg' });

      render(<Checkbox size="lg" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: checked prop이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ checked: true });

      render(<Checkbox checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('TC-R103: indeterminate prop이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true });

      render(<Checkbox indeterminate />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('TC-R104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true });

      render(<Checkbox disabled />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-R105: 복합 props가 core 결과와 일치한다', () => {
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

    it('TC-C130: disabled > indeterminate 우선순위', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true, indeterminate: true });

      render(<Checkbox disabled indeterminate />);
      const checkbox = document.querySelector('.checkbox');

      expect(coreAttrs['data-state']).toBe('disabled');
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-C131: disabled > checked 우선순위', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true, checked: true });

      render(<Checkbox disabled checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(coreAttrs['data-state']).toBe('disabled');
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-C132: indeterminate > checked 우선순위', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true, checked: true });

      render(<Checkbox indeterminate checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(coreAttrs['data-state']).toBe('indeterminate');
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('TC-C133: 모든 상태 true 시 disabled 우선', () => {
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

    it('TC-C110: size: sm가 적용된다', () => {
      render(<Checkbox size="sm" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C111: size: md가 적용된다', () => {
      render(<Checkbox size="md" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'md');
    });

    it('TC-C112: size: lg가 적용된다', () => {
      render(<Checkbox size="lg" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-R200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Checkbox onClick={handleClick} />);
      const checkbox = document.querySelector('.checkbox');

      await user.click(checkbox!);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled 상태에서 onClick 호출된다 (div는 disabled 미지원)', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Checkbox onClick={handleClick} disabled />);
      const checkbox = document.querySelector('.checkbox');

      await user.click(checkbox!);

      // div 요소는 네이티브 disabled를 지원하지 않으므로 클릭이 발생
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R202: 여러 번 클릭 시 매번 호출된다', async () => {
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

  describe('React 전용 props', () => {
    it('TC-R300: children이 렌더링된다', () => {
      render(<Checkbox>Label</Checkbox>);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveTextContent('Label');
    });

    it('TC-R301: children이 렌더링된다', () => {
      render(
        <Checkbox>
          <span data-testid="label">Custom Label</span>
        </Checkbox>
      );

      expect(screen.getByTestId('label')).toHaveTextContent('Custom Label');
    });

    it('TC-R302: className이 병합된다', () => {
      render(<Checkbox className="custom-class" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveClass('checkbox');
      expect(checkbox).toHaveClass('custom-class');
    });

    it('TC-R303: aria-label이 적용된다', () => {
      render(<Checkbox aria-label="Accept terms" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('aria-label', 'Accept terms');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Checkbox className="custom" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveClass('checkbox');
      expect(checkbox).toHaveClass('custom');
    });

    it('TC-O101: className 여러 개 추가', () => {
      render(<Checkbox className="a b c" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveClass('checkbox');
      expect(checkbox).toHaveClass('a');
      expect(checkbox).toHaveClass('b');
      expect(checkbox).toHaveClass('c');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<Checkbox style={{ marginTop: 8 }} />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Checkbox data-testid="terms" />);
      expect(screen.getByTestId('terms')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 적용', () => {
      render(<Checkbox aria-label="Accept terms" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('aria-label', 'Accept terms');
    });

    it('TC-O141: aria-describedby 적용', () => {
      render(<Checkbox aria-describedby="desc" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('aria-describedby', 'desc');
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(<Checkbox id="my-checkbox" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('id', 'my-checkbox');
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Checkbox data-size="custom" size="lg" />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Checkbox data-state="custom" checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값 md이다', () => {
      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: checked 기본값 false (unchecked)이다', () => {
      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    });

    it('TC-C012: indeterminate 기본값 false이다', () => {
      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    });

    it('TC-C013: disabled 기본값 false이다', () => {
      render(<Checkbox />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).not.toHaveAttribute('data-state', 'disabled');
    });
  });

  describe('상태 조합', () => {
    it('checked: true이면 data-state가 checked이다', () => {
      render(<Checkbox checked />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('checked: false이면 data-state가 unchecked이다', () => {
      render(<Checkbox checked={false} />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    });

    it('indeterminate: true이면 data-state가 indeterminate이다', () => {
      render(<Checkbox indeterminate />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('disabled: true이면 data-state가 disabled이다', () => {
      render(<Checkbox disabled />);
      const checkbox = document.querySelector('.checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });
  });
});
