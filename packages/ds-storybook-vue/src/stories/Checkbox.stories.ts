import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Checkbox } from '@woosgem/ds-vue';

const meta: Meta = {
  title: 'Components/Checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
      table: { category: 'Style' },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: { category: 'State' },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Shows indeterminate state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    checked: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() { return { args }; },
    template: '<Checkbox v-bind="args">Checkbox label</Checkbox>',
  }),
};

export const Checked: Story = {
  render: () => ({
    components: { Checkbox },
    template: '<Checkbox :checked="true">Checked checkbox</Checkbox>',
  }),
};

export const Interactive: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <Checkbox :checked="checked" @click="checked = !checked">
        Click to toggle: {{ checked ? 'ON' : 'OFF' }}
      </Checkbox>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Checkbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px">
        <Checkbox>Unchecked</Checkbox>
        <Checkbox :checked="true">Checked</Checkbox>
        <Checkbox :indeterminate="true">Indeterminate</Checkbox>
        <Checkbox :disabled="true">Disabled</Checkbox>
        <Checkbox :checked="true" :disabled="true">Checked &amp; Disabled</Checkbox>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Checkbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px">
        <Checkbox size="sm" :checked="true">Small checkbox</Checkbox>
        <Checkbox size="md" :checked="true">Medium checkbox (default)</Checkbox>
        <Checkbox size="lg" :checked="true">Large checkbox</Checkbox>
      </div>
    `,
  }),
};

export const Indeterminate: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const items = ref([false, true, false]);
      const allChecked = () => items.value.every(Boolean);
      const someChecked = () => items.value.some(Boolean);
      const isIndeterminate = () => someChecked() && !allChecked();

      const toggleAll = () => {
        const newVal = !allChecked();
        items.value = [newVal, newVal, newVal];
      };

      const toggleItem = (index: number) => {
        items.value[index] = !items.value[index];
      };

      return { items, allChecked, isIndeterminate, toggleAll, toggleItem };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px">
        <Checkbox
          :checked="allChecked()"
          :indeterminate="isIndeterminate()"
          @click="toggleAll"
        >
          <span style="font-weight: 600">Select all items</span>
        </Checkbox>
        <div style="padding-left: 24px; display: flex; flex-direction: column; gap: 8px">
          <Checkbox
            v-for="(checked, index) in items"
            :key="index"
            :checked="checked"
            @click="toggleItem(index)"
          >
            Item {{ index + 1 }}
          </Checkbox>
        </div>
      </div>
    `,
  }),
};

export const WithoutLabel: Story = {
  render: () => ({
    components: { Checkbox },
    template: '<Checkbox :checked="true" aria-label="Select this item" />',
  }),
};

export const FormExample: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const values = ref({
        terms: false,
        newsletter: false,
        marketing: false,
      });

      const toggle = (key: keyof typeof values.value) => {
        values.value[key] = !values.value[key];
      };

      return { values, toggle };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px">
        <Checkbox :checked="values.terms" @click="toggle('terms')">I agree to the Terms of Service</Checkbox>
        <Checkbox :checked="values.newsletter" @click="toggle('newsletter')">Subscribe to newsletter</Checkbox>
        <Checkbox :checked="values.marketing" @click="toggle('marketing')">Receive marketing emails</Checkbox>
      </div>
    `,
  }),
};
