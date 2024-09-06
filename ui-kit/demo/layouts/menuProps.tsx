
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
    getItem("Other", "Item278cf06a-2b0d-4fee-a845-027da9b3f909", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item5ad9a1b0-0327-4631-aa5c-9374151b0100"),]),
    getItem("DForm", "Item549751bc-2268-41b8-a9eb-ecd4246f8632", <FolderOutlined />, [
        getItem("Validation", "Item28cdba4d-4d42-462d-a4d2-cbdb88580472", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemdbc6a32f-041f-4047-a1ce-4b44c3fd808f"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item7fdc47c2-b32c-4552-892c-299c836fc010"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item305b36a3-69ab-4e81-be25-e3724de8a74f"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item85fde6d6-b9dd-4de2-a5c1-db756afbe75b"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item7651852e-31df-4f54-bdc4-6c22632b5260"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item600ab354-9f6c-4442-9e73-9adc7e2cdc8c"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item86d29b81-3e37-4aec-be69-3d3e0b112a58"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item859f60e8-6b8a-4ccf-a1b0-bb0ae39dfdf9"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item240ad54f-abd7-4d8c-b079-c41ca25a8d34"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item7d2ceb47-198f-4a63-a62f-c24df3cee711"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Iteme2521c5f-9b03-45cd-8ee8-1ea9396a4450"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item6f7c1431-c4b1-4434-bee3-fa50e7c831d4"),]),
    getItem("DForm Modal", "Item90678740-c761-4ab4-9977-ddb83fa6ba8c", <FolderOutlined />, [
        getItem("Async", "Itemfc22b069-54a5-4e95-a253-5a6bf82b4051", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item3eca64b9-e687-408b-93cf-45cc1617b355"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item9912ed63-5db7-4820-ae14-4ae77644fd47"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item61847161-fbc6-4992-b9ed-e8882964807d"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item476a1f08-221d-47b7-8133-7c3c12a60495"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itembbdc5300-bb7f-4286-9107-eb3884d3e9ba"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemfed466e0-5ce3-4062-a553-f8e0234199e5"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item9a94eb33-109e-40ec-8cac-d396285e2ef1"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item3808338c-01a1-49c8-b9ad-46d8efecf6ad"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemca8d4981-6d52-4ec2-9903-134e0dc7e39e"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item19e58e52-3a9e-4a80-b3c8-a3879176df76"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item83a64fdd-b959-465c-97ad-7c14d42853f9"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemeee7ae4c-a54b-41dc-9b8e-75ced199913f"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item4641cfa1-5dcb-4a82-97af-a3b3f40dbf58"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item5e6d704b-5a86-4d6a-8776-5adb0d7ee640"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item9be56e36-b555-45ec-9092-daee61d9faa2"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemc2575f02-b53c-4511-89ec-a2c9dc05aaff"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item0883f939-2f36-4e32-a5d9-b94885cf3e32"),]),
    getItem("Modal", "Item25012dae-9ea0-4292-aa12-a61c2b88468b", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemdcbe16c7-fa6f-44f0-8e35-7b3f66759e02"),]),
    getItem("Tabulator Grid", "Item71be901c-bcaf-4a09-a1a1-59f4f13ad0bc", <FolderOutlined />, [
        getItem("Async", "Item866287c8-e0ae-409e-86e5-c368f433a028", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item7214d213-29ab-4bdf-977e-8ce29300500e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item7808eee2-f6a9-43a6-b82e-e1bbf05df835"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item78da5862-8d13-434e-98cc-21d21030e3be"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item921374ad-2752-421e-8616-4c05d37c6708"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item3889c02a-4ad0-4935-91a7-d11edbd2f4ca"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemc0f99ede-9107-4c3c-ad47-de277656877a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemdda70d7d-dd20-471c-852f-2428c9b730ef"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item2711181f-5170-4f36-b86a-c6b5a2102195"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemdd97f979-a39a-4f1b-97e5-2506a968e9b6"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemce244971-c790-4411-8d55-e812c4d4fa7a"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item722e966a-6859-498a-a64b-189c35d45925"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item9aa091c8-16d2-46e3-a75b-3bc1008e3095"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item16b03aba-0f25-4dc5-84e5-407e18de477a"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item19b5a77a-b0d1-4f1e-9b5e-8901225c3faf"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item2baef6e6-bfeb-4fe8-967b-8b3c8ea83de0"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemd17d68c1-f3ac-48ef-a125-774b40df0736"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item889fcd6e-af56-4663-8b75-d59ea00b56b8"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item5104fe17-5b66-4af6-9dbf-91e1f9b1fbad"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item3f09163b-c70c-4837-914d-e26189aac0be"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itembf3da222-5e3c-4b58-ae6e-f5f155cba9c4"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item6e0d6593-5199-497c-ae31-102ee6245080"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item849a63ee-96ee-4bf5-831d-2084db592422"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itema32fe58e-06a0-4681-8534-0decaf4e3d5e"),]),
    getItem("Tools", "Item7a67c935-1483-4878-8339-0af30610963c", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemb1b322f6-5b99-4bd7-8e35-58b3a68c9cab"),]),
    getItem("Tree Select", "Item233d3c31-7626-4ddb-9614-7bcddc75d182", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item60987e47-d5af-4e9d-b2c1-2fcf2c4520d5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item68ba036f-4afd-444b-b0c8-bd8aa2cba8bd"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item9d0a76b1-8764-4c74-a649-708fb17e00e1"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item2e234bf5-9eac-43c4-9d2a-3a0d22dbbc8d"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item6db8deac-5e1f-46b9-ad09-b8fd660793ea"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item2c0d6d3b-5649-45ea-acb6-d9f4386d14dc"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item31bfe4b4-3ca5-4bb3-8810-6298406929fb"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item6bb47ead-fbb7-431e-844d-32761244e2a2"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Iteme0b0ab73-b596-4d06-91be-73c51708142e"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item40cbba5d-b5ed-4264-9231-d1fb2a909704"),]