
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
    getItem("Other", "Item23203c33-fdc5-4981-857e-d578ab360f5e", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item1987fa7d-b7b5-4bd2-be6d-e51ce7200ffc"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itemc8e977d7-33e2-4206-9406-3ec1532306c6"),]),
    getItem("DForm", "Iteme74637f7-ef79-4e6a-80ba-d910c6dcbce7", <FolderOutlined />, [
        getItem("Validation", "Itemf7cf0da9-9f8c-4f7b-b219-818301e1b600", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemf807d5f0-2c31-4e34-a4eb-96ec71bc7a06"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itema310b3fb-2172-4684-9b7d-4d9501f05627"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item35b07098-36fe-409f-b92f-cad38243bf1b"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema3ba0025-6ce3-4c2a-9cc1-e50f4a923be7"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemd73f2628-8391-439d-99d1-c5965712cad0"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item01805b00-4415-4a60-836f-0459283cc957"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemc87cdd15-bb32-4046-97fb-99886d238367"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemf0f8f430-45e0-4dfe-92cc-9cddef9d3f3e"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemdf967a95-b344-4bb1-a8d8-89e80d0b80c3"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item020feed1-2845-4019-ac61-ba7d320df667"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item2a26f2cd-11c2-4cc0-a9c6-a2ed4a58d33a"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item0fe57ef0-b7af-40dc-8f14-c290806ef0de"),]),
    getItem("DForm Modal", "Itemad5d2be9-44dc-46ee-9158-a3e4a405b88a", <FolderOutlined />, [
        getItem("Async", "Itemb8cb76e7-9387-4117-830b-88777720925c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemf259f6f2-d6d4-4d30-982d-6de006e64cc8"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itembf550519-bd33-4474-b85f-fca811c80c23"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item55b137a6-851a-4bd3-b1a1-3bdfa2747711"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemd15939c2-3503-489b-966b-dfc25a63de1a"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemdfbf91f2-e2d8-4d83-a1cb-277ad6ec5cb5"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item3f237b7c-b1fa-4d13-87e6-feb513734de9"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item0117a13d-6ba4-4bba-bd7c-37efb5026be4"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item60ddbab1-7171-4358-af7c-a4b8f2aaf536"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemfc3e6840-e8c0-4c0b-b9ef-275dbb77e15c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item64163d61-b61a-40b6-8a0a-7d3754629fd2"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item72c2c38c-babb-4cd7-8ebe-162539225704"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemf44bff7c-205c-4132-bbd5-dc49a7973160"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itema824ec75-d0d8-4eda-b335-f5755149cbce"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item0e3ce609-1156-49e3-a1d0-4908d3e22eb6"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemd9c9e79c-ca78-4f17-a7c2-42037016f1cf"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemb9cee136-c31d-439d-868c-85ded19b549b"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item58257963-a24a-499f-8941-c59852b0e463"),]),
    getItem("Modal", "Item1b14e0f0-e0b2-4f48-8dac-ad5ad489e5cc", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item5eae5946-769a-4f63-a424-b6fe9ccd252a"),]),
    getItem("Tabulator Grid", "Item897495dd-be28-4ee4-bc9d-76bbcda5af21", <FolderOutlined />, [
        getItem("Async", "Item1173c0bb-798c-4664-849b-1e32e38af9c6", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item4094367d-7784-4ee1-bea7-4581af5496df"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item50a8407a-0ce1-46cf-9dcb-a4292ca6c20b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item2abd9894-fdae-470b-ac84-86d250df31e0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item81f6f746-de22-43cb-9f46-03c4bef10b64"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemeef8f328-6802-4235-ab11-59d815f1d718"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemb630fb54-4f6c-49d7-9ee0-47a43ede9286"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemb7ea3c68-5e53-4df3-af3e-824386f542ee"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item5ef2b6d3-bd72-4fa4-ae60-1ca21240a741"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item0ee726f6-d7a6-4151-88d8-586084c42743"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item0682a2b9-7c5a-4356-bf96-989ed9c55b34"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item3d81bde3-3b3b-439a-a60d-79af86f1afbf"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemd2a35b76-29db-4057-ac7b-4d4763e5d883"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item783861a5-6b45-4cea-aa52-17537dd41b1a"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item4f2402c0-8bf8-4259-9917-943433034eef"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item92bb444a-3723-419a-b36f-222601cddb73"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemaac18235-0193-4f08-868e-67b5eb84851b"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item5a9e1de8-ce69-4693-99b9-efcf1a1a39c8"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemd9f82b0b-b492-4be0-a9af-b0c768fc0d4a"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item3eb3fede-2829-4d5f-940c-7487177e5a87"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item51e00c3f-075f-4100-ba13-37da76f1bb9a"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Iteme2bdf79e-4dfd-4e21-b1fd-fe96c7f60bb8"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item77994284-9d65-44f1-adc4-5343f5ec4312"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item0e9577c6-56f6-46af-b291-6237969b031b"),]),
    getItem("Tools", "Item7c884b27-3616-43ed-b148-dec4a1865358", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8daad6f7-7d95-40c7-b747-a95c2cefa239"),]),
    getItem("Tree Select", "Item3365dd1f-68ae-4f62-bc7e-59606540d3ee", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Item91760e35-1fe5-427e-8c09-69fd1fb5e7c4"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Item4ca0fbcd-a2ec-452c-bc5d-c723477d95b2"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Item2153c326-6dfc-412d-9738-74337ce43e71"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Itemf190389c-bad8-45e7-94f6-ac1f729b18eb"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Item0d59a86a-8060-4d1c-87b4-1256c7fa47a5"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Itemdff738a1-6a49-4e08-9786-8d7056316c05"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Itemc8b8a8b8-a9e4-4e52-a43d-bdd84f46238b"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Item4cf000c4-03d2-44f0-8c52-97847dd9139e"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Itemc9a3f4f9-6f2a-4339-a5ff-18617cfb6473"),
        getItem(<Link to="/treeSelect/WithFormAndNodeRenderers">With Form AndNode Renderers</Link>, "Item1c960136-b2a9-4949-b5fa-a4bb2719466d"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Itemc8ca6b78-615a-4a21-ac75-ab74ca9ad48c"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item656f2fcf-a91a-4671-8e7e-7d2c26304210"),]