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
