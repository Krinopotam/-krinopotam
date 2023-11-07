import React, { useMemo, useRef, useState } from 'react';
import { useInitGridApi } from './hooks/api';
import { ContainerRender } from './renders/containerRender';
import { SplitObject } from '@krinopotam/js-helpers';
export const TabulatorGrid = (props) => {
    var _a, _b, _c, _d;
    const tabulatorProps = useSplitTabulatorProps(props);
    const tableRef = useRef();
    const [editFormApi] = useState(((_b = (_a = props.editFormProps) === null || _a === void 0 ? void 0 : _a.apiRef) !== null && _b !== void 0 ? _b : {}));
    const [selectionFormApi] = useState(((_d = (_c = props.selectionFormProps) === null || _c === void 0 ? void 0 : _c.apiRef) !== null && _d !== void 0 ? _d : {}));
    const [buttonsApi] = useState({});
    const [gridApi] = useState((props.apiRef || {}));
    const [columnsDialog, openColumnsDialog] = useState(false);
    useInitGridApi({ gridApi, props, tableRef, editFormApi, selectionFormApi, buttonsApi, openColumnsDialog: openColumnsDialog });
    return React.createElement(ContainerRender, { tableRef: tableRef, gridApi: gridApi, gridProps: props, tabulatorProps: tabulatorProps, columnsDialog: columnsDialog });
};
export default TabulatorGrid;
const useSplitTabulatorProps = (props) => {
    return useMemo(() => {
        const result = SplitObject(props, {
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
            selectionFormProps: true,
            appendSelection: true,
            noHover: true,
            rowDeleteMessage: true,
            confirmDelete: true,
            placeholder: true,
            onMenuVisibilityChanged: true,
            onDataLoading: true,
            onDataLoadError: true,
            onDataLoaded: true,
            onDataChanged: true,
            onDataProcessed: true,
            onDataFetch: true,
            onDataFetchResponse: true,
            onSelectionChange: true,
            onDelete: true,
            resizeHeightWithParent: true,
        });
        return result[1];
    }, [props]);
};
