/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, afterEach } from 'vitest';
import { createScrollLock } from '../../src/vanilla/scroll-lock';

afterEach(() => {
  document.body.style.overflow = '';
});

describe('createScrollLock', () => {
  it('sets body overflow to hidden', () => {
    createScrollLock();
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores original overflow on cleanup', () => {
    document.body.style.overflow = 'auto';
    const cleanup = createScrollLock();

    expect(document.body.style.overflow).toBe('hidden');

    cleanup();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('restores empty string when original was empty', () => {
    document.body.style.overflow = '';
    const cleanup = createScrollLock();
    cleanup();
    expect(document.body.style.overflow).toBe('');
  });

  it('handles multiple locks/unlocks correctly', () => {
    document.body.style.overflow = 'scroll';

    const cleanup1 = createScrollLock();
    expect(document.body.style.overflow).toBe('hidden');

    // Second lock captures 'hidden' as original
    const cleanup2 = createScrollLock();
    expect(document.body.style.overflow).toBe('hidden');

    cleanup2();
    expect(document.body.style.overflow).toBe('hidden');

    cleanup1();
    expect(document.body.style.overflow).toBe('scroll');
  });
});
