/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AvatarGroup } from '../src/AvatarGroup';
import { AvatarGroup as AvatarGroupDef } from '@woosgem-dev/core';

describe('AvatarGroup (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = AvatarGroupDef.mapPropsToAttrs({});
      const { container } = render(<AvatarGroup />);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-spacing')).toBe(coreAttrs['data-spacing']);
      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      const { container } = render(<AvatarGroup size="sm" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const { container } = render(<AvatarGroup size="md" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const { container } = render(<AvatarGroup size="lg" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('lg');
    });
  });

  describe('Spacing 변형', () => {
    it('TC-C130: spacing: tight가 적용된다', () => {
      const { container } = render(<AvatarGroup spacing="tight" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-spacing')).toBe('tight');
    });

    it('TC-C131: spacing: normal가 적용된다', () => {
      const { container } = render(<AvatarGroup spacing="normal" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-spacing')).toBe('normal');
    });

    it('TC-C132: spacing: loose가 적용된다', () => {
      const { container } = render(<AvatarGroup spacing="loose" />);
      expect((container.firstChild as HTMLElement).getAttribute('data-spacing')).toBe('loose');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="group"이 적용된다', () => {
      const { container } = render(<AvatarGroup />);
      expect((container.firstChild as HTMLElement).getAttribute('role')).toBe('group');
    });

    it('TC-A101: aria-label이 적용된다', () => {
      const { container } = render(<AvatarGroup />);
      expect((container.firstChild as HTMLElement).getAttribute('aria-label')).toBe('Avatar group');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      const { container } = render(<AvatarGroup />);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });

    it('TC-C011: spacing 기본값이 tight이다', () => {
      const { container } = render(<AvatarGroup />);
      expect((container.firstChild as HTMLElement).getAttribute('data-spacing')).toBe('tight');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      const { container } = render(<AvatarGroup className="custom" />);
      const el = container.firstChild as HTMLElement;
      expect(el.className).toContain('avatar-group');
      expect(el.className).toContain('custom');
    });
  });
});
