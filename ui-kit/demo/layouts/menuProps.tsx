
import React from "react";
import {MenuProps} from "antd";
import {FolderOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export const menuItems: MenuProps["items"] =[
    getItem("Other", "Iteme488429f-1821-4572-aa89-c674f5b3d2e5", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item24a27ba2-c80b-41e1-91c9-23dde080f332"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item87946000-a82c-4651-9428-8b5639c4dede"),]),
    getItem("DForm", "Item8373450d-6392-434a-9f11-21036556089b", <FolderOutlined />, [
        getItem("Validation", "Itemf4651c62-d020-47dd-920b-476c721f10d2", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item72aeaf9a-2eec-46d0-83b2-3f42d17111e1"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item010ab66f-1aaa-4086-8c9a-396df819fb07"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item512246bc-7839-4047-91fc-050b4ee527b2"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Iteme48de86e-af88-4ce8-a445-f1b3a9057966"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemd7b3c52c-0d3c-470e-84ff-627b254cdb17"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itema699001e-78fe-4782-b1f8-833407333d03"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itembbbb26fb-0878-4131-8aff-68dc0b3f1853"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemcdc9f6e7-6d02-403b-bd37-6e6a4dc39110"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item8a2a96d5-66b0-4cf8-886f-96360d67071d"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item2a99c18a-20c5-4675-a02a-0a8c5d9b87c7"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item89d39d03-6d1a-4fe9-b14f-fd18994d08c0"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itema980bc30-d893-4675-8587-89abd90afab0"),]),
    getItem("DForm Modal", "Itemd278d81e-1d7e-4214-9078-6fd2c307314d", <FolderOutlined />, [
        getItem("Async", "Item691f50e2-5cf1-49b7-b6d7-616adb9e7417", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item0ca7a69c-7d0f-4900-89b0-71c96ae18710"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemca07d706-ad88-49d3-a1fe-41a2255c49e0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item8eaf3382-a57b-44e1-95ed-22e6d08083b0"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item43b06095-259d-4faa-8467-50369ac851fb"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemeaf5e861-cc2d-48c7-98dd-bc2af3f6c4db"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item4dd2cd2f-20ac-4729-b159-4498992c30b6"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item39a46e16-bd35-45c4-b100-cee965e92e4e"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemf89cd7bd-3c54-4ba3-a846-a9aa1f23d962"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemd11b052b-7174-4fb8-933d-3ab82fa65e5b"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemd0a0962d-55ef-4238-a040-61de1d96ab35"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemc9608841-a4cd-4862-8daa-c5a6e122e544"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemaabb35e5-e2de-4a8a-a28b-e1e7fdd6e0b1"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item362226fc-fddb-4d30-9395-a6450f425dd2"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item1c68d855-442a-44c0-ad77-9021efd6bbf2"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item584f5df7-13d8-4a25-ac63-8bdc3f9e7598"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item4e93d120-2f49-4d01-8f69-9513b4ae6f69"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item442fae3c-eb82-4c8e-8c63-fbf84ecc3a5c"),]),
    getItem("Modal", "Itema70c0e90-db31-43c0-a9c5-2ee00ea90ef8", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item5e91b89b-1891-4a98-961c-3a2fc5aaa09e"),]),
    getItem("Tabulator Grid", "Itemaaa99b25-3dfd-4868-8cea-2bf6a88c7556", <FolderOutlined />, [
        getItem("Async", "Item6a4ffc03-9608-400a-b928-ba87b5c2a239", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item7fa1da30-0c84-410a-9642-984fddc65d0c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item23c34608-0577-43da-96a4-0947e0c4fe58"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemcd7741b7-0b94-459b-b948-ad2e0904b3c8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item7f243f39-e5fc-40c3-9e29-2c280642129d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item8a73374b-496c-45e2-90c5-fb7b51d776c4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item2f3b3c8e-ac88-43d5-aa13-08d07f672c74"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item42f257bb-784f-4bfa-a75d-534238aae7d7"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Iteme34d314a-e971-4a79-9f47-95383a607ce0"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itema4fefeba-13d3-4650-80e1-6dd2ce99f5d3"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item42bd742e-450e-4630-96de-368d9f592ae8"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item6f702afe-62d4-4627-9175-2cfc3430abb5"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item74766d24-6c5d-4294-a397-72a1a4a6a553"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item726c6bb3-0cff-4c89-af41-a049d611e255"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item93aef11a-abd8-41d4-a121-413f2711bff7"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item68cdcd7e-471d-4f14-a029-bdce0e7927c1"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item8d2e222a-03da-4da6-9a4d-1e106df1e382"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemfc2a45ba-cf1f-432b-8d41-ed77ccde4620"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item2b7907b2-dec0-4079-882e-648463ed5610"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemdb1d1bc5-0c1f-4781-8d7e-92c6f5f618e6"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemc773f1e4-d0c4-4b78-b5a3-a141ea51504a"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itema935826e-7a6e-4d3e-8739-f4b01cbedede"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Iteme3efc655-aecf-416c-8d4d-ecb0d15189a6"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item744aef71-5230-4976-a306-c5aaca6ff5c9"),]),
    getItem("Tools", "Iteme081e1ed-0f85-41f4-98e9-75f7e203d7f9", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item967e3b9e-b1ea-4820-9cc4-80acbb80259d"),]),
    getItem("Tree Select", "Item613e1bb0-f910-42cc-816d-d6d53eaf54b4", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item197cab24-2a66-4077-a00a-cfc95e0c3af3"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item9ccb3b9a-b998-4a8a-8fa7-cccabe93551d"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemdb52f220-cb87-4ad0-bd50-486c10e5ba4f"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item744f96c3-9dd7-42ee-b6f0-1f12c2260533"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itema55434e3-a826-4ba2-b32a-5129cf884939"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item46f40fb5-5438-4cf9-8949-2a223ff69010"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item1e30b430-35a8-46b8-b7fb-5137e6107d25"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item7d14390e-3d4c-451d-9557-f55aa4814ceb"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item111d5698-616e-49df-9a8f-2a3d002665ce"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item0b3e1bde-5532-4fd3-b865-c568aaad80df"),]