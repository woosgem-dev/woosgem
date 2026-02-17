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
| Progress | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| Radio | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| SegmentedControl | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Select | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Skeleton | ✅ | ✅ | ✅ | ✅ | — | ✅ |
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

- [ ] SCSS styles for Progress and Skeleton components
- [ ] Storybook stories for new P2 components

### Medium Priority

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

- [x] **P2 components** — 10 new components (Tag, AvatarGroup, Breadcrumb, Accordion, Drawer, Pagination, Menu, Table, Slider, Popover) across all frameworks
- [x] **Framework parity** — Vue and Lit now have Kbd, Progress, Skeleton, Overlay
- [x] **Coverage improvement** — Progress, Checkbox compound, Toast tests added
- [x] **Monorepo refactoring** — code cleanup, barrel fix, test distribution, headless extraction, Modal refactor, CSP pipeline
- [x] **@woosgem-dev/headless** package created (vanilla + React hooks + Vue composables)
- [x] PROTECTED_ATTRS moved to ds-core/constants.ts (single source of truth)
- [x] Lit types aligned with core ComponentDefinition
- [x] React internal/ renamed to _internal/ for consistency

## Test Status

- [x] 2,695 tests passing across 5 packages
  - Core: 619 | React: 930 | Vue: 830 | Lit: 242 | Headless: 74
- [x] Tests colocated with source packages (no centralized ds-test)
- [x] Per-package `pnpm test` + monorepo-wide `pnpm test`

## Commands

```bash
pnpm install          # Install dependencies
pnpm build            # Build all packages (includes generate)
pnpm test             # Run all tests
pnpm dev              # Development mode (Turbo)
```
