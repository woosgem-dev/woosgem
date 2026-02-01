# WooSGem

### Build & Quality
[![CI](https://github.com/hhk9292/woosgem/actions/workflows/test.yml/badge.svg)](https://github.com/hhk9292/woosgem/actions/workflows/test.yml)
[![Tests](https://img.shields.io/badge/tests-1136%20passed-brightgreen)](./docs/test-report.md)
[![Coverage](https://img.shields.io/badge/coverage-62%25-brightgreen)](./docs/test-report.md)

### Project Status
[![Components](https://img.shields.io/badge/components-15-blue)](./docs/roadmap.md)
[![Storybook](https://img.shields.io/badge/stories-106-blueviolet)](./packages/ds-storybook)
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

- **다중 프레임워크 지원**: React와 Vue 컴포넌트 제공
- **테마 시스템**: 런타임 테마 전환 및 빌드타임 테마 분리 지원
- **Color Set Protocol**: 최소 입력으로 81개 토큰 자동 생성
- **아이콘 시스템**: 멀티 사이즈(sm, md, lg) 및 테마(`currentColor`) 대응 SVG 에셋
- **타입 안전성**: TypeScript로 작성되어 완벽한 타입 지원
- **모노레포 구조**: Turborepo를 활용한 효율적인 빌드 시스템
- **Storybook**: 인터랙티브한 컴포넌트 문서 및 데모

## 설치

### React

```bash
# npm
npm install @woosgem/ds-react @woosgem/ds-styles

# pnpm
pnpm add @woosgem/ds-react @woosgem/ds-styles

# yarn
yarn add @woosgem/ds-react @woosgem/ds-styles
```

### Vue

```bash
# npm
npm install @woosgem/ds-vue @woosgem/ds-styles

# pnpm
pnpm add @woosgem/ds-vue @woosgem/ds-styles

# yarn
yarn add @woosgem/ds-vue @woosgem/ds-styles
```

## 빠른 시작

### React

```typescript
// main.tsx 또는 App.tsx
import '@woosgem/ds-styles';
import { Button, Badge, Input } from '@woosgem/ds-react';

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

현재 **15개 컴포넌트**가 제공되며, 모두 React와 Vue 버전을 지원합니다.

### Action (2)
- **Button** - filled/outline/ghost/link 변형, 6가지 색상 (primary/secondary/danger/success/warning/info)
- **IconButton** - 아이콘 전용 버튼, 3가지 형태 (circle/square/none)

### Form (5)
- **Input** - outline/filled/underline 변형, error/success 상태
- **Textarea** - outline/filled 변형, resize 옵션 (none/vertical/horizontal/both)
- **Checkbox** - headless compound 패턴
- **Radio** - RadioGroup 포함, horizontal/vertical 레이아웃
- **Switch** - 토글 스위치, 3가지 색상 (primary/secondary/success)

### Feedback (2)
- **Alert** - info/success/warning/error 상태, filled/outline/subtle 변형, closable 옵션
- **Spinner** - 로딩 인디케이터, 4가지 크기 (xs/sm/md/lg)

### Data Display (3)
- **Badge** - filled/outline/subtle 변형, 6가지 색상
- **Avatar** - circle/square 형태, xs~xl 크기
- **ListItem** - 리스트 아이템

### Navigation (2)
- **Tab** - underline/filled 변형, primary/secondary 색상
- **SegmentedControl** - 세그먼트 컨트롤

### Layout (1)
- **Divider** - 6가지 색상 지원 (default/muted/primary/secondary/danger/success)

> 전체 컴포넌트 로드맵은 [Roadmap](./docs/roadmap.md)을 참고하세요.

## 테마 시스템

### 사용 가능한 테마

- **default** - 라이트 테마 (기본)
- **dark** - 다크 테마 (Carbon-inspired)

### 런타임 테마 전환

```typescript
// 모든 테마 포함
import '@woosgem/styles';

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
import '@woosgem/ds-styles/themes/dark';

// 또는 라이트 테마만
import '@woosgem/ds-styles/themes/default';
```

## Color Set Protocol (CSP)

최소한의 입력으로 완전한 테마를 생성하는 프로토콜입니다.

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem/ds-core';

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
pnpm --filter @woosgem/ds-storybook dev

# 테스트
pnpm test:all
```

### 프로젝트 구조

```
woosgem/
├── packages/
│   ├── ds-core/      # 컴포넌트 정의 + CSP + 토큰 시스템
│   ├── ds-react/     # React 컴포넌트 (15개)
│   ├── ds-vue/       # Vue 컴포넌트 (15개)
│   ├── ds-styles/    # SCSS 스타일 및 테마 (default/dark)
│   ├── ds-icons/     # SVG 아이콘 에셋 (sm/md/lg)
│   ├── ds-test/      # 통합 테스트 스위트 (1,136개 테스트)
│   ├── ds-storybook/ # Storybook (106개 스토리)
│   └── utils/        # 유틸리티 함수
├── turbo.json         # Turborepo 설정
└── pnpm-workspace.yaml
```

## 기여하기

### 새 컴포넌트 추가

1. `packages/ds-core/src/components`에 컴포넌트 정의 추가
2. `packages/ds-styles/src/components`에 스타일 추가
3. `packages/ds-react/src` 및 `packages/ds-vue/src`에 프레임워크별 구현 추가
4. `packages/ds-storybook/src/stories`에 스토리 추가
5. `packages/ds-test/src`에 테스트 추가

### 새 테마 추가 (CSP 사용)

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem/ds-core';

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
