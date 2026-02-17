import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ListItem } from '@woosgem-dev/react';
import { ListItem as ListItemDef } from '@woosgem-dev/core';

describe('ListItem', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({});

      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ variant: 'interactive' });

      render(<ListItem variant="interactive">Interactive</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveAttribute('data-variant', 'interactive');
    });

    it('TC-R102: selected prop이 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true });

      render(<ListItem selected>Selected</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-R103: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ disabled: true });

      render(<ListItem disabled>Disabled</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'disabled');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('TC-R104: divider prop이 core 결과와 일치한다', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ divider: true });

      render(<ListItem divider>With Divider</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-divider', String(coreAttrs['data-divider']));
    });

    it('TC-R105: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'interactive' as const,
        selected: true,
        divider: true,
      };
      const coreAttrs = ListItemDef.mapPropsToAttrs(props);

      render(
        <ListItem variant="interactive" selected divider>
          Complex
        </ListItem>
      );
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-divider', 'true');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-R106: selected + disabled 동시 true 시 selected 우선', () => {
      const coreAttrs = ListItemDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(
        <ListItem selected disabled>
          Both
        </ListItem>
      );
      const item = document.querySelector('.list-item');

      expect(coreAttrs['data-state']).toBe('selected');
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-R200: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<ListItem onClick={handleClick}>Click me</ListItem>);
      const item = document.querySelector('.list-item');

      await user.click(item!);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R201: disabled 상태에서 onClick 호출된다 (li는 disabled 미지원)', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <ListItem onClick={handleClick} disabled>
          Disabled
        </ListItem>
      );
      const item = document.querySelector('.list-item');

      await user.click(item!);

      // li 요소는 네이티브 disabled를 지원하지 않으므로 클릭이 발생
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-R202: 여러 번 클릭 시 매번 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<ListItem onClick={handleClick}>Click me</ListItem>);
      const item = document.querySelector('.list-item');

      await user.click(item!);
      await user.click(item!);
      await user.click(item!);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('React 전용 props', () => {
    it('TC-R300: children이 렌더링된다', () => {
      render(<ListItem>Hello</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveTextContent('Hello');
    });

    it('TC-R301: children이 렌더링된다', () => {
      render(
        <ListItem>
          <span data-testid="icon">Icon</span>
          Text
        </ListItem>
      );

      expect(screen.getByTestId('icon')).toHaveTextContent('Icon');
    });

    it('TC-R302: className이 병합된다', () => {
      render(<ListItem className="custom-class">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('custom-class');
    });

    it('TC-R303: role prop이 적용된다', () => {
      render(<ListItem role="option">Option</ListItem>);
      const item = screen.getByRole('option');

      expect(item).toBeInTheDocument();
    });

    it('TC-R304: aria-label이 적용된다', () => {
      render(<ListItem aria-label="Menu item">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-label', 'Menu item');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<ListItem className="custom">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('custom');
    });

    it('TC-O101: className 여러 개 추가', () => {
      render(<ListItem className="a b c">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveClass('list-item');
      expect(item).toHaveClass('a');
      expect(item).toHaveClass('b');
      expect(item).toHaveClass('c');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<ListItem style={{ padding: 8 }}>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveStyle({ padding: '8px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<ListItem data-testid="item-1">Item</ListItem>);
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 적용', () => {
      render(<ListItem aria-label="Menu item">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-label', 'Menu item');
    });

    it('TC-O141: aria-labelledby 적용', () => {
      render(<ListItem aria-labelledby="label-id">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-labelledby', 'label-id');
    });

    it('TC-O143: aria-current 적용', () => {
      render(<ListItem aria-current="page">Current</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-current', 'page');
    });

    it('TC-O160: id 속성 전달 적용', () => {
      render(<ListItem id="my-item">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('id', 'my-item');
    });

    it('TC-O161: role 속성 적용', () => {
      render(<ListItem role="option">Option</ListItem>);
      const item = screen.getByRole('option');

      expect(item).toBeInTheDocument();
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<ListItem data-variant="custom" variant="interactive">Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', 'interactive');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<ListItem data-state="custom" selected>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O132: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<ListItem data-divider="custom" divider>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-divider', 'true');
    });

    it('TC-O133: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<ListItem aria-selected="false" selected>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-O134: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<ListItem aria-disabled="false" disabled>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 default이다', () => {
      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).toHaveAttribute('data-variant', 'default');
    });

    it('TC-C011: selected 기본값 false이다', () => {
      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).not.toHaveAttribute('data-state');
      expect(item).not.toHaveAttribute('aria-selected');
    });

    it('TC-C012: disabled 기본값 false이다', () => {
      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).not.toHaveAttribute('aria-disabled');
    });

    it('TC-C013: divider 기본값 false이다', () => {
      render(<ListItem>Item</ListItem>);
      const item = document.querySelector('.list-item');

      expect(item).not.toHaveAttribute('data-divider');
    });
  });
});
