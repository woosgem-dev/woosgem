/**
 * Shared test utilities for WooSGem Design System.
 */

/**
 * Common test helper to wait for a tick
 */
export const waitTick = () => new Promise((resolve) => setTimeout(resolve, 0));

export { PROTECTED_ATTRS } from '@woosgem-dev/core';
