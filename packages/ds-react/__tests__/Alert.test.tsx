import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from '@woosgem-dev/react';
import { Alert as AlertDef } from '@woosgem-dev/core';

describe('Alert', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({});

      render(<Alert>Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(alert).toHaveAttribute('data-status', coreAttrs['data-status']);
      expect(alert).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Alert variant="filled">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(alert).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-R102: status prop이 core 결과와 일치한다', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ status: 'error' });

      render(<Alert status="error">Error!</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-status', coreAttrs['data-status']);
      expect(alert).toHaveAttribute('data-status', 'error');
    });

    it('TC-R103: closable prop이 core 결과와 일치한다', () => {
      const coreAttrs = AlertDef.mapPropsToAttrs({ closable: true });

      render(<Alert closable>Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-closable', String(coreAttrs['data-closable']));
    });

    it('TC-R104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'filled' as const,
        status: 'success' as const,
        closable: true,
      };
      const coreAttrs = AlertDef.mapPropsToAttrs(props);

      render(
        <Alert variant="filled" status="success" closable>
          Success!
        </Alert>
      );
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(alert).toHaveAttribute('data-status', coreAttrs['data-status']);
      expect(alert).toHaveAttribute('data-closable', String(coreAttrs['data-closable']));
    });
  });

  describe('Variant 변환', () => {
    it('TC-C110: variant: filled가 적용된다', () => {
      render(<Alert variant="filled">Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-C111: variant: outline이 적용된다', () => {
      render(<Alert variant="outline">Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C112: variant: subtle이 적용된다', () => {
      render(<Alert variant="subtle">Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'subtle');
    });
  });

  describe('Status 변환', () => {
    it('TC-C120: status: info가 적용된다', () => {
      render(<Alert status="info">Info</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'info');
    });

    it('TC-C121: status: success가 적용된다', () => {
      render(<Alert status="success">Success</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'success');
    });

    it('TC-C122: status: warning이 적용된다', () => {
      render(<Alert status="warning">Warning</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'warning');
    });

    it('TC-C123: status: error가 적용된다', () => {
      render(<Alert status="error">Error</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'error');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="alert"가 항상 적용된다', () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값은 subtle이다', () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'subtle');
    });

    it('TC-C011: status 기본값은 info이다', () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('data-status', 'info');
    });

    it('TC-C012: closable 기본값은 false이다 (속성 없음)', () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole('alert')).not.toHaveAttribute('data-closable');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Alert>Important message</Alert>);
      expect(screen.getByText('Important message')).toBeInTheDocument();
    });

    it('TC-R201: JSX children이 렌더링된다', () => {
      render(
        <Alert>
          <span data-testid="icon">Icon</span>
          <span>Message</span>
        </Alert>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Message')).toBeInTheDocument();
    });

    it('TC-R202: className이 병합된다', () => {
      render(<Alert className="custom-alert">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('wg-alert');
      expect(alert).toHaveClass('custom-alert');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      render(<Alert className="my-alert">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('wg-alert');
      expect(alert).toHaveClass('my-alert');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<Alert style={{ marginTop: 16 }}>Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Alert data-testid="error-alert">Message</Alert>);
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
    });

    it('TC-O130: 보호 속성 data-variant 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Alert data-variant="custom" variant="filled">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O131: 보호 속성 data-status 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Alert data-status="custom" status="error">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('data-status', 'error');
    });

    it('TC-O132: 보호 속성 role 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Alert role="status">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('role', 'alert');
    });

    it('TC-O160: id 속성 전달 적용', () => {
      render(<Alert id="main-alert">Message</Alert>);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('id', 'main-alert');
    });
  });
});
