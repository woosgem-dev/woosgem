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

---

## Headless Layer (Planned)

> 새로운 레이어: UI 로직/렌더링 담당, 스타일 없음

### 동기

현재 `ds-react`의 Modal, Tooltip 등에 로직(Portal, FocusTrap, 위치 계산)이 하드코딩됨.
→ 재사용 어려움, 테스트 어려움, 스타일 강제

### 구조 (계획)

```
@woosgem-dev/headless (또는 primitives)
├── components/
│   ├── Portal.tsx       # DOM 트리 밖 렌더링
│   ├── FocusTrap.tsx    # 포커스 가두기
│   ├── Popover.tsx      # 앵커 기준 위치 계산
│   └── Label.tsx        # 폼 필드 구조 (wrapping 패턴)
├── hooks/
│   ├── useScrollLock.ts # body 스크롤 방지/복원
│   ├── useClickOutside.ts
│   └── useEscapeKey.ts
└── index.ts
```

### 레이어 관계

```
┌─────────────────────────────────────────────┐
│  @woosgem-dev/react (Styled Components)     │
│  Modal, Tooltip, Select, Toast, ...         │
├─────────────────────────────────────────────┤
│  @woosgem-dev/headless (Logic/Primitives)   │
│  Portal, FocusTrap, Popover, Label, ...     │
├─────────────────────────────────────────────┤
│  @woosgem-dev/core (Definitions + CSP)      │
│  mapPropsToAttrs, types, tokens             │
└─────────────────────────────────────────────┘
```

### 사용 예시

```tsx
// Headless 직접 사용
import { Portal, FocusTrap, useScrollLock } from '@woosgem-dev/headless';

function CustomModal({ open, children }) {
  useScrollLock(open);
  return (
    <Portal>
      <FocusTrap active={open}>
        {children}
      </FocusTrap>
    </Portal>
  );
}

// 또는 조합된 Styled 버전 사용
import { Modal } from '@woosgem-dev/react';
<Modal open={isOpen}>...</Modal>
```

> 상세: [docs/roadmap.md](./roadmap.md) "Headless Layer" 섹션 참조
