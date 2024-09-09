
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
    getItem("Other", "Item9b7b2ca2-6ab4-4f33-9d06-984707528811", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemfc1a9df3-6805-41bb-a714-dac37346cebe"),]),
    getItem("DForm", "Item9e5245ef-4fd6-44f6-bd4f-0b5d3502c5eb", <FolderOutlined />, [
        getItem("Validation", "Item7930c2ad-85f2-4729-96d2-25e8ea5f7ef9", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Iteme14af5f3-d433-40b0-b9a5-1fb3fa735d5e"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemf29bf010-c51f-455f-9be6-99712bb47e4e"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item0fc47dbe-a871-452b-9839-bd1df5231a2b"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemb78ee432-9914-4eec-9313-b03b170338b6"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item297f4495-719f-4379-b61d-9c4aac027c6f"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item2c3cefec-54c1-484b-bf1d-d759e585144d"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item5e9a25b1-1d48-448f-b43c-bd81ef0fd5fd"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemd541648c-5f8c-4032-82a8-ebabe6a73568"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item2909cade-e610-4c88-9c14-72b04a7f91f0"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item221313ed-4373-4a2b-a2c0-e2e261365379"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemd3783373-27a1-473f-b5d2-5074ada5df1c"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item5a582a06-6f7c-43a0-b99a-5e567699ac54"),]),
    getItem("DForm Modal", "Item02481de6-6efd-48ff-b46b-d1ba12cfc202", <FolderOutlined />, [
        getItem("Async", "Item3e6e316a-03b2-44f3-9b40-f8d88c83b29a", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item77bd92e2-9883-4c48-8512-5fac930dab7a"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item1d5966c0-9b0d-4810-bed3-73eaaedd4df7"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item05aef217-04f9-4295-9f2c-517bbda82172"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item5661e3fd-2630-4baf-b676-89b4cb95674f"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemb21605b7-a8d6-4a9f-85b1-42e53118cb89"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item185ca814-8617-4da5-b86d-66716a10518b"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item5608ab5d-f6ab-4aa6-bbd8-7500768b0fb1"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item5a439e84-b42d-4f6d-8d17-01b8162a9b6c"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemd73126a9-057c-470b-acb9-4de17980128d"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item9a4f6779-5b07-4353-b490-4e1b6ac1ddad"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itema4a65314-7d71-43ad-9d9c-4c9b58eae367"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item451a6821-b0e6-470e-963b-4b38e2976382"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemfac8fc93-2863-4d9e-a356-72e641fff604"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item121f544d-59cb-40e0-8455-60b951d25128"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Iteme9ccde3f-e768-4520-9864-85b2c01e8472"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item68406383-6bcd-4494-beaf-4ceb6b2c2b63"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemebb5659f-b44d-4d8e-90fa-12a692cb6ed1"),]),
    getItem("Modal", "Item447380dd-521f-4fe4-add3-a11f77f30b39", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item4f74f5fd-4d24-43a4-aa20-213b25e53b84"),]),
    getItem("Tabulator Grid", "Itemb26f047e-11a7-44ff-b27d-f16386082fed", <FolderOutlined />, [
        getItem("Async", "Item331e4936-cf9d-431c-ace9-02edde1cf7b2", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item7acf2906-5e25-4e36-8049-76a16b3a9350"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemd4189d88-5724-4873-8479-27811f54aace"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemafc8fedc-2efb-496d-818e-edf3bf19bd5c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item6e09f662-8e69-44f4-a76a-4bf7d88296e0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item2fce2bb0-c06c-4aa3-904c-addbe1570c38"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item5c277ac2-3c63-4e48-aa83-745b944b5046"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item145cefa0-2f42-4fb4-af5a-eb6966da4d29"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item81c016e6-f6cf-4fd1-a759-1e447375ffd4"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemaff63a1f-3343-4fc0-a849-434d28be20e3"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item2870d76b-ccc5-4096-880e-bcaff2a713f8"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item5115abab-699b-42c7-9236-29d127192f04"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item7d54141c-5fd4-4f99-851c-780b1faa7ca1"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item49cbcd11-28f0-4c33-b540-ed6c3b61f311"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item4ecee681-8888-46cb-95a8-d79dc16eac11"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item5e62e8cc-9604-491f-9827-944048877037"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemd8fda4fd-85e8-41d6-944b-4b01ce0812a4"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item92236f80-db12-4171-8431-b4eccf3274b8"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemd5cd6df5-0b91-429b-a57b-a1c6913a9197"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item566302eb-4960-4816-ac21-30d52f41d825"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itema56d0e0f-b680-4a04-9bde-27747a272f79"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item751e7035-53a8-426c-9e61-b2468b7ce5f7"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item4a41e1e7-1af4-479a-8ae4-ec7d331eb217"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item2a57b212-8f2d-4981-913f-06f86b1ae46e"),]),
    getItem("Tools", "Item13dcc467-3a0f-4b5e-9330-e9f79251bebd", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item5e1d7f8b-2a40-4b3d-893e-1108a4ae24cf"),]),
    getItem("Tree Select", "Item572a1fce-beb0-4d9b-9344-ca90439003ce", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itema9c2890b-1977-49f1-97bc-2995744f7ba5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item5cd72429-0b7d-4ca9-88bd-cee84f353204"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item44507367-7f36-4e20-9ea1-360a5833ccd7"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemf6152e6e-65d2-4ec6-88d4-b31d6de556fd"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item6ccf468b-7098-40b1-bdfc-5e938dd10ccf"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item3b648647-b7c0-421c-a523-46882c2ed947"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item7fc02870-8b43-4edc-a3ac-62de16312c6f"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item100ef40e-3f4f-43bd-9a98-4f9d272fbca3"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item58a05cef-90a2-4e8b-a504-9c8411f764f5"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemcc88815b-3c28-4b95-861a-45f2d62f775b"),]