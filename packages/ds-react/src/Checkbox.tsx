import { forwardRef, memo, useMemo, createContext, useContext, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import {
  CheckboxRoot as CheckboxRootDef,
  CheckboxIndicator as CheckboxIndicatorDef,
  CheckboxLabel as CheckboxLabelDef,
  type CheckboxRootStyleProps,
  type CheckboxIndicatorStyleProps,
  type CheckboxLabelStyleProps,
  type CheckboxSize,
  type Prettify,
} from '@woosgem/ds-core';

// ===================
// Context for sharing state
// ===================

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
    throw new Error('Checkbox compound components must be used within Checkbox.Root');
  }
  return context;
}

// ===================
// Checkbox.Root
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

const Root = memo(
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

Root.displayName = 'Checkbox.Root';

// ===================
// Checkbox.Indicator
// ===================

export type CheckboxIndicatorProps = Prettify<
  Omit<CheckboxIndicatorStyleProps, 'size' | 'checked' | 'indeterminate' | 'disabled'> &
    Omit<ComponentPropsWithoutRef<'span'>, keyof CheckboxIndicatorStyleProps> & {
      children?: ReactNode;
    }
>;

export type CheckboxIndicatorRef = HTMLSpanElement;

const Indicator = memo(
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

Indicator.displayName = 'Checkbox.Indicator';

// ===================
// Checkbox.Label
// ===================

export type CheckboxLabelProps = Prettify<
  Omit<CheckboxLabelStyleProps, 'disabled'> &
    Omit<ComponentPropsWithoutRef<'span'>, keyof CheckboxLabelStyleProps> & {
      children?: ReactNode;
    }
>;

export type CheckboxLabelRef = HTMLSpanElement;

const Label = memo(
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

Label.displayName = 'Checkbox.Label';

// ===================
// Compound Component Export
// ===================

/**
 * Headless Checkbox component with compound pattern.
 *
 * @example
 * ```tsx
 * // Headless UI pattern
 * <Checkbox.Root checked={checked} onChange={setChecked}>
 *   <Checkbox.Indicator>
 *     {checked && <CheckIcon />}
 *   </Checkbox.Indicator>
 *   <Checkbox.Label>Accept terms</Checkbox.Label>
 * </Checkbox.Root>
 *
 * // With custom indicator
 * <Checkbox.Root checked indeterminate>
 *   <Checkbox.Indicator>
 *     <MinusIcon />
 *   </Checkbox.Indicator>
 *   <Checkbox.Label>Select all</Checkbox.Label>
 * </Checkbox.Root>
 * ```
 */
export const Checkbox = {
  Root,
  Indicator,
  Label,
};

// Legacy types for backwards compatibility
export type CheckboxProps = CheckboxRootProps;
export type CheckboxRef = CheckboxRootRef;
