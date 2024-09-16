
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
    getItem("Other", "Item3505641f-fcdd-4ee9-bef7-ad4d04b137b5", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item5b9058e3-2d12-4f6e-bee8-f8acb1e5486b"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item6ff6cc11-23e6-44f9-ac7f-5f38f05e0772"),]),
    getItem("DForm", "Iteme9afabe6-2a79-4a12-aa50-983f18418f75", <FolderOutlined />, [
        getItem("Validation", "Item134e8fe1-de8a-4dc2-b2ef-a1ccaec3707b", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item76213bfd-416f-4d48-8581-14034618960c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item1aa30648-007a-4fc5-b50f-55c64d1ffdef"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item61c0cad7-331f-471a-9bb7-ca0647cc7aae"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item197b2f7b-0664-48ab-8004-5b34e78f3eb9"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemaaedce00-1582-4958-a4f1-c582b72cb210"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item4d2f152c-8367-44ea-8e79-1ff59cc2594b"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item0d6c334b-5ff2-42ae-83ad-2623be3cf292"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item2246424d-19cc-40ec-ac48-d53fec402340"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item1eb0b405-5823-4866-979c-17c4d4981ce5"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemabf88d8c-a6af-415c-b8f9-df2be44bc953"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item18a85927-2f35-4370-b7e3-4abc34e2f1aa"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itema155fc7f-2ca9-4c32-969a-ff838fd1b9de"),]),
    getItem("DForm Modal", "Itemcf657078-c9d7-4f1d-b56b-fb50ea82daec", <FolderOutlined />, [
        getItem("Async", "Itemdd95cd0b-9c5a-4a49-8f3a-b1ab53142270", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item174ae6e7-11bc-4895-a3e9-a21b72edd5f5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itembc618285-6b01-47bb-bcb1-53209eda18b4"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemdcad3d67-e1c5-499b-82db-4914ce68135d"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemf3048cbf-28e8-41dc-9bd0-2f7f45c2ec30"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item5b131bd7-f354-4b61-ad8c-62efe90c5b6c"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item8037b85e-b491-4b08-8215-f2142f94a95e"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item19f53c94-d2c1-47e0-8202-1bebb147cc05"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item02b14972-bb63-451e-9a2a-6bee352143b3"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item5bf48a2b-a1a0-4816-8000-00ae787843ef"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item797fbbd6-f0c3-4dbf-a2b5-bd63f9b736da"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item10d3892b-4b0a-49f1-8406-56388682880d"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item0607b834-2552-41a8-969c-58e11a48cc4b"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item9fa86c3b-5b4d-478c-85e8-b372ee7c1eac"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item23458e74-3543-4d08-ab1f-f256429d8a64"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemaca6cb6f-34f4-4685-b740-cd3b6a4e5ce6"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemd1fe31d2-b5c5-4637-a6b2-c80277621946"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item4abc1ea5-938c-427d-bd5d-9511b9c5a133"),]),
    getItem("Modal", "Iteme2dee8ac-1a1d-49e6-a114-e98bef366634", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemb257592b-53f9-4fac-a087-c1089ef1a20b"),]),
    getItem("Tabulator Grid", "Item257e2315-f564-4c56-977e-460dbc9dbcfe", <FolderOutlined />, [
        getItem("Async", "Item241049b0-a724-4646-8e15-f24e7c706410", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item11c8f4b0-a88e-418c-9b64-48e3ecea1a3e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itema71eec84-6f8a-4bbc-9d79-55db8160bb63"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemf79ec856-f653-4e0a-bcc1-d2bd36caa898"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item00d27a24-72f2-419c-89c4-ea9b123dc982"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item391a5636-85e7-4bae-aa13-014a190f0eef"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item0a2284fb-8e6a-4812-8b75-631bc9efc98d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemfb63806f-41be-4989-9f3f-34d9657f6196"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item4920f96f-bb5f-4bd2-8518-e427c26c68a3"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itema57179f8-4c8f-455e-801d-364319a257b6"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item59f29873-21c0-4544-ad07-a13464ae1482"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item6d33a42b-3447-4dfb-87bc-2ea6e0c48d56"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item1d18e3cb-6c64-4bac-9070-ed64ba79460f"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item59695623-367a-417a-9ad2-709f6109e756"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item75ac0847-a26f-40ba-a1d2-89ebd4067d0e"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itema755dab7-817d-4df5-b707-939cca790b80"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item559dd311-2d50-427f-bd37-efa94584f1f7"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemaae5ece6-4658-4c00-af2a-06e459bcd203"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item713594c1-3414-4723-a4d4-42ea8e481b09"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item71398264-416b-4eff-a4fe-4d338a0801e1"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemcd6a2b72-86a6-4848-9c14-f040e44a45f0"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item04da3402-865c-42d1-a31b-bdd0fbb3e86f"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemf68560c8-e9cc-4b77-a107-35b4c12de933"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemefa9c600-cb5c-4062-b3b5-92d0991f0250"),]),
    getItem("Tools", "Item82402514-6c4e-491c-8c8d-67948b5cc6e0", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itembb6b0e76-7103-4d2a-add5-e737aa37a42f"),]),
    getItem("Tree Select", "Item7ea00e35-8751-4139-92ec-083c80fc2acb", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Item97395112-d78f-41d5-a76c-0b300f99023b"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Item6da96ffe-5943-4484-8c98-38e2a6a1dc7d"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Itemb1c63fba-2c3d-4717-8220-52ae112c706f"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Item5c7ba935-8c4f-48fd-ac62-c822a4781f4f"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Itema87d77fe-3599-48b4-8484-9591a5c22210"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Itemc01042f6-9283-431e-96b6-e838e2b0ac76"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Item75dfe36a-fa1b-48e2-b1b6-1eb998a5787e"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Itemcb051a42-038d-4687-b3c6-1d0308819ca6"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Item257ca3f7-542d-4bc0-a3e1-4b2ed406af03"),
        getItem(<Link to="/treeSelect/WithFormAndNodeRenderers">With Form AndNode Renderers</Link>, "Itemf81a79b6-3fd1-49e7-a926-3f5348db7994"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Item63a3b423-0442-4269-88d7-329f454ac6c1"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item0b8fd5a3-0c79-4816-9be8-e1b45780f3c4"),]