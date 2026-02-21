import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '@woosgem-dev/vue';
import { Checkbox as CheckboxDef } from '@woosgem-dev/core';

describe('Checkbox', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({});

      render(Checkbox, { attrs: { 'aria-label': 'Accept terms' } });
      const checkbox = screen.getByLabelText('Accept terms');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ size: 'lg' });

      render(Checkbox, {
        props: { size: 'lg' },
        attrs: { 'aria-label': 'Large checkbox' },
      });
      const checkbox = screen.getByLabelText('Large checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V102: checked prop이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ checked: true });

      render(Checkbox, {
        props: { checked: true },
        attrs: { 'aria-label': 'Checked checkbox' },
      });
      const checkbox = screen.getByLabelText('Checked checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('TC-V103: indeterminate prop이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true });

      render(Checkbox, {
        props: { indeterminate: true },
        attrs: { 'aria-label': 'Indeterminate checkbox' },
      });
      const checkbox = screen.getByLabelText('Indeterminate checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('TC-V104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true });

      render(Checkbox, {
        props: { disabled: true },
        attrs: { 'aria-label': 'Disabled checkbox' },
      });
      const checkbox = screen.getByLabelText('Disabled checkbox');

      expect(checkbox).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(checkbox).toHaveAttribute('data-state', 'disabled');
    });

    it('TC-V105: 상태 우선순위 - disabled > indeterminate', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true, indeterminate: true });

      render(Checkbox, {
        props: { disabled: true, indeterminate: true },
        attrs: { 'aria-label': 'Priority test' },
      });
      const checkbox = screen.getByLabelText('Priority test');

      expect(coreAttrs['data-state']).toBe('indeterminate-disabled');
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate-disabled');
    });

    it('TC-V106: 상태 우선순위 - disabled > checked', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ disabled: true, checked: true });

      render(Checkbox, {
        props: { disabled: true, checked: true },
        attrs: { 'aria-label': 'Priority test' },
      });
      const checkbox = screen.getByLabelText('Priority test');

      expect(coreAttrs['data-state']).toBe('checked-disabled');
      expect(checkbox).toHaveAttribute('data-state', 'checked-disabled');
    });

    it('TC-V107: 상태 우선순위 - indeterminate > checked', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ indeterminate: true, checked: true });

      render(Checkbox, {
        props: { indeterminate: true, checked: true },
        attrs: { 'aria-label': 'Priority test' },
      });
      const checkbox = screen.getByLabelText('Priority test');

      expect(coreAttrs['data-state']).toBe('indeterminate');
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('TC-V108: size: sm이 core 결과와 일치한다', () => {
      const coreAttrs = CheckboxDef.mapPropsToAttrs({ size: 'sm' });

      render(Checkbox, {
        props: { size: 'sm' },
        attrs: { 'aria-label': 'Small checkbox' },
      });
      const checkbox = screen.getByLabelText('Small checkbox');

      expect(checkbox).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V109: 복합 props가 core 결과와 일치한다', () => {
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

    it('TC-V110: unchecked 상태가 core 결과와 일치한다', () => {
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

  describe('이벤트 핸들러', () => {
    it('TC-V200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Checkbox, {
        attrs: { 'aria-label': 'Click me', onClick: handleClick },
      });
      const checkbox = screen.getByLabelText('Click me');

      await user.click(checkbox);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Note: Checkbox는 div로 렌더링되므로 disabled 동작이 button과 다름
    it('TC-V201: disabled 상태에서 클릭 이벤트 발생한다 (div는 disabled 미지원)', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(Checkbox, {
        props: { disabled: true },
        attrs: { 'aria-label': 'Disabled', onClick: handleClick },
      });
      const checkbox = screen.getByLabelText('Disabled');

      await user.click(checkbox);

      // div 요소는 네이티브 disabled를 지원하지 않음
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(Checkbox, {
        slots: { default: 'I agree' },
        attrs: { 'aria-label': 'Agreement' },
      });
      const checkbox = screen.getByLabelText('Agreement');

      expect(checkbox).toHaveTextContent('I agree');
    });

    it('TC-V301: class가 병합된다', () => {
      render(Checkbox, {
        attrs: { class: 'custom-class', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveClass('wg-checkbox');
      expect(checkbox).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label이 적용된다', () => {
      render(Checkbox, {
        attrs: { 'aria-label': 'Accept terms and conditions' },
      });
      expect(screen.getByLabelText('Accept terms and conditions')).toBeInTheDocument();
    });

    it('TC-V303: name 속성이 적용된다', () => {
      render(Checkbox, {
        attrs: { name: 'terms', 'aria-label': 'Terms' },
      });
      expect(screen.getByLabelText('Terms')).toHaveAttribute('name', 'terms');
    });

    it('TC-V304: id 속성이 적용된다', () => {
      render(Checkbox, {
        attrs: { id: 'terms-checkbox', 'aria-label': 'Terms' },
      });
      expect(screen.getByLabelText('Terms')).toHaveAttribute('id', 'terms-checkbox');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(Checkbox, {
        attrs: { class: 'custom', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveClass('wg-checkbox');
      expect(checkbox).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(Checkbox, {
        attrs: { 'data-testid': 'terms-checkbox', 'aria-label': 'Terms' },
      });
      expect(screen.getByTestId('terms-checkbox')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      render(Checkbox, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      render(Checkbox, {
        props: { checked: true },
        attrs: { 'data-state': 'custom', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('TC-O180: style 속성 전달 적용', () => {
      render(Checkbox, {
        attrs: { style: 'margin-top: 8px;', 'aria-label': 'Checkbox' },
      });
      const checkbox = screen.getByLabelText('Checkbox');

      expect(checkbox).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(Checkbox, {
        attrs: { id: 'my-checkbox', 'aria-label': 'Checkbox' },
      });
      expect(screen.getByLabelText('Checkbox')).toHaveAttribute('id', 'my-checkbox');
    });

    it('TC-O140: aria-describedby 속성 전달 적용', () => {
      render(Checkbox, {
        attrs: { 'aria-describedby': 'terms-desc', 'aria-label': 'Checkbox' },
      });
      expect(screen.getByLabelText('Checkbox')).toHaveAttribute('aria-describedby', 'terms-desc');
    });
  });
});
