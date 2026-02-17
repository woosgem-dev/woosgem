# Project Status & TODOs

## Component Coverage

25 component definitions in Core, with framework coverage:

| Component | Core | React | Vue | Lit | Styles | Storybook | Tests |
|-----------|:----:|:-----:|:---:|:---:|:------:|:---------:|:-----:|
| Alert | ✅ | ✅ | ✅ | ✅ | ✅ | 🚧 | ✅ |
| Avatar | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Badge | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Button | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Card | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| Checkbox | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Divider | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Icon | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| IconButton | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Input | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Kbd | ✅ | ✅ | — | — | ✅ | — | — |
| ListItem | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Modal | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| Overlay | ✅ | ✅ | — | ✅ | ✅ | — | ✅ |
| Progress | ✅ | ✅ | — | — | ✅ | — | — |
| Radio | ✅ | ✅ | ✅ | ✅ | ✅ | 🚧 | ✅ |
| SegmentedControl | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Select | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| Skeleton | ✅ | ✅ | — | — | ✅ | — | — |
| Spinner | ✅ | ✅ | ✅ | ✅ | ✅ | 🚧 | ✅ |
| Switch | ✅ | ✅ | ✅ | ✅ | ✅ | 🚧 | ✅ |
| Tab | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Textarea | ✅ | ✅ | ✅ | ✅ | ✅ | 🚧 | ✅ |
| Toast | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| Tooltip | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ |

**Framework totals**: React 25 / Vue 21 / Lit 22

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

- [ ] Storybook stories (Alert, Radio, Spinner, Switch, Textarea, Modal, Toast, Tooltip, Select, Card)
- [ ] Vue parity: add Kbd, Overlay, Progress, Skeleton
- [ ] Lit parity: add Kbd, Progress, Skeleton

### Medium Priority

- [ ] Accessibility (a11y) tests
- [ ] Tooltip headless extraction (useTooltip primitive for position calculation)
- [ ] Vue Portal composable in headless package

### Low Priority

- [ ] Animation system
- [ ] Figma plugin
- [ ] Svelte support

---

## Component Roadmap

25 components defined, 22 fully cross-framework → **~88% coverage**

### Completed Phases

```
Phase 1: Button, Input, Badge, Checkbox, IconButton, Tab, Avatar, ListItem, SegmentedControl, Divider
Phase 2: Spinner, Alert, Switch, Textarea, Radio
Phase 3: Modal, Toast, Tooltip, Select, Card, Icon, Overlay, Kbd, Progress, Skeleton
```

### Next: Framework Parity

| Component | Vue | Lit |
|-----------|-----|-----|
| Kbd | needed | needed |
| Overlay | needed | — |
| Progress | needed | needed |
| Skeleton | needed | needed |

### Future Components (P2)

| Component | Purpose |
|-----------|---------|
| Menu | Context menu, action list |
| Popover | Anchor-based positioning |
| Breadcrumb | Navigation path |
| Table | Data display |
| Pagination | Large data navigation |
| Slider | Range input |
| DatePicker | Date selection |
| Accordion | Collapsible content |
| Drawer | Side panel |
| AvatarGroup | Multiple users |
| Tag/Chip | Tag input, filtering |

### Category Coverage

| Category | Current | Target | Gap |
|----------|:-------:|:------:|:---:|
| Action | 2 | 2 | ✅ |
| Form | 7 | 7 | ✅ |
| Data Display | 7 | 7 | ✅ |
| Feedback | 4 | 4 | ✅ |
| Navigation | 2 | 4 | -2 |
| Overlay | 3 | 4 | -1 |
| Layout | 1 | 2 | -1 |

## Recent Changes

- [x] **Monorepo refactoring** — code cleanup, barrel fix, test distribution, headless extraction, Modal refactor, CSP pipeline
- [x] **@woosgem-dev/headless** package created (vanilla + React hooks + Vue composables)
- [x] **Test distribution** — tests moved from ds-test to each package (core, react, vue, lit, headless)
- [x] **CSP pipeline** automated — `generate-themes.ts` generates SCSS from CSP presets
- [x] **Modal refactored** in all 3 frameworks to use headless primitives
- [x] **Barrel files eliminated** — explicit named exports, no `export *`
- [x] PROTECTED_ATTRS moved to ds-core/constants.ts (single source of truth)
- [x] Lit types aligned with core ComponentDefinition
- [x] React internal/ renamed to _internal/ for consistency

## Test Status

- [x] 1,665 tests passing across 5 packages
  - Core: 415 | React: 617 | Vue: 487 | Lit: 97 | Headless: 49
- [x] Tests colocated with source packages (no centralized ds-test)
- [x] Per-package `pnpm test` + monorepo-wide `pnpm test`

## Commands

```bash
pnpm install          # Install dependencies
pnpm build            # Build all packages (includes generate)
pnpm test             # Run all tests
pnpm dev              # Development mode (Turbo)
```
