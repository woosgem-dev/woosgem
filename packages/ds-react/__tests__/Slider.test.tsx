/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider, SliderTrack, SliderFill, SliderThumb } from '../src/Slider';
import {
  Slider as SliderDef,
  SliderTrack as SliderTrackDef,
  SliderFill as SliderFillDef,
  SliderThumb as SliderThumbDef,
} from '@woosgem-dev/core';

describe('Slider (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({});

      render(<Slider>Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;

      expect(el).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(el).toHaveAttribute('data-color', coreAttrs['data-color']);
      expect(el).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
      expect(el).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ size: 'lg' });

      render(<Slider size="lg">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;

      expect(el).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R102: color prop이 core 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ color: 'danger' });

      render(<Slider color="danger">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;

      expect(el).toHaveAttribute('data-color', coreAttrs['data-color']);
    });

    it('TC-R103: orientation prop이 core 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ orientation: 'vertical' });

      render(<Slider orientation="vertical">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;

      expect(el).toHaveAttribute('data-orientation', coreAttrs['data-orientation']);
    });

    it('TC-R104: disabled prop이 core 결과와 일치한다', () => {
      const coreAttrs = SliderDef.mapPropsToAttrs({ disabled: true });

      render(<Slider disabled>Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;

      expect(el).toHaveAttribute('data-state', coreAttrs['data-state']);
      expect(el).toHaveAttribute('aria-disabled', coreAttrs['aria-disabled']);
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      render(<Slider size="sm">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      render(<Slider size="md">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-size', 'md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      render(<Slider size="lg">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Color 변형', () => {
    it('TC-C130: color: primary가 적용된다', () => {
      render(<Slider color="primary">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C131: color: secondary가 적용된다', () => {
      render(<Slider color="secondary">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-color', 'secondary');
    });

    it('TC-C132: color: success가 적용된다', () => {
      render(<Slider color="success">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-color', 'success');
    });

    it('TC-C133: color: warning이 적용된다', () => {
      render(<Slider color="warning">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-color', 'warning');
    });

    it('TC-C134: color: danger가 적용된다', () => {
      render(<Slider color="danger">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-color', 'danger');
    });
  });

  describe('기본값', () => {
    it('TC-C010: size 기본값이 md이다', () => {
      render(<Slider>Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-size', 'md');
    });

    it('TC-C011: color 기본값이 primary이다', () => {
      render(<Slider>Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-color', 'primary');
    });

    it('TC-C012: orientation 기본값이 horizontal이다', () => {
      render(<Slider>Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('TC-C013: disabled 기본값이 false이다', () => {
      render(<Slider>Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).not.toHaveAttribute('data-state');
      expect(el).not.toHaveAttribute('aria-disabled');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(<Slider>Slider content</Slider>);
      expect(screen.getByText('Slider content')).toBeInTheDocument();
    });

    it('TC-R201: className이 병합된다', () => {
      render(<Slider className="custom-slider">Content</Slider>);
      const el = screen.getByText('Content').closest('.slider')!;
      expect(el).toHaveClass('slider');
      expect(el).toHaveClass('custom-slider');
    });
  });
});

describe('SliderTrack (React)', () => {
  it('should render with slider-track class', () => {
    render(<SliderTrack>Track</SliderTrack>);
    const el = screen.getByText('Track').closest('.slider-track')!;
    expect(el).toHaveClass('slider-track');
  });

  it('should render children', () => {
    render(<SliderTrack>Track content</SliderTrack>);
    expect(screen.getByText('Track content')).toBeInTheDocument();
  });

  it('should merge className', () => {
    render(<SliderTrack className="custom-track">Track</SliderTrack>);
    const el = screen.getByText('Track').closest('.slider-track')!;
    expect(el).toHaveClass('slider-track');
    expect(el).toHaveClass('custom-track');
  });
});

describe('SliderFill (React)', () => {
  it('should render with slider-fill class', () => {
    const { container } = render(<SliderFill />);
    const el = container.querySelector('.slider-fill')!;
    expect(el).toHaveClass('slider-fill');
  });
});

describe('SliderThumb (React)', () => {
  it('should render with slider-thumb class', () => {
    render(<SliderThumb />);
    const el = screen.getByRole('slider');
    expect(el).toHaveClass('slider-thumb');
  });

  it('should have role="slider"', () => {
    render(<SliderThumb />);
    const el = screen.getByRole('slider');
    expect(el).toBeInTheDocument();
  });

  it('should have tabindex="0"', () => {
    render(<SliderThumb />);
    const el = screen.getByRole('slider');
    expect(el).toHaveAttribute('tabindex', '0');
  });
});

describe('Slider Compound Usage (React)', () => {
  it('should render Slider with Track, Fill, and Thumb', () => {
    render(
      <Slider>
        <SliderTrack>
          <SliderFill />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    );

    const slider = document.querySelector('.slider')!;
    const track = document.querySelector('.slider-track')!;
    const fill = document.querySelector('.slider-fill')!;
    const thumb = document.querySelector('.slider-thumb')!;

    expect(slider).toBeInTheDocument();
    expect(track).toBeInTheDocument();
    expect(fill).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
  });
});
