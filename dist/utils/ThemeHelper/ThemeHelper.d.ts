import { ITheme } from '../../common/Theme';
/**
 * Function to override a target theme.
 * Properties provided will be merged against the target theme.
 * @param customTheme Custom Theme properties to override
 * @param overrideTarget Target Theme to override against
 */
export declare const overrideTheme: <T extends Partial<ITheme>>(customTheme: T, overrideTarget?: ITheme) => ITheme;
