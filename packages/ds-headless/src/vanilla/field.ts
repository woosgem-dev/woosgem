export interface FieldConfig {
  id?: string | undefined;
  name?: string | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  error?: boolean | undefined;
  hasDescription?: boolean | undefined;
}

export interface FieldAttributes {
  labelProps: Record<string, string | boolean | undefined>;
  controlProps: Record<string, string | boolean | undefined>;
  errorProps: {
    id: string;
    role: 'alert';
    'aria-live': 'assertive';
  };
  descriptionProps: {
    id: string;
  };
  fieldId: string;
  fieldName: string;
}

/**
 * Compute ARIA-compliant attributes for a form field.
 * Pure function — no DOM, no side effects.
 *
 * @param config - Field configuration
 * @param resolvedId - Pre-resolved unique ID for the field
 */
export function computeFieldAttributes(
  config: FieldConfig,
  resolvedId: string,
): FieldAttributes {
  const fieldId = config.id ?? resolvedId;
  const fieldName = config.name ?? fieldId;
  const errorId = `${fieldId}-error`;
  const descriptionId = `${fieldId}-description`;

  // aria-describedby: description first, then error (reading order for AT)
  const describedByParts: string[] = [];
  if (config.hasDescription) describedByParts.push(descriptionId);
  if (config.error) describedByParts.push(errorId);
  const ariaDescribedBy =
    describedByParts.length > 0 ? describedByParts.join(' ') : undefined;

  const labelProps: Record<string, string | boolean | undefined> = {};
  if (config.required) labelProps['data-required'] = '';
  if (config.disabled) labelProps['data-disabled'] = '';
  if (config.error) labelProps['data-error'] = '';

  const controlProps: Record<string, string | boolean | undefined> = {
    id: fieldId,
    name: fieldName,
  };
  if (config.disabled) controlProps['disabled'] = true;
  if (config.required) controlProps['required'] = true;
  if (config.error) {
    controlProps['aria-invalid'] = 'true';
    controlProps['aria-errormessage'] = errorId;
  }
  if (ariaDescribedBy) controlProps['aria-describedby'] = ariaDescribedBy;

  return {
    labelProps,
    controlProps,
    errorProps: {
      id: errorId,
      role: 'alert',
      'aria-live': 'assertive',
    },
    descriptionProps: {
      id: descriptionId,
    },
    fieldId,
    fieldName,
  };
}
