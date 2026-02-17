# Test & Coverage Dashboard

## Summary

| Metric | Value |
|--------|-------|
| Total Tests | 1,665 passed |
| Packages | 5 (core, react, vue, lit, headless) |
| Architecture | Per-package tests (`__tests__/`) + Vitest workspace |

---

## Per-Package Results

| Package | Tests | Description |
|---------|------:|-------------|
| @woosgem-dev/core | 415 | Component definitions, CSP protocol, tokens |
| @woosgem-dev/react | 617 | React component wrappers + Modal focus/scroll tests |
| @woosgem-dev/vue | 487 | Vue component wrappers + Modal focus/scroll tests |
| @woosgem-dev/lit | 97 | Lit Web Component wrappers |
| @woosgem-dev/headless | 49 | Vanilla utilities, React hooks, Vue composables |
| **Total** | **1,665** | |

## Test Architecture

Tests are colocated with each package:

```
packages/ds-core/__tests__/       # Core tests (jsdom, no framework)
packages/ds-react/__tests__/      # React tests (@testing-library/react)
packages/ds-vue/__tests__/        # Vue tests (@testing-library/vue)
packages/ds-lit/__tests__/        # Lit tests (custom fixture util)
packages/ds-headless/__tests__/   # Headless tests (vanilla + react + vue)
```

Each package has its own `vitest.config.ts`. Root Vitest workspace runs all packages with `pnpm test`.

## Running Tests

```bash
pnpm test                        # All packages
pnpm test --filter ds-react      # Single package
```
