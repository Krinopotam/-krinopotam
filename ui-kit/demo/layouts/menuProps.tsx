
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
    getItem("Other", "Item653d0296-8d60-4d82-b081-154b7233df77", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item48ee1738-830b-4fdc-a669-5c90e2ce723b"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item530d5761-529c-4f3c-86f7-a378aeb9ce1d"),]),
    getItem("DForm", "Item92753de6-6e24-43d6-91f7-49ee6c7a7ea7", <FolderOutlined />, [
        getItem("Validation", "Item263a7cf0-c78e-4d95-80c7-8f4d1c07e24d", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemb1fe410c-f978-4d3c-b659-94b329047543"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemedbacb45-c474-4207-8331-f2cfa46247d6"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item02889967-f859-4ca9-8669-351c0efcb20e"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item176ec9a2-07da-4d1a-8398-8784e83f8730"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item52c02f74-0137-4eeb-b338-b5f7decdf7a2"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itembf168c52-028b-46a5-b3a2-d3675ff73627"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item6124bbb2-5a6e-479c-a1fc-b42d366d1e8c"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemf8ae5f5d-955a-4468-95e4-f6fdfda900f5"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemc8032aa6-d318-486e-8e73-90dfaa9d07e5"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item94f386d2-f210-412a-ad78-b82b2fbcfc1f"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item9fbe2203-3feb-4cb5-ae29-b3775510731a"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item90430175-0b80-484f-b69c-f61bb3462cf4"),]),
    getItem("DForm Modal", "Item4eaf78d6-cac2-4609-912c-f134517f3eae", <FolderOutlined />, [
        getItem("Async", "Item246090be-4788-47c9-be72-7dd4a45b79ba", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item8397f5e0-4f25-49b9-bbb7-e2ed6d0bd56f"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemd1da8b1d-8912-41b4-b396-5a6e5c1f373c"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemb4d8cf98-3a4e-4943-aed7-d791e8457ac4"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item4ebdc57c-4c3b-4c84-8165-5aeedf493999"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item7672a237-380d-4c5f-ad98-fd779e9ef452"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item0d178448-de09-4963-a303-1221b46c3f4d"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item8ec6d448-6924-4f0b-b884-b4755c60bc04"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Iteme8891a8e-e8e4-40af-af5d-1e7c46dcd227"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item8bee8e38-ced4-4cbd-b1be-543f689b7dab"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itema657eb66-f228-4b3d-b79b-7b0eb884d0c0"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item7df4c0bb-82f7-4965-a8d5-b9872243b5e9"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item92b6c7ce-a2a9-4684-be93-82d27141b3a4"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item56634f30-28d3-439b-a450-4ce860f3ac43"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemef8672f3-c97f-43f2-98ac-7bafd42126a5"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item45bddf98-bfc5-4b45-aa09-f64ef2053894"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item9f4ec64d-7012-48b0-a5c9-c595cab682c6"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item8f63ca2b-b192-4bd7-8a3f-eb4e7557bf99"),]),
    getItem("Modal", "Item7297902b-4906-4dcf-992c-15080a493d16", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemb17ceb87-f880-41f0-82f4-dac216cb0154"),]),
    getItem("Tabulator Grid", "Itema0688c98-e024-4682-bcd8-b7d1d735fb21", <FolderOutlined />, [
        getItem("Async", "Item4874e9c2-d142-4be5-bbb9-f569bc7a27b7", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item251c6cc8-bf4a-471d-b097-5ccf71134b01"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemfb1a914a-058f-4601-b827-1164c77ec442"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item4354a4ab-0d7e-4499-a086-b8e1b3ed1602"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itema9718373-3a0d-4332-8e27-043fee6a5082"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item7ffc9fc3-0130-41cd-99f6-f3a88471ec01"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item979fa150-3f11-4c1d-84de-a12fb0ab1fe3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item9a5913bf-c778-459f-8fa6-03740d93df89"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemf81d123b-ef84-4ca0-b5a8-d84900f810fc"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item0800143f-f659-4fbd-a186-12075046a683"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item9df4fffe-58d5-4a72-8b06-58f3ce8c4966"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Iteme1694fa6-4ede-4b32-94f0-4c0df971b27c"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemed8ef8a6-a491-430c-b773-f478df7798d2"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item4d6dd62e-0825-41ca-a30d-feb4fb2ef491"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item21c0571d-3e3d-4fe6-b672-6e7725f4d750"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item7009b9cf-1588-425e-8be9-911b27864bf1"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item93d411ab-8271-4f0e-b617-c8040514b1ae"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemce3efd03-fc59-404e-a1fe-2256876113ce"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemc91107c1-2d44-4b33-9cc6-5aadb5c0995d"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item0d05d54b-39a2-4a55-803f-d9ac0475407e"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item77495cba-aee3-496e-94c5-91cda3498704"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Iteme230289a-87a9-47a2-aea1-d67a2726505c"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item0103b3c5-ee86-4f98-9222-9c8a4532c38d"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item594e1d74-28c2-44aa-9eb0-e232990ab607"),]),
    getItem("Tools", "Itemce6bb4d4-3436-4ee2-803a-c12f16b7d367", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemc78cbddf-3e68-4853-a75f-d23347e5cb7d"),]),
    getItem("Tree Select", "Itemcadbb1f0-2d6e-4294-8312-f7cb847b96e3", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item48c858db-84db-4bf8-96da-c6be5222e5ca"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemea84be71-13d1-40ca-b2ff-afe0b8e491b6"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Iteme0981009-af58-4d63-b26c-593d0ad013e6"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item5a58210c-d7d1-43bf-baf6-c71cfdcbfbdf"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemada12fb1-cc7e-48b5-a4ff-d71dd728c024"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemaf292bf5-688d-4ffc-932e-7dc44060a3db"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itema4bb1035-bb81-4a02-8b99-2e78c5e601da"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item5b0f8b20-f57f-4035-947a-23b2e3312a41"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item58fc756d-f104-4ba2-8e57-6ff66be80aeb"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item06720ae3-95f2-404b-96c5-6c0805244bdc"),]