import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  /** Target container element. Defaults to document.body. */
  container?: HTMLElement;
}

/**
 * Renders children into a DOM node outside the parent component hierarchy.
 * Returns null during SSR (no document available).
 */
export function Portal({ children, container }: PortalProps): ReactNode {
  if (typeof document === 'undefined') return null;
  return createPortal(children, container ?? document.body);
}
