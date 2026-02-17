import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select, SelectMenu, SelectOption } from '@woosgem-dev/react';
import {
  Select as SelectDef,
  SelectMenu as SelectMenuDef,
  SelectOption as SelectOptionDef,
} from '@woosgem-dev/core';

describe('Select (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({});

      render(<Select aria-label="test-select">Choose</Select>);
      const select = screen.getByRole('combobox');

      expect(select).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(select).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(select).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Select variant="filled" aria-label="test">Choose</Select>);
      const select = screen.getByRole('combobox');

      expect(select).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-R102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ size: 'lg' });

      render(<Select size="lg" aria-label="test">Choose</Select>);
      const select = screen.getByRole('combobox');

      expect(select).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R103: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SelectDef.mapPropsToAttrs({ disabled: true });

      render(<Select disabled aria-label="test">Choose</Select>);
      const select = screen.getByRole('combobox');

      expect(select).toHaveAttribute('data-state', coreAttrs['data-state']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: outline 적용된다', () => {
      render(<Select variant="outline" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C111: variant: filled가 적용된다', () => {
      render(<Select variant="filled" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-variant', 'filled');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm가 적용된다', () => {
      render(<Select size="sm" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      render(<Select size="md" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      render(<Select size="lg" aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('접근성', () => {
    it('TC-A100: role="combobox"가 적용된다', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('TC-A101: aria-expanded가 바르게 적용된다', () => {
      render(<Select open aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true');
    });

    it('TC-A102: aria-haspopup="listbox"가 적용된다', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('TC-A103: aria-expanded="false"가 기본값으로 적용된다', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false');
    });

    it('TC-A104: disabled 시 aria-disabled가 적용된다', () => {
      render(<Select disabled aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값 outline다', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C011: size 기본값 md다', () => {
      render(<Select aria-label="test">Choose</Select>);
      expect(screen.getByRole('combobox')).toHaveAttribute('data-size', 'md');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: className이 병합된다', () => {
      render(<Select className="custom-select" aria-label="test">Choose</Select>);
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass('select');
      expect(select).toHaveClass('custom-select');
    });

    it('TC-O130: 보호 속성 $1 오버라이드 차단', () => {
      // @ts-expect-error - 보호 속성 오버라이드 시도
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

  it('TC-A200: multiple 시 aria-multiselectable가 적용된다', () => {
    render(<SelectMenu open multiple><li>opt</li></SelectMenu>);
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable', 'true');
  });

  it('TC-A201: multiple이 아닐 때 aria-multiselectable가 적용되지 않는다', () => {
    render(<SelectMenu open><li>opt</li></SelectMenu>);
    expect(screen.getByRole('listbox')).not.toHaveAttribute('aria-multiselectable');
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

  it('TC-A300: aria-selected="false"가 기본값으로 적용된다', () => {
    render(<SelectOption value="1">Option 1</SelectOption>);
    expect(screen.getByRole('option')).toHaveAttribute('aria-selected', 'false');
  });

  it('TC-A301: disabled 시 aria-disabled가 적용된다', () => {
    render(<SelectOption value="1" disabled>Option 1</SelectOption>);
    expect(screen.getByRole('option')).toHaveAttribute('aria-disabled', 'true');
  });
});
