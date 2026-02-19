import type { ComponentPropsWithoutRef, ComponentType } from 'react';
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

//Table

export type TableProps = Prettify<
  TableStyleProps &
    Omit<
      ComponentPropsWithoutRef<'table'>,
      keyof TableStyleProps | 'data-variant' | 'data-size' | 'data-hoverable'
    > & {
      'data-variant'?: never;
      'data-size'?: never;
      'data-hoverable'?: never;
    }
>;

export type TableRef = HTMLTableElement;

/**
 * Table component for displaying tabular data.
 *
 * @example
 * ```tsx
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
export const Table = createComponent(TableDef) as ComponentType<TableProps>;

//TableHead

export type TableHeadProps = Prettify<TableHeadStyleProps & ComponentPropsWithoutRef<'thead'>>;

export type TableHeadRef = HTMLTableSectionElement;

export const TableHead = createComponent(TableHeadDef) as ComponentType<TableHeadProps>;

//TableBody

export type TableBodyProps = Prettify<TableBodyStyleProps & ComponentPropsWithoutRef<'tbody'>>;

export type TableBodyRef = HTMLTableSectionElement;

export const TableBody = createComponent(TableBodyDef) as ComponentType<TableBodyProps>;

//TableRow

export type TableRowProps = Prettify<
  TableRowStyleProps &
    Omit<
      ComponentPropsWithoutRef<'tr'>,
      keyof TableRowStyleProps | 'data-state' | 'aria-selected'
    > & {
      'data-state'?: never;
      'aria-selected'?: never;
    }
>;

export type TableRowRef = HTMLTableRowElement;

export const TableRow = createComponent(TableRowDef) as ComponentType<TableRowProps>;

//TableCell

export type TableCellProps = Prettify<
  TableCellStyleProps &
    Omit<ComponentPropsWithoutRef<'td'>, keyof TableCellStyleProps | 'data-align'> & {
      'data-align'?: never;
    }
>;

export type TableCellRef = HTMLTableCellElement;

export const TableCell = createComponent(TableCellDef) as ComponentType<TableCellProps>;

//TableHeaderCell

export type TableHeaderCellProps = Prettify<
  TableHeaderCellStyleProps &
    Omit<
      ComponentPropsWithoutRef<'th'>,
      keyof TableHeaderCellStyleProps | 'data-align' | 'data-sortable' | 'scope'
    > & {
      'data-align'?: never;
      'data-sortable'?: never;
      scope?: never;
    }
>;

export type TableHeaderCellRef = HTMLTableCellElement;

export const TableHeaderCell = createComponent(TableHeaderCellDef) as ComponentType<TableHeaderCellProps>;
