export type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';

export interface CheckboxConfig {
  id?: string | undefined;
  name?: string | undefined;
  value?: string | undefined;
  checked?: boolean | undefined;
  indeterminate?: boolean | undefined;
  disabled?: boolean | undefined;
  required?: boolean | undefined;
}

export interface CheckboxAttributes {
  rootProps: {
    'data-disabled'?: '' | undefined;
  };
  inputProps: {
    type: 'checkbox';
    id: string;
    name: string;
    value: string;
    checked: boolean;
    disabled?: true | undefined;
    required?: true | undefined;
    'aria-checked': true | false | 'mixed';
  };
  indicatorProps: {
    'aria-hidden': true;
    'data-state': CheckboxState;
  };
  labelProps: {
    'data-disabled'?: '' | undefined;
  };
  fieldId: string;
  state: CheckboxState;
}

function resolveState(config: CheckboxConfig): CheckboxState {
  if (config.indeterminate) return 'indeterminate';
  if (config.checked) return 'checked';
  return 'unchecked';
}

/**
 * Compute ARIA-compliant attributes for a checkbox.
 * Pure function — no DOM, no side effects.
 *
 * @param config - Checkbox configuration
 * @param resolvedId - Pre-resolved unique ID for the checkbox
 */
export function computeCheckboxAttributes(
  config: CheckboxConfig,
  resolvedId: string,
): CheckboxAttributes {
  const fieldId = config.id ?? resolvedId;
  const fieldName = config.name ?? fieldId;
  const value = config.value ?? 'on';
  const checked = config.checked ?? false;
  const state = resolveState(config);

  const ariaChecked: true | false | 'mixed' =
    state === 'indeterminate' ? 'mixed' : checked;

  return {
    rootProps: {
      'data-disabled': config.disabled ? '' : undefined,
    },
    inputProps: {
      type: 'checkbox',
      id: fieldId,
      name: fieldName,
      value,
      checked,
      disabled: config.disabled || undefined,
      required: config.required || undefined,
      'aria-checked': ariaChecked,
    },
    indicatorProps: {
      'aria-hidden': true,
      'data-state': state,
    },
    labelProps: {
      'data-disabled': config.disabled ? '' : undefined,
    },
    fieldId,
    state,
  };
}
