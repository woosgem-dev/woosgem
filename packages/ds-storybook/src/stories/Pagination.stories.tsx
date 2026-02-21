import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, PaginationItem } from '@woosgem/ds-react';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'ghost'],
      description: 'Visual style of the pagination',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the pagination items',
      table: { category: 'Style' },
    },
    shape: {
      control: 'select',
      options: ['rounded', 'circle'],
      description: 'Shape of the pagination items',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    shape: 'rounded',
  },
  render: (args) => (
    <Pagination {...args}>
      <PaginationItem active>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>5</PaginationItem>
    </Pagination>
  ),
};

export const Variants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['outline', 'filled', 'ghost'] as const).map((variant) => (
        <div key={variant}>
          <p style={{
            margin: '0 0 8px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#333',
            textTransform: 'capitalize',
          }}>
            {variant}
          </p>
          <Pagination variant={variant}>
            <PaginationItem active>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationItem>3</PaginationItem>
            <PaginationItem>4</PaginationItem>
            <PaginationItem>5</PaginationItem>
          </Pagination>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <p style={{
            margin: '0 0 8px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#333',
            textTransform: 'uppercase',
          }}>
            {size}
          </p>
          <Pagination size={size}>
            <PaginationItem active>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationItem>3</PaginationItem>
            <PaginationItem>4</PaginationItem>
            <PaginationItem>5</PaginationItem>
          </Pagination>
        </div>
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  name: 'Rounded vs Circle',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      {(['rounded', 'circle'] as const).map((shape) => (
        <div key={shape}>
          <p style={{
            margin: '0 0 8px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#333',
            textTransform: 'capitalize',
          }}>
            {shape}
          </p>
          <Pagination shape={shape}>
            <PaginationItem active>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationItem>3</PaginationItem>
            <PaginationItem>4</PaginationItem>
            <PaginationItem>5</PaginationItem>
          </Pagination>
        </div>
      ))}
    </div>
  ),
};

export const Interactive: Story = {
  name: 'Interactive',
  render: () => {
    const [activePage, setActivePage] = useState(1);
    const totalPages = 7;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem
              key={page}
              active={activePage === page}
              onClick={() => setActivePage(page)}
            >
              {page}
            </PaginationItem>
          ))}
        </Pagination>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Current page: <strong>{activePage}</strong>
        </p>
      </div>
    );
  },
};

export const WithPrevNext: Story = {
  name: 'With Prev/Next Buttons',
  render: () => {
    const [activePage, setActivePage] = useState(1);
    const totalPages = 5;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Pagination>
          <PaginationItem
            disabled={activePage === 1}
            onClick={() => setActivePage((prev) => Math.max(1, prev - 1))}
          >
            &laquo; Prev
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem
              key={page}
              active={activePage === page}
              onClick={() => setActivePage(page)}
            >
              {page}
            </PaginationItem>
          ))}
          <PaginationItem
            disabled={activePage === totalPages}
            onClick={() => setActivePage((prev) => Math.min(totalPages, prev + 1))}
          >
            Next &raquo;
          </PaginationItem>
        </Pagination>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Page <strong>{activePage}</strong> of {totalPages}
        </p>
      </div>
    );
  },
};
