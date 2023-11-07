import { useCallback } from 'react';
export const useDefaultFilter = (api) => {
    const fields = api.getProps().fieldNames;
    const titleKey = (fields === null || fields === void 0 ? void 0 : fields.title) || 'title';
    return useCallback((inputValue, treeNode) => {
        const node = treeNode;
        if (!node || typeof node[titleKey] !== 'string')
            return false;
        const title = node[titleKey];
        return title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
    }, [titleKey]);
};
