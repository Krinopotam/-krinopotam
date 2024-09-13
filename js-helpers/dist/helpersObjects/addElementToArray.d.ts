/**
 * Inserts new element into array
 * @param arr - array
 * @param newElement - new element
 * @param targetElement - target element
 * @param position  - position (insert at bottom or top of array, or 'before' | 'after' of target element)
 * @param clone - if true, returns cloned array, if false - mutate original array
 */
export declare const AddElementToArray: <T>(arr: T[], newElement: T, targetElement?: T, position?: "bottom" | "top" | "above" | "below", clone?: boolean) => T[];
