import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Divider } from '@woosgem-dev/vue';
import { Divider as DividerDef } from '@woosgem-dev/core';

describe('Divider', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({});

      render(Divider);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveAttribute('aria-orientation', coreAttrs['aria-orientation']);
      expect(divider).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: orientation prop이 core 결과와 일치한다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ orientation: 'vertical' });

      render(Divider, {
        props: { orientation: 'vertical' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-orientation', 'vertical');
      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('TC-V102: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ variant: 'dashed' });

      render(Divider, {
        props: { variant: 'dashed' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-variant', 'dashed');
    });

    it('TC-V103: spacing prop이 core 결과와 일치한다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ spacing: 'lg' });

      render(Divider, {
        props: { spacing: 'lg' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });

    it('TC-V104: role?  separator다', () => {
      render(Divider);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('role', 'separator');
    });

    it('TC-V105: spacing: nonecore 결과 치다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ spacing: 'none' });

      render(Divider, {
        props: { spacing: 'none' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
    });

    it('TC-V106: spacing: smcore 결과 치다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ spacing: 'sm' });

      render(Divider, {
        props: { spacing: 'sm' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
    });

    it('TC-V107: orientation: horizontalcore 결과 치다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ orientation: 'horizontal' });

      render(Divider, {
        props: { orientation: 'horizontal' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('TC-V108: variant: solid가 core 결과 치다', () => {
      const coreAttrs = DividerDef.mapPropsToAttrs({ variant: 'solid' });

      render(Divider, {
        props: { variant: 'solid' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V109: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        orientation: 'vertical' as const,
        variant: 'dashed' as const,
        spacing: 'lg' as const,
      };
      const coreAttrs = DividerDef.mapPropsToAttrs(props);

      render(Divider, { props });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(divider).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(divider).toHaveAttribute('data-spacing', coreAttrs['data-spacing']);
      expect(divider).toHaveAttribute('aria-orientation', coreAttrs['aria-orientation']);
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: class가 병합된다', () => {
      render(Divider, {
        attrs: { class: 'custom-class' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('custom-class');
    });

    it('TC-V301: aria-label이 적용된다', () => {
      render(Divider, {
        attrs: { 'aria-label': 'Section divider' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-label', 'Section divider');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(Divider, {
        attrs: { class: 'custom' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass('divider');
      expect(divider).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(Divider, {
        attrs: { 'data-testid': 'main-divider' },
      });
      expect(screen.getByTestId('main-divider')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      render(Divider, {
        props: { orientation: 'vertical' },
        attrs: { 'data-orientation': 'custom' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-orientation', 'vertical');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      render(Divider, {
        props: { variant: 'dashed' },
        attrs: { 'data-variant': 'custom' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-variant', 'dashed');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      render(Divider, {
        props: { spacing: 'lg' },
        attrs: { 'data-spacing': 'custom' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('data-spacing', 'lg');
    });

    it('TC-O203: 보호 성 role 버이차단', () => {
      render(Divider, {
        attrs: { role: 'presentation' },
      });
      // separator role??????
      expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('TC-O204: 보호 속성 $1 오버라이드 차단', () => {
      render(Divider, {
        props: { orientation: 'vertical' },
        attrs: { 'aria-orientation': 'horizontal' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('TC-O180: style 속성 전달 적용', () => {
      render(Divider, {
        attrs: { style: 'margin-top: 16px;' },
      });
      const divider = screen.getByRole('separator');

      expect(divider).toHaveStyle({ marginTop: '16px' });
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(Divider, {
        attrs: { id: 'section-divider' },
      });
      expect(screen.getByRole('separator')).toHaveAttribute('id', 'section-divider');
    });
  });
});
