import { LitElement, html } from 'lit';
import type { TemplateResult, PropertyDeclaration } from 'lit';

/**
 * Core ì»´í¬?ŒíŠ¸ ?•ì˜ ?€??
 */
export interface CoreComponentDefinition<
  StyleProps,
  Attrs,
> {
  displayName: string;
  defaultProps: Partial<StyleProps>;
  mapPropsToAttrs: (props: StyleProps) => Attrs;
  template: {
    tag: string;
    slots: readonly string[];
  };
}

/**
 * Property ?•ì˜ ?€??
 */
export interface PropDefinition {
  type: typeof String | typeof Number | typeof Boolean;
  default?: unknown;
  attribute?: string;
  reflect?: boolean;
}

/**
 * createComponent ?µì…˜
 */
export interface CreateComponentOptions<StyleProps> {
  /** ì»´í¬?ŒíŠ¸ ?„ë¡œ?¼í‹° ?•ì˜ */
  props: {
    [K in keyof StyleProps]?: PropDefinition;
  };
  /** ì¶”ê? ?´ë²¤???¸ë“¤??*/
  events?: {
    click?: (e: MouseEvent, component: LitElement) => void;
    keydown?: (e: KeyboardEvent, component: LitElement) => void;
  };
}

/**
 * ?ì„±??DOM???ìš©?˜ëŠ” ?¬í¼
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
      // data-* ?ì„±?€ 'true' ë¬¸ì?´ë¡œ, ?¼ë°˜ boolean ?ì„±?€ ë¹?ë¬¸ì?´ë¡œ
      element.setAttribute(key, key.startsWith('data-') ? 'true' : '');
    } else {
      element.setAttribute(key, String(value));
    }
  });
}

/**
 * Core ì»´í¬?ŒíŠ¸ë¥?Lit Web Componentë¡?ë³€?˜í•˜???©í† ë¦??¨ìˆ˜
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
  StyleProps,
  Attrs,
>(
  coreDefinition: CoreComponentDefinition<StyleProps, Attrs>,
  tagName: string,
  options: CreateComponentOptions<StyleProps>
): typeof LitElement {
  const { defaultProps, mapPropsToAttrs } = coreDefinition;
  const { props, events } = options;

  // Lit properties ?•ì˜ ?ì„±
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

  // ?™ì  ?´ë˜???ì„±
  class GeneratedComponent extends LitElement {
    static properties = properties;

    // ?„ë¡œ?¼í‹° ê¸°ë³¸ê°??¤ì •
    constructor() {
      super();

      // props?ì„œ ê¸°ë³¸ê°??¤ì •
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

    // Light DOM ?¬ìš©
    createRenderRoot(): HTMLElement {
      return this;
    }

    // Core?ì„œ ?ì„±??attrsë¥??ìš©
    private applyAttrs(): void {
      const styleProps: Record<string, unknown> = {};

      for (const key of Object.keys(props)) {
        styleProps[key] = (this as Record<string, unknown>)[key];
      }

      const attrs = mapPropsToAttrs(styleProps as StyleProps);
      applyAttrsToElement(this, attrs as Record<string, unknown>);
    }

    updated(): void {
      this.applyAttrs();
    }

    connectedCallback(): void {
      super.connectedCallback();
      this.applyAttrs();
    }

    // ?´ë¦­ ?¸ë“¤??
    private handleClick(e: MouseEvent): void {
      if (events?.click) {
        events.click(e, this);
      }
    }

    render(): TemplateResult {
      return html`<slot @click=${this.handleClick}></slot>`;
    }
  }

  // ?œê·¸ ?´ë¦„ ?€??(?”ë²„ê¹…ìš©)
  Object.defineProperty(GeneratedComponent, 'name', { value: tagName });

  return GeneratedComponent as typeof LitElement;
}

/**
 * ?´ë²¤?¸ë? ë°œìƒ?œí‚¤???¬í¼
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
