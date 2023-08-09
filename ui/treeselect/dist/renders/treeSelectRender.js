import { TreeSelect as AntdTreeSelect } from 'antd';
import React from 'react';
import { useDropdownStyle } from '../hooks/dropdownStyle';
import { NotFound } from './notFound';
import { useDefaultDropdownRender } from '../hooks/defaultDropdownRender';
import { useDefaultFilter } from "../hooks/filter";
export const TreeSelectRender = ({ api, antProps, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const treeProps = api.getProps();
    const _dropdownStyle = useDropdownStyle(treeProps.dropdownStyle);
    const defaultDropdownRender = useDefaultDropdownRender({
        fetchError: api.getFetchError(),
        fetching: api.getIsFetching(),
        minSymbols: api.getMinSymbols()
    });
    const defaultFilter = useDefaultFilter(api);
    return (React.createElement(AntdTreeSelect, Object.assign({}, antProps, { treeData: api.getDataSet(), showSearch: treeProps.showSearch !== false, treeDefaultExpandAll: treeProps.treeDefaultExpandAll !== false, disabled: (_a = treeProps.disabled) !== null && _a !== void 0 ? _a : treeProps.readOnly, dropdownStyle: _dropdownStyle, fieldNames: {
            label: !treeProps.titleRender ? (_c = (_b = treeProps.fieldNames) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : 'title' : '__title',
            value: ((_d = treeProps.fieldNames) === null || _d === void 0 ? void 0 : _d.value) ? treeProps.fieldNames.value : 'id',
            children: ((_e = treeProps.fieldNames) === null || _e === void 0 ? void 0 : _e.children) ? treeProps.fieldNames.children : 'children',
        }, treeNodeLabelProp: treeProps.selectedLabelProp ? treeProps.selectedLabelProp : treeProps.labelRender ? '__label' : (_g = (_f = treeProps.fieldNames) === null || _f === void 0 ? void 0 : _f.title) !== null && _g !== void 0 ? _g : 'title', treeNodeFilterProp: treeProps.titleRender ? '__title' : (_j = (_h = treeProps.fieldNames) === null || _h === void 0 ? void 0 : _h.title) !== null && _j !== void 0 ? _j : 'title', filterTreeNode: (inputValue, treeNode) => {
            if (!api.getIsAllFetched())
                return true;
            if (!treeProps.filterTreeNode)
                return defaultFilter(inputValue, treeNode);
            if (typeof treeProps.filterTreeNode === 'function')
                return treeProps.filterTreeNode(inputValue, treeNode);
            else
                return treeProps.filterTreeNode;
        }, value: api.getInternalValue(), onClear: () => {
            var _a, _b;
            (_b = (_a = treeProps.callbacks) === null || _a === void 0 ? void 0 : _a.onClear) === null || _b === void 0 ? void 0 : _b.call(_a);
            api.setValues(null);
        }, onChange: (value) => {
            const selectedNodes = api.plainValueToNodes(value);
            api.setValues(selectedNodes !== null && selectedNodes !== void 0 ? selectedNodes : null);
        }, onDropdownVisibleChange: (open) => {
            if (open && (treeProps.fetchMode === 'onUse' || treeProps.fetchMode === 'onUseForce'))
                api.fetchData('');
        }, onSearch: (searchString) => {
            api.fetchData(searchString, true);
        }, notFoundContent: (_k = treeProps.notFoundContent) !== null && _k !== void 0 ? _k : React.createElement(NotFound, { fetching: api.getIsFetching(), error: api.getFetchError(), minSymbols: api.getMinSymbols() }), dropdownRender: (_l = treeProps.dropdownRender) !== null && _l !== void 0 ? _l : defaultDropdownRender })));
};
