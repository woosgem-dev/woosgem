import {
  createContext,
  useContext,
  useId,
  useMemo,
  type ReactNode,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
} from 'react';
import {
  computeCheckboxAttributes,
  type CheckboxAttributes,
} from '../vanilla/checkbox';

interface CheckboxContextValue extends CheckboxAttributes {
  onChange?: ((checked: boolean) => void) | undefined;
}

const CheckboxContext = createContext<CheckboxContextValue | null>(null);

function useCheckboxContext(): CheckboxContextValue {
  const ctx = useContext(CheckboxContext);
  if (!ctx) {
    throw new Error(
      'Checkbox compound components must be used within <Checkbox>',
    );
  }
  return ctx;
}

// --- Checkbox (Root Provider) ---

export interface CheckboxProps {
  children: ReactNode;
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

function CheckboxRoot({
  children,
  id: userProvidedId,
  name,
  value,
  checked,
  indeterminate,
  disabled,
  required,
  onChange,
  className,
}: CheckboxProps): ReactNode {
  const reactId = useId();

  const attributes = useMemo(
    () =>
      computeCheckboxAttributes(
        { id: userProvidedId, name, value, checked, indeterminate, disabled, required },
        reactId,
      ),
    [userProvidedId, name, value, checked, indeterminate, disabled, required, reactId],
  );

  const contextValue = useMemo<CheckboxContextValue>(
    () => ({ ...attributes, onChange }),
    [attributes, onChange],
  );

  return (
    <CheckboxContext.Provider value={contextValue}>
      <label {...attributes.rootProps} className={className}>
        {children}
      </label>
    </CheckboxContext.Provider>
  );
}

// --- Checkbox.Input ---

type CheckboxInputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'id' | 'name' | 'value' | 'checked' | 'disabled' | 'required' | 'aria-checked'
>;

function CheckboxInput({ className, style, ...rest }: CheckboxInputProps): ReactNode {
  const { inputProps, onChange } = useCheckboxContext();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.checked);
  }

  const hiddenStyle = {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap' as const,
    border: 0,
    ...style,
  };

  return (
    <input
      {...inputProps}
      {...rest}
      onChange={handleChange}
      style={hiddenStyle}
    />
  );
}

// --- Checkbox.Indicator ---

type CheckboxIndicatorProps = Omit<
  ComponentPropsWithoutRef<'span'>,
  'aria-hidden'
>;

function CheckboxIndicator(props: CheckboxIndicatorProps): ReactNode {
  const { indicatorProps } = useCheckboxContext();
  return <span {...indicatorProps} {...props} />;
}

// --- Checkbox.Label ---

function CheckboxLabel(props: ComponentPropsWithoutRef<'span'>): ReactNode {
  const { labelProps } = useCheckboxContext();
  return <span {...labelProps} {...props} />;
}

// --- Compound Export ---

export const Checkbox = Object.assign(CheckboxRoot, {
  Input: CheckboxInput,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
});
