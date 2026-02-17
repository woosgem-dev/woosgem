import {
  useEffect,
  useCallback,
  useRef,
  forwardRef,
  memo,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ReactNode,
  type MutableRefObject,
} from 'react';
import { createPortal } from 'react-dom';
import {
  Modal as ModalDef,
  ModalHeader as ModalHeaderDef,
  ModalBody as ModalBodyDef,
  ModalFooter as ModalFooterDef,
  type ModalStyleProps,
  type ModalHeaderStyleProps,
  type ModalBodyStyleProps,
  type ModalFooterStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import {
  useScrollLock,
  useEscapeKey,
  useFocusTrap,
} from '@woosgem-dev/headless/react';
import { createComponent } from './_internal/createComponent';

/**
 * Modal component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type ModalProps = Prettify<
  ModalStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      | keyof ModalStyleProps
      | 'data-size'
      | 'data-open'
      | 'data-closable'
      | 'role'
      | 'aria-modal'
      | 'aria-hidden'
    > & {
      'data-size'?: never;
      'data-open'?: never;
      'data-closable'?: never;
      role?: never;
      'aria-modal'?: never;
      /** Callback when modal requests to close (ESC key, overlay click, close button) */
      onClose?: () => void;
      /** Modal title for aria-labelledby */
      title?: string;
      /** Portal container (default: document.body) */
      container?: HTMLElement;
      /** Disable focus trap */
      disableFocusTrap?: boolean;
      /** Disable ESC key close */
      disableEscapeKey?: boolean;
      /** Disable overlay click close */
      disableOverlayClick?: boolean;
    }
>;

/** Ref type for Modal component */
export type ModalRef = HTMLDivElement;

const BaseModal = createComponent(ModalDef, {});

/**
 * Modal component for displaying content in a dialog overlay.
 *
 * @example
 * ```tsx
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
 *   <ModalHeader>Confirm Action</ModalHeader>
 *   <ModalBody>Are you sure you want to proceed?</ModalBody>
 *   <ModalFooter>
 *     <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
 *     <Button onClick={handleConfirm}>Confirm</Button>
 *   </ModalFooter>
 * </Modal>
 * ```
 */
const ModalComponent = forwardRef<ModalRef, ModalProps>(function Modal(
  {
    open = false,
    size = 'md',
    closable = true,
    onClose,
    title,
    container,
    disableFocusTrap = false,
    disableEscapeKey = false,
    disableOverlayClick = false,
    children,
    ...restProps
  },
  ref
) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const escapeCallback = useCallback(() => {
    onClose?.();
  }, [onClose]);

  // Headless primitives
  useScrollLock(open);
  useEscapeKey(open && closable && !disableEscapeKey, escapeCallback);
  useFocusTrap(modalRef, open && !disableFocusTrap);

  // Handle overlay click
  const handleOverlayClick = useCallback(() => {
    if (closable && !disableOverlayClick && onClose) {
      onClose();
    }
  }, [closable, disableOverlayClick, onClose]);

  // Focus restoration
  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      return () => {
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
    return undefined;
  }, [open]);

  // Don't render if not open
  if (!open) {
    return null;
  }

  const modalContent = (
    <div className="wg-modal-container" data-open={open || undefined}>
      <div
        className="wg-overlay"
        data-opacity="medium"
        data-level="modal"
        data-visible
        aria-hidden="true"
        onClick={handleOverlayClick}
      />
      <BaseModal
        ref={(node: HTMLDivElement | null) => {
          (modalRef as MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        open={open}
        size={size}
        closable={closable}
        tabIndex={-1}
        aria-labelledby={title ? 'wg-modal__title' : undefined}
        {...restProps}
      >
        {children}
      </BaseModal>
    </div>
  );

  // Render to portal
  const portalContainer = container || (typeof document !== 'undefined' ? document.body : null);

  if (!portalContainer) {
    return null;
  }

  return createPortal(modalContent, portalContainer);
});

export const Modal = memo(ModalComponent) as ComponentType<ModalProps>;

// ModalHeader
export type ModalHeaderProps = Prettify<
  ModalHeaderStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof ModalHeaderStyleProps | 'data-show-close'> & {
      'data-show-close'?: never;
      /** Callback when close button is clicked */
      onClose?: () => void;
      children?: ReactNode;
    }
>;

export type ModalHeaderRef = HTMLDivElement;

const BaseModalHeader = createComponent(ModalHeaderDef);

const ModalHeaderComponent = forwardRef<ModalHeaderRef, ModalHeaderProps>(function ModalHeader(
  { showClose = true, onClose, children, ...restProps },
  ref
) {
  return (
    <BaseModalHeader ref={ref} showClose={showClose} {...restProps}>
      <div className="wg-modal__title" id="wg-modal__title">
        {children}
      </div>
      {showClose && (
        <button
          type="button"
          className="wg-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </BaseModalHeader>
  );
});

export const ModalHeader = memo(ModalHeaderComponent) as ComponentType<ModalHeaderProps>;

// ModalBody
export type ModalBodyProps = Prettify<
  ModalBodyStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof ModalBodyStyleProps | 'data-scrollable'> & {
      'data-scrollable'?: never;
    }
>;

export type ModalBodyRef = HTMLDivElement;

const BaseModalBody = createComponent(ModalBodyDef);

export const ModalBody = BaseModalBody as ComponentType<ModalBodyProps>;

// ModalFooter
export type ModalFooterProps = Prettify<
  ModalFooterStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof ModalFooterStyleProps | 'data-align'> & {
      'data-align'?: never;
    }
>;

export type ModalFooterRef = HTMLDivElement;

const BaseModalFooter = createComponent(ModalFooterDef);

export const ModalFooter = BaseModalFooter as ComponentType<ModalFooterProps>;
