/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Tag } from '../src/Tag';
import { Tag as TagDef } from '@woosgem-dev/core';

describe('Tag (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = TagDef.mapPropsToAttrs({});
      const { container } = render(<Tag>Test</Tag>);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-color')).toBe(coreAttrs['data-color']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: solid가 적용된다', () => {
      const { container } = render(<Tag variant="solid">Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-variant')).toBe('solid');
    });

    it('TC-C111: variant: outline가 적용된다', () => {
      const { container } = render(<Tag variant="outline">Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-variant')).toBe('outline');
    });

    it('TC-C112: variant: subtle가 적용된다', () => {
      const { container } = render(<Tag variant="subtle">Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-variant')).toBe('subtle');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const { container } = render(<Tag size="sm">Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const { container } = render(<Tag size="md">Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const { container } = render(<Tag size="lg">Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('lg');
    });
  });

  describe('상태', () => {
    it('TC-S100: closable 상태가 적용된다', () => {
      const { container } = render(<Tag closable>Test</Tag>);
      expect((container.firstChild as HTMLElement).hasAttribute('data-closable')).toBe(true);
    });

    it('TC-S101: disabled 상태가 적용된다', () => {
      const { container } = render(<Tag disabled>Test</Tag>);
      const el = container.firstChild as HTMLElement;
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 subtle이다', () => {
      const { container } = render(<Tag>Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-variant')).toBe('subtle');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const { container } = render(<Tag>Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });

    it('TC-C012: color 기본값이 primary이다', () => {
      const { container } = render(<Tag>Test</Tag>);
      expect((container.firstChild as HTMLElement).getAttribute('data-color')).toBe('primary');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      const { container } = render(<Tag className="custom-tag">Test</Tag>);
      const el = container.firstChild as HTMLElement;
      expect(el.className).toContain('tag');
      expect(el.className).toContain('custom-tag');
    });
  });
});
