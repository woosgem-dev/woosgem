import { expect, afterEach } from 'vitest';

/**
 * Simple fixture utility for Lit testing in jsdom
 * Creates an element from a template literal and waits for it to be ready
 */
export async function fixture<T extends HTMLElement>(
  template: { strings: TemplateStringsArray; values: unknown[] } | string
): Promise<T> {
  // Create a temporary container
  const container = document.createElement('div');
  document.body.appendChild(container);

  // Handle tagged template literal or string
  let htmlString: string;
  if (typeof template === 'string') {
    htmlString = template;
  } else {
    // Reconstruct HTML from template literal
    htmlString = template.strings.reduce((acc, str, i) => {
      const value = template.values[i] ?? '';
      return acc + str + (typeof value === 'function' ? '' : String(value));
    }, '');
  }

  // Set innerHTML
  container.innerHTML = htmlString;

  // Get the first element child
  const element = container.firstElementChild as T;
  if (!element) {
    throw new Error('No element created from template');
  }

  // Wait for Lit element to complete rendering
  if ('updateComplete' in element) {
    await (element as unknown as { updateComplete: Promise<boolean> }).updateComplete;
  }

  // Small delay to ensure all microtasks complete
  await new Promise((resolve) => setTimeout(resolve, 0));

  return element;
}

/**
 * Tagged template function for HTML
 */
export function html(
  strings: TemplateStringsArray,
  ...values: unknown[]
): { strings: TemplateStringsArray; values: unknown[] } {
  return { strings, values };
}

// Custom matchers for Lit testing
expect.extend({
  toHaveAttribute(element: Element, attr: string, value?: string) {
    const actualValue = element.getAttribute(attr);
    const hasAttribute = actualValue !== null;

    if (value !== undefined) {
      return {
        pass: actualValue === value,
        message: () =>
          `expected element to have attribute ${attr}="${value}" but got "${actualValue}"`,
      };
    }

    return {
      pass: hasAttribute,
      message: () => `expected element to have attribute ${attr}`,
    };
  },
});

// Cleanup after each test
afterEach(() => {
  if (typeof document !== 'undefined') {
    document.body.innerHTML = '';
  }
});
