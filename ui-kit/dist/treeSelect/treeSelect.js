import { Col, Row } from 'antd';
import { DFormModal } from '../dFormModal';
import React, { useEffect, useMemo, useState } from 'react';
import { getUuid, splitObject } from '@krinopotam/js-helpers';
import { TreeSelectRender } from '../treeSelect/renders/treeSelectRender';
import { useEditableInit } from '../treeSelect/hooks/useEditForm';
import { useInitApi } from '../treeSelect/hooks/api';
import { useGetActualProps } from '@krinopotam/common-hooks';
import { ButtonsRow } from '../buttonsRow/buttonsRow';
import { useInitButtons } from '../treeSelect/hooks/buttons';
export const TreeSelect = (props) => {
    var _a, _b;
    const [treeProps, updateProps] = useGetActualProps(props);
    const [componentId] = useState((_a = treeProps.treeSelectId) !== null && _a !== void 0 ? _a : 'treeSelect-' + getUuid());
    const [api] = useState(((_b = treeProps.apiRef) !== null && _b !== void 0 ? _b : {}));
    const [buttonsApi] = useState({});
    useInitApi({ api, componentId, treeProps, updateProps, buttonsApi });
    const [editFormProps, formApi] = useEditableInit(api);
    const buttons = useInitButtons(api, formApi);
    const antdTreeSelectProps = useSplitAntTreeSelectProps(props);
    useEffect(() => {
        api.setIsAllFetched(false);
        api.setDataSet(undefined);
        api.setValues(null);
    }, [api]);
    useEffect(() => {
        api.setDataSet(treeProps.dataSet);
    }, [api.setDataSet, api, treeProps.dataSet]);
    useEffect(() => {
        var _a;
        api.setValues((_a = treeProps.value) !== null && _a !== void 0 ? _a : null);
    }, [api, treeProps.value]);
    useEffect(() => {
        var _a;
        if ((!treeProps.fetchMode || treeProps.fetchMode === 'onLoad') && !treeProps.minSearchLength) {
            api.fetchData('');
            return;
        }
        if (!api.getIsReady())
            (_a = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onReady) === null || _a === void 0 ? void 0 : _a.call(treeProps);
    }, [api, treeProps, treeProps.fetchMode, treeProps.minSearchLength]);
    if (!editFormProps || treeProps.readOnly || treeProps.disabled)
        return React.createElement(TreeSelectRender, { api: api, treeSelectProps: props, antdTreeSelectProps: antdTreeSelectProps });
    return (React.createElement(Row, { wrap: false },
        React.createElement(TreeSelectRender, { api: api, treeSelectProps: props, antdTreeSelectProps: antdTreeSelectProps }),
        React.createElement(Col, null,
            React.createElement(ButtonsRow, { buttons: buttons, apiRef: buttonsApi, context: api })),
        React.createElement(DFormModal, Object.assign({}, editFormProps))));
};
const useSplitAntTreeSelectProps = (props) => {
    return useMemo(() => {
        const result = splitObject(props, {
            apiRef: true,
            treeSelectId: true,
            readOnly: true,
            value: true,
            defaultValueCallback: true,
            titleRender: true,
            labelRender: true,
            filterTreeNode: true,
            dataSet: true,
            fetchMode: true,
            noCacheFetchedData: true,
            minSearchLength: true,
            debounce: true,
            selectedLabelProp: true,
            fieldNames: true,
            editFormProps: true,
            nodeDeleteMessage: true,
            confirmDelete: true,
            editButtons: true,
            onReady: true,
            onChange: true,
            onClear: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchComplete: true,
            onDelete: true,
        });
        return result[1];
    }, [props]);
};
//# sourceMappingURL=treeSelect.js.map