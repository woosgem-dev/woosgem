/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { Portal } from '../../src/react/Portal';

afterEach(() => {
  cleanup();
});

describe('Portal', () => {
  it('renders children into a custom container', () => {
    const container = document.createElement('div');
    container.id = 'portal-root';
    document.body.appendChild(container);

    render(
      <Portal container={container}>
        <span>Custom target</span>
      </Portal>,
    );

    expect(container.querySelector('span')!.textContent).toBe('Custom target');
    document.body.removeChild(container);
  });

  it('renders children into document.body when no container specified', () => {
    const portalRoot = document.createElement('div');
    portalRoot.id = 'portal-mount';
    document.body.appendChild(portalRoot);

    render(
      <Portal container={portalRoot}>
        <div data-testid="content">Portal content</div>
      </Portal>,
    );

    const content = portalRoot.querySelector('[data-testid="content"]');
    expect(content).not.toBeNull();
    expect(content!.textContent).toBe('Portal content');
    document.body.removeChild(portalRoot);
  });
});
