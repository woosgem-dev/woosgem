/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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

describe('Table (React)', () => {
  describe('Core 일치 검증', () => {
    it('TC-R100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = TableDef.mapPropsToAttrs({});

      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;

      expect(table).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(table).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(table).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = TableDef.mapPropsToAttrs({ variant: 'striped' });

      render(
        <Table variant="striped">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;

      expect(table).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-R102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = TableDef.mapPropsToAttrs({ size: 'lg' });

      render(
        <Table size="lg">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;

      expect(table).toHaveAttribute('data-size', coreAttrs['data-size']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: default가 적용된다', () => {
      render(
        <Table variant="default">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveAttribute('data-variant', 'default');
    });

    it('TC-C111: variant: striped가 적용된다', () => {
      render(
        <Table variant="striped">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveAttribute('data-variant', 'striped');
    });

    it('TC-C112: variant: bordered가 적용된다', () => {
      render(
        <Table variant="bordered">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveAttribute('data-variant', 'bordered');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      render(
        <Table size="sm">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      render(
        <Table size="md">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveAttribute('data-size', 'md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      render(
        <Table size="lg">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 default다', () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveAttribute('data-variant', 'default');
    });

    it('TC-C011: size 기본값이 md다', () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveAttribute('data-size', 'md');
    });
  });

  describe('React 전용 props', () => {
    it('TC-R200: children이 렌더링된다', () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cell content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      expect(screen.getByText('Cell content')).toBeInTheDocument();
    });

    it('TC-R201: className이 병합된다', () => {
      render(
        <Table className="custom-table">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const table = document.querySelector('.table')!;
      expect(table).toHaveClass('table');
      expect(table).toHaveClass('custom-table');
    });
  });
});

describe('TableHead (React)', () => {
  it('should render with table-head class', () => {
    render(
      <table>
        <TableHead>
          <tr>
            <th>Header</th>
          </tr>
        </TableHead>
      </table>
    );
    const thead = document.querySelector('.table-head')!;
    expect(thead).toHaveClass('table-head');
  });

  it('should render children', () => {
    render(
      <table>
        <TableHead>
          <tr>
            <th>My Header</th>
          </tr>
        </TableHead>
      </table>
    );
    expect(screen.getByText('My Header')).toBeInTheDocument();
  });
});

describe('TableBody (React)', () => {
  it('should render with table-body class', () => {
    render(
      <table>
        <TableBody>
          <tr>
            <td>Body content</td>
          </tr>
        </TableBody>
      </table>
    );
    const tbody = document.querySelector('.table-body')!;
    expect(tbody).toHaveClass('table-body');
  });

  it('should render children', () => {
    render(
      <table>
        <TableBody>
          <tr>
            <td>Body text</td>
          </tr>
        </TableBody>
      </table>
    );
    expect(screen.getByText('Body text')).toBeInTheDocument();
  });
});

describe('TableRow (React)', () => {
  it('should render with table-row class', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Row content</td>
          </TableRow>
        </tbody>
      </table>
    );
    const row = document.querySelector('.table-row')!;
    expect(row).toHaveClass('table-row');
  });

  it('should render children', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Row text</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText('Row text')).toBeInTheDocument();
  });

  it('should apply selected prop', () => {
    const coreAttrs = TableRowDef.mapPropsToAttrs({ selected: true });

    render(
      <table>
        <tbody>
          <TableRow selected>
            <td>Selected row</td>
          </TableRow>
        </tbody>
      </table>
    );
    const row = document.querySelector('.table-row')!;
    expect(row).toHaveAttribute('data-state', coreAttrs['data-state']);
    expect(row).toHaveAttribute('aria-selected', coreAttrs['aria-selected']);
  });

  it('should not have data-state when not selected', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Normal row</td>
          </TableRow>
        </tbody>
      </table>
    );
    const row = document.querySelector('.table-row')!;
    expect(row).not.toHaveAttribute('data-state');
    expect(row).not.toHaveAttribute('aria-selected');
  });
});

describe('TableCell (React)', () => {
  it('should render with table-cell class', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const cell = document.querySelector('.table-cell')!;
    expect(cell).toHaveClass('table-cell');
  });

  it('should render children', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell content</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText('Cell content')).toBeInTheDocument();
  });

  it('should apply align prop', () => {
    const coreAttrs = TableCellDef.mapPropsToAttrs({ align: 'center' });

    render(
      <table>
        <tbody>
          <tr>
            <TableCell align="center">Centered</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const cell = document.querySelector('.table-cell')!;
    expect(cell).toHaveAttribute('data-align', coreAttrs['data-align']);
  });

  it('should default align to left', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Default</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const cell = document.querySelector('.table-cell')!;
    expect(cell).toHaveAttribute('data-align', 'left');
  });
});

describe('TableHeaderCell (React)', () => {
  it('should render with table-header-cell class', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell>Header</TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    const cell = document.querySelector('.table-header-cell')!;
    expect(cell).toHaveClass('table-header-cell');
  });

  it('should render children', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell>Header text</TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText('Header text')).toBeInTheDocument();
  });

  it('should apply align prop', () => {
    const coreAttrs = TableHeaderCellDef.mapPropsToAttrs({ align: 'right' });

    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell align="right">Right</TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    const cell = document.querySelector('.table-header-cell')!;
    expect(cell).toHaveAttribute('data-align', coreAttrs['data-align']);
  });

  it('should apply sortable prop', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell sortable>Sortable</TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    const cell = document.querySelector('.table-header-cell')!;
    expect(cell).toHaveAttribute('data-sortable', 'true');
  });

  it('should have scope="col"', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell>Scoped</TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    const cell = document.querySelector('.table-header-cell')!;
    expect(cell).toHaveAttribute('scope', 'col');
  });
});

describe('Table Compound Usage (React)', () => {
  it('should render Table with Head, Body, Row, and Cells', () => {
    render(
      <Table variant="striped" hoverable>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell align="right">Price</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Item A</TableCell>
            <TableCell align="right">$10</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell>Item B</TableCell>
            <TableCell align="right">$20</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Item A')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('Item B')).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();

    const table = document.querySelector('.table')!;
    expect(table).toHaveAttribute('data-variant', 'striped');
    expect(table).toHaveAttribute('data-hoverable', 'true');
  });
});
