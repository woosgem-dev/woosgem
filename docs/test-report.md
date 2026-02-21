# Test & Coverage Dashboard

## Summary

| Metric | Value |
|--------|-------|
| Total Tests | 2,800 passed |
| Packages | 5 (core, react, vue, lit, headless) |
| Architecture | Per-package tests (`__tests__/`) + Vitest workspace |
| Version | 0.1.0 |

---

## Per-Package Results

| Package | Tests | Description |
|---------|------:|-------------|
| @woosgem-dev/core | 619 | Component definitions (35), CSP protocol, tokens |
| @woosgem-dev/react | 929 | React wrappers (35 components) + compound/hook tests |
| @woosgem-dev/vue | 829 | Vue wrappers (35 components) + composable tests |
| @woosgem-dev/lit | 242 | Lit Web Component wrappers (35 components) |
| @woosgem-dev/headless | 181 | Vanilla utilities, React hooks, Vue composables |
| **Total** | **2,800** | |

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
