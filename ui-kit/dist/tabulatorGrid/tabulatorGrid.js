import React, { useMemo, useRef, useState } from 'react';
import { useInitGridApi } from './hooks/api';
import { ContainerRender } from './renders/containerRender';
import { HelpersObjects } from '@krinopotam/js-helpers';
export const TabulatorGrid = (props) => {
    var _a, _b;
    const tabulatorProps = useSplitTabulatorProps(props);
    const tableRef = useRef();
    const [editFormApi] = useState(((_b = (_a = props.editFormProps) === null || _a === void 0 ? void 0 : _a.apiRef) !== null && _b !== void 0 ? _b : {}));
    const [buttonsApi] = useState({});
    const [gridApi] = useState((props.apiRef || {}));
    const [columnsDialog, openColumnsDialog] = useState(false);
    useInitGridApi({ gridApi, props, tableRef, editFormApi, buttonsApi, openColumnsDialog: openColumnsDialog });
    return React.createElement(ContainerRender, { tableRef: tableRef, gridApi: gridApi, gridProps: props, tabulatorProps: tabulatorProps, columnsDialog: columnsDialog });
};
export default TabulatorGrid;
const useSplitTabulatorProps = (props) => {
    return useMemo(() => {
        const result = HelpersObjects.splitObject(props, {
            apiRef: true,
            id: true,
            gridMode: true,
            dataSet: true,
            className: true,
            buttons: true,
            buttonsSize: true,
            buttonsPosition: true,
            buttonsIconsOnly: true,
            readOnly: true,
            editFormProps: true,
            noHover: true,
            rowDeleteMessage: true,
            confirmDelete: true,
            placeholder: true,
            onMenuVisibilityChanged: true,
            onDataLoading: true,
            onDataLoadError: true,
            onDataLoaded: true,
            onDataChanged: true,
            onDataFetch: true,
            onDataFetchResponse: true,
            onSelectionChange: true,
            onDelete: true,
            resizeHeightWithParent: true,
        });
        return result[1];
    }, [props]);
};
