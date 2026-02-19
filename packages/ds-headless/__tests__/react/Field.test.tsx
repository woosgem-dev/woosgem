import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Field } from '../../src/react/Field';

describe('Field compound components', () => {
  it('renders label wrapping control', () => {
    render(
      <Field name="email">
        <Field.Label>
          Email
          <Field.Control>
            <input type="email" />
          </Field.Control>
        </Field.Label>
      </Field>,
    );

    const label = screen.getByText('Email');
    expect(label.tagName).toBe('LABEL');
    const input = label.querySelector('input');
    expect(input).toBeTruthy();
  });

  it('injects controlProps via cloneElement', () => {
    render(
      <Field id="test-field" name="username" required>
        <Field.Label>
          Username
          <Field.Control>
            <input />
          </Field.Control>
        </Field.Label>
      </Field>,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'test-field');
    expect(input).toHaveAttribute('name', 'username');
    expect(input).toHaveAttribute('required');
  });

  it('sets data-* attributes on label', () => {
    render(
      <Field name="email" required disabled error>
        <Field.Label>
          Email
          <Field.Control>
            <input />
          </Field.Control>
        </Field.Label>
      </Field>,
    );

    const label = screen.getByText('Email').closest('label')!;
    expect(label).toHaveAttribute('data-required');
    expect(label).toHaveAttribute('data-disabled');
    expect(label).toHaveAttribute('data-error');
  });

  it('renders Error with role=alert and aria-live', () => {
    render(
      <Field id="f" name="email" error>
        <Field.Label>
          Email
          <Field.Control>
            <input />
          </Field.Control>
        </Field.Label>
        <Field.Error>Required field</Field.Error>
      </Field>,
    );

    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent('Required field');
    expect(error).toHaveAttribute('id', 'f-error');
    expect(error).toHaveAttribute('aria-live', 'assertive');
  });

  it('auto-registers Description in aria-describedby', () => {
    render(
      <Field id="f" name="email">
        <Field.Label>
          Email
          <Field.Control>
            <input />
          </Field.Control>
        </Field.Label>
        <Field.Description>We won't share it.</Field.Description>
      </Field>,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'f-description');

    const desc = screen.getByText("We won't share it.");
    expect(desc).toHaveAttribute('id', 'f-description');
  });

  it('includes both description and error in aria-describedby', () => {
    render(
      <Field id="f" name="email" error>
        <Field.Label>
          Email
          <Field.Control>
            <input />
          </Field.Control>
        </Field.Label>
        <Field.Description>Help text</Field.Description>
        <Field.Error>Error message</Field.Error>
      </Field>,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute(
      'aria-describedby',
      'f-description f-error',
    );
  });

  it('sets aria-invalid and aria-errormessage on control when error', () => {
    render(
      <Field id="f" name="email" error>
        <Field.Label>
          Email
          <Field.Control>
            <input />
          </Field.Control>
        </Field.Label>
      </Field>,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-errormessage', 'f-error');
  });

  it('throws when compound components used without Field', () => {
    expect(() => render(<Field.Label>Test</Field.Label>)).toThrow(
      'Field compound components must be used within <Field>',
    );
  });

  it('throws when Field.Control used without Field', () => {
    expect(() =>
      render(
        <Field.Control>
          <input />
        </Field.Control>,
      ),
    ).toThrow('Field compound components must be used within <Field>');
  });
});
