import { RefObject } from 'react';
/**
 * Expose a component's local ref to Forwarded Ref as a 'node' property.
 * Typically only used in library components that require both local ref and support forwardRef.
 * @param forwardedRef ForwardRef from parent component
 * @param internalRef Local Ref to be synced with parent compoonent
 */
declare const useExposeRef: (forwardedRef: import("react").MutableRefObject<unknown> | ((instance: unknown) => void) | null, internalRef: RefObject<unknown>) => void;
export default useExposeRef;
