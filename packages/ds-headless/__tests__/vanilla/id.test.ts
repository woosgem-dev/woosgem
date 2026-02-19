import { describe, it, expect, beforeEach } from 'vitest';
import { generateId, resetIdCounter } from '../../src/vanilla/id';

describe('generateId', () => {
  beforeEach(() => {
    resetIdCounter();
  });

  it('generates unique IDs with default prefix', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).toBe('wg-field-1');
    expect(id2).toBe('wg-field-2');
  });

  it('generates IDs with custom prefix', () => {
    const id = generateId('custom');
    expect(id).toBe('custom-1');
  });

  it('increments counter across calls', () => {
    generateId();
    generateId();
    const id = generateId();
    expect(id).toBe('wg-field-3');
  });
});

describe('resetIdCounter', () => {
  it('resets counter to 0', () => {
    generateId();
    generateId();
    resetIdCounter();
    const id = generateId();
    expect(id).toBe('wg-field-1');
  });
});
