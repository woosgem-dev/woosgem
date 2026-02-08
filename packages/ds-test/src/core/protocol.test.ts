import { describe, it, expect } from 'vitest';
import {
  // Transformer
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  darken,
  lighten,
  withAlpha,
  mix,
  contrastRatio,
  isLight,
  isDark,
  isValidHex,

  // Generator
  ColorSetGenerator,
  generateColorSet,

  // Validation
  validateColorSet,
  validateColorSetSchema,
  isValidColorSetDefinition,
  checkContrast,
  WCAG,

  // Output
  generateCSSVariables,
  generateThemeCSS,
  generateSCSSMap,
  generateTypeScriptObject,

  // Presets
  defaultTheme,
  darkTheme,
  presets,
  getPreset,

  // Types
  type ColorSetDefinition,
  type HexColor,
} from '@woosgem-dev/core';

describe('Color Transformer', () => {
  describe('hexToRgb', () => {
    it('should convert 6-digit hex to RGB', () => {
      expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#00FF00')).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb('#0000FF')).toEqual({ r: 0, g: 0, b: 255 });
      expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    });

    it('should convert 3-digit hex to RGB', () => {
      expect(hexToRgb('#F00' as HexColor)).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#0F0' as HexColor)).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb('#00F' as HexColor)).toEqual({ r: 0, g: 0, b: 255 });
    });

    it('should handle lowercase hex', () => {
      expect(hexToRgb('#ff0000' as HexColor)).toEqual({ r: 255, g: 0, b: 0 });
    });
  });

  describe('rgbToHex', () => {
    it('should convert RGB to hex', () => {
      expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe('#FF0000');
      expect(rgbToHex({ r: 0, g: 255, b: 0 })).toBe('#00FF00');
      expect(rgbToHex({ r: 0, g: 0, b: 255 })).toBe('#0000FF');
    });

    it('should clamp values', () => {
      expect(rgbToHex({ r: 300, g: -10, b: 128 })).toBe('#FF0080');
    });
  });

  describe('rgbToHsl / hslToRgb', () => {
    it('should convert RGB to HSL and back', () => {
      const red = { r: 255, g: 0, b: 0 };
      const hsl = rgbToHsl(red);
      expect(hsl.h).toBe(0);
      expect(hsl.s).toBe(100);
      expect(hsl.l).toBe(50);

      const rgb = hslToRgb(hsl);
      expect(rgb).toEqual(red);
    });

    it('should handle grayscale', () => {
      const gray = { r: 128, g: 128, b: 128 };
      const hsl = rgbToHsl(gray);
      expect(hsl.s).toBe(0);
    });
  });

  describe('darken', () => {
    it('should darken a color', () => {
      const result = darken('#808080' as HexColor, 10);
      expect(hexToRgb(result).r).toBeLessThan(128);
    });

    it('should not go below 0', () => {
      const result = darken('#000000', 50);
      expect(result).toBe('#000000');
    });
  });

  describe('lighten', () => {
    it('should lighten a color', () => {
      const result = lighten('#808080' as HexColor, 10);
      expect(hexToRgb(result).r).toBeGreaterThan(128);
    });

    it('should not go above 255', () => {
      const result = lighten('#FFFFFF', 50);
      expect(result).toBe('#FFFFFF');
    });
  });

  describe('withAlpha', () => {
    it('should add alpha to a color', () => {
      expect(withAlpha('#FF0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
      expect(withAlpha('#000000', 0.1)).toBe('rgba(0, 0, 0, 0.1)');
    });

    it('should clamp alpha values', () => {
      expect(withAlpha('#FF0000', 1.5)).toBe('rgba(255, 0, 0, 1)');
      expect(withAlpha('#FF0000', -0.5)).toBe('rgba(255, 0, 0, 0)');
    });
  });

  describe('mix', () => {
    it('should mix two colors equally', () => {
      const result = mix('#FF0000', '#0000FF', 0.5);
      const rgb = hexToRgb(result);
      expect(rgb.r).toBe(128);
      expect(rgb.b).toBe(128);
    });

    it('should weight towards first color', () => {
      const result = mix('#FF0000', '#0000FF', 0.75);
      const rgb = hexToRgb(result);
      expect(rgb.r).toBeGreaterThan(rgb.b);
    });
  });

  describe('contrastRatio', () => {
    it('should calculate max contrast for black on white', () => {
      const ratio = contrastRatio('#FFFFFF', '#000000');
      expect(ratio).toBeCloseTo(21, 0);
    });

    it('should calculate 1:1 for same colors', () => {
      const ratio = contrastRatio('#808080' as HexColor, '#808080' as HexColor);
      expect(ratio).toBeCloseTo(1, 1);
    });
  });

  describe('isLight / isDark', () => {
    it('should identify light colors', () => {
      expect(isLight('#FFFFFF')).toBe(true);
      expect(isLight('#F0F0F0' as HexColor)).toBe(true);
    });

    it('should identify dark colors', () => {
      expect(isDark('#000000')).toBe(true);
      expect(isDark('#1A1A1A' as HexColor)).toBe(true);
    });
  });

  describe('isValidHex', () => {
    it('should validate hex colors', () => {
      expect(isValidHex('#FF0000')).toBe(true);
      expect(isValidHex('#F00')).toBe(true);
      expect(isValidHex('#ffffff')).toBe(true);
    });

    it('should reject invalid hex', () => {
      expect(isValidHex('FF0000')).toBe(false);
      expect(isValidHex('#GG0000')).toBe(false);
      expect(isValidHex('rgb(255,0,0)')).toBe(false);
    });
  });
});

describe('ColorSetGenerator', () => {
  it('should generate resolved color set from minimal definition', () => {
    const minimalTheme: ColorSetDefinition = {
      id: 'minimal',
      name: 'Minimal Theme',
      mode: 'light',
      primary: { base: '#0066CC' },
    };

    const generator = new ColorSetGenerator();
    const resolved = generator.generate(minimalTheme);

    expect(resolved.id).toBe('minimal');
    expect(resolved.name).toBe('Minimal Theme');
    expect(resolved.mode).toBe('light');
    expect(resolved.tokens).toBeDefined();
  });

  it('should generate all token categories from minimal input', () => {
    const resolved = generateColorSet({
      id: 'test',
      name: 'Test',
      mode: 'light',
      primary: { base: '#0066CC' },
    });

    // Primary tokens
    expect(resolved.tokens.primary).toBe('#0066CC');
    expect(resolved.tokens['primary-hover']).toBeDefined();
    expect(resolved.tokens['primary-active']).toBeDefined();
    expect(resolved.tokens['primary-alpha-10']).toBeDefined();

    // Secondary (defaulted)
    expect(resolved.tokens.secondary).toBeDefined();

    // Semantic (defaulted)
    expect(resolved.tokens.danger).toBeDefined();
    expect(resolved.tokens.success).toBeDefined();
    expect(resolved.tokens.warning).toBeDefined();
    expect(resolved.tokens.info).toBeDefined();

    // Text (defaulted)
    expect(resolved.tokens.text).toBeDefined();
    expect(resolved.tokens['text-muted']).toBeDefined();

    // Background (defaulted)
    expect(resolved.tokens.background).toBeDefined();
    expect(resolved.tokens['background-subtle']).toBeDefined();

    // New categories
    expect(resolved.tokens['neutral-50']).toBeDefined();
    expect(resolved.tokens['neutral-500']).toBeDefined();
    expect(resolved.tokens['neutral-950']).toBeDefined();
    expect(resolved.tokens.surface).toBeDefined();
    expect(resolved.tokens['surface-raised']).toBeDefined();
    expect(resolved.tokens['input-background']).toBeDefined();
    expect(resolved.tokens['input-border']).toBeDefined();
    expect(resolved.tokens.link).toBeDefined();
    expect(resolved.tokens['state-disabled']).toBeDefined();
    expect(resolved.tokens['shadow-default']).toBeDefined();
  });

  it('should use different defaults for dark mode', () => {
    const lightResolved = generateColorSet({
      id: 'light',
      name: 'Light',
      mode: 'light',
      primary: { base: '#0066CC' },
    });

    const darkResolved = generateColorSet({
      id: 'dark',
      name: 'Dark',
      mode: 'dark',
      primary: { base: '#0066CC' },
    });

    // Text should be different
    expect(lightResolved.tokens.text).not.toBe(darkResolved.tokens.text);

    // Background should be different
    expect(lightResolved.tokens.background).not.toBe(darkResolved.tokens.background);

    // Neutral scale should be different
    expect(lightResolved.tokens['neutral-50']).not.toBe(darkResolved.tokens['neutral-50']);
  });

  it('should allow overriding defaults', () => {
    const customTheme: ColorSetDefinition = {
      id: 'custom',
      name: 'Custom',
      mode: 'light',
      primary: { base: '#FF0000' },
      secondary: { base: '#00FF00' },
      semantic: {
        danger: { base: '#990000' },
      },
      text: { default: '#333333' },
    };

    const resolved = generateColorSet(customTheme);

    expect(resolved.tokens.secondary).toBe('#00FF00');
    expect(resolved.tokens.danger).toBe('#990000');
    expect(resolved.tokens.text).toBe('#333333');
  });

  it('should generate correct token count', () => {
    const resolved = generateColorSet(defaultTheme);
    const tokenCount = Object.keys(resolved.tokens).length;

    // Should have all the tokens defined in ResolvedColorTokens
    // Primary: 5, Secondary: 4, Danger: 5, Success: 5, Warning: 3, Info: 3
    // Text: 4, Background: 6, Border: 2, Accent lights: 8, Focus: 1
    // Neutral: 11, Surface: 4, Input: 7, Link: 4, State: 6, Shadow: 3
    // Total: 76
    expect(tokenCount).toBe(81);
  });
});

describe('Validation', () => {
  describe('validateColorSetSchema', () => {
    it('should validate minimal definition', () => {
      const minimal = {
        id: 'test',
        name: 'Test',
        mode: 'light',
        primary: { base: '#0066CC' },
      };

      const result = validateColorSetSchema(minimal);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject missing required fields', () => {
      const invalid = {
        id: 'test',
        // missing name, mode, primary
      };

      const result = validateColorSetSchema(invalid);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should reject invalid hex colors', () => {
      const invalid = {
        id: 'test',
        name: 'Test',
        mode: 'light',
        primary: { base: 'not-a-color' },
      };

      const result = validateColorSetSchema(invalid);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.code === 'INVALID_HEX')).toBe(true);
    });

    it('should reject invalid mode', () => {
      const invalid = {
        id: 'test',
        name: 'Test',
        mode: 'invalid',
        primary: { base: '#0066CC' },
      };

      const result = validateColorSetSchema(invalid);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.code === 'INVALID_MODE')).toBe(true);
    });

    it('should accept optional fields when valid', () => {
      const withOptional = {
        id: 'test',
        name: 'Test',
        mode: 'light',
        primary: { base: '#0066CC' },
        secondary: { base: '#666666' },
        semantic: {
          danger: { base: '#FF0000' },
        },
      };

      const result = validateColorSetSchema(withOptional);
      expect(result.valid).toBe(true);
    });
  });

  describe('isValidColorSetDefinition', () => {
    it('should return true for valid definitions', () => {
      expect(isValidColorSetDefinition(defaultTheme)).toBe(true);
    });

    it('should return false for invalid definitions', () => {
      expect(isValidColorSetDefinition({})).toBe(false);
    });
  });

  describe('checkContrast', () => {
    it('should return correct contrast results', () => {
      const result = checkContrast('#000000', '#FFFFFF');
      expect(result.ratio).toBeCloseTo(21, 0);
      expect(result.passesAA).toBe(true);
      expect(result.passesAAA).toBe(true);
    });

    it('should detect low contrast', () => {
      const result = checkContrast('#777777' as HexColor, '#888888' as HexColor);
      expect(result.passesAA).toBe(false);
    });
  });

  describe('validateColorSet (comprehensive)', () => {
    it('should validate schema', () => {
      const result = validateColorSet(defaultTheme);
      expect(result.valid).toBe(true);
    });
  });
});

describe('Output Generators', () => {
  const resolved = generateColorSet(defaultTheme);

  describe('generateCSSVariables', () => {
    it('should generate CSS custom properties', () => {
      const css = generateCSSVariables(resolved.tokens);

      expect(css).toContain('--wg-color-primary');
      expect(css).toContain('--wg-color-background');
      expect(css).toContain('--wg-color-text');
      expect(css).toContain('--wg-color-neutral-500');
      expect(css).toContain('--wg-color-surface');
    });

    it('should use custom prefix', () => {
      const css = generateCSSVariables(resolved.tokens, { prefix: 'my-theme' });

      expect(css).toContain('--my-theme-primary');
    });
  });

  describe('generateThemeCSS', () => {
    it('should generate complete theme rule', () => {
      const css = generateThemeCSS(resolved);

      expect(css).toContain(':root');
      expect(css).toContain('--wg-color-primary');
    });

    it('should use data-theme selector for non-default themes', () => {
      const darkResolved = generateColorSet(darkTheme);
      const css = generateThemeCSS(darkResolved);

      expect(css).toContain('[data-theme="dark"]');
    });
  });

  describe('generateSCSSMap', () => {
    it('should generate SCSS map syntax', () => {
      const scss = generateSCSSMap(resolved.tokens, 'color-set-default');

      expect(scss).toContain('$color-set-default: (');
      expect(scss).toContain("'primary':");
      expect(scss).toContain(');');
    });
  });

  describe('generateTypeScriptObject', () => {
    it('should generate TypeScript object', () => {
      const ts = generateTypeScriptObject(resolved);

      expect(ts).toContain('export const defaultTheme');
      expect(ts).toContain("id: 'default'");
      expect(ts).toContain('tokens: {');
    });
  });
});

describe('Presets', () => {
  it('should have preset themes', () => {
    expect(defaultTheme).toBeDefined();
    expect(darkTheme).toBeDefined();
  });

  it('should have correct preset IDs', () => {
    expect(defaultTheme.id).toBe('default');
    expect(darkTheme.id).toBe('dark');
  });

  it('should have correct modes', () => {
    expect(defaultTheme.mode).toBe('light');
    expect(darkTheme.mode).toBe('dark');
  });

  it('should be minimal (only required fields)', () => {
    // Presets should only have required fields
    expect(defaultTheme.primary.base).toBeDefined();
    expect(defaultTheme.secondary).toBeUndefined();
    expect(defaultTheme.semantic).toBeUndefined();
    expect(defaultTheme.text).toBeUndefined();
  });

  it('should be accessible via presets object', () => {
    expect(presets.default).toBe(defaultTheme);
    expect(presets.dark).toBe(darkTheme);
  });

  it('should retrieve presets by ID', () => {
    expect(getPreset('default')).toBe(defaultTheme);
    expect(getPreset('dark')).toBe(darkTheme);
    expect(getPreset('unknown')).toBeUndefined();
  });

  describe('preset validation', () => {
    it('should validate default theme', () => {
      const result = validateColorSet(defaultTheme);
      expect(result.valid).toBe(true);
    });

    it('should validate dark theme', () => {
      const result = validateColorSet(darkTheme);
      expect(result.valid).toBe(true);
    });
  });

  describe('preset generation', () => {
    it('should generate full token set from minimal preset', () => {
      const resolved = generateColorSet(defaultTheme);
      expect(Object.keys(resolved.tokens).length).toBe(81);
    });
  });
});

describe('WCAG Constants', () => {
  it('should have correct WCAG thresholds', () => {
    expect(WCAG.AA_NORMAL).toBe(4.5);
    expect(WCAG.AA_LARGE).toBe(3.0);
    expect(WCAG.AAA_NORMAL).toBe(7.0);
    expect(WCAG.AAA_LARGE).toBe(4.5);
    expect(WCAG.UI_COMPONENTS).toBe(3.0);
  });
});

describe('Smart Defaults', () => {
  it('should generate 76 tokens from just primary.base', () => {
    const minimal: ColorSetDefinition = {
      id: 'brand',
      name: 'Brand Theme',
      mode: 'light',
      primary: { base: '#FF5500' },
    };

    const resolved = generateColorSet(minimal);
    const tokenCount = Object.keys(resolved.tokens).length;

    expect(tokenCount).toBe(81);
  });

  it('should use primary color for focus-ring by default', () => {
    const resolved = generateColorSet({
      id: 'test',
      name: 'Test',
      mode: 'light',
      primary: { base: '#FF0000' },
    });

    expect(resolved.tokens['focus-ring']).toBe('#FF0000');
  });

  it('should derive hover states correctly for light mode', () => {
    const resolved = generateColorSet({
      id: 'test',
      name: 'Test',
      mode: 'light',
      primary: { base: '#808080' },
    });

    // Hover should be darker in light mode
    const primaryRgb = hexToRgb(resolved.tokens.primary as HexColor);
    const hoverRgb = hexToRgb(resolved.tokens['primary-hover'] as HexColor);
    expect(hoverRgb.r).toBeLessThan(primaryRgb.r);
  });

  it('should derive hover states correctly for dark mode', () => {
    const resolved = generateColorSet({
      id: 'test',
      name: 'Test',
      mode: 'dark',
      primary: { base: '#808080' },
    });

    // Hover should be lighter in dark mode
    const primaryRgb = hexToRgb(resolved.tokens.primary as HexColor);
    const hoverRgb = hexToRgb(resolved.tokens['primary-hover'] as HexColor);
    expect(hoverRgb.r).toBeGreaterThan(primaryRgb.r);
  });
});
