import type { ComponentDefinition } from '../types';
import { filterNullish } from '../types';
import { cls } from '../constants';

export const AvatarGroupSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type AvatarGroupSize = (typeof AvatarGroupSizes)[number];

export const AvatarGroupSpacings = ['tight', 'normal', 'loose'] as const;
export type AvatarGroupSpacing = (typeof AvatarGroupSpacings)[number];

export interface AvatarGroupStyleProps {
  size?: AvatarGroupSize;
  max?: number;
  spacing?: AvatarGroupSpacing;
}

export interface AvatarGroupAttrs {
  class: string;
  'data-size': AvatarGroupSize;
  'data-spacing': AvatarGroupSpacing;
  role: 'group';
  'aria-label': string;
}

export const AvatarGroup = {
  displayName: 'AvatarGroup',
  defaultProps: {
    size: 'md',
    max: 5,
    spacing: 'tight',
  },
  propTypes: {
    size: AvatarGroupSizes,
    spacing: AvatarGroupSpacings,
  },
  mapPropsToAttrs: (props: AvatarGroupStyleProps): AvatarGroupAttrs => {
    const merged = { ...AvatarGroup.defaultProps, ...filterNullish(props) };
    return {
      class: cls('avatar-group'),
      'data-size': merged.size,
      'data-spacing': merged.spacing,
      role: 'group',
      'aria-label': 'Avatar group',
    };
  },
  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<AvatarGroupStyleProps, AvatarGroupAttrs, 'div'>;
