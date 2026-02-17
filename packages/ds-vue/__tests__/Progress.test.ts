import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Progress } from '@woosgem-dev/vue';
import { Progress as ProgressDef, getProgressPercentage } from '@woosgem-dev/core';

describe('Progress', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({});
      const wrapper = mount(Progress);

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('role')).toBe(coreAttrs.role);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ variant: 'gradient' });
      const wrapper = mount(Progress, { props: { variant: 'gradient' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-variant')).toBe('gradient');
    });

    it('TC-V102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ color: 'success' });
      const wrapper = mount(Progress, { props: { color: 'success' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-color')).toBe('success');
    });

    it('TC-V103: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Progress, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-V104: value/max가 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ value: 75, max: 100 });
      const wrapper = mount(Progress, { props: { value: 75, max: 100 } });

      expect(wrapper.attributes('aria-valuenow')).toBe(String(coreAttrs['aria-valuenow']));
      expect(wrapper.attributes('aria-valuemax')).toBe(String(coreAttrs['aria-valuemax']));
    });

    it('TC-V105: color: warning이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ color: 'warning' });
      const wrapper = mount(Progress, { props: { color: 'warning' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
    });

    it('TC-V106: color: danger가 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ color: 'danger' });
      const wrapper = mount(Progress, { props: { color: 'danger' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
    });

    it('TC-V107: color: neutral이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ color: 'neutral' });
      const wrapper = mount(Progress, { props: { color: 'neutral' } });

      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
    });

    it('TC-V108: size: sm이 core 결과와 일치한다', () => {
      const coreAttrs = ProgressDef.mapPropsToAttrs({ size: 'sm' });
      const wrapper = mount(Progress, { props: { size: 'sm' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });

    it('TC-V109: 복합 props가 core 결과와 일치한다', () => {
      const props = {
        variant: 'gradient' as const,
        color: 'success' as const,
        size: 'lg' as const,
        value: 60,
        max: 100,
      };
      const coreAttrs = ProgressDef.mapPropsToAttrs(props);
      const wrapper = mount(Progress, { props });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-color')).toBe(coreAttrs['data-color']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.attributes('aria-valuenow')).toBe(String(coreAttrs['aria-valuenow']));
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 default이다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.attributes('data-variant')).toBe('default');
    });

    it('TC-C011: color 기본값이 primary이다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.attributes('data-color')).toBe('primary');
    });

    it('TC-C012: size 기본값이 md이다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C013: value 기본값이 0이다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.attributes('aria-valuenow')).toBe('0');
    });

    it('TC-C014: max 기본값이 100이다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.attributes('aria-valuemax')).toBe('100');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="progressbar"가 적용된다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.attributes('role')).toBe('progressbar');
    });

    it('TC-A101: aria-valuenow가 적용된다', () => {
      const wrapper = mount(Progress, { props: { value: 50 } });
      expect(wrapper.attributes('aria-valuenow')).toBe('50');
    });

    it('TC-A102: aria-valuemin이 적용된다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.attributes('aria-valuemin')).toBe('0');
    });

    it('TC-A103: aria-valuemax가 적용된다', () => {
      const wrapper = mount(Progress, { props: { max: 200 } });
      expect(wrapper.attributes('aria-valuemax')).toBe('200');
    });
  });

  describe('값 클램핑', () => {
    it('TC-CL100: value가 0 미만이면 0으로 클램핑된다', () => {
      const wrapper = mount(Progress, { props: { value: -10 } });
      expect(wrapper.attributes('aria-valuenow')).toBe('0');
    });

    it('TC-CL101: value가 max 초과이면 max로 클램핑된다', () => {
      const wrapper = mount(Progress, { props: { value: 150, max: 100 } });
      expect(wrapper.attributes('aria-valuenow')).toBe('100');
    });

    it('TC-CL102: value 0일 때 --progress-value가 0%이다', () => {
      const wrapper = mount(Progress, { props: { value: 0 } });
      expect(wrapper.attributes('style')).toContain('--progress-value: 0%');
    });

    it('TC-CL103: value 100일 때 --progress-value가 100%이다', () => {
      const wrapper = mount(Progress, { props: { value: 100 } });
      expect(wrapper.attributes('style')).toContain('--progress-value: 100%');
    });
  });

  describe('내부 구조', () => {
    it('TC-ST100: progress-track 요소가 존재한다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.find('.wg-progress__track').exists()).toBe(true);
    });

    it('TC-ST101: progress-fill 요소가 존재한다', () => {
      const wrapper = mount(Progress);
      expect(wrapper.find('.wg-progress__fill').exists()).toBe(true);
    });

    it('TC-ST102: showLabel=false이면 label이 없다', () => {
      const wrapper = mount(Progress, { props: { value: 50 } });
      expect(wrapper.find('.wg-progress__label').exists()).toBe(false);
    });

    it('TC-ST103: showLabel=true이면 label이 표시된다', () => {
      const wrapper = mount(Progress, { props: { value: 50, showLabel: true } });
      const label = wrapper.find('.wg-progress__label');

      expect(label.exists()).toBe(true);
      expect(label.text()).toBe('50%');
    });

    it('TC-ST104: showLabel=true에서 퍼센트 계산이 맞다', () => {
      const wrapper = mount(Progress, { props: { value: 3, max: 5, showLabel: true } });
      const label = wrapper.find('.wg-progress__label');
      const expected = getProgressPercentage(3, 5);

      expect(label.text()).toBe(`${expected}%`);
    });

    it('TC-ST105: showLabel=true에서 클램핑된 값의 퍼센트가 맞다', () => {
      const wrapper = mount(Progress, { props: { value: 200, max: 100, showLabel: true } });
      const label = wrapper.find('.wg-progress__label');

      expect(label.text()).toBe('100%');
    });
  });

  describe('CSS 커스텀 속성', () => {
    it('TC-CSS100: --progress-value가 style에 적용된다', () => {
      const wrapper = mount(Progress, { props: { value: 75 } });
      expect(wrapper.attributes('style')).toContain('--progress-value: 75%');
    });

    it('TC-CSS101: 커스텀 max에서 --progress-value 비율이 맞다', () => {
      const wrapper = mount(Progress, { props: { value: 1, max: 4 } });
      expect(wrapper.attributes('style')).toContain('--progress-value: 25%');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Progress, {
        attrs: { class: 'custom-progress' },
      });

      expect(wrapper.classes()).toContain('wg-progress');
      expect(wrapper.classes()).toContain('custom-progress');
    });

    it('TC-O130: 보호 속성 data-variant 오버라이드 차단', () => {
      const wrapper = mount(Progress, {
        props: { variant: 'gradient' },
        attrs: { 'data-variant': 'custom' },
      });

      expect(wrapper.attributes('data-variant')).toBe('gradient');
    });

    it('TC-O131: 보호 속성 data-color 오버라이드 차단', () => {
      const wrapper = mount(Progress, {
        props: { color: 'success' },
        attrs: { 'data-color': 'custom' },
      });

      expect(wrapper.attributes('data-color')).toBe('success');
    });

    it('TC-O132: 보호 속성 data-size 오버라이드 차단', () => {
      const wrapper = mount(Progress, {
        props: { size: 'lg' },
        attrs: { 'data-size': 'custom' },
      });

      expect(wrapper.attributes('data-size')).toBe('lg');
    });

    it('TC-O133: 보호 속성 role 오버라이드 차단', () => {
      const wrapper = mount(Progress, {
        attrs: { role: 'status' },
      });

      expect(wrapper.attributes('role')).toBe('progressbar');
    });

    it('TC-O170: id 속성 전달 적용', () => {
      const wrapper = mount(Progress, {
        attrs: { id: 'upload-progress' },
      });
      expect(wrapper.attributes('id')).toBe('upload-progress');
    });

    it('TC-O120: data-testid 추가 적용', () => {
      const wrapper = mount(Progress, {
        attrs: { 'data-testid': 'progress-bar' },
      });
      expect(wrapper.attributes('data-testid')).toBe('progress-bar');
    });
  });
});
