# Architecture

## Package Structure

**Design System Packages (ds-* prefix):**
- **@woosgem-dev/core** - Framework-agnostic component definitions + Color Set Protocol
- **@woosgem-dev/headless** - Vanilla DOM utilities + React hooks + Vue composables
- **@woosgem-dev/styles** - SCSS styles and theming (CSP-generated tokens)
- **@woosgem-dev/react** - React component wrappers using `forwardRef` and `memo`
- **@woosgem-dev/vue** - Vue component wrappers using `defineComponent`
- **@woosgem-dev/lit** - Lit Web Component wrappers
- **@woosgem-dev/icons** - Pure SVG icon assets (sm, md, lg) with theme support
- **@woosgem-dev/storybook** - React Storybook (internal)
- **@woosgem-dev/storybook-vue** - Vue Storybook (internal)
- **@woosgem-dev/storybook-lit** - Lit Storybook (internal)
- **@woosgem-dev/utils** - General utility functions

## Layer Architecture

```
┌─────────────────────────────────────────────────┐
│  Framework Wrappers (Styled Components)          │
│  @woosgem-dev/react, vue, lit                    │
│  Modal, Tooltip, Select, Toast, ...              │
├─────────────────────────────────────────────────┤
│  @woosgem-dev/headless (Logic/Primitives)        │
│  Vanilla: focus-trap, scroll-lock, escape-key    │
│  React: useScrollLock, useFocusTrap, Portal      │
│  Vue: useScrollLock, useFocusTrap, ...           │
├─────────────────────────────────────────────────┤
│  @woosgem-dev/core (Definitions + CSP)           │
│  mapPropsToAttrs, types, tokens, constants       │
├─────────────────────────────────────────────────┤
│  @woosgem-dev/styles (SCSS/CSS)                  │
│  CSP-generated tokens → component styles         │
└─────────────────────────────────────────────────┘
```

## Core Pattern: Framework-Agnostic Components

Components are defined as immutable data structures in `packages/ds-core/src/components/`:

```typescript
export const Button = {
  displayName: 'Button',
  defaultProps: { variant: 'filled', color: 'primary', size: 'md' },
  propTypes: { variant: ButtonVariants, color: ButtonColors, size: ButtonSizes },
  mapPropsToAttrs: (props: ButtonStyleProps): ButtonAttrs => ({
    class: 'btn',
    'data-variant': props.variant,
    'data-color': props.color,
  }),
  template: { tag: 'button', slots: ['default'] },
} as const satisfies ComponentDefinition<ButtonStyleProps, ButtonAttrs, 'button'>;
```

Framework adapters (`createComponent` in react/vue/lit packages) consume these definitions to generate framework-specific components. SCSS targets the data attributes set by `mapPropsToAttrs`.

## Component File Locations

| Layer | Path |
|-------|------|
| Core definition | `packages/ds-core/src/components/Button.ts` |
| Icon assets | `packages/ds-icons/svg/{sm,md,lg}/*.svg` |
| React wrapper | `packages/ds-react/src/Button.tsx` |
| Vue wrapper | `packages/ds-vue/src/Button.ts` |
| Lit wrapper | `packages/ds-lit/src/Button.ts` |
| SCSS styles | `packages/ds-styles/src/components/_button.scss` |
| Stories | `packages/ds-storybook/src/stories/Button.stories.tsx` |
| Tests | `packages/ds-{core,react,vue,lit}/__tests__/` |

## Headless Primitives

`@woosgem-dev/headless` provides framework-agnostic DOM utilities with framework-specific adapters:

```
packages/ds-headless/src/
├── vanilla/          # Framework-agnostic (no dependencies)
│   ├── focus.ts          # getFocusableElements, setInitialFocus
│   ├── focus-trap.ts     # createFocusTrap
│   ├── scroll-lock.ts    # createScrollLock
│   ├── escape-key.ts     # onEscapeKey
│   └── click-outside.ts  # onClickOutside
├── react/            # React hooks wrapping vanilla
│   ├── useFocusTrap.ts, useScrollLock.ts, useEscapeKey.ts, useClickOutside.ts
│   └── Portal.tsx
└── vue/              # Vue composables wrapping vanilla
    └── useFocusTrap.ts, useScrollLock.ts, useEscapeKey.ts, useClickOutside.ts
```

Lit uses the vanilla layer directly.

## Color Set Protocol (CSP)

Located in `packages/ds-core/src/protocol/`. Generates 81+ tokens from preset definitions:

```typescript
const theme: ColorSetDefinition = {
  id: 'default',
  name: 'Default Light Theme',
  mode: 'light',
  primary: { base: '#000000', hover: '#1A1A1A', active: '#1A1A1A' },
  // ... semantic, text, background, border overrides
};
```

**Pipeline**: `core:build` → `styles:generate` → `styles:build`

The `generate-themes.ts` script in ds-styles imports CSP presets, runs `generateColorSets()` and `generateSCSSFile()`, and writes `_color-sets.scss` + `_colors.scss`.

Key files: `schema.ts` (types), `generator.ts` (token generation), `validation/` (WCAG contrast), `output/` (CSS/SCSS/TS generators).

> Full CSP specification: [docs/api/csp.md](./api/csp.md)

## Theme System

CSS Custom Properties prefixed with `--wg-color-`. Runtime switching via `data-theme` attribute:

```typescript
document.documentElement.setAttribute('data-theme', 'dark');
```

Available themes: `default`, `dark`.

## Test Architecture

Tests are colocated with each package, not centralized:

```
packages/ds-core/__tests__/       # Pure data tests (jsdom)
packages/ds-react/__tests__/      # @testing-library/react
packages/ds-vue/__tests__/        # @testing-library/vue
packages/ds-lit/__tests__/        # Custom Lit fixture util
packages/ds-headless/__tests__/   # Vanilla + React + Vue
```

Vitest workspace config at root runs all packages with `pnpm test`.

## Key Technologies

- **pnpm 10.x** - Package manager with workspaces (strict mode)
- **Turborepo** - Build orchestration with `generate` → `build` pipeline
- **TypeScript 5.7** - `target: ES2022`, `moduleResolution: bundler`
- **Vitest** - Testing framework with workspace mode
- **Storybook 8** - Component documentation
- **SVGO** - SVG optimization for `@woosgem-dev/icons`
- **dart-sass** - SCSS compilation (custom script in `packages/ds-styles/scripts/build.ts`)
