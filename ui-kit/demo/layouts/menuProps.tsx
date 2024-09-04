
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
    getItem("Other", "Itemc1aa06bf-004f-411f-99af-56f8ff20492a", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemca65b19c-d8b2-4a20-9733-49265c724294"),]),
    getItem("DForm", "Item585ea393-f8bf-4c8a-88eb-af7f08ea7a48", <FolderOutlined />, [
        getItem("Validation", "Itema341577a-54c5-42a6-aca1-5701f9145486", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemc8c3607b-dd15-46b9-ba34-bd12cd4e499b"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item7d00e98e-bf4d-41fb-a4fb-e0c501de3acb"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item0ac53b0c-cb70-497e-a3c8-ec63fc106365"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemfad07b6c-25df-43b0-a46c-a4fd4ca7eec9"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item33c0499f-9c51-439b-b82e-64166f47aceb"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item6a892753-d06b-4290-b66e-32f8dc0e9668"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item2dbb6843-2ceb-49d2-9a13-2522ff80473e"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item922b785d-f48b-4666-ba68-707acc7149ac"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemf126fdf9-fbfc-4d15-a43b-6c2a5f960770"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemba915fc7-eee7-4807-91f1-f9b86d6c990a"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item46c59a91-9d9f-4a82-955c-eae464315d72"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itema123c165-1412-47c2-95cc-3697b3f1e1b5"),]),
    getItem("DForm Modal", "Iteme68220f6-685b-4c6d-be6f-90f5f19df578", <FolderOutlined />, [
        getItem("Async", "Itemdc283a13-fb2b-4629-aa78-682ea0f1e5ba", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item82d9605b-2328-43d4-8bdb-dadb861f156b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itema88b4cbd-bf83-46b5-ba1f-12a93015e92c"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item466385e1-4ab0-44a9-a918-86e359b5674a"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itema42188d3-4699-442e-9a8c-7225e811999b"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item6441976e-c429-4df1-98d4-3c39679e4183"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item6e31b39e-3365-4c6e-97ac-8b861ba19406"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item5746a8eb-cbe4-45c2-9294-f0a186a92633"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemeeeb8d96-8b57-4409-9216-9d3e7bf45359"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item764ebff2-7bb6-41d5-a0f6-be32a6727d78"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemd17d913c-91d4-4d99-a563-e848deba8c6a"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemcdfb76ad-3489-40ed-83ed-13eb4714b4a2"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item8bd97b0d-9d18-47e1-afad-b33c7f5e98bd"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item4a8ef500-ed4e-42bc-bc85-0c43d3011e1b"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item67998ba0-ac20-4aa0-bab4-2165995caa18"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemf1e042a1-aa50-41ba-8bd8-026317258b5d"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item48f7eeda-4b57-4a2a-9770-323e0a3d1048"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemfbb117e9-58cc-43d8-a8d1-73c441e36626"),]),
    getItem("Modal", "Item00e328b1-5ec5-4fb6-92a2-ea6e7983d4a4", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item473785ea-a491-4e80-8383-3efc7a7dae14"),]),
    getItem("Tabulator Grid", "Itemd8ffb126-9f7e-43a0-9184-9a6af2dc275f", <FolderOutlined />, [
        getItem("Async", "Itema0cbea41-4f06-4795-a069-90c3ddd7e14c", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item9be8122d-5499-407c-a5bc-454b8792c9c1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item9e46e8f3-cea3-4acf-97d5-eb39511254c3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item69acdbfc-eb49-48be-8425-8c72f722fd53"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item824d6b57-22d4-4dc2-8c82-34d744806682"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemf1474767-490a-481a-b7d0-17e720ed8ad4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item80c26352-1882-4518-bed0-f52bff516699"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item051cd5a7-4be7-4e5a-b262-7bc85869aa25"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemabf93981-df84-415c-90bf-b9de558ff016"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item454b2198-5e27-42b1-a62e-881d129dc7a2"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemebe25424-6fee-4eb4-bb1e-5d786abdd4be"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item7c921ba0-05df-4d8c-8d61-d978dc3b7e64"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemf426bd4f-170c-4267-bbf0-577bc7a8cc4a"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item94e54b99-34a1-4db6-ae42-a8ea149bf195"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item4c9a50d7-6062-4b2d-89f7-bc15c9979485"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item7c07e546-67ca-4002-a83e-d6bc7ae5efcf"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item2fd767b0-8fee-4bea-98bf-0dc536e7c83e"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemdf1da7c6-6a67-4a44-9ea6-e7907ee6517b"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item7014d627-e552-4b85-91ce-912f7287e46b"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item922aa0f4-15c7-4403-96c5-74991ce0c0ce"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemf99639c6-06ad-4fa7-a224-6ceca262b2cf"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item151f3bb9-990e-4188-bb26-ff7983491c01"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemf428dabc-0494-4de5-8db7-216ac9ef8678"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item4f9ba0c3-afd4-41c7-970e-12c29818f3ca"),]),
    getItem("Tools", "Item6deeed59-bcb2-4bed-8cfd-5bd4e2176bd0", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item1dd4215d-948d-4aa7-88e0-37156a5d3434"),]),
    getItem("Tree Select", "Item4696d56f-2c89-4191-b49b-2976748a86c3", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item70731714-c7d6-4dd5-a6f0-0c8d347d7b0a"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item094f805d-2181-46ee-96af-831656bf804b"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item52745dab-36e7-4be1-8c01-50c98b66a84c"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item6177e8c3-fac1-47e1-8333-31876f5e6d8b"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item79291a7f-dea8-4a98-9c05-192f85b4cc48"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item00cb5adb-f3b6-46e1-a0ec-9dc63be71a51"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemfc17d88d-7bf8-498f-9b13-882b4c2b4c9e"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemed6993f2-3e0f-4aa7-a75c-f1b9c28ce165"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item19c95746-b0c0-4fac-83bc-e045edf921e1"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item9ff9511e-aec8-4599-a451-c0b514618143"),]