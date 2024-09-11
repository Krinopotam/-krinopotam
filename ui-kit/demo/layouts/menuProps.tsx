
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
    getItem("Other", "Item69fc028b-adba-46aa-be82-9c13440a236e", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemd665c6c1-b79f-4ac8-bf6b-aeeb086dff82"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item73e69984-fe91-4189-bd7d-aa922d5bf0ec"),]),
    getItem("DForm", "Itemd111d694-6038-49d0-85e5-0703fad0d4dc", <FolderOutlined />, [
        getItem("Validation", "Iteme0806b3e-5d1b-42df-9403-a165f127dce6", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item1a1fa6dc-c0db-4d37-af29-ef61da50a8ab"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemc283e59e-e1fb-455e-a646-3feee584cd8e"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item8060677d-e1a3-4462-b58e-d642ae53a14f"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item51316a3e-72be-431e-911c-572c93d8fc96"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item82a3e25e-94d4-486e-8b95-5a88ba3659cc"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itembec33349-c17d-4312-9d64-00e113c617c3"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item13b5d561-8d09-4458-9ed7-40075173bc2b"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemb53bf66d-82f4-4bfa-98a4-5c09a9fa76b2"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item0630f095-95c9-4d0f-995c-2e3108730f34"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item60b5f2e4-022f-460f-a66f-d647edd459e2"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item30f010d6-2668-47d8-a23a-1f6e4a0a810c"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item10be9e48-3eb8-42b6-a15b-6282bda49496"),]),
    getItem("DForm Modal", "Item24f74150-79a6-4a92-b2ca-1379a3540cf1", <FolderOutlined />, [
        getItem("Async", "Itemc05e62b7-3995-4a0c-bc0d-0e0833c400ee", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemef08ad23-0027-4f99-b444-c1ae02984139"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemb45308f3-0d2a-4233-adf1-825f24eeef69"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item0d50e1af-b674-43ce-86c4-52874f71ddfb"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemb2602b13-ee0c-45f9-9171-ff59efb0d83e"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item4f0d3111-87cf-42ea-ba3e-09f40db6fbfe"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item64d38881-f842-4f4d-9937-6db964bce7b2"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemd6a91a8d-6fe8-4504-8f56-38f9b6bfd979"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemec7cf676-24bb-43c9-a010-60294ab23ac6"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item9b2e571e-c74a-4184-a23b-51466a806995"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item09e750ac-18df-45c8-9551-566ee5a8d40d"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemb73e4f74-179b-4d31-aaf5-f1c84cfb197d"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemce53bf55-df34-45be-b59c-f8c501e86db4"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item022bd458-6192-4949-abd8-775654710cfd"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemdf40920b-0109-4756-93d4-c7023ae3e576"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item6eeb12d1-615a-4293-88e6-099d0d1c6459"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item12d23dad-ff31-4a0d-a9a5-b576c8dfb5b5"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemf42cfe96-e967-44c7-a402-6666cd2d680c"),]),
    getItem("Modal", "Item5bd62a60-1c4f-48ed-9bb7-8a151b0e3dce", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item1361b6f9-b236-4111-8c25-f82e430154b5"),]),
    getItem("Tabulator Grid", "Item8cc80bca-72c5-4641-b17a-cc63b368a6a5", <FolderOutlined />, [
        getItem("Async", "Item6ce2da5d-d385-4776-8cbe-4442d30e0194", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item42989a2c-b1ad-43bc-be95-4d1148e82114"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item5d51e1bc-274e-4cff-b7ef-3092751ccff8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Iteme12c9db5-9d2c-4756-8e0c-9609bdac4068"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item8dea90de-8323-4879-a38a-1b10a3ccf67e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Iteme14c26ae-281d-4cb9-a595-7a97cc05915c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item9c4b6516-d893-4b79-bd2d-0df0a8ee3798"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemdb51cec0-a1d4-4184-b6a5-a621c4da056f"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemd2904a93-1e93-470b-9b47-e0d701c4d57b"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item9cf51b26-5b01-4259-acba-3ba0f040ad6c"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3d26963f-328f-4342-bf0c-d2bde09f2acd"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemf40aec96-f198-40b7-bc8f-85878f38c2ed"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemdc2801f1-4166-405b-8bc9-6569d8b5c979"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemb615b4b3-ad8a-4569-8d9a-eff55a613b55"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item3c1abe25-014b-4c42-afa5-7c8adc6bbfe2"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Iteme4489995-92c2-4eec-82b2-fdf6157768ab"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item2c98f152-af1d-4136-950f-f2e425011703"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item79b18a87-735d-41d3-b838-987699382dd0"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item24abc027-d857-4657-8785-5237267af0f3"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemf8c12d44-1941-4448-9b2a-f7613bae18d9"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item330e25f1-ac2d-4201-a82b-c3dbf3fbc139"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item9a014930-068e-458e-bfa9-a7dc3f0222f1"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemf4bf0505-6040-4ee7-aaa3-7e0696bbd98c"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item5c2d3654-1375-452e-89e1-8dd699a46a07"),]),
    getItem("Tools", "Item9a36cc03-6bd7-4778-a468-45803b6a9e8c", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item1aa78988-8469-424c-bf50-9d5b8796ed5e"),]),
    getItem("Tree Select", "Item2cf3b205-559a-42af-9d8e-6e2cec61e584", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemd837b574-0b9d-47a4-98af-5b3710132aef"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item5019ebdc-1b2c-4634-8b84-cee110037d59"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item3c506aa8-f0ba-4078-a73d-6b3eb946d61f"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item2c72e064-a2ef-4ccf-bd3f-99bf7e8da8bf"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemf1152d8b-b23a-4009-88eb-343a7f2e2b5d"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item83086640-feb9-42c6-9d9c-9bb1e691f3df"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item1b574234-7e5c-4a41-b914-35dc0d43af09"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item8bcb5182-dcdc-4ff8-820e-d05926a8279d"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item51b59748-ebcb-4a0a-936b-b83dcf4d8a8e"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item045aa353-635b-434d-84aa-2e70c654eeef"),]