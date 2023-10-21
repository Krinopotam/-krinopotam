import React, { useMemo, useRef, useState } from 'react';
import { useInitGridApi } from './hooks/api';
import { ContainerRender } from './renders/containerRender';
import { HelpersObjects } from '@krinopotam/js-helpers';
export const TabulatorGrid = (props) => {
    const tabulatorProps = useSplitTabulatorProps(props);
    const tableRef = useRef();
    const [editFormApi] = useState({});
    const [buttonsApi] = useState({});
    const [gridApi] = useState((props.apiRef || {}));
    useInitGridApi({ gridApi, props, tableRef, editFormApi, buttonsApi });
    return React.createElement(ContainerRender, { tableRef: tableRef, gridApi: gridApi, gridProps: props, tabulatorProps: tabulatorProps });
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
            readOnly: true,
            editFormProps: true,
            noHover: true,
            rowDeleteMessage: true,
            confirmDelete: true,
            placeholder: true,
            onMenuVisibilityChanged: true,
            onDataLoaded: true,
            onDataSetChange: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchCompleted: true,
            onSelectionChange: true,
            onDelete: true,
            resizeHeightWithParent: true,
        });
        return result[1];
    }, [props]);
};
