
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
    getItem("DForm", "Item2ac03b47-943b-426c-8528-5d0d335d99e7", <FolderOutlined />, [
        getItem("Validation", "Item4bb881e9-59ca-45de-8f75-6763a6fe9cf2", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item4057f286-8ec0-42d7-b310-deaee103d3a1"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item1390740a-2da1-4c24-9f49-d21819509517"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itembbc27e4d-8f39-4d5c-b679-c0204726ad04"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item1f7955cc-f11e-456c-90d7-88778d28c549"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item4b1b9a3c-6751-4e5d-928b-d58e66e68f7b"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itembad1a795-a510-454d-970a-e55c39c810b5"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item154b4c35-f91d-44c7-b6a8-228af75a583e"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item09c148ed-1545-4fde-84b3-80adf4e0be72"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item7d41e59e-4a94-487f-889e-abdf4ee5e635"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item6d62e0f3-d977-4942-ab42-fc67ff705e6e"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Iteme70aeae3-ac8f-48c6-b345-4f592ec8b58c"),]),
    getItem("DForm Modal", "Item56d0b1b2-6b50-4fa6-93bb-034e533a239f", <FolderOutlined />, [
        getItem("Async", "Item831ae3ff-319c-444e-be40-fa900d7eeb1d", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item130af2cc-d276-4cde-a084-ad67147e1d93"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemb4a4150e-7646-4d3f-892f-5b0f6f3a3da6"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item3c763bd9-62a0-401d-95b8-d3524cd7e666"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item806c6899-9b60-4ee1-a06b-2f01279826ed"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item4130eb9d-6042-4738-9ba8-ed0610c2b8c4"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemabd4438e-c4af-4e65-9efb-a110e1a896ff"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item0a4a9236-1292-4032-8a68-83362d73a7ec"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item140ee803-a111-4ab4-b030-c6c1a2ce9b7e"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item4bb8e111-a10b-4427-987f-350aa357f044"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemd422e9f5-b145-4f5e-8551-de488649612b"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item7d8a14e6-8eae-4281-8815-d33101efcbe1"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item3c81db2b-f2cd-4152-88a2-179b510f3279"),]),
    getItem("Tabulator Grid", "Item6dcc1bbf-6113-426e-ab2f-6203f86abcba", <FolderOutlined />, [
        getItem("Async", "Itemc481dd72-c775-400c-bb54-b18d0925a56f", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item66bf7fb4-245c-4094-9983-284ba994c705"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itema1f0ac05-88ed-4585-84d8-1716950f6864"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemce16e68c-1bc0-41c8-b6dd-8950f73774e1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item086fc06a-79dd-4c7f-bc83-91822574701d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemd3748ba5-7ebd-422b-8b25-699b2070aa64"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemb20b3164-01eb-4d4f-892c-d7230d07267e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item5be49a22-7edf-4a4e-9c45-eee970c2c56d"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemd27ac1b3-78bf-4e8e-8f71-5d45c90ff729"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item0816ecd5-a5ab-491a-9c6e-62eaf5a83b07"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemc7de2cad-89b4-4f63-83c0-3fb66c53c612"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item08db1ee1-ab1f-4a0a-adec-beb2946527f0"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemc3bc04b3-8613-4ca0-8d34-d2c0603dc3de"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item68f15380-9692-4e1a-a071-97408c041a2a"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item0bc3b2c5-740c-4d52-9fc8-d497b69f9ccb"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemff8c2060-d07b-4187-a233-1c7844277d48"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item92a0c5c4-bf2f-4a5b-9c52-fcf3b41636d1"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item9940d180-e942-467b-bf33-f8271b94f817"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1701d747-8b08-4a71-96de-4b22daa618c6"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item8aac2c11-1fc3-4d5d-9cf7-55d32ccaac99"),]),
    getItem("Tools", "Item4c0439c4-7118-4a13-a7bd-a0b268b9ed14", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item7a63eff5-1b95-44a5-b1a7-8153ec4467e9"),]),
    getItem("Tree Select", "Itemf9433ad3-e437-4e1d-a678-440b6def166e", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itembac5c314-c4d2-419a-b24a-2dbb9e577fa2"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item1f6160a9-880f-4063-aeb1-475f882b31fb"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Iteme4955160-f303-43dd-bb8b-e482f06fdc9f"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item7a9531af-26ef-49ac-99ec-7996ded92779"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item05d57532-af20-4c32-b2cb-36f91917164f"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Iteme2e33735-4e77-4be4-88d0-d39b8d30eb05"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemc5b198bd-185e-45a0-acf2-7a5212a4122d"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Iteme6803dac-d051-4956-9c34-bdd24a630e21"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item24abf0a4-6a42-415c-ac2e-e26997d7358b"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemc62af31d-0891-4783-9e16-a6c4ab26c42e"),]