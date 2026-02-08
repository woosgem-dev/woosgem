import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select, SelectMenu, SelectOption } from '@woosgem/ds-react';
import {
  Select as SelectDef,
  SelectMenu as SelectMenuDef,
  SelectOption as SelectOptionDef,
} from '@woosgem-dev/core';

describe('Select (React)', () => {
  describe('Core ?ºÏπò Í≤ÄÏ¶?, () => {
    it('TC-R100: Í∏∞Î≥∏ propsÍ∞Ä core mapPropsToAttrs Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({});

      render(<Select aria-label="test-select">Choose</Select>);
      const select = screen.getByRole('combobox');

      expect(select).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(select).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(select).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Select variant="filled" aria-label="test">Choose</Select>);
      const select = screen.getByRole('combobox');

      expect(select).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-R102: size prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ size: 'lg' });

      render(<Select size="lg" aria-label="test">Choose</Select>);
      const select = screen.getByRole('combobox');

      expect(select).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R103: disabled prop??core Í≤∞Í≥º?Ä ?ºÏπò?úÎã§', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ disabled: true });

      render(<Select disabled aria-label="test">Choose</Select>);
      const select = screen.getByRole('combobox');

      expect(select).toHaveAttribute('data-state', coreAttrs['data-state']);
    });
  });

  describe('Variant Î≥Ä??, () => {
    it('TC-C110: variant: outline???ÅÏö©?úÎã§', () => {
      render(<Select variant="outline" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C111: variant: filledÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Select variant="filled" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-variant', 'filled');
    });
  });

  describe('Size Î≥Ä??, () => {
    it('TC-C120: size: sm???ÅÏö©?úÎã§', () => {
      render(<Select size="sm" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C121: size: mdÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Select size="md" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C122: size: lgÍ∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Select size="lg" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('?ëÍ∑º??, () => {
    it('TC-A100: role="combobox"Í∞Ä ??ÉÅ ?ÅÏö©?úÎã§', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('TC-A101: aria-expandedÍ∞Ä ?¨Î∞îÎ•¥Í≤å ?ÅÏö©?úÎã§', () => {
      render(<Select open aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true');
    });

    it('TC-A102: aria-haspopup="listbox"Í∞Ä ?ÅÏö©?úÎã§', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-haspopup', 'listbox');
    });
  });

  describe('Í∏∞Î≥∏Í∞?, () => {
    it('TC-C010: variant Í∏∞Î≥∏Í∞íÏ? outline?¥Îã§', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C011: size Í∏∞Î≥∏Í∞íÏ? md?¥Îã§', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'md');
    });
  });

  describe('Ïª§Ïä§?∞Îßà?¥Ï¶à ?§Î≤Ñ?ºÏù¥??, () => {
    it('TC-O100: className Ï∂îÍ? ??Î≥ëÌï©?úÎã§', () => {
      render(<Select className="custom-select" aria-label="test">Choose</Select>);
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass('select');
      expect(select).toHaveClass('custom-select');
    });

    it('TC-O130: Î≥¥Ìò∏ ?çÏÑ± data-variant ?§Î≤Ñ?ºÏù¥??Ï∞®Îã®', () => {
      // @ts-expect-error - Î≥¥Ìò∏ ?çÏÑ± ?§Î≤Ñ?ºÏù¥???úÎèÑ
      render(<Select data-variant="custom" variant="filled" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-variant', 'filled');
    });
  });
});

describe('SelectMenu (React)', () => {
  it('should render with select-menu class', () => {
    render(<SelectMenu open data-testid="menu"><li>opt</li></SelectMenu>);
    const menu = screen.getByRole('listbox');
    expect(menu).toHaveClass('select-menu');
  });

  it('should have role="listbox"', () => {
    render(<SelectMenu open><li>opt</li></SelectMenu>);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('should set data-state="open" when open', () => {
    render(<SelectMenu open><li>opt</li></SelectMenu>);
    expect(screen.getByRole('listbox')).toHaveAttribute('data-state', 'open');
  });
});

describe('SelectOption (React)', () => {
  it('should render with select-option class', () => {
    render(<SelectOption value="1">Option 1</SelectOption>);
    const option = screen.getByRole('option');
    expect(option).toHaveClass('select-option');
  });

  it('should have role="option"', () => {
    render(<SelectOption value="1">Option 1</SelectOption>);
    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  it('should apply selected state', () => {
    render(<SelectOption value="1" selected>Option 1</SelectOption>);
    const option = screen.getByRole('option');
    expect(option).toHaveAttribute('data-state', 'selected');
    expect(option).toHaveAttribute('aria-selected', 'true');
  });

  it('should apply disabled state', () => {
    render(<SelectOption value="1" disabled>Option 1</SelectOption>);
    const option = screen.getByRole('option');
    expect(option).toHaveAttribute('data-state', 'disabled');
  });

  it('should render children', () => {
    render(<SelectOption value="1">Option text</SelectOption>);
    expect(screen.getByText('Option text')).toBeInTheDocument();
  });
});
