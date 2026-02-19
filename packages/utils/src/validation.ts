/**
 * @woosgem/utils - Validation utilities
 *
 * General-purpose validation utilities using Zod.
 */

import { z } from 'zod';

export const EmailSchema = z.string().email();

export const UrlSchema = z.string().url();

export const NonEmptyStringSchema = z.string().min(1);

export const PositiveNumberSchema = z.number().positive();

export const NonNegativeNumberSchema = z.number().nonnegative();

export const IntegerSchema = z.number().int();

export const PositiveIntegerSchema = z.number().int().positive();

export const UuidSchema = z.string().uuid();

/**
 * Creates a validator wrapper around a Zod schema.
 *
 * @example
 * ```typescript
 * const emailValidator = createValidator(EmailSchema);
 *
 * // Throws if invalid
 * const email = emailValidator.parse('user@example.com');
 *
 * // Returns { success: true, data } or { success: false, error }
 * const result = emailValidator.safeParse('invalid');
 *
 * // Type guard
 * if (emailValidator.is(maybeEmail)) {
 *   // maybeEmail is a valid email
 * }
 * ```
 */
export function createValidator<T extends z.ZodSchema>(schema: T) {
  return {
    /** Parse and validate, throws on failure */
    parse: (data: unknown): z.infer<T> => schema.parse(data),

    /** Safe parse, returns result object */
    safeParse: (data: unknown) => schema.safeParse(data),

    /** Type guard check */
    is: (data: unknown): data is z.infer<T> => schema.safeParse(data).success,

    /** Get the underlying Zod schema */
    schema,
  };
}

// Pre-built validators
export const emailValidator = createValidator(EmailSchema);
export const urlValidator = createValidator(UrlSchema);
export const uuidValidator = createValidator(UuidSchema);

/**
 * Create a string schema with length constraints.
 *
 * @example
 * ```typescript
 * const UsernameSchema = createStringSchema({ min: 3, max: 20 });
 * ```
 */
export function createStringSchema(options: {
  min?: number;
  max?: number;
  regex?: RegExp;
  message?: string;
}): z.ZodString {
  let schema = z.string();

  if (options.min !== undefined) {
    schema = schema.min(options.min);
  }
  if (options.max !== undefined) {
    schema = schema.max(options.max);
  }
  if (options.regex) {
    schema = schema.regex(options.regex, options.message);
  }

  return schema;
}

/**
 * Create a number schema with range constraints.
 *
 * @example
 * ```typescript
 * const AgeSchema = createNumberSchema({ min: 0, max: 150, integer: true });
 * ```
 */
export function createNumberSchema(options: {
  min?: number;
  max?: number;
  integer?: boolean;
  positive?: boolean;
  nonnegative?: boolean;
}): z.ZodNumber {
  let schema = z.number();

  if (options.integer) {
    schema = schema.int();
  }
  if (options.positive) {
    schema = schema.positive();
  }
  if (options.nonnegative) {
    schema = schema.nonnegative();
  }
  if (options.min !== undefined) {
    schema = schema.min(options.min);
  }
  if (options.max !== undefined) {
    schema = schema.max(options.max);
  }

  return schema;
}
