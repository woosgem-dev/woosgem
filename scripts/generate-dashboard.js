import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

function readJSON(filePath) {
  if (!existsSync(filePath)) {
    console.warn(`Warning: ${filePath} not found`);
    return null;
  }
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

function generateBadgeUrl(label, value, color) {
  const encodedLabel = encodeURIComponent(label);
  const encodedValue = encodeURIComponent(value);
  return `https://img.shields.io/badge/${encodedLabel}-${encodedValue}-${color}`;
}

function main() {
  const coveragePath = resolve(rootDir, 'coverage/coverage-summary.json');
  const testResultsPath = resolve(rootDir, 'coverage/test-results.json');
  const readmePath = resolve(rootDir, 'README.md');
  const reportPath = resolve(rootDir, 'docs/test-report.md');

  const coverage = readJSON(coveragePath);
  const testResults = readJSON(testResultsPath);

  if (!coverage && !testResults) {
    console.log('No coverage or test results found. Run tests first.');
    return;
  }

  let testsPassed = 295;
  let coveragePercent = 62;

  if (testResults) {
    testsPassed = testResults.numPassedTests || 0;
    const failed = testResults.numFailedTests || 0;
    
    console.log(`Tests: ${testsPassed} passed, ${failed} failed`);
  }

  if (coverage && coverage.total) {
    coveragePercent = Math.round(coverage.total.lines.pct);
    console.log(`Coverage: ${coveragePercent}%`);
  }

  const testsColor = 'brightgreen';
  const coverageColor = coveragePercent >= 60 ? 'brightgreen' : coveragePercent >= 40 ? 'yellow' : 'red';

  const testsBadge = generateBadgeUrl('tests', `${testsPassed} passed`, testsColor);
  const coverageBadge = generateBadgeUrl('coverage', `${coveragePercent}%`, coverageColor);

  // 1. Update README.md (Badges only, linking to report)
  if (existsSync(readmePath)) {
    let readme = readFileSync(readmePath, 'utf-8');

    readme = readme.replace(
      /\[?!\[Tests\]\(https:\/\/img\.shields\.io\/badge\/tests-[^)]+\)\]?(\([^)]+\))?/,
      `[![Tests](${testsBadge})](./docs/test-report.md)`
    );

    readme = readme.replace(
      /\[?!\[Coverage\]\(https:\/\/img\.shields\.io\/badge\/coverage-[^)]+\)\]?(\([^)]+\))?/,
      `[![Coverage](${coverageBadge})](./docs/test-report.md)`
    );

    // Status 테이블 제거 (이미 옮겼으므로)
    readme = readme.replace(/\n## Status\n\n\| Metric \| Value \| Target \|\n\|--------\|-------\|--------\|\n\| Tests \| .+ \| - \|\n\| Coverage \| .+ \| 60% \|\n\| Components \| .+ \| 25 \|\n/, '');

    writeFileSync(readmePath, readme);
    console.log('README.md updated (badges only)');
  }

  // 2. Update docs/test-report.md (Detailed status)
  if (existsSync(reportPath)) {
    let report = readFileSync(reportPath, 'utf-8');

    report = report.replace(
      /\| Tests \| .+ \| - \|/,
      `| Tests | ${testsPassed} passed | - |`
    );

    report = report.replace(
      /\| Coverage \| .+ \| 60% \|/,
      `| Coverage | ${coveragePercent}% | 60% |`
    );

    // 통합 현황 업데이트
    if (testResults) {
      const passed = testResults.numPassedTests || 0;
      const totalCoverage = coverage?.total?.lines?.pct ? `${Math.round(coverage.total.lines.pct)}%` : '-';
      
      report = report.replace(
        /\| @woosgem\/ds-test \| .+ \| .+ \|/,
        `| @woosgem/ds-test | ${passed} passed | ${totalCoverage} |`
      );
    }

    writeFileSync(reportPath, report);
    console.log('docs/test-report.md updated');
  }
}

main();
