
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
    getItem("DForm", "Item3c60c71c-814c-4e1e-b866-ccd1ff9abc86", <FolderOutlined />, [
        getItem("Validation", "Item12b0e8ff-28aa-4cb6-b4bd-436e79462b26", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item84e9ae6d-058d-4bd9-a6af-e6d41b4961cb"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemd996b5a2-c1e0-4aed-848a-64b098855ac3"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item15d27b11-c8e2-4045-974c-7c69c4c98284"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemeca03e44-6050-4783-8e62-7a5f37a4e117"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item77dd8130-97a3-4b5c-a446-c474c7ac1549"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item1f1f7cbd-8aad-413a-acaf-451c4f6b8ffe"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item9970d27e-2f7b-4875-801e-574c5254363b"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemddafdda7-c8e6-45be-9563-874747721d58"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemed8198d2-35cd-4d09-950c-72b82732d1f9"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemf6b83a10-6cc9-494c-8939-89f2ce540bb5"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item701ab0f7-ee21-4f7b-9750-586a19485a8f"),]),
    getItem("DForm Modal", "Itemb038330b-dac1-4cc0-a492-58cfe87c6735", <FolderOutlined />, [
        getItem("Async", "Itemef32c20b-dbd2-4310-9311-ee0dc4eadd19", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemb7baf4fe-80a8-47c3-9df8-d4fd354de178"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item4aaa0a7a-2e9c-422d-81f0-eef6581a314c"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Iteme960542a-67a3-43ee-a6a9-5c6fcf3279cb"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item5a8acda6-9b6d-4908-9e05-222ad67c9efb"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item7cf85e01-844e-4fad-bc05-1d7aab9dcfe9"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item6db5127d-634e-4d7f-9d50-255f06d4270c"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemabadc90c-f743-4ac1-ae1a-de413eb8e7ea"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item7d6aa154-38f5-4840-aeee-44393994078e"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemb08804a7-5f40-4728-b55d-b21b13abe651"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item735f09bd-df2f-4969-b4e3-2c065367f66c"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemc3d1eec4-32dd-4801-a3be-b998d3dc8e4f"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item81203cdb-ee70-4dbd-9649-a2eb387b018f"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item063b3d57-90d7-4b8a-a9b4-b728487a8572"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemdc4ec80c-8b95-429b-b50f-91ae8b31e704"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemf8c242f7-19ed-48bc-8483-7d2677db804d"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item94eb1a1f-3863-42bf-ac66-44800bc3cf62"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item41689eb6-002d-41b6-ad94-237d8a2f7a34"),]),
    getItem("Modal", "Itemff6ee12d-1dda-4791-a6a1-197e85acb5a9", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item9036f971-6f8a-4e6a-89ef-c346236ac0f9"),]),
    getItem("Tabulator Grid", "Item653d409f-6b55-4d93-86cf-a12d7e08a7a0", <FolderOutlined />, [
        getItem("Async", "Item0e41a04b-9dac-4a96-8b10-946484dda8ce", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item19104593-aba7-479f-9d56-50b1ce2840c4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemd886f7d0-2531-4568-8144-f3db5f389783"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item21161908-da65-45f4-adf2-973b3c9721df"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Iteme647c67a-e978-4a57-be94-d66d71328b9c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item297a3280-3696-4be5-bbb6-e5b6a3db8dea"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item0dcee5e4-3707-4f99-9b1f-de91f039a003"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item8594e42f-0384-47de-8c8f-f9e8001998e0"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemb2d0a466-e191-45c7-a4e7-c91c5f32ea94"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item0f37936e-c911-47db-bf42-f05095a239fc"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Iteme520f9a8-1ee1-4399-a596-bffe19c94703"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item598e3304-09dc-4ab5-a68f-34fca4ae17e5"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item3b548ef1-82d8-481a-944c-7499455c1175"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item01d69cfd-f65d-45e6-9288-c4d19538014c"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itembcb489b7-4b16-4431-ad72-0d9e58a9a52f"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item1f0af74b-ca66-4350-85e5-b520c2653e97"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemb9d1b4df-4b14-428f-88b7-06bb72448797"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item336ae21d-1db2-486d-8162-b40ac26a1b50"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item079ab5a8-219e-4e61-9558-77971caba0ec"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemaf4c38bb-c731-4b9c-9728-f9f83db308ba"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item25ec3b46-39d7-46b2-ad55-ce4c457c1f3e"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemcea62875-b654-406a-9a65-e041015cd708"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemc539c2ad-f5fc-459b-afa8-3a7d204c2fdc"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item1897c9f2-9b39-41d6-b29a-a3e13a93eb00"),]),
    getItem("Tools", "Itembde90b98-0dc6-4cfd-8e00-74f151221378", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item7d72207f-1425-451b-9ef0-d91210726ab2"),]),
    getItem("Tree Select", "Item25fef5cb-f37f-421f-bf93-62413810a7bd", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item5729d560-70fb-44e9-83f4-9aabf76128cc"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item844b3c1d-0bb0-4c98-9028-50e76dca40cb"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item5dd2b37f-ffff-4d5c-a5c6-3a82512ced7c"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemc2c816e2-de5f-4aec-831b-e7155994d66a"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item9bbf6cf9-0bb6-4fc5-96c3-982a85bef867"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item776fcb6b-b29e-4ec0-a76f-1aec76ee14af"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item58368fa8-9f39-4124-bc58-f88e647920b5"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item1ce1b531-6cc3-495a-983b-6b9970ba2192"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item54c883b5-1c9f-49af-8f71-13ae9f34a2e7"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item36d908b1-5404-40dc-89e0-ce4dd711325a"),]