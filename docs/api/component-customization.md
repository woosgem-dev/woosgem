# Component Customization Policy

컴포넌트 커스터마이즈/오버라이드 정책을 정의합니다.

## 커스터마이즈 레벨

| Level | 범위 | 예시 | 권장 |
|-------|------|------|------|
| **L1 (Props)** | DS 제공 props | `variant`, `color`, `size` | 적극 활용 |
| **L2 (Additive)** | 추가 스타일/속성 | `className`, `style`, `data-testid` | 허용 |
| **L3 (Override)** | 내부 동작 변경 | `disabled` 직접 제어 | 제한적 |
| **L4 (Extend)** | 컴포넌트 확장 | 래핑 컴포넌트 | 별도 API |

## 오버라이드 정책

### 허용 (O)

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

### 차단 (X) - 보호 속성

| 항목 | 이유 |
|------|------|
| data-variant | 디자인 일관성 |
| data-color | 디자인 일관성 |
| data-size | 디자인 일관성 |
| data-state | 상태 관리 무결성 |
| data-full-width | 레이아웃 일관성 |
| class (직접) | className으로만 추가 |

### 제한적 허용

| 항목 | 정책 |
|------|------|
| disabled | 허용, 단 `loading=true`면 무조건 disabled |

## Props 우선순위

```
1. Core 보호 속성 (절대 오버라이드 불가)
   └─ data-variant, data-color, data-size, data-state, data-full-width, class

2. Core + 사용자 조건부
   └─ disabled (loading=true면 core 우선)

3. 사용자 자유 속성
   └─ className, style, aria-*, data-testid, 이벤트 핸들러, native 속성
```

## 에러 처리 정책

| 상황 | 처리 | 환경 |
|------|------|------|
| 보호 속성 오버라이드 시도 | 무시 + console.warn | DEV only |
| 잘못된 prop 값 | defaultProps 적용 + console.warn | DEV only |
| undefined/null 전달 | defaultProps 적용 | All |
| 빈 문자열 전달 | defaultProps 적용 | All |

## TypeScript 타입 정책

```typescript
// 보호 속성 타입에서 'never'로 차단하여 오버라이드 방지
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

## 확장 패턴

### 래핑 (권장)

```tsx
function IconButton({ icon, children, ...props }: IconButtonProps) {
  return (
    <Button {...props}>
      {icon}
      <span>{children}</span>
    </Button>
  );
}
```

### Core 확장 (고급)

```typescript
import { Button as ButtonDef } from '@woosgem/ds-core';

const CustomButton = {
  ...ButtonDef,
  defaultProps: {
    ...ButtonDef.defaultProps,
    variant: 'ghost',
  },
} as const;
```

## 구현 상태

| 항목 | 상태 | 비고 |
|------|------|------|
| className 병합 | ✅ 완료 | |
| style prop | ✅ 완료 | nativeProps로 전달 |
| 보호 속성 필터링 | ✅ 완료 | attrs가 nativeProps 덮어씀 |
| type 기본값 | ✅ 완료 | Button: `type="button"` |
| 타입 확장 | ✅ 완료 | ComponentPropsWithoutRef 기반 |
| DEV 경고 | ❌ 미구현 | 추가 필요 |
