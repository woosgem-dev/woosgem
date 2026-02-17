import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Textarea',
  component: 'wg-textarea',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
      description: 'Visual variant of the textarea',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the textarea',
      table: { category: 'Style' },
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: { category: 'State' },
    },
    error: {
      control: 'boolean',
      description: 'Whether the textarea has an error',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'outline', size: 'md', resize: 'vertical' },
  render: (args) => html`
    <wg-textarea variant=${args.variant} size=${args.size} resize=${args.resize} placeholder="Enter your message..."></wg-textarea>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
      <div>
        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-text, #111)">
          Outline
        </label>
        <wg-textarea variant="outline" placeholder="Outline variant..."></wg-textarea>
      </div>
      <div>
        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-text, #111)">
          Filled
        </label>
        <wg-textarea variant="filled" placeholder="Filled variant..."></wg-textarea>
      </div>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
      <div>
        <label style="display: block; font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 4px">
          Small
        </label>
        <wg-textarea size="sm" placeholder="Small textarea..."></wg-textarea>
      </div>
      <div>
        <label style="display: block; font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 4px">
          Medium
        </label>
        <wg-textarea size="md" placeholder="Medium textarea..."></wg-textarea>
      </div>
      <div>
        <label style="display: block; font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 4px">
          Large
        </label>
        <wg-textarea size="lg" placeholder="Large textarea..."></wg-textarea>
      </div>
    </div>
  `,
};

export const ResizeOptions: Story = {
  name: 'Resize Options',
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 600px">
      <div>
        <label style="display: block; font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 4px">
          None
        </label>
        <wg-textarea resize="none" placeholder="Cannot resize..." .rows=${3}></wg-textarea>
      </div>
      <div>
        <label style="display: block; font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 4px">
          Vertical
        </label>
        <wg-textarea resize="vertical" placeholder="Resize vertically..." .rows=${3}></wg-textarea>
      </div>
      <div>
        <label style="display: block; font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 4px">
          Horizontal
        </label>
        <wg-textarea resize="horizontal" placeholder="Resize horizontally..." .rows=${3}></wg-textarea>
      </div>
      <div>
        <label style="display: block; font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 4px">
          Both
        </label>
        <wg-textarea resize="both" placeholder="Resize any direction..." .rows=${3}></wg-textarea>
      </div>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
      <div>
        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-text, #111)">
          Default
        </label>
        <wg-textarea placeholder="Enter text..."></wg-textarea>
      </div>
      <div>
        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-text, #111)">
          With Value
        </label>
        <wg-textarea .value=${'This is some existing content that can be edited.'}></wg-textarea>
      </div>
      <div>
        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-danger, #dc2626)">
          Error
        </label>
        <wg-textarea error placeholder="This field has an error..."></wg-textarea>
        <p style="font-size: 12px; color: var(--wg-color-danger, #dc2626); margin-top: 4px">
          Please enter at least 10 characters.
        </p>
      </div>
      <div>
        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-text-muted, #666)">
          Disabled
        </label>
        <wg-textarea disabled placeholder="This field is disabled..."></wg-textarea>
      </div>
    </div>
  `,
};

export const FormExample: Story = {
  name: 'Form Example',
  render: () => html`
    <div style="max-width: 500px; padding: 24px; background-color: var(--wg-color-background, #fff); border-radius: 12px; border: 1px solid var(--wg-color-border, #e5e7eb)">
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600; color: var(--wg-color-text, #111)">
        Contact Form
      </h3>
      <div style="display: flex; flex-direction: column; gap: 16px">
        <div>
          <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-text, #111)">
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter subject..."
            style="width: 100%; padding: 8px 12px; font-size: 14px; border: 1px solid var(--wg-color-border, #e5e7eb); border-radius: 8px; box-sizing: border-box"
          />
        </div>
        <div>
          <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-text, #111)">
            Message
          </label>
          <wg-textarea
            placeholder="Type your message here..."
            .rows=${5}
            resize="vertical"
          ></wg-textarea>
          <p style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 4px">
            Minimum 50 characters
          </p>
        </div>
        <button
          style="padding: 10px 20px; background-color: var(--wg-color-primary, #0066ff); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 500; cursor: pointer"
        >
          Send Message
        </button>
      </div>
    </div>
  `,
};

export const CharacterCount: Story = {
  name: 'With Character Count',
  render: () => html`
    <div style="max-width: 400px">
      <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--wg-color-text, #111)">
        Bio
      </label>
      <wg-textarea
        placeholder="Tell us about yourself..."
        .rows=${4}
        .maxLength=${200}
        .value=${"I'm a software developer passionate about creating great user experiences."}
      ></wg-textarea>
      <div style="display: flex; justify-content: flex-end; margin-top: 4px">
        <span style="font-size: 12px; color: var(--wg-color-text-muted, #666)">
          72 / 200
        </span>
      </div>
    </div>
  `,
};
