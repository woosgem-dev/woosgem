import type { ComponentPropsWithoutRef, ComponentType } from 'react';
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

//Slider

export type SliderProps = Prettify<
  SliderStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof SliderStyleProps | 'data-size' | 'data-color' | 'data-orientation' | 'data-state' | 'aria-disabled'
    > & {
      'data-size'?: never;
      'data-color'?: never;
      'data-orientation'?: never;
      'data-state'?: never;
      'aria-disabled'?: never;
    }
>;

export type SliderRef = HTMLDivElement;

export const Slider = createComponent(SliderDef) as ComponentType<SliderProps>;

//SliderTrack

export type SliderTrackProps = Prettify<
  SliderTrackStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof SliderTrackStyleProps>
>;

export type SliderTrackRef = HTMLDivElement;

export const SliderTrack = createComponent(SliderTrackDef) as ComponentType<SliderTrackProps>;

//SliderFill

export type SliderFillProps = Prettify<
  SliderFillStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof SliderFillStyleProps>
>;

export type SliderFillRef = HTMLDivElement;

export const SliderFill = createComponent(SliderFillDef) as ComponentType<SliderFillProps>;

//SliderThumb

export type SliderThumbProps = Prettify<
  SliderThumbStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof SliderThumbStyleProps | 'role' | 'tabindex'> & {
      role?: never;
      tabindex?: never;
    }
>;

export type SliderThumbRef = HTMLDivElement;

export const SliderThumb = createComponent(SliderThumbDef) as ComponentType<SliderThumbProps>;
