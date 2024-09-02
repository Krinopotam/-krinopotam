/**
 * Inserts new element into array
 * @param arr - array
 * @param newElement - new element
 * @param targetElement - target element
 * @param position  - position (insert at bottom or top of array, or 'before' | 'after' of target element)
 * @param clone - if true, returns cloned array, if false - mutate original array
 */

export const AddElementToArray = function <T>(arr: T[], newElement: T, targetElement?: T, position?: 'bottom' | 'top' | 'above' | 'below', clone = true): T[] {
    const _arr = clone ? [...arr] : arr;

    const targetIndex = targetElement ? _arr.indexOf(targetElement) : -1;
    if (position !== 'top' && (typeof position === 'undefined' || targetIndex === -1)) position = 'bottom';

    switch (position) {
        case 'top':
            _arr.unshift(newElement);
            break;
        case 'bottom':
            _arr.push(newElement);
            break;
        case 'above':
            _arr.splice(targetIndex, 0, newElement);
            break;
        case 'below':
            _arr.splice(targetIndex + 1, 0, newElement);
            break;
        default:
            throw new Error('Invalid position. Use: bottom| top | before | after');
    }

    return _arr;
};