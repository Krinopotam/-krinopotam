
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
    getItem("DForm", "Item91546752-3fa6-4e72-ba4b-98eef76e93ab", <FolderOutlined />, [
        getItem("Validation", "Itemd2def690-59e7-4d80-8f46-19b6ab4465c1", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item1871384e-8866-4486-aa88-cee32796f025"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemb08eedb3-a5b1-4b9a-a10e-906542e4ae45"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item2fb460b1-208e-48f5-8f7a-109c0891da9d"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemf8ae386d-6e02-413d-be97-bbd8d2ab4f8a"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itembb5f84d7-8d90-446f-a85d-a38348a688f0"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item8bce55cd-d00a-4bd1-a5e1-e0e49e16543e"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item30bc06e8-4fce-4716-89b2-2d08e8a1804d"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itembaafaf4f-6ede-4b35-85b0-2927f226c9b0"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item49646dfb-91d4-4f3d-90ab-5690a5adc74d"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Iteme2182e75-5cd2-4083-b0a7-4a182534e670"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item35f8cf5f-a7db-46c3-821f-afdd35169af4"),]),
    getItem("DForm Modal", "Item2cf6e04c-88bc-4199-8432-d241e2bf82a8", <FolderOutlined />, [
        getItem("Async", "Item0d3407af-c15c-4ce8-ba29-d78f6e7118ee", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item9d5d51c5-64f0-4220-9f01-3255af31d5c1"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemea0da1f4-f36c-44ce-af78-5b69f627193f"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemfc207dfe-e222-4eb7-9d76-fdca89109328"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item5e985f9b-0e5f-4bba-905f-b2e8f5c07d76"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item7a1225a5-c02f-4558-bcb7-d2366d67aef9"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item09612225-8729-42b6-b198-348d2187e595"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item88f3e6bc-311e-4cb7-b9b3-530d226c3d2e"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item2c2da458-a284-4104-8234-a4398f4cffc1"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item96cad90b-fdc8-49f9-9493-20d2ab35858c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item0c99f0e6-eeca-4db5-bf79-728909799b30"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item653c4139-fbee-4083-80d7-a9992968407b"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item56e646e7-6ddf-48f1-b0e7-cc8d307f44b5"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item6140ac73-dfed-455b-a913-759aefefd73f"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item5abf5ea7-9efb-49b9-b08e-38001fd98d21"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item10b57240-807a-4322-a79e-46eafed9d26f"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item082364c9-6dac-4ab0-b843-699002158e2c"),]),
    getItem("Tabulator Grid", "Itemde185c75-66a6-4cad-a1e4-d57a5383eed8", <FolderOutlined />, [
        getItem("Async", "Item6194dded-1939-4bc5-b63f-064c40253329", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemd90707d2-7403-474c-8342-9bd25debae81"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item6a9a9787-511f-4a4f-b4bd-8c47cd863c66"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemb6efab23-8d74-4808-9aef-735dcfd7173e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item015392aa-ca99-4c10-91ae-617b0763c222"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item13bf35bf-df7f-4361-8c84-ea7505dcf645"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item4c56d6dd-332f-4722-b6b0-369aec0a7f4c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item3bdf607b-4494-49f2-8395-1a9df695b83b"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemedb4ac46-9070-45b9-8241-261323f3e45f"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemf6cef81d-f904-4d10-a8d5-f5b085c208ac"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item8c8ac3ba-a87a-4f82-b18d-445ba93e2884"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemb72e7f7c-00fc-440d-a10f-bedee0f28839"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itema6b54627-54d5-4609-bdbd-c528ed2a868a"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item1927c9d4-ed2b-4e5c-a54d-6be82618e9fc"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item59f2141d-eb9c-4d47-a406-2dfdcc748d1c"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item722c76fd-0a95-4dc8-a83e-4a88fd28f778"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item4e5f1ecb-9a86-43ae-b5d8-e2a6171e8062"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item88907a16-5fa0-43b3-9510-6230e6d968af"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item62de1c11-973d-4ffe-b985-b4bcd535e1ea"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item65dde5bc-2bfb-4a09-ba10-37a913660895"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item8fecf685-77e0-4d4f-ac11-e4a115bb8269"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Iteme16dc80c-6831-4bbe-acf9-77cb9b054ade"),]),
    getItem("Tools", "Item5633d9e2-cabe-4597-8f9f-f41ec2aefe2f", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item51f8c40d-2158-440c-8079-fbe0a6a38172"),]),
    getItem("Tree Select", "Itemc6d2f95b-b24e-47df-9d22-d747bd9e91ac", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item1f1d619f-3710-4fdf-a34c-872c03f6942d"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item6ffc9255-3f5b-4f09-a1bc-47f2691fcaae"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item63a13053-caca-482e-8cf9-5aad598bf7cb"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item2a3a005e-f0c9-4bca-b538-d078f7f16d2b"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item1c97d309-58c7-438d-9c45-dedb5cb3160a"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item8a97a0bd-e0a0-4cc0-9370-cc2935002de3"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item3d60078d-6c4d-4a00-9b43-693086c91859"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemabfec929-7aa2-40dd-a820-907a769cfcfa"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item1d7d049c-52c9-4d7d-a2a2-da1aebbf61c9"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item4c6c364b-54b1-4d21-a64d-7eea58663a54"),]