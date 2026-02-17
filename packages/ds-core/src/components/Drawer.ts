import type { ComponentDefinition } from '../types';
import { filterNullish } from '../types';
import { cls } from '../constants';

export const DrawerPositions = ['left', 'right', 'top', 'bottom'] as const;
export type DrawerPosition = (typeof DrawerPositions)[number];

export const DrawerSizes = ['sm', 'md', 'lg', 'full'] as const;
export type DrawerSize = (typeof DrawerSizes)[number];

export interface DrawerStyleProps {
  position?: DrawerPosition;
  size?: DrawerSize;
}

export interface DrawerAttrs {
  class: string;
  'data-position': DrawerPosition;
  'data-size': DrawerSize;
  role: 'dialog';
  'aria-modal': 'true';
}

export const Drawer = {
  displayName: 'Drawer',

  defaultProps: {
    position: 'right',
    size: 'md',
  },

  propTypes: {
    position: DrawerPositions,
    size: DrawerSizes,
  },

  mapPropsToAttrs: (props: DrawerStyleProps): DrawerAttrs => {
    const merged = { ...Drawer.defaultProps, ...filterNullish(props) };
    return {
      class: cls('drawer'),
      'data-position': merged.position,
      'data-size': merged.size,
      role: 'dialog',
      'aria-modal': 'true',
    };
  },

  template: {
    tag: 'div',
    slots: ['default', 'header', 'footer'],
  },
} as const satisfies ComponentDefinition<DrawerStyleProps, DrawerAttrs, 'div'>;
