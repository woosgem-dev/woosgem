import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@woosgem-dev/vue';

describe('Modal (Vue)', () => {
  describe('기본 렌더링', () => {
    it('TC-V100: open=false 시 렌더링되지 않는다', () => {
      const wrapper = mount(Modal, {
        props: { open: false },
        slots: { default: 'Content' },
      });
      expect(wrapper.html()).toSatisfy((html: string) => html === '' || html === '<!---->');
    });

    it('TC-V101: open=true 시 렌더링된다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: {
          stubs: { teleport: true },
        },
      });
      expect(wrapper.text()).toContain('Content');
    });
  });

  describe('Size 변형', () => {
    it('TC-C110: size: sm가 적용된다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'sm', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('sm');
    });

    it('TC-C111: size: md가 적용된다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'md', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('md');
    });

    it('TC-C112: size: lg가 적용된다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'lg', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('lg');
    });

    it('TC-C113: size: xl가 적용된다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'xl', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('xl');
    });

    it('TC-C114: size: full가 적용된다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'full', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('full');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="dialog"가 적용된다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('role')).toBe('dialog');
    });

    it('TC-A101: aria-modal=true가 적용된다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('aria-modal')).toBe('true');
    });
  });

  describe('닫기 동작', () => {
    it('TC-CL100: 버이 릭 close 벤 발생다', async () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });

      const overlay = wrapper.find('.overlay');
      await overlay.trigger('click');

      expect(wrapper.emitted('close')).toBeTruthy();
    });

    it('TC-CL101: disableOverlayClick 버이 릭로 히지 는', async () => {
      const wrapper = mount(Modal, {
        props: { open: true, disableOverlayClick: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });

      const overlay = wrapper.find('.overlay');
      await overlay.trigger('click');

      expect(wrapper.emitted('close')).toBeFalsy();
    });

    it('TC-CL102: closable=false 기 작비활화다', async () => {
      const wrapper = mount(Modal, {
        props: { open: true, closable: false, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });

      const overlay = wrapper.find('.overlay');
      await overlay.trigger('click');

      expect(wrapper.emitted('close')).toBeFalsy();
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값 md다', () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('md');
    });
  });

  describe('v-model:open 지원', () => {
    it('TC-VM100: update:open 벤 발생다', async () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });

      const overlay = wrapper.find('.overlay');
      await overlay.trigger('click');

      expect(wrapper.emitted('update:open')).toBeTruthy();
      expect(wrapper.emitted('update:open')![0]).toEqual([false]);
    });
  });
});

describe('ModalHeader (Vue)', () => {
  it('should render with modal-header class', () => {
    const wrapper = mount(ModalHeader, { slots: { default: 'Header' } });
    expect(wrapper.classes()).toContain('modal-header');
  });

  it('should render slot content', () => {
    const wrapper = mount(ModalHeader, { slots: { default: 'My Title' } });
    expect(wrapper.text()).toContain('My Title');
  });

  it('should render close button when showClose=true', () => {
    const wrapper = mount(ModalHeader, {
      props: { showClose: true },
      slots: { default: 'Title' },
    });
    const closeBtn = wrapper.find('.modal-close');
    expect(closeBtn.exists()).toBe(true);
  });

  it('should emit close when close button is clicked', async () => {
    const wrapper = mount(ModalHeader, {
      props: { showClose: true },
      slots: { default: 'Title' },
    });

    const closeBtn = wrapper.find('.modal-close');
    await closeBtn.trigger('click');

    expect(wrapper.emitted('close')).toBeTruthy();
  });
});

describe('ModalBody (Vue)', () => {
  it('should render with modal-body class', () => {
    const wrapper = mount(ModalBody, { slots: { default: 'Body' } });
    expect(wrapper.classes()).toContain('modal-body');
  });

  it('should render slot content', () => {
    const wrapper = mount(ModalBody, { slots: { default: 'Body content' } });
    expect(wrapper.text()).toContain('Body content');
  });

  it('should apply scrollable prop by default', () => {
    const wrapper = mount(ModalBody);
    expect(wrapper.attributes('data-scrollable')).toBe('true');
  });
});

describe('ModalFooter (Vue)', () => {
  it('should render with modal-footer class', () => {
    const wrapper = mount(ModalFooter, { slots: { default: 'Footer' } });
    expect(wrapper.classes()).toContain('modal-footer');
  });

  it('should render slot content', () => {
    const wrapper = mount(ModalFooter, { slots: { default: 'Footer content' } });
    expect(wrapper.text()).toContain('Footer content');
  });

  it('should apply align prop', () => {
    const wrapper = mount(ModalFooter, { props: { align: 'center' } });
    expect(wrapper.attributes('data-align')).toBe('center');
  });

  it('should default align to end', () => {
    const wrapper = mount(ModalFooter);
    expect(wrapper.attributes('data-align')).toBe('end');
  });
});
