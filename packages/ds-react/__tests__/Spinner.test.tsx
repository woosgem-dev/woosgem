import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from '@woosgem-dev/react';
import { Spinner as SpinnerDef } from '@woosgem-dev/core';

describe('Spinner', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({});

      render(<Spinner />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(spinner).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(spinner).toHaveAttribute('aria-label', coreAttrs['aria-label']);
      expect(spinner).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ size: 'lg' });

      render(<Spinner size="lg" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(spinner).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ color: 'secondary' });

      render(<Spinner color="secondary" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(spinner).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-R103: label prop이 core 결과와 일치한다', () => {
      const coreAttrs = SpinnerDef.mapPropsToAttrs({ label: '데이터를 불러오는 중...' });

      render(<Spinner label="데이터를 불러오는 중..." />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('aria-label', coreAttrs['aria-label']);
      expect(spinner).toHaveAttribute('aria-label', '데이터를 불러오는 중...');
    });

    it('TC-R104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        size: 'lg' as const,
        color: 'muted' as const,
        label: 'Please wait',
      };
      const coreAttrs = SpinnerDef.mapPropsToAttrs(props);

      render(<Spinner size="lg" color="muted" label="Please wait" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(spinner).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(spinner).toHaveAttribute('aria-label', coreAttrs['aria-label']);
    });
  });

  describe('Size 변형', () => {
    it('TC-C110: size: xs가 적용된다', () => {
      render(<Spinner size="xs" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'xs');
    });

    it('TC-C111: size: sm가 적용된다', () => {
      render(<Spinner size="sm" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C112: size: md가 적용된다', () => {
      render(<Spinner size="md" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C113: size: lg가 적용된다', () => {
      render(<Spinner size="lg" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Color 변형', () => {
    it('TC-C120: color: primary가 적용된다', () => {
      render(<Spinner color="primary" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C121: color: secondary가 적용된다', () => {
      render(<Spinner color="secondary" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C122: color: muted가 적용된다', () => {
      render(<Spinner color="muted" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'muted');
    });

    it('TC-C123: color: current가 적용된다', () => {
      render(<Spinner color="current" />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'current');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="status"가 적용된다', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('TC-A101: aria-label이 적용된다', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading...');
    });

    it('TC-A102: aria-label이 적용된다', () => {
      render(<Spinner label="Saving changes..." />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Saving changes...');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값 md다', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: color 기본값 primary다', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: label 기본값 "Loading..."다', () => {
      render(<Spinner />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading...');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Spinner className="custom-spinner" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveClass('spinner');
      expect(spinner).toHaveClass('custom-spinner');
    });

    it('TC-O110: style 라용', () => {
      render(<Spinner style={{ marginTop: 16 }} />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Spinner data-testid="loading-spinner" />);
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Spinner data-size="custom" size="lg" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Spinner data-color="custom" color="muted" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('data-color', 'muted');
    });

    it('TC-O132: 보호 성 role 버이차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Spinner role="progressbar" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('role', 'status');
    });

    it('TC-O160: id 속성 전달 적용', () => {
      render(<Spinner id="main-spinner" />);
      const spinner = screen.getByRole('status');

      expect(spinner).toHaveAttribute('id', 'main-spinner');
    });
  });
});
