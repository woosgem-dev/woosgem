import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Overlay',
  component: 'wg-overlay',
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
type Story = StoryObj;

export const Default: Story = {
  args: {
    visible: true,
    opacity: 'medium',
    blur: false,
    level: 'modal',
  },
  render: (args) => html`
    <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
      <div style="position: relative; z-index: 1; text-align: center; color: white">
        <h2>Content Behind Overlay</h2>
        <p>This is the content that will be covered by the overlay.</p>
      </div>
      <wg-overlay ?visible=${args.visible} opacity=${args.opacity} ?blur=${args.blur} level=${args.level}></wg-overlay>
    </div>
  `,
};

export const OpacityLevels: Story = {
  render: () => html`
    <div style="display: flex; gap: 0; height: 400px">
      ${(['light', 'medium', 'dark'] as const).map(
        (opacity) => html`
          <div style="flex: 1; position: relative; overflow: hidden">
            <div style="padding: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center">
              <div style="position: relative; z-index: 1; color: white; text-align: center">
                <h3 style="margin: 0 0 8px; text-transform: capitalize">${opacity}</h3>
              </div>
            </div>
            <wg-overlay visible opacity=${opacity} style="position: absolute"></wg-overlay>
          </div>
        `,
      )}
    </div>
  `,
};

export const BlurEffect: Story = {
  render: () => html`
    <div style="display: flex; gap: 0; height: 400px">
      <div style="flex: 1; position: relative">
        <div style="padding: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center">
          <div style="position: relative; z-index: 1; color: white; text-align: center">
            <h3 style="margin: 0 0 8px">Without Blur</h3>
            <p style="margin: 0; font-size: 14px; opacity: 0.9">Standard overlay</p>
          </div>
        </div>
        <wg-overlay visible .blur=${false} style="position: absolute"></wg-overlay>
      </div>
      <div style="flex: 1; position: relative">
        <div style="padding: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center">
          <div style="position: relative; z-index: 1; color: white; text-align: center">
            <h3 style="margin: 0 0 8px">With Blur</h3>
            <p style="margin: 0; font-size: 14px; opacity: 0.9">backdrop-filter: blur(4px)</p>
          </div>
        </div>
        <wg-overlay visible blur style="position: absolute"></wg-overlay>
      </div>
    </div>
  `,
};

export const ZIndexLevels: Story = {
  name: 'Z-Index Levels',
  render: () => html`
    <div style="min-height: 100vh; padding: 40px; background: #f5f5f5">
      <div style="max-width: 800px; margin: 0 auto">
        <h2 style="margin-top: 0; margin-bottom: 24px; color: #333">Z-Index Stacking Levels</h2>
        <div style="display: flex; flex-direction: column; gap: 16px">
          ${(['base', 'dropdown', 'modal', 'popover', 'toast'] as const).map(
            (level) => html`
              <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; align-items: center">
                <div>
                  <strong style="text-transform: capitalize; font-size: 16px; color: #333">${level}</strong>
                  <p style="margin: 4px 0 0; font-size: 14px; color: #666">
                    ${level === 'base' ? 'z-index: 1000 - Base overlay layer' : ''}
                    ${level === 'dropdown' ? 'z-index: 1100 - Dropdown menus' : ''}
                    ${level === 'modal' ? 'z-index: 1200 - Modal dialogs' : ''}
                    ${level === 'popover' ? 'z-index: 1300 - Popovers' : ''}
                    ${level === 'toast' ? 'z-index: 1400 - Toast notifications' : ''}
                  </p>
                </div>
                <code style="padding: 4px 8px; background: #f5f5f5; border-radius: 4px; font-size: 12px; color: #667eea">level="${level}"</code>
              </div>
            `,
          )}
        </div>
      </div>
    </div>
  `,
};

class OverlayInteractiveDemo extends LitElement {
  @state() visible = false;
  createRenderRoot() { return this; }
  render() {
    return html`
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="position: relative; z-index: 1; max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1)">
          <h2 style="margin-top: 0; color: #333">Interactive Overlay Demo</h2>
          <p style="color: #666; line-height: 1.6">Click the button below to toggle the overlay. Click anywhere on the overlay to close it.</p>
          <button
            @click=${() => { this.visible = true; }}
            style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
          >Show Overlay</button>
        </div>
        <wg-overlay ?visible=${this.visible} opacity="medium" level="modal" @click=${() => { this.visible = false; }} style="cursor: pointer"></wg-overlay>
      </div>
    `;
  }
}
customElements.define('overlay-interactive-demo', OverlayInteractiveDemo);

export const Interactive: Story = {
  name: 'Interactive (Click to Close)',
  render: () => html`<overlay-interactive-demo></overlay-interactive-demo>`,
};

class OverlayBlurDemo extends LitElement {
  @state() visible = false;
  createRenderRoot() { return this; }
  render() {
    return html`
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="position: relative; z-index: 1; max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
          <h2 style="margin-top: 0; color: #333">Overlay with Blur</h2>
          <button
            @click=${() => { this.visible = true; }}
            style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
          >Show Overlay</button>
        </div>
        <wg-overlay ?visible=${this.visible} blur level="modal" @click=${() => { this.visible = false; }} style="cursor: pointer"></wg-overlay>
      </div>
    `;
  }
}
customElements.define('overlay-blur-demo', OverlayBlurDemo);

export const InteractiveWithBlur: Story = {
  name: 'Interactive with Blur',
  render: () => html`<overlay-blur-demo></overlay-blur-demo>`,
};

export const InteractiveDark: Story = {
  name: 'Interactive Dark',
  render: () => html`
    <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
      <div style="position: relative; z-index: 1; text-align: center; color: white">
        <h2>Dark Overlay</h2>
      </div>
      <wg-overlay visible opacity="dark"></wg-overlay>
    </div>
  `,
};

export const InteractiveLight: Story = {
  name: 'Interactive Light',
  render: () => html`
    <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
      <div style="position: relative; z-index: 1; text-align: center; color: white">
        <h2>Light Overlay</h2>
      </div>
      <wg-overlay visible opacity="light"></wg-overlay>
    </div>
  `,
};

export const AllCombinations: Story = {
  name: 'All Opacity x Blur Combinations',
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; min-height: 600px">
      ${(['light', 'medium', 'dark'] as const).flatMap((opacity) =>
        [false, true].map(
          (blur) => html`
            <div style="position: relative; min-height: 200px">
              <div style="padding: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center">
                <div style="position: relative; z-index: 1; color: white; text-align: center">
                  <h3 style="margin: 0 0 8px; text-transform: capitalize">${opacity}</h3>
                  <p style="margin: 0; font-size: 14px; opacity: 0.9">${blur ? 'With Blur' : 'No Blur'}</p>
                </div>
              </div>
              <wg-overlay visible opacity=${opacity} ?blur=${blur} style="position: absolute"></wg-overlay>
            </div>
          `,
        ),
      )}
    </div>
  `,
};

export const HiddenState: Story = {
  name: 'Hidden (visible=false)',
  render: () => html`
    <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
      <div style="max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <h2 style="margin-top: 0; color: #333">Hidden Overlay</h2>
        <p style="color: #666; line-height: 1.6">
          When <code>visible=false</code>, the overlay has <code>opacity: 0</code> and <code>pointer-events: none</code>.
        </p>
      </div>
      <wg-overlay .visible=${false}></wg-overlay>
    </div>
  `,
};
