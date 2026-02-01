import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Textarea } from '@woosgem/ds-vue';
import { Textarea as TextareaDef } from '@woosgem/ds-core';

describe('Textarea (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({});
      const wrapper = mount(Textarea);

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-resize')).toBe(coreAttrs['data-resize']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ variant: 'filled' });
      const wrapper = mount(Textarea, { props: { variant: 'filled' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
    });

    it('TC-V102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Textarea, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });

    it('TC-V103: resize prop이 core 결과와 일치한다', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ resize: 'both' });
      const wrapper = mount(Textarea, { props: { resize: 'both' } });

      expect(wrapper.attributes('data-resize')).toBe(coreAttrs['data-resize']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outline이 적용된다', () => {
      const wrapper = mount(Textarea, { props: { variant: 'outline' } });
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C111: variant: filled가 적용된다', () => {
      const wrapper = mount(Textarea, { props: { variant: 'filled' } });
      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      const wrapper = mount(Textarea, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Textarea, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Textarea, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Resize 변형', () => {
    it('TC-C130: resize: none이 적용된다', () => {
      const wrapper = mount(Textarea, { props: { resize: 'none' } });
      expect(wrapper.attributes('data-resize')).toBe('none');
    });

    it('TC-C131: resize: vertical이 적용된다', () => {
      const wrapper = mount(Textarea, { props: { resize: 'vertical' } });
      expect(wrapper.attributes('data-resize')).toBe('vertical');
    });

    it('TC-C132: resize: horizontal이 적용된다', () => {
      const wrapper = mount(Textarea, { props: { resize: 'horizontal' } });
      expect(wrapper.attributes('data-resize')).toBe('horizontal');
    });

    it('TC-C133: resize: both가 적용된다', () => {
      const wrapper = mount(Textarea, { props: { resize: 'both' } });
      expect(wrapper.attributes('data-resize')).toBe('both');
    });
  });

  describe('상태 변형', () => {
    it('TC-S100: disabled 상태가 적용된다', () => {
      const wrapper = mount(Textarea, { props: { disabled: true } });

      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('TC-S101: error 상태가 적용된다', () => {
      const wrapper = mount(Textarea, { props: { error: true } });

      expect(wrapper.attributes('data-state')).toBe('error');
      expect(wrapper.attributes('aria-invalid')).toBe('true');
    });

    it('TC-S102: disabled가 error보다 우선한다', () => {
      const wrapper = mount(Textarea, { props: { disabled: true, error: true } });

      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값은 outline이다', () => {
      const wrapper = mount(Textarea);
      expect(wrapper.attributes('data-variant')).toBe('outline');
    });

    it('TC-C011: size 기본값은 md이다', () => {
      const wrapper = mount(Textarea);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C012: resize 기본값은 vertical이다', () => {
      const wrapper = mount(Textarea);
      expect(wrapper.attributes('data-resize')).toBe('vertical');
    });
  });

  describe('Vue 전용 props', () => {
    it('TC-V200: placeholder가 적용된다', () => {
      const wrapper = mount(Textarea, { props: { placeholder: 'Enter text...' } });
      expect(wrapper.attributes('placeholder')).toBe('Enter text...');
    });

    it('TC-V201: rows가 적용된다', () => {
      const wrapper = mount(Textarea, { props: { rows: 5 } });
      expect(wrapper.attributes('rows')).toBe('5');
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-O150: input 이벤트가 발생한다', async () => {
      const wrapper = mount(Textarea);

      await wrapper.trigger('input');

      expect(wrapper.emitted()).toHaveProperty('input');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Textarea, { props: { class: 'custom-textarea' } });

      expect(wrapper.classes()).toContain('textarea');
      expect(wrapper.classes()).toContain('custom-textarea');
    });

    it('TC-O130: 보호 속성 data-variant 오버라이드 차단', () => {
      const wrapper = mount(Textarea, {
        props: { variant: 'filled' },
        attrs: { 'data-variant': 'custom' },
      });

      expect(wrapper.attributes('data-variant')).toBe('filled');
    });
  });
});
