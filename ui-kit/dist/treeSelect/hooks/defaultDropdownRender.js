import React, { useCallback } from 'react';
import { DropdownRender } from '../../treeSelect/renders/dropdownRender';
export const useDefaultDropdownRender = ({ fetchError, fetching, minSymbols }) => {
    return useCallback((menu) => React.createElement(DropdownRender, { menu: menu, fetching: fetching, error: fetchError, minSymbols: minSymbols }), [fetchError, fetching, minSymbols]);
};
