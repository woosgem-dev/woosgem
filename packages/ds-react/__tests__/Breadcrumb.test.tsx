/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Breadcrumb, BreadcrumbItem } from '../src/Breadcrumb';
import { Breadcrumb as BreadcrumbDef, BreadcrumbItem as BreadcrumbItemDef } from '@woosgem-dev/core';

describe('Breadcrumb (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = BreadcrumbDef.mapPropsToAttrs({});
      const { container } = render(<Breadcrumb />);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('aria-label')).toBe(coreAttrs['aria-label']);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const { container } = render(<Breadcrumb size="sm" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const { container } = render(<Breadcrumb size="md" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const { container } = render(<Breadcrumb size="lg" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('lg');
    });
  });

  describe('접근성', () => {
    it('TC-A100: aria-label="Breadcrumb"이 적용된다', () => {
      const { container } = render(<Breadcrumb />);
      expect((container.firstChild as HTMLElement).getAttribute('aria-label')).toBe('Breadcrumb');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      const { container } = render(<Breadcrumb />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      const { container } = render(<Breadcrumb className="custom" />);
      const el = container.firstChild as HTMLElement;
      expect(el.className).toContain('breadcrumb');
      expect(el.className).toContain('custom');
    });
  });
});

describe('BreadcrumbItem (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R200: 기본 props가 core 결과와 일치한다', () => {
      const coreAttrs = BreadcrumbItemDef.mapPropsToAttrs({});
      const { container } = render(<BreadcrumbItem>Home</BreadcrumbItem>);
      const el = container.firstChild as HTMLElement;

      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('상태', () => {
    it('TC-S100: active 상태가 적용된다', () => {
      const { container } = render(<BreadcrumbItem active>Current</BreadcrumbItem>);
      const el = container.firstChild as HTMLElement;
      expect(el.getAttribute('data-state')).toBe('active');
      expect(el.getAttribute('aria-current')).toBe('page');
    });

    it('TC-S101: disabled 상태가 적용된다', () => {
      const { container } = render(<BreadcrumbItem disabled>Disabled</BreadcrumbItem>);
      const el = container.firstChild as HTMLElement;
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.getAttribute('aria-disabled')).toBe('true');
    });
  });
});
