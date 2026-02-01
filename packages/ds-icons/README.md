# @woosgem/ds-icons

WooSGem 디자인 시스템을 위한 순수 SVG 아이콘 에셋 패키지입니다.

## 구조

```
svg/
├── alert-circle.svg
├── arrow-left.svg
├── bell.svg
└── ... (48개 아이콘)
```

모든 아이콘은 `viewBox="0 0 24 24"` 기준이며, CSS로 5가지 사이즈를 지원합니다.

| 사이즈 | 픽셀 | 용도 |
|--------|------|------|
| xs | 12px | 뱃지, 태그 내 아이콘 |
| sm | 16px | 인라인 텍스트, 작은 버튼 |
| md | 20px | 기본 버튼, 입력 필드 (기본값) |
| lg | 24px | 네비게이션, 강조 아이콘 |
| xl | 32px | 히어로, 빈 상태 표시 |

## 사용법

### React
```tsx
import { Icon } from '@woosgem/ds-react';

// 인라인 SVG와 함께 사용
<Icon size="md" color="primary">
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="..." />
  </svg>
</Icon>
```

### Vue
```vue
<template>
  <Icon size="lg" color="danger">
    <svg viewBox="0 0 24 24">...</svg>
  </Icon>
</template>
```

## 제작 가이드라인

### 1. 그리드 시스템
- **기준 캔버스**: 24x24 px (`viewBox="0 0 24 24"`)
- **라이브 영역**: 20x20 px (상하좌우 2px 여백)
- **width/height 속성**: 제거 (CSS가 제어)

### 2. 스타일 규칙
- **색상**: `fill="currentColor"` 또는 `stroke="currentColor"` 사용
- **패스**: 가능한 한 패스를 합치고 단순화
- **명명**: `kebab-case` (예: `arrow-right.svg`)

### 3. 작업 프로세스
1. `svg/` 디렉토리에 24x24 viewBox 기준 SVG 추가
2. width/height 속성 제거 확인
3. 최적화 실행:
   ```bash
   pnpm run optimize
   ```

## 최적화 (SVGO)

`svgo.config.js` 설정:
- `viewBox` 유지
- 불필요한 메타데이터 삭제
- `fill="currentColor"` 강제 적용
- `width`/`height` 속성 제거
