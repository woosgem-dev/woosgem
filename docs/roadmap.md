# Project Status & TODOs

## Component Coverage

35 component definitions in Core, with full framework coverage:

| Component | Core | React | Vue | Lit | Styles | Tests |
|-----------|:----:|:-----:|:---:|:---:|:------:|:-----:|
| Accordion | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Alert | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Avatar | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| AvatarGroup | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Badge | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Breadcrumb | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Button | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Card | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Checkbox | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Divider | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Drawer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Icon | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| IconButton | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Input | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Kbd | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ListItem | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Menu | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Modal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Overlay | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Pagination | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Popover | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Progress | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Radio | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| SegmentedControl | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Select | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Skeleton | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Slider | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Spinner | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Switch | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tab | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Table | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tag | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Textarea | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Toast | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tooltip | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**Framework totals**: React 35 / Vue 35 / Lit 35 — full parity

## Completed Systems

- [x] CSP (Color Set Protocol)
  - [x] Schema (81 tokens)
  - [x] Generator + Smart Defaults (Light/Dark)
  - [x] Transformer (HSL color manipulation)
  - [x] Validation (schema + contrast)
  - [x] Output (CSS/SCSS/TS generators)
  - [x] Presets (default, dark) with design-accurate values
  - [x] **CSP → SCSS pipeline automated** (`pnpm generate` in ds-styles)
- [x] Headless Primitives (`@woosgem-dev/headless`)
  - [x] Vanilla: focus-trap, scroll-lock, escape-key, click-outside, focus detection
  - [x] React hooks: useScrollLock, useFocusTrap, useEscapeKey, useClickOutside, Portal
  - [x] Vue composables: useScrollLock, useFocusTrap, useEscapeKey, useClickOutside
  - [x] Modal refactored to use headless (React, Vue, Lit)
- [x] Icon System (@woosgem-dev/icons)
  - [x] 48 icons, multi-size (sm/md/lg), SVGO pipeline, currentColor
- [x] Theme System
  - [x] CSS Custom Properties + runtime `data-theme` switching
  - [x] default + dark themes
- [x] Build System
  - [x] Turborepo pipeline: `core:build` → `styles:generate` → `styles:build`
  - [x] TypeScript + SCSS builds
- [x] Test Architecture
  - [x] Tests distributed to each package (`__tests__/`)
  - [x] Per-package vitest.config.ts
  - [x] Vitest workspace for monorepo-wide `pnpm test`

## TODO

### High Priority

- [x] SCSS styles for Progress and Skeleton components
- [x] Storybook stories for new P2 components

### Medium Priority

- [ ] Refactor compound `data-state`: keep mutually exclusive values in `data-state` (checked/unchecked/indeterminate/selected), split stackable modifiers to independent attributes (`data-disabled`, `data-loading`)
- [ ] Animation system
- [ ] Storybook coverage for remaining components

### Low Priority

- [ ] Figma plugin
- [ ] Svelte support
- [ ] DatePicker component

---

## Component Roadmap

35 components defined, full cross-framework parity → **100% coverage**

### Completed Phases

```
Phase 1: Button, Input, Badge, Checkbox, IconButton, Tab, Avatar, ListItem, SegmentedControl, Divider
Phase 2: Spinner, Alert, Switch, Textarea, Radio
Phase 3: Modal, Toast, Tooltip, Select, Card, Icon, Overlay, Kbd, Progress, Skeleton
Phase 4 (P2): Tag, AvatarGroup, Breadcrumb, Accordion, Drawer, Pagination, Menu, Table, Slider, Popover
```

### Category Coverage

| Category | Count | Components |
|----------|:-----:|------------|
| Action | 2 | Button, IconButton |
| Form | 8 | Input, Checkbox, Radio, Select, Switch, Textarea, Slider, SegmentedControl |
| Data Display | 10 | Badge, Avatar, AvatarGroup, Card, ListItem, Icon, Tag, Table, Kbd, Skeleton |
| Feedback | 4 | Alert, Toast, Spinner, Progress |
| Navigation | 4 | Tab, Breadcrumb, Pagination, Menu |
| Overlay | 5 | Modal, Tooltip, Overlay, Drawer, Popover |
| Layout | 2 | Divider, Accordion |

## Recent Changes

- [x] **v0.1.0 released** — all 6 public packages published to GitHub Packages
- [x] **Storybook complete** — all 35 components have stories (P1–P4)
- [x] **P2 components** — 10 new components (Tag, AvatarGroup, Breadcrumb, Accordion, Drawer, Pagination, Menu, Table, Slider, Popover) across all frameworks
- [x] **CSP auto-derivation** — secondary, semantic, and neutral colors from a single primary
- [x] **Framework parity** — Vue and Lit now have Kbd, Progress, Skeleton, Overlay
- [x] **Headless primitives** — `@woosgem-dev/headless` package (vanilla + React hooks + Vue composables)
- [x] **Monorepo refactoring** — test distribution, headless extraction, Modal refactor, CSP pipeline

## Test Status

- [x] 2,800 tests passing across 5 packages
  - Core: 619 | React: 929 | Vue: 829 | Lit: 242 | Headless: 181
- [x] Tests colocated with source packages (no centralized ds-test)
- [x] Per-package `pnpm test` + monorepo-wide `pnpm test`

## Commands

```bash
pnpm install          # Install dependencies
pnpm build            # Build all packages (includes generate)
pnpm test             # Run all tests
pnpm dev              # Development mode (Turbo)
```
