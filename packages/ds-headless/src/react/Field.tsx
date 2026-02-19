import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  useEffect,
  cloneElement,
  isValidElement,
  type ReactNode,
  type ReactElement,
} from 'react';
import { computeFieldAttributes, type FieldAttributes } from '../vanilla/field';

interface FieldContextValue extends FieldAttributes {
  registerDescription: () => () => void;
}

const FieldContext = createContext<FieldContextValue | null>(null);

function useFieldContext(): FieldContextValue {
  const ctx = useContext(FieldContext);
  if (!ctx) {
    throw new Error('Field compound components must be used within <Field>');
  }
  return ctx;
}

// --- Field (Root Provider) ---

export interface FieldProps {
  children: ReactNode;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
}

function FieldRoot({
  children,
  id: userProvidedId,
  name,
  required,
  disabled,
  error,
}: FieldProps): ReactNode {
  const reactId = useId();
  const [hasDescription, setHasDescription] = useState(false);

  const attributes = useMemo(
    () =>
      computeFieldAttributes(
        { id: userProvidedId, name, required, disabled, error, hasDescription },
        reactId,
      ),
    [userProvidedId, name, required, disabled, error, hasDescription, reactId],
  );

  const contextValue = useMemo<FieldContextValue>(
    () => ({
      ...attributes,
      registerDescription: () => {
        setHasDescription(true);
        return () => setHasDescription(false);
      },
    }),
    [attributes],
  );

  return (
    <FieldContext.Provider value={contextValue}>
      {children}
    </FieldContext.Provider>
  );
}

// --- Field.Label ---

interface FieldLabelProps {
  children: ReactNode;
  className?: string;
}

function FieldLabel({ children, className }: FieldLabelProps): ReactNode {
  const { labelProps } = useFieldContext();
  return (
    <label {...labelProps} className={className}>
      {children}
    </label>
  );
}

// --- Field.Control ---

interface FieldControlProps {
  children: ReactElement;
}

function FieldControl({ children }: FieldControlProps): ReactNode {
  const { controlProps } = useFieldContext();

  if (!isValidElement(children)) {
    throw new Error('Field.Control expects a single React element as child');
  }

  return cloneElement(children, controlProps);
}

// --- Field.Error ---

interface FieldErrorProps {
  children: ReactNode;
  className?: string;
}

function FieldError({ children, className }: FieldErrorProps): ReactNode {
  const { errorProps } = useFieldContext();
  return (
    <div {...errorProps} className={className}>
      {children}
    </div>
  );
}

// --- Field.Description ---

interface FieldDescriptionProps {
  children: ReactNode;
  className?: string;
}

function FieldDescription({
  children,
  className,
}: FieldDescriptionProps): ReactNode {
  const { descriptionProps, registerDescription } = useFieldContext();

  useEffect(() => {
    return registerDescription();
  }, [registerDescription]);

  return (
    <div {...descriptionProps} className={className}>
      {children}
    </div>
  );
}

// --- Compound Export ---

export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Control: FieldControl,
  Error: FieldError,
  Description: FieldDescription,
});
