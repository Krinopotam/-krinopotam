
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
    getItem("DForm", "Item5fbda8a6-a494-4b48-8cad-b814c54c1bcc", <FolderOutlined />, [
        getItem("Validation", "Itemefe93efb-a1b9-4729-a722-1e03964dbefc", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item06d84bf5-5859-4ad4-90fc-fbecba046b69"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item62e04259-8474-4b69-8cdc-6b395bd4348a"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item13d2c13e-8e2e-4210-81b3-ed952f2843c8"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item25accfb2-7365-4237-9862-392b905f56ed"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemae260c32-3e9f-4506-abf6-3696f3ef85be"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item34d434d7-ac4b-41f7-acf5-babc6c63bce0"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itembb09fa0a-1dff-4ab7-bf14-5f90c4b41fa3"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item5d7a1037-0264-4d68-8254-3674d71bff58"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemf8290060-bc53-46fd-8649-fa31cc8cefa1"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item10fab3d6-8ad3-442c-bde5-cb11039e6d1c"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item3243bab2-8520-47bd-b22a-538bcae28cdf"),]),
    getItem("DForm Modal", "Itemaa422589-4835-40f7-a719-04201970b467", <FolderOutlined />, [
        getItem("Async", "Item53dede61-7fd5-437f-bb49-fd99b3fa147f", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemeab7872f-18c9-4836-b170-7353c22be6e5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item4af2da2b-c53c-4118-a536-dc3e79dfc680"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item225a2912-bf6a-4553-8001-09445e9d6431"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item0f75ee7c-3231-4fc4-afe2-7f6d0c5d1315"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item6d8f7e93-1b23-4b1e-85b3-a1eceafbc2d9"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itema8e04963-7da2-47e5-93ae-b28b1cde7fb6"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item47e47106-ca5b-4b57-8aa5-4a2ae83414d1"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item8931dd97-46f8-4e66-90ce-a22cca8da925"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item3d3ac072-ed4c-481d-be14-1eb9ebe77092"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item75146969-d7f0-49a1-86b5-af441cd5f957"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item33f76dbf-347b-4d69-beb6-69e9d06ecfd7"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itema3994e6c-94fa-4738-909f-ec553d2f68c4"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemb3c75499-ac5e-44e6-acf1-07c448b61faa"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item6a6b738b-f857-49f3-a77d-22eb8e9994b1"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item1ee109ac-0239-45b1-b63a-93e9faa184f9"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemb748a5bb-ef0e-43c3-9dfa-68067fa79e6f"),]),
    getItem("Tabulator Grid", "Itembc7bf286-c099-4dc5-8b46-65c5af4426cb", <FolderOutlined />, [
        getItem("Async", "Item80d8b531-011f-42a7-8041-32d104811e0b", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemf2f47ec6-491f-4613-93a7-6d10880a53c8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item5d0f3c4c-7156-4a84-a68c-5f1a53c88a4e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itema3e37388-61b9-41a7-91b2-2d04203fe8f1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemc83cd6e1-6982-4671-affc-0ce82ca5392a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item45e1cf64-e222-46c8-8ff2-897abea7d0be"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item307d2e1d-58f0-4295-9e7b-d95be5b8b680"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Iteme5b7b0fb-b2ee-45c3-a6d1-aa411e5f8d7c"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item2bf6ee6c-8455-4ead-82db-65ae224c62fe"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item0e989df0-aefa-40c1-ac0f-15f5db4dcd67"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item62ad1976-fabe-44d5-9731-3d50f0adc610"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item4e0934e2-ee12-4d5e-aefd-5daf02602968"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itembc19cf57-ab6c-4cce-a0e9-8d3480299535"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item40dd9f53-b5e7-4a23-90e0-f064e2088626"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item7cace9d7-922b-4c89-8680-957001cac7f6"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item956940f5-3d57-486d-892b-152ff991c84e"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemcbd3db37-f112-4a3d-9856-2bbb8764de00"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item735329a0-cc62-4df1-9cf6-c69ee544e1a3"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item51fd2de4-4e24-4c89-ad56-d22528aca34c"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item218368a2-2ae6-4052-be74-aef3bfcf2315"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item0c9b8372-2a6a-46a5-a093-fb26f64c344a"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemc7ee83c1-7ab7-4b08-83ce-a8f170df168a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item82d002d1-c431-41aa-8566-cd03e646df70"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item92836c41-d13b-43a4-b38f-151123bf7750"),]),
    getItem("Tools", "Itemca768ff8-aba5-4052-a4b0-817f79909ed4", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemf3e537c8-21c9-488a-b0f0-1e5b40e6fb01"),]),
    getItem("Tree Select", "Itemaa353f62-70a9-4b0e-b016-b4a7fc6e4f07", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item1d764bbb-d2d6-4409-bd00-4c2ab0b74148"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemb0a55169-8c49-4997-85b1-a57a02fc43b2"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemb4c86bdc-2bb4-4897-b365-392f3a3ec5c8"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemfcd86488-7576-49e0-8e64-6bf8ff7e31a6"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemfaeabf2d-d2e7-45f9-ad98-361f40a01f45"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itema627c37b-fa03-4791-acf2-b4ce4c722198"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item5f08e4b5-fda9-4c93-bdc9-bef5a10652d3"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itema9b493c5-4dd0-4804-bb31-2ca20af94d9d"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemf84ffe2c-c33a-4532-bd42-bd5d9c6b99f4"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemf748ec6f-5c5a-4754-a3de-575be840ffe4"),]