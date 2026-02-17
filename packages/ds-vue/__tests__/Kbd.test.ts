import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Kbd } from '@woosgem-dev/vue';
import { Kbd as KbdDef } from '@woosgem-dev/core';

describe('Kbd', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({});

      render(Kbd, { slots: { default: 'Ctrl' } });
      const kbd = screen.getByText('Ctrl');

      expect(kbd).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(kbd).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(kbd).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({ size: 'lg' });

      render(Kbd, {
        props: { size: 'lg' },
        slots: { default: 'Enter' },
      });
      const kbd = screen.getByText('Enter');

      expect(kbd).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(kbd).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V102: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({ variant: 'flat' });

      render(Kbd, {
        props: { variant: 'flat' },
        slots: { default: 'Shift' },
      });
      const kbd = screen.getByText('Shift');

      expect(kbd).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(kbd).toHaveAttribute('data-variant', 'flat');
    });

    it('TC-V103: variant: outline이 core 결과와 일치한다', () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({ variant: 'outline' });

      render(Kbd, {
        props: { variant: 'outline' },
        slots: { default: 'Alt' },
      });
      const kbd = screen.getByText('Alt');

      expect(kbd).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V104: size: sm이 core 결과와 일치한다', () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({ size: 'sm' });

      render(Kbd, {
        props: { size: 'sm' },
        slots: { default: 'Tab' },
      });
      const kbd = screen.getByText('Tab');

      expect(kbd).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V105: size: md가 core 결과와 일치한다', () => {
      const coreAttrs = KbdDef.mapPropsToAttrs({ size: 'md' });

      render(Kbd, {
        props: { size: 'md' },
        slots: { default: 'Esc' },
      });
      const kbd = screen.getByText('Esc');

      expect(kbd).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V106: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        size: 'lg' as const,
        variant: 'outline' as const,
      };
      const coreAttrs = KbdDef.mapPropsToAttrs(props);

      render(Kbd, {
        props,
        slots: { default: 'Space' },
      });
      const kbd = screen.getByText('Space');

      expect(kbd).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(kbd).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 sm이다', () => {
      render(Kbd, { slots: { default: 'K' } });
      const kbd = screen.getByText('K');
      expect(kbd).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C011: variant 기본값이 raised이다', () => {
      render(Kbd, { slots: { default: 'K' } });
      const kbd = screen.getByText('K');
      expect(kbd).toHaveAttribute('data-variant', 'raised');
    });
  });

  describe('렌더링', () => {
    it('TC-R100: kbd 태그로 렌더링된다', () => {
      render(Kbd, { slots: { default: 'Ctrl' } });
      const kbd = screen.getByText('Ctrl');
      expect(kbd.tagName).toBe('KBD');
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(Kbd, { slots: { default: 'Ctrl+C' } });
      expect(screen.getByText('Ctrl+C')).toBeInTheDocument();
    });

    it('TC-V301: class가 병합된다', () => {
      render(Kbd, {
        attrs: { class: 'custom-class' },
        slots: { default: 'K' },
      });
      const kbd = screen.getByText('K');

      expect(kbd).toHaveClass('kbd');
      expect(kbd).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label이 적용된다', () => {
      render(Kbd, {
        attrs: { 'aria-label': 'Keyboard shortcut' },
        slots: { default: 'K' },
      });
      expect(screen.getByLabelText('Keyboard shortcut')).toBeInTheDocument();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(Kbd, {
        attrs: { class: 'custom' },
        slots: { default: 'K' },
      });
      const kbd = screen.getByText('K');

      expect(kbd).toHaveClass('kbd');
      expect(kbd).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(Kbd, {
        attrs: { 'data-testid': 'shortcut-key' },
        slots: { default: 'K' },
      });
      expect(screen.getByTestId('shortcut-key')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 data-size 오버라이드 차단', () => {
      render(Kbd, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
        slots: { default: 'K' },
      });
      const kbd = screen.getByText('K');

      expect(kbd).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O201: 보호 속성 data-variant 오버라이드 차단', () => {
      render(Kbd, {
        props: { variant: 'flat' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'K' },
      });
      const kbd = screen.getByText('K');

      expect(kbd).toHaveAttribute('data-variant', 'flat');
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(Kbd, {
        attrs: { id: 'my-kbd' },
        slots: { default: 'K' },
      });
      expect(screen.getByText('K')).toHaveAttribute('id', 'my-kbd');
    });
  });
});
