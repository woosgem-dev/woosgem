import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@woosgem-dev/react';
import {
  Accordion as AccordionDef,
  AccordionItem as AccordionItemDef,
  AccordionTrigger as AccordionTriggerDef,
  AccordionContent as AccordionContentDef,
} from '@woosgem-dev/core';

describe('Accordion (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({});

      render(<Accordion>Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;

      expect(el).toHaveAttribute('data-type', coreAttrs['data-type']);
      expect(el).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(el).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(el).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: type prop이 core 결과와 일치한다', () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ type: 'multiple' });

      render(<Accordion type="multiple">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;

      expect(el).toHaveAttribute('data-type', coreAttrs['data-type']);
    });

    it('TC-R102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ size: 'lg' });

      render(<Accordion size="lg">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;

      expect(el).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R103: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Accordion variant="filled">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;

      expect(el).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outline이 적용된다', () => {
      render(<Accordion variant="outline">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C111: variant: filled가 적용된다', () => {
      render(<Accordion variant="filled">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-C112: variant: ghost가 적용된다', () => {
      render(<Accordion variant="ghost">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-variant', 'ghost');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      render(<Accordion size="sm">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      render(<Accordion size="md">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-size', 'md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      render(<Accordion size="lg">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Type 변형', () => {
    it('TC-C130: type: single이 적용된다', () => {
      render(<Accordion type="single">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-type', 'single');
    });

    it('TC-C131: type: multiple이 적용된다', () => {
      render(<Accordion type="multiple">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-type', 'multiple');
    });
  });

  describe('기본값', () => {
    it('TC-C010: type 기본값이 single이다', () => {
      render(<Accordion>Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-type', 'single');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      render(<Accordion>Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-size', 'md');
    });

    it('TC-C012: variant 기본값이 outline이다', () => {
      render(<Accordion>Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveAttribute('data-variant', 'outline');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Accordion>Accordion content</Accordion>);
      expect(screen.getByText('Accordion content')).toBeInTheDocument();
    });

    it('TC-R201: className이 병합된다', () => {
      render(<Accordion className="custom-accordion">Content</Accordion>);
      const el = screen.getByText('Content').closest('.accordion')!;
      expect(el).toHaveClass('accordion');
      expect(el).toHaveClass('custom-accordion');
    });
  });
});

describe('AccordionItem (React)', () => {
  it('should render with accordion-item class', () => {
    render(<AccordionItem>Item</AccordionItem>);
    const el = screen.getByText('Item').closest('.accordion-item')!;
    expect(el).toHaveClass('accordion-item');
  });

  it('should render children', () => {
    render(<AccordionItem>Item content</AccordionItem>);
    expect(screen.getByText('Item content')).toBeInTheDocument();
  });

  it('should apply open prop', () => {
    render(<AccordionItem open>Item</AccordionItem>);
    const el = screen.getByText('Item').closest('.accordion-item')!;
    expect(el).toHaveAttribute('data-state', 'open');
  });

  it('should apply disabled prop', () => {
    render(<AccordionItem disabled>Item</AccordionItem>);
    const el = screen.getByText('Item').closest('.accordion-item')!;
    expect(el).toHaveAttribute('data-state', 'disabled');
  });

  it('should have no data-state when closed and enabled', () => {
    render(<AccordionItem>Item</AccordionItem>);
    const el = screen.getByText('Item').closest('.accordion-item')!;
    expect(el).not.toHaveAttribute('data-state');
  });

  it('should merge className', () => {
    render(<AccordionItem className="custom-item">Item</AccordionItem>);
    const el = screen.getByText('Item').closest('.accordion-item')!;
    expect(el).toHaveClass('accordion-item');
    expect(el).toHaveClass('custom-item');
  });
});

describe('AccordionTrigger (React)', () => {
  it('should render with accordion-trigger class', () => {
    render(<AccordionTrigger>Trigger</AccordionTrigger>);
    const el = screen.getByText('Trigger').closest('.accordion-trigger')!;
    expect(el).toHaveClass('accordion-trigger');
  });

  it('should render children', () => {
    render(<AccordionTrigger>Click me</AccordionTrigger>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should have type="button"', () => {
    render(<AccordionTrigger>Trigger</AccordionTrigger>);
    const el = screen.getByRole('button');
    expect(el).toHaveAttribute('type', 'button');
  });

  it('should be a button element', () => {
    render(<AccordionTrigger>Trigger</AccordionTrigger>);
    const el = screen.getByRole('button');
    expect(el.tagName).toBe('BUTTON');
  });
});

describe('AccordionContent (React)', () => {
  it('should render with accordion-content class', () => {
    render(<AccordionContent>Content body</AccordionContent>);
    const el = screen.getByText('Content body').closest('.accordion-content')!;
    expect(el).toHaveClass('accordion-content');
  });

  it('should render children', () => {
    render(<AccordionContent>Panel content</AccordionContent>);
    expect(screen.getByText('Panel content')).toBeInTheDocument();
  });

  it('should have role="region"', () => {
    render(<AccordionContent>Content</AccordionContent>);
    const el = screen.getByRole('region');
    expect(el).toBeInTheDocument();
  });

  it('should merge className', () => {
    render(<AccordionContent className="custom-content">Content</AccordionContent>);
    const el = screen.getByText('Content').closest('.accordion-content')!;
    expect(el).toHaveClass('accordion-content');
    expect(el).toHaveClass('custom-content');
  });
});

describe('Accordion Compound Usage (React)', () => {
  it('should render Accordion with Item, Trigger, and Content', () => {
    render(
      <Accordion>
        <AccordionItem open>
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
