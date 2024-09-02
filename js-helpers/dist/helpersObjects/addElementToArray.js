export const AddElementToArray = function (arr, newElement, targetElement, position, clone = true) {
    const _arr = clone ? [...arr] : arr;
    const targetIndex = targetElement ? _arr.indexOf(targetElement) : -1;
    if (position !== 'top' && (typeof position === 'undefined' || targetIndex === -1))
        position = 'bottom';
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
