# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 문서 관리 규칙

### `.claude/working-memory.md` (세션 간 작업 전달)
- **세션 시작 시**: 반드시 읽어서 이전 세션의 컨텍스트 파악
- **용도**: 해야 할 일, 진행 중인 작업, 다음 세션에게 전달할 TODO
- **"update docs" 요청 시**: 여기에 작업 내용 기록
- **"할 일 뭐야" 등 할 일 질문 시**: 이 파일의 TODO 섹션 확인

### `CLAUDE.md` (프로젝트 영구 문서)
- **용도**: 프로젝트 전반적인 중요 정보, 참조 링크
- **업데이트 시점**: Breaking changes, 구조 변경, 새로운 컨벤션 추가 시

## Project Overview

WooSGem is a personal monorepo containing a multi-framework design system and utility packages. It uses Turborepo for build orchestration and features the **Color Set Protocol (CSP)** for generating 81 design tokens from minimal input.

**Packages:**
- `@woosgem/ds-core` - Component definitions + CSP
- `@woosgem/ds-icons` - Pure SVG icon assets (sm, md, lg)
- `@woosgem/ds-test` - Consolidated test suites and utilities
- `@woosgem/ds-react` - React wrappers
- `@woosgem/ds-vue` - Vue wrappers
- `@woosgem/ds-styles` - SCSS styles
- `@woosgem/ds-storybook` - Storybook
- `@woosgem/utils` - Utilities

## Quick Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Development mode
pnpm build            # Build all packages
pnpm test             # Run tests (Output saved to packages/ds-test/test_output.txt)
pnpm test:dashboard   # Tests + coverage dashboard (Output saved to packages/ds-test/test_output.txt)
```

## Reference

| Document | Description |
|----------|-------------|
| [Test Dashboard](./docs/test-report.md) | 테스트 결과 및 커버리지 상세 현황 (자동 업데이트) |
| [DS Policy](./docs/policies/design-system.md) | 아키텍처, 상태 관리, 에러 처리, 보호 속성 통합 정책 |
| [Architecture](./docs/architecture.md) | Package structure, core patterns, theme system |
| [Development Guide](./docs/guides/development.md) | Commands, dev notes, adding components |
| [Testing Guide](./docs/guides/testing.md) | TC 작성법, 테스트 프로세스, Agent 활용 |
| [Code Style](./docs/guides/code-style.md) | TypeScript, React/Vue, formatting rules |
| [Getting Started](./docs/guides/getting-started.md) | Quick start for users |
| [CSP Schema](./docs/api/csp.md) | Color Set Protocol specification |
| [Customization](./docs/api/component-customization.md) | 컴포넌트 커스터마이즈/오버라이드 정책 (상세) |
| [Roadmap](./docs/roadmap.md) | Project status, TODOs, component roadmap |
