import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Radio, RadioGroup } from '@woosgem/ds-vue';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the radio button',
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
      description: 'Whether the radio is checked',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
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
    components: { Radio },
    setup() { return { args }; },
    template: '<Radio v-bind="args" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Radio },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="text-align: center">
          <Radio size="sm" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">sm</div>
        </div>
        <div style="text-align: center">
          <Radio size="md" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">md</div>
        </div>
        <div style="text-align: center">
          <Radio size="lg" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">lg</div>
        </div>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Radio },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="text-align: center">
          <Radio color="primary" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">primary</div>
        </div>
        <div style="text-align: center">
          <Radio color="secondary" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">secondary</div>
        </div>
        <div style="text-align: center">
          <Radio color="success" :checked="true" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">success</div>
        </div>
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Radio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px">
        <div style="display: flex; align-items: center; gap: 8px">
          <Radio />
          <span style="font-size: 14px; color: var(--wg-color-text, #111)">Unchecked</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px">
          <Radio :checked="true" />
          <span style="font-size: 14px; color: var(--wg-color-text, #111)">Checked</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px">
          <Radio :disabled="true" />
          <span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Disabled</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px">
          <Radio :checked="true" :disabled="true" />
          <span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Checked + Disabled</span>
        </div>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  render: () => ({
    components: { Radio },
    setup() {
      const selected = ref('option1');
      return { selected };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px">
        <label v-for="option in ['option1', 'option2', 'option3']" :key="option" style="display: flex; align-items: center; gap: 8px; cursor: pointer">
          <Radio :checked="selected === option" @click="selected = option" />
          <span style="font-size: 14px; color: var(--wg-color-text, #111)">Option {{ option.slice(-1) }}</span>
        </label>
        <div style="margin-top: 8px; font-size: 12px; color: var(--wg-color-text-muted, #666)">Selected: {{ selected }}</div>
      </div>
    `,
  }),
};

export const RadioGroupVertical: Story = {
  name: 'RadioGroup - Vertical',
  render: () => ({
    components: { Radio, RadioGroup },
    template: `
      <RadioGroup orientation="vertical">
        <div class="radio-item"><Radio :checked="true" /><span class="radio-label">Option A</span></div>
        <div class="radio-item"><Radio /><span class="radio-label">Option B</span></div>
        <div class="radio-item"><Radio /><span class="radio-label">Option C</span></div>
      </RadioGroup>
    `,
  }),
};

export const RadioGroupHorizontal: Story = {
  name: 'RadioGroup - Horizontal',
  render: () => ({
    components: { Radio, RadioGroup },
    template: `
      <RadioGroup orientation="horizontal">
        <div class="radio-item"><Radio :checked="true" /><span class="radio-label">Small</span></div>
        <div class="radio-item"><Radio /><span class="radio-label">Medium</span></div>
        <div class="radio-item"><Radio /><span class="radio-label">Large</span></div>
      </RadioGroup>
    `,
  }),
};

export const FormExample: Story = {
  name: 'Form Example',
  render: () => ({
    components: { Radio },
    setup() {
      const plan = ref('pro');
      const options = [
        { id: 'free', label: 'Free', description: 'Basic features' },
        { id: 'pro', label: 'Pro', description: 'Advanced features + Support' },
        { id: 'enterprise', label: 'Enterprise', description: 'Custom solutions' },
      ];
      return { plan, options };
    },
    template: `
      <div style="max-width: 400px; padding: 24px; background-color: var(--wg-color-background, #fff); border-radius: 12px; border: 1px solid var(--wg-color-border, #e5e7eb)">
        <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600; color: var(--wg-color-text, #111)">Select Plan</h3>
        <div style="display: flex; flex-direction: column; gap: 12px">
          <label
            v-for="option in options"
            :key="option.id"
            style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; border-radius: 8px; cursor: pointer; transition: all 0.2s"
            :style="{ border: '1px solid ' + (plan === option.id ? 'var(--wg-color-primary, #0066ff)' : 'var(--wg-color-border, #e5e7eb)'), backgroundColor: plan === option.id ? 'var(--wg-color-primary-alpha-10, rgba(0, 102, 255, 0.1))' : 'transparent' }"
          >
            <Radio :checked="plan === option.id" @click="plan = option.id" />
            <div>
              <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">{{ option.label }}</div>
              <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">{{ option.description }}</div>
            </div>
          </label>
        </div>
      </div>
    `,
  }),
};
