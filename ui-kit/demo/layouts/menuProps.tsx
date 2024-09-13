
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
    getItem("Other", "Itemd256632d-96bf-4d69-8cfa-ed6d0214ed9b", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemc1ac4323-8c63-42cd-96ce-70ccfc8800c5"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item1361dc42-f909-42b1-93dc-d531099650f9"),]),
    getItem("DForm", "Item17e57384-e726-48c1-92e9-eca5dea22c8d", <FolderOutlined />, [
        getItem("Validation", "Item5dec3320-e594-4dd5-b62c-cea8c3633abb", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item30949378-f5e3-402a-b6bb-a8761d28e073"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item4c4c0845-e07a-4a90-9a03-e750db61350c"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item67c812e4-0ebc-4715-b552-69ef56afaed7"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item0fb12b70-11f3-43fc-b261-e5a330578f86"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemea6efbe4-8db1-4055-940b-d805765bcc77"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item54cd1d39-347c-4a22-ad76-6bfad179a978"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item172da41a-1a93-4e21-9383-bf5428199488"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item4c1ef243-2f0d-44bc-8fc3-2ec3090e1500"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemfc9ec446-16e8-4d4d-aca4-e83110ebde32"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item21e2d1a8-abd5-4163-8eb5-8535a5a784a8"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item5756637a-c4f4-4a10-892c-21f82d5b9b2c"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Iteme9cef737-a87b-415e-aea3-5811de9da426"),]),
    getItem("DForm Modal", "Item2c5c4f3f-638e-43ef-94de-88c4f0aa77a8", <FolderOutlined />, [
        getItem("Async", "Itemfeda02b5-41d6-4b8d-bc6e-a13c991839ef", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemcb949382-b2e7-4a3d-83d4-87b37f802421"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itema92b233c-8225-42af-9788-fc1adaf2f407"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemf9940305-ac0e-41dd-8d35-3b0c82fb1de4"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item4d1e3d37-bd1e-4aa3-bbd6-fbcf120f62cd"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itema20715a1-10c4-4a6d-920f-0a0201c0bc5a"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item67fade04-df27-48f7-ac91-8ca80becaf33"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item7bbd6003-10f9-4fa8-8019-31692792053b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item6d6cdc9d-8f1b-49eb-8ad7-b8c0727a0504"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item506be2b5-1934-4312-a107-466f22ad9800"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item3905b79b-d102-42a7-ad51-7ae7c53143c0"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemf014e260-b3c2-43a2-a0c5-0efc9bbd3db3"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemd04ec3ce-2501-4f38-bed5-3efb99924231"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item821a7486-b77a-4c14-837b-67bd4415a481"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item6a180a30-07d4-423d-980b-6f891d3b7ad9"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item8ac1ab65-dc87-4bf7-af3d-0f86cbd135fc"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemd6d1a3e5-626f-4b6a-9492-0e7ed1be8a58"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item4f783d7d-a78e-434a-8d50-9d90bb8fc63f"),]),
    getItem("Modal", "Item938ee587-10c4-463e-b853-1ae366ccb0b5", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item45d462d0-f1a8-499e-8d8a-9cd18e119bc5"),]),
    getItem("Tabulator Grid", "Item5432ec2e-fb18-4e2b-99fe-007c1e5faa61", <FolderOutlined />, [
        getItem("Async", "Item33840eec-3ddd-45ac-98c1-b901cc815d8a", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item65349545-2f5e-47be-8067-088bba2771d9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item57a2c5a6-e4af-4bc3-8318-f25c610ad720"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemed240962-3363-4fc7-97ac-1ee0eff475d6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemd5bd19a3-f734-41cd-96f1-bfad457c880e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item4f4c33c8-d1a2-4765-bac7-4f73031d68c4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemcb0b750a-46b4-49c8-a64f-15380e8e5111"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemd5d8578a-5546-4849-804e-1947c6519aad"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item0dadc753-6b0e-4e2b-87e9-105e3452219e"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemaa97b5e3-7145-4176-8b0c-d9cb82a44a66"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemada9925e-8a54-4c5d-8153-f97fef3d564f"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item6054379d-0cb7-45a8-87a0-3d1ac118a576"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item220b0361-b853-4896-a340-22fd061f72c1"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item9649197f-8bfa-4af3-acea-d70333c274aa"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item6cc2d183-ab4c-4732-ae90-3f4f61e77a3a"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item4da6c881-5461-4bc3-8dce-1b8cbb66f5b6"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item466d9a8f-8ef1-454f-9821-2d42545b62f4"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itembbd2ea09-dca8-4b3b-8312-98f20cfced5f"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item8871fc49-4f8f-4899-ae74-4593b18d0238"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item446127d6-76b1-4f5d-ad1f-c80dc8f6d379"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item7a0ed702-ce77-4111-8f91-b5aaea199d16"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemf8f1ab38-2ade-446d-bdf8-b75af07bc9fa"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item158de727-98eb-40bd-8e4b-0bc6355b07bd"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item29cb63c3-3756-44e2-81c2-d2998e63b5a3"),]),
    getItem("Tools", "Itemb7e382c3-7435-44a3-81a9-bd6440b5f030", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item9e945194-23a2-4e09-bdcf-4b0eb47eacaf"),]),
    getItem("Tree Select", "Item94927f31-6e73-4956-b710-fd0858c4b0d3", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item9643eaca-6cae-4d5c-89d7-578746764aa8"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemced60222-c4c0-41c3-bffc-d12892573f2a"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itema664d6bc-0935-407a-b09d-59060eb009a1"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item4eb394ff-dfc7-4c66-8831-f6d842ab6e17"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item3d1df6a0-7b23-4dcf-a8b7-7bac188417ce"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemad14ae0e-8198-44fb-b401-0fe0736c9c36"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item7d8084eb-0cdb-4b9d-a832-940414d625cc"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item1fd59a91-993e-46d5-8e74-a5cab518c4d0"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item604f335e-18ff-45a0-bced-6107fd740736"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item4d7f1a01-cc9c-47bc-839d-7f90fd3be2b8"),]