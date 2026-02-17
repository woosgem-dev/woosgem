import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Switch } from '@woosgem-dev/vue';
import { Switch as SwitchDef } from '@woosgem-dev/core';

describe('Switch (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({});
      const wrapper = mount(Switch);

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('aria-checked')).toBe(String(coreAttrs['aria-checked']));
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Switch, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-V102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ color: 'success' });
      const wrapper = mount(Switch, { props: { color: 'success' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-color')).toBe('success');
    });

    it('TC-V103: checked prop이 core 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ checked: true });
      const wrapper = mount(Switch, { props: { checked: true } });

      expect(wrapper.attributes('aria-checked')).toBe(String(coreAttrs['aria-checked']));
      expect(wrapper.attributes('data-state')).toBe(coreAttrs['data-state']);
    });

    it('TC-V104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SwitchDef.mapPropsToAttrs({ disabled: true });
      const wrapper = mount(Switch, { props: { disabled: true } });

      expect(wrapper.attributes('data-state')).toBe(coreAttrs['data-state']);
      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });

  describe('Size 변형', () => {
    it('TC-C110: size: sm가 적용된다', () => {
      const wrapper = mount(Switch, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C111: size: md가 적용된다', () => {
      const wrapper = mount(Switch, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C112: size: lg가 적용된다', () => {
      const wrapper = mount(Switch, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('Color 변형', () => {
    it('TC-C120: color: primary가 적용된다', () => {
      const wrapper = mount(Switch, { props: { color: 'primary' } });
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C121: color: secondary가 적용된다', () => {
      const wrapper = mount(Switch, { props: { color: 'secondary' } });
      expect(wrapper.attributes('data-color')).toBe('secondary');
    });

    it('TC-C122: color: success가 적용된다', () => {
      const wrapper = mount(Switch, { props: { color: 'success' } });
      expect(wrapper.attributes('data-color')).toBe('success');
    });
  });

  describe('상태 변경', () => {
    it('TC-S100: checked 상태가 적용된다', () => {
      const wrapper = mount(Switch, { props: { checked: true } });

      expect(wrapper.attributes('data-state')).toBe('checked');
      expect(wrapper.attributes('aria-checked')).toBe('true');
    });

    it('TC-S101: disabled 상태가 적용된다', () => {
      const wrapper = mount(Switch, { props: { disabled: true } });

      expect(wrapper.attributes('data-state')).toBe('disabled');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('TC-S102: checked + disabled 상태가 적용된다', () => {
      const wrapper = mount(Switch, { props: { checked: true, disabled: true } });

      expect(wrapper.attributes('data-state')).toBe('checked-disabled');
      expect(wrapper.attributes('aria-checked')).toBe('true');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="switch"가 적용된다', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('role')).toBe('switch');
    });

    it('TC-A101: aria-checked가 checked 상태를 반영한다', () => {
      const wrapper = mount(Switch, { props: { checked: false } });
      expect(wrapper.attributes('aria-checked')).toBe('false');
    });

    it('TC-A102: aria-checked가 true를 반영한다', () => {
      const wrapper = mount(Switch, { props: { checked: true } });
      expect(wrapper.attributes('aria-checked')).toBe('true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C011: color 기본값이 primary이다', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C012: checked 기본값이 false이다', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('aria-checked')).toBe('false');
    });

    it('TC-C013: disabled 기본값이 false이다', () => {
      const wrapper = mount(Switch);
      expect(wrapper.attributes('disabled')).toBeUndefined();
    });
  });

  describe('이벤트 핸들러', () => {
    it('TC-O150: click 이벤트 발생한다', async () => {
      const handleClick = vi.fn();
      const wrapper = mount(Switch, {
        attrs: { onClick: handleClick },
      });

      await wrapper.trigger('click');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Switch, { props: { class: 'custom-switch' } });

      expect(wrapper.classes()).toContain('wg-switch');
      expect(wrapper.classes()).toContain('custom-switch');
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      const wrapper = mount(Switch, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });

      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-O131: 보호 속성 role 오버라이드 차단', () => {
      const wrapper = mount(Switch, {
        attrs: { role: 'checkbox' },
      });

      expect(wrapper.attributes('role')).toBe('switch');
    });
  });
});
