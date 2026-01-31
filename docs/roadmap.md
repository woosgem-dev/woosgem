# Project Status & TODOs

## 완성된 컴포넌트

| 컴포넌트 | Core | React | Vue | Styles | Storybook | Tests |
|---------|:----:|:-----:|:---:|:------:|:---------:|:-----:|
| Button | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| IconButton | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Input | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Checkbox | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Badge | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tab | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Avatar | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ListItem | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| SegmentedControl | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Divider | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 완성된 시스템

- [x] CSP (Color Set Protocol)
  - [x] Schema 정의
  - [x] Generator (81개 토큰)
  - [x] Smart Defaults (Light/Dark)
  - [x] Transformer (색상 변환)
  - [x] Validation (스키마/대비)
  - [x] Output (CSS/SCSS/TS)
  - [x] Presets (default, dark)
- [x] 아이콘 시스템 (@woosgem/ds-icons)
  - [x] 48종 필수 아이콘 제작
  - [x] 멀티 사이즈 (sm, md, lg) 자동 생성 스크립트
  - [x] SVGO 최적화 파이프라인
  - [x] 테마(`currentColor`) 대응
- [x] 테마 시스템
  - [x] CSS Custom Properties
  - [x] Runtime 전환 (`data-theme`)
  - [x] default 테마
  - [x] dark 테마
- [x] 빌드 시스템
  - [x] Turborepo 설정
  - [x] TypeScript 빌드
  - [x] SCSS 빌드

## TODO

### 높은 우선순위

- [ ] 새 컴포넌트 테스트 추가 (Tab, Avatar, ListItem, SegmentedControl, Divider)
- [ ] Vue 컴포넌트 검증 (Tab, Avatar, ListItem, SegmentedControl, Divider)
- [ ] Storybook 스토리 검증/추가

### 중간 우선순위

- [ ] CSP를 실제 SCSS 테마 생성에 연동
- [ ] 테마 빌드 자동화 (CSP → SCSS → CSS)
- [ ] 접근성(a11y) 테스트 추가

### 낮은 우선순위

- [ ] 애니메이션 시스템
- [ ] Figma 플러그인
- [ ] Svelte 지원

---

## 컴포넌트 로드맵

현재 10개 구현 완료 → 주요 디자인 시스템 대비 **약 40% 커버리지**

### P0 - 즉시 필요 (MVP)

| 컴포넌트 | 필요 이유 | 연관 컴포넌트 |
|---------|----------|--------------|
| **Modal** | 거의 모든 앱 필수 | Button (확인/취소) |
| **Select** | 폼 핵심 요소 | Input과 쌍 |
| **Toast** | 사용자 피드백 필수 | Badge (상태) |
| **Radio** | 단일 선택 폼 요소 | Checkbox와 쌍 |
| **Switch** | on/off 토글 | Checkbox 변형 |
| **Spinner** | 로딩 상태 표시 | Button (loading) |
| **Card** | 콘텐츠 그룹핑 기본 단위 | ListItem, Badge, Avatar |

### P1 - 다음 단계 (v1.1)

| 컴포넌트 | 필요 이유 | 연관 컴포넌트 |
|---------|----------|--------------|
| **Tooltip** | 추가 정보 제공, 접근성 | IconButton |
| **Textarea** | 여러 줄 텍스트 입력 | Input 확장 |
| **Progress** | 진행 상태 시각화 | Spinner와 함께 |
| **Skeleton** | 로딩 UX 개선 | Card, ListItem |
| **Alert** | 중요 정보/경고 표시 | Badge, Toast |
| **Menu** | 컨텍스트 메뉴, 액션 목록 | IconButton (트리거) |
| **Popover** | 컨텍스트 정보 표시 | Tooltip 확장 |
| **Breadcrumb** | 네비게이션 경로 | Tab |

### P2 - 장기 (v2.0)

| 컴포넌트 | 필요 이유 |
|---------|----------|
| **Table** | 데이터 목록 표시 |
| **Pagination** | 대량 데이터 탐색 |
| **Slider** | 범위 값 입력 |
| **DatePicker** | 날짜 선택 |
| **Accordion** | 접을 수 있는 콘텐츠 |
| **Stepper** | 다단계 프로세스 |
| **Tree** | 계층 구조 표시 |
| **Drawer** | 사이드 패널 |
| **AvatarGroup** | 여러 사용자 표시 |
| **Tag/Chip** | 태그 입력, 필터링 |

### 권장 구현 순서

```
Phase 1: Modal → Toast → Spinner → Tooltip → Select
Phase 2: Radio → Switch → Textarea → Alert
Phase 3: Card → Skeleton → Menu → Popover → Progress
Phase 4: Table, DatePicker, Pagination 등 고급 컴포넌트
```

### 카테고리별 Gap

| 카테고리 | 현재 | 필요 | Gap |
|---------|:----:|:----:|:---:|
| Action | 2 | 2 | ✅ |
| Form | 2 | 7 | -5 |
| Data Display | 3 | 7 | -4 |
| Feedback | 0 | 4 | -4 |
| Navigation | 2 | 4 | -2 |
| Overlay | 0 | 4 | -4 |
| Layout | 1 | 2 | -1 |

## 최근 변경사항

- [x] CSP 구현 완료
- [x] Smart defaults 적용 (primary.base → 81 tokens)
- [x] 내부 문서 정리 (docs/ → .claude/)
- [x] README 업데이트 (상태 배지 및 대시보드 연동)
- [x] @woosgem/ds-icons 시스템 구축 및 48종 에셋 완료
- [x] React 컴포넌트 타입 시스템 개선 (표준 HTML 속성 확장 및 보호 속성 차단)
- [x] Vue 컴포넌트 보호 속성 정책 동기화
- [x] pnpm 엄격 모드 적용 (hoist 제거) 및 의존성 최적화
- [x] 모든 테스트를 @woosgem/ds-test 패키지로 통합 및 빌드 의존성 제거

## 테스트 현황

- [x] 전체 295개 테스트 통과 (Core 190, React 58, Vue 47)
- [x] 커버리지 62% 달성 (목표 60% 달성)
- [x] 모든 10개 컴포넌트에 대한 Core/React/Vue 테스트 스위트 구축

## 명령어

```bash
pnpm install          # 의존성 설치
pnpm build            # 전체 빌드
pnpm test:all         # 전체 테스트 실행
pnpm test:dashboard   # 테스트 실행 및 대시보드 업데이트
pnpm dev              # 개발 모드 (Turbo)
```
