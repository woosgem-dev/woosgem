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
export { Kbd } from './Kbd';
export { IconButton } from './IconButton';
export { Input } from './Input';
export { ListItem } from './ListItem';
export { Overlay } from './Overlay';
export { Progress } from './Progress';
export { Radio, RadioGroup } from './Radio';
export { SegmentedControl, SegmentedControlItem } from './SegmentedControl';
export { Skeleton } from './Skeleton';
export { Spinner } from './Spinner';
export { Switch } from './Switch';
export { Tab } from './Tab';
export { Textarea } from './Textarea';
export { Select, SelectMenu, SelectOption } from './Select';
export { Modal, ModalHeaderElement, ModalBodyElement, ModalFooterElement } from './Modal';
export { Card, CardHeader, CardBody, CardFooter } from './Card';
export { Toast, ToastElement } from './Toast';
export { Tooltip } from './Tooltip';
export { Tag } from './Tag';
export { AvatarGroup } from './AvatarGroup';
export { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';
export { Drawer } from './Drawer';
export { Pagination, PaginationItem } from './Pagination';
export { Menu, MenuItem, MenuDivider, MenuGroup } from './Menu';
export { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from './Table';
export { Slider, SliderTrack, SliderFill, SliderThumb } from './Slider';
export { Popover, PopoverArrow } from './Popover';

// Utilities
export {
  createComponent,
  applyAttrsToElement,
  emitEvent,
} from './_internal/createComponent';

export type {
  PropDefinition,
  CreateComponentOptions,
} from './_internal/createComponent';

// Re-export core type (replaces removed CoreComponentDefinition)
export type { ComponentDefinition } from '@woosgem-dev/core';

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
  // Kbd
  KbdStyleProps,
  KbdSize,
  KbdVariant,
  // ListItem
  ListItemStyleProps,
  ListItemVariant,
  // Overlay
  OverlayStyleProps,
  OverlayOpacity,
  OverlayLevel,
  // Progress
  ProgressStyleProps,
  ProgressVariant,
  ProgressColor,
  ProgressSize,
  // Radio
  RadioStyleProps,
  RadioSize,
  RadioColor,
  RadioGroupStyleProps,
  // SegmentedControl
  SegmentedControlStyleProps,
  SegmentedControlSize,
  SegmentedControlItemStyleProps,
  // Skeleton
  SkeletonStyleProps,
  SkeletonVariant,
  SkeletonSize,
  SkeletonAnimation,
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
  CardSize,
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
  // Tag
  TagStyleProps,
  TagVariant,
  TagColor,
  TagSize,
  // AvatarGroup
  AvatarGroupStyleProps,
  AvatarGroupSize,
  AvatarGroupSpacing,
  // Breadcrumb
  BreadcrumbStyleProps,
  BreadcrumbSize,
  BreadcrumbItemStyleProps,
  // Accordion
  AccordionStyleProps,
  AccordionType,
  AccordionSize,
  AccordionVariant,
  AccordionItemStyleProps,
  AccordionTriggerStyleProps,
  AccordionContentStyleProps,
  // Drawer
  DrawerStyleProps,
  DrawerPosition,
  DrawerSize,
  // Pagination
  PaginationStyleProps,
  PaginationVariant,
  PaginationSize,
  PaginationShape,
  PaginationItemStyleProps,
  // Menu
  MenuStyleProps,
  MenuSize,
  MenuItemStyleProps,
  MenuDividerStyleProps,
  MenuGroupStyleProps,
  // Table
  TableStyleProps,
  TableVariant,
  TableSize,
  TableAlign,
  TableHeadStyleProps,
  TableBodyStyleProps,
  TableRowStyleProps,
  TableCellStyleProps,
  TableHeaderCellStyleProps,
  // Slider
  SliderStyleProps,
  SliderSize,
  SliderColor,
  SliderOrientation,
  SliderTrackStyleProps,
  SliderFillStyleProps,
  SliderThumbStyleProps,
  // Popover
  PopoverStyleProps,
  PopoverPosition,
  PopoverSize,
  PopoverVariant,
  PopoverArrowStyleProps,
} from '@woosgem-dev/core';
