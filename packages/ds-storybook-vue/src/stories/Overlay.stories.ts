import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Overlay } from '@woosgem/ds-vue';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    opacity: {
      control: 'select',
      options: ['light', 'medium', 'dark'],
      description: 'Background opacity level',
      table: { category: 'Style' },
    },
    level: {
      control: 'select',
      options: ['base', 'dropdown', 'modal', 'popover', 'toast'],
      description: 'Z-index stacking level',
      table: { category: 'Layout' },
    },
    blur: {
      control: 'boolean',
      description: 'Enable background blur effect',
      table: { category: 'Style' },
    },
    visible: {
      control: 'boolean',
      description: 'Whether the overlay is visible',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
    opacity: 'medium',
    blur: false,
    level: 'modal',
  },
  render: (args) => ({
    components: { Overlay },
    setup() { return { args }; },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="position: relative; z-index: 1; text-align: center; color: white">
          <h2>Content Behind Overlay</h2>
          <p>This is the content that will be covered by the overlay.</p>
        </div>
        <Overlay v-bind="args" />
      </div>
    `,
  }),
};

export const OpacityLevels: Story = {
  render: () => ({
    components: { Overlay },
    setup() {
      const levels = ['light', 'medium', 'dark'] as const;
      return { levels };
    },
    template: `
      <div style="display: flex; gap: 0; height: 400px">
        <div v-for="opacity in levels" :key="opacity" style="flex: 1; position: relative; overflow: hidden">
          <div style="padding: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center">
            <div style="position: relative; z-index: 1; color: white; text-align: center">
              <h3 style="margin: 0 0 8px; text-transform: capitalize">{{ opacity }}</h3>
            </div>
          </div>
          <Overlay :visible="true" :opacity="opacity" style="position: absolute" />
        </div>
      </div>
    `,
  }),
};

export const BlurEffect: Story = {
  render: () => ({
    components: { Overlay },
    template: `
      <div style="display: flex; gap: 0; height: 400px">
        <div style="flex: 1; position: relative">
          <div style="padding: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center">
            <div style="position: relative; z-index: 1; color: white; text-align: center">
              <h3 style="margin: 0 0 8px">Without Blur</h3>
              <p style="margin: 0; font-size: 14px; opacity: 0.9">Standard overlay</p>
            </div>
          </div>
          <Overlay :visible="true" :blur="false" style="position: absolute" />
        </div>
        <div style="flex: 1; position: relative">
          <div style="padding: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center">
            <div style="position: relative; z-index: 1; color: white; text-align: center">
              <h3 style="margin: 0 0 8px">With Blur</h3>
              <p style="margin: 0; font-size: 14px; opacity: 0.9">backdrop-filter: blur(4px)</p>
            </div>
          </div>
          <Overlay :visible="true" :blur="true" style="position: absolute" />
        </div>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  name: 'Interactive (Click to Close)',
  render: () => ({
    components: { Overlay },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="position: relative; z-index: 1; max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1)">
          <h2 style="margin-top: 0; color: #333">Interactive Overlay Demo</h2>
          <p style="color: #666; line-height: 1.6">Click the button below to toggle the overlay. Click anywhere on the overlay to close it.</p>
          <button
            @click="visible = true"
            style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
          >Show Overlay</button>
        </div>
        <Overlay :visible="visible" opacity="medium" level="modal" @click="visible = false" style="cursor: pointer" />
      </div>
    `,
  }),
};

export const HiddenState: Story = {
  name: 'Hidden (visible=false)',
  render: () => ({
    components: { Overlay },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
          <h2 style="margin-top: 0; color: #333">Hidden Overlay</h2>
          <p style="color: #666; line-height: 1.6">
            When visible=false, the overlay has opacity: 0 and pointer-events: none.
          </p>
        </div>
        <Overlay :visible="false" />
      </div>
    `,
  }),
};
