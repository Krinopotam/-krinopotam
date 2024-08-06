
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
    getItem("DForm", "Item93d27427-08a2-41be-a6d1-937254026102", <FolderOutlined />, [
        getItem("Validation", "Item022c4e88-1bee-48e6-92d9-aec7039fb376", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item0899768c-a170-4d4e-a946-d91294afa80c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item158036fe-f139-4bf0-915a-a6fc052b163a"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item7f7681fc-4f0d-4d71-8c31-a8ca56a96ba7"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item843ef658-6cd8-4acd-971f-177b34c216aa"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemf7b373f0-12b6-48c7-abed-6b206728422c"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item8b064a41-227d-4c57-af47-329679be1412"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item88e6d2b9-35fc-4023-90eb-bc311bbbc2de"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item9d518873-a8c2-410e-983a-3c818aff7d8f"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item3a31fe72-6cf8-4333-a2d1-2675b21a39a8"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item2f58e3d1-8913-4131-a7f1-cf9232eb7ac9"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item3425cc81-0e86-4a7e-8e00-0166bda4d4cc"),]),
    getItem("DForm Modal", "Itema37aca81-979f-45e5-9d63-400ca0a3b24d", <FolderOutlined />, [
        getItem("Async", "Item44f25ca2-8040-4ca0-850c-e6bec3957498", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemb170ce12-82c6-4ac4-b151-8760d32e0e1f"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Iteme0362322-cfa9-4a4f-9ece-333f8a63b528"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemf7dcf054-5a77-404e-83a6-e50cd2c4ab41"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itembcd19e29-e20d-4ca8-aade-9c045b441d0f"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item84856076-e524-4c63-8db5-5a42f4c19671"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemd6fd9089-fe11-409c-ae2a-49e068101d29"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item91835a7a-fadd-43bd-a87d-4032b1b5c396"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item2cdc4d31-6e84-4b67-b434-40d882fb8a37"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemeeeedefc-6252-4909-b036-2e20541cf3ec"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itembd630e66-68c9-4717-a3bf-55593c14a84c"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item09e92979-9997-411e-aa09-c778bea59936"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item31173bf8-aeae-45a0-a3b3-7f3f9606a547"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemf43853a3-1128-4b32-bdd0-514194036de5"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemb1c14342-10ab-4606-a017-20fd993fdc88"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item1b8199c1-40c0-4689-9b79-6f7b6f3cf8ed"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2a4d58c9-1349-4835-9a34-d5a612f0e831"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemd11c762b-ff69-457e-afdc-f8439a45b222"),]),
    getItem("Tabulator Grid", "Item7e06ce90-251b-4da1-bb69-3e385baaf563", <FolderOutlined />, [
        getItem("Async", "Itemba724061-1982-4efa-855a-d3ca4348bdc1", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item432513ce-9764-4ce3-9a1b-12ee3bf0b791"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemfeb6366b-458f-478c-a33c-f9b621a251bf"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemea290be2-cb88-4c6e-8056-018c693d63a5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item5fd79569-1540-4d6a-81de-7d3252650d1e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemd1f0d9ab-dbce-416e-86f4-e2972bdb08c3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itembcc95e58-502b-45de-b315-5393880c2529"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemac9ebf71-5ef5-4500-b001-5d5863eccab2"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item3bb7a75f-bb36-44ac-83d3-ff9fcfdb55ad"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Iteme660a3bb-d8b5-4306-bbd7-731ed3f7ffa8"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item5c6e86ba-5285-4f99-b7fa-c57cd7e566e1"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item52f1c5fb-c998-4fc6-a7f6-1bfa20ba3cae"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemfdb95714-cb4e-4b98-b1eb-791bffccbd7b"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Iteme1c7f7c0-1f10-4dbf-b439-d431c814b94d"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itema4678394-8bc5-4254-9b85-e6a5910de17a"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item86b91217-7381-4b8c-8098-40ac9db6d138"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item741a5bab-0543-46cf-958b-c8c996631af3"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemc66a5d79-753b-4c79-86f5-9eab3a5e9ea5"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item2125b82e-eb10-452a-98bd-b01fd5b2faaa"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemd236980c-ee8a-476c-892b-73100eccd814"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemeb624b39-f6a4-4ae1-99bf-70d5240480cb"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item0c137bba-5414-4af3-b0b1-5b1a2b2e381f"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item2f596d7a-a85a-46b5-aaf1-163843ef9c09"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item1ccb0de1-4119-4107-ab3a-c69ee6545d02"),]),
    getItem("Tools", "Itemb69ddba0-c65a-4868-a4a4-5a2c46ae8102", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemc17f3dc7-598d-4ff2-99b8-feaec194c658"),]),
    getItem("Tree Select", "Item3e4544f1-9027-46ae-9166-5cdcbda415db", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Iteme2eb3390-a186-49a9-bd00-9c40f4346e4e"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item4f1d90e9-3071-443c-8fde-f6c3354e6ea2"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item861ad441-5320-4381-a4fd-8ba8606e9fcb"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemeee9aa53-a697-4818-952c-fc704e1376ae"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item77df57eb-3d10-4cc9-a451-adbc648884f5"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemb22db8b5-4f18-4815-8ad9-f0759102e111"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item9c899501-c209-4422-be96-e3ebc6c0870f"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item7562ffdd-8266-4354-a93d-cefcfbe2f609"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item2bca0cf6-a014-45d1-9b68-9af0d3167a14"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item2d742ff9-82e7-4457-b894-0e38b9f16cb6"),]