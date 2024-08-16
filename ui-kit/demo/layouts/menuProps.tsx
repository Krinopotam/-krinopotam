
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

    getItem("DForm", "Itema32e34ab-fcd3-47e2-acc9-207915670bea", <FolderOutlined />, [
        getItem("Validation", "Item58f7d308-4a32-4cd0-9bee-d34805753ea9", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemc8abb7a0-4043-4ebf-9ecf-8fd756d5b4c4"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemc4109d72-977c-42a6-85eb-eb42744208ce"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemd050b63f-4c9b-4738-a617-9a8388c22f75"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item5f00f484-6da3-4c2a-8029-501cb421324f"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item35552292-1aaa-46fc-a2c6-a6ec5bfc11a4"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item473ef079-44f0-4a01-bfa6-c39433318488"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item40485d5a-5df6-4be5-ae03-b2d834210ec1"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item9d9b1c31-c882-4e35-94ce-36af13206d1d"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item9f7c52e9-feb0-417d-887e-054122423226"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item05667967-ceda-449e-a652-1d468d2012ea"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemc083daf3-3dbf-48c5-a5fd-fff88a764c1e"),]),
    getItem("DForm Modal", "Itemc97c70e4-d2ad-44b2-ad4d-3de33ae51557", <FolderOutlined />, [
        getItem("Async", "Item1e198d7a-ea90-4141-8b09-b2ce2ca8eb20", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item5229431a-d795-4371-b8fe-972e0ed2c03f"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item0d1b6383-65c4-4ec7-8c8d-10e7cd78f2ca"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itema6e37e03-a260-4588-b92a-67a588b53a06"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item361f0bc1-5fe6-427b-9bf3-255198c7f440"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item29a31c2c-d059-4a1d-9d5e-a97272630bb8"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item0bd0e4d6-1c27-4b20-8a68-d7ca81e656e3"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemddba29ad-1e2f-4077-aa76-e40c69c058c0"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemc3fb101f-7bb4-4927-9c50-b8d6b44cd574"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item15a645d8-ceb3-48f9-987a-d7a75f13b40f"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item2806ca07-6051-4d34-8218-f083424ee6c5"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemf061cd9d-ecca-4387-85cf-ff9a7ca7b331"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemedf136b3-cd3b-48a8-bbc0-6d4e834b2efa"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemdb460569-18e2-4b90-9763-c90d0ff282a3"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item89ef8ecc-be8f-4ef7-b7c6-309a65dfcd15"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item7e1f1534-8bd1-4104-a29b-447fb6490268"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item4c3db270-063b-4d48-8443-9d3ceb3532a0"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item2b543d55-e844-463d-a085-38da18e11650"),]),
    getItem("Modal", "Itemab63a6dd-21f9-4e02-a135-3560775748f6", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item12ce7927-0d99-4286-b75f-1327cbec91c0"),]),
    getItem("Tabulator Grid", "Itema76b639f-f112-4b08-a513-e7e64bfdfa6e", <FolderOutlined />, [
        getItem("Async", "Itembb5c7d36-d19e-4704-8bce-00a0552ab8ca", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item91741bdb-ea6f-4692-b47d-b7ced837548c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemd02df18f-150b-4bbe-b672-b192bcb8af53"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item5b530f49-e4fa-4663-bc59-97be5f60c666"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item40ab48af-3e22-42aa-93f1-713e5cc164c5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemfff5f103-0735-421a-bba4-298e42127b5a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item37797f1d-4407-4a9a-878a-e6e958c81be3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item3400de80-52ae-4fd3-b1f4-a0c13e441772"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itema9ef8075-bf5f-4e21-98ad-372c6636a44b"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item85b2eb13-13c7-410f-a12c-5243f678f9e8"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemca1e95c5-533d-4201-a538-893a043409ef"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item3af57628-b554-4e44-8893-1b23b41134da"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item634d707a-bea0-4d48-9ed6-f139b2d49e95"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item389ab045-8eb3-4c95-bd89-28ed3a7b6d99"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemd9c85106-c475-4f3f-a843-7b2eccbef912"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item75571eee-91f7-49cd-b49f-d7fd308323d7"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item3f19cc2e-527f-4d45-86ab-fe8c3fa1363f"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item17c42790-b21c-4d16-a4f4-b6c26e922e6e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item95e9767c-44d8-4a84-ac99-405e8c106914"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item434efc9c-ccdb-4d89-ac89-053c37704f29"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Iteme6799ddc-71c6-4eb4-a2a6-0ddb6ca1cfda"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item44950361-e29d-47d0-80e5-97dec8f35255"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemf665040f-f414-4560-84b1-3d4c2649edd7"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemdd6c84b0-d146-4fee-bbb5-342e37fd975f"),]),
    getItem("Tools", "Item04a5b061-55c9-4c66-8b60-096ccebfe443", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemf321fd56-ed3b-4b1d-bdbc-5eb7f3b2f28f"),]),
    getItem("Tree Select", "Iteme0ba2742-4872-405b-a6bb-26e8f677647f", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item6f043500-33de-49bf-b989-a2a1a26bffb1"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemb5e71b86-59fb-4daa-b28f-605bf7ace0ea"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item49f088c0-3167-40a3-a39d-186119737424"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item609f3d0f-71fa-4a8c-91d9-69e8898de7a3"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item43cd8403-ba3b-4b65-99d8-818bd62028b6"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item4ff3a859-229c-4da6-b3e0-7efeeab50810"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemdcc6037b-8e43-4023-b6bf-cb476cc834b7"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemc37aad77-28a0-4438-9f7e-86b9213a456e"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item0061e4a9-6885-4c04-860d-4c1caedc3d32"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemeab385f8-e0b9-4e11-be7f-6e20647ebf72"),]

