import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Divider } from '@woosgem/ds-react';
import { Divider as DividerDef } from '@woosgem/ds-core';

describe('Divider', () => {
  describe('core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({});

      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: orientation prop이 core 결과와 일치한다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ orientation: 'vertical' });

      render(<Divider orientation="vertical" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-orientation', 'vertical');
      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('TC-R102: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ variant: 'dashed' });

      render(<Divider variant="dashed" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-variant', 'dashed');
    });

    it('TC-R103: spacing prop이 core 결과와 일치한다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ spacing: 'lg' });

      render(<Divider spacing="lg" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });

    it('TC-R104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        orientation: 'vertical' as const,
        variant: 'dashed' as const,
        spacing: 'sm' as const,
      };
      const coreAttrs = DividerDef.mapPropsToAttrs(props);

      render(<Divider orientation="vertical" variant="dashed" spacing="sm" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
    });

    it('TC-R105: role 속성이 separator이다', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('role', 'separator');
    });

    it('TC-R106: aria-orientation이 orientation과 동기화된다 (horizontal)', () => {
      render(<Divider orientation="horizontal" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('TC-C130: spacing: none이 적용된다', () => {
      render(<Divider spacing="none" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'none');
    });

    it('TC-C131: spacing: sm이 적용된다', () => {
      render(<Divider spacing="sm" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'sm');
    });

    it('TC-C132: spacing: md가 적용된다', () => {
      render(<Divider spacing="md" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'md');
    });

    it('TC-C133: spacing: lg가 적용된다', () => {
      render(<Divider spacing="lg" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: className이 병합된다', () => {
      render(<Divider className="custom-class" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('custom-class');
    });

    it('TC-R201: className 여러 개 추가', () => {
      render(<Divider className="a b c" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('a');
      expect(divider).toHaveClass('b');
      expect(divider).toHaveClass('c');
    });

    it('TC-R202: aria-label이 적용된다', () => {
      render(<Divider aria-label="Section divider" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-label', 'Section divider');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      render(<Divider className="custom" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('custom');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<Divider style={{ marginTop: 8 }} />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveStyle({ marginTop: '8px' });
    });

    it('TC-O111: style 복합 속성', () => {
      render(<Divider style={{ borderWidth: 2, opacity: 0.5 }} />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveStyle({ borderWidth: '2px' });
      expect(divider).toHaveStyle({ opacity: '0.5' });
    });

    it('TC-O120: data-testid 추가 허용', () => {
      render(<Divider data-testid="divider-1" />);
      expect(screen.getByTestId('divider-1')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 허용', () => {
      render(<Divider aria-label="Content separator" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-label', 'Content separator');
    });

    it('TC-O150: id 속성 전달 허용', () => {
      render(<Divider id="main-divider" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('id', 'main-divider');
    });

    it('TC-O130: 보호 속성 data-orientation 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Divider data-orientation="custom" orientation="vertical" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', 'vertical');
    });

    it('TC-O131: 보호 속성 data-variant 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Divider data-variant="custom" variant="dashed" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', 'dashed');
    });

    it('TC-O132: 보호 속성 data-spacing 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Divider data-spacing="custom" spacing="lg" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });

    it('TC-O133: 보호 속성 role 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Divider role="presentation" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('role', 'separator');
    });

    it('TC-O134: 보호 속성 aria-orientation 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Divider aria-orientation="custom" orientation="vertical" />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });
  });

  describe('기본값', () => {
    it('TC-C010: orientation 기본값은 horizontal이다', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', 'horizontal');
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('TC-C011: variant 기본값은 solid이다', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', 'solid');
    });

    it('TC-C012: spacing 기본값은 md이다', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'md');
    });
  });

  describe('접근성', () => {
    it('role="separator"가 선언된다', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');

      expect(divider).toBeInTheDocument();
    });

    it('aria-orientation이 orientation prop과 동기화된다', () => {
      const { rerender } = render(<Divider orientation="horizontal" />);
      let divider = screen.getByRole('separator');
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');

      rerender(<Divider orientation="vertical" />);
      divider = screen.getByRole('separator');
      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });
  });
});
