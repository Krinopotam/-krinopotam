
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
    getItem("DForm", "Item9507a216-47ed-4e90-b8e2-492b69c33b5e", <FolderOutlined />, [
        getItem("Validation", "Itemc6ba3ff9-bfd4-40a0-b83a-c6418eb52ea2", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemfeec6454-70f6-487f-a525-397f5c3c1d15"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item44913dde-e01e-4e38-a44a-54b0da465687"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item1f2a8294-5b30-45d8-a8d1-e9562c37e196"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item0454271f-3624-40d2-94e2-15fe8ac961ac"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item09f1fbc1-6aa1-4578-ab29-98b70c925ca5"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemfefb17c3-73b0-4641-88f3-67dd5884f90d"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item4eac7473-5d09-474b-96d5-5732c1cd0cab"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item12d0ac2c-0b9a-44b4-97ff-ac026d0d6ef5"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Iteme8a9f858-da89-4af3-b8db-725595f24e41"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item5ebfacf1-8703-487e-bb49-97c35ae52324"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item0651e64b-9442-48ec-b8ee-d475f3a5d49e"),]),
    getItem("DForm Modal", "Iteme1cac874-8d58-4080-982e-3bd951c5a43f", <FolderOutlined />, [
        getItem("Async", "Iteme3db061b-f111-4abc-ae74-3ec0a68b8f5e", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item5c0858b6-5e41-4ecd-a0e0-f3ae287ca667"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item308c3b21-a05e-4b57-a2ad-3d317a2e0582"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item9c6b97d8-a1f2-467b-aa87-0ff6ebd1a936"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Iteme289aec7-27d1-4a9e-83d6-9944d6e8f9f9"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemb33cd25e-0902-4127-a754-c9a9dde08b9f"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item492d96de-b575-4371-818b-f348e2d238fc"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item3091bcc5-f2f4-4a3a-94ef-b7b9d51d043d"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item07ea136d-da1c-49e8-bba4-accdefce717e"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemd10bdf37-2ea3-4d4d-95f9-b4e2ad1ad49b"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item24f514e6-e271-4a3a-b3e4-3f4bc1b71ca4"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemd4cb63d7-6a67-4c4c-b641-2fea91c5fa61"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item6501b7e7-2093-40cf-8c5e-b7ad2b433a96"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item00889934-09ac-4051-b599-4423fb1851d4"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item1dd2f68d-2014-48e5-bcfc-c26f75a97bc1"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemf67c9247-2b90-401a-9736-3d7ec06a5161"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemed49c6d4-ab28-46a6-a722-8a917b8b5616"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item33bcc45c-eb68-4d59-a444-c741cc09d7ea"),]),
    getItem("Tabulator Grid", "Item98662523-d7f9-43ab-a4e9-238167c7d964", <FolderOutlined />, [
        getItem("Async", "Itembe3ded2e-39b7-4aa6-bc7a-8ce12f4a8835", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item2ab832aa-73b9-45f9-b431-25f5ef05087a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item4c61c57d-d174-481d-9330-0d3f4972e5a2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item0a4d7681-cb9b-4635-8d28-79f40dfa868c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item3bade573-0c06-4672-9b1d-1d0633585750"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item26699675-2922-4d78-98af-e43f06100357"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item0065f83f-6914-4e75-967b-f7f18cec7c59"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itema395df2e-c247-461a-bf7c-d8a37a3cbd96"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemfc633b00-33aa-4d48-ba2b-fed5145769c8"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item87be4245-5578-403e-8e6d-83e7423a01d0"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item2a90c60e-4176-4775-a927-f08046a8bec3"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item327fa0dc-ca6d-4d1b-8711-2d2324a47756"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itema383bca3-33b8-4cb4-9309-3062adb4010d"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item59ea169b-6383-4dd4-a6a3-49e22f045429"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itembc85eafa-6ac2-42df-a245-29717607d661"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemc79d95aa-b2d9-444c-b2cd-60f91f36af96"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item6257e21b-d658-47d7-864b-f694a3b0a35c"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item8f49f8db-f6e2-4463-b817-e4dac59d22d3"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item85be182d-82a2-4149-9cab-5e4b245f616e"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item6118523d-a472-4236-a2fb-bc9b3551e3bf"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item67036db7-fd9e-4386-93c2-47485ba9cdc2"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item67d29cf6-7bac-4a3e-8456-4532799eb97a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item996d1a12-723f-402b-9ba4-c96da5519d39"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item8fdf24cb-efc4-4dba-83da-96e6edc0bd7e"),]),
    getItem("Tools", "Iteme8fc6d7a-64df-4805-b737-4be8bc679adb", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Iteme12ae87b-24e8-42c0-abbd-4add92aa076f"),]),
    getItem("Tree Select", "Item42cf0f4e-1725-4171-8f12-c7794d0b03d8", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemb9dca0d7-af2a-4135-ba54-20fa1e123664"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Iteme4293d7b-f6a9-4dad-a36a-3800384471cf"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itema9b2eb13-edc3-42f2-9271-2edd96bf261d"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item0aba90e0-4b9f-4971-a524-679f5cbdfa0d"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item9ba306d2-f6aa-420f-9228-eed21a1f1e4e"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Iteme7439e61-8faa-4489-a4f1-3292106afd29"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item380d67e7-af1b-4aae-8d58-378a1451cb2c"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemc5ec3bf1-3617-4084-af02-6b55e2357219"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itembb27a5f0-1c98-4822-85da-8c8168015cd2"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item5e12df43-1e0e-4a69-a28a-3e9253b1cb0d"),]