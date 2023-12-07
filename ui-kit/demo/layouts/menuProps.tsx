
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
    getItem("DForm", "Item02752fb7-fc1c-4688-8cd0-50ff9c91dc77", <FolderOutlined />, [
        getItem("Validation", "Item789badf9-0a99-4b1d-8067-385afb54c94e", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item603fdf90-8348-43a3-8464-0713e1725f63"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item86be039d-be41-4ce2-8fa7-4d3d7070bfef"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item7c620211-028e-4328-8b99-6c593ef247fe"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item9d75cfd9-605b-4fe9-a1b5-a75d5016cfae"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item553f7270-b904-40d6-9e1e-503515729975"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemc505cd7c-8499-4ebc-999e-17d2f9547b71"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemf0130525-6b25-499a-bb54-6ac6d1fa2789"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemfee84f37-29ae-4283-9cad-f610d6e73b85"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemb172eb5c-812c-4202-bcd3-d1323cbfbdce"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item4d53dc85-f0ec-481a-9ef2-a8648fc1b336"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemfcae7d32-b688-4e23-8b2a-885c26ec061d"),]),
    getItem("DForm Modal", "Item7246230a-5546-4cf6-b7a0-c13e52292769", <FolderOutlined />, [
        getItem("Async", "Item9d3341e7-48ed-4ecc-9946-38178b94a4c3", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itema1313490-7599-4d21-9c43-c709cb714c76"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemd0dd948e-8ba6-4578-a57b-f5eaac8b537d"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemf7f3e423-8d4a-49b8-ac00-406e218ddb81"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemb6617114-b03d-4969-ba19-4439b44f4fed"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item3b211d6e-a43f-4456-894a-3e62b9266995"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemc24280d3-a91a-47ed-9464-fc241bd11788"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemfcf1f557-4b3d-4032-8c4a-d6bf7ac271dc"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item4e742b2c-4b47-4d65-acf4-2a9ef9c6d66a"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemfb90ad59-3439-4f32-aa3a-dcc76abd9bc3"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item5fdb8297-3a95-498f-99e7-d93877d336fc"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemda359e33-efb0-4df1-8fe9-b68a010365b6"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item83f76f16-90a5-40c7-a977-b1f747297486"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item38b4cf80-689d-40c2-be09-d0e045f53df2"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item87c5396d-94d3-49fc-b304-b3cf76043233"),]),
    getItem("Tabulator Grid", "Item13463a40-ee8a-4735-a2d7-76af351ae7c6", <FolderOutlined />, [
        getItem("Async", "Itemd877e31d-20ea-4501-9689-9a6d45e88c85", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item4172fa2f-4246-456e-93b2-6e60dcf87551"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemee3d87d8-958c-41b0-92b3-61cb523ddc05"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item66689af9-f7e2-4eb6-bd34-680781983f50"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item369649a3-a4dd-4e50-921e-1b84edda4cd9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item0d6f0c67-0152-4faf-88d6-d1d05fb15f93"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item3c35f916-9177-4929-a06a-262fe265bee6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemde88f3ef-a278-497a-a847-265fff27fe05"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item5201072e-e22e-4230-8278-3433582a6e4b"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3cbcb623-336c-4026-950e-f2f552292cdc"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itema83b69c1-fe04-48af-b08e-3698364db489"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item6568f5bc-5c37-413c-9b18-ed9689f3045e"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item5d1d2d59-3c84-4c72-aa7d-9d86536cd28e"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item198b2ec0-7b34-4063-8146-435e0435fb60"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item9ad5b7f9-036d-46d9-93e1-863dc1912ecf"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item959beb1e-bdb5-4204-bae3-a2435addb0e9"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item32d4f13a-6e64-4c90-ac73-5d63be9acc53"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Iteme70951c8-44e6-45e0-9316-56b1f1c6feea"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item5b84be8a-604c-45b9-84bb-f12ab66df776"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item790bdcbd-7c11-4764-be72-9becec7c392b"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item48931702-b3a0-435a-9755-f37f374f909f"),]),
    getItem("Tools", "Item08274435-6d92-4569-8106-4c9f00578a43", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item5367da95-4300-4f9f-923a-02c9ccf25a7e"),]),
    getItem("Tree Select", "Item86e29d14-6269-4266-92a7-0ffea0b31970", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item4e892d1c-1683-4178-90bd-7e9b0ec0bb06"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemfbace722-d31e-4424-97c0-7856895f0583"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item05cfe9d1-fe55-4fd0-9883-17ee1f84d16a"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Iteme0c686ad-2df1-4617-8a0c-4a72e191af38"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item96337029-3b32-4d29-944a-190e07524484"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item3a12b4b0-c213-4912-b7bd-b155b4abfa4f"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item627bd4b5-ce09-4063-9388-6ecede90bd45"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item0b09fb45-9ff5-4b09-bc40-82786dd2a802"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itembe0e319b-22dc-4a51-87d2-b70a22ed3241"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item2554b171-2eb9-4654-acd9-f5e7702ab8a2"),]