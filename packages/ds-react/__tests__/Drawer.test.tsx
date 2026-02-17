/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Drawer } from '../src/Drawer';
import { Drawer as DrawerDef } from '@woosgem-dev/core';

describe('Drawer (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = DrawerDef.mapPropsToAttrs({});
      const { container } = render(<Drawer>Content</Drawer>);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('data-position')).toBe(coreAttrs['data-position']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.getAttribute('aria-modal')).toBe(coreAttrs['aria-modal']);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('Position 변형', () => {
    it('TC-C110: position: left가 적용된다', () => {
      const { container } = render(<Drawer position="left">Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-position')).toBe('left');
    });

    it('TC-C111: position: right가 적용된다', () => {
      const { container } = render(<Drawer position="right">Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-position')).toBe('right');
    });

    it('TC-C112: position: top이 적용된다', () => {
      const { container } = render(<Drawer position="top">Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-position')).toBe('top');
    });

    it('TC-C113: position: bottom이 적용된다', () => {
      const { container } = render(<Drawer position="bottom">Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-position')).toBe('bottom');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const { container } = render(<Drawer size="sm">Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const { container } = render(<Drawer size="md">Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const { container } = render(<Drawer size="lg">Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('lg');
    });

    it('TC-C123: size: full이 적용된다', () => {
      const { container } = render(<Drawer size="full">Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('full');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="dialog"가 적용된다', () => {
      const { container } = render(<Drawer>Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('role')).toBe('dialog');
    });

    it('TC-A101: aria-modal="true"가 적용된다', () => {
      const { container } = render(<Drawer>Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('aria-modal')).toBe('true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: position 기본값이 right이다', () => {
      const { container } = render(<Drawer>Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-position')).toBe('right');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const { container } = render(<Drawer>Content</Drawer>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      const { container } = render(<Drawer className="custom">Content</Drawer>);
      const el = container.firstChild as HTMLElement;
      expect(el.className).toContain('drawer');
      expect(el.className).toContain('custom');
    });
  });
});
