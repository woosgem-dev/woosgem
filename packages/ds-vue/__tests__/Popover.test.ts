import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Popover, PopoverArrow } from '@woosgem-dev/vue';
import {
  Popover as PopoverDef,
  PopoverArrow as PopoverArrowDef,
} from '@woosgem-dev/core';

describe('Popover', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({});

      render(Popover, { slots: { default: 'Content' } });
      const popover = screen.getByText('Content');

      expect(popover).toHaveAttribute('data-position', coreAttrs['data-position']);
      expect(popover).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(popover).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(popover).toHaveAttribute('role', coreAttrs.role);
      expect(popover).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: position prop이 core 결과와 일치한다', () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ position: 'top' });

      render(Popover, {
        props: { position: 'top' },
        slots: { default: 'Top' },
      });
      const popover = screen.getByText('Top');

      expect(popover).toHaveAttribute('data-position', coreAttrs['data-position']);
      expect(popover).toHaveAttribute('data-position', 'top');
    });

    it('TC-V102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ size: 'lg' });

      render(Popover, {
        props: { size: 'lg' },
        slots: { default: 'Large' },
      });
      const popover = screen.getByText('Large');

      expect(popover).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(popover).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V103: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ variant: 'tooltip' });

      render(Popover, {
        props: { variant: 'tooltip' },
        slots: { default: 'Tooltip' },
      });
      const popover = screen.getByText('Tooltip');

      expect(popover).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(popover).toHaveAttribute('data-variant', 'tooltip');
    });

    it('TC-V104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        position: 'top' as const,
        size: 'sm' as const,
        variant: 'tooltip' as const,
      };
      const coreAttrs = PopoverDef.mapPropsToAttrs(props);

      render(Popover, {
        props,
        slots: { default: 'Complex' },
      });
      const popover = screen.getByText('Complex');

      expect(popover).toHaveAttribute('data-position', coreAttrs['data-position']);
      expect(popover).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(popover).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(popover).toHaveAttribute('role', coreAttrs.role);
    });
  });

  describe('Position 검증', () => {
    it('TC-V110: position: top이 적용된다', () => {
      render(Popover, {
        props: { position: 'top' },
        slots: { default: 'Top' },
      });
      expect(screen.getByText('Top')).toHaveAttribute('data-position', 'top');
    });

    it('TC-V111: position: bottom이 적용된다', () => {
      render(Popover, {
        props: { position: 'bottom' },
        slots: { default: 'Bottom' },
      });
      expect(screen.getByText('Bottom')).toHaveAttribute('data-position', 'bottom');
    });

    it('TC-V112: position: left가 적용된다', () => {
      render(Popover, {
        props: { position: 'left' },
        slots: { default: 'Left' },
      });
      expect(screen.getByText('Left')).toHaveAttribute('data-position', 'left');
    });

    it('TC-V113: position: right가 적용된다', () => {
      render(Popover, {
        props: { position: 'right' },
        slots: { default: 'Right' },
      });
      expect(screen.getByText('Right')).toHaveAttribute('data-position', 'right');
    });
  });

  describe('Size 검증', () => {
    it('TC-V120: size: sm이 적용된다', () => {
      render(Popover, {
        props: { size: 'sm' },
        slots: { default: 'Small' },
      });
      expect(screen.getByText('Small')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-V121: size: md가 적용된다', () => {
      render(Popover, {
        props: { size: 'md' },
        slots: { default: 'Medium' },
      });
      expect(screen.getByText('Medium')).toHaveAttribute('data-size', 'md');
    });

    it('TC-V122: size: lg가 적용된다', () => {
      render(Popover, {
        props: { size: 'lg' },
        slots: { default: 'Large' },
      });
      expect(screen.getByText('Large')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Variant 검증', () => {
    it('TC-V130: variant: default가 적용된다', () => {
      render(Popover, {
        props: { variant: 'default' },
        slots: { default: 'Default' },
      });
      expect(screen.getByText('Default')).toHaveAttribute('data-variant', 'default');
    });

    it('TC-V131: variant: tooltip이 적용된다', () => {
      render(Popover, {
        props: { variant: 'tooltip' },
        slots: { default: 'Tooltip' },
      });
      expect(screen.getByText('Tooltip')).toHaveAttribute('data-variant', 'tooltip');
    });
  });

  describe('Role 검증', () => {
    it('TC-V140: role="dialog"가 항상 적용된다', () => {
      render(Popover, { slots: { default: 'Content' } });
      expect(screen.getByText('Content')).toHaveAttribute('role', 'dialog');
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(Popover, { slots: { default: 'Popover Content' } });
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('TC-V301: class가 병합된다', () => {
      render(Popover, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Content' },
      });
      const popover = screen.getByText('Content');

      expect(popover).toHaveClass('wg-popover');
      expect(popover).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label이 적용된다', () => {
      render(Popover, {
        attrs: { 'aria-label': 'Popover menu' },
        slots: { default: 'Content' },
      });
      expect(screen.getByLabelText('Popover menu')).toBeInTheDocument();
    });

    it('TC-V303: data-testid가 적용된다', () => {
      render(Popover, {
        attrs: { 'data-testid': 'my-popover' },
        slots: { default: 'Content' },
      });
      expect(screen.getByTestId('my-popover')).toBeInTheDocument();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O200: 보호 속성 data-position 오버라이드 차단', () => {
      render(Popover, {
        props: { position: 'top' },
        attrs: { 'data-position': 'custom' },
        slots: { default: 'Content' },
      });
      const popover = screen.getByText('Content');

      expect(popover).toHaveAttribute('data-position', 'top');
    });

    it('TC-O201: 보호 속성 data-size 오버라이드 차단', () => {
      render(Popover, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
        slots: { default: 'Content' },
      });
      const popover = screen.getByText('Content');

      expect(popover).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O202: 보호 속성 data-variant 오버라이드 차단', () => {
      render(Popover, {
        props: { variant: 'tooltip' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Content' },
      });
      const popover = screen.getByText('Content');

      expect(popover).toHaveAttribute('data-variant', 'tooltip');
    });
  });
});

describe('PopoverArrow', () => {
  describe('Core 일치 검증', () => {
    it('TC-V400: class가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = PopoverArrowDef.mapPropsToAttrs();

      render(PopoverArrow, {
        attrs: { 'data-testid': 'arrow' },
      });
      const arrow = screen.getByTestId('arrow');

      expect(arrow).toHaveClass(coreAttrs.class);
    });
  });

  it('TC-V401: popover-arrow 클래스가 적용된다', () => {
    render(PopoverArrow, {
      attrs: { 'data-testid': 'arrow' },
    });
    const arrow = screen.getByTestId('arrow');

    expect(arrow).toHaveClass('wg-popover__arrow');
  });

  it('TC-V402: class가 병합된다', () => {
    render(PopoverArrow, {
      attrs: { 'data-testid': 'arrow', class: 'custom' },
    });
    const arrow = screen.getByTestId('arrow');

    expect(arrow).toHaveClass('wg-popover__arrow');
    expect(arrow).toHaveClass('custom');
  });
});
