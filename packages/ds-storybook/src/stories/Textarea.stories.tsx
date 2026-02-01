import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@woosgem/ds-react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
      description: 'Visual variant of the textarea',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the textarea',
      table: { category: 'Style' },
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: { category: 'State' },
    },
    error: {
      control: 'boolean',
      description: 'Whether the textarea has an error',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    resize: 'vertical',
    placeholder: 'Enter your message...',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-text, #111)' }}>
          Outline
        </label>
        <Textarea variant="outline" placeholder="Outline variant..." />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-text, #111)' }}>
          Filled
        </label>
        <Textarea variant="filled" placeholder="Filled variant..." />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '4px' }}>
          Small
        </label>
        <Textarea size="sm" placeholder="Small textarea..." />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '4px' }}>
          Medium
        </label>
        <Textarea size="md" placeholder="Medium textarea..." />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '4px' }}>
          Large
        </label>
        <Textarea size="lg" placeholder="Large textarea..." />
      </div>
    </div>
  ),
};

export const ResizeOptions: Story = {
  name: 'Resize Options',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '600px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '4px' }}>
          None
        </label>
        <Textarea resize="none" placeholder="Cannot resize..." rows={3} />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '4px' }}>
          Vertical
        </label>
        <Textarea resize="vertical" placeholder="Resize vertically..." rows={3} />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '4px' }}>
          Horizontal
        </label>
        <Textarea resize="horizontal" placeholder="Resize horizontally..." rows={3} />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '4px' }}>
          Both
        </label>
        <Textarea resize="both" placeholder="Resize any direction..." rows={3} />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-text, #111)' }}>
          Default
        </label>
        <Textarea placeholder="Enter text..." />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-text, #111)' }}>
          With Value
        </label>
        <Textarea defaultValue="This is some existing content that can be edited." />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-danger, #dc2626)' }}>
          Error
        </label>
        <Textarea error placeholder="This field has an error..." />
        <p style={{ fontSize: '12px', color: 'var(--wg-color-danger, #dc2626)', marginTop: '4px' }}>
          Please enter at least 10 characters.
        </p>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-text-muted, #666)' }}>
          Disabled
        </label>
        <Textarea disabled placeholder="This field is disabled..." />
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  name: 'Form Example',
  render: () => (
    <div style={{
      maxWidth: '500px',
      padding: '24px',
      backgroundColor: 'var(--wg-color-background, #fff)',
      borderRadius: '12px',
      border: '1px solid var(--wg-color-border, #e5e7eb)',
    }}>
      <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 600, color: 'var(--wg-color-text, #111)' }}>
        Contact Form
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-text, #111)' }}>
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter subject..."
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '14px',
              border: '1px solid var(--wg-color-border, #e5e7eb)',
              borderRadius: '8px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-text, #111)' }}>
            Message
          </label>
          <Textarea
            placeholder="Type your message here..."
            rows={5}
            resize="vertical"
          />
          <p style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '4px' }}>
            Minimum 50 characters
          </p>
        </div>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--wg-color-primary, #0066ff)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  ),
};

export const CharacterCount: Story = {
  name: 'With Character Count',
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--wg-color-text, #111)' }}>
        Bio
      </label>
      <Textarea
        placeholder="Tell us about yourself..."
        rows={4}
        maxLength={200}
        defaultValue="I'm a software developer passionate about creating great user experiences."
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
        <span style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>
          72 / 200
        </span>
      </div>
    </div>
  ),
};
