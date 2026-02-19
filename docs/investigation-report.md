# Storybook vs ds-core Spec Investigation Report

## 1. Missing Storybook Stories (10 components)

Components that exist in ds-core + ds-react but have NO Storybook story:

| Component | ds-core Props | Notes |
|-----------|--------------|-------|
| **Accordion** | variant(outline/filled/ghost), size(sm/md/lg), type(single/multiple) | Compound: Item, Trigger, Content |
| **AvatarGroup** | size(xs-xl), max(number), spacing(tight/normal/loose) | |
| **Breadcrumb** | separator(string), size(sm/md/lg) | Compound: BreadcrumbItem |
| **Drawer** | position(left/right/top/bottom), size(sm/md/lg/full) | |
| **Menu** | size(sm/md/lg) | Compound: MenuItem, MenuDivider, MenuGroup |
| **Pagination** | variant(outline/filled/ghost), size(sm/md/lg), shape(rounded/circle) | Compound: PaginationItem |
| **Popover** | position(top/bottom/left/right), size(sm/md/lg), variant(default/tooltip) | Compound: PopoverArrow |
| **Slider** | size(sm/md/lg), color(primary/secondary/success/warning/danger), orientation | Compound: Track, Fill, Thumb |
| **Table** | variant(default/striped/bordered), size(sm/md/lg), hoverable | Compound: Head, Body, Row, Cell, HeaderCell |
| **Tag** | variant(solid/outline/subtle), color(6), size(sm/md/lg), closable | |

---

## 2. Playground (Controls) Broken

Storybook controls only work when the Default story passes args to the component.

**Broken Default stories (controls do nothing):**

| Component | Cause | Fix |
|-----------|-------|-----|
| **Divider** | `render: () => <Divider />` — args not passed | Use `args` without render, or `render: (args) =>` |
| **SegmentedControl** | `render: () => <SegmentedControl>...` — args not passed | Needs `render: (args) => <SegmentedControl {...args}>...` |

### Select — Default story has no options
- Default story only passes `placeholder`, `variant`, `size` — no mock data
- Renders as empty trigger button with placeholder text only
- Fix: add `options` prop with sample data (e.g. React, Vue, Angular, Svelte)

---

## 3. Story Prop Coverage Issues

### Button
- **color** argTypes only has: primary, secondary, danger, success
- **Missing**: `warning`, `info` (both defined in ds-core)
- **Additionally**: Colors, OutlineVariants, GhostVariants, LinkVariants showcase stories all hardcode 4 colors — all 4 need warning/info added

### Divider
- **color** prop completely missing from argTypes/controls
- No Colors story exists
- ds-core defines: default, muted, primary, secondary, danger, success

---

## 4. Compound State Bug — `selected + disabled` impossible

### The Problem

`data-state` uses a ternary chain that only allows ONE state at a time:

```typescript
// Tab.ts:67, SegmentedControl.ts:85, ListItem.ts:47
'data-state': merged.selected ? 'selected' : merged.disabled ? 'disabled' : undefined
```

When both `selected=true` AND `disabled=true`, `data-state` is only `"selected"` — disabled is silently ignored.

### Affected components (NO compound state)

| Component | data-state type | Missing | Severity |
|-----------|----------------|---------|----------|
| **Tab** | `'selected' \| 'disabled'` | `selected-disabled` | High |
| **SegmentedControlItem** | `'selected' \| 'disabled'` | `selected-disabled` | High |
| **ListItem** | `'selected' \| 'disabled'` | `selected-disabled` | High |

Note: SCSS for these components also lacks `[data-state="selected-disabled"]` selectors — both core AND SCSS need fixing.

### Checkbox — disabled wins over checked (High)

```typescript
function getCheckboxState(merged) {
  if (merged.disabled) return 'disabled';    // ← checked state lost
  if (merged.indeterminate) return 'indeterminate';
  if (merged.checked) return 'checked';
  return 'unchecked';
}
```

A `checked + disabled` checkbox loses its checked visual. This is common (e.g. read-only consent checkboxes).
SCSS also has no `checked-disabled` selector — both core and `_checkbox.scss` need fixing.

### Reference implementation (correct pattern)

Switch, Radio, SelectOption all handle compound states properly:
```typescript
if (merged.checked && merged.disabled) state = 'checked-disabled';
else if (merged.checked) state = 'checked';
else if (merged.disabled) state = 'disabled';
```

---

## 5. SCSS Issues

### Skeleton — MISSING SCSS FILE (High)
- `_skeleton.scss` does not exist
- NOT registered in `_index.scss`
- Component renders in Storybook unstyled
- Needs: 3 variants (text/circular/rectangular) x 4 sizes (sm/md/lg/full) x 3 animations (pulse/wave/none)

### Tooltip Arrow — clipped by overflow (Medium)
- `_tooltip.scss:37`: `.wg-tooltip` has `overflow: hidden`
- Arrow element extends 4px outside tooltip boundary via `bottom: -4px` etc.
- `overflow: hidden` clips the arrow entirely
- Fix: remove `overflow: hidden`, handle text overflow differently (e.g. on `.wg-tooltip__content`)

### Toast — close button breaks layout (Medium)
- Toast uses `display: flex; align-items: flex-start;` with no min-height
- Close button has fixed 24x24px, can cause layout distortion when content is short
- React component only renders `.wg-toast__content` + close button (no icon/title/description slots used)
- Fix: set appropriate min-height, ensure close button doesn't distort vertical rhythm

### Progress — Missing neutral gradient (Low)
- `[data-variant="gradient"]` only covers 4 colors: primary, success, warning, danger
- ds-core defines 5 colors — `neutral` gradient missing in both SCSS and GradientVariant story

---

## 6. React Implementation

All 34 React components correctly map ds-core specs:
- Props forwarded to `mapPropsToAttrs()`: consistent
- Data attribute mapping: matches ds-core definitions
- Default values: consistent with ds-core `defaultProps`

---

## Summary

| Category | Count | Severity |
|----------|-------|----------|
| Missing stories | 10 components | High |
| Broken playground (controls) | 2 components + Select empty | High |
| Story prop gaps | 2 components (Button, Divider) | Medium |
| Compound state bug | 3 components (Tab, SC, ListItem) | High |
| Checkbox disabled>checked | 1 component (core + SCSS) | High |
| Missing SCSS file | 1 (Skeleton) | High |
| SCSS bug | 2 (Tooltip arrow, Toast layout) | Medium |
| SCSS variant gap | 1 (Progress neutral) | Low |
| React impl issues | 0 | — |
