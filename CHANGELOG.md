# Changelog

All notable changes to this project will be documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/).

## [0.1.0] - 2026-02-21

### Added

- 10 P2 components across all frameworks: Tag, AvatarGroup, Breadcrumb, Accordion, Drawer, Pagination, Menu, Table, Slider, Popover
- Headless primitives package (`@woosgem-dev/headless`): focus-trap, scroll-lock, escape-key, click-outside, focus detection
- React hooks: `useScrollLock`, `useFocusTrap`, `useEscapeKey`, `useClickOutside`, Portal
- Vue composables: `useScrollLock`, `useFocusTrap`, `useEscapeKey`, `useClickOutside`
- CSP automatic color derivation: secondary, semantic, and neutral colors from a single primary
- CSP playground deployed via GitHub Pages
- Storybook stories for all 35 components (P1–P4)
- Vue and Lit Storybook packages with GitHub Pages deploy
- Tooltip headless primitive with Vue Portal and a11y tests
- Kbd, Progress, Skeleton components for Vue and Lit

### Changed

- Applied `wg-` prefix and BEdM naming to all component classes
- Replaced Card `padding` prop with `size` prop
- Refactored Modal to use headless primitives (React, Vue, Lit)
- Extracted headless primitives from framework packages into standalone `@woosgem-dev/headless`
- Moved `PROTECTED_ATTRS` to `ds-core/constants.ts` as single source of truth
- Renamed React `internal/` to `_internal/` for consistency
- Distributed tests to each package (removed centralized `ds-test`)
- Unified Lit types with core `ComponentDefinition`
- Simplified packages and consolidated build pipeline

### Fixed

- CSS style string to React object conversion in `createComponent`
- Compound `data-state` values (`selected-disabled`, `checked-disabled`, `indeterminate-disabled`) aligned across React/Vue tests
- Storybook source view showing full source for React, Vue, and Lit
- Storybook docs syntax highlighting with light theme
- Corrupted Korean UTF-8 in source and test files

## [0.0.3] - 2025-12-01

Initial pre-release with 25 components (P1–P3), CSP token system, and framework adapters for React, Vue, and Lit.
