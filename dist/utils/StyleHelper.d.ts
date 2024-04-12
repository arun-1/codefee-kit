import { Gutter } from '../common/Types';
import { ITheme } from '../common/Theme';
import { FlattenSimpleInterpolation } from 'styled-components';
/**
 * Convert px to rem
 * @param px Px intended
 * @param basePx Base FontSize Px to compute resulting rem. Default is 16px.
 */
export declare const rem: (px: number, basePx?: number) => string;
/**
 * Get CSS Variable
 */
export declare const cvar: (key: keyof ITheme) => string;
/**
 * Get Generic Custom CSS Variable
 */
export declare const cvarGen: <T>(key: keyof T) => string;
/**
 * Get Gutter size in rem
 * @param value Gutter space size, 0 - 40, step by 4
 * @returns CSS rem value
 */
export declare const gut: (value: Gutter) => string;
/**
 * Transform Json to a CSS string
 * @param json Json specifying CSS Properties or CSS Variables
 * @returns CSS string
 */
export declare const jsonToCss: <T extends Record<string, unknown>>(json: T) => string;
export declare const makeCssVar: <T extends Record<string, unknown>>(defaultCssVarValues: T) => [FlattenSimpleInterpolation, (p: keyof T) => string];
