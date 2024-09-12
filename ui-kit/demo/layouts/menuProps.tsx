
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
    getItem("Other", "Item6bd5b0aa-44ff-4789-9846-24e9debe06fc", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item4ffd22f5-29cf-4191-81e3-c40efee96b3d"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item435c4129-a3db-4f6c-8c4f-b161b546e3b6"),]),
    getItem("DForm", "Item7274d937-d671-465b-98a6-73a51d1dd02e", <FolderOutlined />, [
        getItem("Validation", "Item36e142ee-c6d3-4240-a4b7-548dbdc14ad7", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item8daf717b-4580-44cf-80bc-68552e5d66f4"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemcd62c794-2c8b-49d9-af0b-0b5d2e17f850"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item36a4bd0b-3538-4f91-b65e-d959bf16567f"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item36b9d12f-4b35-4f08-b9da-72df3ea63b0f"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemc038e242-5528-4ed3-bd5c-615cd3a80438"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item775e4968-355b-429e-bded-5dcf7557d39c"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item6aef602d-17bc-4593-95fe-878d539bc517"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemd763c082-1ed1-4f26-a760-2bf248572cb1"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemf67136ff-7b6e-4703-9e61-e766c4d565d3"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item8df11dae-5ea8-443d-aa17-669292eeb7ee"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item2d1dfa23-f355-4724-a89f-270e6bc4d933"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemc7e1989d-126f-4672-b101-c89ffb4711d6"),]),
    getItem("DForm Modal", "Item0b202372-b466-4f53-b2ad-a3a742c4ab02", <FolderOutlined />, [
        getItem("Async", "Item85746635-e36c-4295-8a08-4637a42aa4cb", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item309cc25d-5641-4e64-96ab-2e2e788ae415"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item6e38fa4c-79d5-4092-8da0-af0f313bdd62"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item36de7a51-3a0c-436f-b32f-3edaf0381d10"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item5a6a05da-b372-49f1-b142-04b2a57a0bc5"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item14f81634-21b6-4dcc-b2af-a3d26d7234b4"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemef9021b8-5c7e-4cf0-bf4c-a7de9997197e"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemc1c84584-2a1c-4101-a894-f58bfa3fca4c"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item5da1dd77-7dfc-457e-bff3-f551247f8317"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Iteme15906ed-f21d-47f8-94de-41d8d2df57ef"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item33c3b1d5-4b89-47e6-a4c9-ace25c3aaae9"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item72aaeed6-5557-4987-9eef-aaa788afd3a0"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item76457170-4ef7-4840-9e96-785d50fd2aa8"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemfec2a44b-7302-4821-9317-18c0b2637dc1"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemd90d9cb8-8191-4ace-952d-0905652e214d"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item3367315a-1565-48ff-abfb-35b09f43f707"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item5c7629dd-a6ae-4754-ae3e-bd05d4abcefe"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item3ef0d50e-ce62-42aa-9cc3-01dd5a98e4da"),]),
    getItem("Modal", "Item140dbca3-4d23-4a25-a923-8759f7246800", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemae6bd96a-8778-48eb-ae72-afd9b465e1f3"),]),
    getItem("Tabulator Grid", "Itemc44612b9-2b27-44a8-b498-2b29053d05ce", <FolderOutlined />, [
        getItem("Async", "Itema03ca87b-ceb6-4bcd-b3ae-4915da19d1c1", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item903c06d9-0eea-4d8f-8d2c-866814a669e8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemf7564b63-1eaa-4747-9325-5779e32ad7ac"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item3b80d030-7dcb-49cd-b940-828058ffe25f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item79f4b0b5-4fbb-4fca-9ce8-9417563dd653"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemb7584602-1ca7-4109-b8f7-49293a4638e3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item72c7387b-57de-4bd2-9d44-716a4d9945a0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item8ef23255-4ebe-4da0-9115-3326de31df7a"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item769c90ed-b859-40c1-a857-fb39ee528e9f"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemb3c9004e-fbae-43e6-95c4-a29143131c7e"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item50bedd95-d03c-467e-8b53-d623fa4c96ab"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemfa2c9430-d89f-46b8-be4e-70387a9871a8"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item01f78f94-ade7-4512-a1f4-7d1436cc3888"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item2d646c5d-dd99-42ad-bf71-7c381dada8bc"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item8c96035a-a3a6-4bbf-b7aa-c57d3380b60e"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item00566347-22f8-47aa-af1a-1d09c3b2e77c"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item55157ac1-4aec-4570-b665-97376cc48859"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item2c39b659-099f-4315-9312-782b7627e5d0"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item560e5557-42f4-466a-a39c-9331c3896fc7"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item8cfe46e9-4a93-4ee8-963e-cb63ebe4a14b"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item24453f8c-5e8e-4bb4-ba02-fef34139512b"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemf311ab7e-63a0-4bf6-b7da-1aaa027d8662"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item7f197329-205f-4267-ab59-bfa0f20df705"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item4acb552c-051b-4e51-814a-f5cbb3f9777c"),]),
    getItem("Tools", "Item4b114d91-ca06-4ac8-a795-3c7b9a63f930", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8ba01125-7912-41ee-b8f1-1edd261e6347"),]),
    getItem("Tree Select", "Item9a831528-ec95-405d-b7f1-db007325308a", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemd442b7d0-ebcb-41ed-8891-52865829020b"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itembed2fdee-af76-4af8-9fa0-59cc0abcda5f"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item607984e2-483f-4918-ab36-6803dead86a0"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item2ccf1121-ff48-4fdb-b626-093137fcceea"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item11cf47df-4796-4091-9cc2-6cd55f4a4ee0"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item0a360c94-a9ec-4008-9f36-2135195a04b9"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemc0b0005d-ac07-4e87-9713-6524ab86c5b6"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemdd7ad3ac-9f67-427f-b08b-67491701e779"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itembf58ef80-5a7c-497e-8884-7894b648a8fc"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item69110b09-2ae1-4401-8e08-27899bdecd4d"),]