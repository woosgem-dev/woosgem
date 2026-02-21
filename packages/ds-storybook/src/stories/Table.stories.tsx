import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from '@woosgem/ds-react';
import { useState } from 'react';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'striped', 'bordered'],
      description: 'Visual variant of the table',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the table',
      table: { category: 'Style' },
    },
    hoverable: {
      control: 'boolean',
      description: 'Shows hover effect on rows',
      table: { category: 'Behavior' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { name: 'Alice Johnson', role: 'Engineer', department: 'Engineering', status: 'Active' },
  { name: 'Bob Smith', role: 'Designer', department: 'Design', status: 'Active' },
  { name: 'Charlie Brown', role: 'Manager', department: 'Product', status: 'Away' },
  { name: 'Diana Prince', role: 'Developer', department: 'Engineering', status: 'Active' },
  { name: 'Eve Wilson', role: 'Analyst', department: 'Analytics', status: 'Inactive' },
];

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.department}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  args: {
    variant: 'default',
    size: 'md',
    hoverable: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['default', 'striped', 'bordered'] as const).map((variant) => (
        <div key={variant}>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'capitalize' }}>
            {variant}
          </div>
          <Table variant={variant}>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.slice(0, 3).map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', textTransform: 'capitalize' }}>
            {size}
          </div>
          <Table size={size}>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.slice(0, 3).map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Table hoverable>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.department}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const CellAlignment: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell align="left">Name</TableHeaderCell>
          <TableHeaderCell align="center">Department</TableHeaderCell>
          <TableHeaderCell align="right">Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.name}>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="center">{row.department}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const SortableColumns: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell sortable>Name</TableHeaderCell>
          <TableHeaderCell sortable>Role</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.department}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const SelectedRows: Story = {
  render: () => {
    const [selectedNames, setSelectedNames] = useState<Set<string>>(new Set());

    const toggleSelection = (name: string) => {
      setSelectedNames((prev) => {
        const next = new Set(prev);
        if (next.has(name)) {
          next.delete(name);
        } else {
          next.add(name);
        }
        return next;
      });
    };

    return (
      <div>
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <TableHeaderCell>Department</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row) => (
              <TableRow
                key={row.name}
                selected={selectedNames.has(row.name)}
                onClick={() => toggleSelection(row.name)}
                style={{ cursor: 'pointer' }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {selectedNames.size > 0 && (
          <div style={{ marginTop: '16px', padding: '12px', background: '#f5f5f5', borderRadius: '4px' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>
              Selected: <strong>{Array.from(selectedNames).join(', ')}</strong>
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const ProductTable: Story = {
  name: 'Product Table',
  render: () => {
    const products = [
      { name: 'Wireless Keyboard', price: '$79.99', stock: 142, status: 'In Stock' },
      { name: 'USB-C Hub', price: '$49.99', stock: 38, status: 'Low Stock' },
      { name: 'Monitor Stand', price: '$129.99', stock: 0, status: 'Out of Stock' },
      { name: 'Webcam HD', price: '$89.99', stock: 67, status: 'In Stock' },
      { name: 'Desk Mat', price: '$34.99', stock: 215, status: 'In Stock' },
    ];

    const statusColor = (status: string): string => {
      switch (status) {
        case 'In Stock':
          return 'var(--wg-color-success, #16a34a)';
        case 'Low Stock':
          return 'var(--wg-color-warning, #d97706)';
        case 'Out of Stock':
          return 'var(--wg-color-danger, #dc2626)';
        default:
          return 'inherit';
      }
    };

    return (
      <Table variant="striped" hoverable>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Product</TableHeaderCell>
            <TableHeaderCell align="right">Price</TableHeaderCell>
            <TableHeaderCell align="center">Stock</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.name}>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="center">{product.stock}</TableCell>
              <TableCell>
                <span style={{ color: statusColor(product.status), fontWeight: 500 }}>
                  {product.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
