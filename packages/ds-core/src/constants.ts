/**
 * Attributes managed by component definitions that must not be overridden by consumers.
 */
export const PROTECTED_ATTRS = [
  'data-variant',
  'data-color',
  'data-size',
  'data-state',
  'data-full-width',
  'data-shape',
  'data-divider',
  'data-has-image',
  'data-orientation',
  'data-spacing',
  'role',
  'aria-selected',
  'aria-disabled',
  'aria-orientation',
] as const;

export const PROTECTED_ATTRS_SET = new Set<string>(PROTECTED_ATTRS);

/** Class name prefix for all WooSGem components */
export const CLASS_PREFIX = 'wg';

/** Generate a BEdM block class name */
export function cls(block: string): string {
  return `${CLASS_PREFIX}-${block}`;
}

/** Generate a BEdM element class name */
export function clsEl(block: string, element: string): string {
  return `${CLASS_PREFIX}-${block}__${element}`;
}
