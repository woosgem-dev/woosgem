import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SegmentedControl, SegmentedControlItem } from '@woosgem-dev/react';
import {
  SegmentedControl as SegmentedControlDef,
  SegmentedControlItem as SegmentedControlItemDef,
} from '@woosgem-dev/core';

describe('SegmentedControl', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({});

      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(container).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ size: 'lg' });

      render(
        <SegmentedControl size="lg">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(container).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: fullWidth prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ fullWidth: true });

      render(
        <SegmentedControl fullWidth>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-R103: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ disabled: true });

      render(
        <SegmentedControl disabled>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-disabled', String(coreAttrs['data-disabled']));
    });

    it('TC-R104: role이 항상 group이다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('role', 'group');
    });

    it('TC-R105: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        size: 'sm' as const,
        fullWidth: true,
        disabled: true,
      };
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs(props);

      render(
        <SegmentedControl size="sm" fullWidth disabled>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(container).toHaveAttribute('data-full-width', 'true');
      expect(container).toHaveAttribute('data-disabled', 'true');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Option 1</SegmentedControl.Item>
          <SegmentedControl.Item>Option 2</SegmentedControl.Item>
        </SegmentedControl>
      );

      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('TC-R201: className이 병합된다', () => {
      render(
        <SegmentedControl className="custom">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveClass('wg-segmented-control');
      expect(container).toHaveClass('custom');
    });

    it('TC-R202: aria-label이 적용된다', () => {
      render(
        <SegmentedControl aria-label="Options">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('aria-label', 'Options');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(
        <SegmentedControl className="custom">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveClass('wg-segmented-control');
      expect(container).toHaveClass('custom');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(
        <SegmentedControl style={{ gap: 8 }}>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveStyle({ gap: '8px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(
        <SegmentedControl data-testid="tabs">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      expect(screen.getByTestId('tabs')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 적용', () => {
      render(
        <SegmentedControl aria-label="Tabs">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('aria-label', 'Tabs');
    });

    it('TC-O160: id 속성 전달 적용', () => {
      render(
        <SegmentedControl id="my-tabs">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('id', 'my-tabs');
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<SegmentedControl data-size="custom" size="lg"><SegmentedControl.Item>Item</SegmentedControl.Item></SegmentedControl>);
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<SegmentedControl data-full-width="false" fullWidth><SegmentedControl.Item>Item</SegmentedControl.Item></SegmentedControl>);
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-full-width', 'true');
    });

    it('TC-O132: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<SegmentedControl data-disabled="false" disabled><SegmentedControl.Item>Item</SegmentedControl.Item></SegmentedControl>);
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-disabled', 'true');
    });

    it('TC-O133: 보호 속성 role 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<SegmentedControl role="tablist"><SegmentedControl.Item>Item</SegmentedControl.Item></SegmentedControl>);
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('role', 'group');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값 md이다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: fullWidth 기본값 false이다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).not.toHaveAttribute('data-full-width');
    });

    it('TC-C012: disabled 기본값 false이다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).not.toHaveAttribute('data-disabled');
    });
  });
});

describe('SegmentedControlItem', () => {
  describe('Core 일치 검증', () => {
    it('기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({});

      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveClass(coreAttrs.class);
    });

    it('TC-RI101: selected prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ selected: true });

      render(
        <SegmentedControl>
          <SegmentedControl.Item selected>Selected</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ disabled: true });

      render(
        <SegmentedControl>
          <SegmentedControl.Item disabled>Disabled</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'disabled');
      expect(item).toBeDisabled();
    });

    it('TC-RI103: selected + disabled compound state', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(
        <SegmentedControl>
          <SegmentedControl.Item selected disabled>
            Both
          </SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(coreAttrs['data-state']).toBe('selected-disabled');
      expect(item).toHaveAttribute('data-state', 'selected-disabled');
    });
  });

  describe('이벤트 핸들러', () => {
    it('onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <SegmentedControl>
          <SegmentedControl.Item onClick={handleClick}>Click me</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      await user.click(item);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-RI201: disabled 상태에서 onClick 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <SegmentedControl>
          <SegmentedControl.Item onClick={handleClick} disabled>
            Disabled
          </SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      await user.click(item);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-RI202: selected 상태에서 onClick 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <SegmentedControl>
          <SegmentedControl.Item onClick={handleClick} selected>
            Selected
          </SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      await user.click(item);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('React 전용 props', () => {
    it('children이 렌더링된다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Text</SegmentedControl.Item>
        </SegmentedControl>
      );

      expect(screen.getByRole('button')).toHaveTextContent('Text');
    });

    it('className이 병합된다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item className="custom">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveClass('wg-segmented-control__item');
      expect(item).toHaveClass('custom');
    });

    it('type prop이 적용된다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item type="submit">Submit</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('type', 'submit');
    });

    it('TC-RI303: type 미명시 시 기본값 설정된다', () => {
      // SegmentedControlItem은 기본 type을 지정하지 않음
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).not.toHaveAttribute('type');
    });

    it('TC-RI303b: type="button" 명시 시 button으로 렌더링', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item type="button">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('type', 'button');
    });

    it('aria-label이 적용된다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item aria-label="Select">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('aria-label', 'Select');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O101: className이 병합된다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item className="custom">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveClass('wg-segmented-control__item');
      expect(item).toHaveClass('custom');
    });

    it('TC-O121: data-analytics 추가 적용', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item data-analytics="click">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-analytics', 'click');
    });

    it('TC-O141: aria-label 적용', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item aria-label="Option">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('aria-label', 'Option');
    });

    it('TC-O134: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<SegmentedControl><SegmentedControl.Item data-state="custom" selected>Item</SegmentedControl.Item></SegmentedControl>);
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O135: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<SegmentedControl><SegmentedControl.Item aria-selected="false" selected>Item</SegmentedControl.Item></SegmentedControl>);
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-I010: selected 기본값 false이다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).not.toHaveAttribute('data-state');
      expect(item).not.toHaveAttribute('aria-selected');
    });

    it('TC-I011: disabled 기본값 false이다', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).not.toBeDisabled();
    });
  });
});

describe('SegmentedControl + Item 조합', () => {
  it('단일 선택 패턴: 하나의 아이템만 selected', () => {
    render(
      <SegmentedControl>
        <SegmentedControl.Item>Option 1</SegmentedControl.Item>
        <SegmentedControl.Item selected>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>
      </SegmentedControl>
    );

    const items = screen.getAllByRole('button');
    expect(items[0]).not.toHaveAttribute('data-state', 'selected');
    expect(items[1]).toHaveAttribute('data-state', 'selected');
    expect(items[2]).not.toHaveAttribute('data-state', 'selected');
  });

  it('개별 Item disabled', () => {
    render(
      <SegmentedControl>
        <SegmentedControl.Item>Option 1</SegmentedControl.Item>
        <SegmentedControl.Item disabled>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>
      </SegmentedControl>
    );

    const items = screen.getAllByRole('button');
    expect(items[0]).not.toBeDisabled();
    expect(items[1]).toBeDisabled();
    expect(items[2]).not.toBeDisabled();
  });

  it('SegmentedControlItem 직접 import해서 적용된다', () => {
    render(
      <SegmentedControl>
        <SegmentedControlItem>Direct Import</SegmentedControlItem>
      </SegmentedControl>
    );

    expect(screen.getByText('Direct Import')).toBeInTheDocument();
  });
});
