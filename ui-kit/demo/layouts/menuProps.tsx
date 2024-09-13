
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
    getItem("Other", "Item06b4f64f-c2a0-47ed-a348-e9a2b7715622", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itembcbab427-dcd0-4073-a15d-3d3011d648fd"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itembe128153-f7b5-4002-861e-b5a12a9390fc"),]),
    getItem("DForm", "Item20639753-4392-4492-8f21-3c2a15a342d1", <FolderOutlined />, [
        getItem("Validation", "Item40f1de0d-f0f3-4bf9-9a95-7d61a09b705d", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item42f456da-b5a2-48e2-8035-b9ec83fd3321"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itema8502a06-bdae-4ed0-b113-39050bfbd570"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item199f21bb-b4e8-411f-93b3-42630e595708"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item2a579548-4aa9-4e3e-b817-295228b2bae1"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item250012b6-173a-43a5-9beb-2524501f09e5"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item35cad1ee-f216-4e10-bce0-d0c986161868"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item9a59fca5-500c-4f90-9cbb-a8840d70fd61"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item49acea24-223f-4e84-9ce7-53c902fa7a8e"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item1d9a3f72-349d-4e77-a65c-c1e173d1b415"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Iteme9db9cb9-db49-4818-9fe7-02ddf8dfb820"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemb664f558-cece-465f-abe2-34eebfbe9d62"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item57cfb7d0-7f22-400c-815f-2462af3ad18c"),]),
    getItem("DForm Modal", "Item5190b2f0-06e4-4a53-865e-25bc57278586", <FolderOutlined />, [
        getItem("Async", "Item93541c79-9dba-4687-a478-531dbd6ce229", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item24e4604b-da3e-45ab-893e-b7b8c6287d01"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item2a119d8f-ece1-4eea-8906-4cc1fc62ad59"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemdf10db64-5e75-498c-97c1-014b7d0c6eeb"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item5f8ea362-4ec1-4b29-a36c-b1ac83753656"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item39912205-c14a-462b-8af8-61349e04fe5b"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item82f342fb-f407-4554-98e5-f5272c18160c"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item960ce90d-2d78-4b1d-8b91-aff6914f9229"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item84d83f98-a710-4a88-a4fa-e50efebefdd9"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemc6a6b0a0-43e4-472b-832f-67cef68a00e8"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemf4f7c871-b33f-47c0-b70e-7bcf6bc6974d"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemc1ed8aee-3463-48c2-b26b-4ee7b4a83321"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item97ac2c53-062f-46d0-ad82-98d0d54905b2"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item484554ec-3c17-4810-b2e9-faffa96d3e15"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item47b2514e-c943-43ef-8636-1ec2f2f0ac38"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemd5310008-408b-4ef1-beae-e40925cfea88"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item1b0d8473-38c2-4fb6-8ab2-ec53b9e4e182"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemec125370-fc27-47f7-993a-35b436182a93"),]),
    getItem("Modal", "Iteme82bda48-0abb-4c01-943f-22ea7a63b91f", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemae43d5c7-5644-4c22-bd60-59ae7fdbd5a6"),]),
    getItem("Tabulator Grid", "Item5f51ddea-ca08-448a-b3ce-54d5878c6322", <FolderOutlined />, [
        getItem("Async", "Item74848be9-0597-4106-b1f7-1ff43d0431fa", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemc1523f66-04d3-4eac-92c3-4a55b234acad"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item9014dbab-d47a-4610-b7f6-842232a08fca"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemb3115bef-2b16-4dda-bb22-d64cde7ef0f6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemb448b6e9-9d90-4852-99a7-774aae9e1593"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item55bbe225-1d62-48b4-b5af-ab3eabd4bcf6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemef14bd46-73a0-48c3-b2ac-109ea02551e2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Iteme8169795-6d35-4c3b-9240-1a1eddf6d2d4"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item68134036-de4f-49f1-a7f7-4d67805f2db0"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item1a7f8e3f-e6c4-45af-88d0-6eb924cf9f0a"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Iteme328c1cf-2b32-4a6c-90a6-eef8c320007d"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itembaddaa8e-03d9-432b-992a-afff42f4dfe4"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item49fde8c6-c60a-46b4-87f1-e36d992d15ed"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item933a853b-a06a-493e-b7ab-459558db35eb"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb2ae238d-80ba-4a78-a43f-1a162db9a416"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemab37a540-da00-4af4-9aca-8ee0eea1b99a"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itema6915772-0256-46d5-aef2-2efd8eb240b4"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item007c07ee-58a1-476a-b9cc-950b749cfbec"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item5df09f82-7f86-4998-b491-c8ba94a96b0d"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item3ce876ee-aa7d-45e9-9407-644a569b66ae"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item82cca14d-f1a2-4836-b09c-08ccc67933b3"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item3e084d4d-82bb-4f61-92d1-d5550420d32a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item0b505b3e-664d-48c0-8ada-48b3454e188e"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemdb4c9d9d-5ff1-41fa-9307-2e9a57a48677"),]),
    getItem("Tools", "Item56bef486-a968-41fe-a880-6a99d7f7f3df", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item015ff2e4-c237-4c79-9c08-9f6bebf6f4a4"),]),
    getItem("Tree Select", "Item2e9d3fb9-8fb7-46e4-8126-f0f653a483f4", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item2a59f5de-edf5-444c-b84f-eaaf471c072a"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemf811158c-6f9d-406e-9e7f-90081bdca5aa"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item4587fd94-0cf3-4463-91cc-0a2303f1476f"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item57a2836c-7a3f-4789-89ff-062f57bb6baa"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemc379f876-fe5d-4435-bf29-da0c671a53ee"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemff836e6b-19ec-4cd0-a045-3b5fc45cdc09"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item48cac2ba-4d77-45e3-92dd-99fb104b0545"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemeeb4161d-f9e1-4aae-a38d-d90d12a4d4e6"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item0972e2a5-d4c1-44d9-9bc0-af6c469bee89"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item8fe4e36d-87e3-42d7-bbf2-c9096325ae5a"),]