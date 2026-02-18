import type { Meta, StoryObj } from '@storybook/vue3';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@woosgem/ds-vue';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card size (controls padding, border-radius, typography, gap)',
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
  },
  render: (args) => ({
    components: { Card },
    setup() { return { args }; },
    template: `
      <Card v-bind="args">
        <div>
          <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 600">Card Title</h3>
          <p style="margin: 0; color: var(--wg-color-text-secondary)">
            This is a basic card with default styling. Cards are containers for grouping related content.
          </p>
        </div>
      </Card>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
        <Card variant="outlined" style="flex: 1 1 250px">
          <h4 style="margin: 0 0 8px">Outlined</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Default variant with border</p>
        </Card>
        <Card variant="elevated" style="flex: 1 1 250px">
          <h4 style="margin: 0 0 8px">Elevated</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Elevated with shadow effect</p>
        </Card>
        <Card variant="filled" style="flex: 1 1 250px">
          <h4 style="margin: 0 0 8px">Filled</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Filled with background color</p>
        </Card>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
        <Card size="sm"><strong>Small:</strong> Compact size for dense layouts</Card>
        <Card size="md"><strong>Medium:</strong> Default comfortable spacing</Card>
        <Card size="lg"><strong>Large:</strong> Spacious size for emphasis</Card>
      </div>
    `,
  }),
};

export const Hoverable: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
        <Card variant="outlined" :hoverable="true" style="flex: 1 1 250px">
          <h4 style="margin: 0 0 8px">Hoverable Outlined</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Hover over me to see the effect</p>
        </Card>
        <Card variant="elevated" :hoverable="true" style="flex: 1 1 250px">
          <h4 style="margin: 0 0 8px">Hoverable Elevated</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Shadow intensifies on hover</p>
        </Card>
        <Card variant="filled" :hoverable="true" style="flex: 1 1 250px">
          <h4 style="margin: 0 0 8px">Hoverable Filled</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Background changes on hover</p>
        </Card>
      </div>
    `,
  }),
};

export const Clickable: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
        <Card :clickable="true" @click="() => alert('Outlined card clicked!')" style="flex: 1 1 250px; cursor: pointer">
          <h4 style="margin: 0 0 8px">Clickable Card</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Click me! Includes hover effect and keyboard navigation (Enter/Space).</p>
        </Card>
        <Card variant="elevated" :clickable="true" @click="() => alert('Elevated card clicked!')" style="flex: 1 1 250px; cursor: pointer">
          <h4 style="margin: 0 0 8px">Elevated Clickable</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">Clickable with elevated style</p>
        </Card>
      </div>
    `,
  }),
};

export const WithHeader: Story = {
  render: () => ({
    components: { Card, CardHeader },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
        <Card>
          <CardHeader style="size: 16px">
            <h3 style="margin: 0; font-size: 18px; font-weight: 600">Card with Header</h3>
          </CardHeader>
          <div style="size: 16px">
            <p style="margin: 0">The header section is separate from the body content. No divider by default.</p>
          </div>
        </Card>
        <Card>
          <CardHeader :divider="true" style="size: 16px">
            <h3 style="margin: 0; font-size: 18px; font-weight: 600">Header with Divider</h3>
          </CardHeader>
          <div style="size: 16px">
            <p style="margin: 0">Add divider prop to show a separator line below the header.</p>
          </div>
        </Card>
      </div>
    `,
  }),
};

export const WithFooter: Story = {
  render: () => ({
    components: { Card, CardFooter, Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
        <Card>
          <div style="size: 16px">
            <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Card with Footer</h3>
            <p style="margin: 0">Content area with action buttons in the footer.</p>
          </div>
          <CardFooter style="size: 12px 16px">
            <Button size="sm" variant="ghost">Cancel</Button>
            <Button size="sm">Confirm</Button>
          </CardFooter>
        </Card>
        <Card>
          <div style="size: 16px">
            <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Footer with Divider</h3>
            <p style="margin: 0">Add divider prop to separate footer from body.</p>
          </div>
          <CardFooter :divider="true" align="end" style="size: 12px 16px">
            <Button size="sm" variant="outline">Cancel</Button>
            <Button size="sm">Submit</Button>
          </CardFooter>
        </Card>
      </div>
    `,
  }),
};

export const FooterAlignment: Story = {
  name: 'Footer Alignment Options',
  render: () => ({
    components: { Card, CardFooter, Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
        <Card>
          <div style="size: 16px"><strong>Align Start (default)</strong></div>
          <CardFooter :divider="true" align="start" style="size: 12px 16px">
            <Button size="sm">Left</Button>
            <Button size="sm" variant="outline">Button</Button>
          </CardFooter>
        </Card>
        <Card>
          <div style="size: 16px"><strong>Align Center</strong></div>
          <CardFooter :divider="true" align="center" style="size: 12px 16px">
            <Button size="sm">Center</Button>
            <Button size="sm" variant="outline">Button</Button>
          </CardFooter>
        </Card>
        <Card>
          <div style="size: 16px"><strong>Align End</strong></div>
          <CardFooter :divider="true" align="end" style="size: 12px 16px">
            <Button size="sm" variant="outline">Cancel</Button>
            <Button size="sm">Confirm</Button>
          </CardFooter>
        </Card>
        <Card>
          <div style="size: 16px"><strong>Align Between (space-between)</strong></div>
          <CardFooter :divider="true" align="between" style="size: 12px 16px">
            <Button size="sm" variant="ghost">Delete</Button>
            <div style="display: flex; gap: 8px">
              <Button size="sm" variant="outline">Cancel</Button>
              <Button size="sm">Save</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    `,
  }),
};

export const FullStructure: Story = {
  name: 'Complete Card Structure',
  render: () => ({
    components: { Card, CardHeader, CardBody, CardFooter, Button },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
        <Card variant="outlined" style="flex: 1 1 350px">
          <CardHeader :divider="true" style="size: 16px">
            <h3 style="margin: 0; font-size: 18px; font-weight: 600">User Profile</h3>
            <p style="margin: 4px 0 0; font-size: 14px; color: var(--wg-color-text-secondary)">Complete your profile information</p>
          </CardHeader>
          <CardBody style="size: 16px">
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
          </CardBody>
          <CardFooter :divider="true" align="end" style="size: 12px 16px">
            <Button size="sm" variant="outline">Cancel</Button>
            <Button size="sm">Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  name: 'Interactive Demo',
  render: () => ({
    components: { Card },
    setup() {
      const cardData = [
        { title: 'Analytics', desc: 'View your statistics', icon: '\u{1F4CA}' },
        { title: 'Settings', desc: 'Manage preferences', icon: '\u2699\uFE0F' },
        { title: 'Messages', desc: '3 unread messages', icon: '\u{1F4AC}' },
        { title: 'Profile', desc: 'Update your info', icon: '\u{1F464}' },
      ];
      const handleCardClick = (title: string) => { alert(`"${title}" card clicked!`); };
      return { cardData, handleCardClick };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; max-width: 900px">
        <Card
          v-for="item in cardData"
          :key="item.title"
          variant="outlined"
          :clickable="true"
          @click="handleCardClick(item.title)"
          style="cursor: pointer"
        >
          <div style="font-size: 32px; margin-bottom: 8px">{{ item.icon }}</div>
          <h4 style="margin: 0 0 4px; font-size: 16px; font-weight: 600">{{ item.title }}</h4>
          <p style="margin: 0; font-size: 14px; color: var(--wg-color-text-secondary)">{{ item.desc }}</p>
        </Card>
      </div>
    `,
  }),
};

export const RealWorldExample: Story = {
  name: 'Real World: Product Card',
  render: () => ({
    components: { Card, CardBody, CardFooter, Button },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; max-width: 900px">
        <Card variant="outlined" :hoverable="true" style="flex: 1 1 280px">
          <div style="height: 180px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px">\u{1F3A7}</div>
          <CardBody style="size: 16px">
            <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Wireless Headphones</h3>
            <p style="margin: 0 0 12px; font-size: 14px; color: var(--wg-color-text-secondary)">Premium sound quality with active noise cancellation</p>
            <div style="font-size: 24px; font-weight: 700; color: var(--wg-color-primary)">$299</div>
          </CardBody>
          <CardFooter style="size: 12px 16px">
            <Button :fullWidth="true">Add to Cart</Button>
          </CardFooter>
        </Card>
        <Card variant="elevated" :hoverable="true" style="flex: 1 1 280px">
          <div style="height: 180px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px">\u231A</div>
          <CardBody style="size: 16px">
            <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Smart Watch Pro</h3>
            <p style="margin: 0 0 12px; font-size: 14px; color: var(--wg-color-text-secondary)">Track your fitness goals and stay connected</p>
            <div style="font-size: 24px; font-weight: 700; color: var(--wg-color-primary)">$449</div>
          </CardBody>
          <CardFooter style="size: 12px 16px">
            <Button :fullWidth="true">Add to Cart</Button>
          </CardFooter>
        </Card>
        <Card variant="outlined" :hoverable="true" style="flex: 1 1 280px">
          <div style="height: 180px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px">\u{1F4F1}</div>
          <CardBody style="size: 16px">
            <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600">Latest Smartphone</h3>
            <p style="margin: 0 0 12px; font-size: 14px; color: var(--wg-color-text-secondary)">Experience next-gen performance and camera</p>
            <div style="font-size: 24px; font-weight: 700; color: var(--wg-color-primary)">$999</div>
          </CardBody>
          <CardFooter style="size: 12px 16px">
            <Button :fullWidth="true">Add to Cart</Button>
          </CardFooter>
        </Card>
      </div>
    `,
  }),
};
