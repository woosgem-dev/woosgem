/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { html, fixture } from './setup';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '../src/Table';
import {
  Table as TableDef,
  TableRow as TableRowDef,
  TableCell as TableCellDef,
  TableHeaderCell as TableHeaderCellDef,
} from '@woosgem-dev/core';

describe('Table (Lit)', () => {
  describe('Core 일치 검증', () => {
    it('TC-L100: 기본 props가 core 결과와 일치한다', async () => {
      const coreAttrs = TableDef.mapPropsToAttrs({});

      const el = await fixture<InstanceType<typeof Table>>(html`
        <wg-table>
          <wg-table-body>
            <wg-table-row>
              <wg-table-cell>Content</wg-table-cell>
            </wg-table-row>
          </wg-table-body>
        </wg-table>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.classList.contains('table')).toBe(true);
    });

    it('TC-L101: variant prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TableDef.mapPropsToAttrs({ variant: 'striped' });

      const el = await fixture<InstanceType<typeof Table>>(html`
        <wg-table variant="striped">
          <wg-table-body>
            <wg-table-row>
              <wg-table-cell>Content</wg-table-cell>
            </wg-table-row>
          </wg-table-body>
        </wg-table>
      `);

      expect(el.getAttribute('data-variant')).toBe(coreAttrs['data-variant']);
      expect(el.getAttribute('data-variant')).toBe('striped');
    });

    it('TC-L102: size prop이 core 결과와 일치한다', async () => {
      const coreAttrs = TableDef.mapPropsToAttrs({ size: 'lg' });

      const el = await fixture<InstanceType<typeof Table>>(html`
        <wg-table size="lg">
          <wg-table-body>
            <wg-table-row>
              <wg-table-cell>Content</wg-table-cell>
            </wg-table-row>
          </wg-table-body>
        </wg-table>
      `);

      expect(el.getAttribute('data-size')).toBe(coreAttrs['data-size']);
      expect(el.getAttribute('data-size')).toBe('lg');
    });
  });

  describe('Web Component 전용', () => {
    it('TC-L300: slot 컨텐츠가 렌더링된다', async () => {
      const el = await fixture<InstanceType<typeof Table>>(html`
        <wg-table>
          <wg-table-body>
            <wg-table-row>
              <wg-table-cell>Table content</wg-table-cell>
            </wg-table-row>
          </wg-table-body>
        </wg-table>
      `);

      expect(el.textContent?.trim()).toContain('Table content');
    });

    it('TC-L301: 프로퍼티 변경 시 속성이 업데이트된다', async () => {
      const el = await fixture<InstanceType<typeof Table>>(html`
        <wg-table variant="default">
          <wg-table-body>
            <wg-table-row>
              <wg-table-cell>Content</wg-table-cell>
            </wg-table-row>
          </wg-table-body>
        </wg-table>
      `);

      expect(el.getAttribute('data-variant')).toBe('default');

      el.variant = 'striped';
      await el.updateComplete;

      expect(el.getAttribute('data-variant')).toBe('striped');
    });
  });
});

describe('TableHead (Lit)', () => {
  it('should render with table-head class', async () => {
    const el = await fixture<InstanceType<typeof TableHead>>(html`
      <wg-table-head>
        <wg-table-row>
          <wg-table-header-cell>Header</wg-table-header-cell>
        </wg-table-row>
      </wg-table-head>
    `);

    expect(el.classList.contains('table-head')).toBe(true);
  });
});

describe('TableBody (Lit)', () => {
  it('should render with table-body class', async () => {
    const el = await fixture<InstanceType<typeof TableBody>>(html`
      <wg-table-body>
        <wg-table-row>
          <wg-table-cell>Body</wg-table-cell>
        </wg-table-row>
      </wg-table-body>
    `);

    expect(el.classList.contains('table-body')).toBe(true);
  });
});

describe('TableRow (Lit)', () => {
  it('should render with table-row class', async () => {
    const el = await fixture<InstanceType<typeof TableRow>>(html`
      <wg-table-row>
        <wg-table-cell>Row content</wg-table-cell>
      </wg-table-row>
    `);

    expect(el.classList.contains('table-row')).toBe(true);
  });

  it('should apply selected prop', async () => {
    const el = await fixture<InstanceType<typeof TableRow>>(html`
      <wg-table-row selected>
        <wg-table-cell>Selected</wg-table-cell>
      </wg-table-row>
    `);

    expect(el.getAttribute('data-state')).toBe('selected');
    expect(el.getAttribute('aria-selected')).toBe('true');
  });

  it('should not have data-state when not selected', async () => {
    const el = await fixture<InstanceType<typeof TableRow>>(html`
      <wg-table-row>
        <wg-table-cell>Normal</wg-table-cell>
      </wg-table-row>
    `);

    expect(el.getAttribute('data-state')).toBeNull();
  });
});

describe('TableCell (Lit)', () => {
  it('should render with table-cell class', async () => {
    const el = await fixture<InstanceType<typeof TableCell>>(html`
      <wg-table-cell>Cell content</wg-table-cell>
    `);

    expect(el.classList.contains('table-cell')).toBe(true);
  });

  it('should apply align prop', async () => {
    const el = await fixture<InstanceType<typeof TableCell>>(html`
      <wg-table-cell align="center">Centered</wg-table-cell>
    `);

    expect(el.getAttribute('data-align')).toBe('center');
  });

  it('should default align to left', async () => {
    const el = await fixture<InstanceType<typeof TableCell>>(html`
      <wg-table-cell>Default</wg-table-cell>
    `);

    expect(el.getAttribute('data-align')).toBe('left');
  });
});

describe('TableHeaderCell (Lit)', () => {
  it('should render with table-header-cell class', async () => {
    const el = await fixture<InstanceType<typeof TableHeaderCell>>(html`
      <wg-table-header-cell>Header</wg-table-header-cell>
    `);

    expect(el.classList.contains('table-header-cell')).toBe(true);
  });

  it('should apply align prop', async () => {
    const el = await fixture<InstanceType<typeof TableHeaderCell>>(html`
      <wg-table-header-cell align="right">Right</wg-table-header-cell>
    `);

    expect(el.getAttribute('data-align')).toBe('right');
  });

  it('should apply sortable prop', async () => {
    const el = await fixture<InstanceType<typeof TableHeaderCell>>(html`
      <wg-table-header-cell sortable>Sortable</wg-table-header-cell>
    `);

    expect(el.getAttribute('data-sortable')).toBe('true');
  });

  it('should have scope="col"', async () => {
    const el = await fixture<InstanceType<typeof TableHeaderCell>>(html`
      <wg-table-header-cell>Scoped</wg-table-header-cell>
    `);

    expect(el.getAttribute('scope')).toBe('col');
  });

  it('should update align on property change', async () => {
    const el = await fixture<InstanceType<typeof TableHeaderCell>>(html`
      <wg-table-header-cell align="left">Header</wg-table-header-cell>
    `);

    expect(el.getAttribute('data-align')).toBe('left');

    el.align = 'center';
    await el.updateComplete;

    expect(el.getAttribute('data-align')).toBe('center');
  });
});
