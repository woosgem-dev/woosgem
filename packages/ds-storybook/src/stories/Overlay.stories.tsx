import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from '@woosgem/ds-react';
import { useState } from 'react';

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

// Helper component for interactive demos
const InteractiveOverlayDemo = ({
  opacity = 'medium',
  blur = false,
  level = 'modal',
}: {
  opacity?: 'light' | 'medium' | 'dark';
  blur?: boolean;
  level?: 'base' | 'dropdown' | 'modal' | 'popover' | 'toast';
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ minHeight: '100vh', padding: '40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '600px',
        margin: '0 auto',
        padding: '32px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ marginTop: 0, color: '#333' }}>Interactive Overlay Demo</h2>
        <p style={{ color: '#666', lineHeight: 1.6 }}>
          Click the button below to toggle the overlay. Click anywhere on the overlay to close it.
        </p>
        <button
          onClick={() => setVisible(true)}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 600,
            color: 'white',
            background: '#667eea',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Show Overlay
        </button>

        <div style={{ marginTop: '24px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            <strong>Current settings:</strong><br />
            Opacity: {opacity} | Blur: {blur ? 'Yes' : 'No'} | Level: {level}
          </p>
        </div>
      </div>

      <Overlay
        visible={visible}
        opacity={opacity}
        blur={blur}
        level={level}
        onClick={() => setVisible(false)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    visible: true,
    opacity: 'medium',
    blur: false,
    level: 'modal',
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', padding: '40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
          <h2>Content Behind Overlay</h2>
          <p>This is the content that will be covered by the overlay.</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const OpacityLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0', height: '400px' }}>
      {(['light', 'medium', 'dark'] as const).map((opacity) => (
        <div key={opacity} style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <div style={{
            padding: '32px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 8px', textTransform: 'capitalize' }}>{opacity}</h3>
              <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
                {opacity === 'light' && 'rgba(0, 0, 0, 0.3)'}
                {opacity === 'medium' && 'rgba(0, 0, 0, 0.5)'}
                {opacity === 'dark' && 'rgba(0, 0, 0, 0.7)'}
              </p>
            </div>
          </div>
          <Overlay visible opacity={opacity} style={{ position: 'absolute' }} />
        </div>
      ))}
    </div>
  ),
};

export const BlurEffect: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0', height: '400px' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <div style={{
          padding: '32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px' }}>Without Blur</h3>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Standard overlay</p>
          </div>
        </div>
        <Overlay visible blur={false} style={{ position: 'absolute' }} />
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <div style={{
          padding: '32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px' }}>With Blur</h3>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>backdrop-filter: blur(4px)</p>
          </div>
        </div>
        <Overlay visible blur={true} style={{ position: 'absolute' }} />
      </div>
    </div>
  ),
};

export const ZIndexLevels: Story = {
  name: 'Z-Index Levels',
  render: () => (
    <div style={{ minHeight: '100vh', padding: '40px', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginTop: 0, marginBottom: '24px', color: '#333' }}>Z-Index Stacking Levels</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {(['base', 'dropdown', 'modal', 'popover', 'toast'] as const).map((level) => (
            <div
              key={level}
              style={{
                padding: '20px',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <strong style={{ textTransform: 'capitalize', fontSize: '16px', color: '#333' }}>
                  {level}
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#666' }}>
                  {level === 'base' && 'z-index: 1000 - Base overlay layer'}
                  {level === 'dropdown' && 'z-index: 1100 - Dropdown menus'}
                  {level === 'modal' && 'z-index: 1200 - Modal dialogs'}
                  {level === 'popover' && 'z-index: 1300 - Popovers'}
                  {level === 'toast' && 'z-index: 1400 - Toast notifications'}
                </p>
              </div>
              <code style={{
                padding: '4px 8px',
                background: '#f5f5f5',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#667eea',
              }}>
                level="{level}"
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  name: 'Interactive (Click to Close)',
  render: () => <InteractiveOverlayDemo />,
};

export const InteractiveWithBlur: Story = {
  name: 'Interactive with Blur',
  render: () => <InteractiveOverlayDemo blur />,
};

export const InteractiveDark: Story = {
  name: 'Interactive Dark',
  render: () => <InteractiveOverlayDemo opacity="dark" />,
};

export const InteractiveLight: Story = {
  name: 'Interactive Light',
  render: () => <InteractiveOverlayDemo opacity="light" />,
};

export const AllCombinations: Story = {
  name: 'All Opacity × Blur Combinations',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0', minHeight: '600px' }}>
      {(['light', 'medium', 'dark'] as const).map((opacity) =>
        [false, true].map((blur) => (
          <div key={`${opacity}-${blur}`} style={{ position: 'relative', minHeight: '200px' }}>
            <div style={{
              padding: '32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 8px', textTransform: 'capitalize' }}>{opacity}</h3>
                <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
                  {blur ? 'With Blur' : 'No Blur'}
                </p>
              </div>
            </div>
            <Overlay visible opacity={opacity} blur={blur} style={{ position: 'absolute' }} />
          </div>
        ))
      )}
    </div>
  ),
};

export const HiddenState: Story = {
  name: 'Hidden (visible=false)',
  render: () => (
    <div style={{ minHeight: '100vh', padding: '40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '32px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '12px',
      }}>
        <h2 style={{ marginTop: 0, color: '#333' }}>Hidden Overlay</h2>
        <p style={{ color: '#666', lineHeight: 1.6 }}>
          When <code>visible=false</code>, the overlay has <code>opacity: 0</code> and <code>pointer-events: none</code>.
          This is useful for animation transitions.
        </p>
        <div style={{
          marginTop: '16px',
          padding: '16px',
          background: '#f5f5f5',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#666',
        }}>
          <strong>CSS applied:</strong><br />
          opacity: 0;<br />
          pointer-events: none;<br />
          aria-hidden: true;
        </div>
      </div>
      <Overlay visible={false} />
    </div>
  ),
};
