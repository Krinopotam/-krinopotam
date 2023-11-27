
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
    getItem("DForm", "Item57c84edd-51c8-46c4-ad42-63c8dfc8ac4b", <FolderOutlined />, [
        getItem("Validation", "Itemc341fd73-fc4d-49b1-920c-0d9b23c5f623", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item582ab34e-18db-4a88-9593-0acf49546de9"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item7df242f7-16b1-4f48-a7af-33d9128a45df"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item831b0181-580a-46e2-ab6b-238d0cec8867"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemd104a8be-a52a-418e-811a-23a60f0561ac"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item72930178-e103-441d-b6ef-310d965df2f3"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item7d015148-1ef7-45e0-9f3f-6a59bf5a9be6"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itema6c7e97b-72cc-4324-9d15-b5f539af8768"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itembd130bc4-8623-4265-bf1a-ae64284a6183"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemeb1a89ef-1055-4116-8aab-a068ef9bc26e"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemd270d221-9880-4953-8700-fee9e80c96c7"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Iteme4854152-7d1e-46e1-9d9a-d97ee6641cf9"),]),
    getItem("DForm Modal", "Item6da258a2-04a4-498d-80a7-3dfc608cd208", <FolderOutlined />, [
        getItem("Async", "Itemf102bf8b-d461-4d5a-8c23-8cc01779839f", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item81d87d06-0561-4e4e-a918-748f34268885"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item10bfd1a5-9189-4424-a318-40e6a882a735"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item713df710-33da-40f7-8e54-8d6fb589d9f4"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item8ac969ec-c67c-44da-b910-47ad33a53bb8"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item194a0a60-1302-4a27-bf70-d12368ead67e"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item2354b78e-ae5d-4310-8650-0209952fd47c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemd60e5be9-80d7-4681-9b93-c27257ab8c71"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item160aa13e-0664-4776-85c0-de959d91e2f4"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item748f265f-a2db-4d82-8f47-0277f86ebaa0"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item7a898c1a-6ad3-43aa-a8eb-5cb04d833af5"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item97c8ec3f-38ad-4b9f-b4f2-3e4b2bfa025e"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Iteme573b899-1bbf-4db2-a632-f1d425c99620"),]),
    getItem("Tabulator Grid", "Item01b14ae0-d2ac-41e2-adec-7a42953915aa", <FolderOutlined />, [
        getItem("Async", "Item6c96e7bf-98aa-4e89-90f5-86e26d61f867", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item58453cd2-8bf4-49c5-818e-cf7c51aed829"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item3cc8ad48-1627-40ea-a262-624bd3fc3b73"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemff69c2d3-fe35-49e4-998a-d34a954e2334"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemcb758a77-5b32-4ea0-87c4-d2726842fc5c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item21a74490-5bf1-40f3-bd77-175522ba1783"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item98d86366-52d7-4a21-bfdc-3114f6346a39"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemf4de138c-c215-4bcd-b8a3-c6527429dad5"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item681bf1c2-ce21-43f1-96d4-284119bf9cbb"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item368ebfb8-dc1f-4ce7-a53d-6741780a4746"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itema77c9035-4356-4f23-b955-40e25e22a3fd"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemaa6ca73a-8c53-461a-860e-06e77735caf0"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemcc63417c-6769-4114-b5ed-ae7248cd04a4"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item2425e325-6160-43d9-a455-b676f99a915a"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemc2a69584-ae97-494a-8246-552bfa56fd26"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item0918a991-5fdd-4e9f-b9ac-5d8a8593709e"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item9966ce72-88a8-40b4-b64a-b087dd47001e"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemdd7f6807-e343-4eb8-8ab9-bc3318e7d01f"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemad0ba3a0-2a3f-41b6-a01b-6b4a49a94da1"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemfcbbc558-3c02-4785-903e-495fe462aa63"),]),
    getItem("Tools", "Item479ddfb4-35af-470d-9871-fc8664f80ced", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item7dc0cfa8-0b1f-459b-a945-a3938c02288e"),]),
    getItem("Tree Select", "Iteme0fe13fc-7419-48e5-9bad-c8bb59b49fde", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item07fbbe28-8cef-49a9-9122-d6cdf6b912be"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item61a7f04d-7fbc-4e9e-8178-e89ecfebf727"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itema034a256-9466-4b3d-893e-6fe5aef9f113"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item241e8854-dd09-4215-b25e-f41fc5b3d59c"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemd7b16382-3d83-4a85-acd8-b8f7a645316b"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item8dfb517d-9f42-4433-ad0d-eb278aa323ae"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemd457efde-6ccf-4d18-b900-3fad15256e3f"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item0d6465b6-bc1b-4840-ad88-5e6bd48677eb"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item62346a01-26a9-4aad-95fc-e65f366b2462"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item75f9b7a9-ace0-4286-b290-14df34fad4d8"),]