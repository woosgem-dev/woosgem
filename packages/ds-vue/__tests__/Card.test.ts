import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Card, CardHeader, CardBody, CardFooter } from '@woosgem-dev/vue';
import { Card as CardDef } from '@woosgem-dev/core';

describe('Card (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({});
      const wrapper = mount(Card, { slots: { default: 'Content' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-padding')).toBe(coreAttrs['data-padding']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ variant: 'elevated' });
      const wrapper = mount(Card, { props: { variant: 'elevated' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-variant')).toBe('elevated');
    });

    it('TC-V102: padding prop이 core 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ padding: 'lg' });
      const wrapper = mount(Card, { props: { padding: 'lg' } });

      expect(wrapper.attributes('data-padding')).toBe(coreAttrs['data-padding']);
    });

    it('TC-V103: clickable prop이 core 결과와 일치한다', () => {
      const coreAttrs = CardDef.mapPropsToAttrs({ clickable: true });
      const wrapper = mount(Card, { props: { clickable: true } });

      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outlined가 적용된다', () => {
      const wrapper = mount(Card, { props: { variant: 'outlined' } });
      expect(wrapper.attributes('data-variant')).toBe('outlined');
    });

    it('TC-C111: variant: elevated가 적용된다', () => {
      const wrapper = mount(Card, { props: { variant: 'elevated' } });
      expect(wrapper.attributes('data-variant')).toBe('elevated');
    });

    it('TC-C112: variant: filled가 적용된다', () => {
      const wrapper = mount(Card, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });

  describe('Padding 변형', () => {
    it('TC-C120: padding: none 적용된다', () => {
      const wrapper = mount(Card, { props: { padding: 'none' } });
      expect(wrapper.attributes('data-padding')).toBe('none');
    });

    it('TC-C121: padding: sm 적용된다', () => {
      const wrapper = mount(Card, { props: { padding: 'sm' } });
      expect(wrapper.attributes('data-padding')).toBe('sm');
    });

    it('TC-C122: padding: md가 적용된다', () => {
      const wrapper = mount(Card, { props: { padding: 'md' } });
      expect(wrapper.attributes('data-padding')).toBe('md');
    });

    it('TC-C123: padding: lg가 적용된다', () => {
      const wrapper = mount(Card, { props: { padding: 'lg' } });
      expect(wrapper.attributes('data-padding')).toBe('lg');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 outlined이다', () => {
      const wrapper = mount(Card);
      expect(wrapper.attributes('data-variant')).toBe('outlined');
    });

    it('TC-C011: padding 기본값이 md이다', () => {
      const wrapper = mount(Card);
      expect(wrapper.attributes('data-padding')).toBe('md');
    });
  });

  describe('슬롯', () => {
    it('TC-S100: default 슬롯이 렌더링된다', () => {
      const wrapper = mount(Card, { slots: { default: 'Card content' } });
      expect(wrapper.text()).toContain('Card content');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Card, { props: { class: 'custom-card' } });
      expect(wrapper.classes()).toContain('wg-card');
      expect(wrapper.classes()).toContain('custom-card');
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      const wrapper = mount(Card, {
        props: { variant: 'elevated' },
        attrs: { 'data-variant': 'custom' },
      });
      expect(wrapper.attributes('data-variant')).toBe('elevated');
    });
  });
});

describe('CardHeader (Vue)', () => {
  it('should render with card-header class', () => {
    const wrapper = mount(CardHeader, { slots: { default: 'Header' } });
    expect(wrapper.classes()).toContain('wg-card__header');
  });

  it('should render slot content', () => {
    const wrapper = mount(CardHeader, { slots: { default: 'My Header' } });
    expect(wrapper.text()).toContain('My Header');
  });

  it('should apply divider prop', () => {
    const wrapper = mount(CardHeader, { props: { divider: true } });
    expect(wrapper.attributes('data-divider')).toBe('true');
  });
});

describe('CardBody (Vue)', () => {
  it('should render with card-body class', () => {
    const wrapper = mount(CardBody, { slots: { default: 'Body' } });
    expect(wrapper.classes()).toContain('wg-card__body');
  });

  it('should render slot content', () => {
    const wrapper = mount(CardBody, { slots: { default: 'Body content' } });
    expect(wrapper.text()).toContain('Body content');
  });
});

describe('CardFooter (Vue)', () => {
  it('should render with card-footer class', () => {
    const wrapper = mount(CardFooter, { slots: { default: 'Footer' } });
    expect(wrapper.classes()).toContain('wg-card__footer');
  });

  it('should render slot content', () => {
    const wrapper = mount(CardFooter, { slots: { default: 'Footer content' } });
    expect(wrapper.text()).toContain('Footer content');
  });

  it('should apply divider prop', () => {
    const wrapper = mount(CardFooter, { props: { divider: true } });
    expect(wrapper.attributes('data-divider')).toBe('true');
  });

  it('should apply align prop', () => {
    const wrapper = mount(CardFooter, { props: { align: 'end' } });
    expect(wrapper.attributes('data-align')).toBe('end');
  });
});
