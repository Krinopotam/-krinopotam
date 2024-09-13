/**
 * Returns actual props and setProps function. The props can be changed both by the parent component and setProps function
 * @param props
 * @returns
 */
export declare const useGetActualProps: <T>(props: T) => [T, (props: T | ((prevValue: T) => T)) => void];
