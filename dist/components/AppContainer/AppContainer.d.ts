import { FC, ReactNode } from 'react';
import { ITheme } from '../../common/Theme';
export interface AppContainerProps {
    children?: ReactNode;
    appTheme?: ITheme;
    requireCssReset?: boolean;
}
export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<AppContainerProps, import("styled-components").DefaultTheme>;
declare const AppContainer: FC<AppContainerProps>;
export default AppContainer;
