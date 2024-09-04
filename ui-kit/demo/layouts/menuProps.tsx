
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
    getItem("Other", "Itemeb65bcf8-0669-4cec-ad7a-5c6ba42ad148", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemb51d5eae-ac7e-4a56-a568-f3eba0032a65"),]),
    getItem("DForm", "Item69eb52e6-32a4-41b2-bbc4-0f67e2fd792a", <FolderOutlined />, [
        getItem("Validation", "Item2683e2d4-d34c-48a7-a3bc-9b3a2c23d778", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Iteme0286216-d1d5-4a11-8183-86cce41ac555"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item44278f62-5396-4157-879c-c739e4db1edf"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item65f1605c-d643-4698-840e-7aec8bc48557"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemb0772c17-f553-467b-96a7-3186c75b7267"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemefcb27c8-1aaf-459b-8a47-6d345cd9114a"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item27fe08a2-350c-4076-a919-613921fe76a0"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemb3c107d6-ed16-464d-b427-4761dedd663b"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item39477b9c-fbf1-45e4-a0b8-b51bc048445e"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item22774afa-aa87-484e-9abf-f320932cbbd7"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemea31c029-8a3a-4876-bf57-7a88211a414c"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item66cc6b96-67e2-4f78-bb41-fd0f40b85188"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itembb4fab89-77de-4321-af1f-f4da3b205510"),]),
    getItem("DForm Modal", "Itemf986c059-a44a-491a-a2d6-97f26c7d393f", <FolderOutlined />, [
        getItem("Async", "Item66204890-eefe-4502-acf5-a74a9b775f87", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Iteme15e015c-c839-45ad-b552-5be307dde795"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item54280fa7-53a5-4a92-8067-feb6b01b0f10"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item811e1a07-611d-4fbd-b0f2-a8114f80983a"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item90957865-796f-4d1d-9cf0-3ee1cbb6176a"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item1104709a-3e45-408d-b808-5e2547242801"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemf958238e-807a-45de-a614-e5baea0e0b94"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemb4108810-7976-48e1-837b-be6cc5ad9d37"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Iteme2fb8517-1008-4200-91b3-983ae2d6f257"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item6103937f-d492-4f75-a2a2-b3a965fe910f"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item2ef56863-3ff0-499f-8146-83c5344623ac"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itembfeb6cb3-4472-4819-a921-a4995bad9d95"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itembe6e2e3e-4e1e-47c5-a4f3-5781106efa4f"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item92e1867a-4b2e-4b1e-a5d6-adcd6a015552"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Iteme536e4bc-ef1d-450d-b938-a08d4675d6b1"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemecc98d19-bbc6-45a0-9caa-d28a2af045f2"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item13f5123b-9461-4399-8c80-f87f60a8cc75"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item29600129-dc88-4074-8308-4615cc67647e"),]),
    getItem("Modal", "Item3a0c1e09-1c86-4bea-97b8-021f1f9e4bf7", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item7b1dec30-8cfb-44e8-b54c-3307865a325f"),]),
    getItem("Tabulator Grid", "Item46bc7ba1-77ae-4bec-930c-cc5f5a91fa42", <FolderOutlined />, [
        getItem("Async", "Itemd9499faf-8821-4bde-a936-87a4867e44a3", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item1f9f64bd-8cdb-4a85-aa0b-d61210575b1a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item5c1dbad7-52ae-4a38-ae96-bd4fe3348955"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item21fbde17-d088-499a-bf9d-af54ad412819"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemdc66dac0-466c-4463-987b-aeb0f51b5514"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item5a890333-5f3b-4ce2-ac75-396115e91170"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item04d59b07-00b0-4159-86cb-ea7fbdb817dc"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemddd85f1f-bc58-4d1d-b6ca-d395e3b21d4f"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itembb615d7e-a445-4c8b-8d12-e98f83996dd5"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item95293b10-14b9-4f9a-af09-8987d80bd9cc"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item4d85fdca-19c0-4790-87ce-16dea19a0c6f"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item82d07b62-f5e0-49ea-9aad-049d0aa92810"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item69bb7c98-1bdb-4ea6-a9a6-824983291414"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item627625ee-1f4e-4769-b03f-f9b239ff2d57"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item8a6f652e-1bb7-454d-9917-b0ced1bcd333"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemb34effe8-36e6-48f7-9212-751e00685f3f"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item5fb32110-8c44-45b3-b13c-66a5fff533c9"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Iteme72e75cb-bdd8-4ab0-9d7f-7dabd691f3c1"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item1c5d5810-3704-47fb-909e-c8020e34076d"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemed4e47dc-50e9-4a16-bf2d-299df9e698e3"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemcb09b094-bd32-47c8-a783-a2127a2cc25a"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item2caa52c2-3614-40d4-b61e-1163eb1fc996"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemcfe1708a-fbff-4e83-bdcc-0515366b7320"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item39a98acc-ca5f-4f4b-bc41-ea2c1c110d76"),]),
    getItem("Tools", "Item635bb3f5-6c50-4155-8058-4e04a6f81d11", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemb97d5789-5804-41aa-a586-bea8712259d4"),]),
    getItem("Tree Select", "Item5a49c096-d855-4d7a-a9de-2a6f43066a2e", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item22940768-9f93-4eba-8327-13efa17142ac"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemb8ba620e-4bfe-43a4-9bd2-39b94505169b"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item062f68ec-1487-4863-8804-41b00b4c5efe"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item24ba7f9d-607f-4726-8039-e72b497c4740"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item30d29e57-2e78-4668-bf21-317be78a4e79"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item8db2612f-5fa9-4c96-8600-f19ef0001da4"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item502d5406-eba2-4b07-8f98-f740580a0520"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item6cbf2a00-3c4f-469d-8267-54598bbac694"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item28effd87-9a8d-467a-9eda-3674b5470195"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item504c8033-f4fc-4754-8842-4b262c67fb4e"),]