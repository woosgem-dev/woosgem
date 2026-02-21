import type { Meta, StoryObj } from '@storybook/vue3';
import { Icon } from '@woosgem/ds-vue';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size (xs: 12px, sm: 16px, md: 20px, lg: 24px, xl: 32px)',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'danger', 'success', 'warning', 'info', 'muted'],
      description: 'Icon color',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'inherit',
  },
  render: (args) => ({
    components: { Icon },
    setup() { return { args }; },
    template: `<Icon v-bind="args"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" /></svg></Icon>`,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: flex; align-items: center; gap: 16px">
        <Icon size="xs"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" /></svg></Icon>
        <Icon size="sm"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" /></svg></Icon>
        <Icon size="md"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" /></svg></Icon>
        <Icon size="lg"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" /></svg></Icon>
        <Icon size="xl"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" /></svg></Icon>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: flex; align-items: center; gap: 16px">
        <Icon size="lg" color="inherit"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></Icon>
        <Icon size="lg" color="primary"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></Icon>
        <Icon size="lg" color="secondary"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></Icon>
        <Icon size="lg" color="danger"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></Icon>
        <Icon size="lg" color="success"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></Icon>
        <Icon size="lg" color="warning"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></Icon>
        <Icon size="lg" color="info"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></Icon>
        <Icon size="lg" color="muted"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></Icon>
      </div>
    `,
  }),
};

export const InlineWithText: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 14px">
        <p style="display: flex; align-items: center; gap: 4px; margin: 0">
          <Icon size="sm" color="success"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" /></svg></Icon>
          Operation completed successfully
        </p>
        <p style="display: flex; align-items: center; gap: 4px; margin: 0">
          <Icon size="sm" color="warning"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg></Icon>
          Please review the changes before proceeding
        </p>
        <p style="display: flex; align-items: center; gap: 4px; margin: 0">
          <Icon size="sm" color="info"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" /></svg></Icon>
          You have 3 new notifications
        </p>
      </div>
    `,
  }),
};
