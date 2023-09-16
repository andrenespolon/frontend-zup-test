import { useEffect, useRef } from 'react';

/**
 * __Hook `usePrevious`__
 *
 * This hook is a ref object that is a generic container where current property
 * is mutable and can hold any value to check if it was changed.
 */
export function usePrevious<T>(
	value: T | null | undefined
): T | null | undefined {
	const ref = useRef<T | undefined | null>();
	useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
