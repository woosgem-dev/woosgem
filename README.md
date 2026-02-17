# WooSGem

[English](./README.en.md) | **한국어**

### Build & Quality
[![CI](https://github.com/woosgem-dev/woosgem/actions/workflows/test.yml/badge.svg)](https://github.com/woosgem-dev/woosgem/actions/workflows/test.yml)
[![Tests](https://img.shields.io/badge/tests-1136%20passed-brightgreen)](./docs/test-report.md)
[![Coverage](https://img.shields.io/badge/coverage-68%25-brightgreen)](./docs/test-report.md)

### Project Status
[![Components](https://img.shields.io/badge/components-25-blue)](./docs/roadmap.md)
[![Storybook](https://img.shields.io/badge/stories-191-blueviolet)](./packages/ds-storybook)
[![Vibe Coding](https://img.shields.io/badge/Vibe%20Coding-Claude%20Code-orange)](https://claude.ai/code)
[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

모던 웹 애플리케이션을 위한 확장 가능하고 테마를 지원하는 디자인 시스템입니다.
이 프로젝트는 **Claude Code**를 활용한 **바이브코딩(Vibe Coding)**으로 제작되었습니다.

## Dashboard
- [Test & Coverage 상세 리포트](./docs/test-report.md)

## Quick Links

- [API Docs](./docs/api/)
- [Getting Started](./docs/guides/getting-started.md)
- [Roadmap](./docs/roadmap.md)

## 특징

- **다중 프레임워크 지원**: React, Vue, Lit(Web Components) 컴포넌트 제공
- **테마 시스템**: 런타임 테마 전환 및 빌드타임 테마 분리 지원
- **Color Set Protocol**: 최소 입력으로 81개 토큰 자동 생성
- **접근성(a11y)**: WAI-ARIA 패턴 준수, 키보드 내비게이션 지원
- **아이콘 시스템**: 멀티 사이즈(sm, md, lg) 및 테마(`currentColor`) 대응 SVG 에셋
- **타입 안전성**: TypeScript로 작성되어 완벽한 타입 지원
- **모노레포 구조**: Turborepo를 활용한 효율적인 빌드 시스템
- **Storybook**: 인터랙티브한 컴포넌트 문서 및 데모

## 설치

### React

```bash
# npm
npm install @woosgem-dev/react @woosgem-dev/styles

# pnpm
pnpm add @woosgem-dev/react @woosgem-dev/styles

# yarn
yarn add @woosgem-dev/react @woosgem-dev/styles
```

### Vue

```bash
# npm
npm install @woosgem-dev/vue @woosgem-dev/styles

# pnpm
pnpm add @woosgem-dev/vue @woosgem-dev/styles

# yarn
yarn add @woosgem-dev/vue @woosgem-dev/styles
```

### Lit (Web Components)

```bash
# npm
npm install @woosgem-dev/lit @woosgem-dev/styles

# pnpm
pnpm add @woosgem-dev/lit @woosgem-dev/styles

# yarn
yarn add @woosgem-dev/lit @woosgem-dev/styles
```

## 빠른 시작

### React

```typescript
// main.tsx 또는 App.tsx
import '@woosgem-dev/styles';
import { Button, Badge, Input } from '@woosgem-dev/react';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        클릭하세요
      </Button>

      <Badge variant="success" size="sm">
        새 메시지
      </Badge>

      <Input
        placeholder="이메일을 입력하세요"
        fullWidth
      />
    </div>
  );
}

export default App;
```

## 컴포넌트

현재 **25개 컴포넌트**가 제공됩니다.

| 프레임워크 | 컴포넌트 수 |
|-----------|------------|
| React | 25 |
| Lit | 22 |
| Vue | 21 |

### Action (2)
- **Button** - filled/outline/ghost/link 변형, 6가지 색상 (primary/secondary/danger/success/warning/info)
- **IconButton** - 아이콘 전용 버튼, 3가지 형태 (circle/square/none)

### Form (6)
- **Input** - outline/filled/underline 변형, error/success 상태
- **Textarea** - outline/filled 변형, resize 옵션 (none/vertical/horizontal/both)
- **Checkbox** - headless compound 패턴
- **Radio** - RadioGroup 포함, horizontal/vertical 레이아웃
- **Switch** - 토글 스위치, 3가지 색상 (primary/secondary/success)
- **Select** - 드롭다운 선택, 키보드 내비게이션 지원

### Feedback (4)
- **Alert** - info/success/warning/error 상태, filled/outline/subtle 변형, closable 옵션
- **Spinner** - 로딩 인디케이터, 4가지 크기 (xs/sm/md/lg)
- **Toast** - 알림 메시지, 자동 닫힘 지원
- **Progress** - 진행률 표시, 다양한 크기 및 색상

### Data Display (5)
- **Badge** - filled/outline/subtle 변형, 6가지 색상
- **Avatar** - circle/square 형태, xs~xl 크기
- **ListItem** - 리스트 아이템
- **Card** - 콘텐츠 컨테이너, header/body/footer 구조
- **Skeleton** - 로딩 플레이스홀더, 다양한 형태 지원

### Navigation (2)
- **Tab** - underline/filled 변형, primary/secondary 색상
- **SegmentedControl** - 세그먼트 컨트롤

### Overlay (3)
- **Modal** - 다이얼로그, 포커스 트랩 지원
- **Tooltip** - 툴팁, 다양한 위치 옵션
- **Overlay** - 오버레이 백드롭

### Layout (2)
- **Divider** - 6가지 색상 지원 (default/muted/primary/secondary/danger/success)
- **Kbd** - 키보드 단축키 표시

### Utility (1)
- **Icon** - SVG 아이콘 래퍼, 멀티 사이즈 지원

> 전체 컴포넌트 로드맵은 [Roadmap](./docs/roadmap.md)을 참고하세요.

## 테마 시스템

### 사용 가능한 테마

- **default** - 라이트 테마 (기본)
- **dark** - 다크 테마 (Carbon-inspired)

### 런타임 테마 전환

```typescript
// 모든 테마 포함
import '@woosgem-dev/styles';

// 테마 전환
function setTheme(theme: 'default' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
}

function ThemeSwitcher() {
  return (
    <div>
      <button onClick={() => setTheme('default')}>라이트</button>
      <button onClick={() => setTheme('dark')}>다크</button>
    </div>
  );
}
```

### 빌드타임 테마 분리

번들 크기를 줄이기 위해 특정 테마만 로드:

```typescript
// 다크 테마만 사용
import '@woosgem-dev/styles/themes/dark';

// 또는 라이트 테마만
import '@woosgem-dev/styles/themes/default';
```

## Color Set Protocol (CSP)

최소한의 입력으로 완전한 테마를 생성하는 프로토콜입니다.

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem-dev/core';

// 최소 정의 (4개 필드만 필수)
const myTheme = {
  id: 'brand',
  name: 'Brand Theme',
  mode: 'light',
  primary: { base: '#2563EB' },
};

// 81개 토큰 자동 생성
const resolved = generateColorSet(myTheme);

// CSS Custom Properties 출력
const css = generateThemeCSS(resolved);
```

### Smart Defaults

- `primary.base` 하나만 지정하면 81개 색상 토큰 자동 생성
- 모드(light/dark)에 따라 적절한 기본값 적용
- hover, active, alpha 상태 자동 파생

> 전체 스키마는 [docs/api/csp.md](./docs/api/csp.md)에서 확인할 수 있습니다.

## 개발

### 요구사항

- Node.js >= 18
- pnpm >= 10.28.2

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 모드
pnpm dev

# 빌드
pnpm build

# Storybook 실행
pnpm --filter @woosgem-dev/storybook dev

# 테스트
pnpm test:all
```

### 프로젝트 구조

```
woosgem/
├── packages/
│   ├── ds-core/      # 컴포넌트 정의 + CSP + 토큰 시스템
│   ├── ds-headless/  # Headless primitives (vanilla + React hooks + Vue composables)
│   ├── ds-react/     # React 컴포넌트 (25개)
│   ├── ds-vue/       # Vue 컴포넌트 (25개)
│   ├── ds-lit/       # Lit Web Components (25개)
│   ├── ds-styles/    # SCSS 스타일 및 테마 (default/dark)
│   ├── ds-icons/     # SVG 아이콘 에셋 (sm/md/lg)
│   ├── ds-storybook/ # Storybook
│   └── utils/        # 유틸리티 함수
├── turbo.json         # Turborepo 설정
└── pnpm-workspace.yaml
```

## 기여하기

### 새 컴포넌트 추가

1. `packages/ds-core/src/components`에 컴포넌트 정의 추가
2. `packages/ds-styles/src/components`에 스타일 추가
3. `packages/ds-react/src`, `packages/ds-vue/src`, `packages/ds-lit/src`에 프레임워크별 구현 추가
4. `packages/ds-storybook/src/stories`에 스토리 추가
5. 각 패키지의 `__tests__/`에 테스트 추가

### 새 테마 추가 (CSP 사용)

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem-dev/core';

const newTheme = {
  id: 'custom',
  name: 'Custom Theme',
  mode: 'light',
  primary: { base: '#YOUR_COLOR' },
  // 선택사항: secondary, semantic, text, background 등
};

const css = generateThemeCSS(generateColorSet(newTheme));
```

## 라이선스

MIT
