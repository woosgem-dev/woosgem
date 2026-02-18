import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardBody, CardFooter } from '@woosgem-dev/react';
import {
  Card as CardDef,
  CardHeader as CardHeaderDef,
  CardBody as CardBodyDef,
  CardFooter as CardFooterDef,
} from '@woosgem-dev/core';

describe('Card (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({});

      render(<Card>Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;

      expect(card).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(card).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(card).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ variant: 'elevated' });

      render(<Card variant="elevated">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;

      expect(card).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-R102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ size: 'lg' });

      render(<Card size="lg">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;

      expect(card).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R103: clickable prop이 core 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ clickable: true });

      render(<Card clickable>Click me</Card>);
      const card = screen.getByRole('button');

      expect(card).toHaveAttribute('role', coreAttrs.role);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outlined가 적용된다', () => {
      render(<Card variant="outlined">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-variant', 'outlined');
    });

    it('TC-C111: variant: elevated가 적용된다', () => {
      render(<Card variant="elevated">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-variant', 'elevated');
    });

    it('TC-C112: variant: filled가 적용된다', () => {
      render(<Card variant="filled">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-variant', 'filled');
    });
  });

  describe('Size 변형', () => {
    it('TC-C121: size: sm 적용된다', () => {
      render(<Card size="sm">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C122: size: md가 적용된다', () => {
      render(<Card size="md">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-size', 'md');
    });

    it('TC-C123: size: lg가 적용된다', () => {
      render(<Card size="lg">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 outlined다', () => {
      render(<Card>Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-variant', 'outlined');
    });

    it('TC-C011: size 기본값 md다', () => {
      render(<Card>Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-size', 'md');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('TC-R201: children이 렌더링된다', () => {
      render(
        <Card>
          <span data-testid="icon">Icon</span>
          <span>Content</span>
        </Card>
      );
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('TC-R202: className이 병합된다', () => {
      render(<Card className="custom-card">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveClass('wg-card');
      expect(card).toHaveClass('custom-card');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Card className="my-card">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveClass('wg-card');
      expect(card).toHaveClass('my-card');
    });

    it('TC-O110: style 라용', () => {
      render(<Card style={{ marginTop: 16 }}>Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(<Card data-testid="test-card">Content</Card>);
      expect(screen.getByTestId('test-card')).toBeInTheDocument();
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Card data-variant="custom" variant="elevated">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-variant', 'elevated');
    });

    it('TC-O131: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Card data-size="custom" size="lg">Content</Card>);
      const card = screen.getByText('Content').closest('.wg-card')!;
      expect(card).toHaveAttribute('data-size', 'lg');
    });
  });
});

describe('CardHeader (React)', () => {
  it('should render with card-header class', () => {
    render(<CardHeader>Header</CardHeader>);
    const header = screen.getByText('Header').closest('.wg-card__header')!;
    expect(header).toHaveClass('wg-card__header');
  });

  it('should render children', () => {
    render(<CardHeader>My Header</CardHeader>);
    expect(screen.getByText('My Header')).toBeInTheDocument();
  });

  it('should apply divider prop', () => {
    render(<CardHeader divider>Header</CardHeader>);
    const header = screen.getByText('Header').closest('.wg-card__header')!;
    expect(header).toHaveAttribute('data-divider', 'true');
  });
});

describe('CardBody (React)', () => {
  it('should render with card-body class', () => {
    render(<CardBody>Body content</CardBody>);
    const body = screen.getByText('Body content').closest('.wg-card__body')!;
    expect(body).toHaveClass('wg-card__body');
  });

  it('should render children', () => {
    render(<CardBody>Body text</CardBody>);
    expect(screen.getByText('Body text')).toBeInTheDocument();
  });
});

describe('CardFooter (React)', () => {
  it('should render with card-footer class', () => {
    render(<CardFooter>Footer</CardFooter>);
    const footer = screen.getByText('Footer').closest('.wg-card__footer')!;
    expect(footer).toHaveClass('wg-card__footer');
  });

  it('should render children', () => {
    render(<CardFooter>Footer content</CardFooter>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('should apply divider prop', () => {
    render(<CardFooter divider>Footer</CardFooter>);
    const footer = screen.getByText('Footer').closest('.wg-card__footer')!;
    expect(footer).toHaveAttribute('data-divider', 'true');
  });

  it('should apply align prop', () => {
    render(<CardFooter align="end">Footer</CardFooter>);
    const footer = screen.getByText('Footer').closest('.wg-card__footer')!;
    expect(footer).toHaveAttribute('data-align', 'end');
  });
});

describe('Card Compound Usage (React)', () => {
  it('should render Card with Header, Body, and Footer', () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Content here</CardBody>
        <CardFooter>Actions</CardFooter>
      </Card>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content here')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });
});
