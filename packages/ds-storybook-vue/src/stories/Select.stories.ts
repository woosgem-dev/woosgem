import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Select, SelectMenu, SelectOption } from '@woosgem/ds-vue';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
      description: 'Visual style of the select',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select',
      table: { category: 'Style' },
    },
    error: {
      control: 'boolean',
      description: 'Shows error state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
      table: { category: 'State' },
    },
    open: {
      control: 'boolean',
      description: 'Controls dropdown open state',
      table: { category: 'State' },
    },
    multiple: {
      control: 'boolean',
      description: 'Enables multiple selection',
      table: { category: 'Behavior' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value selected',
      table: { category: 'Content' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option...',
    variant: 'outline',
    size: 'md',
  },
  render: (args) => ({
    components: { Select },
    setup() { return { args }; },
    template: '<Select v-bind="args" />',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Select },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Select variant="outline" placeholder="Outline variant" aria-label="Outline select" />
        <Select variant="filled" placeholder="Filled variant" aria-label="Filled select" />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Select },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Select size="sm" placeholder="Small select" aria-label="Small select" />
        <Select size="md" placeholder="Medium select" aria-label="Medium select" />
        <Select size="lg" placeholder="Large select" aria-label="Large select" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Select },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Select :disabled="true" placeholder="Disabled outline" aria-label="Disabled outline select" />
        <Select variant="filled" :disabled="true" placeholder="Disabled filled" aria-label="Disabled filled select" />
      </div>
    `,
  }),
};

export const Error: Story = {
  render: () => ({
    components: { Select },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Select :error="true" placeholder="Error state outline" aria-label="Error outline select" />
        <Select variant="filled" :error="true" placeholder="Error state filled" aria-label="Error filled select" />
      </div>
    `,
  }),
};

export const WithOptions: Story = {
  render: () => ({
    components: { Select, SelectMenu, SelectOption },
    setup() {
      const sampleOptions = [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
      ];
      const selectedValue = ref('');
      return { sampleOptions, selectedValue };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <div>
          <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500">Choose a framework</label>
          <Select
            placeholder="Select framework..."
            :value="selectedValue"
            @change="(v) => selectedValue = v"
            :options="sampleOptions"
            aria-label="Framework select"
          />
          <p v-if="selectedValue" style="margin-top: 8px; font-size: 12px; color: #666">
            Selected: <strong>{{ sampleOptions.find(o => o.value === selectedValue)?.label }}</strong>
          </p>
        </div>
        <div style="position: relative">
          <Select :open="true" placeholder="With menu open" aria-label="Open select with menu" />
          <SelectMenu :open="true" size="md" style="position: absolute; top: 100%; width: 100%; margin-top: 4px">
            <SelectOption value="react" size="md">React</SelectOption>
            <SelectOption value="vue" size="md" :selected="true">Vue</SelectOption>
            <SelectOption value="angular" size="md">Angular</SelectOption>
            <SelectOption value="svelte" size="md" :disabled="true">Svelte (disabled)</SelectOption>
          </SelectMenu>
        </div>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  render: () => ({
    components: { Select, SelectMenu, SelectOption },
    setup() {
      const sampleOptions = [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
      ];
      const isOpen = ref(false);
      const selectedValue = ref('');
      const handleSelect = (value: string) => {
        selectedValue.value = value;
        isOpen.value = false;
      };
      return { sampleOptions, isOpen, selectedValue, handleSelect };
    },
    template: `
      <div style="position: relative; width: 300px">
        <Select
          :open="isOpen"
          placeholder="Click to open"
          :value="selectedValue"
          @click="isOpen = !isOpen"
          aria-label="Interactive select"
        >{{ selectedValue && sampleOptions.find(o => o.value === selectedValue)?.label }}</Select>
        <SelectMenu
          v-if="isOpen"
          :open="isOpen"
          size="md"
          style="position: absolute; top: 100%; width: 100%; margin-top: 4px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); z-index: 1000"
        >
          <SelectOption
            v-for="option in sampleOptions"
            :key="option.value"
            :value="option.value"
            size="md"
            :selected="selectedValue === option.value"
            @click="handleSelect(option.value)"
            style="cursor: pointer"
          >{{ option.label }}</SelectOption>
        </SelectMenu>
        <div v-if="selectedValue" style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px">
          <p style="margin: 0; font-size: 14px">Selected: <strong>{{ sampleOptions.find(o => o.value === selectedValue)?.label }}</strong></p>
        </div>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    components: { Select },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 300px">
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600">Outline Variant</h4>
          <div style="display: flex; flex-direction: column; gap: 12px">
            <Select variant="outline" placeholder="Normal" aria-label="Outline normal" />
            <Select variant="outline" :error="true" placeholder="Error" aria-label="Outline error" />
            <Select variant="outline" :disabled="true" placeholder="Disabled" aria-label="Outline disabled" />
            <Select variant="outline" :open="true" placeholder="Open" aria-label="Outline open" />
          </div>
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600">Filled Variant</h4>
          <div style="display: flex; flex-direction: column; gap: 12px">
            <Select variant="filled" placeholder="Normal" aria-label="Filled normal" />
            <Select variant="filled" :error="true" placeholder="Error" aria-label="Filled error" />
            <Select variant="filled" :disabled="true" placeholder="Disabled" aria-label="Filled disabled" />
            <Select variant="filled" :open="true" placeholder="Open" aria-label="Filled open" />
          </div>
        </div>
      </div>
    `,
  }),
};
