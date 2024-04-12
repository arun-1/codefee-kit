import { SizeType } from '../common/Types';
/**
 * Return window size information and screen SizeType
 * @returns Window sizes and types
 */
declare const useWindowSize: () => {
    width?: number;
    height?: number;
    size?: SizeType;
};
export default useWindowSize;
