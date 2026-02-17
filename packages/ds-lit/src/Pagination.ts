import {
  Pagination as PaginationCore,
  PaginationItem as PaginationItemCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export const Pagination = createComponent(
  PaginationCore,
  'wg-pagination',
  {
    props: {
      variant: { type: String, default: 'outline' },
      size: { type: String, default: 'md' },
      shape: { type: String, default: 'rounded' },
    },
  }
);

customElements.define('wg-pagination', Pagination);

export const PaginationItem = createComponent(
  PaginationItemCore,
  'wg-pagination-item',
  {
    props: {
      active: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-pagination-item', PaginationItem);

declare global {
  interface HTMLElementTagNameMap {
    'wg-pagination': InstanceType<typeof Pagination>;
    'wg-pagination-item': InstanceType<typeof PaginationItem>;
  }
}
