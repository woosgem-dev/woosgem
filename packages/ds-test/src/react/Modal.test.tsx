import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@woosgem/ds-react';

describe('Modal (React)', () => {
  describe('기본 렌더링', () => {
    it('TC-R100: open=false일 때 렌더링되지 않는다', () => {
      render(
        <Modal open={false}>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });

    it('TC-R101: open=true일 때 렌더링된다', () => {
      render(
        <Modal open={true}>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('TC-R102: modal이 포탈로 렌더링된다', () => {
      render(
        <Modal open={true}>
          <ModalBody>Portal content</ModalBody>
        </Modal>
      );
      // Content should be in document.body (portal)
      expect(screen.getByText('Portal content')).toBeInTheDocument();
    });
  });

  describe('Size 변형', () => {
    it('TC-C110: size: sm이 적용된다', () => {
      render(
        <Modal open size="sm">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C111: size: md가 적용된다', () => {
      render(
        <Modal open size="md">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'md');
    });

    it('TC-C112: size: lg가 적용된다', () => {
      render(
        <Modal open size="lg">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'lg');
    });

    it('TC-C113: size: xl이 적용된다', () => {
      render(
        <Modal open size="xl">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'xl');
    });

    it('TC-C114: size: full이 적용된다', () => {
      render(
        <Modal open size="full">
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('data-size', 'full');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="dialog"가 적용된다', () => {
      render(
        <Modal open>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('TC-A101: aria-modal=true가 적용된다', () => {
      render(
        <Modal open>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    });
  });

  describe('닫기 동작', () => {
    it('TC-CL100: ESC 키 누르면 onClose가 호출된다', () => {
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

    it('TC-CL101: disableEscapeKey 시 ESC로 닫히지 않는다', () => {
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

    it('TC-CL102: 오버레이 클릭 시 onClose가 호출된다', () => {
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

    it('TC-CL103: disableOverlayClick 시 오버레이 클릭으로 닫히지 않는다', () => {
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

    it('TC-CL104: closable=false 시 ESC와 오버레이 클릭 모두 비활성화된다', () => {
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

  describe('기본값', () => {
    it('TC-C010: size 기본값은 md이다', () => {
      render(
        <Modal open>
          <ModalBody>Content</ModalBody>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveAttribute('data-size', 'md');
    });
  });

  describe('Body scroll 방지', () => {
    it('TC-BS100: open 시 body overflow가 hidden으로 설정된다', () => {
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
