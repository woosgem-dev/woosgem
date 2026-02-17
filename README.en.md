# WooSGem

**English** | [한국어](./README.md)

### Build & Quality
[![CI](https://github.com/woosgem-dev/woosgem/actions/workflows/test.yml/badge.svg)](https://github.com/woosgem-dev/woosgem/actions/workflows/test.yml)
[![Tests](https://img.shields.io/badge/tests-1136%20passed-brightgreen)](./docs/test-report.md)
[![Coverage](https://img.shields.io/badge/coverage-68%25-brightgreen)](./docs/test-report.md)

### Project Status
[![Components](https://img.shields.io/badge/components-25-blue)](./docs/roadmap.md)
[![Storybook](https://img.shields.io/badge/stories-191-blueviolet)](./packages/ds-storybook)
[![Vibe Coding](https://img.shields.io/badge/Vibe%20Coding-Claude%20Code-orange)](https://claude.ai/code)
[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

A scalable, theme-aware design system for modern web applications.
This project is built with **Vibe Coding** powered by **Claude Code**.

## Dashboard
- [Detailed Test & Coverage Report](./docs/test-report.md)

## Quick Links

- [API Docs](./docs/api/)
- [Getting Started](./docs/guides/getting-started.md)
- [Roadmap](./docs/roadmap.md)

## Features

- **Multi-Framework Support**: React, Vue, and Lit (Web Components)
- **Theme System**: Runtime theme switching and build-time theme splitting
- **Color Set Protocol**: Generates 81 tokens from minimal input
- **Accessibility (a11y)**: WAI-ARIA compliant, keyboard navigation support
- **Icon System**: Multi-size (sm, md, lg) SVG assets with theme support (`currentColor`)
- **Type Safety**: Written in TypeScript with full type support
- **Monorepo Architecture**: Efficient build system powered by Turborepo
- **Storybook**: Interactive component documentation and demos

## Installation

### React

```bash
# npm
npm install @woosgem-dev/react @woosgem-dev/styles

# pnpm
pnpm add @woosgem-dev/react @woosgem-dev/styles

# yarn
yarn add @woosgem-dev/react @woosgem-dev/styles
```

### Vue

```bash
# npm
npm install @woosgem-dev/vue @woosgem-dev/styles

# pnpm
pnpm add @woosgem-dev/vue @woosgem-dev/styles

# yarn
yarn add @woosgem-dev/vue @woosgem-dev/styles
```

### Lit (Web Components)

```bash
# npm
npm install @woosgem-dev/lit @woosgem-dev/styles

# pnpm
pnpm add @woosgem-dev/lit @woosgem-dev/styles

# yarn
yarn add @woosgem-dev/lit @woosgem-dev/styles
```

## Quick Start

### React

```typescript
// main.tsx or App.tsx
import '@woosgem-dev/styles';
import { Button, Badge, Input } from '@woosgem-dev/react';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click Me
      </Button>

      <Badge variant="success" size="sm">
        New Message
      </Badge>

      <Input
        placeholder="Enter your email"
        fullWidth
      />
    </div>
  );
}

export default App;
```

## Components

Currently **25 components** are available.

| Framework | Components |
|-----------|-----------|
| React | 25 |
| Lit | 22 |
| Vue | 21 |

### Action (2)
- **Button** - filled/outline/ghost/link variants, 6 colors (primary/secondary/danger/success/warning/info)
- **IconButton** - Icon-only button, 3 shapes (circle/square/none)

### Form (6)
- **Input** - outline/filled/underline variants, error/success states
- **Textarea** - outline/filled variants, resize options (none/vertical/horizontal/both)
- **Checkbox** - Headless compound pattern
- **Radio** - Includes RadioGroup, horizontal/vertical layouts
- **Switch** - Toggle switch, 3 colors (primary/secondary/success)
- **Select** - Dropdown selection, keyboard navigation support

### Feedback (4)
- **Alert** - info/success/warning/error states, filled/outline/subtle variants, closable option
- **Spinner** - Loading indicator, 4 sizes (xs/sm/md/lg)
- **Toast** - Notification messages, auto-dismiss support
- **Progress** - Progress bar, multiple sizes and colors

### Data Display (5)
- **Badge** - filled/outline/subtle variants, 6 colors
- **Avatar** - circle/square shapes, xs~xl sizes
- **ListItem** - List item component
- **Card** - Content container, header/body/footer structure
- **Skeleton** - Loading placeholder, multiple shape variants

### Navigation (2)
- **Tab** - underline/filled variants, primary/secondary colors
- **SegmentedControl** - Segmented control component

### Overlay (3)
- **Modal** - Dialog with focus trap support
- **Tooltip** - Tooltip with multiple placement options
- **Overlay** - Overlay backdrop

### Layout (2)
- **Divider** - 6 color variations (default/muted/primary/secondary/danger/success)
- **Kbd** - Keyboard shortcut display

### Utility (1)
- **Icon** - SVG icon wrapper, multi-size support

> See [Roadmap](./docs/roadmap.md) for the complete component roadmap.

## Theme System

### Available Themes

- **default** - Light theme (default)
- **dark** - Dark theme (Carbon-inspired)

### Runtime Theme Switching

```typescript
// Include all themes
import '@woosgem-dev/styles';

// Switch theme
function setTheme(theme: 'default' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
}

function ThemeSwitcher() {
  return (
    <div>
      <button onClick={() => setTheme('default')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}
```

### Build-Time Theme Splitting

Load only specific themes to reduce bundle size:

```typescript
// Use dark theme only
import '@woosgem-dev/styles/themes/dark';

// Or light theme only
import '@woosgem-dev/styles/themes/default';
```

## Color Set Protocol (CSP)

A protocol for generating complete themes from minimal input.

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem-dev/core';

// Minimal definition (only 4 fields required)
const myTheme = {
  id: 'brand',
  name: 'Brand Theme',
  mode: 'light',
  primary: { base: '#2563EB' },
};

// Generates 81 tokens automatically
const resolved = generateColorSet(myTheme);

// Output CSS Custom Properties
const css = generateThemeCSS(resolved);
```

### Smart Defaults

- Specify only `primary.base` to auto-generate 81 color tokens
- Appropriate defaults applied based on mode (light/dark)
- Hover, active, alpha states automatically derived

> See [docs/api/csp.md](./docs/api/csp.md) for the complete schema.

## Development

### Requirements

- Node.js >= 18
- pnpm >= 10.28.2

### Setup & Commands

```bash
# Install dependencies
pnpm install

# Development mode
pnpm dev

# Build
pnpm build

# Run Storybook
pnpm --filter @woosgem-dev/storybook dev

# Run tests
pnpm test:all
```

### Project Structure

```
woosgem/
├── packages/
│   ├── ds-core/      # Component definitions + CSP + token system
│   ├── ds-headless/  # Headless primitives (vanilla + React hooks + Vue composables)
│   ├── ds-react/     # React components (25)
│   ├── ds-vue/       # Vue components (25)
│   ├── ds-lit/       # Lit Web Components (25)
│   ├── ds-styles/    # SCSS styles and themes (default/dark)
│   ├── ds-icons/     # SVG icon assets (sm/md/lg)
│   ├── ds-storybook/ # Storybook
│   └── utils/        # Utility functions
├── turbo.json         # Turborepo configuration
└── pnpm-workspace.yaml
```

## Contributing

### Adding a New Component

1. Add component definition in `packages/ds-core/src/components`
2. Add styles in `packages/ds-styles/src/components`
3. Add framework implementations in `packages/ds-react/src`, `packages/ds-vue/src`, and `packages/ds-lit/src`
4. Add stories in `packages/ds-storybook/src/stories`
5. Add tests in each package's `__tests__/` directory

### Adding a New Theme (Using CSP)

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem-dev/core';

const newTheme = {
  id: 'custom',
  name: 'Custom Theme',
  mode: 'light',
  primary: { base: '#YOUR_COLOR' },
  // Optional: secondary, semantic, text, background, etc.
};

const css = generateThemeCSS(generateColorSet(newTheme));
```

## License

MIT
