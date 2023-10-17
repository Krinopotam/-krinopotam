import React, { useMemo, useRef, useState } from 'react';
import { useInitGridApi } from './hooks/api';
import { useInitialFetchData } from './hooks/initialFetchRows';
import { ContainerRender } from './renders/containerRender';
import { HelpersObjects } from '@krinopotam/js-helpers';
const TabulatorGrid = (props) => {
    const tabulatorProps = useSplitTabulatorProps(props);
    const tableRef = useRef();
    const [editFormApi] = useState({});
    const [buttonsApi] = useState({});
    const [gridApi] = useState((props.apiRef || {}));
    useInitGridApi({ gridApi, props, tableRef, editFormApi, buttonsApi });
    useInitialFetchData(gridApi);
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
            readOnly: true,
            editFormProps: true,
            noHover: true,
            rowDeleteMessage: true,
            confirmDelete: true,
            placeholder: true,
            onMenuVisibilityChanged: true,
            onDataSetChange: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchCompleted: true,
            onSelectionChange: true,
            onDelete: true,
        });
        return result[1];
    }, [props]);
};
