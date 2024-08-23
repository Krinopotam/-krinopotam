
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
    getItem("DForm", "Item8b8d80eb-14a8-457b-b58d-e5f2c85c1b0a", <FolderOutlined />, [
        getItem("Validation", "Itemea0bb2d4-df32-4328-8e9d-bd0e93c0fd4b", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item51a3db08-9c0b-441a-b863-37fa16977f0c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemce262696-f18c-4e07-a5e4-32d5c9da61aa"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item9fd7ae71-817d-44a5-9a45-efd40b084045"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemaaca2814-57c8-4af6-9725-1e02e1a34446"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item2dd0927d-c70d-4253-92a1-6ecc5db85cfd"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itema644c3af-db27-4dde-92e6-f40314a9b1c5"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item6ddb8f8f-b4f7-4bec-951c-5432b2fc40b5"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemcb6a083c-d47c-4516-a545-fa0f652f883e"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item42ae50ac-d52b-4903-8b46-c76f6993988e"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item77e5e96c-4caa-4ebc-b6ce-e00e26541651"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item170276bb-171a-4b62-aaa9-60f5ec687fb8"),]),
    getItem("DForm Modal", "Itema21c8bdd-12b3-4aaa-b69b-159bd0b06188", <FolderOutlined />, [
        getItem("Async", "Iteme37d4608-5472-499b-94af-11e1a1c5cbeb", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item44a36c12-e0ac-4a62-93fc-63395fb80ab3"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item38193708-4221-4709-a1d0-ee191a520366"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item1e59d957-111e-4684-a90c-7e47505541b1"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item405b12b4-a47c-43e4-9b8c-ed353606c612"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item460acc3a-d942-49c7-b228-a1a088c0f11f"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Iteme3dda36a-1579-40fd-ab0e-702c959bc0e0"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item7580563e-153d-4467-bb6c-27caa4f1c3ae"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemee06dcf0-a80d-4e76-a706-1d7e16296bef"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item99ef8bbb-c5ec-4bbe-9c12-803a1bf3260d"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item5bd49c8e-a9e1-425f-811c-6807a863443e"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item10fb467f-8b71-4c63-b0fd-0c3d2cab9924"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Iteme7cd9654-7b46-4ad2-86b8-63fcc84aa80c"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item0bd3b0d6-7a49-4f84-a663-7a30496b9266"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item9714a6a9-91ae-4782-bbf4-58fecb83b5b0"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item63a792f1-4818-4911-b860-1a21f798649f"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemcbec4624-4814-4f9b-b1ef-2f590e0603d5"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item32c39286-a4ff-4d4b-ac61-a6d43ffb0ace"),]),
    getItem("Modal", "Item8224becd-3e7f-4f7f-987c-cb7f3f3a129e", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemd9e25c01-ac55-4122-aec6-578429ccc6a7"),]),
    getItem("Tabulator Grid", "Item07a2dc07-114b-4607-aee3-2b7b214c3bc6", <FolderOutlined />, [
        getItem("Async", "Itema0b39ead-f313-4a79-b49f-63a9b92293c6", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemb46acef0-f1f9-4495-adb0-aea8dc4dc2f4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemd2f96606-2258-4db4-b2f8-ebc136d39190"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item791e7431-278e-46c8-914f-499082e57533"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Iteme0c63845-aa34-4fed-b4c2-c8640de35ba3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item3b9d8b24-f330-413c-ae84-84d3a9b0b561"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item4be8bda0-8c10-4816-9001-4ade68c1a0c1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item43f8810a-84aa-400a-890c-e2cb05cd16a5"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item3a821667-8c59-4b06-a76e-329630ac96c4"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemfc82164b-2dfb-47ef-9be2-533af9a8990b"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item6fea9c53-16d2-44c9-81aa-e1c19b4da849"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item78ceb1aa-464c-4a38-b10c-39ea9be12c4f"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item380e896c-872a-4adc-84da-4df09d841684"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item019a70fd-ca3a-446d-ad52-7cbfb2c8de0d"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb88e882f-fcee-4586-ba54-fb9a38c45068"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd7e36100-5d62-4187-b3cd-203e4e5dc10b"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item8eedea92-d770-4a26-a617-b476afca31da"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemccb99ede-0671-44cf-baed-38f35fbfc75c"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itema7f63b32-41f2-4797-9173-2fe920d996c8"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item7a286393-d016-4e95-adc4-f4750ba54a95"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemd13509de-4c50-4eae-bc76-aea8c452cb66"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item898e103c-8e65-4c4a-99f6-c100a70ba873"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itema2d51eeb-492e-49ba-a928-4af6ef79be85"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemb4786341-92d7-4a09-8558-4a06aa71bd91"),]),
    getItem("Tools", "Item83b3c054-f503-4f66-931f-0e01ca40149b", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemf00a93da-1c5f-437c-8d33-fb71b4c70f54"),]),
    getItem("Tree Select", "Item4e0e01e9-7ba6-4a23-b7bc-bc88e44eaaa7", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemc60cb22e-3214-4ad4-97a7-102c1fd0180a"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemd8dcda77-6b57-4f74-93e2-3d662597099f"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Iteme7cec13a-7e94-484d-b611-99eb9daff8c2"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item40bc9c82-b1c6-4801-9b17-ff783b60829c"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item7a4bd9f7-c72e-443a-8f90-8fc3389b614c"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item7ec14c19-bbee-4e6e-8912-1ee02bfd1933"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemc3c2a5ac-d019-4ef8-b7b9-ae4458e22f55"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item046fa08a-6ceb-425c-9d3b-71116c8b39c7"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item5b3bd48f-5fe5-4eaa-bf3a-11d6a3d2b5c3"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item23ea5973-1f71-45c6-be1a-5507e364e00e"),]