import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@woosgem-dev/vue';
import {
  Accordion as AccordionDef,
  AccordionItem as AccordionItemDef,
} from '@woosgem-dev/core';

describe('Accordion (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({});
      const wrapper = mount(Accordion, { slots: { default: 'Content' } });

      expect(wrapper.attributes('data-type')).toBe(coreAttrs['data-type']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: type prop이 core 결과와 일치한다', () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ type: 'multiple' });
      const wrapper = mount(Accordion, { props: { type: 'multiple' } });

      expect(wrapper.attributes('data-type')).toBe(coreAttrs['data-type']);
      expect(wrapper.attributes('data-type')).toBe('multiple');
    });

    it('TC-V102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Accordion, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });

    it('TC-V103: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = AccordionDef.mapPropsToAttrs({ variant: 'filled' });
      const wrapper = mount(Accordion, { props: { variant: 'filled' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outline이 적용된다', () => {
      const wrapper = mount(Accordion, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C111: variant: filled가 적용된다', () => {
      const wrapper = mount(Accordion, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });

    it('TC-C112: variant: ghost가 적용된다', () => {
      const wrapper = mount(Accordion, { props: { variant: 'ghost' } });
      expect(wrapper.attributes('data-variant')).toBe('ghost');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      const wrapper = mount(Accordion, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Accordion, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Accordion, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Type 변형', () => {
    it('TC-C130: type: single이 적용된다', () => {
      const wrapper = mount(Accordion, { props: { type: 'single' } });
      expect(wrapper.attributes('data-type')).toBe('single');
    });

    it('TC-C131: type: multiple이 적용된다', () => {
      const wrapper = mount(Accordion, { props: { type: 'multiple' } });
      expect(wrapper.attributes('data-type')).toBe('multiple');
    });
  });

  describe('기본값', () => {
    it('TC-C010: type 기본값이 single이다', () => {
      const wrapper = mount(Accordion);
      expect(wrapper.attributes('data-type')).toBe('single');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const wrapper = mount(Accordion);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C012: variant 기본값이 outline이다', () => {
      const wrapper = mount(Accordion);
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });
  });

  describe('슬롯', () => {
    it('TC-S100: default 슬롯이 렌더링된다', () => {
      const wrapper = mount(Accordion, { slots: { default: 'Accordion content' } });
      expect(wrapper.text()).toContain('Accordion content');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Accordion, { props: { class: 'custom-accordion' } });
      expect(wrapper.classes()).toContain('wg-accordion');
      expect(wrapper.classes()).toContain('custom-accordion');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(Accordion, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
      });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });
});

describe('AccordionItem (Vue)', () => {
  it('should render with accordion-item class', () => {
    const wrapper = mount(AccordionItem, { slots: { default: 'Item' } });
    expect(wrapper.classes()).toContain('wg-accordion__item');
  });

  it('should render slot content', () => {
    const wrapper = mount(AccordionItem, { slots: { default: 'Item content' } });
    expect(wrapper.text()).toContain('Item content');
  });

  it('should apply open prop', () => {
    const wrapper = mount(AccordionItem, { props: { open: true } });
    expect(wrapper.attributes('data-state')).toBe('open');
  });

  it('should apply disabled prop', () => {
    const wrapper = mount(AccordionItem, { props: { disabled: true } });
    expect(wrapper.attributes('data-state')).toBe('disabled');
  });

  it('should have no data-state when closed and enabled', () => {
    const wrapper = mount(AccordionItem);
    expect(wrapper.attributes('data-state')).toBeUndefined();
  });
});

describe('AccordionTrigger (Vue)', () => {
  it('should render with accordion-trigger class', () => {
    const wrapper = mount(AccordionTrigger, { slots: { default: 'Trigger' } });
    expect(wrapper.classes()).toContain('wg-accordion__trigger');
  });

  it('should render slot content', () => {
    const wrapper = mount(AccordionTrigger, { slots: { default: 'Click me' } });
    expect(wrapper.text()).toContain('Click me');
  });

  it('should be a button element', () => {
    const wrapper = mount(AccordionTrigger, { slots: { default: 'Trigger' } });
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('should have type="button"', () => {
    const wrapper = mount(AccordionTrigger, { slots: { default: 'Trigger' } });
    expect(wrapper.attributes('type')).toBe('button');
  });
});

describe('AccordionContent (Vue)', () => {
  it('should render with accordion-content class', () => {
    const wrapper = mount(AccordionContent, { slots: { default: 'Content' } });
    expect(wrapper.classes()).toContain('wg-accordion__content');
  });

  it('should render slot content', () => {
    const wrapper = mount(AccordionContent, { slots: { default: 'Panel content' } });
    expect(wrapper.text()).toContain('Panel content');
  });

  it('should have role="region"', () => {
    const wrapper = mount(AccordionContent, { slots: { default: 'Content' } });
    expect(wrapper.attributes('role')).toBe('region');
  });
});
