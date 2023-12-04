
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
    getItem("DForm", "Itemebb46703-d246-4c89-a26c-d96dde0e4db9", <FolderOutlined />, [
        getItem("Validation", "Itemc138a816-6ae6-4542-b96e-de460c1b7e0f", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item910c2650-a75c-4528-b0bf-78a2e0136224"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item479f4eee-2079-4323-b45a-6da7fd769a6a"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item2b17cd03-2ae8-4a41-b97f-23c4be8bdab6"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item348f358f-4bb6-48bc-8e88-f235a7833974"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item1446011f-6342-4bc8-aedf-4f0f2853ce9c"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemec028665-2623-4ca7-afc5-f258086c4572"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemcc72ff65-4372-4f14-a3ae-f0f4ec75f8cc"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemfff1c202-8201-4529-864f-5e10893d7229"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item9664c2cf-52f6-4480-90f3-48d19b73ade0"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item8abf949c-55ba-48d4-b16e-a2667981d226"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemb8efeb6b-a6e3-4b6a-b80d-6c37b42b85c1"),]),
    getItem("DForm Modal", "Item1ea39ebb-ae31-48c4-a3ba-5cb3fa416fbc", <FolderOutlined />, [
        getItem("Async", "Iteme987066c-1ec2-437b-8db9-5a6b6818449b", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itema179a90b-82ae-49bf-93d6-d008466d4ae8"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemd7bb301b-171e-4ca4-9089-e96df81fd77f"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item89ff6cce-de63-402f-883a-9a9b2827a2aa"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item1106394b-950d-40c8-b8d8-80baa78c6b62"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Itemadf5ff9b-36d3-44a2-9c52-08d67094b088"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item509d6d39-647c-4793-90fc-fa560574377e"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item820762ca-4104-47a8-a467-3ccb495e2e9a"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item1fe884b6-be3f-4d5d-9404-5374c13ae0c0"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item9e127118-f208-4124-8cb6-38c47d9172aa"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemaf007d02-78ca-423e-bb3c-5b4c4b5d81b8"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item2574a37b-3d51-483a-bcfd-7e41f681745f"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemd6002934-fe8f-4727-a54b-3ce753aabe09"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemf1651f64-9c81-457c-9a55-20f910df2b0d"),]),
    getItem("Tabulator Grid", "Item0756910f-5cb7-4a20-9627-c87be37214fd", <FolderOutlined />, [
        getItem("Async", "Item7606f442-6928-4330-a00e-0642ea3fb7d7", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemdec51454-f8ee-46b9-95e4-a4ff8fc117c8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemc5a1a8b1-88e9-44c0-803d-4526ed873d79"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item457d1047-71ee-4928-9a8d-c3a85af03761"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itembf075926-39c2-4213-9607-a6ae1b076c03"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item542b38f9-e1dd-42c4-9c8c-53b5851626b2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemda170293-faad-47d5-85d5-4b261e84c822"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item040a31fe-1054-45b0-bdd8-c0de0ddb11b0"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item59560c98-cc53-4860-8387-2c0dab23ea13"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemcbf37870-1fe3-4cb1-983a-7da0445e1d3c"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item3133dc88-893d-45d8-8e1a-c100f524e838"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Iteme347c75c-94b7-481a-b473-0541404897aa"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itembd143290-3d4a-44f4-aa4a-0039dbf0e2a9"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item47f9bd2d-df8e-4dc2-901a-188fd604d813"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item1945f1f2-fb00-421a-831c-a44457b15e0c"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Iteme0cad606-4b89-473c-af63-05c28d0990f7"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item04756efa-7d89-447f-98fa-b54613cc8f31"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item833b15df-c881-4d3a-89bf-4614a69a9105"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemf2c167fc-ca0d-4b6d-9ca0-611dcb7e68e1"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item3b486b14-5aaf-4fc4-b54e-adb38734465e"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item811ff21f-a9d1-46a6-929e-e6f6fd1bdb97"),]),
    getItem("Tools", "Itemcab55c20-061b-41e7-812c-cf9b775f172c", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item1982f2d0-f959-4362-8bb2-c3fcd0f9099d"),]),
    getItem("Tree Select", "Itemdf1264de-3805-4b0e-85f1-2c8b3f6ae6ca", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item909ba94f-34ed-4476-93f4-5069670ab696"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item80407445-533c-47f4-bda3-d3205fc1efa3"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item7fbc60e3-7a40-4a6b-8869-ebeed8094772"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item54dffc92-2d68-42c2-a9c0-4caeec20e0bc"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item6ea1a208-cedc-4816-97ed-a15cfd03bf21"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item7fda5aee-6823-47bb-b703-95c1c3a951fd"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item514dbd80-b65e-4161-9226-497b82f12b46"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item8eb91e08-fb4b-449e-b2b2-f07b11fa37e7"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item915fdc95-7501-4ac8-bb99-a378040b2b22"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item740d9f0e-82c5-4c20-a80a-912f10d414e9"),]