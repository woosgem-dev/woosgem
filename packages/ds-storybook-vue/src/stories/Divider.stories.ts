import type { Meta, StoryObj } from '@storybook/vue3';
import { Divider } from '@woosgem/ds-vue';

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
      description: 'Orientation of the divider',
      table: { category: 'Layout' },
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed'],
      description: 'Visual style of the divider',
      table: { category: 'Style' },
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Spacing around the divider',
      table: { category: 'Layout' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Divider },
    template: '<div style="width: 300px"><Divider /></div>',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 24px">
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #666">Solid</div>
          <Divider variant="solid" />
        </div>
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #666">Dashed</div>
          <Divider variant="dashed" />
        </div>
      </div>
    `,
  }),
};

export const Spacing: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 24px">
        <div>
          <div style="font-size: 14px; color: #666">None</div>
          <Divider spacing="none" />
          <div style="font-size: 14px; color: #666">Content</div>
        </div>
        <div>
          <div style="font-size: 14px; color: #666">Small</div>
          <Divider spacing="sm" />
          <div style="font-size: 14px; color: #666">Content</div>
        </div>
        <div>
          <div style="font-size: 14px; color: #666">Medium</div>
          <Divider spacing="md" />
          <div style="font-size: 14px; color: #666">Content</div>
        </div>
        <div>
          <div style="font-size: 14px; color: #666">Large</div>
          <Divider spacing="lg" />
          <div style="font-size: 14px; color: #666">Content</div>
        </div>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div style="display: flex; align-items: center; gap: 16px; height: 100px">
        <div>Section 1</div>
        <Divider orientation="vertical" spacing="none" />
        <div>Section 2</div>
        <Divider orientation="vertical" spacing="none" />
        <div>Section 3</div>
      </div>
    `,
  }),
};

export const VerticalWithSpacing: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div style="display: flex; align-items: center; gap: 0; height: 100px">
        <div>Section 1</div>
        <Divider orientation="vertical" spacing="md" />
        <div>Section 2</div>
        <Divider orientation="vertical" spacing="md" />
        <div>Section 3</div>
      </div>
    `,
  }),
};

export const InContent: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div style="width: 400px">
        <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 8px">Section Title</h2>
        <p style="margin-bottom: 16px; color: #666">
          This is some content in the first section. It demonstrates how dividers can be used to separate different parts of a page.
        </p>
        <Divider spacing="lg" />
        <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 8px">Another Section</h2>
        <p style="margin-bottom: 16px; color: #666">
          Here's more content in a different section. The divider helps create visual separation.
        </p>
        <Divider spacing="lg" variant="dashed" />
        <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 8px">Final Section</h2>
        <p style="color: #666">
          This is the last section, showing how multiple dividers can be used throughout content.
        </p>
      </div>
    `,
  }),
};

export const InList: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div style="width: 300px; border: 1px solid #e5e5e5; border-radius: 8px; padding: 16px">
        <div style="padding: 8px 0">Item 1</div>
        <Divider spacing="sm" />
        <div style="padding: 8px 0">Item 2</div>
        <Divider spacing="sm" />
        <div style="padding: 8px 0">Item 3</div>
        <Divider spacing="sm" />
        <div style="padding: 8px 0">Item 4</div>
      </div>
    `,
  }),
};
