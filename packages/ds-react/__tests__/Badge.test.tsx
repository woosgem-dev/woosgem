import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Badge } from '@woosgem-dev/react';
import { Badge as BadgeDef } from '@woosgem-dev/core';

describe('Badge', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({});

      render(<Badge>New</Badge>);
      const badge = screen.getByText('New');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(badge).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ variant: 'outline' });

      render(<Badge variant="outline">Outline</Badge>);
      const badge = screen.getByText('Outline');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-R102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'danger' });

      render(<Badge color="danger">Danger</Badge>);
      const badge = screen.getByText('Danger');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-R103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ size: 'lg' });

      render(<Badge size="lg">Large</Badge>);
      const badge = screen.getByText('Large');

      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(badge).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R104: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'subtle' as const,
        color: 'success' as const,
        size: 'sm' as const,
      };
      const coreAttrs = BadgeDef.mapPropsToAttrs(props);

      render(
        <Badge variant="subtle" color="success" size="sm">
          Complex
        </Badge>
      );
      const badge = screen.getByText('Complex');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-C110: variant: solid가 적용된다', () => {
      render(<Badge variant="solid">Solid</Badge>);
      const badge = screen.getByText('Solid');

      expect(badge).toHaveAttribute('data-variant', 'solid');
    });

    it('TC-C111: variant: outline 적용된다', () => {
      render(<Badge variant="outline">Outline</Badge>);
      const badge = screen.getByText('Outline');

      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C112: variant: subtle 적용된다', () => {
      render(<Badge variant="subtle">Subtle</Badge>);
      const badge = screen.getByText('Subtle');

      expect(badge).toHaveAttribute('data-variant', 'subtle');
    });

    it('TC-C120: color: primary가 적용된다', () => {
      render(<Badge color="primary">Primary</Badge>);
      const badge = screen.getByText('Primary');

      expect(badge).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C121: color: secondary가 적용된다', () => {
      render(<Badge color="secondary">Secondary</Badge>);
      const badge = screen.getByText('Secondary');

      expect(badge).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C122: color: danger가 적용된다', () => {
      render(<Badge color="danger">Danger</Badge>);
      const badge = screen.getByText('Danger');

      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-C123: color: success가 적용된다', () => {
      render(<Badge color="success">Success</Badge>);
      const badge = screen.getByText('Success');

      expect(badge).toHaveAttribute('data-color', 'success');
    });

    it('TC-C124: color: warning 적용된다', () => {
      render(<Badge color="warning">Warning</Badge>);
      const badge = screen.getByText('Warning');

      expect(badge).toHaveAttribute('data-color', 'warning');
    });

    it('TC-C125: color: info가 적용된다', () => {
      render(<Badge color="info">Info</Badge>);
      const badge = screen.getByText('Info');

      expect(badge).toHaveAttribute('data-color', 'info');
    });

    it('TC-C130: size: sm가 적용된다', () => {
      render(<Badge size="sm">Small</Badge>);
      const badge = screen.getByText('Small');

      expect(badge).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C131: size: md가 적용된다', () => {
      render(<Badge size="md">Medium</Badge>);
      const badge = screen.getByText('Medium');

      expect(badge).toHaveAttribute('data-size', 'md');
    });

    it('TC-C132: size: lg가 적용된다', () => {
      render(<Badge size="lg">Large</Badge>);
      const badge = screen.getByText('Large');

      expect(badge).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('TC-R201: children이 렌더링된다', () => {
      render(
        <Badge>
          <span data-testid="icon">Icon</span>
          Text
        </Badge>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Text')).toBeInTheDocument();
    });

    it('TC-R202: className이 병합된다', () => {
      render(<Badge className="custom-class">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('wg-badge');
      expect(badge).toHaveClass('custom-class');
    });

    it('TC-R203: aria-label이 적용된다', () => {
      render(<Badge aria-label="Status">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('aria-label', 'Status');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-O150: onMouseEnter 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleMouseEnter = vi.fn();

      render(<Badge onMouseEnter={handleMouseEnter}>Badge</Badge>);
      const badge = screen.getByText('Badge');

      await user.hover(badge);

      expect(handleMouseEnter).toHaveBeenCalled();
    });

    it('TC-O152: onClick 핸들러가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Badge onClick={handleClick}>Click</Badge>);
      const badge = screen.getByText('Click');

      await user.click(badge);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Badge className="custom">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('wg-badge');
      expect(badge).toHaveClass('custom');
    });

    it('TC-O101: className 여러 개 추가', () => {
      render(<Badge className="a b c">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('wg-badge');
      expect(badge).toHaveClass('a');
      expect(badge).toHaveClass('b');
      expect(badge).toHaveClass('c');
    });

    it('TC-O110: style 라용', () => {
      render(<Badge style={{ marginLeft: 8 }}>Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveStyle({ marginLeft: '8px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Badge data-testid="status-badge">Badge</Badge>);
      expect(screen.getByTestId('status-badge')).toBeInTheDocument();
    });

    it('TC-O140: aria-label 적용', () => {
      render(<Badge aria-label="Status">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('aria-label', 'Status');
    });

    it('TC-O141: aria-live 용', () => {
      render(<Badge aria-live="polite">Update</Badge>);
      const badge = screen.getByText('Update');

      expect(badge).toHaveAttribute('aria-live', 'polite');
    });

    it('TC-O160: id 속성 전달 적용', () => {
      render(<Badge id="my-badge">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('id', 'my-badge');
    });

    it('TC-O161: title 성 달 용', () => {
      render(<Badge title="Tooltip">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('title', 'Tooltip');
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Badge data-variant="custom" variant="outline">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Badge data-color="custom" color="danger">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O132: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Badge data-size="custom" size="lg">Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 solid다', () => {
      render(<Badge>Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-variant', 'solid');
    });

    it('TC-C011: color 기본값 primary다', () => {
      render(<Badge>Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: size 기본값 md다', () => {
      render(<Badge>Badge</Badge>);
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-size', 'md');
    });
  });

  describe('복합 조합', () => {
    it('TC-C140: 모든 props 조합 1', () => {
      render(
        <Badge variant="outline" color="danger" size="lg">
          Error
        </Badge>
      );
      const badge = screen.getByText('Error');

      expect(badge).toHaveAttribute('data-variant', 'outline');
      expect(badge).toHaveAttribute('data-color', 'danger');
      expect(badge).toHaveAttribute('data-size', 'lg');
    });

    it('TC-C141: 모든 props 조합 2', () => {
      render(
        <Badge variant="subtle" color="warning" size="sm">
          Warning
        </Badge>
      );
      const badge = screen.getByText('Warning');

      expect(badge).toHaveAttribute('data-variant', 'subtle');
      expect(badge).toHaveAttribute('data-color', 'warning');
      expect(badge).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C142: 모든 props 조합 3', () => {
      render(
        <Badge variant="solid" color="info" size="md">
          Info
        </Badge>
      );
      const badge = screen.getByText('Info');

      expect(badge).toHaveAttribute('data-variant', 'solid');
      expect(badge).toHaveAttribute('data-color', 'info');
      expect(badge).toHaveAttribute('data-size', 'md');
    });
  });
});
