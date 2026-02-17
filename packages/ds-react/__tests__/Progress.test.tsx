import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from '@woosgem-dev/react';
import { Progress as ProgressDef, getProgressPercentage } from '@woosgem-dev/core';

describe('Progress', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({});

      render(<Progress />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(el).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(el).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(el).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ variant: 'gradient' });

      render(<Progress variant="gradient" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(el).toHaveAttribute('data-variant', 'gradient');
    });

    it('TC-R102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ color: 'danger' });

      render(<Progress color="danger" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(el).toHaveAttribute('data-color', 'danger');
    });

    it('TC-R103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ size: 'lg' });

      render(<Progress size="lg" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(el).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'gradient' as const,
        color: 'success' as const,
        size: 'sm' as const,
        value: 75,
        max: 100,
      };
      const coreAttrs = ProgressDef.mapPropsToAttrs(props);

      render(<Progress variant="gradient" color="success" size="sm" value={75} />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(el).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(el).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(el).toHaveAttribute('aria-valuenow', String(coreAttrs['aria-valuenow']));
      expect(el).toHaveAttribute('aria-valuemax', String(coreAttrs['aria-valuemax']));
    });
  });

  describe('Label/값 표시', () => {
    it('TC-L100: showLabel이 true이면 퍼센트 레이블을 렌더링한다', () => {
      render(<Progress value={75} showLabel />);
      const label = document.querySelector('.wg-progress__label');

      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('75%');
    });

    it('TC-L101: showLabel이 false이면 레이블을 렌더링하지 않는다', () => {
      render(<Progress value={75} />);
      const label = document.querySelector('.wg-progress__label');

      expect(label).not.toBeInTheDocument();
    });

    it('TC-L102: custom max에 따른 퍼센트가 계산된다', () => {
      render(<Progress value={3} max={5} showLabel />);
      const label = document.querySelector('.wg-progress__label');

      expect(label).toHaveTextContent('60%');
    });

    it('TC-L103: value가 0이면 0%를 표시한다', () => {
      render(<Progress value={0} showLabel />);
      const label = document.querySelector('.wg-progress__label');

      expect(label).toHaveTextContent('0%');
    });

    it('TC-L104: value가 max와 같으면 100%를 표시한다', () => {
      render(<Progress value={100} showLabel />);
      const label = document.querySelector('.wg-progress__label');

      expect(label).toHaveTextContent('100%');
    });

    it('TC-L105: getProgressPercentage가 core 함수와 동일한 결과를 반환한다', () => {
      expect(getProgressPercentage(75, 100)).toBe(75);
      expect(getProgressPercentage(3, 5)).toBe(60);
      expect(getProgressPercentage(0, 100)).toBe(0);
      expect(getProgressPercentage(100, 100)).toBe(100);
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="progressbar"가 적용된다', () => {
      render(<Progress />);
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('TC-A101: aria-valuenow가 적용된다', () => {
      render(<Progress value={50} />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
    });

    it('TC-A102: aria-valuemin이 0으로 적용된다', () => {
      render(<Progress />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuemin', '0');
    });

    it('TC-A103: aria-valuemax가 적용된다', () => {
      render(<Progress />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '100');
    });

    it('TC-A104: custom max에 따른 aria-valuemax가 적용된다', () => {
      render(<Progress max={200} />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '200');
    });

    it('TC-A105: value가 max를 초과하면 max로 clamp된다', () => {
      render(<Progress value={150} max={100} />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    });

    it('TC-A106: value가 음수이면 0으로 clamp된다', () => {
      render(<Progress value={-10} />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 default이다', () => {
      render(<Progress />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('data-variant', 'default');
    });

    it('TC-C011: color 기본값이 primary이다', () => {
      render(<Progress />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: size 기본값이 md이다', () => {
      render(<Progress />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C013: value 기본값이 0이다', () => {
      render(<Progress />);
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    });
  });

  describe('내부 구조', () => {
    it('TC-S100: progress-track 요소가 렌더링된다', () => {
      render(<Progress />);
      const track = document.querySelector('.wg-progress__track');

      expect(track).toBeInTheDocument();
    });

    it('TC-S101: progress-fill 요소가 렌더링된다', () => {
      render(<Progress />);
      const fill = document.querySelector('.wg-progress__fill');

      expect(fill).toBeInTheDocument();
    });

    it('TC-S102: progress-fill이 progress-track 안에 있다', () => {
      render(<Progress />);
      const track = document.querySelector('.wg-progress__track');
      const fill = document.querySelector('.wg-progress__fill');

      expect(track).toContainElement(fill as HTMLElement);
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Progress>Extra content</Progress>);
      expect(screen.getByText('Extra content')).toBeInTheDocument();
    });

    it('TC-R201: className이 병합된다', () => {
      render(<Progress className="custom-progress" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveClass('wg-progress');
      expect(el).toHaveClass('custom-progress');
    });

    it('TC-R202: style이 --progress-value와 병합된다', () => {
      render(<Progress value={50} style={{ marginTop: 16 }} />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveStyle({ marginTop: '16px' });
      expect(el).toHaveStyle({ '--progress-value': '50%' });
    });

    it('TC-R203: --progress-value CSS 변수가 설정된다', () => {
      render(<Progress value={75} />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveStyle({ '--progress-value': '75%' });
    });

    it('TC-R204: value가 0이면 --progress-value가 0%이다', () => {
      render(<Progress value={0} />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveStyle({ '--progress-value': '0%' });
    });

    it('TC-R205: custom max에 따른 --progress-value가 계산된다', () => {
      render(<Progress value={3} max={5} />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveStyle({ '--progress-value': '60%' });
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Progress className="custom" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveClass('wg-progress');
      expect(el).toHaveClass('custom');
    });

    it('TC-O110: style 적용', () => {
      render(<Progress style={{ marginLeft: 8 }} />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveStyle({ marginLeft: '8px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Progress data-testid="upload-progress" />);
      expect(screen.getByTestId('upload-progress')).toBeInTheDocument();
    });

    it('TC-O130: 보호 속성 data-variant 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Progress data-variant="custom" variant="gradient" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-variant', 'gradient');
    });

    it('TC-O131: 보호 속성 data-color 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Progress data-color="custom" color="danger" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O132: 보호 속성 data-size 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Progress data-size="custom" size="lg" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O133: 보호 속성 data-show-label 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Progress data-show-label="custom" showLabel />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('data-show-label', 'true');
    });

    it('TC-O160: id 속성 전달 적용', () => {
      render(<Progress id="main-progress" />);
      const el = screen.getByRole('progressbar');

      expect(el).toHaveAttribute('id', 'main-progress');
    });
  });
});
