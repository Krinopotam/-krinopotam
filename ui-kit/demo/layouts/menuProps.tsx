
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
    getItem("DForm", "Item5638c350-ae37-4c39-976a-1811286235af", <FolderOutlined />, [
        getItem("Validation", "Itemf95e4945-2f90-4074-ba68-bf4f6a329175", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item434c4c80-a2f0-48bc-8dbd-f51644011f22"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item7987406c-4f97-4160-87aa-35be09343ab5"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item1c196f81-1af6-4ab5-a2c0-79fc465e2444"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item33a64485-20f3-4b5c-8416-9864c1e60331"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemf423682e-ecea-4591-a84f-29d801f87e6c"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item616e7044-d1f7-4f8c-854e-d7056026b087"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item615fe495-9815-404d-9b71-4deaabba8eb7"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item7bd80bb7-a434-4479-8a0a-9cc993527554"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item82049884-d200-4eab-998c-31f13f7cc631"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemf2978c9d-bd4c-4506-8b3a-97e25dd0d7fa"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item179824c9-df90-4107-88c6-f2601c93a239"),]),
    getItem("DForm Modal", "Item3af94280-fc99-460f-9eec-c8a862f1188a", <FolderOutlined />, [
        getItem("Async", "Itembcc902e8-f084-4596-bf5e-95c2a3e90ccc", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item52f4f8b8-317e-4eb1-8370-96137ce9eaf5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item5ece9949-dee8-41b5-81a9-1c3ffd0b94b1"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item705305eb-44e9-4a73-a00b-8888bdf18890"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item6d3145dd-8d23-430d-a5b5-ae76947db13d"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item1d59c8e2-6eff-4e83-8ec6-566b000fb0e8"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item3b9b1811-463b-462f-8ebe-b6f3281ecc4f"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item8c0c3802-ebbe-497f-b26a-b7de55894c44"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item1b6e9a39-558c-4af7-84e4-2d3652733290"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item8f4d4cd9-fa1c-412c-9207-eea183cc26b0"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemc59f0738-dccc-4315-bcab-b171b57b3a90"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item4224b562-bac9-4e26-8d3d-9d96a287da07"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item92f50eac-44eb-46b0-827e-806b3e4354fe"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemd5dca235-a04a-44e4-a7e9-1597954945a0"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item14f3a85b-a84f-453f-96c1-c650e88f4f16"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemd130f3be-00ba-457b-be4e-0c8e6b1506d2"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemc8689d9d-3b8d-43df-80fb-7f5e716a24cb"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item7cba93f2-f30c-45ae-9c23-e186bce2bbae"),]),
    getItem("Tabulator Grid", "Item1ff03f7d-3b9d-485e-9a39-348282636a71", <FolderOutlined />, [
        getItem("Async", "Item8ebb6398-7aea-4ad9-b566-cdd2cc2a0406", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item7dd75291-4fff-49dd-a592-82244fe2c246"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item5a3dc9b8-d4b3-4178-bff8-33d3fced99b2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item7d8dab04-5053-4078-99a0-24b35c00dea2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemf46328ce-a4b7-40c9-ada9-0a920c625765"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item7600bc06-425d-4c54-9a6e-8c46137cdcea"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemd5eb134e-fa95-4691-abe7-b913604bfb05"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item55104802-2b40-409a-89d5-71fcdd01c769"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item977adf56-9658-457c-98c1-a8ca8d2ceb86"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item3ec1ed59-fa43-46dc-8280-61cfa51bd045"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item23e844d7-5e05-49d4-b373-7b0ff3963ee3"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Iteme615ba24-b0ff-4598-be5f-cf876eef6b73"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemb7b1c36a-f4e0-4ea7-af7d-68e71a5f285a"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item54eb1b7c-5054-4374-a55c-46da5a3ce51b"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item49fbb0a1-90ee-4f4f-b6bc-8c3086e23aab"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item3e445948-8957-4adb-aca1-8e7f134a37af"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item061cf632-58d0-413b-87ac-bd701882cb06"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item5b72e5ab-f6bb-4b84-bd05-f3415d7729c8"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemc2370ef7-4057-4b56-a548-844a3901fee8"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemf3618816-e1a8-4851-bb0e-d82cbcddd4f8"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item81be7327-20d9-4144-88cf-7598fc9134f8"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item87dde573-d852-497e-afec-03e9e2796624"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemb94a9401-2421-4fcd-88b3-d077e812fdb9"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item26355af0-b503-4554-b7a8-5ca1bf28af23"),]),
    getItem("Tools", "Itemd6da9e3d-9a2e-4f24-85bc-53688cc74f86", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item66ffa08c-15ca-43ec-93d4-aaf6d660fdb8"),]),
    getItem("Tree Select", "Item6b019fdd-219e-4338-ac73-20b2bd6be067", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item7243b3b3-ae85-4d8f-9bcf-faeb1f384099"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemd58afc1d-7fb3-4e37-a4de-df584c99617c"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item751872ad-6ed8-4659-9139-28e20b5256f3"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemaa58f774-9563-4326-b7e2-0f0057d10800"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item9892f01b-d903-483c-8c0f-b1841299f511"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item0c80aa91-34f5-4005-a2ec-2e707df50c2a"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item8656dbbe-d4b5-48bf-8993-b0cdd2482b9a"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Iteme08abd40-84f5-4410-87e4-3d84fa1bae97"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item351d8b15-5b5b-490e-bae7-04bfe488c05b"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item745cff1b-3715-4678-bf25-468f39f4fcfd"),]