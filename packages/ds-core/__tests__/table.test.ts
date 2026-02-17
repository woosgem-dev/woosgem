import { describe, it, expect } from 'vitest';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableVariants,
  TableSizes,
  TableAligns,
} from '../src/components/Table';

describe('Table Core', () => {
  describe('displayName', () => {
    it('should have displayName "Table"', () => {
      expect(Table.displayName).toBe('Table');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Table.defaultProps).toEqual({
        variant: 'default',
        size: 'md',
        hoverable: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct variant options', () => {
      expect(TableVariants).toEqual(['default', 'striped', 'bordered']);
    });

    it('should have correct size options', () => {
      expect(TableSizes).toEqual(['sm', 'md', 'lg']);
    });

    it('should have correct align options', () => {
      expect(TableAligns).toEqual(['left', 'center', 'right']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Table.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'table',
        'data-variant': 'default',
        'data-size': 'md',
        'data-hoverable': undefined,
      });
    });

    it('should apply variant prop', () => {
      for (const variant of TableVariants) {
        const attrs = Table.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should apply size prop', () => {
      for (const size of TableSizes) {
        const attrs = Table.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply hoverable prop', () => {
      const attrs = Table.mapPropsToAttrs({ hoverable: true });
      expect(attrs['data-hoverable']).toBe(true);
    });

    it('should not include data-hoverable when false', () => {
      const attrs = Table.mapPropsToAttrs({ hoverable: false });
      expect(attrs['data-hoverable']).toBeUndefined();
    });

    it('should use default values for undefined props', () => {
      const attrs = Table.mapPropsToAttrs({ variant: undefined, size: undefined });
      expect(attrs['data-variant']).toBe('default');
      expect(attrs['data-size']).toBe('md');
    });

    it('should combine multiple props', () => {
      const attrs = Table.mapPropsToAttrs({
        variant: 'striped',
        size: 'lg',
        hoverable: true,
      });
      expect(attrs).toEqual({
        class: 'table',
        'data-variant': 'striped',
        'data-size': 'lg',
        'data-hoverable': true,
      });
    });
  });

  describe('template', () => {
    it('should use table tag', () => {
      expect(Table.template.tag).toBe('table');
    });

    it('should have default slot', () => {
      expect(Table.template.slots).toEqual(['default']);
    });
  });
});

describe('TableHead Core', () => {
  it('should have displayName "TableHead"', () => {
    expect(TableHead.displayName).toBe('TableHead');
  });

  it('should return correct attrs', () => {
    expect(TableHead.mapPropsToAttrs()).toEqual({ class: 'table-head' });
  });

  it('should use thead tag', () => {
    expect(TableHead.template.tag).toBe('thead');
  });
});

describe('TableBody Core', () => {
  it('should have displayName "TableBody"', () => {
    expect(TableBody.displayName).toBe('TableBody');
  });

  it('should return correct attrs', () => {
    expect(TableBody.mapPropsToAttrs()).toEqual({ class: 'table-body' });
  });

  it('should use tbody tag', () => {
    expect(TableBody.template.tag).toBe('tbody');
  });
});

describe('TableRow Core', () => {
  it('should have displayName "TableRow"', () => {
    expect(TableRow.displayName).toBe('TableRow');
  });

  it('should have correct default props', () => {
    expect(TableRow.defaultProps).toEqual({ selected: false });
  });

  it('should return default attrs', () => {
    const attrs = TableRow.mapPropsToAttrs({});
    expect(attrs).toEqual({
      class: 'table-row',
      'data-state': undefined,
      'aria-selected': undefined,
    });
  });

  it('should apply selected prop', () => {
    const attrs = TableRow.mapPropsToAttrs({ selected: true });
    expect(attrs['data-state']).toBe('selected');
    expect(attrs['aria-selected']).toBe('true');
  });

  it('should not include data-state when not selected', () => {
    const attrs = TableRow.mapPropsToAttrs({ selected: false });
    expect(attrs['data-state']).toBeUndefined();
    expect(attrs['aria-selected']).toBeUndefined();
  });

  it('should use tr tag', () => {
    expect(TableRow.template.tag).toBe('tr');
  });
});

describe('TableCell Core', () => {
  it('should have displayName "TableCell"', () => {
    expect(TableCell.displayName).toBe('TableCell');
  });

  it('should have correct default props', () => {
    expect(TableCell.defaultProps).toEqual({ align: 'left' });
  });

  it('should return default attrs', () => {
    const attrs = TableCell.mapPropsToAttrs({});
    expect(attrs).toEqual({ class: 'table-cell', 'data-align': 'left' });
  });

  it('should apply align prop', () => {
    for (const align of TableAligns) {
      expect(TableCell.mapPropsToAttrs({ align })['data-align']).toBe(align);
    }
  });

  it('should use td tag', () => {
    expect(TableCell.template.tag).toBe('td');
  });
});

describe('TableHeaderCell Core', () => {
  it('should have displayName "TableHeaderCell"', () => {
    expect(TableHeaderCell.displayName).toBe('TableHeaderCell');
  });

  it('should have correct default props', () => {
    expect(TableHeaderCell.defaultProps).toEqual({ align: 'left', sortable: false });
  });

  it('should return default attrs', () => {
    const attrs = TableHeaderCell.mapPropsToAttrs({});
    expect(attrs).toEqual({
      class: 'table-header-cell',
      'data-align': 'left',
      'data-sortable': undefined,
      scope: 'col',
    });
  });

  it('should apply align prop', () => {
    for (const align of TableAligns) {
      expect(TableHeaderCell.mapPropsToAttrs({ align })['data-align']).toBe(align);
    }
  });

  it('should apply sortable prop', () => {
    const attrs = TableHeaderCell.mapPropsToAttrs({ sortable: true });
    expect(attrs['data-sortable']).toBe(true);
  });

  it('should not include data-sortable when false', () => {
    const attrs = TableHeaderCell.mapPropsToAttrs({ sortable: false });
    expect(attrs['data-sortable']).toBeUndefined();
  });

  it('should always have scope="col"', () => {
    expect(TableHeaderCell.mapPropsToAttrs({}).scope).toBe('col');
    expect(TableHeaderCell.mapPropsToAttrs({ align: 'center' }).scope).toBe('col');
  });

  it('should use th tag', () => {
    expect(TableHeaderCell.template.tag).toBe('th');
  });
});
