# WooSGem Design System

WooSGem is a personal monorepo containing a multi-framework design system and utility packages. It uses Turborepo for build orchestration and features the **Color Set Protocol (CSP)** for generating 81 design tokens from minimal input.

**Packages (GitHub Packages @woosgem-dev):**
- `@woosgem-dev/core` - Component definitions + CSP
- `@woosgem-dev/headless` - Headless primitives (vanilla + React hooks + Vue composables)
- `@woosgem-dev/styles` - SCSS styles & themes
- `@woosgem-dev/react` - React wrappers (25 components)
- `@woosgem-dev/vue` - Vue wrappers (25 components)
- `@woosgem-dev/lit` - Lit Web Components (25 components)
- `@woosgem-dev/utils` - Utilities
- `@woosgem-dev/icons` - Pure SVG icon assets (private)
- `@woosgem-dev/storybook` - Storybook (internal)

## Quick Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Development mode
pnpm build            # Build all packages
pnpm test             # Run tests
pnpm test:dashboard   # Tests + coverage dashboard
```

## Reference

| Document | Description |
|----------|-------------|
| [Test Dashboard](./docs/test-report.md) | 테스트 결과 및 커버리지 상세 현황 |
| [DS Policy](./docs/policies/design-system.md) | 아키텍처, 상태 관리, 에러 처리 정책 |
| [Architecture](./docs/architecture.md) | Package structure, core patterns |
| [Development Guide](./docs/guides/development.md) | Commands, dev notes |
| [Testing Guide](./docs/guides/testing.md) | TC 작성법, 테스트 프로세스 |
| [Code Style](./docs/guides/code-style.md) | TypeScript, React/Vue rules |
| [Roadmap](./docs/roadmap.md) | Project status, TODOs |
