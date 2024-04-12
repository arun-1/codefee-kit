import { RefObject } from 'react';
/**
 * Hook to handle Clicking Outside element
 * @param ref Ref for inside element
 * @param callback Callback upon clicking anywhere outside of the element specified in ref
 */
declare const useClickOutside: (ref: RefObject<HTMLElement>, callback: () => void) => void;
export default useClickOutside;
