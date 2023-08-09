import { Col, Row } from 'antd';
import { DFormModal } from '@krinopotam/ui-dynamic-form-modal';
import React, { useEffect, useMemo, useState } from 'react';
import { HelpersStrings, HelpersObjects } from "@krinopotam/js-helpers";
import { TreeSelectRender } from './renders/treeSelectRender';
import { useEditableInit } from './hooks/useEditForm';
import { useInitApi } from './hooks/api';
import { useGetActualProps } from '@krinopotam/common-hooks';
import { ButtonsRow } from '@krinopotam/ui-buttons-row';
import { useInitButtons } from './hooks/buttons';
export const TreeSelect = (props) => {
    var _a, _b;
    const [treeProps, updateProps] = useGetActualProps(props);
    const antProps = useGetAntTreeSelectProps(treeProps);
    const [componentId] = useState((_a = treeProps.treeSelectId) !== null && _a !== void 0 ? _a : 'treeSelect-' + HelpersStrings.getUuid());
    const [api] = useState(((_b = treeProps.apiRef) !== null && _b !== void 0 ? _b : {}));
    const [buttonsApi] = useState({});
    useInitApi({ api, componentId, treeProps, updateProps, buttonsApi });
    const [editFormProps, formApi] = useEditableInit(api);
    const buttons = useInitButtons(api, formApi);
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
        var _a, _b;
        if ((!treeProps.fetchMode || treeProps.fetchMode === 'onLoad') && !treeProps.minSearchLength) {
            api.fetchData('');
            return;
        }
        if (!api.getIsReady())
            (_b = (_a = treeProps.callbacks) === null || _a === void 0 ? void 0 : _a.onReady) === null || _b === void 0 ? void 0 : _b.call(_a);
    }, [api, treeProps.callbacks, treeProps.fetchMode, treeProps.minSearchLength]);
    if (!editFormProps || treeProps.readOnly || treeProps.disabled)
        return React.createElement(TreeSelectRender, { api: api, antProps: antProps });
    return (React.createElement(Row, { wrap: false },
        React.createElement(TreeSelectRender, { api: api, antProps: antProps }),
        React.createElement(Col, null,
            React.createElement(ButtonsRow, { formId: componentId, buttons: buttons, apiRef: buttonsApi, context: api, arrowsSelection: false })),
        React.createElement(DFormModal, Object.assign({}, editFormProps))));
};
const useGetAntTreeSelectProps = (props) => {
    return useMemo(() => {
        const result = HelpersObjects.splitObject(props, [
            'apiRef',
            'treeSelectId',
            'readOnly',
            'value',
            'defaultValueCallback',
            'titleRender',
            'labelRender',
            'filterTreeNode',
            'dataSet',
            'fetchMode',
            'noCacheFetchedData',
            'minSearchLength',
            'debounce',
            'selectedLabelProp',
            'fieldNames',
            'editFormProps',
            'callbacks',
            'confirmDelete',
            'editButtons',
            'nodeDeleteMessage'
        ]);
        return result[1];
    }, [props]);
};
