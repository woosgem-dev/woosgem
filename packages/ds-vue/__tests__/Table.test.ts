import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
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

describe('Table (Vue)', () => {
  describe('Core 일치 검증', () => {
    it('TC-V100: 기본 props가 core mapPropsToAttrs 결과와 일치한다', () => {
      const coreAttrs = TableDef.mapPropsToAttrs({});
      const wrapper = mount(Table, { slots: { default: '<tbody><tr><td>Content</td></tr></tbody>' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
      expect(wrapper.classes()).toContain(coreAttrs.class);
    });

    it('TC-V101: variant prop이 core 결과와 일치한다', () => {
      const coreAttrs = TableDef.mapPropsToAttrs({ variant: 'striped' });
      const wrapper = mount(Table, { props: { variant: 'striped' } });

      expect(wrapper.attributes('data-variant')).toBe(coreAttrs['data-variant']);
      expect(wrapper.attributes('data-variant')).toBe('striped');
    });

    it('TC-V102: size prop이 core 결과와 일치한다', () => {
      const coreAttrs = TableDef.mapPropsToAttrs({ size: 'lg' });
      const wrapper = mount(Table, { props: { size: 'lg' } });

      expect(wrapper.attributes('data-size')).toBe(coreAttrs['data-size']);
    });
  });

  describe('Variant 변형', () => {
    it('TC-C110: variant: default가 적용된다', () => {
      const wrapper = mount(Table, { props: { variant: 'default' } });
      expect(wrapper.attributes('data-variant')).toBe('default');
    });

    it('TC-C111: variant: striped가 적용된다', () => {
      const wrapper = mount(Table, { props: { variant: 'striped' } });
      expect(wrapper.attributes('data-variant')).toBe('striped');
    });

    it('TC-C112: variant: bordered가 적용된다', () => {
      const wrapper = mount(Table, { props: { variant: 'bordered' } });
      expect(wrapper.attributes('data-variant')).toBe('bordered');
    });
  });

  describe('Size 변형', () => {
    it('TC-C120: size: sm이 적용된다', () => {
      const wrapper = mount(Table, { props: { size: 'sm' } });
      expect(wrapper.attributes('data-size')).toBe('sm');
    });

    it('TC-C121: size: md가 적용된다', () => {
      const wrapper = mount(Table, { props: { size: 'md' } });
      expect(wrapper.attributes('data-size')).toBe('md');
    });

    it('TC-C122: size: lg가 적용된다', () => {
      const wrapper = mount(Table, { props: { size: 'lg' } });
      expect(wrapper.attributes('data-size')).toBe('lg');
    });
  });

  describe('기본값', () => {
    it('TC-C010: variant 기본값이 default이다', () => {
      const wrapper = mount(Table);
      expect(wrapper.attributes('data-variant')).toBe('default');
    });

    it('TC-C011: size 기본값이 md이다', () => {
      const wrapper = mount(Table);
      expect(wrapper.attributes('data-size')).toBe('md');
    });
  });

  describe('슬롯', () => {
    it('TC-S100: default 슬롯이 렌더링된다', () => {
      const wrapper = mount(Table, { slots: { default: '<tbody><tr><td>Table content</td></tr></tbody>' } });
      expect(wrapper.text()).toContain('Table content');
    });
  });

  describe('커스터마이즈 오버라이드', () => {
    it('TC-O100: class 추가 시 병합된다', () => {
      const wrapper = mount(Table, { props: { class: 'custom-table' } });
      expect(wrapper.classes()).toContain('wg-table');
      expect(wrapper.classes()).toContain('custom-table');
    });

    it('TC-O130: 보호 속성 오버라이드 차단', () => {
      const wrapper = mount(Table, {
        props: { variant: 'striped' },
        attrs: { 'data-variant': 'custom' },
      });
      expect(wrapper.attributes('data-variant')).toBe('striped');
    });
  });
});

describe('TableHead (Vue)', () => {
  it('should render with table-head class', () => {
    const wrapper = mount(TableHead, { slots: { default: '<tr><th>Header</th></tr>' } });
    expect(wrapper.classes()).toContain('wg-table__head');
  });

  it('should render slot content', () => {
    const wrapper = mount(TableHead, { slots: { default: '<tr><th>My Header</th></tr>' } });
    expect(wrapper.text()).toContain('My Header');
  });
});

describe('TableBody (Vue)', () => {
  it('should render with table-body class', () => {
    const wrapper = mount(TableBody, { slots: { default: '<tr><td>Body</td></tr>' } });
    expect(wrapper.classes()).toContain('wg-table__body');
  });

  it('should render slot content', () => {
    const wrapper = mount(TableBody, { slots: { default: '<tr><td>Body content</td></tr>' } });
    expect(wrapper.text()).toContain('Body content');
  });
});

describe('TableRow (Vue)', () => {
  it('should render with table-row class', () => {
    const wrapper = mount(TableRow, { slots: { default: '<td>Row</td>' } });
    expect(wrapper.classes()).toContain('wg-table__row');
  });

  it('should render slot content', () => {
    const wrapper = mount(TableRow, { slots: { default: '<td>Row content</td>' } });
    expect(wrapper.text()).toContain('Row content');
  });

  it('should apply selected prop', () => {
    const wrapper = mount(TableRow, { props: { selected: true } });
    expect(wrapper.attributes('data-state')).toBe('selected');
    expect(wrapper.attributes('aria-selected')).toBe('true');
  });

  it('should not have data-state when not selected', () => {
    const wrapper = mount(TableRow, { props: { selected: false } });
    expect(wrapper.attributes('data-state')).toBeUndefined();
  });
});

describe('TableCell (Vue)', () => {
  it('should render with table-cell class', () => {
    const wrapper = mount(TableCell, { slots: { default: 'Cell' } });
    expect(wrapper.classes()).toContain('wg-table__cell');
  });

  it('should render slot content', () => {
    const wrapper = mount(TableCell, { slots: { default: 'Cell content' } });
    expect(wrapper.text()).toContain('Cell content');
  });

  it('should apply align prop', () => {
    const wrapper = mount(TableCell, { props: { align: 'center' } });
    expect(wrapper.attributes('data-align')).toBe('center');
  });

  it('should default align to left', () => {
    const wrapper = mount(TableCell);
    expect(wrapper.attributes('data-align')).toBe('left');
  });
});

describe('TableHeaderCell (Vue)', () => {
  it('should render with table-header-cell class', () => {
    const wrapper = mount(TableHeaderCell, { slots: { default: 'Header' } });
    expect(wrapper.classes()).toContain('wg-table__header-cell');
  });

  it('should render slot content', () => {
    const wrapper = mount(TableHeaderCell, { slots: { default: 'Header content' } });
    expect(wrapper.text()).toContain('Header content');
  });

  it('should apply align prop', () => {
    const wrapper = mount(TableHeaderCell, { props: { align: 'right' } });
    expect(wrapper.attributes('data-align')).toBe('right');
  });

  it('should apply sortable prop', () => {
    const wrapper = mount(TableHeaderCell, { props: { sortable: true } });
    expect(wrapper.attributes('data-sortable')).toBe('true');
  });

  it('should have scope="col"', () => {
    const wrapper = mount(TableHeaderCell);
    expect(wrapper.attributes('scope')).toBe('col');
  });
});
