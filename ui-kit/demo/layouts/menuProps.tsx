
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
    getItem("DForm", "Item7c05b1bf-4a9c-4061-8b70-906a5f61d37a", <FolderOutlined />, [
        getItem("Validation", "Item5a85f7e4-3493-42ae-8f5a-e50511170937", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item40563057-a88e-4356-a558-2815aea4ae8a"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item4c30defd-e7a7-4e70-a0fe-5984024679fd"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itembd0d8cf2-b49d-49d1-8a3b-e97344e37d51"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemd023f9d6-35f2-492d-8754-54dc45ee6d6c"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item2d6fd1df-b5f2-41f9-b416-e3de97bfa81d"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item8d0dddff-679d-45c4-8cc5-5c7228bc9fde"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itema67795be-8463-417e-8a98-567a10887a2e"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item70494614-4fe4-4973-be09-e14eeb7d8863"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemf392ef76-a58b-4847-85ed-bf9ba69855d2"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item8ce62b65-2b70-40db-8a93-4aeafb6bf668"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item1eb06ca1-d7c2-41d4-aeb8-0210a591d91a"),]),
    getItem("DForm Modal", "Item04ceba3d-9309-4230-931a-549802fb6fad", <FolderOutlined />, [
        getItem("Async", "Item892e5a75-2526-477e-8f7e-7bbfce3bf472", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item113efb6a-6d1c-45d4-9fbe-8fbba165238a"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemdc4f44de-50e2-42a7-a55e-6ba47a62b099"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itema7902952-403f-4d1a-a875-0dba75031cfe"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item9734d86b-162b-401a-9ff5-0d2098d3efa3"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item25c4c3fc-6c38-4804-84ca-c2830c5dcaa4"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemf29d3030-4d65-4545-8cf7-4e6d6b333585"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item5b756866-de59-42a2-a8b4-8a6a5fef7a3c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item4b0424dd-aa4e-429e-a2f1-491c88779a8e"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item980d954f-8033-4cff-9dac-482cfcc65207"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item2d99a9db-d44d-4597-a54a-92fba5fc27c7"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Iteme01fb120-23fb-4fae-98d7-9528b4189b7d"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item5538cce6-fda8-4662-a682-62ef00a95e66"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemd208c5af-7cdf-40cc-b530-93c95a0f27be"),]),
    getItem("Tabulator Grid", "Itemd6dca04a-78f9-4591-a215-3c0f3be95777", <FolderOutlined />, [
        getItem("Async", "Item4f80a95f-5aff-4cbe-89bc-e697946d9902", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item36059e08-aa01-403b-8cf7-9a2f09eaf65a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item974da8e2-185d-4bfe-9075-8c5efcd79c66"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itembaf375a2-62cd-4065-acf1-dbd47c567409"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemb3fd71dc-c2d9-4629-becb-1363d7bcfe45"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemcaf2125c-8b6e-4c18-9825-fbaca3768eb9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item0d46bd61-84ab-475d-a6fc-df7843c5df5c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item4d87ebb7-a384-4154-9851-b33b12ba725a"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item55be5fec-ea18-4bc1-ac00-031ccf0301ae"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item17bff2ee-fe14-4908-a08f-47d9f73a12d4"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item3c15c582-81a4-4794-b675-63c1e7b2488f"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemc91bd3fe-789b-44d8-90e6-a3dd82c634de"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemdfdc9e14-ee32-4553-a6c7-79beb540f6f5"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itembc8593fb-8b87-4a42-b012-eb29817d0ead"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemc805b3f8-cc13-4762-9481-449f92c82de6"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemeeca4132-55cd-4771-bd17-30956c37fb06"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item954c3d06-b2d0-4eaf-9420-c5476cfe3137"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item75ab18e6-0a94-42c7-8b61-40d51125d48a"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemc87d07d3-7a03-4624-a0f3-36037390702e"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1721b3ab-aaa7-4ca2-8602-25d15731ad06"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemfa849d69-1af8-4e1e-a3dd-eca6add705e4"),]),
    getItem("Tools", "Itemf68fc64c-927b-4c20-9680-39406575f714", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item1bd7d370-fb30-4ed7-a6f9-b438307d0976"),]),
    getItem("Tree Select", "Item068bf9cb-87e0-4f11-9320-74dea8490d34", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemcf3bfba8-d686-474a-8f89-16a48ef46dfe"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item0b3bfd0d-86b8-4476-9ce0-4caac0ddb496"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item0c0abda4-1ddf-49dc-836f-5c94dd817687"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item7667de33-ed77-48a3-a558-2ce6577f4f8a"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemcb581b77-3dd6-4ab3-bb7a-0655a9fc2312"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item7599524d-e2a1-4fbd-84f8-902a8ba18f7f"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item0698d7e7-70c1-42a8-b07d-e5d149e2b1a2"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemf2a9756c-8187-4030-a70a-978908f89d0f"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item742e8898-6cee-4bf4-b491-b18695999c63"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item96becab5-1fa3-4779-98cc-d22532de09ea"),]