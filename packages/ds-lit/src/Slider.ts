import {
  Slider as SliderCore,
  SliderTrack as SliderTrackCore,
  SliderFill as SliderFillCore,
  SliderThumb as SliderThumbCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Slider - Lit Web Component
 *
 * @element wg-slider
 * @slot - Slider content (track, fill, thumb)
 */
export const Slider = createComponent(
  SliderCore,
  'wg-slider',
  {
    props: {
      size: { type: String, default: 'md' },
      color: { type: String, default: 'primary' },
      disabled: { type: Boolean, default: false },
      orientation: { type: String, default: 'horizontal' },
    },
  }
);

customElements.define('wg-slider', Slider);

/**
 * SliderTrack - Lit Web Component
 *
 * @element wg-slider-track
 * @slot - Track content (fill element)
 */
export const SliderTrack = createComponent(
  SliderTrackCore,
  'wg-slider-track',
  {
    props: {},
  }
);

customElements.define('wg-slider-track', SliderTrack);

/**
 * SliderFill - Lit Web Component
 *
 * @element wg-slider-fill
 */
export const SliderFill = createComponent(
  SliderFillCore,
  'wg-slider-fill',
  {
    props: {},
  }
);

customElements.define('wg-slider-fill', SliderFill);

/**
 * SliderThumb - Lit Web Component
 *
 * @element wg-slider-thumb
 */
export const SliderThumb = createComponent(
  SliderThumbCore,
  'wg-slider-thumb',
  {
    props: {},
  }
);

customElements.define('wg-slider-thumb', SliderThumb);

declare global {
  interface HTMLElementTagNameMap {
    'wg-slider': InstanceType<typeof Slider>;
    'wg-slider-track': InstanceType<typeof SliderTrack>;
    'wg-slider-fill': InstanceType<typeof SliderFill>;
    'wg-slider-thumb': InstanceType<typeof SliderThumb>;
  }
}
