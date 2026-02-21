import { LitElement, html } from 'lit';
import type { TemplateResult, PropertyDeclaration } from 'lit';
import type { ComponentDefinition } from '@woosgem-dev/core';

type AnyComponentDef = ComponentDefinition<any, any, any>;

/**
 * Property definition interface
 */
export interface PropDefinition {
  type: typeof String | typeof Number | typeof Boolean;
  default?: unknown;
  attribute?: string;
  reflect?: boolean;
}

/**
 * createComponent options
 */
export interface CreateComponentOptions<StyleProps> {
  /** Component property definitions */
  props: {
    [K in keyof StyleProps]?: PropDefinition;
  };
  /** Additional event handlers */
  events?: {
    click?: (e: MouseEvent, component: LitElement) => void;
    keydown?: (e: KeyboardEvent, component: LitElement) => void;
  };
}

/**
 * Helper to apply attributes to a DOM element
 */
export function applyAttrsToElement(
  element: HTMLElement,
  attrs: Record<string, unknown>
): void {
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'class') {
      const classes = String(value).split(' ').filter(Boolean);
      classes.forEach(cls => element.classList.add(cls));
    } else if (value === undefined || value === null || value === false) {
      element.removeAttribute(key);
    } else if (value === true) {
      // data-* attributes use 'true' string, standard boolean attributes use empty string
      element.setAttribute(key, key.startsWith('data-') ? 'true' : '');
    } else {
      element.setAttribute(key, String(value));
    }
  });
}

/**
 * Factory function to create a Lit Web Component from a core ComponentDefinition
 *
 * @example
 * ```ts
 * import { Button } from '@woosgem-dev/core';
 *
 * const WgButton = createComponent(Button, 'wg-button', {
 *   props: {
 *     variant: { type: String, default: 'filled' },
 *     color: { type: String, default: 'primary' },
 *     size: { type: String, default: 'md' },
 *     loading: { type: Boolean, default: false },
 *     disabled: { type: Boolean, default: false },
 *     fullWidth: { type: Boolean, default: false, attribute: 'full-width' },
 *   }
 * });
 *
 * customElements.define('wg-button', WgButton);
 * ```
 */
export function createComponent<
  Def extends AnyComponentDef,
>(
  coreDefinition: Def,
  tagName: string,
  options: CreateComponentOptions<Def['defaultProps']>
): typeof LitElement {
  const { defaultProps, mapPropsToAttrs } = coreDefinition;
  const { props, events } = options;

  // Generate Lit property declarations
  const properties: Record<string, PropertyDeclaration> = {};

  for (const [key, def] of Object.entries(props)) {
    if (def) {
      const propDef = def as PropDefinition;
      properties[key] = {
        type: propDef.type,
        reflect: propDef.reflect ?? true,
        attribute: propDef.attribute,
      };
    }
  }

  // Create dynamic component class
  class GeneratedComponent extends LitElement {
    static override properties = properties;

    // Set property defaults
    constructor() {
      super();

      // Set defaults from props
      for (const [key, def] of Object.entries(props)) {
        if (def) {
          const propDef = def as PropDefinition;
          const defaultValue = propDef.default ?? (defaultProps as Record<string, unknown>)[key];
          if (defaultValue !== undefined) {
            (this as Record<string, unknown>)[key] = defaultValue;
          }
        }
      }
    }

    // Use Light DOM
    override createRenderRoot(): HTMLElement {
      return this;
    }

    // Apply core-generated attributes
    private applyAttrs(): void {
      const styleProps: Record<string, unknown> = {};

      for (const key of Object.keys(props)) {
        styleProps[key] = (this as Record<string, unknown>)[key];
      }

      const attrs = mapPropsToAttrs(styleProps as Def['defaultProps']);
      applyAttrsToElement(this, attrs as Record<string, unknown>);
    }

    override updated(): void {
      this.applyAttrs();
    }

    override connectedCallback(): void {
      super.connectedCallback();
      this.applyAttrs();
    }

    // Click handler
    private handleClick(e: MouseEvent): void {
      if (events?.click) {
        events.click(e, this);
      }
    }

    override render(): TemplateResult {
      return html`<slot @click=${this.handleClick}></slot>`;
    }
  }

  // Set tag name for debugging
  Object.defineProperty(GeneratedComponent, 'name', { value: tagName });

  return GeneratedComponent as typeof LitElement;
}

/**
 * Helper to dispatch a custom event
 */
export function emitEvent(
  element: HTMLElement,
  eventName: string,
  detail?: unknown
): boolean {
  return element.dispatchEvent(
    new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail,
    })
  );
}
