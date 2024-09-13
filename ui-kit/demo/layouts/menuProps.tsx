
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
    getItem("Other", "Iteme96409d6-bb75-4f5c-aa7d-a0dfc638e09d", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item640bd2b6-64be-490e-b722-4ebadee4ad2c"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item4a753cb8-1a9b-488d-93de-3165dadd150f"),]),
    getItem("DForm", "Itemdcaa066e-573a-49ef-a39b-a57b0d4db973", <FolderOutlined />, [
        getItem("Validation", "Item02ed2731-0111-4c32-88ff-3bf500d1a81a", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemc211891b-d507-4fb1-a9c6-d722780a4c5d"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item4dcc8769-f87d-4dfd-86be-00f1a4b18be4"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemc4dad25a-9fb5-4b7d-98da-7632463674f5"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema1c1b70d-ab48-46a2-837f-15e16e795604"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item48a86b95-04e1-4001-8448-a015dcde90e1"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item4daa715a-6533-444c-b06c-2d4348d6b269"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item1d0b2951-76d9-4b9f-8f9f-88743e4ebca4"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itembb31280d-9e35-40cf-8102-08f60dab771f"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item7fd652ce-004a-4919-b709-959eb1ccef9d"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item0f405e30-70fa-4032-9633-857bed361314"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item314f9bad-c711-4b33-aafd-294dfb53b489"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemb11dc86d-a166-4c12-a91d-e837a55a86ef"),]),
    getItem("DForm Modal", "Item294dbe12-18b1-48c7-af7f-366cbbf110ea", <FolderOutlined />, [
        getItem("Async", "Item4897c837-25fd-4809-8003-aba59585f498", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemb433a90d-53e1-4a65-9b59-605822b0e1f0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item391315d6-042f-4aeb-b5c6-e636b91a61de"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item5dcd5f1d-073c-4ba0-8c43-4cfa9aae8db1"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Iteme2966b35-647b-43ae-bf8b-8ff6f3cb1888"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item1c923c92-5cbd-4071-9df1-85079e40da13"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item72994098-bc56-45c6-bf23-8ec9f2622b7b"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item3ace3dad-5c04-497b-b00e-d30b3b87f637"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item4930c6d6-a3bb-421e-9a19-2aead88d9523"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item1bd45bb5-483e-4617-85bf-408c89b10baf"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item9c5a03ea-4cd9-4ec9-9e95-5e6de6489f11"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemcd02e54e-7af1-4538-9b23-b19de3ff33b9"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item33e30bef-91ae-49a4-bbbf-dbf9649ce62e"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item30c1d78a-c572-4152-9dda-801d449f13b5"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemfc311562-c7f6-440c-a31f-f38dcb24ce02"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itema3a61352-4975-4b5c-bdb1-0867125771dd"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item97b137c5-1f0e-4c45-bda3-079de8eedc03"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item5a0b51b6-9bb4-457f-8d94-776e14ff1895"),]),
    getItem("Modal", "Item2af5bd93-73cc-4cc7-ad51-d2219bcc44ea", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item24357ca9-7ec0-401a-9248-2f4e82f93092"),]),
    getItem("Tabulator Grid", "Itemd4cd6908-ac8b-4d65-9f26-818d14c0a3ec", <FolderOutlined />, [
        getItem("Async", "Item22c70b33-f82f-4159-bf7a-d0231375ca4d", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item085aad8a-7b79-47e6-9d92-90b32c8cec16"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item9ff70563-0732-4d2f-83b4-64d2f47e091e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item40e2051e-a15d-4d0b-ad22-bc800d5aec5a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item475a2136-b064-4f41-8a57-d906ccd228dd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item0bd8a9c9-d9bf-4229-97ed-259ea33e8a0a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Iteme2f684ad-86d0-4d0b-ac70-907faf006de0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itema85825da-dee3-44a7-9694-e67650789419"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item9d067ff1-c1d9-4e61-8a73-d6c867dfcde5"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemf4472d1b-73c5-4df1-a364-e17532332bfe"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itembcc663bc-e293-4d52-bd2d-0b7c682c5a7c"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd1278dd8-c8cf-4402-884b-3e86af20b7e0"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemeee774db-a512-4c5c-9d62-b7630b78d20b"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item7efc6738-b2d0-47be-9c31-6908dcdff9d2"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb3c6ac4e-e6d2-41ae-8bdc-fd4e8f967876"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd9592e45-f87f-48dc-bfe6-e6330888d2c4"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item41a9e5ef-aadf-47ed-a1d1-87028f59bd8f"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item32f325f2-7b3c-4821-9d1f-ab7e1291b7d6"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item9d36bf49-fd07-4beb-8b81-5a38ed43f063"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item64eb249f-8bc7-48a1-a25a-5cdb9f694ca0"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item804b3906-471e-4efa-95cf-66c54a490716"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemfb8d6cbe-b802-4e77-97db-0b1a9ca3b9a3"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemeffff336-4107-4e6a-b9f4-b2b622f900d5"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itema9245605-b297-4244-bb02-6b13bc4b9a80"),]),
    getItem("Tools", "Itemeaf79552-837e-48a3-86d0-c2067b092323", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item283a3c08-a96f-4ec9-916d-b7c42606114a"),]),
    getItem("Tree Select", "Itemc9347c68-d475-45de-b03d-67db260c0c94", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Iteme30858b4-1955-45c5-9751-2e44d89a2c17"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Iteme82b3607-c3a5-404d-a090-788d2d7aee31"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item9df05d51-1366-4e02-9e3e-29c055c544d9"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item01282825-0cd6-4045-b58f-a42117c85fcd"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item8db78f2b-5dd9-4a7b-bb30-268e11c2f6e0"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemccdfbda2-e018-4f24-916d-1ac2ad41ad38"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemd6b27771-d141-45cd-9ca6-1e36ee114f23"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item5beb6282-a665-4f97-8822-5306815f37f8"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item62642c12-252b-47ed-8e06-c1403aeb5197"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item4523ff48-1630-44c5-b348-2980df6ca4a3"),]