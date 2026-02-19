let counter = 0;

/**
 * Generate a unique ID for field elements.
 *
 * @param prefix - ID prefix (default: 'wg-field')
 * @returns Unique string ID
 */
export function generateId(prefix = 'wg-field'): string {
  return `${prefix}-${++counter}`;
}

/**
 * Reset the ID counter. For testing only.
 */
export function resetIdCounter(): void {
  counter = 0;
}
