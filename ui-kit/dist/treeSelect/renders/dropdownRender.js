import React from 'react';
import { DropdownStatus } from '../../treeSelect/renders/dropdownStatus';
export const DropdownRender = ({ menu, fetching, error, minSymbols, }) => (React.createElement(React.Fragment, null,
    menu,
    React.createElement(DropdownStatus, { fetching: fetching, error: error, minSymbols: minSymbols })));
//# sourceMappingURL=dropdownRender.js.map