
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
    getItem("DForm", "Item0e49845c-0968-4a3c-b34a-8f0d5e2ed750", <FolderOutlined />, [
        getItem("Validation", "Item6a46b3df-fa11-4364-ba9b-9bb3d4a01e14", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item15d04829-9877-4296-ac84-1cba89f3873c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item2abcaedd-64d5-4aec-ad1c-c5532a8ad99c"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item2ea8d3b2-7a31-4c20-9167-312b210d6566"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item9ef01a6b-4db2-454b-9d19-e1c8cbdbbdf1"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item079b4584-c759-42f4-a4b3-61189691abf8"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item0e67210c-3329-4f5d-96a0-dde72184786c"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itembb1bcf39-77e7-4508-b3c6-6ce2459637ff"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item78177b06-aa4d-44e0-813b-9568d4fc59df"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemcb0de06f-a36d-4372-ab47-e0ee45c7b1e4"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemb8ec24d8-5909-4849-8636-ceac5ecbad2a"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item15f09a13-9eec-495c-9b99-2a51e6f4c473"),]),
    getItem("DForm Modal", "Item05cfc5ba-628c-4c0d-9535-eae77a0cb889", <FolderOutlined />, [
        getItem("Async", "Item29dc61e9-4eb4-4d4f-93f5-8b3df41a4ac6", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemd5b6305f-d972-4cf1-85be-f5235785d4ce"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemdb129376-02bf-4a9c-8d67-4dee375f7ce5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item914d76d9-39f0-4a4a-a322-2f4d93a9e112"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item9ebb1e6a-87f3-40a6-95c2-b2c33ceffc7c"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item89b5ea04-c7a2-4be2-aec4-67cbcbeaf0cf"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item9105355a-159d-4528-9d79-d5da3114bc0d"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item9a295ec4-4523-4cb6-afdf-555b6c7ca58b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item71fd103c-2c02-46ad-8005-2cb8c370ee8e"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemb217440f-be46-43d5-801b-c3b2d0b7a718"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemaeecbd7e-c2bc-4dad-bff3-50399b368467"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item87b341f0-aec8-47c6-bb2e-deb1bdeb5b54"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemc2958505-6e99-4a18-9038-dde002bbecc3"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item2569b858-3fb7-4e5a-8b7a-fc3f126aed4a"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item3c966c84-17a0-4d73-90b5-6b15437a3b90"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Iteme76afc3c-149d-414d-a161-b6444c4279b9"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item6f2431f8-6210-4eb7-8173-96c2b38f494a"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemb2829926-3d91-460e-9957-31c355a17fbe"),]),
    getItem("Modal", "Item15d6f052-7d80-40a4-b42a-16217088a09a", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item129ee332-d1e6-4bff-b3ba-026e7eb206a2"),]),
    getItem("Tabulator Grid", "Item24fece82-c2e2-450c-a2f1-92236c0fa048", <FolderOutlined />, [
        getItem("Async", "Item4e7bda6e-0f5b-45be-a830-60b789a59d04", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itembd8ff0db-1bbe-452d-9b90-f8fb70f95d51"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemca4669e8-e4a5-4176-91e7-4b4e6c58a3b8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item05736703-4b84-4754-b062-060636550348"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemb0b1ea3d-7d1b-41ff-b4ae-a21a6e4f73c7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item62f7f00f-567f-4145-858c-ea5fdcbb0372"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemcfb1fa25-d5ae-4e96-bbbd-85389385e2e5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemd0d2a824-4973-4705-82b9-a13d1f7756fd"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item5dce2040-efb5-46fc-9f61-d24d8c5e7c9e"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item0e4910ca-c71f-440d-9731-dbeba9ecf1c9"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemce295e0c-81dd-4810-9332-e6e7c27bfcee"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item2c99eedd-7503-427c-977c-28e53607016b"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item428f893a-e247-45d8-bb85-7dabff93ce81"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item404fa85b-cc0a-4cbf-a67a-33f7d1f3443c"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item2819019b-cdb8-41ce-8cb9-ad3e959d5c74"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemead50889-3fdc-4080-8cc5-79217fc2205e"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item5da952f2-c47d-4c3a-bae0-88fdbcfc9a44"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item3e9d5baa-cdd5-456a-bbfb-9e3358974903"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Iteme01cd96a-83e9-4f54-9193-e24d7783f92d"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemed8465af-b3a6-4b95-a479-9e13462ed70f"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemc57dc3dc-5db3-4820-94f3-4a977f5bcfe5"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item445d9d6c-1cfe-44e4-853f-79ab50fe43ab"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item993d6481-aa40-413c-a90a-db82162fa0e7"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item317f07e8-2fdc-4f6b-983a-433a846b4554"),]),
    getItem("Tools", "Item19aaf77b-1179-4782-acae-5c257e214c75", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemb40008f1-ee04-4720-bd08-4f0c37c6831d"),]),
    getItem("Tree Select", "Iteme6aee6cc-dcdd-4df3-9aa6-617886866e37", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemee247c70-a38b-4fee-ba41-6d61c932c869"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itema7c0a4bd-6ae0-4b71-9f41-161661ff662c"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item702c8a8b-4d3c-41d3-b1a3-34e5047c631c"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item8a6ba016-a78a-4619-b976-c4c8a8fc39c6"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item59071771-42b7-4aba-b75c-dab73b4ff892"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item02fff6fb-f1e4-41cb-934e-13a9c2ce35d8"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item467ece49-589c-492a-959d-d43a503bbc3f"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemd1cae48e-8af8-47f1-9b38-f166538597c5"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item8c1d35f1-912b-498a-b0cf-61cc75ff26ba"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemfd792a4f-e069-4e59-9e59-53e1bcb8b93b"),]