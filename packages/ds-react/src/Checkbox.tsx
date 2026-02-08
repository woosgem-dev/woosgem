import {
  forwardRef,
  memo,
  useMemo,
  createContext,
  useContext,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ReactNode,
} from 'react';
import {
  Checkbox as CheckboxDef,
  CheckboxRoot as CheckboxRootDef,
  CheckboxIndicator as CheckboxIndicatorDef,
  CheckboxLabel as CheckboxLabelDef,
  type CheckboxStyleProps,
  type CheckboxRootStyleProps,
  type CheckboxIndicatorStyleProps,
  type CheckboxLabelStyleProps,
  type CheckboxSize,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

// ===================
// Legacy Checkbox (single element)
// ===================

/**
 * Checkbox component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type CheckboxProps = Prettify<
  CheckboxStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof CheckboxStyleProps | 'data-size' | 'data-state'
    > & {
      'data-size'?: never;
      'data-state'?: never;
    }
>;

/** Ref type for Checkbox component */
export type CheckboxRef = HTMLDivElement;

const BaseCheckbox = createComponent(CheckboxDef);

/**
 * Checkbox component with multiple sizes and states.
 *
 * @example
 * ```tsx
 * <Checkbox size="md" checked>
 *   Accept terms
 * </Checkbox>
 *
 * <Checkbox indeterminate>
 *   Select all
 * </Checkbox>
 *
 * <Checkbox disabled>
 *   Disabled option
 * </Checkbox>
 * ```
 */
export const Checkbox = BaseCheckbox as ComponentType<CheckboxProps>;

// ===================
// Compound Components (Checkbox.*)
// ===================

// Context for sharing state
interface CheckboxContextValue {
  size: CheckboxSize;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
}

const CheckboxContext = createContext<CheckboxContextValue | null>(null);

function useCheckboxContext() {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('Checkbox compound components must be used within CheckboxRoot');
  }
  return context;
}

// ===================
// CheckboxRoot
// ===================

export type CheckboxRootProps = Prettify<
  CheckboxRootStyleProps &
    Omit<ComponentPropsWithoutRef<'label'>, keyof CheckboxRootStyleProps> & {
      checked?: boolean;
      indeterminate?: boolean;
      children?: ReactNode;
    }
>;

export type CheckboxRootRef = HTMLLabelElement;

const CheckboxRootComponent = memo(
  forwardRef<CheckboxRootRef, CheckboxRootProps>(function CheckboxRoot(props, ref) {
    const {
      size = 'md',
      disabled = false,
      checked = false,
      indeterminate = false,
      children,
      className,
      ...restProps
    } = props;

    const attrs = useMemo(() => {
      return CheckboxRootDef.mapPropsToAttrs({ size, disabled });
    }, [size, disabled]);

    const contextValue = useMemo(
      () => ({ size, checked, indeterminate, disabled }),
      [size, checked, indeterminate, disabled]
    );

    const finalClassName = className ? `${attrs.class} ${className}` : attrs.class;

    return (
      <CheckboxContext.Provider value={contextValue}>
        <label
          ref={ref}
          className={finalClassName}
          data-size={attrs['data-size']}
          data-disabled={attrs['data-disabled']}
          {...restProps}
        >
          {children}
        </label>
      </CheckboxContext.Provider>
    );
  })
);

CheckboxRootComponent.displayName = 'CheckboxRoot';

/**
 * Checkbox root component for compound pattern.
 *
 * @example
 * ```tsx
 * <CheckboxRoot checked={checked} onChange={setChecked}>
 *   <CheckboxIndicator>
 *     {checked && <CheckIcon />}
 *   </CheckboxIndicator>
 *   <CheckboxLabel>Accept terms</CheckboxLabel>
 * </CheckboxRoot>
 * ```
 */
export const CheckboxRoot = CheckboxRootComponent;

// ===================
// CheckboxIndicator
// ===================

export type CheckboxIndicatorProps = Prettify<
  Omit<CheckboxIndicatorStyleProps, 'size' | 'checked' | 'indeterminate' | 'disabled'> &
    Omit<ComponentPropsWithoutRef<'span'>, keyof CheckboxIndicatorStyleProps> & {
      children?: ReactNode;
    }
>;

export type CheckboxIndicatorRef = HTMLSpanElement;

const CheckboxIndicatorComponent = memo(
  forwardRef<CheckboxIndicatorRef, CheckboxIndicatorProps>(function CheckboxIndicator(props, ref) {
    const { children, className, ...restProps } = props;
    const { size, checked, indeterminate, disabled } = useCheckboxContext();

    const attrs = useMemo(() => {
      return CheckboxIndicatorDef.mapPropsToAttrs({ size, checked, indeterminate, disabled });
    }, [size, checked, indeterminate, disabled]);

    const finalClassName = className ? `${attrs.class} ${className}` : attrs.class;

    return (
      <span
        ref={ref}
        className={finalClassName}
        data-size={attrs['data-size']}
        data-state={attrs['data-state']}
        aria-hidden={attrs['aria-hidden']}
        {...restProps}
      >
        {children}
      </span>
    );
  })
);

CheckboxIndicatorComponent.displayName = 'CheckboxIndicator';

/**
 * Checkbox indicator component (visual box).
 * Must be used within CheckboxRoot.
 */
export const CheckboxIndicator = CheckboxIndicatorComponent;

// ===================
// CheckboxLabel
// ===================

export type CheckboxLabelProps = Prettify<
  Omit<CheckboxLabelStyleProps, 'disabled'> &
    Omit<ComponentPropsWithoutRef<'span'>, keyof CheckboxLabelStyleProps> & {
      children?: ReactNode;
    }
>;

export type CheckboxLabelRef = HTMLSpanElement;

const CheckboxLabelComponent = memo(
  forwardRef<CheckboxLabelRef, CheckboxLabelProps>(function CheckboxLabel(props, ref) {
    const { children, className, ...restProps } = props;
    const { disabled } = useCheckboxContext();

    const attrs = useMemo(() => {
      return CheckboxLabelDef.mapPropsToAttrs({ disabled });
    }, [disabled]);

    const finalClassName = className ? `${attrs.class} ${className}` : attrs.class;

    return (
      <span
        ref={ref}
        className={finalClassName}
        data-disabled={attrs['data-disabled']}
        {...restProps}
      >
        {children}
      </span>
    );
  })
);

CheckboxLabelComponent.displayName = 'CheckboxLabel';

/**
 * Checkbox label component.
 * Must be used within CheckboxRoot.
 */
export const CheckboxLabel = CheckboxLabelComponent;
