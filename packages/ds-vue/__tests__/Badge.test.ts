import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { Badge } from '@woosgem-dev/vue';
import { Badge as BadgeDef } from '@woosgem-dev/core';

describe('Badge', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({});

      render(Badge, { slots: { default: 'New' } });
      const badge = screen.getByText('New');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(badge).toHaveClass(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ variant: 'outline' });

      render(Badge, {
        props: { variant: 'outline' },
        slots: { default: 'Outline' },
      });
      const badge = screen.getByText('Outline');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-V102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'danger' });

      render(Badge, {
        props: { color: 'danger' },
        slots: { default: 'Danger' },
      });
      const badge = screen.getByText('Danger');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-V103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ size: 'lg' });

      render(Badge, {
        props: { size: 'lg' },
        slots: { default: 'Large' },
      });
      const badge = screen.getByText('Large');

      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(badge).toHaveAttribute('data-size', 'lg');
    });

    it('TC-V104: variant: subtle이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ variant: 'subtle' });

      render(Badge, {
        props: { variant: 'subtle' },
        slots: { default: 'Subtle' },
      });
      const badge = screen.getByText('Subtle');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-V105: color: success가 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'success' });

      render(Badge, {
        props: { color: 'success' },
        slots: { default: 'Success' },
      });
      const badge = screen.getByText('Success');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V106: color: warning이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'warning' });

      render(Badge, {
        props: { color: 'warning' },
        slots: { default: 'Warning' },
      });
      const badge = screen.getByText('Warning');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V107: color: info가 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'info' });

      render(Badge, {
        props: { color: 'info' },
        slots: { default: 'Info' },
      });
      const badge = screen.getByText('Info');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V108: color: secondary가 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ color: 'secondary' });

      render(Badge, {
        props: { color: 'secondary' },
        slots: { default: 'Secondary' },
      });
      const badge = screen.getByText('Secondary');

      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-V109: size: sm이 core 결과와 일치한다', () => {
      const coreAttrs = BadgeDef.mapPropsToAttrs({ size: 'sm' });

      render(Badge, {
        props: { size: 'sm' },
        slots: { default: 'Small' },
      });
      const badge = screen.getByText('Small');

      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-V110: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'subtle' as const,
        color: 'success' as const,
        size: 'sm' as const,
      };
      const coreAttrs = BadgeDef.mapPropsToAttrs(props);

      render(Badge, {
        props,
        slots: { default: 'Complex' },
      });
      const badge = screen.getByText('Complex');

      expect(badge).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(badge).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(badge).toHaveAttribute('data-size', coreAttrs['data-size']);
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V300: slot이 렌더링된다', () => {
      render(Badge, { slots: { default: 'Active' } });
      expect(screen.getByText('Active')).toBeInTheDocument();
    });

    it('TC-V301: class가 병합된다', () => {
      render(Badge, {
        attrs: { class: 'custom-class' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('wg-badge');
      expect(badge).toHaveClass('custom-class');
    });

    it('TC-V302: aria-label이 적용된다', () => {
      render(Badge, {
        attrs: { 'aria-label': 'Status badge' },
        slots: { default: 'Active' },
      });
      expect(screen.getByLabelText('Status badge')).toBeInTheDocument();
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      render(Badge, {
        attrs: { class: 'custom' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveClass('wg-badge');
      expect(badge).toHaveClass('custom');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      render(Badge, {
        attrs: { 'data-testid': 'status-badge' },
        slots: { default: 'New' },
      });
      expect(screen.getByTestId('status-badge')).toBeInTheDocument();
    });

    it('TC-O200: 보호 속성 $1 오버라이드 차단', () => {
      render(Badge, {
        props: { variant: 'outline' },
        attrs: { 'data-variant': 'custom' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-O201: 보호 속성 $1 오버라이드 차단', () => {
      render(Badge, {
        props: { color: 'danger' },
        attrs: { 'data-color': 'custom' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-color', 'danger');
    });

    it('TC-O202: 보호 속성 $1 오버라이드 차단', () => {
      render(Badge, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O180: style 속성 전달 적용', () => {
      render(Badge, {
        attrs: { style: 'margin-left: 4px;' },
        slots: { default: 'Badge' },
      });
      const badge = screen.getByText('Badge');

      expect(badge).toHaveStyle({ marginLeft: '4px' });
    });

    it('TC-O170: id 속성 전달 적용', () => {
      render(Badge, {
        attrs: { id: 'my-badge' },
        slots: { default: 'Badge' },
      });
      expect(screen.getByText('Badge')).toHaveAttribute('id', 'my-badge');
    });

    it('TC-O140: aria-describedby 속성 전달 적용', () => {
      render(Badge, {
        attrs: { 'aria-describedby': 'badge-desc' },
        slots: { default: 'Badge' },
      });
      expect(screen.getByText('Badge')).toHaveAttribute('aria-describedby', 'badge-desc');
    });

    it('TC-O141: title 속성 전달 적용', () => {
      render(Badge, {
        attrs: { title: 'Status: Active' },
        slots: { default: 'Active' },
      });
      expect(screen.getByText('Active')).toHaveAttribute('title', 'Status: Active');
    });
  });
});
