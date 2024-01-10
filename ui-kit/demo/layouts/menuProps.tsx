
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
    getItem("DForm", "Item19c1271f-51a5-43a3-b7a3-8c1992c5e9a4", <FolderOutlined />, [
        getItem("Validation", "Itemb9db86e6-23b6-4e52-b4ec-bfc5a129fe90", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item8e352152-dab4-4d65-8768-fb361694364c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemcf0d1617-4fc2-4ded-976e-c762f76e1d56"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item3e300e05-70d0-47bc-933f-efbaf69d3ad5"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item87c272d2-1a03-4713-ae0b-5e3fbe1bd57b"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item7c15432d-5fd7-4627-8489-50dbb032cd83"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemc5b4d8f4-dbec-4a14-96e4-dedf93506392"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item7e6f6ac1-efca-4d11-ad7a-99e034ee0b15"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Iteme1db1cb1-af2a-4cb1-aa5c-e6dc16938bc2"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item859894d1-bf70-4187-ac90-ba63d10945a2"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item0a988cdd-b7ea-4361-bb99-52a843160d76"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item3836a51a-1ea2-4a5e-9bc7-ad09daad13f3"),]),
    getItem("DForm Modal", "Iteme126f947-5243-4b9f-b143-7adf22d396b8", <FolderOutlined />, [
        getItem("Async", "Itemc961d20b-2ce6-46ad-b840-a602ff8eb2d0", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item96f35572-6a6a-46dc-a3ab-7a880a29b8b2"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item45a54fdc-bc9b-4140-b6ca-319ff18669e2"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemf9b97b73-9ce2-4dc9-9e61-60f627e3c7a4"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemca88e033-593e-4d89-a461-674a9a04e53f"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Itemdbcad46f-695a-4dac-b824-e2d56a03e91a"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itema9928cb5-a41c-4057-b6d9-9855ac80b708"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item182eaa43-bc61-41e9-b5b6-ca9af06c9e8b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item15e6635b-2602-48a9-b9ea-895917f39d11"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemf15e05b9-4894-4876-bf32-d2e79d1939eb"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item425c26d7-c58e-46b7-aa3e-485a7350e0ee"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item816f7c13-8617-4e18-b7ca-54562bb60197"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Iteme3092d60-2b1f-4723-ab55-0c2e78a04422"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemf27a7475-d797-496c-b5a2-a02dbf1404f9"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item7cedff30-521f-47ca-a6e1-b9157cf0c1ed"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item9f522645-6cd5-4d83-937a-8a35defd5a60"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemb1aa8c6b-59fd-456e-a614-7a42d0a89216"),]),
    getItem("Tabulator Grid", "Itemebc75abc-d9ee-43c6-ad33-7abae4f00477", <FolderOutlined />, [
        getItem("Async", "Item7aed45d8-f0ad-434b-9809-58e4b96ccc45", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item188e5b8a-cd89-43e6-ac89-12a4b33ba09c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item7eea6e23-4015-4a4c-a182-f85c6ecabead"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemc7c356c8-ef47-4091-a434-561e2eeb49eb"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemc8ff9987-905f-437d-952d-b47b3427cf81"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item3a9b07e5-c5df-4057-af3f-215b58254dbb"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemae19d58f-de68-4338-a954-8987a923ac2d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item9d3ca6ee-cc85-4c21-baaf-62ace92ac754"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemec632d24-8cd1-4659-b632-abc132b700c1"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item45de3188-15b0-4dbc-9ec1-cafc715ad1d6"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item495dadb3-475e-4cec-a49a-ea77e1ff4931"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemc5d49def-ae36-4e9b-b704-953744c19d8f"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item73875876-07d9-441a-b941-7d72bfe8233d"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item40af2d8b-9628-4d54-add0-902b85fc9680"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item1af065e8-977e-4046-b5ab-341a93480981"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item5e2efd3c-c180-4eae-83b7-c6c20cb127a0"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemf73646dd-b14a-4436-8745-b643791aa8d3"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemd6c7d3c3-98bc-4049-b522-9ebbd2f05867"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item3ef2e3f3-d112-4c5c-94f0-126cea86ba3d"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item80434ea1-0f87-491a-8b8b-fde37505643e"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemf0e45143-76dc-4aae-afd3-e76e838631af"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item6c4f041f-d5dc-4cea-81d4-aa8a0ef64c4b"),]),
    getItem("Tools", "Item413fa9ed-23e7-4cc7-98e8-dd5cbcfe6011", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item0726c868-0512-4efa-abfc-e87d07c193f2"),]),
    getItem("Tree Select", "Itemaca734f7-657d-4c31-9095-16c8dfa80a5e", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item56b946ac-d3a1-4b7c-811d-6ed71918ab79"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item78319e20-d6e4-4c85-9e55-3b74f6e27958"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item98be7db1-43ce-4c8a-a23d-5362ae5ec221"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item4d80d24c-4a3a-4daa-b658-2dbe65b38c8b"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item493cb96e-d8cb-451b-8659-bc3711561e9c"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item0d6184fd-ec4f-4c57-8ab0-013e56ec25be"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemc672684c-1ac5-4f66-8ffc-7f542c85335e"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item489bf54a-0fba-4b19-9d59-cac77c8f7522"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item05a3a07e-9934-485b-959c-9d295feaab5f"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item6a16852d-9fb6-40b0-82a4-f71f93a43231"),]