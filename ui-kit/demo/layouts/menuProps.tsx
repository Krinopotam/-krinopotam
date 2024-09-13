
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
    getItem("Other", "Item2a2d58b7-93aa-4f64-b4e3-2975d8d83726", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Iteme7248fe6-05d2-4d78-b725-bb56045d440b"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item01e100d3-ddb4-4bd7-9483-704d58d9c267"),]),
    getItem("DForm", "Item0f4d31c6-0388-4633-9e7a-2ca0be1e4b0c", <FolderOutlined />, [
        getItem("Validation", "Item60dd1580-74b9-4521-a3e2-2704d718108e", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item24acdf44-97eb-4588-812a-da54f9e4a050"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item44895789-28e8-4909-92a1-a8abb97e950c"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item4fe77f0e-4b8b-49f5-bd11-78d1540d849f"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemd0dbc1e3-4ec0-4c14-98e1-0cc0da177bee"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item91d6eaf9-8a49-410f-8d22-8c0c13d50318"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item992aa71e-e5cd-46d0-a057-98c9c5813530"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item9c4a011d-650e-4ad6-9ad1-80d400679f49"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item0efa2fed-e402-479d-a1af-a9f4ba90e6de"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item33708af1-4f45-4a88-914e-9e3707e12c94"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item5f6a4a96-5a16-48a2-9e1e-429417f8aed4"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item350dd3cb-8c6d-4316-bcf5-948eae7ac3ec"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemcf71e957-ffb5-42b6-beea-f559d457eee7"),]),
    getItem("DForm Modal", "Itemeecf9508-11f9-474d-9fae-8b9564910021", <FolderOutlined />, [
        getItem("Async", "Item91c70748-7143-4f79-8135-86e0017d72f0", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item8c595ddd-fb3d-45a1-b385-f3ee8ddcb197"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item04053561-e283-4587-bc60-4716dbe022bf"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item65206d77-c1d1-477f-8652-5c7cc8938258"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item2b96ed1d-347a-40c9-ac82-d79bfc90f92f"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item60e779fc-6580-4e9b-bdc2-1bf88033ea47"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item35ecb000-24f5-4f93-8721-5b91dfdd95e1"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item41dedeed-27dd-45d4-a1c8-dfdfbe2294e1"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item8a370627-ad5e-48d0-bbf4-7ad36e162d10"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itema1985e1b-eae2-41cf-8a91-10ecd36e63c7"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item7a0f8dc8-a183-4c0a-9e5d-dcbf68a1c1c4"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itema6ceb00a-62f2-4a4f-bd9e-ab05090a54b2"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item8b1303ed-67e8-4cdf-a1ec-3dea68f16cb5"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itema9d65bec-1d8f-4651-a524-b6a83a1fcadc"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemcbf67b13-6752-4d46-ad15-6391c908b036"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemdf882916-2ae9-4504-ae01-f75760bde940"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item6008c867-ae7c-431f-af6a-c5d171ae066e"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemc1e53c94-49b1-4696-9fce-26c013ee0def"),]),
    getItem("Modal", "Itemc643a448-738b-4ca6-96d5-357215fc5055", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemb73e0a57-329c-469f-b8cc-c28d59fcb8e0"),]),
    getItem("Tabulator Grid", "Itema1f8d2e3-0f8f-4b22-a49d-5d3347644860", <FolderOutlined />, [
        getItem("Async", "Item8c9e5816-3cdf-41e6-81b6-f4352fb1f44c", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item32182aed-08af-40aa-8366-d9fac78e7263"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemf29e0ef9-3ff1-457e-b2ad-6d34c27429fd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item72a294b6-10ea-44e7-be53-37102419c000"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemcde4f9ba-d0e1-42c8-9218-9abda8211db3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemcd948670-79d4-4260-bbc5-a6eb8d0ee4d0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item26f75dd0-e05d-4712-b3ef-65c4055c2eda"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item9d5f041e-f3fc-4b65-b447-9baa2162df4f"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item1909c5c6-fd3e-4d3b-9279-bf848bd4d089"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itema8f21485-97ec-4995-826e-48ce736fe926"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema32d3bd7-e2bf-4acb-82c0-0c6eb4a8d0fb"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item233613dc-dc2b-479f-a927-255175e955d5"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item49179a24-0e51-4958-8654-63249f37561a"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemba5d4851-b5c0-4d28-a17c-63b3458ad499"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item43ddde08-9bb6-4b72-a15e-be5e37f28a54"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item152b0784-d9f0-49cf-979d-fb6714d4d7fd"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemdce43460-9d62-48cb-94ee-43fd196e9b1b"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item6858c9dc-a7d5-4d14-ad4c-c87d61e4490e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemce9f29d7-cef5-4c34-9831-47d04168ddfd"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item6ec7eea9-d132-4a93-9dc3-af54729c374b"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Iteme4dd6cb7-22a7-4d10-a9a2-572317fe6801"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemdb0d2d98-aadf-4d80-808c-d476ecd1fb1c"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item804e4703-4ff1-4cd7-82ee-ed644e2f1326"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item80e57519-0b15-405d-9c50-8fd417f14371"),]),
    getItem("Tools", "Item869c101e-8220-46fb-bf40-039b4bb50d52", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8ae3546c-7b1d-4adb-8a20-6d7150d390f8"),]),
    getItem("Tree Select", "Item8f0db6f1-3a85-487e-8c4d-71da1032ebab", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itema64765b8-d0e8-42c2-9934-c19dddc4217f"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itema5477f1a-c6de-4b4b-a9bf-bf174dcccaaf"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item7b0368f2-e5ef-4ffc-8974-43c211f50be8"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemdb328bba-3fbf-4f77-bc34-d31d6e4096cb"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item689d73d9-1805-4e06-8169-0d1f7629aaf9"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item7ac47e26-a61d-4cd7-ad64-05e9611a8f2a"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemef6844be-884b-40aa-8e24-cec857747009"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item174aebe7-a2ba-4af9-aeca-18cff7124510"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item2f36675c-4175-4bbc-aa47-3bb9a5278b13"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item449eb1c0-505b-418a-a50e-470f96c507fa"),]