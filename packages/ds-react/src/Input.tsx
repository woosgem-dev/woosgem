import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Input as InputDef, type InputStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Input component props.
 * Combines style props with all standard input HTML attributes,
 * while excluding protected attributes used by the design system.
 *
 * @remarks
 * **Accessibility Requirements:**
 * - `id` - Required for `<label htmlFor>` association
 * - `name` - Required for form submission
 * - `type` - Specify input type (text, email, password, etc.)
 * - `aria-describedby` - Link to error/help text elements
 * - `required` - For required fields (also add visual indicator)
 *
 * **Auto-generated ARIA:**
 * - `aria-invalid="true"` is automatically set when `error={true}`
 */
export type InputProps = Prettify<
  InputStyleProps &
    Omit<
      ComponentPropsWithoutRef<'input'>,
      keyof InputStyleProps | 'data-variant' | 'data-size' | 'data-state' | 'aria-invalid'
    > & {
      'data-variant'?: never;
      'data-size'?: never;
      'data-state'?: never;
      /** @deprecated Use `error` prop instead. Auto-set when error={true} */
      'aria-invalid'?: never;
    }
>;

/** Ref type for Input component */
export type InputRef = HTMLInputElement;

const BaseInput = createComponent(InputDef);

/**
 * Input component with multiple variants and states.
 *
 * **Accessibility:**
 * - Always pair with a `<label>` using matching `id`/`htmlFor`
 * - Use `aria-describedby` to link error messages
 * - `aria-invalid` is automatically set when `error={true}`
 *
 * @example
 * Basic usage:
 * ```tsx
 * <label htmlFor="username">Username</label>
 * <Input id="username" name="username" placeholder="Enter username" />
 * ```
 *
 * @example
 * With error state and message:
 * ```tsx
 * <label htmlFor="email">Email</label>
 * <Input
 *   id="email"
 *   name="email"
 *   type="email"
 *   error={!!errors.email}
 *   aria-describedby={errors.email ? 'email-error' : undefined}
 * />
 * {errors.email && <span id="email-error" role="alert">{errors.email}</span>}
 * ```
 *
 * @example
 * Required field:
 * ```tsx
 * <label htmlFor="password">Password *</label>
 * <Input id="password" name="password" type="password" required />
 * ```
 */
export const Input = BaseInput as ComponentType<InputProps>;
