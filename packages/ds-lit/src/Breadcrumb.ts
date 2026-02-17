import {
  Breadcrumb as BreadcrumbCore,
  BreadcrumbItem as BreadcrumbItemCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export const Breadcrumb = createComponent(
  BreadcrumbCore,
  'wg-breadcrumb',
  {
    props: {
      separator: { type: String, default: '/' },
      size: { type: String, default: 'md' },
    },
  }
);

customElements.define('wg-breadcrumb', Breadcrumb);

export const BreadcrumbItem = createComponent(
  BreadcrumbItemCore,
  'wg-breadcrumb-item',
  {
    props: {
      active: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-breadcrumb-item', BreadcrumbItem);

declare global {
  interface HTMLElementTagNameMap {
    'wg-breadcrumb': InstanceType<typeof Breadcrumb>;
    'wg-breadcrumb-item': InstanceType<typeof BreadcrumbItem>;
  }
}
