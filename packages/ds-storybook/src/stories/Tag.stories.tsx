
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@woosgem/ds-react';
import { useState } from 'react';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
      description: 'Visual style of the tag',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'],
      description: 'Color theme of the tag',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tag',
      table: { category: 'Style' },
    },
    closable: {
      control: 'boolean',
      description: 'Whether the tag shows a close button',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is disabled',
      table: { category: 'State' },
    },
    onClose: {
      action: 'close',
      description: 'Callback when the close button is clicked',
      table: { category: 'Behavior' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag',
    variant: 'subtle',
    color: 'primary',
    size: 'md',
    closable: false,
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tag variant="solid">Solid</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="subtle">Subtle</Tag>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tag color="primary">Primary</Tag>
      <Tag color="secondary">Secondary</Tag>
      <Tag color="danger">Danger</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="info">Info</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const Closable: Story = {
  render: () => {
    const ClosableDemo = () => {
      const [tags, setTags] = useState([
        { id: 1, label: 'React', color: 'primary' as const },
        { id: 2, label: 'TypeScript', color: 'info' as const },
        { id: 3, label: 'Storybook', color: 'warning' as const },
        { id: 4, label: 'SCSS', color: 'danger' as const },
        { id: 5, label: 'Design System', color: 'success' as const },
      ]);

      const removeTag = (id: number) => {
        setTags((prev) => prev.filter((tag) => tag.id !== id));
      };

      const resetTags = () => {
        setTags([
          { id: 1, label: 'React', color: 'primary' },
          { id: 2, label: 'TypeScript', color: 'info' },
          { id: 3, label: 'Storybook', color: 'warning' },
          { id: 4, label: 'SCSS', color: 'danger' },
          { id: 5, label: 'Design System', color: 'success' },
        ]);
      };

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            {tags.map((tag) => (
              <Tag key={tag.id} color={tag.color} closable onClose={() => removeTag(tag.id)}>
                {tag.label}
              </Tag>
            ))}
            {tags.length === 0 && (
              <span style={{ fontSize: '14px', color: '#999' }}>All tags removed</span>
            )}
          </div>
          {tags.length < 5 && (
            <button
              onClick={resetTags}
              style={{
                alignSelf: 'flex-start',
                padding: '6px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
              }}
            >
              Reset Tags
            </button>
          )}
        </div>
      );
    };

    return <ClosableDemo />;
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tag disabled>Disabled</Tag>
      <Tag variant="solid" color="primary" disabled>Solid Disabled</Tag>
      <Tag variant="outline" color="danger" disabled>Outline Disabled</Tag>
      <Tag closable disabled>Closable Disabled</Tag>
    </div>
  ),
};

export const TagGroup: Story = {
  name: 'Tag Group (Filter Example)',
  render: () => {
    const FilterDemo = () => {
      const allFilters = [
        { id: 'status-active', category: 'Status', label: 'Active', color: 'success' as const },
        { id: 'status-pending', category: 'Status', label: 'Pending', color: 'warning' as const },
        { id: 'type-bug', category: 'Type', label: 'Bug', color: 'danger' as const },
        { id: 'type-feature', category: 'Type', label: 'Feature', color: 'info' as const },
        { id: 'priority-high', category: 'Priority', label: 'High', color: 'danger' as const },
        { id: 'priority-low', category: 'Priority', label: 'Low', color: 'secondary' as const },
      ];

      const [activeFilters, setActiveFilters] = useState(allFilters.map((f) => f.id));

      const removeFilter = (id: string) => {
        setActiveFilters((prev) => prev.filter((f) => f !== id));
      };

      const resetFilters = () => {
        setActiveFilters(allFilters.map((f) => f.id));
      };

      const visibleFilters = allFilters.filter((f) => activeFilters.includes(f.id));

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#333' }}>
              Active Filters ({visibleFilters.length})
            </span>
            {visibleFilters.length < allFilters.length && (
              <button
                onClick={resetFilters}
                style={{
                  padding: '4px 8px',
                  border: 'none',
                  background: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  fontSize: '13px',
                  textDecoration: 'underline',
                }}
              >
                Reset
              </button>
            )}
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {visibleFilters.map((filter) => (
              <Tag
                key={filter.id}
                variant="outline"
                color={filter.color}
                size="sm"
                closable
                onClose={() => removeFilter(filter.id)}
              >
                {filter.category}: {filter.label}
              </Tag>
            ))}
            {visibleFilters.length === 0 && (
              <span style={{ fontSize: '13px', color: '#999' }}>No active filters</span>
            )}
          </div>
        </div>
      );
    };

    return <FilterDemo />;
  },
};
