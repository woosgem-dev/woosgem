import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Card',
  component: 'wg-card',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'elevated', 'filled'],
      description: 'Visual variant of the card',
      table: { category: 'Style' },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Inner padding size',
      table: { category: 'Style' },
    },
    hoverable: {
      control: 'boolean',
      description: 'Shows hover effect on mouse over',
      table: { category: 'Behavior' },
    },
    clickable: {
      control: 'boolean',
      description: 'Makes card act as a clickable button with proper a11y attributes',
      table: { category: 'Behavior' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
  },
  render: (args) => html`
    <wg-card variant=${args.variant} padding=${args.padding}>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 600">Card Title</h3>
        <p style="margin: 0; color: var(--wg-color-text-secondary)">
          This is a basic card with default styling. Cards are containers for grouping related content.
        </p>
      </div>
    </wg-card>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
      <wg-card variant="outlined" style="flex: 1 1 250px">
        <h4 style="margin: 0 0 8px">Outlined</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Default variant with border</p>
      </wg-card>
      <wg-card variant="elevated" style="flex: 1 1 250px">
        <h4 style="margin: 0 0 8px">Elevated</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Elevated with shadow effect</p>
      </wg-card>
      <wg-card variant="filled" style="flex: 1 1 250px">
        <h4 style="margin: 0 0 8px">Filled</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Filled with background color</p>
      </wg-card>
    </div>
  `,
};

export const Paddings: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
      <wg-card padding="none">
        <div style="padding: 12px; background: var(--wg-color-primary-alpha-10)">
          <strong>None:</strong> No padding (useful for custom layouts)
        </div>
      </wg-card>
      <wg-card padding="sm">
        <strong>Small:</strong> Compact padding for dense layouts
      </wg-card>
      <wg-card padding="md">
        <strong>Medium:</strong> Default comfortable spacing
      </wg-card>
      <wg-card padding="lg">
        <strong>Large:</strong> Spacious padding for emphasis
      </wg-card>
    </div>
  `,
};

export const Hoverable: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
      <wg-card variant="outlined" ?hoverable=${true} style="flex: 1 1 250px">
        <h4 style="margin: 0 0 8px">Hoverable Outlined</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Hover over me to see the effect</p>
      </wg-card>
      <wg-card variant="elevated" ?hoverable=${true} style="flex: 1 1 250px">
        <h4 style="margin: 0 0 8px">Hoverable Elevated</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Shadow intensifies on hover</p>
      </wg-card>
      <wg-card variant="filled" ?hoverable=${true} style="flex: 1 1 250px">
        <h4 style="margin: 0 0 8px">Hoverable Filled</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Background changes on hover</p>
      </wg-card>
    </div>
  `,
};

export const Clickable: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
      <wg-card
        ?clickable=${true}
        @click=${() => alert('Outlined card clicked!')}
        style="flex: 1 1 250px; cursor: pointer"
      >
        <h4 style="margin: 0 0 8px">Clickable Card</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">
          Click me! Includes hover effect and keyboard navigation (Enter/Space).
        </p>
      </wg-card>
      <wg-card
        variant="elevated"
        ?clickable=${true}
        @click=${() => alert('Elevated card clicked!')}
        style="flex: 1 1 250px; cursor: pointer"
      >
        <h4 style="margin: 0 0 8px">Elevated Clickable</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Clickable with elevated style</p>
      </wg-card>
    </div>
  `,
};

export const WithHeader: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
      <wg-card padding="none">
        <wg-card-header style="padding: 16px">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600">Card with Header</h3>
        </wg-card-header>
        <div style="padding: 16px">
          <p style="margin: 0">The header section is separate from the body content. No divider by default.</p>
        </div>
      </wg-card>
      <wg-card padding="none">
        <wg-card-header ?divider=${true} style="padding: 16px">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600">Header with Divider</h3>
        </wg-card-header>
        <div style="padding: 16px">
          <p style="margin: 0">Add divider prop to show a separator line below the header.</p>
        </div>
      </wg-card>
    </div>
  `,
};

export const WithFooter: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
      <wg-card padding="none">
        <div style="padding: 16px">
          <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Card with Footer</h3>
          <p style="margin: 0">Content area with action buttons in the footer.</p>
        </div>
        <wg-card-footer style="padding: 12px 16px">
          <wg-button size="sm" variant="ghost">Cancel</wg-button>
          <wg-button size="sm">Confirm</wg-button>
        </wg-card-footer>
      </wg-card>
      <wg-card padding="none">
        <div style="padding: 16px">
          <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Footer with Divider</h3>
          <p style="margin: 0">Add divider prop to separate footer from body.</p>
        </div>
        <wg-card-footer ?divider=${true} align="end" style="padding: 12px 16px">
          <wg-button size="sm" variant="outline">Cancel</wg-button>
          <wg-button size="sm">Submit</wg-button>
        </wg-card-footer>
      </wg-card>
    </div>
  `,
};

export const FooterAlignment: Story = {
  name: 'Footer Alignment Options',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
      <wg-card padding="none">
        <div style="padding: 16px"><strong>Align Start (default)</strong></div>
        <wg-card-footer ?divider=${true} align="start" style="padding: 12px 16px">
          <wg-button size="sm">Left</wg-button>
          <wg-button size="sm" variant="outline">Button</wg-button>
        </wg-card-footer>
      </wg-card>
      <wg-card padding="none">
        <div style="padding: 16px"><strong>Align Center</strong></div>
        <wg-card-footer ?divider=${true} align="center" style="padding: 12px 16px">
          <wg-button size="sm">Center</wg-button>
          <wg-button size="sm" variant="outline">Button</wg-button>
        </wg-card-footer>
      </wg-card>
      <wg-card padding="none">
        <div style="padding: 16px"><strong>Align End</strong></div>
        <wg-card-footer ?divider=${true} align="end" style="padding: 12px 16px">
          <wg-button size="sm" variant="outline">Cancel</wg-button>
          <wg-button size="sm">Confirm</wg-button>
        </wg-card-footer>
      </wg-card>
      <wg-card padding="none">
        <div style="padding: 16px"><strong>Align Between (space-between)</strong></div>
        <wg-card-footer ?divider=${true} align="between" style="padding: 12px 16px">
          <wg-button size="sm" variant="ghost">Delete</wg-button>
          <div style="display: flex; gap: 8px">
            <wg-button size="sm" variant="outline">Cancel</wg-button>
            <wg-button size="sm">Save</wg-button>
          </div>
        </wg-card-footer>
      </wg-card>
    </div>
  `,
};

export const FullStructure: Story = {
  name: 'Complete Card Structure',
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
      <wg-card variant="outlined" padding="none" style="flex: 1 1 350px">
        <wg-card-header ?divider=${true} style="padding: 16px">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600">User Profile</h3>
          <p style="margin: 4px 0 0; font-size: 14px; color: var(--wg-color-text-secondary)">Complete your profile information</p>
        </wg-card-header>
        <wg-card-body style="padding: 16px">
          <div style="display: flex; flex-direction: column; gap: 12px">
            <div>
              <strong style="display: block; margin-bottom: 4px; font-size: 14px">Name</strong>
              <span style="font-size: 14px; color: var(--wg-color-text-secondary)">John Doe</span>
            </div>
            <div>
              <strong style="display: block; margin-bottom: 4px; font-size: 14px">Email</strong>
              <span style="font-size: 14px; color: var(--wg-color-text-secondary)">john@example.com</span>
            </div>
            <div>
              <strong style="display: block; margin-bottom: 4px; font-size: 14px">Role</strong>
              <span style="font-size: 14px; color: var(--wg-color-text-secondary)">Administrator</span>
            </div>
          </div>
        </wg-card-body>
        <wg-card-footer ?divider=${true} align="end" style="padding: 12px 16px">
          <wg-button size="sm" variant="outline">Cancel</wg-button>
          <wg-button size="sm">Save Changes</wg-button>
        </wg-card-footer>
      </wg-card>
      <wg-card variant="elevated" padding="none" style="flex: 1 1 350px">
        <wg-card-header ?divider=${true} style="padding: 16px">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600">Notification Settings</h3>
        </wg-card-header>
        <wg-card-body style="padding: 16px">
          <div style="display: flex; flex-direction: column; gap: 12px; font-size: 14px">
            <label style="display: flex; align-items: center; gap: 8px">
              <input type="checkbox" checked /> Email notifications
            </label>
            <label style="display: flex; align-items: center; gap: 8px">
              <input type="checkbox" checked /> Push notifications
            </label>
            <label style="display: flex; align-items: center; gap: 8px">
              <input type="checkbox" /> SMS notifications
            </label>
          </div>
        </wg-card-body>
        <wg-card-footer ?divider=${true} align="between" style="padding: 12px 16px">
          <wg-button size="sm" variant="ghost">Reset to Default</wg-button>
          <wg-button size="sm">Apply</wg-button>
        </wg-card-footer>
      </wg-card>
    </div>
  `,
};

export const Interactive: Story = {
  name: 'Interactive Demo',
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; max-width: 900px">
      <wg-card variant="outlined" ?clickable=${true} @click=${() => alert('Analytics clicked!')} style="cursor: pointer">
        <div style="font-size: 32px; margin-bottom: 8px">\u{1F4CA}</div>
        <h4 style="margin: 0 0 4px; font-size: 16px; font-weight: 600">Analytics</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">View your statistics</p>
      </wg-card>
      <wg-card variant="outlined" ?clickable=${true} @click=${() => alert('Settings clicked!')} style="cursor: pointer">
        <div style="font-size: 32px; margin-bottom: 8px">\u2699\uFE0F</div>
        <h4 style="margin: 0 0 4px; font-size: 16px; font-weight: 600">Settings</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Manage preferences</p>
      </wg-card>
      <wg-card variant="outlined" ?clickable=${true} @click=${() => alert('Messages clicked!')} style="cursor: pointer">
        <div style="font-size: 32px; margin-bottom: 8px">\u{1F4AC}</div>
        <h4 style="margin: 0 0 4px; font-size: 16px; font-weight: 600">Messages</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">3 unread messages</p>
      </wg-card>
      <wg-card variant="outlined" ?clickable=${true} @click=${() => alert('Profile clicked!')} style="cursor: pointer">
        <div style="font-size: 32px; margin-bottom: 8px">\u{1F464}</div>
        <h4 style="margin: 0 0 4px; font-size: 16px; font-weight: 600">Profile</h4>
        <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Update your info</p>
      </wg-card>
    </div>
  `,
};

export const RealWorldExample: Story = {
  name: 'Real World: Product Card',
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
      <wg-card variant="outlined" padding="none" ?hoverable=${true} style="flex: 1 1 280px">
        <div style="height: 180px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px">\u{1F3A7}</div>
        <wg-card-body style="padding: 16px">
          <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Wireless Headphones</h3>
          <p style="margin: 0 0 12px; font-size: 14px; color: var(--wg-color-text-secondary)">Premium sound quality with active noise cancellation</p>
          <div style="font-size: 24px; font-weight: 700; color: var(--wg-color-primary)">$299</div>
        </wg-card-body>
        <wg-card-footer style="padding: 12px 16px">
          <wg-button ?fullWidth=${true}>Add to Cart</wg-button>
        </wg-card-footer>
      </wg-card>
      <wg-card variant="elevated" padding="none" ?hoverable=${true} style="flex: 1 1 280px">
        <div style="height: 180px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px">\u231A</div>
        <wg-card-body style="padding: 16px">
          <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Smart Watch Pro</h3>
          <p style="margin: 0 0 12px; font-size: 14px; color: var(--wg-color-text-secondary)">Track your fitness goals and stay connected</p>
          <div style="font-size: 24px; font-weight: 700; color: var(--wg-color-primary)">$449</div>
        </wg-card-body>
        <wg-card-footer style="padding: 12px 16px">
          <wg-button ?fullWidth=${true}>Add to Cart</wg-button>
        </wg-card-footer>
      </wg-card>
      <wg-card variant="outlined" padding="none" ?hoverable=${true} style="flex: 1 1 280px">
        <div style="height: 180px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px">\u{1F4F1}</div>
        <wg-card-body style="padding: 16px">
          <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Latest Smartphone</h3>
          <p style="margin: 0 0 12px; font-size: 14px; color: var(--wg-color-text-secondary)">Experience next-gen performance and camera</p>
          <div style="font-size: 24px; font-weight: 700; color: var(--wg-color-primary)">$999</div>
        </wg-card-body>
        <wg-card-footer style="padding: 12px 16px">
          <wg-button ?fullWidth=${true}>Add to Cart</wg-button>
        </wg-card-footer>
      </wg-card>
    </div>
  `,
};
