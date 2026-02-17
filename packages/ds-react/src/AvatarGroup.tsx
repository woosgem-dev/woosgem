import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { AvatarGroup as AvatarGroupDef, type AvatarGroupStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type AvatarGroupProps = Prettify<
  AvatarGroupStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof AvatarGroupStyleProps | 'data-size' | 'data-spacing' | 'role' | 'aria-label'
    > & {
      'data-size'?: never;
      'data-spacing'?: never;
      role?: never;
      'aria-label'?: string;
    }
>;

export type AvatarGroupRef = HTMLDivElement;

const BaseAvatarGroup = createComponent(AvatarGroupDef);

export const AvatarGroup = BaseAvatarGroup as ComponentType<AvatarGroupProps>;
