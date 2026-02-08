/**
 * @woosgem/ds-lit
 *
 * WooSGem Design System - Lit Web Components
 *
 * @example
 * ```html
 * <script type="module">
 *   import '@woosgem/ds-lit';
 *   import '@woosgem/ds-styles';
 * </script>
 *
 * <wg-button variant="filled" color="primary">Click me</wg-button>
 * ```
 */

// Components
export { Alert } from './Alert';
export { Avatar } from './Avatar';
export { Badge } from './Badge';
export { Button } from './Button';
export { Checkbox } from './Checkbox';
export { Divider } from './Divider';
export { Icon } from './Icon';
export { IconButton } from './IconButton';
export { Input } from './Input';
export { ListItem } from './ListItem';
export { Overlay } from './Overlay';
export { Radio, RadioGroup } from './Radio';
export { SegmentedControl, SegmentedControlItem } from './SegmentedControl';
export { Spinner } from './Spinner';
export { Switch } from './Switch';
export { Tab } from './Tab';
export { Textarea } from './Textarea';
export { Select, SelectMenu, SelectOption } from './Select';
export { Modal, ModalHeaderElement, ModalBodyElement, ModalFooterElement } from './Modal';
export { Card, CardHeader, CardBody, CardFooter } from './Card';
export { Toast, ToastElement } from './Toast';
export { Tooltip } from './Tooltip';

// Utilities
export {
  createComponent,
  applyAttrsToElement,
  emitEvent,
} from './_internal/createComponent';

export type {
  CoreComponentDefinition,
  PropDefinition,
  CreateComponentOptions,
} from './_internal/createComponent';

// Re-export core types
export type {
  // Alert
  AlertStyleProps,
  AlertVariant,
  AlertStatus,
  // Avatar
  AvatarStyleProps,
  AvatarSize,
  AvatarShape,
  // Badge
  BadgeStyleProps,
  BadgeVariant,
  BadgeColor,
  BadgeSize,
  // Button
  ButtonStyleProps,
  ButtonVariant,
  ButtonColor,
  ButtonSize,
  // Checkbox
  CheckboxStyleProps,
  CheckboxSize,
  CheckboxState,
  // Divider
  DividerStyleProps,
  DividerOrientation,
  DividerVariant,
  DividerSpacing,
  // Icon
  IconStyleProps,
  IconSize,
  IconColor,
  // IconButton
  IconButtonStyleProps,
  IconButtonVariant,
  IconButtonColor,
  IconButtonSize,
  IconButtonShape,
  // Input
  InputStyleProps,
  InputVariant,
  InputSize,
  // ListItem
  ListItemStyleProps,
  ListItemVariant,
  // Overlay
  OverlayStyleProps,
  OverlayOpacity,
  OverlayLevel,
  // Radio
  RadioStyleProps,
  RadioSize,
  RadioColor,
  RadioGroupStyleProps,
  // SegmentedControl
  SegmentedControlStyleProps,
  SegmentedControlSize,
  SegmentedControlItemStyleProps,
  // Spinner
  SpinnerStyleProps,
  SpinnerSize,
  SpinnerColor,
  // Switch
  SwitchStyleProps,
  SwitchSize,
  SwitchColor,
  // Tab
  TabStyleProps,
  TabVariant,
  TabSize,
  // Textarea
  TextareaStyleProps,
  TextareaVariant,
  TextareaSize,
  TextareaResize,
  // Select
  SelectStyleProps,
  SelectVariant,
  SelectSize,
  SelectMenuStyleProps,
  SelectOptionStyleProps,
  // Modal
  ModalStyleProps,
  ModalSize,
  ModalHeaderStyleProps,
  ModalBodyStyleProps,
  ModalFooterStyleProps,
  // Card
  CardStyleProps,
  CardVariant,
  CardPadding,
  CardHeaderStyleProps,
  CardBodyStyleProps,
  CardFooterStyleProps,
  CardFooterAlign,
  // Toast
  ToastStyleProps,
  ToastVariant,
  ToastPosition,
  // Tooltip
  TooltipStyleProps,
  TooltipPosition,
  TooltipTrigger,
} from '@woosgem-dev/core';
