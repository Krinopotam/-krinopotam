
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
    getItem("DForm", "Item06b83f68-49de-4b28-b318-140efc668aca", <FolderOutlined />, [
        getItem("Validation", "Itembda88712-215b-4481-ba78-9b4ebe8bc0c3", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item3862c8e4-906b-4aa6-9bdb-7efe0218fd22"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemb65c2f97-579b-440c-88c4-f35b176235da"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema7a6b513-0286-4b2b-b31c-c488198e1fc2"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item8f599338-4314-4ac7-ba83-bfa8501cd301"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item18d71db5-a9ed-44be-b731-9cac7ebebf32"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemfcbc3e50-6fe3-428e-b69a-28954647b784"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item713c00bc-c05d-4af8-9ed4-347ddb06ab18"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item67eaabfc-d53e-497e-be24-72fa30649780"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item50132e34-b099-4b9f-bab0-d6cee120221b"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item67b00425-7514-4bf2-82c8-1f72aa74e886"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item82a1ebf7-c574-4874-989b-2e5e602dc5d8"),]),
    getItem("DForm Modal", "Itemdaaa632e-3c8c-48de-8a77-58fc1b416576", <FolderOutlined />, [
        getItem("Async", "Item7f16f358-d38f-48a4-bf58-1a9dccd07a51", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item3c2572ec-0289-45f0-b755-b33bb35600b6"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item57df5445-dea6-4dad-8b91-a16438b563fc"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item2f72ad84-8390-4e2c-94fd-1d2dafc33eed"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item8abaf376-9827-480d-bca9-641e8b95a08f"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item419c3fe9-834f-4e7a-9b01-47ab90a34b75"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item06f42459-de69-4404-97ff-7a255ed8eb48"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemccddb927-c15b-4bd5-ae56-c34ff21fc037"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item2a29016a-45a3-4e0b-b9f8-4eca75a9be3b"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item4b403fcb-b7b2-42e7-9e03-0dec815c44bf"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemd4bcedfd-9e5e-418c-aa90-eef9f7e2b62d"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itembf2540bc-d074-4986-ad42-f95eb65b1e59"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemdf70c3f7-86ad-46bd-87a2-9daf99b0841d"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item497939d7-1136-452f-8d02-acca7600259f"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Iteme8babaf8-685e-4284-9893-c70b706c3ae5"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item18d4b2eb-7286-4607-83c0-4e02a723073f"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item938b0b62-664d-4f86-9d80-1734dd960d01"),]),
    getItem("Tabulator Grid", "Itemb50cfea5-40d1-4ab2-9392-0bd857f0a3c1", <FolderOutlined />, [
        getItem("Async", "Item9b150152-b861-4586-afe2-055d9b56d3a7", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemb7a16fd9-f547-4005-befe-a2e78f8162bb"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item61fc49ae-8d6c-474e-a43e-17339fe91b60"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemf7348552-fad5-4151-b842-5663457ae2a2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item5a4f13cb-5685-436c-a39c-849b24c23473"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item8e92ebf9-a1d8-46fd-81ab-1a6bd1e22218"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item004656e9-b712-42bb-9961-3449756dded3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemcbcdc6ce-a5e9-47d8-8d40-163ed856fbfa"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemdaa47a18-fffc-40c5-800f-41ac9af26b1f"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item9637d512-606e-4c45-bab2-669c983ac13c"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item44db2102-6e42-4049-b9ae-2aea2d0dcf84"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item329081c5-4166-4b70-ac42-d566f057b238"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item9a2103e0-7db6-4cdd-920d-dd7702501984"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item9d2054c5-8e09-4f66-888c-081b87d3cf87"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Iteme9b3ab29-682e-4b10-9426-e45f25c94ad2"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item98074942-205d-423f-b2de-39faeddf475b"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemd1ba00c4-f2aa-4219-9594-c97a10fc13b4"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item2f857866-9b64-4f27-b71b-0a56a0d81936"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item4509bd91-6049-4c81-bfe5-48110578272a"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item7116988f-7a30-42a4-9c33-8ccc06bc9713"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item02303e13-7e3f-4462-acee-01887198f870"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemdb27aaed-b8f9-4b9a-bf07-8b71efeff2f1"),]),
    getItem("Tools", "Itemfc75ea07-aacf-41f0-9eb9-1bfb893c5094", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item822c8666-f2c7-4354-82b4-be03fc35a8be"),]),
    getItem("Tree Select", "Itembd60e838-9992-4a78-84a4-2998a22151d7", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item81abfbd4-aec0-4679-a30a-64f3e25fd348"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itembc1ecfed-50d0-4720-96f6-01be2436adeb"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item7b16e1a2-e48c-4d6f-907d-9af3d438f785"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item71f74ee2-3858-4fd9-9975-88a86264c576"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item0fb68207-49cf-4b89-8db0-373e4f4d1128"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item8bdecf5f-b581-4054-be39-6e64d88c59b8"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item1a74c080-288c-4b3b-9f57-69e354ac364d"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item01484b11-8d4f-4972-86e5-2de59d8f2063"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item8c1de547-35d9-46ad-9da4-bec9166c208d"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemd0ee907d-a1b9-4019-96cd-6bdb7c3fffc9"),]