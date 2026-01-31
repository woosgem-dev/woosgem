
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@woosgem/ds-react';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Divider />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Solid</div>
        <Divider variant="solid" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Dashed</div>
        <Divider variant="dashed" />
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ fontSize: '14px', color: '#666' }}>None</div>
        <Divider spacing="none" />
        <div style={{ fontSize: '14px', color: '#666' }}>Content</div>
      </div>
      <div>
        <div style={{ fontSize: '14px', color: '#666' }}>Small</div>
        <Divider spacing="sm" />
        <div style={{ fontSize: '14px', color: '#666' }}>Content</div>
      </div>
      <div>
        <div style={{ fontSize: '14px', color: '#666' }}>Medium</div>
        <Divider spacing="md" />
        <div style={{ fontSize: '14px', color: '#666' }}>Content</div>
      </div>
      <div>
        <div style={{ fontSize: '14px', color: '#666' }}>Large</div>
        <Divider spacing="lg" />
        <div style={{ fontSize: '14px', color: '#666' }}>Content</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '100px' }}>
      <div>Section 1</div>
      <Divider orientation="vertical" spacing="none" />
      <div>Section 2</div>
      <Divider orientation="vertical" spacing="none" />
      <div>Section 3</div>
    </div>
  ),
};

export const VerticalWithSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', height: '100px' }}>
      <div>Section 1</div>
      <Divider orientation="vertical" spacing="md" />
      <div>Section 2</div>
      <Divider orientation="vertical" spacing="md" />
      <div>Section 3</div>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>Section Title</h2>
      <p style={{ marginBottom: '16px', color: '#666' }}>
        This is some content in the first section. It demonstrates how dividers can be used to separate different parts of a page.
      </p>
      <Divider spacing="lg" />
      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>Another Section</h2>
      <p style={{ marginBottom: '16px', color: '#666' }}>
        Here's more content in a different section. The divider helps create visual separation.
      </p>
      <Divider spacing="lg" variant="dashed" />
      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>Final Section</h2>
      <p style={{ color: '#666' }}>
        This is the last section, showing how multiple dividers can be used throughout content.
      </p>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div style={{ width: '300px', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '16px' }}>
      <div style={{ padding: '8px 0' }}>Item 1</div>
      <Divider spacing="sm" />
      <div style={{ padding: '8px 0' }}>Item 2</div>
      <Divider spacing="sm" />
      <div style={{ padding: '8px 0' }}>Item 3</div>
      <Divider spacing="sm" />
      <div style={{ padding: '8px 0' }}>Item 4</div>
    </div>
  ),
};
