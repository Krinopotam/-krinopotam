
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
    getItem("Other", "Itema8e537f9-5ee6-4ed5-ad65-c4371fc11d12", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item70514c14-b546-461d-948e-e95be0cf395f"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itema8721f12-9ca5-4d4b-ba71-b7c0aa8d4bf1"),]),
    getItem("DForm", "Itemcbb8eb1c-a27a-465b-a40c-654e8826c90f", <FolderOutlined />, [
        getItem("Validation", "Iteme63489af-4ce9-4778-8365-d6f4e566085d", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itema5e28c76-42a0-44c7-9d7f-dbcd8b4d13ea"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item31f804ad-f21d-4d93-8d70-0d8cbe0212e9"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itema640c46a-6f2d-4aa7-96e5-efcca32871c1"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item93fbd649-6ece-4b77-be7b-41592d62c105"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemcd948701-7ff8-4fad-a78f-6add611ef81e"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item47de8492-6152-4e3d-b204-2dd529e2f5f9"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item5223ec70-d8ac-43a8-9a8e-dc1da0a52555"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item682ea237-e790-48b3-91ee-e5dc76e8bb34"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item4f10bb26-313c-4270-ab87-68e9f108967a"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item96c72c5b-1845-47a6-9d6e-bc58df8a13ea"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item040ddba5-426b-4107-aef5-42530e81edbb"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemd8b21982-ce34-450d-94c8-d0908a3aa2e5"),]),
    getItem("DForm Modal", "Item7f9059d4-ab7d-43d4-8d3f-7f89c8aebfba", <FolderOutlined />, [
        getItem("Async", "Itemfbdb73c4-68c7-4de9-941c-88f8494d119b", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item26dd3735-b879-4483-a7e6-13628838436b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item9a95831e-44b2-4861-885b-cae75ebc0b2b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item3107c19e-2790-4630-83c8-cf6ab4b225b5"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item7fa9c3db-5bb8-4c52-98b4-3ae5ca5172c5"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item0a4932ac-f187-4b14-9a01-4cd9ff680f2b"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item9242c19b-6f3d-4f18-8f6d-6e86dc69cefe"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item2564fd53-9e6f-432a-8949-f36130417cdc"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item804210e7-b4f0-4828-89ae-04d91413e345"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item13d2bbe7-8d98-48bc-81d8-3b7e86434e98"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itema6d26774-7544-41db-8a63-8b4d71b32ed9"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemb10fda2e-3de1-4403-88fd-75351b2a199b"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item06a3f860-b44d-4240-9101-e86192afa93e"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemfcd942bc-8a86-4157-abdb-d530d2e735be"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemf2f9d586-da23-4062-9d3c-40faac9d277f"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item8fa1ce47-32a2-4016-b5d1-58d0a28fb13c"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemf117e7c2-536a-44e0-8b46-3c06288e9771"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemffa9205c-75a6-40dd-8aff-263dd5af412d"),]),
    getItem("Modal", "Item3cf5c0cc-4fd7-4288-9e41-c9e950ef4d47", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item625e5c50-bfc8-42a2-ac99-d63b5dd71ad2"),]),
    getItem("Tabulator Grid", "Item68bbd653-51f3-45b2-9b15-59a6293b2ffe", <FolderOutlined />, [
        getItem("Async", "Item682d85b1-a89e-42d9-ac0d-fdd1dea72a98", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Iteme6b6f915-bb9a-4ecc-8f21-8a9f4922810f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item58955900-694c-46ae-98c9-0631cf6c23aa"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item3b1170cc-cf6e-4879-a758-0534374aed2e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item3740ab18-1908-4475-b638-c087e6268b64"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemc003cba0-5599-4bef-bc19-7b03df3bce39"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Iteme691a53e-ba15-4bba-a41f-532fcbc13c36"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item77c50e81-3d9f-44ce-87eb-59ebb7f7beeb"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item6be16fd9-efe2-4e86-9bb7-cd85dcbacdc8"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item2d5ef61b-b80b-4200-aba8-560ca2f557a1"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema8c711d6-6e39-4fb9-a751-e8ec528bc842"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd6eb88c2-64f9-45df-955a-33ce555274cd"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item16d88824-2485-4a8d-987b-0c06dc3468d0"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item72091c19-fe23-4c7f-b410-d9d86debaa61"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item00a39d16-4c35-426a-9a03-0ec3718521f1"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item3785416d-677d-46d8-b913-58ee1eba66a0"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemc8365b52-6fd8-4374-b19b-92e6758d48c9"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item77351ea5-9e5b-4420-8673-976020bc08a4"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemb6a5376b-8d4d-4700-851b-4d351ab98144"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item665cc599-5b01-4caa-b444-85a578a1116b"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item7146a408-c3a7-4eb4-b6ee-c1aba35de0af"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item23041a4f-dc42-4d69-9b14-5d3ef6283b86"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item33dbed0d-219c-46dd-8420-3f72de377ed6"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item4f745bc8-ef0b-4987-8025-025ccba12685"),]),
    getItem("Tools", "Item3cae97b6-3bd6-459a-bf80-4fc695a8ff3c", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item86388ded-09cd-4188-b6b0-d5084da05a11"),]),
    getItem("Tree Select", "Item431afac5-f6d7-44a9-8e25-d74e14d743fd", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Itemc03f8130-af4a-46e0-9510-b54ca6d0d359"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Item81c38b82-cf1d-4bbe-bfdc-4a931f764e8f"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Item3604b809-376c-4b56-a7ff-df0944065e68"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Item5933ae9d-6e57-4939-9faf-787849bbd8dc"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Item7efc101b-7543-4762-931f-a784f3cf5dba"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Item1ad2cecc-11ad-4c88-9aa6-1a7b06ea75cf"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Itemd11c33ff-9e66-48e2-86cc-1d3c1e791b84"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Item82e7ac63-31cc-48b5-8055-e8dc46c21fd1"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Item2e1812a8-c04b-4a87-bd9e-1cdf49588a71"),
        getItem(<Link to="/treeSelect/WithFormAndNodeRenderers">With Form AndNode Renderers</Link>, "Item69951fcc-ade7-4846-8f5b-0da878cfcbe8"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Item6d75459e-29cd-4d0e-8a6d-5f18258b958f"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item027d3427-dc80-418f-9969-dacd67ba47c9"),]