import { useMemo } from 'react';
export const useDropdownStyle = (dropdownStyle) => {
    return useMemo(() => {
        const defaultStyle = {
            maxHeight: 400,
            overflow: 'auto',
        };
        return Object.assign(Object.assign({}, defaultStyle), (dropdownStyle || {}));
    }, [dropdownStyle]);
};
