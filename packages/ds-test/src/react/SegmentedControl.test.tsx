import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SegmentedControl, SegmentedControlItem } from '@woosgem/ds-react';
import {
  SegmentedControl as SegmentedControlDef,
  SegmentedControlItem as SegmentedControlItemDef,
} from '@woosgem-dev/core';

describe('SegmentedControl', () => {
  describe('core ?ºÏπò Í≤ÄÏ¶?, () => {
    it('TC-R100: Í∏∞Î≥∏ propsÍ∞Ä core mapPropsToAttrs Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({});

      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(container).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ size: 'lg' });

      render(
        <SegmentedControl size="lg">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(container).toHaveAttribute('data-size', 'lg');
    });

    it('TC-R102: fullWidth prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ fullWidth: true });

      render(
        <SegmentedControl fullWidth>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-full-width', String(coreAttrs['data-full-width']));
    });

    it('TC-R103: disabled prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs({ disabled: true });

      render(
        <SegmentedControl disabled>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-disabled', String(coreAttrs['data-disabled']));
    });

    it('TC-R104: role????ÉÅ group?¥Îã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('role', 'group');
    });

    it('TC-R105: Î≥µÌï© propsÍ∞Ä core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const props = {
        size: 'sm' as const,
        fullWidth: true,
        disabled: true,
      };
      const coreAttrs = SegmentedControlDef.mapPropsToAttrs(props);

      render(
        <SegmentedControl size="sm" fullWidth disabled>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(container).toHaveAttribute('data-full-width', 'true');
      expect(container).toHaveAttribute('data-disabled', 'true');
    });
  });

  describe('React ?ÑÏö© props', () => {
    it('TC-R200: children???åÎçîÎßÅÎêú??, () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Option 1</SegmentedControl.Item>
          <SegmentedControl.Item>Option 2</SegmentedControl.Item>
        </SegmentedControl>
      );

      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('TC-R201: className??Î≥ëÌï©?úÎã§', () => {
      render(
        <SegmentedControl className="custom">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveClass('segmented-control');
      expect(container).toHaveClass('custom');
    });

    it('TC-R202: aria-label???ÅÏö©?úÎã§', () => {
      render(
        <SegmentedControl aria-label="Options">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('aria-label', 'Options');
    });
  });

  describe('Ïª§Ïä§?∞Îßà?¥Ï¶à ?§Î≤Ñ?ºÏù¥??, () => {
    it('TC-O100: className Ï∂îÍ? ??Î≥ëÌï©?úÎã§', () => {
      render(
        <SegmentedControl className="custom">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveClass('segmented-control');
      expect(container).toHaveClass('custom');
    });

    it('TC-O110: style ?∏Îùº???ÅÏö©', () => {
      render(
        <SegmentedControl style={{ gap: 8 }}>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveStyle({ gap: '8px' });
    });

    it('TC-O120: data-testid Ï∂îÍ? ?àÏö©', () => {
      render(
        <SegmentedControl data-testid="tabs">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      expect(screen.getByTestId('tabs')).toBeInTheDocument();
    });

    it('TC-O140: aria-label ?àÏö©', () => {
      render(
        <SegmentedControl aria-label="Tabs">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('aria-label', 'Tabs');
    });

    it('TC-O160: id ?çÏÑ± ?ÑÎã¨ ?àÏö©', () => {
      render(
        <SegmentedControl id="my-tabs">
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('id', 'my-tabs');
    });

    it('TC-O130: Î≥¥Ìò∏ ?çÏÑ± data-size ?§Î≤Ñ?ºÏù¥??Ï∞®Îã®', () => {
      // @ts-expect-error - Î≥¥Ìò∏ ?çÏÑ± ?§Î≤Ñ?ºÏù¥???úÎèÑ
      render(<SegmentedControl data-size="custom" size="lg"><SegmentedControl.Item>Item</SegmentedControl.Item></SegmentedControl>);
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', 'lg');
    });

    it('TC-O131: Î≥¥Ìò∏ ?çÏÑ± data-full-width ?§Î≤Ñ?ºÏù¥??Ï∞®Îã®', () => {
      // @ts-expect-error - Î≥¥Ìò∏ ?çÏÑ± ?§Î≤Ñ?ºÏù¥???úÎèÑ
      render(<SegmentedControl data-full-width="false" fullWidth><SegmentedControl.Item>Item</SegmentedControl.Item></SegmentedControl>);
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-full-width', 'true');
    });

    it('TC-O132: Î≥¥Ìò∏ ?çÏÑ± data-disabled ?§Î≤Ñ?ºÏù¥??Ï∞®Îã®', () => {
      // @ts-expect-error - Î≥¥Ìò∏ ?çÏÑ± ?§Î≤Ñ?ºÏù¥???úÎèÑ
      render(<SegmentedControl data-disabled="false" disabled><SegmentedControl.Item>Item</SegmentedControl.Item></SegmentedControl>);
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-disabled', 'true');
    });

    it('TC-O133: Î≥¥Ìò∏ ?çÏÑ± role ?§Î≤Ñ?ºÏù¥??Ï∞®Îã®', () => {
      // @ts-expect-error - Î≥¥Ìò∏ ?çÏÑ± ?§Î≤Ñ?ºÏù¥???úÎèÑ
      render(<SegmentedControl role="tablist"><SegmentedControl.Item>Item</SegmentedControl.Item></SegmentedControl>);
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('role', 'group');
    });
  });

  describe('Í∏∞Î≥∏Í∞?, () => {
    it('TC-C010: size Í∏∞Î≥∏Í∞íÏ? md?¥Îã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: fullWidth Í∏∞Î≥∏Í∞íÏ? false?¥Îã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).not.toHaveAttribute('data-full-width');
    });

    it('TC-C012: disabled Í∏∞Î≥∏Í∞íÏ? false?¥Îã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const container = screen.getByRole('group');

      expect(container).not.toHaveAttribute('data-disabled');
    });
  });
});

describe('SegmentedControlItem', () => {
  describe('core ?ºÏπò Í≤ÄÏ¶?, () => {
    it('TC-RI100: Í∏∞Î≥∏ propsÍ∞Ä core mapPropsToAttrs Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({});

      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveClass(coreAttrs.class);
    });

    it('TC-RI101: selected prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ selected: true });

      render(
        <SegmentedControl>
          <SegmentedControl.Item selected>Selected</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'selected');
      expect(item).toHaveAttribute('aria-selected', 'true');
    });

    it('TC-RI102: disabled prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ disabled: true });

      render(
        <SegmentedControl>
          <SegmentedControl.Item disabled>Disabled</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(item).toHaveAttribute('data-state', 'disabled');
      expect(item).toBeDisabled();
    });

    it('TC-RI103: selected + disabled ??selected ?∞ÏÑ†', () => {
      const coreAttrs = SegmentedControlItemDef.mapPropsToAttrs({ selected: true, disabled: true });

      render(
        <SegmentedControl>
          <SegmentedControl.Item selected disabled>
            Both
          </SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(coreAttrs['data-state']).toBe('selected');
      expect(item).toHaveAttribute('data-state', 'selected');
    });
  });

  describe('?¥Î≤§???∏Îì§??, () => {
    it('TC-RI200: onClick ?∏Îì§?¨Í? ?∏Ï∂ú?úÎã§', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <SegmentedControl>
          <SegmentedControl.Item onClick={handleClick}>Click me</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      await user.click(item);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('TC-RI201: disabled ?ÅÌÉú?êÏÑú onClick???∏Ï∂ú?òÏ? ?äÎäî??, async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <SegmentedControl>
          <SegmentedControl.Item onClick={handleClick} disabled>
            Disabled
          </SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      await user.click(item);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('TC-RI202: selected ?ÅÌÉú?êÏÑú onClick???∏Ï∂ú?úÎã§', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <SegmentedControl>
          <SegmentedControl.Item onClick={handleClick} selected>
            Selected
          </SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      await user.click(item);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('React ?ÑÏö© props', () => {
    it('TC-RI300: children???åÎçîÎßÅÎêú??, () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Text</SegmentedControl.Item>
        </SegmentedControl>
      );

      expect(screen.getByRole('button')).toHaveTextContent('Text');
    });

    it('TC-RI301: className??Î≥ëÌï©?úÎã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item className="custom">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveClass('segmented-control-item');
      expect(item).toHaveClass('custom');
    });

    it('TC-RI302: type prop???ÅÏö©?úÎã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item type="submit">Submit</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('type', 'submit');
    });

    it('TC-RI303: type??Î™ÖÏãú?òÏ? ?äÏúºÎ©??çÏÑ±???ÜÎã§', () => {
      // SegmentedControlItem?Ä Í∏∞Î≥∏ type???§Ï†ï?òÏ? ?äÏùå
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).not.toHaveAttribute('type');
    });

    it('TC-RI303b: type="button" Î™ÖÏãú ??button?ºÎ°ú ?åÎçîÎß?, () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item type="button">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('type', 'button');
    });

    it('TC-RI304: aria-label???ÅÏö©?úÎã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item aria-label="Select">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('aria-label', 'Select');
    });
  });

  describe('Ïª§Ïä§?∞Îßà?¥Ï¶à ?§Î≤Ñ?ºÏù¥??, () => {
    it('TC-O101: SegmentedControlItem className Ï∂îÍ? ??Î≥ëÌï©?úÎã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item className="custom">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveClass('segmented-control-item');
      expect(item).toHaveClass('custom');
    });

    it('TC-O121: data-analytics Ï∂îÍ? ?àÏö©', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item data-analytics="click">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-analytics', 'click');
    });

    it('TC-O141: aria-label ?àÏö© (Item)', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item aria-label="Option">Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('aria-label', 'Option');
    });

    it('TC-O134: Î≥¥Ìò∏ ?çÏÑ± data-state ?§Î≤Ñ?ºÏù¥??Ï∞®Îã® (Item)', () => {
      // @ts-expect-error - Î≥¥Ìò∏ ?çÏÑ± ?§Î≤Ñ?ºÏù¥???úÎèÑ
      render(<SegmentedControl><SegmentedControl.Item data-state="custom" selected>Item</SegmentedControl.Item></SegmentedControl>);
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('data-state', 'selected');
    });

    it('TC-O135: Î≥¥Ìò∏ ?çÏÑ± aria-selected ?§Î≤Ñ?ºÏù¥??Ï∞®Îã® (Item)', () => {
      // @ts-expect-error - Î≥¥Ìò∏ ?çÏÑ± ?§Î≤Ñ?ºÏù¥???úÎèÑ
      render(<SegmentedControl><SegmentedControl.Item aria-selected="false" selected>Item</SegmentedControl.Item></SegmentedControl>);
      const item = screen.getByRole('button');

      expect(item).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Í∏∞Î≥∏Í∞?, () => {
    it('TC-I010: selected Í∏∞Î≥∏Í∞íÏ? false?¥Îã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).not.toHaveAttribute('data-state');
      expect(item).not.toHaveAttribute('aria-selected');
    });

    it('TC-I011: disabled Í∏∞Î≥∏Í∞íÏ? false?¥Îã§', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Item>Item</SegmentedControl.Item>
        </SegmentedControl>
      );
      const item = screen.getByRole('button');

      expect(item).not.toBeDisabled();
    });
  });
});

describe('SegmentedControl + Item ?µÌï©', () => {
  it('?®Ïùº ?†ÌÉù ?®ÌÑ¥: ?òÎÇò???ÑÏù¥?úÎßå selected', () => {
    render(
      <SegmentedControl>
        <SegmentedControl.Item>Option 1</SegmentedControl.Item>
        <SegmentedControl.Item selected>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>
      </SegmentedControl>
    );

    const items = screen.getAllByRole('button');
    expect(items[0]).not.toHaveAttribute('data-state', 'selected');
    expect(items[1]).toHaveAttribute('data-state', 'selected');
    expect(items[2]).not.toHaveAttribute('data-state', 'selected');
  });

  it('Í∞úÎ≥Ñ Item disabled', () => {
    render(
      <SegmentedControl>
        <SegmentedControl.Item>Option 1</SegmentedControl.Item>
        <SegmentedControl.Item disabled>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>
      </SegmentedControl>
    );

    const items = screen.getAllByRole('button');
    expect(items[0]).not.toBeDisabled();
    expect(items[1]).toBeDisabled();
    expect(items[2]).not.toBeDisabled();
  });

  it('SegmentedControlItem??ÏßÅÏ†ë import?¥ÏÑú ?¨Ïö©?????àÎã§', () => {
    render(
      <SegmentedControl>
        <SegmentedControlItem>Direct Import</SegmentedControlItem>
      </SegmentedControl>
    );

    expect(screen.getByText('Direct Import')).toBeInTheDocument();
  });
});
