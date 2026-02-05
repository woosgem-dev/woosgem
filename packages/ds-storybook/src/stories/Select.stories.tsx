
import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectMenu, SelectOption } from '@woosgem/ds-react';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
      description: 'Visual style of the select',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select',
      table: { category: 'Style' },
    },
    error: {
      control: 'boolean',
      description: 'Shows error state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
      table: { category: 'State' },
    },
    open: {
      control: 'boolean',
      description: 'Controls dropdown open state',
      table: { category: 'State' },
    },
    multiple: {
      control: 'boolean',
      description: 'Enables multiple selection',
      table: { category: 'Behavior' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value selected',
      table: { category: 'Content' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
  args: {
    placeholder: 'Select an option...',
    variant: 'outline',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select variant="outline" placeholder="Outline variant" aria-label="Outline select" />
      <Select variant="filled" placeholder="Filled variant" aria-label="Filled select" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select size="sm" placeholder="Small select" aria-label="Small select" />
      <Select size="md" placeholder="Medium select" aria-label="Medium select" />
      <Select size="lg" placeholder="Large select" aria-label="Large select" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select disabled placeholder="Disabled outline" aria-label="Disabled outline select" />
      <Select variant="filled" disabled placeholder="Disabled filled" aria-label="Disabled filled select" />
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select error placeholder="Error state outline" aria-label="Error outline select" />
      <Select variant="filled" error placeholder="Error state filled" aria-label="Error filled select" />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select multiple placeholder="Multiple selection" aria-label="Multiple select" />
      <Select multiple open placeholder="Multiple (open)" aria-label="Multiple select open" />
    </div>
  ),
};

export const WithOptions: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
            Choose a framework
          </label>
          <Select
            placeholder="Select framework..."
            value={selectedValue}
            onChange={(value) => setSelectedValue(value as string)}
            options={sampleOptions}
            aria-label="Framework select"
          />
          {selectedValue && (
            <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
              Selected: <strong>{sampleOptions.find((opt) => opt.value === selectedValue)?.label}</strong>
            </p>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <Select open placeholder="With menu open" aria-label="Open select with menu" />
          <SelectMenu open size="md" style={{ position: 'absolute', top: '100%', width: '100%', marginTop: '4px' }}>
            <SelectOption value="react" size="md">
              React
            </SelectOption>
            <SelectOption value="vue" size="md" selected>
              Vue
            </SelectOption>
            <SelectOption value="angular" size="md">
              Angular
            </SelectOption>
            <SelectOption value="svelte" size="md" disabled>
              Svelte (disabled)
            </SelectOption>
          </SelectMenu>
        </div>
      </div>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleSelect = (value: string) => {
      setSelectedValue(value);
      setIsOpen(false);
    };

    return (
      <div style={{ position: 'relative', width: '300px' }}>
        <Select
          open={isOpen}
          placeholder="Click to open"
          value={selectedValue}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Interactive select"
        >
          {selectedValue && sampleOptions.find((opt) => opt.value === selectedValue)?.label}
        </Select>

        {isOpen && (
          <SelectMenu
            open={isOpen}
            size="md"
            style={{
              position: 'absolute',
              top: '100%',
              width: '100%',
              marginTop: '4px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1000,
            }}
          >
            {sampleOptions.map((option) => (
              <SelectOption
                key={option.value}
                value={option.value}
                size="md"
                selected={selectedValue === option.value}
                onClick={() => handleSelect(option.value)}
                style={{ cursor: 'pointer' }}
              >
                {option.label}
              </SelectOption>
            ))}
          </SelectMenu>
        )}

        {selectedValue && (
          <div style={{ marginTop: '16px', padding: '12px', background: '#f5f5f5', borderRadius: '4px' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>
              Selected: <strong>{sampleOptions.find((opt) => opt.value === selectedValue)?.label}</strong>
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Outline Variant</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Select variant="outline" placeholder="Normal" aria-label="Outline normal" />
          <Select variant="outline" error placeholder="Error" aria-label="Outline error" />
          <Select variant="outline" disabled placeholder="Disabled" aria-label="Outline disabled" />
          <Select variant="outline" open placeholder="Open" aria-label="Outline open" />
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Filled Variant</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Select variant="filled" placeholder="Normal" aria-label="Filled normal" />
          <Select variant="filled" error placeholder="Error" aria-label="Filled error" />
          <Select variant="filled" disabled placeholder="Disabled" aria-label="Filled disabled" />
          <Select variant="filled" open placeholder="Open" aria-label="Filled open" />
        </div>
      </div>
    </div>
  ),
};
