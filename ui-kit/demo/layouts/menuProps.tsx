
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
    getItem("DForm", "Itemfe868123-a512-43f7-b911-a44dee8d95f0", <FolderOutlined />, [
        getItem("Validation", "Itemc3679b58-e2b5-46c2-87be-f48c0b4bdd29", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item32591e29-5449-42b3-b52c-6ab62979e484"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item28fff185-fd19-4973-8d9f-c6a1d3e7df7d"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item89e00ba3-758d-4ddb-83db-1a79debc460b"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemfd2208a9-aa82-406d-bbe7-354842e53fcd"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item8d307b7c-21a6-47dd-b8f2-e61e76834636"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item7d909412-597a-4025-8800-14e88bcff624"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item5afab6d4-8702-4d79-b7d8-4d9287ca3b35"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item6d7c499e-bb8c-4223-9810-2445099c64dc"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item5df34d48-8fe4-49a3-96d5-57dec3c2c5fc"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item6ae8b0f0-9cf1-4415-a3ac-15114a485712"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item3ca3a08c-d616-476a-adfc-c7a9bd9834aa"),]),
    getItem("DForm Modal", "Itemfb90b1ea-1e9d-4add-aac5-11277659cdc4", <FolderOutlined />, [
        getItem("Async", "Itemedc78e32-97b3-4be6-b668-f4052b8e5489", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itema8c0b524-01c6-4f96-ac36-eadd8e0338ea"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item9d72cf67-7ae7-47ed-af8e-73d684261a81"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemb34701e5-dd2c-4c2c-8702-ab3b3df53880"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item13af35e0-492f-4283-95fd-acced52ccf07"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item80af9cec-505e-41f1-bcfb-6daa2f00dc3a"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item91465c19-f97f-456f-9524-da89e8073833"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemc1b3d56d-df83-4d02-854c-917bc08f4ccc"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemb6e4e455-f818-4649-975d-7af191ca78a4"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item89c9e6ad-5e3a-4e88-a3a8-a097bcdb360f"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemb7f800a6-3d1e-48e6-ba9f-f143e67b54a8"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item0a31aa80-ff1f-4a87-812a-a0906dbcdeb2"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemc4928ac1-3334-4ab0-acf4-eb225ea81a2d"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item8f27b89b-64b5-4761-81f6-ada505f7216a"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item53e917d5-5866-4526-a971-b073e1783df3"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemcfb59ca5-8912-4589-86bd-a519318f5d2c"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Iteme76e09d2-4b85-4740-8d6f-1aff7cb8966c"),]),
    getItem("Tabulator Grid", "Item630e8ef8-6591-43e3-960c-f6e4ba2774b9", <FolderOutlined />, [
        getItem("Async", "Itemb9c093ce-c0be-4b79-a158-5888d75d642e", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemb34d2543-6156-4344-9a05-3e50c2ec93a7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item13844b8a-c770-483a-b5a1-93cca6a00871"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item6a4ef86d-6a00-4847-9029-1bc3fa1b91ea"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemc5e6e528-9db8-4493-bf93-e8648b6703e0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item5e90839c-0617-4fe2-b22f-b269c4f2e2a4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemf27c0342-d460-4ce7-9b8e-1eaac48fa1e1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemee982b02-472b-487c-b3cf-1628ea0e84d7"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item006bd497-72d9-4854-95a9-3e2b023d214c"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item30ca22cf-e9d7-4b07-beea-57a8c0bdd9de"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item4c6dcc09-d09d-4f7a-95e8-2fca0382d4c8"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item647b7e2b-b9e2-46b9-861c-c2fd87a87c15"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itema9caba44-a569-4725-8711-9958b6121183"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemf1368a41-6757-48e5-8771-015819fddc63"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item9cc49bf2-48e3-4af6-b6d1-6a112b29c959"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemf513154d-c5cb-4ffb-bb5a-834dc5923f0f"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item7e086dcf-4dcb-4869-b449-a0ba1602e5de"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item80583159-15d8-4eb3-8985-72021d2e5927"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item94740aa2-f436-401f-ae56-20db50b98106"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item6929fb03-6ac7-4f85-a364-f63d33ebb343"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1998749a-41a3-4eaa-b3c5-d44430ad1539"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item4357d7d5-d4df-43ce-a307-70f15924fdab"),]),
    getItem("Tools", "Itemc230b6f7-fad6-47ed-bb1d-9a6f03df0c72", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item06602db2-7a8f-4b1f-9bd5-8cf1f09b2222"),]),
    getItem("Tree Select", "Item353e6122-1278-46d6-bc56-15210b024f4f", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemec8cec9a-91a4-46f1-a0b0-60087e4af693"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item375c6a04-f8d1-4f25-b12e-6c9be7e0c895"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item1e913195-ce7b-4217-a435-6fb579bd3722"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item67b7dab1-1c67-4efb-af33-a448a9e53d68"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemf63f7f01-dbd1-4b40-9755-280c96a6f97d"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item82ceadda-c0bf-4b05-a81d-7b0d7cfa2122"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemcdeae65e-4bad-43b2-8399-a03587184f30"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item2f740ba1-b133-4b6c-b85e-5739a2236870"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item33c39c47-bdc2-4060-9b84-91ba0b92aa74"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item62a0ac6e-1661-4b53-b76d-a07ff4d71e62"),]