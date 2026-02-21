import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from '@woosgem/ds-react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the breadcrumb',
      table: { category: 'Style' },
    },
    separator: {
      control: 'text',
      description: 'Separator character between items',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    separator: '/',
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Products</BreadcrumbItem>
      <BreadcrumbItem>Electronics</BreadcrumbItem>
      <BreadcrumbItem active>Laptop</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Small</div>
        <Breadcrumb size="sm">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem active>Electronics</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Medium</div>
        <Breadcrumb size="md">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem active>Electronics</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Large</div>
        <Breadcrumb size="lg">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem active>Electronics</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const WithSeparators: Story = {
  name: 'Custom Separators',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Slash (default)</div>
        <Breadcrumb separator="/">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem active>Item</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Chevron</div>
        <Breadcrumb separator=">">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem active>Item</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Pipe</div>
        <Breadcrumb separator="|">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem active>Item</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Arrow</div>
        {/* Using unicode right arrow */}
        <Breadcrumb separator={'\u2192'}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem active>Item</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const ActiveState: Story = {
  name: 'Active State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Last item marked as current page</div>
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem>Electronics</BreadcrumbItem>
          <BreadcrumbItem active>Laptop</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>No active item (navigational context only)</div>
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem>Electronics</BreadcrumbItem>
          <BreadcrumbItem>Laptop</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const DisabledItem: Story = {
  name: 'Disabled Item',
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem disabled>Products</BreadcrumbItem>
      <BreadcrumbItem>Electronics</BreadcrumbItem>
      <BreadcrumbItem active>Laptop</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const LongPath: Story = {
  name: 'Long Path',
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Category</BreadcrumbItem>
      <BreadcrumbItem>Subcategory</BreadcrumbItem>
      <BreadcrumbItem>Sub-subcategory</BreadcrumbItem>
      <BreadcrumbItem>Section</BreadcrumbItem>
      <BreadcrumbItem active>Item</BreadcrumbItem>
    </Breadcrumb>
  ),
};
