
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
    getItem("Other", "Itembce44ca9-50ef-4195-b613-c3b533fbc007", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item1845bd77-9f14-4e88-8a41-e70b034aae87"),]),
    getItem("DForm", "Item88885e18-76fe-4480-967c-96c795a7de5d", <FolderOutlined />, [
        getItem("Validation", "Item770fd39c-d8f1-441c-9cb7-fdaf9672ea00", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item994747bb-a3fb-4a21-b105-41f53841d793"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item25295250-253f-4bdf-a7aa-34f5c1ec8f66"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemb317385f-7e79-42cb-99d4-990457214423"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item90e55dfd-ab6e-4a63-8b5e-1c9348cce486"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item02ec8965-393e-4c40-b5fc-92cd0110828b"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item40de759b-b607-4662-b68a-6c42956371ae"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item84696bbb-4fe3-41ab-bdbf-cc4f874309b7"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item0a610c46-899f-4744-b664-65683373fd08"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemc1d5cdb1-39ff-4854-ad3e-04e9238682ed"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item5bdef6a5-5fe6-40ea-bd2b-880d54234b68"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item39dfd52c-a28a-400d-a0ae-9b888702058a"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item786fa4be-dc52-4d93-9c51-1bcabed0c36c"),]),
    getItem("DForm Modal", "Itemc13d509e-adff-40a1-bd65-1f37761f0f90", <FolderOutlined />, [
        getItem("Async", "Itemaaa18261-ddeb-4737-8530-ab08c4e05378", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item95d5f661-fd52-446a-bd3c-1cbff3668573"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item7debf4ab-0024-405c-a9b4-964d02d4aaa2"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemc890c8a2-0947-49d1-9a26-d91e5d8e17d4"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item77eea8c9-cbcc-4240-8f24-ce9beea19037"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item1f485da0-958b-4ec9-a01c-d58b6982a9df"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemf02e888c-6e8a-420e-b0b9-14423766e0e3"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item14755d8c-3347-44ab-a605-7ac04e7a754e"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item1188d16b-334b-4115-9e46-c988250d48dd"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemd70fe631-d939-4c3e-9686-9612963a654a"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemf3887892-8b53-4b92-bd09-63a0d3024852"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item8d3a5ca9-5c3c-4e23-9d26-a0dd12715800"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item679ebe04-3d09-4d2f-9277-11af28666088"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item7e12f48f-1ff5-4567-8086-170c0c346d4d"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item009019b7-9af2-4cd3-9819-fa861a72ce13"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item5536c297-0079-4d0c-b296-3bd6c2ce10e4"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2b60ee0d-8111-4c9e-b1e2-ac7b1302ad6d"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Iteme1e50604-9998-4262-90dc-a08f183113b2"),]),
    getItem("Modal", "Itemf0f3f56f-73ee-45d6-8900-9a9b5a2525df", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item17a82575-9c0d-468b-a048-1de3bc1ebe50"),]),
    getItem("Tabulator Grid", "Item4201aa91-0485-4a65-82cb-2a90b8868418", <FolderOutlined />, [
        getItem("Async", "Itemc66e2afa-c164-4c1c-a4b9-a0b6686ef956", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item4a6dbc4a-258e-4c49-acf7-55f25d5f4b5b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item3a76c2a5-ab36-4ee8-a785-29024bd4e327"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Iteme4964d35-5cc2-47f3-89d4-958dc216364b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item6af9b08d-98d2-4926-bb2c-8e65467d6585"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemc7380f68-7458-468c-9714-82422cd7cd90"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemb9f52f68-2783-4d56-b3d6-a2ebadd58832"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemcc72bd70-e662-4f9f-abd1-cb2731f7367a"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item401cf220-159b-41c6-a148-cb7c0da9c641"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item0df7f829-3f87-49c0-ac29-465649147e56"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemd92d7bd7-448d-4cc9-a373-25bf65d459ea"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemebfa2525-29a0-4171-b438-7fd739f0cc65"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemb4862c53-d97d-4d57-a036-b45459b0377f"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item3fc1f9a2-a3fe-475c-9e54-13338796c7d0"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemba178b9f-d650-4ab1-9901-6044a94127e5"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd54d3a7d-a0d4-4dba-a3c5-e10ae08caf42"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item778c05b0-b3d0-4e25-85e9-b86efaa96696"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item7b830967-599d-4678-b72b-d0549c7da12e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item76fd7e88-98f6-4fb1-bb8c-973d233369a0"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item9d349c9d-418b-4638-82e5-c51b9c085e70"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item8c87240f-955f-47ba-8b7d-909bc71fe0aa"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Iteme0d453af-9d8f-4086-b1d7-6ab505632f47"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item20c9458c-a592-41d5-94b5-b4bd79789a48"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemffe4dbad-c8f6-48db-9e2e-d2dc0d04bc2f"),]),
    getItem("Tools", "Item467d6835-3524-4801-8dde-cfeca24f78df", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemdd2a3d58-1d53-4887-b395-984935050f74"),]),
    getItem("Tree Select", "Item87241670-a3e4-4282-97f5-3171d09115f4", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item9e1a44cf-0ca5-47df-885c-b96e5b7d1141"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item267e2ef0-ee17-4881-bbc7-de30f4fd42d1"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemed771bea-a6fc-4b69-9b07-76ef52be4b8a"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item15a8a158-9527-4dd4-abc6-525261b35b0b"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemd277ff82-a5a5-416e-b5d5-59bef1c5dcc4"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item4aeb19b1-29ac-475b-9bd0-11e85170321e"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item2c2f684f-2b3b-4251-a2f8-8c83fd8de526"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemc89478bc-cc82-4655-bcd4-d7252e8c8347"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemfd32226c-4a08-4162-a7e1-a59d0faf1a75"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item9bfa7610-a97c-4a6a-92e3-f2eb9a98252d"),]