import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@woosgem/ds-vue';

describe('Modal (Vue)', () => {
  describe('ê¸°ë³¸ ?Œë”ë§?, () => {
    it('TC-V100: open=false?????Œë”ë§ë˜ì§€ ?ŠëŠ”??, () => {
      const wrapper = mount(Modal, {
        props: { open: false },
        slots: { default: 'Content' },
      });
      expect(wrapper.html()).toSatisfy((html: string) => html === '' || html === '<!---->');
    });

    it('TC-V101: open=true?????Œë”ë§ëœ??, () => {
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

  describe('Size ë³€??, () => {
    it('TC-C110: size: sm???ìš©?œë‹¤', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'sm', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('sm');
    });

    it('TC-C111: size: mdê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'md', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('md');
    });

    it('TC-C112: size: lgê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'lg', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('lg');
    });

    it('TC-C113: size: xl???ìš©?œë‹¤', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'xl', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('xl');
    });

    it('TC-C114: size: full???ìš©?œë‹¤', () => {
      const wrapper = mount(Modal, {
        props: { open: true, size: 'full', teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('full');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="dialog"ê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('role')).toBe('dialog');
    });

    it('TC-A101: aria-modal=trueê°€ ?ìš©?œë‹¤', () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('aria-modal')).toBe('true');
    });
  });

  describe('?«ê¸° ?™ìž‘', () => {
    it('TC-CL100: ?¤ë²„?ˆì´ ?´ë¦­ ??close ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });

      const overlay = wrapper.find('.overlay');
      await overlay.trigger('click');

      expect(wrapper.emitted('close')).toBeTruthy();
    });

    it('TC-CL101: disableOverlayClick ???¤ë²„?ˆì´ ?´ë¦­?¼ë¡œ ?«ížˆì§€ ?ŠëŠ”??, async () => {
      const wrapper = mount(Modal, {
        props: { open: true, disableOverlayClick: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });

      const overlay = wrapper.find('.overlay');
      await overlay.trigger('click');

      expect(wrapper.emitted('close')).toBeFalsy();
    });

    it('TC-CL102: closable=false ???«ê¸° ?™ìž‘??ë¹„í™œ?±í™”?œë‹¤', async () => {
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

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      const wrapper = mount(Modal, {
        props: { open: true, teleportTo: 'body' },
        slots: { default: 'Content' },
        global: { stubs: { teleport: true } },
      });
      const modal = wrapper.find('.modal');
      expect(modal.attributes('data-size')).toBe('md');
    });
  });

  describe('v-model:open ì§€??, () => {
    it('TC-VM100: update:open ?´ë²¤?¸ê? ë°œìƒ?œë‹¤', async () => {
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
