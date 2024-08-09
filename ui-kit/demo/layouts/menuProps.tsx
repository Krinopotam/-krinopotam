
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
    getItem("DForm", "Item12f90986-6920-4ba6-959a-8fe6cba75a8e", <FolderOutlined />, [
        getItem("Validation", "Item400d177e-d95d-474d-b7a9-dd6036659a43", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item1d5cb9be-54fc-40a8-80b5-96d81878805c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item973fd2fd-f508-42df-8094-450507564d10"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item3255a0e7-89d7-4537-a104-bfd694b47edb"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item0a9c53f5-1aab-486d-a7a4-26596ac6e214"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemc4086dba-a3f5-4d1e-9d7f-53e9e27c0fd7"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item10b46624-19e1-43bc-9fb1-956ba8391585"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemcda9a838-f1e0-44a2-9bd4-fe4d22eb7fed"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item88e9e04a-f42b-4bd3-9788-c69acd396ed9"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item206e7e8b-115d-42ab-bf4a-db03bd1ea8ac"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item6a9adf06-65d4-40d7-8f4d-c1e1652ac6ce"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item9948b30f-a03f-4d54-bb26-a62faf2e7b73"),]),
    getItem("DForm Modal", "Item4295fd8e-85a3-4fec-a039-3bfaa11a9dc0", <FolderOutlined />, [
        getItem("Async", "Item220c34c8-1d55-4497-a60c-5d7b67b8cae6", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemc3c2f425-2b04-4ed0-ade9-1ca56c3041c3"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item1972c571-33ce-4e56-ab80-4be90b7d39d3"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item3efccfa9-afcc-4f09-bb1f-f39f377ca0f4"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemed91d6fa-11d9-4615-ad60-bf2a3b7fe032"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item5595808f-7912-45ad-ada8-7767780c158a"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itema134efe7-7765-4085-a0fd-0d5632eae25c"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemdc8e8bb5-9777-40c0-9d49-3a46f7126528"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item9ad47dfe-9085-4328-b408-4af33fc372d0"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemb692810c-101c-4e4b-800d-dab0ebd4994e"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item8483c554-9b72-4643-82b6-bc7a004eac85"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item5dc16b19-df99-43c8-86e9-8a3949a02483"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item751e95ff-57db-427f-b1c8-6018c98ce195"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemd236b0cb-cbbe-413d-9483-11f53f33f22c"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item428c9d6a-66c1-4e95-a32a-e460852d4b2f"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item24ec7aab-596e-4483-86b1-afc7123dbc91"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item23c476c6-f00e-4631-9dd4-1eb762632ace"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item1b091535-a65a-445c-9d23-65124dc6fc19"),]),
    getItem("Tabulator Grid", "Item6588f9da-b96c-41d8-be0b-4382d68e1cc2", <FolderOutlined />, [
        getItem("Async", "Iteme21a56f2-ca37-4405-af1c-476cd1e599f2", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemb7eda41e-6852-419a-b872-751de58ddb51"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item08e57a3d-ef20-4dfd-a897-c61c932deea5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemb8efbcd1-3e78-4cb5-a8fe-6d4317cd44a5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemb93699f8-ea9d-4600-870a-89ca64fac62c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item2280934d-86bc-464a-8ee8-d92818682048"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itembee1b6cc-f7c5-4b0c-b02d-a762115b4920"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemdd8629cf-b765-40ce-a5ce-0a95c331cff9"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item1cb71379-e93e-44f6-b4df-8325c27956a3"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itema931aefa-1305-4094-a286-c872fefbfe20"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item393f356b-57b7-428a-8445-6aed2ae3bbad"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item0a298653-eca9-481a-9ed6-cfced66681fb"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item827386ab-ffb6-46ad-86b1-c74007dac004"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item2083589f-30b5-457c-a36a-a2e471ee170b"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item54606968-44b9-4596-ba68-d1e2f27816ce"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item08a6d5e5-bfba-4c9f-a484-88809e19ff3f"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item083d782c-770b-4b56-803a-ae8e74707212"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item36e01966-16e8-4636-b6e0-81402277a8d4"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item9be4b69f-02cd-4081-b85f-849ef36f5028"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item5cec462d-5d04-4768-994f-8b2f3f250ea6"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemda9f61e2-008c-4fa0-8544-6005ec83b8c8"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item3c2045be-ca56-4010-bbc2-f59e3a7c3d2a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemac7aff74-a3a7-4d90-8c2f-3f36b4747853"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item3d1ed357-225b-4b38-915c-c5493de713c5"),]),
    getItem("Tools", "Item6dc0febd-0c36-4484-afd1-e0a4ea1e2c97", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8284ec4d-9b13-4234-a470-ecd96a543d30"),]),
    getItem("Tree Select", "Item40ed5149-1989-4d5c-9e75-40487767f7ad", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item6f25928e-8ac2-4a36-8dc2-eb3fa68f8214"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemc4b3eeef-3557-4c1f-ab1f-7d651f41340b"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item4cb2aad0-019a-44ed-9e80-1576c7eeabff"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item2a663cd0-1ddb-4051-a50a-07843d01f638"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item7566e7b6-dfb0-46b3-841c-126a34d893cb"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemb97f3f0e-d9f3-4db5-8d3f-906195187409"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemfc946b52-1918-44b9-b4a3-f9b5c9bcfa06"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item65d85637-7655-40b4-b634-17c48f4c839a"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemb66c2ee7-27b9-4e48-97d3-27911adf62e1"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item046637d9-e99c-4d9c-a495-b1a68053c046"),]