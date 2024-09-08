
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
    getItem("Other", "Item80c522ee-6e0f-4827-a336-8fdd80451128", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemc1de34b7-94a3-480b-9096-88f4db0cf6cf"),]),
    getItem("DForm", "Itembe3593f4-aab5-46bf-a625-2055658dd899", <FolderOutlined />, [
        getItem("Validation", "Item927f0e80-8806-4364-8a38-018534b16386", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemd0ed2055-88f1-4dc3-8ca5-a4414a7e6050"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemc621adcf-a602-4ef3-bcc4-cc993eb5d54c"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item300033a8-8d21-45a9-8c49-ee9c4317b6af"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemccd0f00b-1d05-4117-8736-f71cf1c23840"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itema8dc89d4-c187-4df2-99f4-b9a67ffb1319"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item1874129d-bf74-4ca8-bc6d-de3c721d5e63"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemb948ed5f-7e59-4e1f-9862-b4bd2e61ad28"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemf6ba6dc7-4e26-4e03-9b81-3f6c9c09ec4e"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemfe77e30c-15fe-4dcb-8d7c-c8652e3f4328"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item9e45df15-70a7-4d53-b3e1-088231be1f43"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemff2fffd8-793b-48f8-8998-b04a707a4adb"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item0b4a730e-5f48-4e2e-bda5-4731dd96731c"),]),
    getItem("DForm Modal", "Item8cb1bd2f-c7a6-4673-a7f0-3dc4fad4d2ae", <FolderOutlined />, [
        getItem("Async", "Item3b46c42d-57f9-454c-b499-53213a894795", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item257eb0ce-b915-4099-80ab-7de1f6bcb312"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item401fcb7c-dbe6-43cd-962f-fd4c016292b4"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itema924fe9a-0cf3-4e35-a48d-4964ceb9afe6"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item8cce518d-d43a-4167-99f3-a18f5fa07b4b"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item3c13d3d8-3e90-412c-bde7-90eb51932281"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item58bb6d83-eae0-4d12-b016-cfc1b9eca0b7"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item7adf61da-3f40-4b88-9256-1f2442671e38"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Iteme8311bae-88bd-4dcf-96f0-d480ff804196"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item9b536873-78fe-46f7-a4c3-5d68e43ecd81"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item06015217-306b-46b5-b0d0-6662fa814dd2"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item0e9d82a3-a8b0-4751-88a7-a331284ab487"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item8f5b99b6-04c3-4938-8688-b39ceaf083e3"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemd4fbf535-66f7-4190-b210-9174a111d267"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemfb466320-929e-40b7-96c1-cd47df45353c"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemc067b512-4472-4098-baaf-a3ce44a2436e"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2ef98b85-f5c1-4a3d-9f62-46f785e3d469"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item151f1725-4121-4dfb-b093-55301f547d7e"),]),
    getItem("Modal", "Item346a2c53-634f-4ee6-af9c-7d00edb388c2", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item586e4747-56f9-409d-931a-654ed91de13c"),]),
    getItem("Tabulator Grid", "Item3ca3abab-d624-4bd7-8fa2-63d68bccc345", <FolderOutlined />, [
        getItem("Async", "Itemd9bdcd47-1913-4012-9272-993ce6d24ba1", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item61743b96-b8f4-4dd8-9c78-2f58fd66dddc"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemfdaaad04-c34e-477c-8a17-1d2d35d2909a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item6089bc0b-5b62-45d5-ab4f-3caaaf895e2b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item3ccf7963-20f8-4c34-a1dc-105779bff2dc"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item68d87051-15c7-4fef-bfae-b3d7204ae16a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item24781e62-d2ed-4cf9-a941-1f4029cef951"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item971e3173-8482-4ec7-9998-59dc279793f7"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item8c18d633-2547-441b-821d-d56c1601ca21"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itembf4558b1-a8b9-4988-a9c4-b48b127cdc43"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema436d57a-6be0-4040-8262-d59082b32176"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemaf1985dd-4bb5-471b-a28a-14d32df8be1e"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item35b47207-fc1c-4bca-8c02-b4e666668546"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item3b883db1-3789-4bae-b8cc-6f4e7170f51a"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item1176d9f1-f286-4eda-bb0d-20647037ecf4"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item66aff1d7-c9e7-4008-8799-35907ee5d2e1"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemac0bf11c-2f31-496a-b7ab-19c54b0d7958"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item1cbd2095-2c5a-4c4e-9b8e-39f8b9b6ef25"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item081614c7-93ec-436e-89a9-6dfb49f0c578"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item330a6cbf-46fe-42d0-a12c-5e22a64cbc90"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item3f3d65a9-1976-4ddb-a4f4-ac02bf1ba7bd"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item123d2552-d232-43ab-a0ee-5a9c29e0092a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1e885ee1-9828-4db6-9e19-ed6b93f26484"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item23cad8b7-deaa-4b35-9fd6-12274cf93246"),]),
    getItem("Tools", "Itemb7352ab6-f688-472f-96ee-3e9bd2135901", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemd7e8e4bc-2f57-42bd-adb1-e256b2e1829a"),]),
    getItem("Tree Select", "Item5339bc77-923a-42e6-929b-727dfb611762", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemb8bdf054-481a-4156-97cd-25ed379665d5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemdce8719a-51f4-4292-b761-b5fb80488021"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemdaa72418-b7af-407f-9733-107d905795a4"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item2766194f-514a-49b9-acc6-369e341fa495"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemf541f174-5566-4280-b986-6bca6a612df8"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Iteme4d423f7-be80-48d7-86ac-74d33c8830b2"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemb433ceda-0bf7-499a-9149-960830c2428c"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item3406b55b-ff8b-4fb1-a254-b0adce1578a6"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Iteme87f5d30-650f-499e-b746-eafb2401b713"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Iteme1bb7270-5d4c-412a-9f25-12a6f461ab4d"),]