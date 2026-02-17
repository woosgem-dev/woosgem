import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Switch } from '@woosgem/ds-vue';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
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
      description: 'Whether the switch is checked',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
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
  render: (args) => ({
    components: { Switch },
    setup() { return { args }; },
    template: '<Switch v-bind="args" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="text-align: center">
          <Switch size="sm" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">sm</div>
        </div>
        <div style="text-align: center">
          <Switch size="md" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">md</div>
        </div>
        <div style="text-align: center">
          <Switch size="lg" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">lg</div>
        </div>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="text-align: center">
          <Switch color="primary" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">primary</div>
        </div>
        <div style="text-align: center">
          <Switch color="secondary" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">secondary</div>
        </div>
        <div style="text-align: center">
          <Switch color="success" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">success</div>
        </div>
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px">
        <div style="display: flex; align-items: center; gap: 12px"><Switch /><span style="font-size: 14px; color: var(--wg-color-text, #111)">Unchecked</span></div>
        <div style="display: flex; align-items: center; gap: 12px"><Switch :checked="true" /><span style="font-size: 14px; color: var(--wg-color-text, #111)">Checked</span></div>
        <div style="display: flex; align-items: center; gap: 12px"><Switch :disabled="true" /><span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Disabled</span></div>
        <div style="display: flex; align-items: center; gap: 12px"><Switch :checked="true" :disabled="true" /><span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Checked + Disabled</span></div>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const notifications = ref(true);
      const darkMode = ref(false);
      const autoSave = ref(true);
      return { notifications, darkMode, autoSave };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; background-color: var(--wg-color-background-muted, #f5f5f5); border-radius: 12px; min-width: 300px">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">Notifications</div>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Receive push notifications</div>
          </div>
          <Switch :checked="notifications" @click="notifications = !notifications" />
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">Dark Mode</div>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Enable dark theme</div>
          </div>
          <Switch :checked="darkMode" @click="darkMode = !darkMode" />
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">Auto-save</div>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Save changes automatically</div>
          </div>
          <Switch color="success" :checked="autoSave" @click="autoSave = !autoSave" />
        </div>
      </div>
    `,
  }),
};

export const WithLabels: Story = {
  name: 'With Labels',
  render: () => ({
    components: { Switch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px">
        <label style="display: flex; align-items: center; gap: 12px; cursor: pointer">
          <Switch :checked="true" />
          <span style="font-size: 14px; color: var(--wg-color-text, #111)">Enable feature</span>
        </label>
        <label style="display: flex; align-items: center; gap: 12px; cursor: pointer">
          <Switch />
          <span style="font-size: 14px; color: var(--wg-color-text, #111)">Send newsletters</span>
        </label>
        <label style="display: flex; align-items: center; gap: 12px; cursor: not-allowed">
          <Switch :disabled="true" />
          <span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Premium only</span>
        </label>
      </div>
    `,
  }),
};
