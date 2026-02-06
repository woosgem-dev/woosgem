import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardBody, CardFooter } from '@woosgem/ds-react';
import {
  Card as CardDef,
  CardHeader as CardHeaderDef,
  CardBody as CardBodyDef,
  CardFooter as CardFooterDef,
} from '@woosgem/ds-core';

describe('Card (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({});

      render(<Card>Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;

      expect(card).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(card).toHaveAttribute('data-padding', coreAttrs['data-padding']);
      expect(card).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ variant: 'elevated' });

      render(<Card variant="elevated">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;

      expect(card).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-R102: padding prop이 core 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ padding: 'lg' });

      render(<Card padding="lg">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;

      expect(card).toHaveAttribute('data-padding', coreAttrs['data-padding']);
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
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-variant', 'outlined');
    });

    it('TC-C111: variant: elevated가 적용된다', () => {
      render(<Card variant="elevated">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-variant', 'elevated');
    });

    it('TC-C112: variant: filled가 적용된다', () => {
      render(<Card variant="filled">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-variant', 'filled');
    });
  });

  describe('Padding 변형', () => {
    it('TC-C120: padding: none이 적용된다', () => {
      render(<Card padding="none">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-padding', 'none');
    });

    it('TC-C121: padding: sm이 적용된다', () => {
      render(<Card padding="sm">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-padding', 'sm');
    });

    it('TC-C122: padding: md가 적용된다', () => {
      render(<Card padding="md">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-padding', 'md');
    });

    it('TC-C123: padding: lg가 적용된다', () => {
      render(<Card padding="lg">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-padding', 'lg');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값은 outlined이다', () => {
      render(<Card>Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-variant', 'outlined');
    });

    it('TC-C011: padding 기본값은 md이다', () => {
      render(<Card>Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-padding', 'md');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('TC-R201: JSX children이 렌더링된다', () => {
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
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveClass('card');
      expect(card).toHaveClass('custom-card');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      render(<Card className="my-card">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveClass('card');
      expect(card).toHaveClass('my-card');
    });

    it('TC-O110: style 인라인 적용', () => {
      render(<Card style={{ marginTop: 16 }}>Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O120: data-testid 추가 허용', () => {
      render(<Card data-testid="test-card">Content</Card>);
      expect(screen.getByTestId('test-card')).toBeInTheDocument();
    });

    it('TC-O130: 보호 속성 data-variant 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Card data-variant="custom" variant="elevated">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-variant', 'elevated');
    });

    it('TC-O131: 보호 속성 data-padding 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
      render(<Card data-padding="custom" padding="lg">Content</Card>);
      const card = screen.getByText('Content').closest('.card')!;
      expect(card).toHaveAttribute('data-padding', 'lg');
    });
  });
});

describe('CardHeader (React)', () => {
  it('should render with card-header class', () => {
    render(<CardHeader>Header</CardHeader>);
    const header = screen.getByText('Header').closest('.card-header')!;
    expect(header).toHaveClass('card-header');
  });

  it('should render children', () => {
    render(<CardHeader>My Header</CardHeader>);
    expect(screen.getByText('My Header')).toBeInTheDocument();
  });

  it('should apply divider prop', () => {
    render(<CardHeader divider>Header</CardHeader>);
    const header = screen.getByText('Header').closest('.card-header')!;
    expect(header).toHaveAttribute('data-divider', 'true');
  });
});

describe('CardBody (React)', () => {
  it('should render with card-body class', () => {
    render(<CardBody>Body content</CardBody>);
    const body = screen.getByText('Body content').closest('.card-body')!;
    expect(body).toHaveClass('card-body');
  });

  it('should render children', () => {
    render(<CardBody>Body text</CardBody>);
    expect(screen.getByText('Body text')).toBeInTheDocument();
  });
});

describe('CardFooter (React)', () => {
  it('should render with card-footer class', () => {
    render(<CardFooter>Footer</CardFooter>);
    const footer = screen.getByText('Footer').closest('.card-footer')!;
    expect(footer).toHaveClass('card-footer');
  });

  it('should render children', () => {
    render(<CardFooter>Footer content</CardFooter>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('should apply divider prop', () => {
    render(<CardFooter divider>Footer</CardFooter>);
    const footer = screen.getByText('Footer').closest('.card-footer')!;
    expect(footer).toHaveAttribute('data-divider', 'true');
  });

  it('should apply align prop', () => {
    render(<CardFooter align="end">Footer</CardFooter>);
    const footer = screen.getByText('Footer').closest('.card-footer')!;
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
