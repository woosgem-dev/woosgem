# Testing Guide

## TDD 방식 (필수)

**컴포넌트 개발은 반드시 TDD로 진행한다.**

```
1. TC 설계 (planner)     → docs/test-cases/{Component}.md 작성
2. TC 검토 (qa-tester)   → 누락 케이스, 에러 정책, 커스터마이즈 정책 검토
3. 테스트 작성           → TC 기반 테스트 코드 (실패하는 테스트)
4. 테스트 실행           → 🔴 실패 확인
5. 구현                  → 테스트 통과하도록 최소 구현
6. 테스트 실행           → 🟢 통과 확인
7. 리팩토링              → 코드 정리 (테스트 유지)
```

### TDD 핵심 원칙

- **테스트 먼저**: 구현 전에 테스트 작성
- **최소 구현**: 테스트 통과에 필요한 최소한만 구현
- **Red → Green → Refactor**: 실패 → 통과 → 정리 사이클
- **TC가 스펙**: TC 문서가 곧 구현 명세

## TC 문서 위치

```
docs/test-cases/
├── Button.md
├── Input.md
├── Checkbox.md
└── ...
```

## TC 문서 구조

각 TC 문서는 다음 섹션을 포함:

1. **Core TC** - mapPropsToAttrs, defaultProps 검증
2. **Wrapper TC** - React/Vue 렌더링, 이벤트 핸들러
3. **예외 케이스** - 미입력, 잘못된 값, 경계값
4. **에러 처리 정책** - throw vs fallback 결정

## 테스트 코드 위치

모든 테스트 파일은 `@woosgem/ds-test` 패키지 내부에서 통합 관리됩니다.

```
packages/ds-test/src/
├── core/       # ds-core 로직 테스트
├── react/      # ds-react 래퍼 테스트
└── vue/        # ds-vue 래퍼 테스트
```

## 테스트 실행

```bash
pnpm test:all                # 전체 테스트 실행
pnpm test:dashboard          # 테스트 실행 및 대시보드 업데이트
pnpm test:coverage           # 커버리지 측정
pnpm test:watch              # Watch 모드
```

빌드 과정 없이 소스 코드를 직접 참조하여 테스트가 수행되므로 빠른 피드백이 가능합니다.
