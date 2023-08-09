import 'tabulator-tables/dist/css/tabulator_simple.css';
import React, { useRef, useState } from 'react';
import { useInitGridApi } from './hooks/api';
import { useInitialFetchData } from './hooks/initialFetchRows';
import { ContainerRender } from './renders/containerRender';
import { Stylization } from './stylization';
const TabulatorGrid = (props) => {
    const tableRef = useRef();
    const [editFormApi] = useState({});
    const [buttonsApi] = useState({});
    const [gridApi] = useState((props.apiRef || {}));
    const [initQue] = useState([]);
    useInitGridApi({ gridApi, props, tableRef, editFormApi, buttonsApi, initQue: initQue });
    useInitialFetchData(gridApi);
    return (React.createElement(React.Fragment, null,
        React.createElement(Stylization, null),
        React.createElement(ContainerRender, { tableRef: tableRef, gridApi: gridApi, gridProps: props })));
};
export default TabulatorGrid;
