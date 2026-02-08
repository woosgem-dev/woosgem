import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@woosgem/ds-react';

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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600 }}>Card Title</h3>
        <p style={{ margin: 0, color: 'var(--wg-color-text-secondary)' }}>
          This is a basic card with default styling. Cards are containers for grouping related content.
        </p>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', maxWidth: '900px' }}>
      <Card variant="outlined" style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 8px' }}>Outlined</h4>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
          Default variant with border
        </p>
      </Card>
      <Card variant="elevated" style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 8px' }}>Elevated</h4>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
          Elevated with shadow effect
        </p>
      </Card>
      <Card variant="filled" style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 8px' }}>Filled</h4>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
          Filled with background color
        </p>
      </Card>
    </div>
  ),
};

export const Paddings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Card padding="none">
        <div style={{ padding: '12px', background: 'var(--wg-color-primary-alpha-10)' }}>
          <strong>None:</strong> No padding (useful for custom layouts)
        </div>
      </Card>
      <Card padding="sm">
        <strong>Small:</strong> Compact padding for dense layouts
      </Card>
      <Card padding="md">
        <strong>Medium:</strong> Default comfortable spacing
      </Card>
      <Card padding="lg">
        <strong>Large:</strong> Spacious padding for emphasis
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', maxWidth: '900px' }}>
      <Card variant="outlined" hoverable style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 8px' }}>Hoverable Outlined</h4>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
          Hover over me to see the effect
        </p>
      </Card>
      <Card variant="elevated" hoverable style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 8px' }}>Hoverable Elevated</h4>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
          Shadow intensifies on hover
        </p>
      </Card>
      <Card variant="filled" hoverable style={{ flex: '1 1 250px' }}>
        <h4 style={{ margin: '0 0 8px' }}>Hoverable Filled</h4>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
          Background changes on hover
        </p>
      </Card>
    </div>
  ),
};

export const Clickable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', maxWidth: '900px' }}>
      <Card
        clickable
        onClick={() => alert('Outlined card clicked!')}
        style={{ flex: '1 1 250px', cursor: 'pointer' }}
      >
        <h4 style={{ margin: '0 0 8px' }}>Clickable Card</h4>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
          Click me! Includes hover effect and keyboard navigation (Enter/Space).
        </p>
      </Card>
      <Card
        variant="elevated"
        clickable
        onClick={() => alert('Elevated card clicked!')}
        style={{ flex: '1 1 250px', cursor: 'pointer' }}
      >
        <h4 style={{ margin: '0 0 8px' }}>Elevated Clickable</h4>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
          Clickable with elevated style
        </p>
      </Card>
    </div>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Card padding="none">
        <CardHeader style={{ padding: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Card with Header</h3>
        </CardHeader>
        <div style={{ padding: '16px' }}>
          <p style={{ margin: 0 }}>
            The header section is separate from the body content. No divider by default.
          </p>
        </div>
      </Card>

      <Card padding="none">
        <CardHeader divider style={{ padding: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Header with Divider</h3>
        </CardHeader>
        <div style={{ padding: '16px' }}>
          <p style={{ margin: 0 }}>
            Add divider prop to show a separator line below the header.
          </p>
        </div>
      </Card>
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Card padding="none">
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 600 }}>Card with Footer</h3>
          <p style={{ margin: 0 }}>Content area with action buttons in the footer.</p>
        </div>
        <CardFooter style={{ padding: '12px 16px' }}>
          <Button size="sm" variant="ghost">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </CardFooter>
      </Card>

      <Card padding="none">
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 600 }}>Footer with Divider</h3>
          <p style={{ margin: 0 }}>Add divider prop to separate footer from body.</p>
        </div>
        <CardFooter divider align="end" style={{ padding: '12px 16px' }}>
          <Button size="sm" variant="outline">Cancel</Button>
          <Button size="sm">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const FooterAlignment: Story = {
  name: 'Footer Alignment Options',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Card padding="none">
        <div style={{ padding: '16px' }}>
          <strong>Align Start (default)</strong>
        </div>
        <CardFooter divider align="start" style={{ padding: '12px 16px' }}>
          <Button size="sm">Left</Button>
          <Button size="sm" variant="outline">Button</Button>
        </CardFooter>
      </Card>

      <Card padding="none">
        <div style={{ padding: '16px' }}>
          <strong>Align Center</strong>
        </div>
        <CardFooter divider align="center" style={{ padding: '12px 16px' }}>
          <Button size="sm">Center</Button>
          <Button size="sm" variant="outline">Button</Button>
        </CardFooter>
      </Card>

      <Card padding="none">
        <div style={{ padding: '16px' }}>
          <strong>Align End</strong>
        </div>
        <CardFooter divider align="end" style={{ padding: '12px 16px' }}>
          <Button size="sm" variant="outline">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </CardFooter>
      </Card>

      <Card padding="none">
        <div style={{ padding: '16px' }}>
          <strong>Align Between (space-between)</strong>
        </div>
        <CardFooter divider align="between" style={{ padding: '12px 16px' }}>
          <Button size="sm" variant="ghost">Delete</Button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button size="sm" variant="outline">Cancel</Button>
            <Button size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const FullStructure: Story = {
  name: 'Complete Card Structure',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', maxWidth: '900px' }}>
      <Card variant="outlined" padding="none" style={{ flex: '1 1 350px' }}>
        <CardHeader divider style={{ padding: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>User Profile</h3>
          <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
            Complete your profile information
          </p>
        </CardHeader>
        <CardBody style={{ padding: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <strong style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Name</strong>
              <span style={{ fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>John Doe</span>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Email</strong>
              <span style={{ fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>john@example.com</span>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Role</strong>
              <span style={{ fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>Administrator</span>
            </div>
          </div>
        </CardBody>
        <CardFooter divider align="end" style={{ padding: '12px 16px' }}>
          <Button size="sm" variant="outline">Cancel</Button>
          <Button size="sm">Save Changes</Button>
        </CardFooter>
      </Card>

      <Card variant="elevated" padding="none" style={{ flex: '1 1 350px' }}>
        <CardHeader divider style={{ padding: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Notification Settings</h3>
        </CardHeader>
        <CardBody style={{ padding: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              Email notifications
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              Push notifications
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              SMS notifications
            </label>
          </div>
        </CardBody>
        <CardFooter divider align="between" style={{ padding: '12px 16px' }}>
          <Button size="sm" variant="ghost">Reset to Default</Button>
          <Button size="sm">Apply</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const Interactive: Story = {
  name: 'Interactive Demo',
  render: () => {
    const handleCardClick = (title: string) => {
      alert(`"${title}" card clicked!`);
    };

    const cardData = [
      { title: 'Analytics', desc: 'View your statistics', icon: '?ìä' },
      { title: 'Settings', desc: 'Manage preferences', icon: '?ôÔ∏è' },
      { title: 'Messages', desc: '3 unread messages', icon: '?ìß' },
      { title: 'Profile', desc: 'Update your info', icon: '?ë§' },
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', maxWidth: '900px' }}>
        {cardData.map((item) => (
          <Card
            key={item.title}
            variant="outlined"
            clickable
            onClick={() => handleCardClick(item.title)}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.icon}</div>
            <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 600 }}>{item.title}</h4>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
              {item.desc}
            </p>
          </Card>
        ))}
      </div>
    );
  },
};

export const RealWorldExample: Story = {
  name: 'Real World: Product Card',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', maxWidth: '900px' }}>
      <Card variant="outlined" padding="none" hoverable style={{ flex: '1 1 280px' }}>
        <div style={{
          height: '180px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '48px'
        }}>
          ?éß
        </div>
        <CardBody style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 600 }}>Wireless Headphones</h3>
          <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
            Premium sound quality with active noise cancellation
          </p>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--wg-color-primary)' }}>
            $299
          </div>
        </CardBody>
        <CardFooter style={{ padding: '12px 16px' }}>
          <Button fullWidth>Add to Cart</Button>
        </CardFooter>
      </Card>

      <Card variant="elevated" padding="none" hoverable style={{ flex: '1 1 280px' }}>
        <div style={{
          height: '180px',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '48px'
        }}>
          ??
        </div>
        <CardBody style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 600 }}>Smart Watch Pro</h3>
          <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
            Track your fitness goals and stay connected
          </p>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--wg-color-primary)' }}>
            $449
          </div>
        </CardBody>
        <CardFooter style={{ padding: '12px 16px' }}>
          <Button fullWidth>Add to Cart</Button>
        </CardFooter>
      </Card>

      <Card variant="outlined" padding="none" hoverable style={{ flex: '1 1 280px' }}>
        <div style={{
          height: '180px',
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '48px'
        }}>
          ?ì±
        </div>
        <CardBody style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 600 }}>Latest Smartphone</h3>
          <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--wg-color-text-secondary)' }}>
            Experience next-gen performance and camera
          </p>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--wg-color-primary)' }}>
            $999
          </div>
        </CardBody>
        <CardFooter style={{ padding: '12px 16px' }}>
          <Button fullWidth>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};
