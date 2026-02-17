/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Menu, MenuItem, MenuDivider, MenuGroup } from '../src/Menu';
import {
  Menu as MenuDef,
  MenuItem as MenuItemDef,
  MenuDivider as MenuDividerDef,
  MenuGroup as MenuGroupDef,
  MenuSizes,
} from '@woosgem-dev/core';

describe('Menu (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = MenuDef.mapPropsToAttrs({});
      const { container } = render(<Menu>Content</Menu>);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('Size 변형', () => {
    for (const size of MenuSizes) {
      it(`TC-C110: size: ${size}가 적용된다`, () => {
        const { container } = render(<Menu size={size}>Content</Menu>);
        expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe(size);
      });
    }
  });

  describe('접근성', () => {
    it('TC-A100: role="menu"가 적용된다', () => {
      const { container } = render(<Menu>Content</Menu>);
      expect((container.firstChild as HTMLElement).getAttribute('role')).toBe('menu');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      const { container } = render(<Menu>Content</Menu>);
      expect((container.firstChild as HTMLElement).getAttribute('data-size')).toBe('md');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className 추가 시 병합된다', () => {
      const { container } = render(<Menu className="custom">Content</Menu>);
      const el = container.firstChild as HTMLElement;
      expect(el.className).toContain('menu');
      expect(el.className).toContain('custom');
    });
  });
});

describe('MenuItem (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R200: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = MenuItemDef.mapPropsToAttrs({});
      const { container } = render(<MenuItem>Action</MenuItem>);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.getAttribute('type')).toBe(coreAttrs.type);
      expect(el.getAttribute('tabindex')).toBe(coreAttrs.tabindex);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('상태 변형', () => {
    it('TC-C210: active 상태가 적용된다', () => {
      const { container } = render(<MenuItem active>Action</MenuItem>);
      expect((container.firstChild as HTMLElement).getAttribute('data-state')).toBe('active');
    });

    it('TC-C211: disabled 상태가 적용된다', () => {
      const { container } = render(<MenuItem disabled>Action</MenuItem>);
      const el = container.firstChild as HTMLElement;
      expect(el.getAttribute('data-state')).toBe('disabled');
      expect(el.getAttribute('aria-disabled')).toBe('true');
    });

    it('TC-C212: destructive 상태가 적용된다', () => {
      const { container } = render(<MenuItem destructive>Delete</MenuItem>);
      expect((container.firstChild as HTMLElement).getAttribute('data-destructive')).toBe('true');
    });
  });

  describe('접근성', () => {
    it('TC-A200: role="menuitem"이 적용된다', () => {
      const { container } = render(<MenuItem>Action</MenuItem>);
      expect((container.firstChild as HTMLElement).getAttribute('role')).toBe('menuitem');
    });

    it('TC-A201: tabindex="-1"이 적용된다', () => {
      const { container } = render(<MenuItem>Action</MenuItem>);
      expect((container.firstChild as HTMLElement).getAttribute('tabindex')).toBe('-1');
    });

    it('TC-A202: type="button"이 적용된다', () => {
      const { container } = render(<MenuItem>Action</MenuItem>);
      expect((container.firstChild as HTMLElement).getAttribute('type')).toBe('button');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O200: className 추가 시 병합된다', () => {
      const { container } = render(<MenuItem className="custom">Action</MenuItem>);
      const el = container.firstChild as HTMLElement;
      expect(el.className).toContain('wg-menu__item');
      expect(el.className).toContain('custom');
    });
  });
});

describe('MenuDivider (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R300: core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = MenuDividerDef.mapPropsToAttrs();
      const { container } = render(<MenuDivider />);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('접근성', () => {
    it('TC-A300: role="separator"가 적용된다', () => {
      const { container } = render(<MenuDivider />);
      expect((container.firstChild as HTMLElement).getAttribute('role')).toBe('separator');
    });
  });
});

describe('MenuGroup (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R400: core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = MenuGroupDef.mapPropsToAttrs();
      const { container } = render(<MenuGroup>Content</MenuGroup>);
      const el = container.firstChild as HTMLElement;

      expect(el.getAttribute('role')).toBe(coreAttrs.role);
      expect(el.className).toContain(coreAttrs.class);
    });
  });

  describe('접근성', () => {
    it('TC-A400: role="group"이 적용된다', () => {
      const { container } = render(<MenuGroup>Content</MenuGroup>);
      expect((container.firstChild as HTMLElement).getAttribute('role')).toBe('group');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O400: className 추가 시 병합된다', () => {
      const { container } = render(<MenuGroup className="custom">Content</MenuGroup>);
      const el = container.firstChild as HTMLElement;
      expect(el.className).toContain('wg-menu__group');
      expect(el.className).toContain('custom');
    });
  });
});
