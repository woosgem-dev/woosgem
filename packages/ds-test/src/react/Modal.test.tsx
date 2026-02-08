import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@woosgem/ds-react';

describe('Modal (React)', () => {
  describe('ê¸°ë³¸ ?Œë”ë§?, () => {
    it('TC-R100: open=false?????Œë”ë§ë˜ì§€ ?ŠëŠ”??, () => {
      render(
        <Modal open={false}>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });

    it('TC-R101: open=true?????Œë”ë§ëœ??, () => {
      render(
        <Modal open={true}>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('TC-R102: modal???¬íƒˆë¡??Œë”ë§ëœ??, () => {
      render(
        <Modal open={true}>
          <ModalBody>Portal content</ModalBody>
        </Modal>
      );
      // Content should be in document.body (portal)
      expect(screen.getByText('Portal content')).toBeInTheDocument();
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C110: size: sm???ìš©?œë‹¤', () => {
      render(
        <Modal open size="sm">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C111: size: mdê°€ ?ìš©?œë‹¤', () => {
      render(
        <Modal open size="md">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'md');
    });

    it('TC-C112: size: lgê°€ ?ìš©?œë‹¤', () => {
      render(
        <Modal open size="lg">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'lg');
    });

    it('TC-C113: size: xl???ìš©?œë‹¤', () => {
      render(
        <Modal open size="xl">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'xl');
    });

    it('TC-C114: size: full???ìš©?œë‹¤', () => {
      render(
        <Modal open size="full">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'full');
    });
  });

  describe('?‘ê·¼??, () => {
    it('TC-A100: role="dialog"ê°€ ?ìš©?œë‹¤', () => {
      render(
        <Modal open>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('TC-A101: aria-modal=trueê°€ ?ìš©?œë‹¤', () => {
      render(
        <Modal open>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    });
  });

  describe('?«ê¸° ?™ìž‘', () => {
    it('TC-CL100: ESC ???„ë¥´ë©?onCloseê°€ ?¸ì¶œ?œë‹¤', () => {
      const onClose = vi.fn();

      render(
        <Modal open onClose={onClose}>
          <ModalBody>Content</ModalBody>
        </Modal>
      );

      act(() => {
        fireEvent.keyDown(document, { key: 'Escape' });
      });

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('TC-CL101: disableEscapeKey ??ESCë¡??«ížˆì§€ ?ŠëŠ”??, () => {
      const onClose = vi.fn();

      render(
        <Modal open onClose={onClose} disableEscapeKey>
          <ModalBody>Content</ModalBody>
        </Modal>
      );

      act(() => {
        fireEvent.keyDown(document, { key: 'Escape' });
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('TC-CL102: ?¤ë²„?ˆì´ ?´ë¦­ ??onCloseê°€ ?¸ì¶œ?œë‹¤', () => {
      const onClose = vi.fn();

      render(
        <Modal open onClose={onClose}>
          <ModalBody>Content</ModalBody>
        </Modal>
      );

      const overlay = document.querySelector('.overlay');
      expect(overlay).not.toBeNull();

      act(() => {
        fireEvent.click(overlay!);
      });

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('TC-CL103: disableOverlayClick ???¤ë²„?ˆì´ ?´ë¦­?¼ë¡œ ?«ížˆì§€ ?ŠëŠ”??, () => {
      const onClose = vi.fn();

      render(
        <Modal open onClose={onClose} disableOverlayClick>
          <ModalBody>Content</ModalBody>
        </Modal>
      );

      const overlay = document.querySelector('.overlay');
      act(() => {
        fireEvent.click(overlay!);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('TC-CL104: closable=false ??ESC?€ ?¤ë²„?ˆì´ ?´ë¦­ ëª¨ë‘ ë¹„í™œ?±í™”?œë‹¤', () => {
      const onClose = vi.fn();

      render(
        <Modal open onClose={onClose} closable={false}>
          <ModalBody>Content</ModalBody>
        </Modal>
      );

      act(() => {
        fireEvent.keyDown(document, { key: 'Escape' });
      });

      const overlay = document.querySelector('.overlay');
      act(() => {
        fireEvent.click(overlay!);
      });

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(
        <Modal open>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveAttribute('data-size', 'md');
    });
  });

  describe('Body scroll ë°©ì?', () => {
    it('TC-BS100: open ??body overflowê°€ hidden?¼ë¡œ ?¤ì •?œë‹¤', () => {
      render(
        <Modal open>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(document.body.style.overflow).toBe('hidden');
    });
  });
});

describe('ModalHeader (React)', () => {
  it('should render with modal-header class', () => {
    render(
      <Modal open>
        <ModalHeader>Title</ModalHeader>
      </Modal>
    );
    const header = document.querySelector('.modal-header');
    expect(header).not.toBeNull();
  });

  it('should render children as title', () => {
    render(
      <Modal open>
        <ModalHeader>My Title</ModalHeader>
      </Modal>
    );
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });

  it('should render close button when showClose=true', () => {
    render(
      <Modal open>
        <ModalHeader showClose>Title</ModalHeader>
      </Modal>
    );
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const onClose = vi.fn();

    render(
      <Modal open>
        <ModalHeader showClose onClose={onClose}>Title</ModalHeader>
      </Modal>
    );

    act(() => {
      fireEvent.click(screen.getByLabelText('Close modal'));
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('ModalBody (React)', () => {
  it('should render with modal-body class', () => {
    render(
      <Modal open>
        <ModalBody>Body content</ModalBody>
      </Modal>
    );
    const body = document.querySelector('.modal-body');
    expect(body).not.toBeNull();
  });

  it('should render children', () => {
    render(
      <Modal open>
        <ModalBody>Modal body text</ModalBody>
      </Modal>
    );
    expect(screen.getByText('Modal body text')).toBeInTheDocument();
  });
});

describe('ModalFooter (React)', () => {
  it('should render with modal-footer class', () => {
    render(
      <Modal open>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );
    const footer = document.querySelector('.modal-footer');
    expect(footer).not.toBeNull();
  });

  it('should render children', () => {
    render(
      <Modal open>
        <ModalFooter>Footer content</ModalFooter>
      </Modal>
    );
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('should apply align prop', () => {
    render(
      <Modal open>
        <ModalFooter align="center">Footer</ModalFooter>
      </Modal>
    );
    const footer = document.querySelector('.modal-footer');
    expect(footer).toHaveAttribute('data-align', 'center');
  });
});

describe('Modal Compound Usage (React)', () => {
  it('should render full Modal with Header, Body, and Footer', () => {
    render(
      <Modal open size="lg">
        <ModalHeader>Confirm</ModalHeader>
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter align="end">
          <button>Cancel</button>
          <button>OK</button>
        </ModalFooter>
      </Modal>
    );

    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
});
