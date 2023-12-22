
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
    getItem("DForm", "Itemb72285e8-2d26-407b-9ba4-8f542cb932c9", <FolderOutlined />, [
        getItem("Validation", "Item0d3dd44a-b8a4-4b1f-80c9-d94b49aa8bfe", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item99c9f03b-681e-45a5-a493-47e4a57974fb"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item4ace4884-c089-4a24-bb50-1e64d21d2dff"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item90270e25-70f2-4b2b-afa8-39635dba3c7d"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item2f4393f7-f1e2-4502-9cf7-16ba11a84862"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item1912bffb-274d-42fd-acf4-ad741be1231f"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item343a2bc4-64be-416f-b62f-c1cc908941c8"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item57a81391-2d4d-421e-a084-70a901c2d2a8"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item33eb3bc8-dc6b-4b11-87cf-f43c786742d8"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item37bce150-698e-4483-82dd-2e7b16fe29a5"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemd918f7dc-9277-44da-ad35-ba21b44835cd"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item2bc3a496-99c3-489b-8eda-e65800d75591"),]),
    getItem("DForm Modal", "Item4704af45-558d-446c-a929-f41570da3d39", <FolderOutlined />, [
        getItem("Async", "Itema5ba2045-31ca-4bb5-ac95-072ee94e398c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item67950df2-4e19-4bfa-aacb-11907ca9fc6b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itembd62ef9e-4ca9-4e33-b85a-473cdc394cb7"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Iteme9c63058-0e36-4818-842e-079f8f70cca0"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemf1c966b9-b189-45c8-b1a9-c1209984976b"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item154f6a87-0dd5-4987-95bd-623697bf6181"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item332e5451-ed9c-459f-9f3b-8897d5d1365a"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemaad8738d-914a-4927-995b-ce27300cc02d"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item59bed840-96f4-4853-875a-99f461441e0c"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemf8ac2a52-cec6-4ff6-a3e1-44dca0f7583f"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item9348c992-a62b-4df2-b97c-5eea3026f3ab"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item0bc5fc57-aed4-4d20-8f39-a73d63f66519"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemb66f40d6-34cf-4697-b99c-91b13bb3231e"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item549378c5-18a6-4740-8c35-98fab20d192e"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item4e193e3a-3c24-4dcd-9145-f545bbabfa8b"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itema8c6f255-7698-4738-99d5-e48e6f1666a9"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item2babfb8b-c697-4cc3-a6fc-d18fa4afde9b"),]),
    getItem("Tabulator Grid", "Itemae2129d6-2c95-4546-bf60-4df98de354d5", <FolderOutlined />, [
        getItem("Async", "Itemc50170c3-5444-48e3-bcba-0f496331888d", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemc257eeb6-22c6-433c-9f66-2eec82ca2e80"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Iteme20af01a-0ea0-4f1e-bb88-98718b192c3d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item0c2be128-2cb9-4d28-96a4-c0d0ca746f34"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemb3e11b39-c6af-45ce-a42c-5e2c5aa69537"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item31681d0a-0bab-4df0-acc1-4722effb31bd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemc01f9326-7d0e-4197-88f2-18b7bc4aa47e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item20c4019f-c6f4-40aa-b361-fb960af1fe2c"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemba5ceffc-542f-485e-b0d8-35baf8f5bbae"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item6b627808-6cef-42e8-9a91-7e626c2100b5"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema7589a7f-5498-4779-a71c-62789c37afa2"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item75d0fe05-3520-4819-867f-5fbcb4478587"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item97b3047d-71c0-4243-a1bf-2b679ffa721b"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item73503f8d-be6f-4ef4-afc9-aa3ce47cfd22"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemfde827e1-bbaf-4ace-96e2-82ccf30ca6a0"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item3be928c0-2976-45ce-bccf-3ff4e0478a22"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item7245e46e-bab0-40eb-8f2a-f8c4f27f2371"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemf0b527c1-ae0e-4c0e-a737-dcd25299be43"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item9b271620-cc3e-4ca1-8b73-b4e1175a79f2"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item9d0b3be9-3aed-4f63-86ca-d0c9848052a1"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1877a584-263f-4fc2-b309-4120d3c36fb5"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item95f46103-399c-4e06-84b6-e824d928ca33"),]),
    getItem("Tools", "Itemf2756047-71c0-4edd-a831-5bd581cae144", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemcb97199f-3a70-4ed3-8ed1-093a1b142c5a"),]),
    getItem("Tree Select", "Item05f5bf2f-4793-432a-afd6-89ac494d841d", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itema4b482ef-1e02-4967-aaee-fbcc5f6908bf"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemd40a21a2-aa4c-47a4-9d3e-cc7723a7b4e4"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item3a383e4d-fa42-4f96-8393-69e6aa9b6109"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item63ab7827-c95b-43b9-a896-8690f759171e"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemd01f9897-16b6-404c-b56d-6f23e61dc593"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item680ba372-4266-4f40-9b37-26f32ce2a806"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemfd0bc377-763b-4516-9c84-846b2328f9f3"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item8d75d3f5-34bf-460a-a566-eb78b13d4802"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Iteme956fb5e-a8da-4f8f-8010-f1ed2401ad89"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item9fa589b9-1a54-4c38-b8f0-9a30ec63ef78"),]