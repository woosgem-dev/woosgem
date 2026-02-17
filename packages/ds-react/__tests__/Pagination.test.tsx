/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Pagination, PaginationItem } from '../src/Pagination';
import { Pagination as PaginationDef, PaginationItem as PaginationItemDef } from '@woosgem-dev/core';

describe('Pagination (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = PaginationDef.mapPropsToAttrs({});
      const { container } = render(<Pagination />);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-shape')).toBe(coreAttrs['data-shape']);
      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.getAttribute('aria-label')).toBe(coreAttrs['aria-label']);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outline이 적용된다', () => {
      const { container } = render(<Pagination variant="outline" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-variant')).toBe('outline');
    });

    it('TC-C111: variant: filled가 적용된다', () => {
      const { container } = render(<Pagination variant="filled" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-variant')).toBe('filled');
    });

    it('TC-C112: variant: ghost가 적용된다', () => {
      const { container } = render(<Pagination variant="ghost" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-variant')).toBe('ghost');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      const { container } = render(<Pagination size="sm" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const { container } = render(<Pagination size="md" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const { container } = render(<Pagination size="lg" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('lg');
    });
  });

  describe('Shape 변형', () => {
    it('TC-C130: shape: rounded가 적용된다', () => {
      const { container } = render(<Pagination shape="rounded" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-shape')).toBe('rounded');
    });

    it('TC-C131: shape: circle이 적용된다', () => {
      const { container } = render(<Pagination shape="circle" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-shape')).toBe('circle');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="navigation"이 적용된다', () => {
      const { container } = render(<Pagination />);
      expect((container.firstChild as HTMLElement).getAttribute('role')).toBe('navigation');
    });

    it('TC-A101: aria-label="Pagination"이 적용된다', () => {
      const { container } = render(<Pagination />);
      expect((container.firstChild as HTMLElement).getAttribute('aria-label')).toBe('Pagination');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 outline이다', () => {
      const { container } = render(<Pagination />);
      expect((container.firstChild as HTMLElement).getAttribute('data-variant')).toBe('outline');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const { container } = render(<Pagination />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });

    it('TC-C012: shape 기본값이 rounded이다', () => {
      const { container } = render(<Pagination />);
      expect((container.firstChild as HTMLElement).getAttribute('data-shape')).toBe('rounded');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      const { container } = render(<Pagination className="custom" />);
      const el = container.firstChild as HTMLElement;
      expect(el.className).toContain('wg-pagination');
      expect(el.className).toContain('custom');
    });
  });
});

describe('PaginationItem (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R200: 기본 props가 core 결과와 일치한다', () => {
      const coreAttrs = PaginationItemDef.mapPropsToAttrs({});
      const { container } = render(<PaginationItem>1</PaginationItem>);
      const el = container.firstChild as HTMLElement;

      expect(el.className).toContain(coreAttrs.class);
      expect(el.getAttribute('type')).toBe(coreAttrs.type);
    });
  });

  describe('상태', () => {
    it('TC-S100: active 상태가 적용된다', () => {
      const { container } = render(<PaginationItem active>1</PaginationItem>);
      const el = container.firstChild as HTMLElement;
      expect(el.getAttribute('data-state')).toBe('active');
      expect(el.getAttribute('aria-current')).toBe('page');
    });

    it('TC-S101: disabled 상태가 적용된다', () => {
      const { container } = render(<PaginationItem disabled>1</PaginationItem>);
      const el = container.firstChild as HTMLElement;
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.getAttribute('aria-disabled')).toBe('true');
    });

    it('TC-S102: active=false 시 aria-current 미적용', () => {
      const { container } = render(<PaginationItem>1</PaginationItem>);
      const el = container.firstChild as HTMLElement;
      expect(el.getAttribute('aria-current')).toBeNull();
    });
  });
});
