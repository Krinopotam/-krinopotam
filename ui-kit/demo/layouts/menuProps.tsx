
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
    getItem("DForm", "Itemc0075521-58a5-46c7-b469-c8f2450cf377", <FolderOutlined />, [
        getItem("Validation", "Item78e070be-f308-4e7c-bd34-68d61cba2e22", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemf737f520-eee2-453e-b116-39bdc8247f9e"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item663180e4-f037-4fd3-987c-83b08274ca5d"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemec6e38fd-9e28-4940-b73e-d33ce11af055"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item61b0117d-4416-4c9f-a6d8-20d1a39ea272"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item1aab57f9-430a-49e1-9180-799bffca19b2"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemb6ad69bc-5f8d-4272-ae79-933d8812f461"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemf860097c-7022-4084-ac09-1b2feb04a5b5"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemcae05a36-6352-402d-bd8e-66a025f06ec8"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item2698a139-fcc1-41c3-aa85-382a8e726ea0"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemad2058ae-79e8-4089-8c9a-da011df08036"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item9287ad24-61ab-4c56-b1c2-f52615921385"),]),
    getItem("DForm Modal", "Item38cabd94-203a-40a1-ad28-ebc873bf582f", <FolderOutlined />, [
        getItem("Async", "Itemf872a4c9-3df0-4d4f-952b-2b9ce888cadf", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemd35ef8a7-69f3-4aaa-beb3-7da0bacebf93"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item36039f31-cefb-4f5f-9836-cf7b6bfa86c5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item4ab0f145-ca4e-48a3-ae16-e27dcf7c9e2e"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item3cf54570-83f9-4d37-b4a0-4f5ad1f74803"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemea18808f-c3bc-4438-ab04-185c58bca5e1"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item542f40b8-0005-4493-829f-73016a2733b6"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item7a838e2e-f5c1-4505-8740-94c800b9c0e1"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemef7ec89b-8ad2-43eb-987c-2c5cd8ccee45"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemc8ce8e36-eefe-461a-bfb3-ce02714413bd"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemfd914d43-a859-46b3-8945-d5ca43a81f43"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemee48ce43-8eff-4e16-b843-7dcb5cc15063"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemc40f60e6-5424-4bf6-b5f7-2f8f06d25d31"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item077d2a85-5583-4085-95df-e87cc1a5ec22"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itema1169e27-2cd6-40ab-8f09-a565db356c0d"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemb737f352-9804-4eb6-983e-d5eacb3513b5"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item4116a071-1744-44b8-a9fb-3d5447df5637"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item926df751-7ce2-4793-82bd-eb26af4eb4c8"),]),
    getItem("Tabulator Grid", "Itema07bb802-a8a2-462d-bd90-360f67c19f64", <FolderOutlined />, [
        getItem("Async", "Item14894aaa-40b2-44cb-93d5-7a96d4dd0aae", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item4eff73ec-015c-4d73-aa7f-0d9da35ef498"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item499c4033-ab36-478d-be5f-968f5a3c0843"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item0e7f60bb-e39c-458d-82cd-6239af395804"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item560380b9-9063-4918-a92f-da6133d8a4ed"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item4ec4869e-08b1-466a-853a-fa743043dae6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemae8ec4c4-d39b-4859-9929-edabdbe20474"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item758ae6a5-218f-4bcf-b478-7393b340ac7e"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemfe7688be-4493-425c-836c-c221b1730dbe"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemd7e4bfe5-a7d0-4227-be37-a7b030ca10c4"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item75886423-d7d2-4e14-9b5e-826450a2519b"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itema350b85b-5631-4100-858f-fa4744ac0ac9"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item82d65a76-d952-4b97-88e9-d010d683a293"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item154ced1f-ea0a-43f3-8a75-f345c465e857"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item0d64b5ba-de2c-4cc5-873a-6c8a2b071330"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemb0fe19b7-4b5c-49fa-beed-99990a97c055"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item5466ac65-f676-46e7-a218-e369ba6e5e7e"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item8efaaa22-3ddf-4edc-92b6-69b4f789433d"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item70fd884d-a1d9-41d9-a80f-5cb3e289d194"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item8efe72de-d9fd-40a3-bafa-bfbbd58acc01"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemf7c0dac9-1d26-4ae8-957a-f74e6d8d03d2"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemf8059a02-7476-4ffe-9d3b-88f8f618aa1a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item5619c0f2-65c1-49b6-89df-0a2edf2adbc7"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item2a5222b8-9555-464c-a644-ff9bd65bd752"),]),
    getItem("Tools", "Item4074f6a2-ab5c-40cb-bf34-d8afaeae6537", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item21733b71-9837-4c9c-9aab-992abd1ceb97"),]),
    getItem("Tree Select", "Item138482a4-0052-41c5-b81c-d683122dc3fc", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Iteme560f9cb-f72c-4bed-9874-e5bf0ac6e4b3"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item104f4e42-397a-4efa-a694-ddfffdffbd81"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item6d123cb6-7daf-4df8-8044-16b1fab147cc"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemdc614352-20e9-4b9c-a8ec-840dcc58f219"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item976cea68-0a24-404e-a273-0a45fcabde5d"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item8b2f081b-9983-4c10-8cd5-5e30ea2df13a"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemd9bf22d9-30f1-432a-b57b-c0ede82c018b"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemac31a1d4-922a-4479-8d9a-e74aa34aa464"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item89711499-b81d-4b91-bfc1-850de967640a"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item5f4158f9-7b97-4468-b18e-d63e5c992cc2"),]