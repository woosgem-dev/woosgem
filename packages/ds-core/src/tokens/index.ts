/**
 * Token Exports
 *
 * - Type-only exports (actual values in ds-styles)
 * - Component CSS variable references
 */

// Color token types
export {
  SemanticColors,
  TextColors,
  BackgroundColors,
  BorderColors,
} from './colors';

export type {
  SemanticColor,
  TextColor,
  BackgroundColor,
  BorderColor,
} from './colors';

// Typography token types
export {
  FontFamilyKeys,
  TypeScaleKeys,
  FontWeightKeys,
  LineHeightKeys,
  LetterSpacingKeys,
  TypeTokenKeys,
} from './typography';

export type {
  FontFamilyKey,
  TypeScaleKey,
  FontWeightKey,
  LineHeightKey,
  LetterSpacingKey,
  TypeTokenKey,
} from './typography';

// Spacing token types
export {
  SpacingKeys,
  RadiusKeys,
  SizeKeys,
  ZIndexKeys,
  BreakpointKeys,
} from './spacing';

export type {
  SpacingKey,
  RadiusKey,
  SizeKey,
  ZIndexKey,
  BreakpointKey,
} from './spacing';

// Motion token types
export {
  DurationKeys,
  EasingCategories,
  EasingModes,
  MotionKeys,
} from './motion';

export type {
  DurationKey,
  EasingCategory,
  EasingMode,
  MotionKey,
} from './motion';

// Component CSS variables (for inline override)
export {
  buttonVars,
  inputVars,
  badgeVars,
  alertVars,
  overlayVars,
  switchVars,
  checkboxVars,
  radioVars,
  tabVars,
  avatarVars,
  spinnerVars,
  dividerVars,
  textareaVars,
  iconButtonVars,
  listItemVars,
  segmentedControlVars,
} from './componentVars';
