# WooSGem

### Build & Quality
[![CI](https://github.com/hhk9292/woosgem/actions/workflows/test.yml/badge.svg)](https://github.com/hhk9292/woosgem/actions/workflows/test.yml)
[![Tests](https://img.shields.io/badge/tests-295%20passed-brightgreen)](./docs/test-report.md)
[![Coverage](https://img.shields.io/badge/coverage-62%25-brightgreen)](./docs/test-report.md)

### Project Status
[![Components](https://img.shields.io/badge/components-10-blue)](./docs/roadmap.md)
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
npm install @woosgem/react @woosgem/styles

# pnpm
pnpm add @woosgem/react @woosgem/styles

# yarn
yarn add @woosgem/react @woosgem/styles
```

### Vue

```bash
# npm
npm install @woosgem/vue @woosgem/styles

# pnpm
pnpm add @woosgem/vue @woosgem/styles

# yarn
yarn add @woosgem/vue @woosgem/styles
```

## 빠른 시작

### React

```typescript
// main.tsx 또는 App.tsx
import '@woosgem/styles';
import { Button, Badge, Input } from '@woosgem/react';

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

- **Button** - 다양한 스타일과 크기를 지원하는 버튼
- **IconButton** - 아이콘 전용 버튼
- **Input** - 텍스트 입력 필드
- **Checkbox** - 체크박스
- **Badge** - 상태 표시 배지
- **Tab** - 탭 네비게이션
- **Avatar** - 사용자 아바타
- **ListItem** - 리스트 아이템
- **SegmentedControl** - 세그먼트 컨트롤
- **Divider** - 구분선

## 테마 시스템

### 사용 가능한 테마

- **default** - 라이트 테마 (기본)
- **dark** - 다크 테마

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
import '@woosgem/styles/themes/dark';

// 또는 라이트 테마만
import '@woosgem/styles/themes/default';
```

## Color Set Protocol (CSP)

최소한의 입력으로 완전한 테마를 생성하는 프로토콜입니다.

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem/core';

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
- pnpm >= 9.15.0

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 모드
pnpm dev

# 빌드
pnpm build

# Storybook 실행
cd packages/storybook && pnpm dev

# 테스트
pnpm test
```

### 프로젝트 구조

```
my-design-system/
├── packages/
│   ├── core/          # 컴포넌트 정의 + CSP
│   ├── react/         # React 컴포넌트
│   ├── vue/           # Vue 컴포넌트
│   ├── styles/        # SCSS 스타일 및 테마
│   └── storybook/     # Storybook 설정 및 스토리
├── turbo.json         # Turborepo 설정
└── pnpm-workspace.yaml
```

## 기여하기

### 새 컴포넌트 추가

1. `packages/core/src/components`에 컴포넌트 정의 추가
2. `packages/styles/src/components`에 스타일 추가
3. `packages/react/src` 및 `packages/vue/src`에 프레임워크별 구현 추가
4. `packages/storybook/src/stories`에 스토리 추가

### 새 테마 추가 (CSP 사용)

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem/core';

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
