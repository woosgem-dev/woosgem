import {
  forwardRef,
  memo,
  useMemo,
  createElement,
  type ReactNode,
  type CSSProperties,
  type Ref,
} from 'react';
import type { ComponentDefinition } from '@woosgem-dev/core';

/**
 * Converts a CSS style string to a React CSSProperties object.
 * Handles both regular properties (kebab → camelCase) and CSS custom properties (--var).
 */
function parseStyleString(styleStr: string): CSSProperties {
  const result: Record<string, string> = {};

  for (const part of styleStr.split(';')) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;

    const prop = trimmed.slice(0, colonIdx).trim();
    const value = trimmed.slice(colonIdx + 1).trim();

    if (prop.startsWith('--')) {
      result[prop] = value;
    } else {
      const camelProp = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
      result[camelProp] = value;
    }
  }

  return result as CSSProperties;
}

/**
 * Base props that all created components receive
 */
interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Default native props that can be provided when creating a component.
 * These are merged with user props, with user props taking precedence.
 */
interface CreateComponentOptions {
  [key: string]: unknown;
}

/**
 * Creates a React component from a framework-agnostic ComponentDefinition.
 *
 * Features:
 * - Automatic prop separation (style props vs native props)
 * - Memoized mapPropsToAttrs calls
 * - ForwardRef support
 * - className merging (adds to generated class)
 * - Default native props (e.g., type="button" for buttons)
 *
 * @example
 * ```tsx
 * const BaseButton = createComponent(ButtonDef, { type: 'button' });
 * export const Button = BaseButton as React.ComponentType<ButtonProps>;
 * ```
 */
export function createComponent<
  StyleProps,
  Attrs extends { class: string },
  Tag extends keyof HTMLElementTagNameMap
>(definition: ComponentDefinition<StyleProps, Attrs, Tag>, defaultNativeProps?: CreateComponentOptions) {
  // Pre-compute the set of style prop keys for O(1) lookup
  const stylePropsKeys = new Set(Object.keys(definition.defaultProps));

  type Element = HTMLElementTagNameMap[Tag];

  const Component = forwardRef(function Component(
    props: BaseComponentProps & Record<string, unknown>,
    ref: Ref<Element>
  ) {
    const { children, className, ...restProps } = props;

    // Separate style props from native HTML props
    const { styleProps, nativeProps } = useMemo(() => {
      const styleProps: Record<string, unknown> = {};
      const nativeProps: Record<string, unknown> = {};

      for (const key in restProps) {
        if (stylePropsKeys.has(key)) {
          styleProps[key] = restProps[key];
        } else {
          nativeProps[key] = restProps[key];
        }
      }

      return { styleProps, nativeProps };
    }, [restProps]);

    // Memoize the attribute mapping
    const attrs = useMemo(
      () => definition.mapPropsToAttrs(styleProps as StyleProps),
      [styleProps]
    );

    // Merge className: component's class + user's className
    const finalClassName = className ? `${attrs.class} ${className}` : attrs.class;

    // Build final props, converting 'class' to 'className' for React
    // Order: defaultNativeProps < nativeProps < attrs (protected)
    const finalProps: Record<string, unknown> = {
      ...defaultNativeProps,
      ...nativeProps,
      ...attrs,
      className: finalClassName,
      ref,
    };

    // Remove the 'class' attribute since React uses 'className'
    delete finalProps['class'];

    // Convert CSS string to React style object, merging with user's style
    if (typeof finalProps.style === 'string') {
      const parsed = parseStyleString(finalProps.style);
      const userStyle = nativeProps.style as CSSProperties | undefined;
      finalProps.style = userStyle ? { ...parsed, ...userStyle } : parsed;
    }

    return createElement(definition.template.tag, finalProps, children);
  });

  Component.displayName = definition.displayName;

  return memo(Component);
}
