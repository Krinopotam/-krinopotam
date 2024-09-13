
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
    getItem("Other", "Item9bfe7d87-27bd-41c2-b88c-0a3125481a53", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemb1854442-8360-44bb-bc7b-7bdba8355c49"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item022b7355-a797-4b40-9105-d4eae8f5dec4"),]),
    getItem("DForm", "Item16adf654-3c45-48bc-991a-44a76b2a6e5d", <FolderOutlined />, [
        getItem("Validation", "Item00e54b5e-3abd-4b72-a1c9-b49ca70cd934", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemf0a9e8fd-f5a8-4ad4-aa8e-475ebc91dc77"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemac7e27a6-2739-41af-91df-4b21b818d0aa"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemc16765e5-53bb-4d3a-8f88-00e8f8149a2e"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item25fdac3b-a8dc-408a-9592-873f1b34bf62"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemf5b76ffa-d4ac-4949-876d-d20f9a70204b"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemcc3ed81d-5c48-4a48-aab9-d37eeaae5a9e"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item3d12280b-60d8-4c0c-9a7c-3c414d1d57e3"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemaaa4bfb8-865f-4162-b7bf-603213546941"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemc5298d57-939d-440c-a76a-220a684ea1a6"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itema4610af0-030c-4efc-81a1-f46abe42bfd6"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemd8ec9aff-bf64-43ef-86e4-207fae13017f"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item3588a631-f9a7-41fa-ab73-5b754b074a69"),]),
    getItem("DForm Modal", "Item35f7c116-90c5-492f-9d39-22231b363921", <FolderOutlined />, [
        getItem("Async", "Itemf0f68edb-3449-46e6-9ec1-8efc72ad48bf", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item81245a0b-fcdb-46e5-8e85-651e929d2278"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item87fe70f1-dfa4-4a49-8a2e-759123efc15d"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itema9568fcd-708d-4b85-baba-ed2cc389ae60"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item1d414528-cb73-400e-b45b-4c0131626687"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item76e016f0-57bb-4777-87b5-e39448cac7bc"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item77a13e3b-f803-437e-86b6-87b03147d782"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item63333f59-a81f-4dc5-a349-b42da2f915b1"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item7c061b5e-a3b5-4ddf-b108-2fafd0cd5045"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item8c52f1d5-1422-4a1e-b5d4-35918c87538c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item1256367e-136c-4b92-82c2-f69dc5e0bd76"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item7ccc1bfa-1183-4a01-9d27-00259b028b35"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item49408d95-e485-4a72-b025-20b3d0b5463f"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item50522ce1-c74d-4878-8e63-30c644291b15"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item9278a896-6b56-48fb-bdf1-fc328e99ae34"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemefdc7b7a-0275-4c52-8d87-7e3ea0f55512"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item0b57ad03-f0a2-45be-be7a-f00d6668c138"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item443244ba-8d86-4006-8d14-9802572bd2ad"),]),
    getItem("Modal", "Item9884950b-8f41-4fd1-baad-4b255d626785", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item67ece22d-3ab5-42e6-8747-603333f2cb5c"),]),
    getItem("Tabulator Grid", "Itemcb47a5a6-3422-42dd-9bb0-347b39d737c9", <FolderOutlined />, [
        getItem("Async", "Item22123aea-8253-40ee-a6e9-8db46930735b", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item3e27ead0-c89e-4e5f-9bad-4ac8f20380e8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item125a7ffc-cf16-4115-94a1-287de827ccde"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item14a03ce4-3d76-4b1d-906f-9559003ff7e9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item5f2526fc-fe35-4c6d-96ef-96c62e987530"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item6dd6f82c-8cee-4916-a7d7-f0c199c090ce"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item8017689f-2607-4da4-9e7a-2dd83172c807"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemeff4e67b-956e-420e-9b7f-261a67bb03ee"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item5c9046f1-b132-4973-89c0-64cdfd53d75f"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item258db7ac-54be-4415-9f52-1aaa8d92181d"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema844a59b-cc47-453d-9d3d-35f6dcd5d2f2"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemb1b50de2-24d1-49e1-a0d8-1f9994048bb5"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item699ad8b2-ec8d-47f6-ab2e-5e6270215aaa"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item2ff41fa1-3714-4a34-84e6-202f732b7daa"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemc3eb645f-7def-4ac0-a44b-621e06f11867"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd4981c3f-f608-42fe-8f5f-02721b59b2a9"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item398d9221-d8f9-4723-8905-c21947cb8063"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Iteme74fddfe-821d-4a21-9bea-10107cadf27f"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itema27ff2b5-9322-434f-ba36-c25bdd700fe0"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item58d25ad0-3d32-4241-9b19-a5e52a6d87f0"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemd2b7a946-6432-4bf0-905e-e27b46068d48"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemc684d045-d0f0-4755-b169-e96748a23812"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item2833a572-6731-44db-9232-2c73b1819d8f"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item082947a5-68b1-4097-860d-059ef46ec804"),]),
    getItem("Tools", "Item9111ab41-bfb6-4363-afe5-c4bd44decadf", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemc3351755-d3df-4ab2-bfde-15205afb2702"),]),
    getItem("Tree Select", "Itembd1234ee-24b1-4184-9b59-575b04f91a7b", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemd055057f-f476-4ae5-8da1-818db0334616"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemee1cba5e-ae24-49b7-921e-8ea296d0108d"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item30904a31-e258-4e61-af5c-bedadd39fcc1"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itembd21a195-51fe-45ec-bda9-2a8766e12c55"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item9b0af214-7ec6-4220-9f4d-6bd47401ab4f"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item64438241-2f54-46d2-ab6d-51a1c3b0ca02"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemba8ea3f6-64cd-40c4-afb0-a3629842059d"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item8b369121-8181-4609-bbd5-cbfc758fefb1"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item64f97f28-4db0-4d01-95d4-d135b5e815be"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item6bc8a00e-1ce8-49fc-a49e-cbce9650ac2b"),]