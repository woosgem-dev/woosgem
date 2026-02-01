import { LitElement, html } from 'lit';
import type { TemplateResult, PropertyDeclaration } from 'lit';

/**
 * Core 컴포넌트 정의 타입
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
 * Property 정의 타입
 */
export interface PropDefinition {
  type: typeof String | typeof Number | typeof Boolean;
  default?: unknown;
  attribute?: string;
  reflect?: boolean;
}

/**
 * createComponent 옵션
 */
export interface CreateComponentOptions<StyleProps> {
  /** 컴포넌트 프로퍼티 정의 */
  props: {
    [K in keyof StyleProps]?: PropDefinition;
  };
  /** 추가 이벤트 핸들러 */
  events?: {
    click?: (e: MouseEvent, component: LitElement) => void;
    keydown?: (e: KeyboardEvent, component: LitElement) => void;
  };
}

/**
 * 속성을 DOM에 적용하는 헬퍼
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
      element.setAttribute(key, '');
    } else {
      element.setAttribute(key, String(value));
    }
  });
}

/**
 * Core 컴포넌트를 Lit Web Component로 변환하는 팩토리 함수
 *
 * @example
 * ```ts
 * import { Button } from '@woosgem/ds-core';
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

  // Lit properties 정의 생성
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

  // 동적 클래스 생성
  class GeneratedComponent extends LitElement {
    static properties = properties;

    // 프로퍼티 기본값 설정
    constructor() {
      super();

      // props에서 기본값 설정
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

    // Light DOM 사용
    createRenderRoot(): HTMLElement {
      return this;
    }

    // Core에서 생성된 attrs를 적용
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

    // 클릭 핸들러
    private handleClick(e: MouseEvent): void {
      if (events?.click) {
        events.click(e, this);
      }
    }

    render(): TemplateResult {
      return html`<slot @click=${this.handleClick}></slot>`;
    }
  }

  // 태그 이름 저장 (디버깅용)
  Object.defineProperty(GeneratedComponent, 'name', { value: tagName });

  return GeneratedComponent as typeof LitElement;
}

/**
 * 이벤트를 발생시키는 헬퍼
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
