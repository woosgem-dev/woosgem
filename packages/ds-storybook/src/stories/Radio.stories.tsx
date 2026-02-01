import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from '@woosgem/ds-react';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the radio button',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success'],
      description: 'Color when checked',
      table: { category: 'Style' },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    checked: false,
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Radio size="sm" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>sm</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Radio size="md" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>md</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Radio size="lg" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>lg</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Radio color="primary" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Radio color="secondary" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>secondary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Radio color="success" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>success</div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text, #111)' }}>Unchecked</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio checked />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text, #111)' }}>Checked</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio disabled />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text-muted, #666)' }}>Disabled</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio checked disabled />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text-muted, #666)' }}>Checked + Disabled</span>
      </div>
    </div>
  ),
};

const InteractiveRadioGroup: React.FC = () => {
  const [selected, setSelected] = useState('option1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {['option1', 'option2', 'option3'].map((option) => (
        <label
          key={option}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
        >
          <Radio
            checked={selected === option}
            onClick={() => setSelected(option)}
          />
          <span style={{ fontSize: '14px', color: 'var(--wg-color-text, #111)' }}>
            Option {option.slice(-1)}
          </span>
        </label>
      ))}
      <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>
        Selected: {selected}
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveRadioGroup />,
};

export const RadioGroupVertical: Story = {
  name: 'RadioGroup - Vertical',
  render: () => (
    <RadioGroup orientation="vertical">
      <div className="radio-item">
        <Radio checked />
        <span className="radio-label">Option A</span>
      </div>
      <div className="radio-item">
        <Radio />
        <span className="radio-label">Option B</span>
      </div>
      <div className="radio-item">
        <Radio />
        <span className="radio-label">Option C</span>
      </div>
    </RadioGroup>
  ),
};

export const RadioGroupHorizontal: Story = {
  name: 'RadioGroup - Horizontal',
  render: () => (
    <RadioGroup orientation="horizontal">
      <div className="radio-item">
        <Radio checked />
        <span className="radio-label">Small</span>
      </div>
      <div className="radio-item">
        <Radio />
        <span className="radio-label">Medium</span>
      </div>
      <div className="radio-item">
        <Radio />
        <span className="radio-label">Large</span>
      </div>
    </RadioGroup>
  ),
};

export const FormExample: Story = {
  name: 'Form Example',
  render: () => {
    const [plan, setPlan] = useState('pro');

    return (
      <div style={{
        maxWidth: '400px',
        padding: '24px',
        backgroundColor: 'var(--wg-color-background, #fff)',
        borderRadius: '12px',
        border: '1px solid var(--wg-color-border, #e5e7eb)',
      }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 600, color: 'var(--wg-color-text, #111)' }}>
          Select Plan
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { id: 'free', label: 'Free', description: 'Basic features' },
            { id: 'pro', label: 'Pro', description: 'Advanced features + Support' },
            { id: 'enterprise', label: 'Enterprise', description: 'Custom solutions' },
          ].map((option) => (
            <label
              key={option.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px',
                borderRadius: '8px',
                border: `1px solid ${plan === option.id ? 'var(--wg-color-primary, #0066ff)' : 'var(--wg-color-border, #e5e7eb)'}`,
                backgroundColor: plan === option.id ? 'var(--wg-color-primary-alpha-10, rgba(0, 102, 255, 0.1))' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Radio
                checked={plan === option.id}
                onClick={() => setPlan(option.id)}
              />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--wg-color-text, #111)' }}>
                  {option.label}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>
                  {option.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  },
};

export const WithDescription: Story = {
  name: 'With Descriptions',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '350px' }}>
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
        <Radio checked style={{ marginTop: '2px' }} />
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--wg-color-text, #111)' }}>
            Email notifications
          </div>
          <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>
            Receive updates via email
          </div>
        </div>
      </label>
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
        <Radio style={{ marginTop: '2px' }} />
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--wg-color-text, #111)' }}>
            Push notifications
          </div>
          <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>
            Get instant alerts on your device
          </div>
        </div>
      </label>
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
        <Radio style={{ marginTop: '2px' }} />
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--wg-color-text, #111)' }}>
            No notifications
          </div>
          <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>
            Only check manually
          </div>
        </div>
      </label>
    </div>
  ),
};
