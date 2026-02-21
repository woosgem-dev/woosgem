/**
 * Core component definition interface.
 * Framework-agnostic blueprint for creating components.
 */
export interface ComponentDefinition<
  StyleProps,
  Attrs extends { class: string },
  Tag extends keyof HTMLElementTagNameMap
> {
  /** Display name for debugging and DevTools */
  readonly displayName: string;
  /** Default values for all style props */
  readonly defaultProps: { [K in keyof Required<StyleProps>]: StyleProps[K] };
  /** Allowed values for each style prop (for validation/documentation) */
  readonly propTypes: { [K in keyof StyleProps]?: readonly StyleProps[K][] };
  /** Maps style props to DOM attributes */
  readonly mapPropsToAttrs: (props: StyleProps) => Attrs;
  /** Template information for rendering */
  readonly template: { tag: Tag; slots: readonly string[] };
}

/** Extract StyleProps type from a ComponentDefinition */
export type ExtractStyleProps<T> = T extends ComponentDefinition<infer P, any, any> ? P : never;

/** Extract Attrs type from a ComponentDefinition */
export type ExtractAttrs<T> = T extends ComponentDefinition<any, infer A, any> ? A : never;

/** Extract Tag type from a ComponentDefinition */
export type ExtractTag<T> = T extends ComponentDefinition<any, any, infer Tag> ? Tag : never;

/** Utility type to flatten intersection types for better IDE display */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

/**
 * Filter out undefined and null values from an object.
 * Used in mapPropsToAttrs to ensure explicit undefined/null props
 * don't override default values.
 */
export function filterNullish<T extends object>(obj: T): Partial<T> {
  const result = {} as Partial<T>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== undefined && value !== null) {
        result[key] = value;
      }
    }
  }
  return result;
}
