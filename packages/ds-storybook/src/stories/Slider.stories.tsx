import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider, SliderTrack, SliderFill, SliderThumb } from '@woosgem/ds-react';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the slider',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color theme of the slider',
      table: { category: 'Style' },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the slider',
      table: { category: 'Style' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
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
    orientation: 'horizontal',
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Slider {...args}>
        <SliderTrack>
          <SliderFill style={{ width: '50%' }} />
          <SliderThumb style={{ left: '50%' }} />
        </SliderTrack>
      </Slider>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Slider size="sm">
          <SliderTrack>
            <SliderFill style={{ width: '50%' }} />
            <SliderThumb style={{ left: '50%' }} />
          </SliderTrack>
        </Slider>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>sm</div>
      </div>
      <div>
        <Slider size="md">
          <SliderTrack>
            <SliderFill style={{ width: '50%' }} />
            <SliderThumb style={{ left: '50%' }} />
          </SliderTrack>
        </Slider>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>md</div>
      </div>
      <div>
        <Slider size="lg">
          <SliderTrack>
            <SliderFill style={{ width: '50%' }} />
            <SliderThumb style={{ left: '50%' }} />
          </SliderTrack>
        </Slider>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>lg</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      {(['primary', 'secondary', 'success', 'warning', 'danger'] as const).map((color) => (
        <div key={color}>
          <Slider color={color}>
            <SliderTrack>
              <SliderFill style={{ width: '60%' }} />
              <SliderThumb style={{ left: '60%' }} />
            </SliderTrack>
          </Slider>
          <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>{color}</div>
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Slider disabled>
          <SliderTrack>
            <SliderFill style={{ width: '40%' }} />
            <SliderThumb style={{ left: '40%' }} />
          </SliderTrack>
        </Slider>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>Disabled</div>
      </div>
      <div>
        <Slider>
          <SliderTrack>
            <SliderFill style={{ width: '40%' }} />
            <SliderThumb style={{ left: '40%' }} />
          </SliderTrack>
        </Slider>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>Enabled</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
      {(['primary', 'success', 'warning'] as const).map((color) => (
        <div key={color} style={{ textAlign: 'center' }}>
          <div style={{ height: '200px' }}>
            <Slider orientation="vertical" color={color}>
              <SliderTrack>
                <SliderFill style={{ height: '50%' }} />
                <SliderThumb style={{ bottom: '50%' }} />
              </SliderTrack>
            </Slider>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>{color}</div>
        </div>
      ))}
    </div>
  ),
};

const InteractiveSlider = () => {
  const [value, setValue] = useState(50);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    setValue(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div style={{ width: '300px' }}>
      <Slider>
        <SliderTrack onClick={handleTrackClick} style={{ cursor: 'pointer' }}>
          <SliderFill style={{ width: `${value}%` }} />
          <SliderThumb style={{ left: `${value}%` }} />
        </SliderTrack>
      </Slider>
      <div style={{
        marginTop: '12px',
        fontSize: '14px',
        color: 'var(--wg-color-text, #111)',
        textAlign: 'center',
      }}>
        Value: {value}
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSlider />,
};

const VolumeControlDemo = () => {
  const [volume, setVolume] = useState(65);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    setVolume(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '24px',
      backgroundColor: 'var(--wg-color-background-muted, #f5f5f5)',
      borderRadius: '12px',
      minWidth: '360px',
    }}>
      <span style={{
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--wg-color-text, #111)',
        minWidth: '56px',
      }}>
        Volume
      </span>
      <div style={{ flex: 1 }}>
        <Slider color={volume > 80 ? 'danger' : 'primary'}>
          <SliderTrack onClick={handleTrackClick} style={{ cursor: 'pointer' }}>
            <SliderFill style={{ width: `${volume}%` }} />
            <SliderThumb style={{ left: `${volume}%` }} />
          </SliderTrack>
        </Slider>
      </div>
      <span style={{
        fontSize: '14px',
        fontWeight: 600,
        color: volume > 80
          ? 'var(--wg-color-danger, #dc3545)'
          : 'var(--wg-color-text, #111)',
        minWidth: '36px',
        textAlign: 'right',
      }}>
        {volume}%
      </span>
    </div>
  );
};

export const VolumeControl: Story = {
  name: 'Volume Control',
  render: () => <VolumeControlDemo />,
};
