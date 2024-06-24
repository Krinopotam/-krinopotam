
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
    getItem("DForm", "Item9050ba0f-787f-49b8-a341-1cc5f7f993a8", <FolderOutlined />, [
        getItem("Validation", "Item2e80440d-0e9e-46d6-baac-6fe63fe1ca8b", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemcb3b588f-2985-4351-9b61-0dccd9d7d004"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item71ab662e-e381-4885-90c7-1935dda27c75"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemee59a0c7-5cc4-46f5-9d1f-a13b6bc4b46b"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item27ff29d6-7b38-42da-b2a2-adf9eea51c4a"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemf7cf3a28-c938-4287-bfac-b777b3ea03c5"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemf96ee915-b554-4b83-8312-9d08d1e0f6cd"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item99667325-32a9-46c5-b125-6a4f59a00f7a"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item48bde161-ca4e-461c-902b-5d7769330e46"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item59166e0a-5e7d-4c7d-b50f-f52f7b9c1c82"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item5631adcc-0891-4b1e-b4bc-728ef6bc3d38"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item078b7b1d-1166-4896-90ac-70b83dea3abd"),]),
    getItem("DForm Modal", "Itemd160d9ea-df38-4f46-9c19-aa803ed82f09", <FolderOutlined />, [
        getItem("Async", "Item84430b91-2c1a-4c2e-8659-e19e46d23641", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item8e38bc90-4d30-4b5e-88bf-b3144418cc1b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itema0152b87-55b1-4640-a60f-299a11a93da4"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item078d959e-df49-46d0-b54b-95b719ace44e"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itema10bc00a-028a-4a26-8865-eb163e4f06a2"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Itema937bde6-a4aa-4805-8444-1c79675e1802"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item48fb7981-a6bb-4490-b054-79d169b366ce"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemdf6c9254-3f01-4d53-b5a1-0c95b537943a"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item4a54aa59-6f81-4286-95cf-2d11a5a54888"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemed6ee6b2-e038-44bf-badc-a4db535e6e11"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item9d4edf9b-471f-4af9-bf9f-3b402c8781be"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item202bddef-925f-43c0-8781-92f25320523d"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itema628816a-b94e-42b9-9d7d-d6ac22c58a42"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemeb55cbd3-85bc-48d6-b167-387c8aa6dd38"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item174c4af2-e750-415e-85da-c6ff1fbbe6be"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item494deb42-ecf1-457b-98a0-5aad13c70709"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item736bc693-948a-4c1e-895f-3a421f89e00f"),]),
    getItem("Tabulator Grid", "Item574010c6-7c5c-4e16-9d3a-27802b636c0f", <FolderOutlined />, [
        getItem("Async", "Itemd743fd5e-3f0b-49f7-8a48-3a564ce65635", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itembbcb9775-5c06-4f0b-bb30-c5400d061dd1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemab466a26-a613-4d4b-9760-3a09bf7c3e6c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item5fd33782-fa36-407e-9bcb-16a7bb9a93a7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemd153f683-ea86-4eb1-825c-56332b6f43d3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemb2f5e401-d742-48cc-a2c5-f11887309336"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemc8f3835e-9647-4131-96ce-96dbe9124bc7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item099ae38b-2001-4f0d-a637-c76866ef4d51"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Iteme38dbe79-2d9b-46a5-9e9f-60ef203de13c"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item1173ef5f-16fd-4fd3-a4a6-8c4d74133327"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemee674212-0ecf-4a13-99ef-0637a866a482"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item8eaa21f2-a1ce-4379-af3f-e32664077abf"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Iteme5e23cdb-3a0a-4ee0-a1a7-c3707d791a90"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item7a893bb0-69c1-4dfa-a6cd-f77c18813c8b"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item74c4bb24-366e-4826-abae-8c091c25fca8"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item9a3572eb-81ef-4e24-ba37-331346e42b36"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemb63306dd-da12-4114-a35e-bb526b966463"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemf2c560eb-90b1-4a46-a656-5e5edf06f0ef"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item81ab60e3-ffe2-4896-a6f1-a28e9edb3374"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item9880faf2-e89e-43ee-9a19-b0204511eb18"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item0bf67bb8-650a-4bc9-9365-b75b381760c7"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item83e486f3-5b0d-4b48-9a52-c68da9f19836"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item5b34f9ad-e6ad-4343-b98b-51eeefb15847"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item804bfe27-4c10-4f12-81b8-8233d3bc07fd"),]),
    getItem("Tools", "Item0a159ad8-2a9f-4d4d-8375-6229480351e7", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemd945021c-ad87-4622-87c4-6196e4d0e0ae"),]),
    getItem("Tree Select", "Item29aa7401-b52d-4223-8f46-ce4863ea36ec", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemebf69e77-cda2-4deb-9535-1293c1208900"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itema3903590-1777-4882-9853-26619ce3e274"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item2d4d7b21-6e8b-42dd-b1c6-9dc358c53504"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemac8812c1-7007-45ec-9631-d4fda255461a"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item11f4e141-5ff7-45ba-b58c-73b47106dbd6"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itema09eddbc-9acd-400d-8b35-205961ed8f99"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item982998d7-15ae-42cc-b8ab-925f4bcf5203"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item2dc43e03-5800-4aa7-aa44-2c089bdcb3a6"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item0c5ec3f4-a42b-43a2-8084-6b4ae47d10d5"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item735725db-f0f9-4897-b94b-cd5d7d5a8915"),]