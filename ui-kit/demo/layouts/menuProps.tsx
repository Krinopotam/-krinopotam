
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
    getItem("Other", "Itema082ca29-ec24-42e7-84f3-368451c9f01c", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item0ed5873a-f3f8-478c-81bf-8bb77b911b9b"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itemcd0f8bbd-7c5d-4643-ae5a-146e777eec40"),]),
    getItem("DForm", "Itemdda94654-7d6f-4a8f-afb1-90d50490cdf3", <FolderOutlined />, [
        getItem("Validation", "Item07f04d4c-da4b-4e3e-98d3-333f9fa74638", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item39ed26a7-778b-4724-9855-75cf89f31fbd"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item293d2fc3-61fa-4125-b70b-3c03cb063630"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item0a36e860-c99a-4514-949d-5f8931c32efc"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema1e2cc09-33a1-4ef6-b946-5b13fd45b66b"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Iteme500b088-14d3-46d5-a99f-b04c027c8ffe"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itema854bc03-d772-4ef7-8619-5bf004bcbcfa"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemea5d390a-7681-4d88-87c0-eade73bd1a1f"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item5552c86d-ddee-4e52-ba3f-d112392502cf"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemb5a4590a-e738-4131-a53e-775f4d5c4b2b"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item96e7f0e3-45b6-4515-a4b4-cd515276c644"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item8d2aae5a-4521-44cc-ac13-aae12de04cb6"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item3a69b7ef-cb7c-47f7-8c1d-42dc6cb4db48"),]),
    getItem("DForm Modal", "Item47fc7a38-7d53-45e6-a75b-9650c0813586", <FolderOutlined />, [
        getItem("Async", "Item327aa68e-6a2a-4b4e-ac47-da698122d97d", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itema9dbdd2e-cd58-4317-8bd4-c45d5f75af9d"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itembc1d4068-3705-4b90-98d7-be5c81a6f39e"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item6218b6be-974f-4eaf-8123-317ad080aaa5"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item5302cc14-1ddd-445c-8573-0d6da9445e89"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itema47668d6-7be1-4934-8b6f-c214a811d85f"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemb7b0783d-d3b2-44bb-b215-83dfc3dcbc73"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item65580104-b9e0-4672-b760-3f3bc055b2ba"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemf7f583ca-5898-44ff-ae8a-2152849e7e6a"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Iteme7cbd706-78f8-4c95-adb5-4224e98b3ed2"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemb2603a29-6859-4bca-8326-cd14db44535f"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item3091d2e1-7e81-4dca-a75b-cd76245fcc2e"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item8aa86067-65b4-4dc3-9ae6-e7fc3eca33e1"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemc1c20b3e-c475-43a8-8689-d724c12eef24"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemfc5e0270-1ba2-45eb-9343-0754a8e19e69"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Iteme27d44fc-693f-433b-843a-7c0a8c0440ee"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item68b8666c-9d90-478c-9d1b-ba00985172ce"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item3d64a430-b194-4725-a480-dc21f18aed72"),]),
    getItem("Modal", "Item1ccf346e-c52f-4771-9d2a-a9c308045115", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item4107d2dc-812e-4bd7-b450-f744a8452182"),]),
    getItem("Tabulator Grid", "Item0aac96c3-7597-4ca1-a26d-0b11ef493af0", <FolderOutlined />, [
        getItem("Async", "Itemf9664413-83c5-4a9b-b3c6-22e27babb63b", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item0fda5a34-1131-4354-bc8e-da4da79a80ae"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item7ca8e33d-986d-4fdf-a9ca-77523b9161d2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemd84a846c-b392-40a0-ab36-2e16b7532e87"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item36996f9c-f1c3-4224-b41e-49cd3d388d44"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itema9e354da-4ae6-4820-855d-a2652e31c7f2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemc034ef3f-d992-4396-bb1f-e421859cbade"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemed8f7b02-68cb-4df8-a3aa-002f35d1fd0e"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemdf326802-46a7-4dd4-8e3f-82ed3098d422"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item9a7ffc1e-3899-4097-a513-aab5df54d759"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3d4ec138-307f-4121-ad3d-f3c1c72cdfa6"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemec19c930-62b2-4d6a-a84c-5a8b1d4224fb"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item420fe0fd-0349-46e9-8f36-5de62418813b"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itema181a20b-f7d2-4135-8fb9-cba2e7bac0d6"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item6dc843f6-0c89-4094-a6c6-eb2304530703"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemb0c343ba-5329-4f02-9409-3e6539bd72d8"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item38871b35-fff1-4420-be21-d86f5e94f3fd"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item54a044ab-d861-48b9-9fe1-b8ca0687a8f9"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item59e1453b-fa4b-442c-b64d-fe49bf3f5937"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item0e0b598f-beeb-408e-a401-cb3b17b89b0c"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Iteme836cec7-c021-479c-955e-eefe7d92d6c9"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Iteme5e4a66b-49ba-43f1-a826-46e179ff76c6"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itembcbf214a-b400-4112-958a-b882c741290f"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemd34a2591-0698-478a-b822-b11634fb8182"),]),
    getItem("Tools", "Itemf513f19b-81fd-4430-98c2-fe7175592da6", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8f1be5ad-a1cf-4067-81f8-6d8de52a3695"),]),
    getItem("Tree Select", "Item89d1355b-5166-4e44-b22d-c5047b108a8a", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item6c4c38e5-d8a2-41d2-8b8d-b4c93e02f949"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemeb8aa9d4-210a-4c32-8f36-cc54f1b62ac6"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item5236ff78-6afe-4dc6-918e-57a575b495f9"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item7b638e8d-c255-404d-8f5e-027884f4eaaf"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemb522e153-d471-46cc-9352-f5a2ffbb3f59"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item3ffdb05d-3815-4ad0-9dae-f0c4c76bde20"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item23747b82-25b7-45e1-8e04-9039494b0fa1"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemd01c9ebe-43aa-4788-8cb8-a00d6aa84a68"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item8b584197-c63b-4df3-85c6-1e0271c924e0"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item5bf43a7a-3829-435c-9fff-dadde0c05f03"),]