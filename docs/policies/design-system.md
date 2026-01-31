# WooSGem Design System 정책

이 문서는 WooSGem Design System의 핵심 정책과 설계 원칙을 정의합니다.

---

## 1. 아키텍처 원칙

### 1.1 Core/Wrapper 분리

```
┌─────────────────────────────────────────────────────┐
│                    ds-core                          │
│  ┌───────────────────────────────────────────────┐  │
│  │  ComponentDefinition                          │  │
│  │  - displayName                                │  │
│  │  - defaultProps                               │  │
│  │  - propTypes                                  │  │
│  │  - mapPropsToAttrs() → DOM 속성               │  │
│  │  - template (tag, slots)                      │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         ▼                               ▼
┌─────────────────────┐       ┌─────────────────────┐
│     ds-react        │       │      ds-vue         │
│  createComponent()  │       │  createComponent()  │
│  - forwardRef       │       │  - defineComponent  │
│  - memo             │       │  - computed attrs   │
│  - className 병합   │       │  - class 병합       │
│  - 보호 속성 적용   │       │  - inheritAttrs:false│
└─────────────────────┘       └─────────────────────┘
```

**원칙:**
- **Single Source of Truth**: 모든 스타일 로직은 Core에서 정의
- **Framework Agnostic**: Core는 프레임워크 독립적
- **Wrapper는 얇게**: Wrapper는 프레임워크 바인딩만 담당

### 1.2 Props 설계 원칙

| 구분 | 정의 위치 | 예시 |
|------|----------|------|
| **Style Props** | Core defaultProps | `variant`, `color`, `size`, `loading`, `disabled` |
| **Native Props** | Wrapper 타입 정의 | `onClick`, `className`, `aria-label`, `ref` |
| **Protected Attrs** | Core mapPropsToAttrs | `data-variant`, `data-color`, `data-state` |

**Style Props 규칙:**
- 반드시 defaultProps에 기본값 정의
- propTypes에 허용 값 목록 정의
- mapPropsToAttrs에서 data-* 속성으로 변환

---

## 2. 상태 관리 정책

### 2.1 상태 우선순위

```
우선순위 (높음 → 낮음):
loading > disabled > error > success > normal
```

**구현:**
```typescript
// Core mapPropsToAttrs 내부
const attrs = {
  'data-state': loading ? 'loading'
              : disabled ? 'disabled'
              : error ? 'error'
              : success ? 'success'
              : undefined
};
```

**예시:**
| loading | disabled | error | success | data-state |
|---------|----------|-------|---------|------------|
| true | true | true | true | `'loading'` |
| false | true | true | true | `'disabled'` |
| false | false | true | true | `'error'` |
| false | false | false | true | `'success'` |
| false | false | false | false | `undefined` |

### 2.2 disabled 속성 규칙

- `loading=true` → 자동으로 `disabled=true` (사용자 입력 불가)
- `disabled=true` 직접 설정 허용
- `loading=true, disabled=false` → disabled=true (loading 우선)

---

## 3. 에러 처리 정책

### 3.1 Props 검증

| 상황 | 처리 | 환경 |
|------|------|------|
| props 미전달 | defaultProps 적용 | All |
| `undefined` 전달 | defaultProps 적용 | All |
| `null` 전달 | defaultProps 적용 | All |
| 빈 문자열 `''` 전달 | defaultProps 적용 | All |
| 유효하지 않은 값 | defaultProps + console.warn | DEV only |

### 3.2 에러 처리 구현 (권장)

```typescript
// Core mapPropsToAttrs 내부
const safeVariant = ButtonVariants.includes(merged.variant)
  ? merged.variant
  : Button.defaultProps.variant;

if (process.env.NODE_ENV !== 'production') {
  if (merged.variant && merged.variant !== safeVariant) {
    console.warn(
      `[Button] Invalid variant "${merged.variant}". ` +
      `Expected one of: ${ButtonVariants.join(', ')}. ` +
      `Using default "${safeVariant}".`
    );
  }
}
```

### 3.3 경고 메시지 형식

```
[ComponentName] 문제 설명. Expected: 허용값. Using default: 기본값.
```

**예시:**
```
[Button] Invalid variant "invalid". Expected one of: filled, outline, ghost, link. Using default "filled".
[Input] Invalid size "xxl". Expected one of: xs, sm, md, lg. Using default "md".
```

---

## 4. 보호 속성 정책

### 4.1 보호 속성 목록

다음 속성들은 Core에서 관리하며 사용자가 오버라이드할 수 없습니다. React에서는 타입 레벨(`never`)에서 차단되며, Vue에서는 런타임 필터링을 통해 차단됩니다.

| 속성 | 이유 |
|------|------|
| `data-variant` | 디자인 일관성 |
| `data-color` | 디자인 일관성 |
| `data-size` | 디자인 일관성 |
| `data-state` | 상태 관리 무결성 (loading, disabled, error 등) |
| `data-full-width` | 레이아웃 일관성 |
| `data-shape` | 아이콘/아바타 모양 일관성 |
| `data-divider` | 리스트 아이템 구분선 상태 |
| `data-has-image` | 아바타 이미지 존재 여부 |
| `data-orientation` | 구분선 방향 일관성 |
| `data-spacing` | 구분선 간격 일관성 |
| `role` | 접근성 일관성 (WAI-ARIA) |
| `aria-selected` | 접근성 상태 관리 (Tab, ListItem) |
| `aria-disabled` | 접근성 상태 관리 (ListItem) |
| `aria-orientation` | 접근성 상태 관리 (Divider) |

### 4.2 구현 방식

**React (Type-level Protection):**
컴포넌트의 Props 타입 정의 시 `ComponentPropsWithoutRef`를 사용하고, 보호 속성들을 `never` 타입으로 정의하여 오버라이드 시도를 컴파일 타임에 차단합니다.

```typescript
export type ButtonProps = Prettify<
  ButtonStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      keyof ButtonStyleProps | 'data-variant' | 'data-color' | 'data-size' | 'data-state' | 'data-full-width'
    > & {
      'data-variant'?: never;
      'data-color'?: never;
      'data-size'?: never;
      'data-state'?: never;
      'data-full-width'?: never;
    }
>;
```

**Vue (Runtime Protection):**
`createComponent` 내부에서 `PROTECTED_ATTRS` 세트를 사용하여 사용자가 전달한 `attrs`에서 보호 속성을 필터링합니다.

```typescript
const PROTECTED_ATTRS = new Set([
  'data-variant', 'data-color', 'data-size', 'data-state',
  'data-full-width', 'data-shape', 'data-divider', 'data-has-image',
  'data-orientation', 'data-spacing', 'role', 'aria-selected',
  'aria-disabled', 'aria-orientation'
]);
```

### 4.3 오버라이드 시도 시 동작

```tsx
// 사용자 코드
<Button data-variant="custom" variant="outline">Click</Button>

// 결과: data-variant="outline" (Core 값 유지)
// DEV 환경에서 console.warn 출력 (선택적)
```

---

## 5. 커스터마이즈 정책

### 5.1 커스터마이즈 레벨

| Level | 범위 | 예시 | 권장 |
|-------|------|------|------|
| **L1 (Props)** | DS 제공 props | `variant`, `color`, `size` | 적극 활용 |
| **L2 (Additive)** | 추가 스타일/속성 | `className`, `style`, `data-testid` | 허용 |
| **L3 (Override)** | 내부 동작 변경 | `disabled` 직접 제어 | 제한적 |
| **L4 (Extend)** | 컴포넌트 확장 | 래핑 컴포넌트 | 별도 API |

### 5.2 허용/차단 속성

**허용 (O):**
| 항목 | 방법 | 예시 |
|------|------|------|
| className 추가 | 병합됨 | `className="custom"` → `"btn custom"` |
| style 인라인 | 전달됨 | `style={{ marginTop: 8 }}` |
| data-testid | 전달됨 | `data-testid="submit-btn"` |
| data-* 추가 | 전달됨 | `data-analytics="click"` |
| aria-* 속성 | 전달됨 | `aria-pressed`, `aria-expanded` |
| 이벤트 핸들러 | 전달됨 | `onClick`, `onFocus`, `onBlur` |
| children | 자유 | 아이콘 + 텍스트 |
| ref | forwardRef | DOM 접근 |

**차단 (X):**
| 항목 | 이유 |
|------|------|
| 보호 속성 목록 (4.1 참조) | 디자인 및 접근성 일관성 유지 |
| `class` (직접) | className으로만 추가 (Vue: :class) |

---

## 6. 기본값 정책

### 6.1 Native Props 기본값

| 컴포넌트 | 속성 | 기본값 | 이유 |
|----------|------|--------|------|
| Button | type | `"button"` | form 내 실수로 submit 방지 |
| Input | type | `"text"` | 일반적인 텍스트 입력 |

### 6.2 구현 방식

```typescript
// React createComponent
const BaseButton = createComponent(ButtonDef, { type: 'button' });

// createComponent 내부
const finalProps = {
  ...defaultNativeProps,  // { type: 'button' }
  ...nativeProps,         // 사용자가 명시하면 덮어씀
  ...attrs,
  className: finalClassName,
  ref,
};
```

---

## 7. 테스트 정책

### 7.1 TDD 프로세스

```
1. TC 설계 (planner)     → docs/test-cases/{Component}.md
2. TC 검토 (qa-tester)   → 누락 케이스, 에러 정책 검토
3. 테스트 작성           → 실패하는 테스트 먼저
4. 테스트 실행           → 🔴 실패 확인
5. 구현                  → 테스트 통과하도록 최소 구현
6. 테스트 실행           → 🟢 통과 확인
7. 리팩토링              → 코드 정리 (테스트 유지)
```

### 7.2 테스트 범위

| 영역 | 검증 대상 |
|------|----------|
| **Core** | defaultProps, propTypes, mapPropsToAttrs 로직 |
| **Wrapper** | Core 결과와 DOM 일치, 이벤트 핸들러, 프레임워크 전용 props |
| **보호 속성** | 오버라이드 시도 시 Core 값 유지 |
| **커스터마이즈** | className 병합, style 전달, aria-* 전달 |

### 7.3 커버리지 목표

| 메트릭 | 목표 |
|--------|------|
| Statements | 60% |
| Branches | 60% |
| Functions | 50% |
| Lines | 60% |

---

## 8. 문서 구조

```
docs/
├── api/
│   ├── csp.md                      # CSP 스키마
│   └── component-customization.md  # 커스터마이즈 상세
├── guides/
│   ├── getting-started.md          # 시작 가이드
│   ├── development.md              # 개발 가이드
│   ├── testing.md                  # TDD 테스트 가이드
│   └── code-style.md               # 코드 스타일
├── policies/
│   └── design-system.md            # DS 통합 정책 (이 문서)
├── test-cases/
│   └── Button.md                   # Button TC
├── architecture.md                 # 아키텍처
└── roadmap.md                      # 로드맵
```

---

## 9. 버전 관리

### 9.1 Breaking Changes

다음 변경은 Major 버전 업데이트 필요:

- defaultProps 기본값 변경
- propTypes 옵션 제거
- data-* 속성명 변경
- 상태 우선순위 변경

### 9.2 Non-breaking Changes

다음 변경은 Minor/Patch 버전:

- propTypes 옵션 추가
- 새 컴포넌트 추가
- 버그 수정
- 성능 개선

---

## 부록: 빠른 참조

### Props 타입 체크리스트

새 컴포넌트 추가 시:

- [ ] displayName 정의
- [ ] defaultProps 모든 Style Props에 기본값
- [ ] propTypes 허용 값 목록
- [ ] mapPropsToAttrs data-* 속성 매핑
- [ ] 상태 우선순위 로직 (해당 시)
- [ ] template tag, slots 정의

### Wrapper 구현 체크리스트

- [ ] createComponent 호출
- [ ] 타입 정의 (StyleProps + Native Props)
- [ ] 기본 Native Props 설정 (type="button" 등)
- [ ] forwardRef 지원 (React)
- [ ] inheritAttrs: false (Vue)
