
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
    getItem("Other", "Itemaf02728f-272d-41fa-b48f-fae903ca7c0f", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item482aa8f0-84dc-40b5-8ec5-7fe40db2974d"),]),
    getItem("DForm", "Itemaa991299-65f5-459b-ba5c-6e3671bd6de8", <FolderOutlined />, [
        getItem("Validation", "Item83094459-9d78-4689-a1d0-21aab0083f13", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemb758f6da-8760-497f-b25b-57a9527955ba"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itembfabab42-b059-445e-88cd-4bb3edf37ffa"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item5b6289d2-67d8-4396-8149-43a12048edae"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item951b70c3-72c8-4114-9448-d818f80d15b5"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item17f163b9-626d-4e5d-9b2c-366632b39d2d"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item289b94a2-cc22-4192-9457-445843cbe49a"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item85a27a3e-1dd4-4ef4-b0e9-139abbba8abd"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemd0930e29-6460-41a6-b074-b6dd4a50d04b"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemece679cd-dd7a-4614-961e-23d4c1ebd381"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item5fa1596a-01d6-4f91-adbf-34bdf0e5fbc9"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemf05cebad-b890-4d12-94fc-b90a8ad66d1b"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item5a0ba1c9-bb1b-4dda-b4a9-f5b60a5a3d84"),]),
    getItem("DForm Modal", "Item3092daef-5c1d-4ea4-9a6f-a5b166a34f38", <FolderOutlined />, [
        getItem("Async", "Item90d10988-96f7-47bd-b52d-d2fb5d8a60a9", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item76091f87-2d7a-4509-864a-fdd1f1088674"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itembd0019f6-53ed-4246-aba0-5f6122857bc9"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemefed7134-350d-44dd-a152-ff9f728fe455"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item25a23cc6-ab21-4ee7-839f-f6a8e05cfae5"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item05a64351-5d2d-448a-b452-ca57dac96453"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item831f7aeb-e06a-499b-9de3-8624d08da77b"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item2dd1ad02-4290-42e3-802c-741481dbf5c7"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Iteme9b69759-77b4-4017-9880-b110b82d4117"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item0ee1b309-c1cb-46ac-b1de-2bbb0dbf5e1f"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemcd337892-a534-40a9-ad65-4e7b837a79bd"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item0f94460f-38fe-4f15-bdb4-a4c2438e2316"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itema987c987-400c-407d-b9fb-d647141fe26b"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item6ee4ee67-9901-4a3a-8935-48335282396b"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item081e98ec-1665-450c-b24b-930bea44a1a2"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemb129f88b-cb95-4bdd-af19-a549b72cb486"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item478e1746-893a-40e6-880d-e59eed6f7f3c"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item96adc0eb-7bfd-4685-af0a-7ffeb57a482b"),]),
    getItem("Modal", "Item2954d534-9e82-441f-b0df-efb8101ffc82", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Iteme423403a-8165-485e-b0c8-41af2065c4ae"),]),
    getItem("Tabulator Grid", "Item74896c56-cb81-471e-ac93-7b6957abfd17", <FolderOutlined />, [
        getItem("Async", "Item80588704-ef89-43fb-b3fb-4cd85d0cf682", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item7c9090b9-b911-4f32-a8e6-29663e6844f3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item75935a9b-265c-4c1e-bd3f-bf84954127d6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item6f9bcb20-4c86-4d6e-ab8e-b71bdf7956c8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item7a78466a-1d2d-49ac-8313-3d825b7f2301"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item2b41c59c-12f1-4627-8974-0a4c12dbc6f1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemdbb66f54-0e61-4d4c-a316-c1836e1e3c32"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item36ad13b6-32b3-43df-b6fd-a76a1b894a18"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item202d9b35-b5e7-4fc6-89cf-330116104ae4"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item5111fca6-e332-4a30-acfe-6c83f3ea341f"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemf372a12b-f808-4b17-a96a-35a1caac1671"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Iteme9976e6f-6954-4feb-aced-bc61c57b4fef"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itema03b5293-fa69-4667-88b7-037ca0e6ba15"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itembff04651-c399-4e9f-a77a-3978297bfb8a"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item5256463a-4646-4f79-946d-b325db7b389d"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item6c726299-7ef1-4492-b49c-e2aec6637b75"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item68dd5f65-064e-48d5-818b-a2436b17a8ea"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item632aa7a6-2cf2-4718-9d41-6b54c7fef266"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item7bb17bb1-aefb-4c9b-b487-a0e0afb3037a"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemc68d855d-0492-4cd6-b93f-4edc010f1254"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemcc79ecf3-abbe-4440-a3a6-5acd5db2a27d"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemaec2829b-616c-4ec1-a33e-037f0fdb7a97"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item6d9794b6-ca24-446a-a1cf-eca0f5fca0bd"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item1033dcf4-67f3-482c-9e69-d1b16806e3c8"),]),
    getItem("Tools", "Item4796b243-00da-4c84-b5e3-1e0f133e13d6", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item57ced85a-ea45-4786-b301-23c7e854f970"),]),
    getItem("Tree Select", "Item4bedf291-f39a-43cb-9642-c3fb7b25aff8", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item05ca4659-fe74-441e-8590-a445feac6b32"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item9b5511c0-df1e-4c07-b4b7-77c0005ecce0"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemdac20b7c-d1cd-4492-83ac-7d5eaad09697"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemc3455cd0-5abb-4b0d-9d80-ae629abccb2d"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item17b7d2a5-d88f-47e9-be89-91e970f66a13"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item85803aff-7355-4dc8-8517-e3d7948b1be6"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemfb1cc190-f7d5-460d-94f5-224d20dea06b"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item40bac038-dc19-412d-8991-eb9abc8ef997"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemee0c89da-4f84-4d80-b5ff-6b42dd712ce0"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item411856ca-9656-4fcf-806d-f6f8b8ad2e8a"),]