
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
    getItem("Other", "Item6f12d7c8-5193-41c5-b79a-5ecbdb1800ec", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item4a365878-7546-4cff-bf5a-8a39fa08809e"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itemfd26f9c8-368c-44db-9d5d-1411e6d9bc8b"),]),
    getItem("DForm", "Itemc4578794-d4d7-4ed9-9469-1bfb3ba53c21", <FolderOutlined />, [
        getItem("Validation", "Itema94bfe05-6234-4899-91cb-133f5314a3b6", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemf950a9ca-d647-42db-8134-f99dc0d152ca"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item26149437-9734-4e91-9720-30e6df624521"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item0b9d3fd8-eb17-4893-8f1a-c4e10a06cdce"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemb0155d7d-df01-44aa-a27c-ba023c01934e"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item3bfcc8ca-fc48-431c-ab1a-6d5221113a4c"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itema1bfed24-c7a3-4f69-bae5-b14202378940"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item2096aeb4-3a1c-4769-b54e-850baa39e2d1"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item940557a1-28dd-4da3-b1ff-fcb6a8e6a537"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itema58a492b-c427-4419-951a-b79c215d7b92"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item3562af81-f424-4963-945a-859cb746495c"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item25441f13-1915-42b9-955d-9f0a528c506a"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemd79b90ff-e164-4868-a8ad-d6592d0b7bda"),]),
    getItem("DForm Modal", "Item1beb668a-9085-4ade-9294-08c4cc43e41a", <FolderOutlined />, [
        getItem("Async", "Itemb9cd3e3d-7d99-43de-a8cd-623f87716ecb", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemb979d62c-2914-429f-b6a2-b929815f9a57"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item152ecd3b-00b4-4442-807a-596da2bba486"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item1419854b-bf15-4d05-93aa-4d70642faa74"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemdc876c57-0abf-4ebb-8ac7-e3ead80c9e6c"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemb9b16731-2b1e-4f03-86b7-56f705c019be"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemd98ed5c2-e561-4d02-9807-0f242f8828c4"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item19b7b356-28c0-4e31-8f50-10d50323f11f"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemf2bc171c-ff0b-4da4-8833-9d65b8fba08e"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item51b575a1-a520-48ae-94ab-5eafff48cf19"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemb8b5adff-2fe1-43e5-bef4-12757c26f6e4"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemf339c9d9-7780-4777-bae1-701cb8dd5dcd"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemf6b0a3e6-e60b-499c-9a66-48f50b6500d4"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item69769842-7050-458e-b1c2-eb552af6e218"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item2c7930cf-c278-46b6-8be4-c012a899090f"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item19eab7c9-a53e-44d1-aed7-440c603d4b76"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item935ec38b-4aa3-40b2-af11-61c8f6130d43"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item905ad6e8-0b5b-467e-9923-5bae45718b38"),]),
    getItem("Modal", "Item74b81fcc-a7e0-4e58-8fc1-9512c1c4da46", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item09ddf83f-26c8-4f94-8a64-ee24009a5a7f"),]),
    getItem("Tabulator Grid", "Itemd66312c2-32d1-4228-a8db-eaf1dd31a5c2", <FolderOutlined />, [
        getItem("Async", "Itema7d77be7-114f-4a81-8a76-cc3e84d3e222", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item15d3cc11-c17e-4b8a-bf07-289819cec94a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemf6aa202e-6ae9-4eb0-8ef7-a65bda4c9773"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemb278340a-28f3-4a78-9810-90cbcb2dc9d8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item9aca6fa2-a193-41b2-ae25-6e642fbccf2e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Iteme20efcf8-5de0-419d-bb2d-f73a0c5e6adb"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item899c4e7b-87e1-4655-9ab0-3c6aca4d50e1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemf00710a0-4d04-462c-8ad0-cbd3f029e6ac"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item264b1059-d955-4dd4-8c82-efc1f294fac4"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item92d05559-f105-48f5-8950-71d5b3a44290"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemc139f63c-d8a6-4d21-baba-3f51ab633d51"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itembe97ed67-b55c-4ed1-8927-db2e97a3a802"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item1c4f9cb7-61a1-4f91-b83c-1a2c6d61f529"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item39dd64cc-d405-4083-b716-6a735981ef7d"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb1b51b4a-a5a3-41f7-a7fa-7232ca361835"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemb3bd7b79-eb6c-4f27-9365-24e4b008a4bc"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item1aba22f2-c5d6-4c89-a1ef-6c867ffec20d"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item470ac4be-2920-4de7-92de-c4d15b2e7ce3"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item2eb67d11-89b5-4471-8685-fcd237b566d3"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item0bb02ada-fdd7-47dd-903f-798bfe1fbbfd"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item62bd6634-6d86-4dd3-a233-d726ed5c8a9e"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item68dbca03-6ff6-4fe3-96d1-a4836bbd3cce"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemb13e3694-830b-47bd-9a93-b42e0b2cfa9b"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itema690a974-9896-410b-a906-32d9a593fc94"),]),
    getItem("Tools", "Item83152812-cc37-451c-85c3-d1cb94a02b1f", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item6ba4b94e-c47f-4f13-999e-fea6bdcc9936"),]),
    getItem("Tree Select", "Item8c8ec9dc-dfb7-443a-a9f2-b38985a11833", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item2c2153d5-a91b-4df2-b49e-2b8f8a5ccef2"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item67133bba-7b6b-42b5-81c1-10912a751332"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item8e0ec72e-e795-4822-9e86-ece37d683a28"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item5af2177f-61e0-4463-9287-5034bf9a0f1a"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itembb4aef3a-ea33-4b2d-b730-f5c1dc20c7c2"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item2222c027-bd4c-4447-af70-42ae019dd86a"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Iteme9d34c72-2ce0-41a4-ad6a-1269ed33e701"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item5d51a6be-ee6e-4737-980b-b5d98029bf73"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item7a2f7b23-f45d-4b69-97a3-101d36f1025b"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item96bd7c54-fb78-4382-8636-a387a446fb06"),]