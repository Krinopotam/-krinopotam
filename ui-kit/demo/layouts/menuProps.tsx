
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
    getItem("Other", "Item40b7417a-62a5-4682-bac1-aa8d6a4d00e1", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item51a83111-0e68-4746-a23f-395ea7a8247e"),]),
    getItem("DForm", "Item54d43177-d1cf-4e02-a324-c98348770680", <FolderOutlined />, [
        getItem("Validation", "Item1ef6fc5a-cd54-4644-84e9-ee810c37e208", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item81d51dce-dcba-443a-98a8-f27a24bae94d"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item42fe9e88-fd2c-465a-99ec-591368c563ac"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itema32571e9-ca0a-4a98-960c-a8b1dbbde6ad"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Iteme42cf8dc-c9d6-4c80-968e-9b67deb47d6b"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itema371507d-c705-4af8-8225-2e3db48e3eaf"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item2508273d-f249-4e01-80d5-e5dab89c2f37"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item8a720463-62ef-4833-8d67-76c398a6dbea"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item02a60bb3-8573-4c14-9061-024c7fa8620b"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item2becd8ee-f7ce-4237-a36e-0ab275ef560b"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item716ccc05-3875-4ac6-8685-61a328f340c0"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item6d1b187a-55ca-49f0-8b48-3d2e85ef4d29"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemb9b92f74-9f81-45ae-be00-d006f753993e"),]),
    getItem("DForm Modal", "Item90ded593-7adf-4109-9b05-d3f8eadad9a5", <FolderOutlined />, [
        getItem("Async", "Item83cd1099-c41f-4538-8f16-e4eda106851d", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemfe61be25-9be8-4db2-a7d6-1b0ba7640ad4"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item4df10e74-a504-4fdb-bdaa-d903be37cc6e"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itema9b68479-a841-42d4-8eb9-1200ce004275"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item37309f31-b0d2-48ad-b3b5-93afcce0712b"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemebecc7d7-bcf7-4e5b-a169-39e344b04b39"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemd551601e-07ee-4c9e-b14a-0358c1ae71bf"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item9c229f9a-fa36-403b-9da2-015b1cc41ba2"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item914173de-fe94-4664-846f-3b929ee22d54"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item29c424d8-19df-4f5a-bc3a-aecfe319d6cf"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemf29a1c88-eb68-4344-a8f3-e03ff2ebf76b"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item25ada493-b0c0-4d03-9a97-79e6ab4a1681"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemdba35bab-aa6f-4e23-a619-994a44be0560"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item7165930c-3e4c-4e0c-988b-3645d5383a5b"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemda1cb27c-b37e-4cd4-9a43-1fb5cb95440f"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemf3313823-c0c6-4a1b-844e-2fb4915726bf"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item7f785a82-fb3e-4267-bef7-9cdca57bdfe5"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item16235f4e-3148-4f10-87d8-e4a906832278"),]),
    getItem("Modal", "Itemf8784798-2d10-4709-8560-d37927cfc0fa", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemede4db09-5a8c-42e2-b1b3-a730664a7d14"),]),
    getItem("Tabulator Grid", "Item1568f899-3f05-4f38-b7c6-978ca35e4b13", <FolderOutlined />, [
        getItem("Async", "Itemabcd9c4f-6de0-41cc-9666-775bc17d480d", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item5e95c2a1-a5c5-4a13-9f84-8dc404f135a1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemb0cdb209-dd52-4c94-912b-1c218bd5802d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item12b24cbf-fbde-46b2-b541-0693b1a57505"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item0ca91efa-9c52-49e6-b81e-95a4b84eb4e6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemaead3352-64a6-462b-9853-6e848d3b4425"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item50160381-f320-480f-bad1-0a9c40ba8b79"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemc35a0ecd-47bd-47d3-81d7-2130893e823d"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemfe5de86d-5d11-4087-b3ee-f1ee0203c340"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item3e384750-b752-46bf-8ad1-269cb25c3d5e"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item341462bb-fdc6-4d33-8841-3982f6d5d385"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemf8dc58b1-778d-4cd1-92e4-7e8f8fba737b"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itema7c761ea-1a13-489f-a239-6e07cabe9085"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item03ecebaf-dc60-4976-9a90-5d0e1da88e0e"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemc5de5452-6346-4205-90aa-a9e05e27f50f"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item99fcab90-0476-4ef0-855e-7e02bdf1fd82"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemd38a8de1-429c-4892-abb9-79e4d85bb09b"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item8bfbff59-9602-4d2b-b8d4-f5a7575a1d7e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item676d2c99-fe5e-4dee-89fe-3eb4193e7ab5"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item4a6445b4-9914-450e-89a0-8ea45dc40933"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item4ff51949-a005-43ed-b87e-c97fda87e1b2"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item730faa17-258f-4a0d-9e63-e159f831eff7"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1ff4bb51-2a4b-4692-b516-cd16777a97c8"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item3b43d195-a494-499b-9f98-628d6d5eeb12"),]),
    getItem("Tools", "Itemc0f381a7-179b-4aad-a518-d8deef4884fe", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemaae0a12d-a24a-4b2e-baf1-6f45ddbb1c13"),]),
    getItem("Tree Select", "Item1ae6b379-226f-452f-99e5-757c2455558e", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item3cb00ab8-d446-47ca-9b64-45eca802e6f7"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item85216911-8fec-4927-8a5c-55aa2d3e4794"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemccb95af7-f2e1-479b-80d8-bebef40a9f3b"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item4ad7d894-84a6-4fd3-943f-7aa3456765e6"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itema5a9eec8-38c4-4270-b052-5adbf6fb86ed"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item92f5c540-f9f9-44c8-a9c8-fdf73886c5b9"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemf4f280e8-b0cd-411a-92cd-502865dc8c39"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemef1a6666-03c3-4b59-a966-30c15ff3b7c1"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item6db95550-3bc2-4feb-982e-e674437e8910"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item43062fbb-8693-40c6-8362-84ec64860fe5"),]