import { DispatchWithoutAction } from 'react';
/**
 * Custom hook to trigger rerender manually
 * @returns Func to trigger rerender
 */
declare const useRerender: () => {
    flag: boolean;
    rerender: DispatchWithoutAction;
};
export default useRerender;
