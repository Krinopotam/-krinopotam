
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
    getItem("DForm", "Itemaf6228e8-57cb-430e-95bb-11e70f7b3ce9", <FolderOutlined />, [
        getItem("Validation", "Item86c02026-32dc-4803-9d03-6c6c8855a288", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item47dd16f6-1a59-45b0-a3a5-18706e7b5d1c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item83644b44-86e8-4078-9aee-42e5d4bca7f7"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item9da1f01a-44e7-4e6f-a9bc-fbc8f68c4ef8"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item59a439b8-9a1f-4ebe-ac0c-009cc9a2aed4"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item9a86c77a-3c44-43c9-9e0c-15449cb5988f"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item483ad6fd-939c-46cf-88d4-9c0933cc8c3b"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemc85e79b1-58f7-4074-a5b5-3cf6527682b3"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itema61d698c-6378-401c-8025-b4e7e260e43e"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itema6631f1a-1e64-4380-8199-3d9391e0e285"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item8f0d9cb0-3421-4224-8174-07663849d138"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item5e836d08-5d8d-43a0-9dd5-016aee75e3c7"),]),
    getItem("DForm Modal", "Item0090ab83-2d5d-4adb-8d7b-db0e8ead59cd", <FolderOutlined />, [
        getItem("Async", "Itemf1a68604-4efd-4518-ab8a-7de0cd0d36fe", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item3eade809-faab-4ba9-a428-a0f21ce9b2cb"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemefed5b08-a9c8-473a-803e-8b34aec297a8"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item22597d5e-f9af-4c52-b9f8-b6af1aec5118"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Iteme5def2e5-ed76-4618-984d-a7d9d049b003"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemf394c68a-b516-4fd0-8323-2f7ab5cd4b26"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item4f9a54a3-1101-4711-af36-3dc96e99dd4e"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itembb8727d5-94d3-40c0-a0e3-ff3d46f7eb3b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item119c58ef-cf3b-4727-a387-ae19105f0990"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item3310ef5e-7085-4d92-993e-5669186b115c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item1de31650-2a32-45b5-bf4c-982acc80610c"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemb1d524d9-ccd0-49cf-b5af-f07a4c0b0b38"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item1b0ee1a0-3a2b-47e8-ac1d-2cb94fa3d822"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item064ad1d8-848f-4e5a-9ae5-a24b07a3d8de"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itembf9c7615-2821-48d9-8c98-6575c0cee98f"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemb6e90a91-4ea2-4751-a6fa-f2105539f997"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item6125f909-2e0c-4b56-b283-50d6cb62ee09"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemf4f54404-98db-43d9-832c-1254fe049d95"),]),
    getItem("Modal", "Item361f4db1-fed5-4775-8264-7c3a11a4920c", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itembe954705-c979-4c2e-9110-c664de7e2aed"),]),
    getItem("Tabulator Grid", "Iteme2ee0469-3f3d-410b-a1ed-3751a1027f16", <FolderOutlined />, [
        getItem("Async", "Item59f2db0e-7f01-415a-9ca2-2f2bc600223e", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item29c720d4-b0b6-4961-bff9-b2cf8a64ab65"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item4e22e1d3-e2d2-4627-8760-a23da5a00a3f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item297103f8-8c56-4677-8ae0-9916777c2f0b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item24c54731-a6ff-4fc6-9018-94bcec1961ab"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item36d22533-7734-455d-abd0-71b0af277795"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item5de90cc6-8273-4f31-94e8-16588908bb8a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemd6019490-b806-477d-8683-87125f38ea51"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item7c235d73-b63b-450d-bef0-d7192ed5aa73"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item781e1f9e-fb50-4993-988d-fd6fc81d1ec0"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item7955dd9f-4f38-4bf8-8828-b23ccfe56db9"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd133fcc8-891d-4611-a7b8-491bb3ae92eb"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itema06a6487-4196-473d-9e11-6af0bc755013"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item77e9d71a-911f-4f3e-9af7-947d05f80611"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemcf5a4fac-bf1f-43d0-b614-5fa3b57249a8"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd94b2342-5d59-465e-af79-0b82a07c1c6a"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item7e1b8b4a-523a-42d0-a950-e3d59547f49e"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemcb5610da-2704-4cff-b96f-a74010faeb02"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item49e68656-eeb7-4366-bdf4-30eccc4e32aa"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item4ae059ef-1ade-42ff-b3f6-4bb7ee127b54"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item017e30dc-e656-492d-99a3-9919f63d2b81"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item4a4abb86-9776-416e-b39f-85138c3ab1e2"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1df5030b-4d6f-431c-a9e2-f8f7f88cb645"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item696d01ea-d315-41ce-9b41-e5e3aab79c35"),]),
    getItem("Tools", "Item99c46c66-96c2-40cd-b140-ffa78d54391d", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemfb347e0d-31b8-49e2-b700-0656292ea540"),]),
    getItem("Tree Select", "Item18ba6614-8a06-4016-93a0-27b9c86fc2c4", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemea0693e3-b1e3-4e59-8c69-5f4e5068ffa0"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item670706d7-8fd1-4c35-bc40-2f29db4127c0"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item48056470-055a-47e1-8500-a11353410ee9"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item57a6db9b-8548-4ad0-9800-77cee1cd9f06"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item70393527-7b89-456e-8f24-435356edb691"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item0a4cfe58-7e9f-4c42-8ee9-3440aaad044d"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemf7dbdbf7-e736-45ed-b842-6fb4fda99cf0"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item236df1d7-0b8a-42d8-b644-6a77e4fb01a4"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item0bfa9b8d-d8b4-4c32-b582-efc3e44cfbe3"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemf0b6e272-39d8-4ba0-b753-7d31e2100036"),]