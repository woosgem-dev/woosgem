import {
  Table as TableCore,
  TableHead as TableHeadCore,
  TableBody as TableBodyCore,
  TableRow as TableRowCore,
  TableCell as TableCellCore,
  TableHeaderCell as TableHeaderCellCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Table - Lit Web Component
 *
 * @element wg-table
 * @slot - Table content (thead, tbody)
 *
 * @example
 * ```html
 * <wg-table variant="striped" size="md" hoverable>
 *   <wg-table-head>
 *     <wg-table-row>
 *       <wg-table-header-cell>Name</wg-table-header-cell>
 *     </wg-table-row>
 *   </wg-table-head>
 *   <wg-table-body>
 *     <wg-table-row>
 *       <wg-table-cell>Item A</wg-table-cell>
 *     </wg-table-row>
 *   </wg-table-body>
 * </wg-table>
 * ```
 */
export const Table = createComponent(
  TableCore,
  'wg-table',
  {
    props: {
      variant: { type: String, default: 'default' },
      size: { type: String, default: 'md' },
      hoverable: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-table', Table);

/**
 * TableHead - Lit Web Component
 *
 * @element wg-table-head
 * @slot - Header rows
 */
export const TableHead = createComponent(
  TableHeadCore,
  'wg-table-head',
  {
    props: {},
  }
);

customElements.define('wg-table-head', TableHead);

/**
 * TableBody - Lit Web Component
 *
 * @element wg-table-body
 * @slot - Body rows
 */
export const TableBody = createComponent(
  TableBodyCore,
  'wg-table-body',
  {
    props: {},
  }
);

customElements.define('wg-table-body', TableBody);

/**
 * TableRow - Lit Web Component
 *
 * @element wg-table-row
 * @slot - Row cells
 */
export const TableRow = createComponent(
  TableRowCore,
  'wg-table-row',
  {
    props: {
      selected: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-table-row', TableRow);

/**
 * TableCell - Lit Web Component
 *
 * @element wg-table-cell
 * @slot - Cell content
 */
export const TableCell = createComponent(
  TableCellCore,
  'wg-table-cell',
  {
    props: {
      align: { type: String, default: 'left' },
    },
  }
);

customElements.define('wg-table-cell', TableCell);

/**
 * TableHeaderCell - Lit Web Component
 *
 * @element wg-table-header-cell
 * @slot - Header cell content
 */
export const TableHeaderCell = createComponent(
  TableHeaderCellCore,
  'wg-table-header-cell',
  {
    props: {
      align: { type: String, default: 'left' },
      sortable: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-table-header-cell', TableHeaderCell);

declare global {
  interface HTMLElementTagNameMap {
    'wg-table': InstanceType<typeof Table>;
    'wg-table-head': InstanceType<typeof TableHead>;
    'wg-table-body': InstanceType<typeof TableBody>;
    'wg-table-row': InstanceType<typeof TableRow>;
    'wg-table-cell': InstanceType<typeof TableCell>;
    'wg-table-header-cell': InstanceType<typeof TableHeaderCell>;
  }
}
