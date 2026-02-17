import type { DefineComponent } from 'vue';
import {
  Slider as SliderDef,
  SliderTrack as SliderTrackDef,
  SliderFill as SliderFillDef,
  SliderThumb as SliderThumbDef,
  type SliderStyleProps,
  type SliderTrackStyleProps,
  type SliderFillStyleProps,
  type SliderThumbStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

// ============================================
// Slider
// ============================================

export type SliderProps = Prettify<SliderStyleProps & { class?: string }>;

export const Slider = createComponent(SliderDef) as DefineComponent<SliderProps>;

// ============================================
// SliderTrack
// ============================================

export type SliderTrackProps = Prettify<SliderTrackStyleProps & { class?: string }>;

export const SliderTrack = createComponent(SliderTrackDef) as DefineComponent<SliderTrackProps>;

// ============================================
// SliderFill
// ============================================

export type SliderFillProps = Prettify<SliderFillStyleProps & { class?: string }>;

export const SliderFill = createComponent(SliderFillDef) as DefineComponent<SliderFillProps>;

// ============================================
// SliderThumb
// ============================================

export type SliderThumbProps = Prettify<SliderThumbStyleProps & { class?: string }>;

export const SliderThumb = createComponent(SliderThumbDef) as DefineComponent<SliderThumbProps>;
