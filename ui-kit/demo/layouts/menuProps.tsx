
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
    getItem("Other", "Item7f2b7175-6e1c-49e5-837f-fb77539bcd3b", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemaca54358-8027-4acc-9e41-e3a7cd5a7c30"),]),
    getItem("DForm", "Itema6ff2e7d-6694-466d-91f8-273683ba5b2c", <FolderOutlined />, [
        getItem("Validation", "Itemc5a86fee-d36e-4403-be40-6b6c2e4bd9fb", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item698be125-ecec-4474-ae45-13a5b2e3b205"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item0404ebed-858c-46ea-9d31-27b9b93fc3b4"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemfec1e01b-f032-4b95-80c4-99dc9a82b85a"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemea963192-d10d-42d1-9189-a0f2d7afdb72"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item657bcb8e-ab1d-406e-9a68-b6c40e4060dc"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item3e9192db-ac48-4e12-9d1b-c0aebf51ca4b"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item36a0135b-bb3e-46cd-872b-036e3a69f86b"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item577bd50a-cf38-4f65-a697-c0da84b023d2"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item88631f04-16a2-4939-82b8-85ba78164b8e"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item833aa67b-390a-4977-8952-b18d035d575c"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item07656c31-ce63-4e5d-87b7-f7d5c032a194"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemd4a36897-c2d7-4e91-9d3a-ef09662b48a1"),]),
    getItem("DForm Modal", "Itemb0cd2d3e-6b9d-41b5-84a4-e3d263514f98", <FolderOutlined />, [
        getItem("Async", "Item2747379d-1741-4319-b4ec-262304615609", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item09a9eda5-ee1f-4a5b-bc22-02d9084065b0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item651ea930-95da-4bc1-a96c-816add275c77"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item576ef921-5766-4f81-9660-3485d45b7785"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemd2a68415-7466-46cf-bba5-99188eb7148b"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item4aa717a3-c94d-4ac0-8c94-5d1949e4696a"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemc87ed0ac-bca5-4e81-bf4a-2be8c7868145"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemeabcb003-3e9b-4a44-9359-5a7f7f63804a"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itema0b52b87-de0f-4cfc-a7b5-cc36ed31dac8"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item36e73dcc-6570-4d40-ac9e-fb959570fc0e"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item830b9d43-d0f4-441e-9a88-6f8ea8aeae51"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item24e0cc22-005d-4148-844d-a9b1e6974626"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item636cdce1-0944-4da7-99b9-532eb7137a58"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item59f44c74-46fb-4c60-875b-329f889f1f23"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itema1b00018-f7d7-4553-90b3-71bedfe2d754"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item421900c3-ae5c-4e97-9dae-d955ba74bcab"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item7e39f889-0b3a-4d00-8e14-678581e46736"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Iteme09c2efb-da0a-420e-b0c9-490a6896315e"),]),
    getItem("Modal", "Itemad8d120a-29c7-4dad-8a11-01c1689faa29", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item9912ef16-2931-498a-bb7f-b08bd22257a7"),]),
    getItem("Tabulator Grid", "Item6bb70497-b685-4def-bced-db032e68b94f", <FolderOutlined />, [
        getItem("Async", "Item3fffb396-bf54-4ce8-b278-e98f84bbb55e", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itembcb30576-e429-439e-b43b-3ab6c0015ff3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item04ce7bf5-89ce-4bf8-9aa1-03c2ef00a122"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item2092cc84-b584-4985-8d05-9bf41e82e6ef"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item815605e7-7696-40bd-913c-b29c24b8c942"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemf7636224-d658-4f64-bf77-f1f254458e7e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item925dbb61-15a7-4e4c-b900-43929aca5ff5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item80e7b1f0-d7ee-4ce6-b7c5-19c81f71fdb6"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item5a7c6791-bd45-4e9f-8ce3-9cc19e12b203"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item74877f39-1296-4d16-9d62-4a7c63517b53"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3411ed29-c905-4064-920c-40859e7c52e2"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itembccf1247-2663-4d82-a479-041d913dd5c7"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itembfd1b56d-9947-4324-aa00-b46464128826"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item270206e8-dda1-40fe-8026-a1c4acf2c102"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemd5802cf6-538d-428b-9049-1764712d8b65"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item08a8fab9-54f8-4a3e-8a58-aec69ae813bd"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item090a7ef2-b4f8-4eb1-9e7b-0af47114db7c"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itema73797d8-6456-4e9d-a929-e72ea02226ba"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item13cdaa93-2d14-429e-ab74-7fe87ab49c2d"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item1032a0a5-5236-4b1f-9ebd-78c3f873648b"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemff5dd25b-ff61-4ed0-8cde-2ccadd0b2ded"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item2e80a4be-098c-4ff2-a23d-06b3c111f217"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item56cb1742-7650-4e19-bfe5-c517072c8b32"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemb76efb45-b1c0-4d06-aad7-5bf9b056bde3"),]),
    getItem("Tools", "Item5484cb33-d16e-4cc4-8f01-d71a6a5cb3b1", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemd169d79e-ca8c-475c-b9af-cea510dc7cb8"),]),
    getItem("Tree Select", "Itema039eaae-bef2-4d3f-83b0-dd5eb0bd1bca", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item85becd96-4732-45dc-9a16-779c41959a1e"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item18763c2a-8ebf-4b50-bff5-4f4b61a78d76"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item8a07cd2f-8576-4e29-b9bd-2426d49bc9df"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemccc7ae98-5013-41c8-86a7-7375b3fa71d2"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item1712d793-71ee-4d02-9109-d9234eb35e7d"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item1f1d9e88-5484-4eba-9710-10261ea06ff7"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemaee06d11-3510-4aec-bb88-48a44a257eff"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item59b56e1e-72e6-4d58-b14a-c93a3214d7d1"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item0044b02c-d4d8-4110-912a-e7b52acdfcca"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemd1929efd-311b-4f2f-9f34-ed870322cd99"),]