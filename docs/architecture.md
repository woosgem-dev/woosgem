# Architecture

## Package Structure

**Design System Packages (ds-* prefix):**
- **@woosgem/ds-core** - Framework-agnostic component definitions + Color Set Protocol
- **@woosgem/ds-icons** - Pure SVG icon assets (sm, md, lg) with theme support
- **@woosgem/ds-test** - Shared test utilities and helpers
- **@woosgem/ds-react** - React component wrappers using `forwardRef` and `memo`
- **@woosgem/ds-vue** - Vue component wrappers using `defineComponent`
- **@woosgem/ds-styles** - SCSS styles and theming (custom dart-sass build script)
- **@woosgem/ds-storybook** - Component documentation (internal)

**Utility Packages:**
- **@woosgem/utils** - General utility functions

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
    // ...
  }),
  template: { tag: 'button', slots: ['default'] },
} as const satisfies ComponentDefinition<ButtonStyleProps, ButtonAttrs, 'button'>;
```

Framework adapters (`createComponent` in react/vue packages) consume these definitions to generate framework-specific components. SCSS targets the data attributes set by `mapPropsToAttrs`.

## Component File Locations

| Layer | Path |
|-------|------|
| Core definition | `packages/ds-core/src/components/Button.ts` |
| Icon assets | `packages/ds-icons/svg/{sm,md,lg}/*.svg` |
| React wrapper | `packages/ds-react/src/Button.tsx` |
| Vue wrapper | `packages/ds-vue/src/Button.ts` |
| SCSS styles | `packages/ds-styles/src/components/_button.scss` |
| Stories | `packages/ds-storybook/src/stories/Button.stories.tsx` |
| Tests (Consolidated) | `packages/ds-test/src/{core,react,vue}/*.test.{ts,tsx}` |

## Color Set Protocol (CSP)

Located in `packages/ds-core/src/protocol/`. Generates 81 tokens from minimal input:

```typescript
const theme: ColorSetDefinition = {
  id: 'brand',
  name: 'Brand Theme',
  mode: 'light',
  primary: { base: '#2563EB' },  // Generates hover, active, alpha variants, etc.
};
```

Key files: `schema.ts` (types), `generator.ts` (token generation), `validation/` (WCAG contrast).

> Full CSP specification: [docs/api/csp.md](./api/csp.md)

## Theme System

CSS Custom Properties prefixed with `--wg-color-`. Runtime switching via `data-theme` attribute:

```typescript
document.documentElement.setAttribute('data-theme', 'dark');
```

Available themes: `default`, `dark`.

## Key Technologies

- **pnpm 10.x** - Package manager with workspaces (Strict mode)
- **Turborepo** - Build orchestration
- **TypeScript 5.7** - `target: ES2022`, `moduleResolution: bundler`
- **Vitest** - Testing framework
- **Storybook 8** - Component documentation
- **SVGO** - SVG optimization tool for `@woosgem/ds-icons`
- **dart-sass** - SCSS compilation (custom script in `packages/ds-styles/scripts/build.js`)
