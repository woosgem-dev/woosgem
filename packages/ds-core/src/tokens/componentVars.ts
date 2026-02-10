/**
 * Component CSS Variables
 *
 * 컴포넌트별 오버라이딩이 가능한 CSS 변수 참조
 * 용법: <Button style={{ [buttonVars.bg]: '#custom' }} />
 */

// ===================
// Button
// ===================

export const buttonVars = {
  bg: '--wg-button-bg',
  bgHover: '--wg-button-bg-hover',
  bgActive: '--wg-button-bg-active',
  text: '--wg-button-text',
  border: '--wg-button-border',
} as const;

// ===================
// Input
// ===================

export const inputVars = {
  bg: '--wg-input-bg',
  text: '--wg-input-text',
  border: '--wg-input-border',
  borderFocus: '--wg-input-border-focus',
  placeholder: '--wg-input-placeholder',
} as const;

// ===================
// Badge
// ===================

export const badgeVars = {
  bg: '--wg-badge-bg',
  text: '--wg-badge-text',
} as const;

// ===================
// Alert
// ===================

export const alertVars = {
  bg: '--wg-alert-bg',
  text: '--wg-alert-text',
  border: '--wg-alert-border',
  icon: '--wg-alert-icon',
} as const;

// ===================
// Overlay
// ===================

export const overlayVars = {
  bg: '--wg-overlay-bg',
  blur: '--wg-overlay-blur',
} as const;

// ===================
// Switch
// ===================

export const switchVars = {
  track: '--wg-switch-track',
  trackActive: '--wg-switch-track-active',
  thumb: '--wg-switch-thumb',
} as const;

// ===================
// Checkbox
// ===================

export const checkboxVars = {
  border: '--wg-checkbox-border',
  bg: '--wg-checkbox-bg',
  bgChecked: '--wg-checkbox-bg-checked',
  check: '--wg-checkbox-check',
} as const;

// ===================
// Radio
// ===================

export const radioVars = {
  border: '--wg-radio-border',
  bg: '--wg-radio-bg',
  dot: '--wg-radio-dot',
} as const;

// ===================
// Tab
// ===================

export const tabVars = {
  text: '--wg-tab-text',
  textActive: '--wg-tab-text-active',
  indicator: '--wg-tab-indicator',
} as const;

// ===================
// Avatar
// ===================

export const avatarVars = {
  bg: '--wg-avatar-bg',
  text: '--wg-avatar-text',
  border: '--wg-avatar-border',
} as const;

// ===================
// Spinner
// ===================

export const spinnerVars = {
  color: '--wg-spinner-color',
} as const;

// ===================
// Divider
// ===================

export const dividerVars = {
  color: '--wg-divider-color',
} as const;

// ===================
// Textarea
// ===================

export const textareaVars = {
  bg: '--wg-textarea-bg',
  text: '--wg-textarea-text',
  border: '--wg-textarea-border',
  borderFocus: '--wg-textarea-border-focus',
} as const;

// ===================
// IconButton
// ===================

export const iconButtonVars = {
  bg: '--wg-icon-button-bg',
  bgHover: '--wg-icon-button-bg-hover',
  color: '--wg-icon-button-color',
} as const;

// ===================
// ListItem
// ===================

export const listItemVars = {
  bg: '--wg-list-item-bg',
  bgHover: '--wg-list-item-bg-hover',
  bgActive: '--wg-list-item-bg-active',
  text: '--wg-list-item-text',
} as const;

// ===================
// SegmentedControl
// ===================

export const segmentedControlVars = {
  bg: '--wg-segmented-control-bg',
  bgActive: '--wg-segmented-control-bg-active',
  text: '--wg-segmented-control-text',
  textActive: '--wg-segmented-control-text-active',
} as const;
