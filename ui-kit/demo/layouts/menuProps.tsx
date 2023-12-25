
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
    getItem("DForm", "Item8573a926-81ad-4592-b4d7-9c6a2b2157f6", <FolderOutlined />, [
        getItem("Validation", "Item6618b6e5-adf5-4d1f-a480-d9a1d93168da", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item0ae492d8-f1b5-44f2-bd1c-cebc300d9b03"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item09976151-2c93-46fb-8c4b-9f5600b4c4e1"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item5055dd7a-f275-4c8b-8db8-bbdddd486326"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item89a1950b-1918-459b-838f-bac06844703a"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item5d5eef94-6191-4318-840d-d18e582ecf72"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item2819caac-ab2c-48f8-b5e1-6a9f1443ff4a"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemc2bddc28-23a9-4188-8c53-999d7e82fc87"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item74df640f-433e-43f7-b963-c75fbfd121f9"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item2c835d36-a526-4024-9696-56ca4f51a15e"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item75020e2e-61c3-4cf1-b71b-9be4a36a071d"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item38a204e2-105c-423f-973f-931bfbea63a3"),]),
    getItem("DForm Modal", "Item4aa4e24e-7582-416b-959b-a107f6cb0b28", <FolderOutlined />, [
        getItem("Async", "Item26d6d95f-1548-4a9e-924e-fca595dab5f5", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemef4c493a-bd53-4940-9e7e-5b1bf02a8ad8"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itema59de188-4af5-447e-83ac-f4de32593147"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemfa4f13a8-9567-4024-9b27-c1617d042d7f"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemcffe11e4-5bcd-4c11-9028-f9ad9d7770ae"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Iteme978d9c6-d285-4eef-933f-5b271c663075"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item5c9373e0-8e15-4561-b7ef-67839375da25"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemd8c3e20f-de5c-49e8-8901-d54c9ec291c6"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemaf67555f-eafb-4895-a922-0df6958729d5"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemd5859655-ffc8-49e6-8268-4ce76af1e0e0"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemeff8389c-9f19-4472-9084-42a78b7a93fd"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemc947ffb6-3547-4e08-bcf1-f385f53a09ab"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item2df3d31d-0330-42bd-b07e-36f4d4c47abe"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item538a9049-a654-46b8-8468-4107f0b3ee30"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item294c9c5a-1a7d-4925-b83d-e432c0d8b2d1"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item4f5ea310-7970-45db-afd6-4cfea8af8c93"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item1b71439b-b29f-4c06-8f08-b4f6ee9aaed9"),]),
    getItem("Tabulator Grid", "Itemffebc4af-a153-4c04-a6f6-6dc7d26e7876", <FolderOutlined />, [
        getItem("Async", "Item96f13cc3-27f6-4f1f-823d-0310ea135337", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemc8607115-5305-42f0-8328-d6292e744e34"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemde5425fd-c7f6-4d06-9607-f1e51c674783"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item875fbf30-1abc-401c-af8a-1e9c4b2a1809"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemd3ae3445-bb5b-4a46-a83c-6d60437472b2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item3b3c96be-c2c9-40f8-b146-58f5f00d76e8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item2b209050-16ae-40e3-a6a6-eccb0b40f068"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemb0495c89-b5bf-4815-a5d3-71a66016c789"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item43ee9cab-b4ef-48c7-8b8f-92b26bfb036d"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item6fa9ea77-1fdc-476b-aae7-ad2d99f04eda"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item28e347fe-ee1c-4ee8-8bda-5bbb4177cc45"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item5ec56b4b-5280-46c4-b3a3-ec335e4f53f8"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item1afcc727-ec7f-4a40-89ee-1102e9f626d2"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item90d6facf-bb42-408e-aebf-33101cac68cf"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemb9dc184c-a226-458c-98ba-92c5382af461"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item3b60e616-0ca1-40ce-9c56-cd97851cb9ea"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item44659bc9-0fce-4668-a5aa-6afcf12c7145"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item49f056dc-2ffe-448d-a407-96491e9d482f"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemd953c6d5-f0e5-4dcf-80d8-33fd50aadd31"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Iteme2055930-09a1-4e7b-a19d-c52023019ecb"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item19d3d540-479e-4e40-be53-26d33e4a14ae"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemff3f3b8b-5bc4-4aee-ba53-f4ad2a722db3"),]),
    getItem("Tools", "Item1d51af64-848e-4d62-850c-925b86ee0449", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item382ca8fa-c822-48a7-8125-afd896031c98"),]),
    getItem("Tree Select", "Item5811fa52-17ac-4ae6-ac5b-9a8370789dac", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item66a91e62-e6ff-4131-a3be-55ed0ecd19ec"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item524f9421-4421-44e2-9eb8-19c1f4ad11aa"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item985a5581-672f-4c53-8857-691f28736409"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item651f3c54-f39c-496b-9b30-43bdf7eefb14"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item34f90057-297f-4a45-a019-c146d91a335b"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item731664bf-fec0-457c-8bed-dceae09b11ec"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemdf2714f1-f758-4b54-b68a-7a8d3fad4ece"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item1a2a4614-ccee-499b-a273-72dd1ba3e97b"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemfd6a2dc2-6504-4b15-a943-afa02deff264"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemd97b29d9-5894-4b1e-8359-536d970ec48e"),]