import type { DefineComponent } from 'vue';
import {
  Table as TableDef,
  TableHead as TableHeadDef,
  TableBody as TableBodyDef,
  TableRow as TableRowDef,
  TableCell as TableCellDef,
  TableHeaderCell as TableHeaderCellDef,
  type Prettify,
  type TableStyleProps,
  type TableHeadStyleProps,
  type TableBodyStyleProps,
  type TableRowStyleProps,
  type TableCellStyleProps,
  type TableHeaderCellStyleProps,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

// Table

export type TableProps = Prettify<
  TableStyleProps & {
    class?: string;
  }
>;

/**
 * Table component for displaying tabular data.
 *
 * @example
 * ```vue
 * <Table variant="striped" size="md" hoverable>
 *   <TableHead>
 *     <TableRow>
 *       <TableHeaderCell>Name</TableHeaderCell>
 *       <TableHeaderCell align="right">Price</TableHeaderCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Item A</TableCell>
 *       <TableCell align="right">$10</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export const Table = createComponent(TableDef) as DefineComponent<TableProps>;

// TableHead

export type TableHeadProps = Prettify<
  TableHeadStyleProps & {
    class?: string;
  }
>;

/**
 * Table head section.
 */
export const TableHead = createComponent(TableHeadDef) as DefineComponent<TableHeadProps>;

// TableBody

export type TableBodyProps = Prettify<
  TableBodyStyleProps & {
    class?: string;
  }
>;

/**
 * Table body section.
 */
export const TableBody = createComponent(TableBodyDef) as DefineComponent<TableBodyProps>;

// TableRow

export type TableRowProps = Prettify<
  TableRowStyleProps & {
    class?: string;
  }
>;

/**
 * Table row with optional selected state.
 */
export const TableRow = createComponent(TableRowDef) as DefineComponent<TableRowProps>;

// TableCell

export type TableCellProps = Prettify<
  TableCellStyleProps & {
    class?: string;
  }
>;

/**
 * Table data cell with optional alignment.
 */
export const TableCell = createComponent(TableCellDef) as DefineComponent<TableCellProps>;

// TableHeaderCell

export type TableHeaderCellProps = Prettify<
  TableHeaderCellStyleProps & {
    class?: string;
  }
>;

/**
 * Table header cell with optional alignment and sortable indicator.
 */
export const TableHeaderCell = createComponent(TableHeaderCellDef) as DefineComponent<TableHeaderCellProps>;
