import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from '@woosgem/ds-react';

const meta: Meta = {
  title: 'Components/Checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
      table: { category: 'Style' },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: { category: 'State' },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Shows indeterminate state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Checkbox.Root {...args}>
      <Checkbox.Indicator />
      <Checkbox.Label>Checkbox label</Checkbox.Label>
    </Checkbox.Root>
  ),
  args: {
    size: 'md',
    checked: false,
  },
};

export const Checked: Story = {
  render: () => (
    <Checkbox.Root checked>
      <Checkbox.Indicator />
      <Checkbox.Label>Checked checkbox</Checkbox.Label>
    </Checkbox.Root>
  ),
};

export const Interactive: Story = {
  render: function InteractiveCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox.Root checked={checked} onClick={() => setChecked(!checked)}>
        <Checkbox.Indicator />
        <Checkbox.Label>Click to toggle: {checked ? 'ON' : 'OFF'}</Checkbox.Label>
      </Checkbox.Root>
    );
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox.Root>
        <Checkbox.Indicator />
        <Checkbox.Label>Unchecked</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root checked>
        <Checkbox.Indicator />
        <Checkbox.Label>Checked</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root indeterminate>
        <Checkbox.Indicator />
        <Checkbox.Label>Indeterminate</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root disabled>
        <Checkbox.Indicator />
        <Checkbox.Label>Disabled</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root checked disabled>
        <Checkbox.Indicator />
        <Checkbox.Label>Checked & Disabled</Checkbox.Label>
      </Checkbox.Root>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox.Root size="sm" checked>
        <Checkbox.Indicator />
        <Checkbox.Label>Small checkbox</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root size="md" checked>
        <Checkbox.Indicator />
        <Checkbox.Label>Medium checkbox (default)</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root size="lg" checked>
        <Checkbox.Indicator />
        <Checkbox.Label>Large checkbox</Checkbox.Label>
      </Checkbox.Root>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: function IndeterminateExample() {
    const [items, setItems] = useState([false, true, false]);

    const allChecked = items.every(Boolean);
    const someChecked = items.some(Boolean);
    const indeterminate = someChecked && !allChecked;

    const toggleAll = () => {
      setItems(allChecked ? [false, false, false] : [true, true, true]);
    };

    const toggleItem = (index: number) => {
      const newItems = [...items];
      newItems[index] = !newItems[index];
      setItems(newItems);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox.Root
          checked={allChecked}
          indeterminate={indeterminate}
          onClick={toggleAll}
        >
          <Checkbox.Indicator />
          <Checkbox.Label style={{ fontWeight: 600 }}>Select all items</Checkbox.Label>
        </Checkbox.Root>

        <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((checked, index) => (
            <Checkbox.Root
              key={index}
              checked={checked}
              onClick={() => toggleItem(index)}
            >
              <Checkbox.Indicator />
              <Checkbox.Label>Item {index + 1}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
      </div>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => (
    <Checkbox.Root checked aria-label="Select this item">
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const FormExample: Story = {
  render: function FormExample() {
    const [values, setValues] = useState({
      terms: false,
      newsletter: false,
      marketing: false,
    });

    const toggle = (key: keyof typeof values) => {
      setValues(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox.Root checked={values.terms} onClick={() => toggle('terms')}>
          <Checkbox.Indicator />
          <Checkbox.Label>I agree to the Terms of Service</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root checked={values.newsletter} onClick={() => toggle('newsletter')}>
          <Checkbox.Indicator />
          <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root checked={values.marketing} onClick={() => toggle('marketing')}>
          <Checkbox.Indicator />
          <Checkbox.Label>Receive marketing emails</Checkbox.Label>
        </Checkbox.Root>
      </div>
    );
  },
};

export const CustomIndicator: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox.Root checked>
        <Checkbox.Indicator>
          {/* Custom checkmark using emoji */}
          <span style={{ fontSize: '12px' }}>✓</span>
        </Checkbox.Indicator>
        <Checkbox.Label>Custom checkmark</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root checked>
        <Checkbox.Indicator>
          {/* Custom SVG icon */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </Checkbox.Indicator>
        <Checkbox.Label>Custom SVG icon</Checkbox.Label>
      </Checkbox.Root>
    </div>
  ),
};
