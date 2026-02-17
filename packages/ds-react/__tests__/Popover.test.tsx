/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Popover, PopoverArrow } from '@woosgem-dev/react';
import {
  Popover as PopoverDef,
  PopoverArrow as PopoverArrowDef,
} from '@woosgem-dev/core';

describe('Popover', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({});

      render(<Popover>Content</Popover>);
      const popover = screen.getByText('Content');

      expect(popover).toHaveAttribute('data-position', coreAttrs['data-position']);
      expect(popover).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(popover).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(popover).toHaveAttribute('role', coreAttrs.role);
      expect(popover).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: position prop이 core 결과와 일치한다', () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ position: 'top' });

      render(<Popover position="top">Top</Popover>);
      const popover = screen.getByText('Top');

      expect(popover).toHaveAttribute('data-position', coreAttrs['data-position']);
      expect(popover).toHaveAttribute('data-position', 'top');
    });

    it('TC-R102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ size: 'lg' });

      render(<Popover size="lg">Large</Popover>);
      const popover = screen.getByText('Large');

      expect(popover).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(popover).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R103: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = PopoverDef.mapPropsToAttrs({ variant: 'tooltip' });

      render(<Popover variant="tooltip">Tooltip</Popover>);
      const popover = screen.getByText('Tooltip');

      expect(popover).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(popover).toHaveAttribute('data-variant', 'tooltip');
    });

    it('TC-R104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        position: 'top' as const,
        size: 'sm' as const,
        variant: 'tooltip' as const,
      };
      const coreAttrs = PopoverDef.mapPropsToAttrs(props);

      render(
        <Popover position="top" size="sm" variant="tooltip">
          Complex
        </Popover>
      );
      const popover = screen.getByText('Complex');

      expect(popover).toHaveAttribute('data-position', coreAttrs['data-position']);
      expect(popover).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(popover).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(popover).toHaveAttribute('role', coreAttrs.role);
    });
  });

  describe('Position 검증', () => {
    it('TC-C110: position: top이 적용된다', () => {
      render(<Popover position="top">Top</Popover>);
      expect(screen.getByText('Top')).toHaveAttribute('data-position', 'top');
    });

    it('TC-C111: position: bottom이 적용된다', () => {
      render(<Popover position="bottom">Bottom</Popover>);
      expect(screen.getByText('Bottom')).toHaveAttribute('data-position', 'bottom');
    });

    it('TC-C112: position: left가 적용된다', () => {
      render(<Popover position="left">Left</Popover>);
      expect(screen.getByText('Left')).toHaveAttribute('data-position', 'left');
    });

    it('TC-C113: position: right가 적용된다', () => {
      render(<Popover position="right">Right</Popover>);
      expect(screen.getByText('Right')).toHaveAttribute('data-position', 'right');
    });
  });

  describe('Size 검증', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      render(<Popover size="sm">Small</Popover>);
      expect(screen.getByText('Small')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      render(<Popover size="md">Medium</Popover>);
      expect(screen.getByText('Medium')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      render(<Popover size="lg">Large</Popover>);
      expect(screen.getByText('Large')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Variant 검증', () => {
    it('TC-C130: variant: default가 적용된다', () => {
      render(<Popover variant="default">Default</Popover>);
      expect(screen.getByText('Default')).toHaveAttribute('data-variant', 'default');
    });

    it('TC-C131: variant: tooltip이 적용된다', () => {
      render(<Popover variant="tooltip">Tooltip</Popover>);
      expect(screen.getByText('Tooltip')).toHaveAttribute('data-variant', 'tooltip');
    });
  });

  describe('Role 검증', () => {
    it('TC-C140: role="dialog"가 항상 적용된다', () => {
      render(<Popover>Content</Popover>);
      expect(screen.getByText('Content')).toHaveAttribute('role', 'dialog');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Popover>Popover Content</Popover>);
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('TC-R201: className이 병합된다', () => {
      render(<Popover className="custom-class">Content</Popover>);
      const popover = screen.getByText('Content');

      expect(popover).toHaveClass('wg-popover');
      expect(popover).toHaveClass('custom-class');
    });

    it('TC-R202: aria-label이 적용된다', () => {
      render(<Popover aria-label="Popover menu">Content</Popover>);
      const popover = screen.getByText('Content');

      expect(popover).toHaveAttribute('aria-label', 'Popover menu');
    });

    it('TC-R203: data-testid가 적용된다', () => {
      render(<Popover data-testid="my-popover">Content</Popover>);
      expect(screen.getByTestId('my-popover')).toBeInTheDocument();
    });
  });

  describe('기본값', () => {
    it('TC-C010: position 기본값 bottom이다', () => {
      render(<Popover>Content</Popover>);
      expect(screen.getByText('Content')).toHaveAttribute('data-position', 'bottom');
    });

    it('TC-C011: size 기본값 md다', () => {
      render(<Popover>Content</Popover>);
      expect(screen.getByText('Content')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C012: variant 기본값 default다', () => {
      render(<Popover>Content</Popover>);
      expect(screen.getByText('Content')).toHaveAttribute('data-variant', 'default');
    });
  });
});

describe('PopoverArrow', () => {
  describe('Core 일치 검증', () => {
    it('TC-R300: class가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = PopoverArrowDef.mapPropsToAttrs();

      render(<PopoverArrow data-testid="arrow" />);
      const arrow = screen.getByTestId('arrow');

      expect(arrow).toHaveClass(coreAttrs.class);
    });
  });

  it('TC-R301: popover-arrow 클래스가 적용된다', () => {
    render(<PopoverArrow data-testid="arrow" />);
    const arrow = screen.getByTestId('arrow');

    expect(arrow).toHaveClass('wg-popover__arrow');
  });

  it('TC-R302: className이 병합된다', () => {
    render(<PopoverArrow data-testid="arrow" className="custom" />);
    const arrow = screen.getByTestId('arrow');

    expect(arrow).toHaveClass('wg-popover__arrow');
    expect(arrow).toHaveClass('custom');
  });
});
