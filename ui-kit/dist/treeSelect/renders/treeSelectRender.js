import { TreeSelect as AntdTreeSelect } from 'antd';
import React from 'react';
import { useDropdownStyle } from '../../treeSelect/hooks/dropdownStyle';
import { NotFound } from '../../treeSelect/renders/notFound';
import { useDefaultDropdownRender } from '../../treeSelect/hooks/defaultDropdownRender';
import { useDefaultFilter } from '../../treeSelect/hooks/filter';
export const TreeSelectRender = ({ api, treeSelectProps, antdTreeSelectProps }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const _dropdownStyle = useDropdownStyle(treeSelectProps.dropdownStyle);
    const defaultDropdownRender = useDefaultDropdownRender({
        fetchError: api.getFetchError(),
        fetching: api.getIsFetching(),
        minSymbols: api.getMinSymbols(),
    });
    const defaultFilter = useDefaultFilter(api);
    return (React.createElement(AntdTreeSelect, Object.assign({}, antdTreeSelectProps, { treeData: api.getDataSet(), showSearch: treeSelectProps.showSearch !== false, treeDefaultExpandAll: treeSelectProps.treeDefaultExpandAll !== false, disabled: (_a = treeSelectProps.disabled) !== null && _a !== void 0 ? _a : treeSelectProps.readOnly, dropdownStyle: _dropdownStyle, fieldNames: {
            label: !treeSelectProps.titleRender ? (_c = (_b = treeSelectProps.fieldNames) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : 'title' : '__title',
            value: ((_d = treeSelectProps.fieldNames) === null || _d === void 0 ? void 0 : _d.value) ? treeSelectProps.fieldNames.value : 'id',
            children: ((_e = treeSelectProps.fieldNames) === null || _e === void 0 ? void 0 : _e.children) ? treeSelectProps.fieldNames.children : 'children',
        }, treeNodeLabelProp: treeSelectProps.selectedLabelProp ? treeSelectProps.selectedLabelProp : treeSelectProps.labelRender ? '__label' : (_g = (_f = treeSelectProps.fieldNames) === null || _f === void 0 ? void 0 : _f.title) !== null && _g !== void 0 ? _g : 'title', treeNodeFilterProp: treeSelectProps.titleRender ? '__title' : (_j = (_h = treeSelectProps.fieldNames) === null || _h === void 0 ? void 0 : _h.title) !== null && _j !== void 0 ? _j : 'title', filterTreeNode: (inputValue, treeNode) => {
            if (!api.getIsAllFetched())
                return true;
            if (!treeSelectProps.filterTreeNode)
                return defaultFilter(inputValue, treeNode);
            if (typeof treeSelectProps.filterTreeNode === 'function')
                return treeSelectProps.filterTreeNode(inputValue, treeNode);
            else
                return treeSelectProps.filterTreeNode;
        }, value: api.getInternalValue(), notFoundContent: (_k = treeSelectProps.notFoundContent) !== null && _k !== void 0 ? _k : React.createElement(NotFound, { fetching: api.getIsFetching(), error: api.getFetchError(), minSymbols: api.getMinSymbols() }), dropdownRender: (_l = treeSelectProps.dropdownRender) !== null && _l !== void 0 ? _l : defaultDropdownRender, onClear: () => {
            var _a, _b;
            (_a = treeSelectProps.onClear) === null || _a === void 0 ? void 0 : _a.call(treeSelectProps);
            api.setValues(null);
            (_b = treeSelectProps.onClear) === null || _b === void 0 ? void 0 : _b.call(treeSelectProps);
        }, onChange: value => {
            var _a;
            const selectedNodes = api.plainValueToNodes(value);
            api.setValues(selectedNodes !== null && selectedNodes !== void 0 ? selectedNodes : null);
            (_a = treeSelectProps.onChange) === null || _a === void 0 ? void 0 : _a.call(treeSelectProps, selectedNodes !== null && selectedNodes !== void 0 ? selectedNodes : null);
        }, onDropdownVisibleChange: (open) => {
            var _a;
            if (open && (treeSelectProps.fetchMode === 'onUse' || treeSelectProps.fetchMode === 'onUseForce'))
                api.fetchData('');
            (_a = treeSelectProps.onDropdownVisibleChange) === null || _a === void 0 ? void 0 : _a.call(treeSelectProps, open);
        }, onSearch: searchString => {
            var _a;
            api.fetchData(searchString, true);
            (_a = treeSelectProps.onSearch) === null || _a === void 0 ? void 0 : _a.call(treeSelectProps, searchString);
        } })));
};
//# sourceMappingURL=treeSelectRender.js.map