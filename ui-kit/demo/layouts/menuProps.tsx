
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
    getItem("Other", "Item9a8fd73c-4184-463d-9631-42fd8ac3a67a", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item763233a2-795d-499d-8d2d-08014489cde7"),]),
    getItem("DForm", "Item7cc3e634-4195-467c-b7fa-25c8825ee222", <FolderOutlined />, [
        getItem("Validation", "Item1cc3a4e9-bc73-4d14-9a06-f2a0c6c82510", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item40cd1249-d7fb-4bbc-a696-bb34c91c0588"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item07aed87b-9f6c-4223-8c0a-7cb120d33fab"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item6f60d33a-1cb9-497c-88f6-d412c07a668b"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemcd1470f9-eaf4-456d-b4f3-ac8102a49771"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemc006f8ad-25eb-4269-8691-4e01e9eac6c0"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item2a5d265b-f78b-4638-85ea-05b0d586a712"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item3ebc2947-cf23-4560-b0b5-77805582d7b4"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item62eb13af-8f81-4e15-8cb4-b6db44733d56"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itema40f1430-192b-42f6-b1d7-cc1124d5529c"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Iteme9b64015-b467-46ca-816a-8c9273dfcc09"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemd79d244b-0c1e-485e-aee0-07249c57cede"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itema61fa4cb-74bc-407d-9699-455147d5020d"),]),
    getItem("DForm Modal", "Itema901aa10-93c5-4bd1-a18d-315519f589d0", <FolderOutlined />, [
        getItem("Async", "Item4404c56d-92e5-4ca6-b0ed-26acf68e7902", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item664ae88f-67e1-43cc-8b4c-134fe4498ed8"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itema2351dce-9a98-491a-b5ca-a267e68673c3"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item6ea89e28-81a8-46c1-8dee-c0e6ca78cae5"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item4e857f86-ab8f-41b4-b098-909f3dc437e6"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item5b8830b2-682f-4e89-bb2f-4d7900d831c9"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itema30f4f8b-334e-4809-94b4-80fec94f58ca"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemaa19f807-864a-4aca-8dec-ab3fc4f05568"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemda0f2a14-c639-4aa9-a95e-3fa287e50e78"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item00f51ec6-4b25-4a65-aa44-7d0795f33854"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itema38f0340-40ae-49b6-9aef-8e5286b2efee"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item88b11aeb-498f-4063-8649-a1c26b888a51"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Iteme02a6799-22a5-440d-ba28-9541b56ae7e4"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemfc6b8fe7-9eb1-43c4-a446-31f8ab53ce09"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item7260f788-56a6-4051-bb65-c65fc7717829"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemf5ba9036-3b48-4af4-a27c-aaa9169771a7"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item392af8ec-f6d9-4915-97a8-444e86e30e50"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itema7698494-d6db-42bd-867e-182406a1043f"),]),
    getItem("Modal", "Item33f8d794-4ef8-4f9f-80bf-1ccbb770ef8f", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item1dec2042-1193-42cd-9da9-0bb0f7fe089b"),]),
    getItem("Tabulator Grid", "Item43959b49-2f39-4180-b7eb-c1395c748bed", <FolderOutlined />, [
        getItem("Async", "Item6cbe8394-df0c-45f3-9fa7-d8f103c76eff", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item30116357-b5c9-47d2-9be0-17bdfa87b6ec"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item32091487-8ac7-49ed-a359-e87e755537c3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item6ab4badb-ca5a-4c5c-9df8-60c7ce5730c8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itema17efe99-3ab0-4a67-b04f-408fdf7504c2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item8de35503-2d98-4a39-9ca6-16b26f2aed4b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item920d8377-bc9f-4906-9b2f-59560cf34ff5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item5a5bdcd2-4c20-4972-b5c7-3aa51607217e"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item8b98197f-a172-4c49-b34b-472a6c99a53f"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item9c96ef97-ba3c-4d69-b691-733f17e76ddf"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item943c719c-47d0-4d0e-a87f-9e084ea60394"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemf5aa2fa7-fb2b-4abb-a621-314df24f9d05"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itema001e290-515a-408d-848e-3cc43d3ee0f9"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item220c18fe-fd6e-49ec-a23f-98f479f98798"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Iteme41f11e5-34a8-4822-b0b8-3ae9dbe60dd2"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemcdd7a8cb-15a4-4643-b541-fed0c86ac374"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemc10c3468-c6b5-4ce7-9652-6a59b4270afa"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item8c82d275-c5eb-4897-a717-b76cdb268821"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item80f7d802-9c71-4b68-82b5-1d13629e909e"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item0ea692a8-2eaf-4721-a54f-ae954f0cd106"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item001ca6c1-d019-4923-b586-5cdf3183c039"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item1890013e-f4de-41de-92bc-b8f859aa8b0c"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item416e82ba-6506-4d12-9218-f0f8504b76a1"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item2cba2064-8a72-49b5-8218-118baa196100"),]),
    getItem("Tools", "Item7b11fdf9-9e5f-48bd-883b-abb93e4974e9", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8c66d935-1872-41cf-afd6-a455c7ed446e"),]),
    getItem("Tree Select", "Item570a80a6-1242-492b-a0b9-fa99a160be0c", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemeee867ba-ee41-462b-b35d-f74d78ee5e20"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemaf5bd0dc-10ec-4fd7-8b3e-e19f46c80094"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item61628558-0de4-407d-8bfa-27d3504809bf"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Iteme738979f-5152-4c86-90a5-f4edc2723106"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item7452e53c-3148-4345-8faa-6e8183fcb519"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item41b77da5-002f-4cc8-be3f-f82b55988194"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item2d51e0e4-4da9-4be4-a7e0-40abe740f5e2"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemfc5c2b6d-b5cb-439d-b3d4-75089578fe4c"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item49259330-a781-4224-a146-8b71b2cf5818"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item546038f7-49e9-4773-86c2-497f1c517e84"),]