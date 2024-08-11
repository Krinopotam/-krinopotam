
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
    getItem("DForm", "Item7c99def5-eec7-432e-abbc-94d00b6a2452", <FolderOutlined />, [
        getItem("Validation", "Itema9f3de0a-c0a7-4622-9237-a16248dc9724", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item7433d591-f207-4649-937a-d67971f8d217"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item2976edce-fd67-4f73-a402-27b8b7296feb"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item3b453562-d107-4b96-988e-27c6a56880c4"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itema52b92de-1fd5-4aeb-af9a-385c6faa5d33"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item27e96fcf-35d8-4500-abd8-5da661b1a336"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemf3d6a0a8-e3ac-4170-a1af-5d3c820e6d98"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemb4c6ae5e-b44b-4242-8f82-9957ca01c317"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item39aada5e-98bb-4b16-91d2-4d33007d8f97"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item39ba55ad-f828-4431-b3d0-e17fc855eab3"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Iteme25d6021-1257-444b-8c52-00dd28189ea6"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item6a5afcd4-c4a4-414c-8ba2-fdfef8cafb32"),]),
    getItem("DForm Modal", "Iteme338c460-ff23-411e-8bd7-1464460fa039", <FolderOutlined />, [
        getItem("Async", "Item7fb7a4bc-e3b3-4356-92f8-e3b3d297bde5", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemde187902-04c2-4872-8128-71e710a9db04"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item678e1f54-8242-4b3f-9b6d-24dde7ccccad"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item4752907d-3aa6-48a7-9659-30b8dfb76131"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemb61b7a94-b488-4fda-9045-0e27501e1d57"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item9eb003a0-37d4-4054-b92c-c4b2524cd4ee"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemd269360b-1ede-45cd-98f6-bcd74f10bbb3"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item205849f3-835f-4db7-b8c8-4629a5d2642c"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemd2267b33-3654-4c3d-8657-e701a2c5adbd"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemb5b8c346-f853-402c-80b5-cdf7542e803c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item61e71115-eb29-4922-9ea7-02b91970536f"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item855ba322-da51-4c1b-8d46-3cc29208442e"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item04bc5aba-0436-42e7-8470-84057dde7378"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemf090827d-f602-4b02-b908-9836e0752d4f"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item8146b2f2-0249-4af2-800b-fceb517ea1a6"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemec852fec-800d-4cba-95fd-ef60a7f85b13"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item785f6b34-f81c-4bb7-9491-59122d133f80"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemfce3d4fe-355e-4dce-b879-eea757a024d8"),]),
    getItem("Tabulator Grid", "Itema59512b1-cd1d-44f4-810c-2c7855fae3ec", <FolderOutlined />, [
        getItem("Async", "Itemddfdec5a-a326-4d68-acd9-78888e6b28aa", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemb4b27d99-0cbc-41f5-bada-23ecf026cc98"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item8010dc3c-0bec-4159-83bc-246e33ed4fa6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemc5750c38-060a-47b4-a7f8-77c7cbfb1214"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item0c3b847d-5669-4663-a684-fe1a69aa3d65"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item50da1eb8-9071-4f32-98eb-8d86f9c63d84"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itema5b1361f-3085-4807-8779-8a9179eff4f0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemfa99fdfc-1afc-4da2-a76e-aa353af16db6"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemcb80eb47-4287-4129-bda5-95eb39ba8ae5"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item3e889ff2-5738-4475-ace3-4da6fd969649"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itembe6f1b14-08d9-4c86-8033-fc8007e7d901"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item3298c285-f251-4cf3-a213-9483f5a900a0"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemb4127695-6f57-4fe5-90bd-6148fcb1468b"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemfc6c300a-ea91-4e0c-9e9e-0106d4b0a6ac"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemf7a96c5a-6b38-4e1f-a0b2-1265ede77954"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item85301d77-51f2-4eea-8b04-e6e93cb38c71"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item38cc15dc-3988-4ec6-8d40-2028883770ae"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item20fad75c-91b0-4f48-9709-5b8af0442622"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item0e7d03c9-e47c-4a3a-9b21-41d840490a71"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item28ad3fcb-7977-4bbc-9d65-8a1e6d02a092"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item903bff02-7bab-434f-8195-9b6e1b8ed791"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item1ef8fabd-920d-4991-95c2-69bb5774e4fb"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itema868a86d-6eb6-4b8e-ae5f-7f4b57d68d17"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item190da500-0c4f-48ae-aee9-d73d15410ed3"),]),
    getItem("Tools", "Item2ab66cd4-db75-46d5-8beb-50d16e2c3adc", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemf5f97a7f-be2d-4cf5-8c32-ce7d8bae774e"),]),
    getItem("Tree Select", "Itemd3094d0d-886c-4d9c-a8c5-9c60e28f3e2e", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemb5a73f6f-c38b-49db-9e44-f2774de7a9d9"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemaf124cf7-1567-4d26-bf0b-87eb6293bf48"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item49e495c2-5a4b-4ec4-9440-8a0653ff60cb"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item8c022f4b-4b7d-4661-ad09-f02543658524"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item3f2e7fd8-bb5f-48bb-bfc0-f0f049ceac1d"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemc5d10366-b05d-4c17-aa5c-2db1549beff2"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemd95d8ccb-a4f3-4249-a56b-2b7fe760c41d"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemee5c138b-2157-4b35-9834-68ad76c56b50"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemc730ce26-0ab2-47f8-bd76-5dc29372ab8f"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item9b8f2096-bc6a-4bf0-9e1d-7168429ae5f6"),]