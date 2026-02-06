import { describe, it, expect } from 'vitest';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSizes,
} from '@woosgem/ds-core';

describe('Modal Core', () => {
  describe('displayName', () => {
    it('should have displayName "Modal"', () => {
      expect(Modal.displayName).toBe('Modal');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Modal.defaultProps).toEqual({
        open: false,
        size: 'md',
        closable: true,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct size options', () => {
      expect(ModalSizes).toEqual(['sm', 'md', 'lg', 'xl', 'full']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Modal.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'modal',
        'data-size': 'md',
        'data-open': undefined,
        'data-closable': true,
        role: 'dialog',
        'aria-modal': true,
        'aria-hidden': true,
      });
    });

    it('should apply size prop', () => {
      for (const size of ModalSizes) {
        const attrs = Modal.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply open prop', () => {
      const attrs = Modal.mapPropsToAttrs({ open: true });
      expect(attrs['data-open']).toBe(true);
      expect(attrs['aria-hidden']).toBe(false);
    });

    it('should set aria-hidden to true when not open', () => {
      const attrs = Modal.mapPropsToAttrs({ open: false });
      expect(attrs['aria-hidden']).toBe(true);
      expect(attrs['data-open']).toBeUndefined();
    });

    it('should apply closable prop', () => {
      const attrsTrue = Modal.mapPropsToAttrs({ closable: true });
      expect(attrsTrue['data-closable']).toBe(true);

      const attrsFalse = Modal.mapPropsToAttrs({ closable: false });
      expect(attrsFalse['data-closable']).toBeUndefined();
    });

    it('should always have role="dialog"', () => {
      const attrs = Modal.mapPropsToAttrs({});
      expect(attrs.role).toBe('dialog');
    });

    it('should always have aria-modal=true', () => {
      const attrs = Modal.mapPropsToAttrs({});
      expect(attrs['aria-modal']).toBe(true);
    });

    it('should use default values for undefined props', () => {
      const attrs = Modal.mapPropsToAttrs({ size: undefined, open: undefined });
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-open']).toBeUndefined();
    });

    it('should combine multiple props', () => {
      const attrs = Modal.mapPropsToAttrs({
        open: true,
        size: 'lg',
        closable: false,
      });
      expect(attrs).toEqual({
        class: 'modal',
        'data-size': 'lg',
        'data-open': true,
        'data-closable': undefined,
        role: 'dialog',
        'aria-modal': true,
        'aria-hidden': false,
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Modal.template.tag).toBe('div');
    });

    it('should have header, default, footer slots', () => {
      expect(Modal.template.slots).toEqual(['header', 'default', 'footer']);
    });
  });
});

describe('ModalHeader Core', () => {
  it('should have displayName "ModalHeader"', () => {
    expect(ModalHeader.displayName).toBe('ModalHeader');
  });

  it('should have correct default props', () => {
    expect(ModalHeader.defaultProps).toEqual({ showClose: true });
  });

  it('should return default attrs', () => {
    const attrs = ModalHeader.mapPropsToAttrs({});
    expect(attrs).toEqual({ class: 'modal-header', 'data-show-close': true });
  });

  it('should apply showClose prop', () => {
    const attrsFalse = ModalHeader.mapPropsToAttrs({ showClose: false });
    expect(attrsFalse['data-show-close']).toBeUndefined();

    const attrsTrue = ModalHeader.mapPropsToAttrs({ showClose: true });
    expect(attrsTrue['data-show-close']).toBe(true);
  });
});

describe('ModalBody Core', () => {
  it('should have displayName "ModalBody"', () => {
    expect(ModalBody.displayName).toBe('ModalBody');
  });

  it('should have correct default props', () => {
    expect(ModalBody.defaultProps).toEqual({ scrollable: true });
  });

  it('should return default attrs', () => {
    const attrs = ModalBody.mapPropsToAttrs({});
    expect(attrs).toEqual({ class: 'modal-body', 'data-scrollable': true });
  });

  it('should apply scrollable prop', () => {
    const attrsFalse = ModalBody.mapPropsToAttrs({ scrollable: false });
    expect(attrsFalse['data-scrollable']).toBeUndefined();
  });
});

describe('ModalFooter Core', () => {
  it('should have displayName "ModalFooter"', () => {
    expect(ModalFooter.displayName).toBe('ModalFooter');
  });

  it('should have correct default props', () => {
    expect(ModalFooter.defaultProps).toEqual({ align: 'end' });
  });

  it('should return default attrs', () => {
    const attrs = ModalFooter.mapPropsToAttrs({});
    expect(attrs).toEqual({ class: 'modal-footer', 'data-align': 'end' });
  });

  it('should apply align prop', () => {
    for (const align of ['start', 'center', 'end'] as const) {
      const attrs = ModalFooter.mapPropsToAttrs({ align });
      expect(attrs['data-align']).toBe(align);
    }
  });
});
