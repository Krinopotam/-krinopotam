
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
    getItem("Other", "Itemed078eee-fca0-4236-ae95-433313158b0d", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemcfd4971a-5aac-44ee-97d5-732e45aa56b4"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Iteme2e85d0c-efd8-4e6e-957f-c156947eb871"),]),
    getItem("DForm", "Itemf014fc50-9837-4d61-aefd-0598623e1c35", <FolderOutlined />, [
        getItem("Validation", "Iteme367f0de-21c4-4397-82b6-de750a829530", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item511cf555-0784-4998-accc-74a8a669c9e9"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item1dfe4243-6a24-4d89-9e0f-78ed59049184"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item38a41423-0e2c-4139-9ec7-95f16ea36dc2"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemed26a510-074f-4840-bfe5-4524ed058158"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemb2a3cec3-11ae-48b0-bff5-d96386089572"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemb729b360-f3e0-4d57-afa3-0e16c766ee58"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemf748a812-d18b-4788-a565-b0d81cd9d54e"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Iteme8e4b0c3-7243-40af-845f-39a0146da523"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item365d6a15-950a-4185-89c5-5f9418d07e47"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemfdf23143-ab17-487b-8bad-f7510534b9b1"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item0de952a8-ae5f-4145-b57c-72e912f1513c"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item1e74e9e6-8e1d-452a-bc07-9ec24acbd986"),]),
    getItem("DForm Modal", "Itemdf800731-2626-42e6-8472-e22513c06e81", <FolderOutlined />, [
        getItem("Async", "Item4979f338-1b9b-421e-99e9-c502ffff581c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item990a06d2-5f68-4711-b470-a481e665b20e"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item5090bb82-d212-43ef-a145-d0c63ae74922"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itembcbb3067-5225-428b-bf8b-e68ce2243d57"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itema33dcade-77bc-4b49-87b7-8ce2a821b964"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemb304e405-2577-4db1-b17a-6ad71462a9ac"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemd3a65f40-6928-487f-b6a0-9ee6ea173229"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itema76e94f2-21a1-4604-9ba9-03ddb66d1906"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item28c59a51-83d1-46f2-8c81-3b6c23b828da"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item4d9b8e8b-7aa1-4d06-b0c0-35d96579af01"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item5165ad06-21e2-46a4-88af-2e1c0c6c13b9"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item4ed08249-163b-4529-8fd7-44087f8a9795"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemca4b31bd-698e-4d66-9473-8709922113cd"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itema3b034bd-d7b8-45de-95d5-2a9e0f84078a"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item2bacfbbe-5550-4c6b-8ca6-5f7a889e8bd6"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item7df16d1f-06c7-4cf1-b048-1c6c45a7b545"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemf1765cd8-7376-4e96-ab23-2b34120104f4"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item79777a44-2fd2-45c7-a33e-5de4e5c34058"),]),
    getItem("Modal", "Itemb37af750-6c99-4b8c-af34-62537bb3047e", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item9dc715a3-79d5-42cd-9326-b50b887b1c0d"),]),
    getItem("Tabulator Grid", "Item2c7c6d86-8bf9-4aa2-b76a-bb6d0311e454", <FolderOutlined />, [
        getItem("Async", "Item17bc577f-3fbd-4e62-b5bb-5beefd113090", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemf3bffca0-a87c-4f41-9cd5-662a56bdcb7d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemce35a76b-3917-4f78-bcb0-9ae8ea4ade8a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemccba8768-b93b-4031-9d59-fe65548c03a3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item4fb2d63d-53eb-44a3-bc5a-9fef11cdca87"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item5293567c-aa9e-4560-9f2c-dfd66604a6cc"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item3da9693a-d226-49ce-9e7a-8759b2e38cd8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item3e2b3da3-4a94-4694-8c8f-0605a1b8f668"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item01e8c23c-ccdf-4033-b818-224d6f5aa9b4"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Iteme17519db-cdc8-4b84-951f-9ecca8193527"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item6986869a-cc2f-4128-bca1-e5755c993c90"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item4e96ff7d-fb7a-4246-858c-c101742663b2"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item1192bc2c-bd3d-4965-aed7-112fa49a6703"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item5918570e-ea95-42fd-b3e4-3233ec717e2d"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Iteme74b31a1-f01e-4d45-a67c-c6d7db1b0c3e"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemb10b8db4-e603-4049-af70-40336d12394d"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item9d574ad2-b3e7-4069-9e94-d3179f9fca78"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemeb653bc4-d55c-4d64-af0b-f602253a836e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemffab6192-89f2-42fa-bb4d-407928bebf5d"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemf255b004-0cd6-4a38-93c5-0a1e27a90ef1"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemad858053-825f-41d5-9573-cf2d6b20207a"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item8e4672f6-2cdf-4bff-832c-3aedc600b114"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item0dadb548-a21e-419b-a724-a6165a83d474"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item01034ad9-3455-4cb1-b3c6-061f55e77043"),]),
    getItem("Tools", "Item5c13ed95-549e-4930-a0b6-4748bf389e39", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item06a7fc69-26fd-46f5-9723-bd9e9d66ecf9"),]),
    getItem("Tree Select", "Item2f9f189c-7eca-4f96-a097-d249606c6274", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item4a19e5bc-de92-4860-9d54-926294edfbfe"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item26f17fee-b968-4993-8636-cd282a73f876"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item108c4b01-002a-46dc-862e-7a2ccb5fca70"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item78f75943-21f9-4b97-b2ae-ac9a1ea07cbc"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item14909be8-40e3-4a6f-bdb9-68d53af2021f"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item9fa36790-29fd-484e-8c09-bba71a273c0b"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item6448fb13-7254-4cf2-baa3-6e028f55bf47"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item3386e56b-b348-4a1c-a596-4ff47661e8f8"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item3b2f09fd-c8bc-43dc-93ff-e2ba96a95c82"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item2a9dfba3-c281-405f-9125-387a625fc4e8"),]