
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
    getItem("Other", "Item23c7c428-a6b9-4de9-81ab-3716e5bab0a7", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item6620eb58-0291-4cfd-9b3a-54b90810ac5a"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item170dd697-fecd-4d2c-a1f1-a78ec1fec64f"),]),
    getItem("DForm", "Itemb918379a-5186-4e9e-b7fe-bb4cf1e0d5f1", <FolderOutlined />, [
        getItem("Validation", "Item44d7d87d-91a3-43ad-bc1f-e8cd440ac141", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item0e516643-1b39-4c94-9a36-0b842c346220"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemc5dafbf2-a6fe-4d77-b899-18688155b045"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemaffda1ac-3568-45e8-9594-5c539302b0f5"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item6aa162c7-2bcf-4632-829e-817d25b05c64"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item2686dbb8-49ed-4816-a4f5-0baced42da87"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemcd46ef67-2033-4736-87be-e2bee08aa9a8"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemdb977c00-86c1-4856-8955-2fc9b56d99b1"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item383a8c11-f1f3-4c52-8dd5-b7cc82cdf7fb"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item7fce2440-c2a6-4e81-86c1-f6633a97ccb9"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemfcc2bc53-8bea-496c-966d-f32049fd85d4"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemaaa65007-6068-4d18-9612-d1330cb35d3b"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item2d40b7f0-53e3-4b39-8732-b26fc4dc88db"),]),
    getItem("DForm Modal", "Itemed83156b-1e63-4b6d-8fd5-0824691fa0e7", <FolderOutlined />, [
        getItem("Async", "Item40d792ed-7405-49f6-8995-85b262b98d7b", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemf5c1f08a-7c7e-4b0a-b70a-728d04bddc5c"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemcb2f0421-fa37-4332-b753-d8e38dbf0332"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item165bc26c-cb61-4d73-9ba8-a64fda5a05e6"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item48657224-f211-46ba-b49f-95c0e1f9b046"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item10c9a369-34b7-42fb-a56f-23b167716505"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item025f3b58-9ddf-4dd0-bd23-9140d7bad5a0"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item32a303bb-4520-4948-843d-c1fb4512040d"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item01a4cf36-f448-406f-b205-8e02941139a1"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item17421831-6572-4fe7-bf1f-ed3cc62bb5b3"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item0aaf3dd7-2851-421c-89d0-3451a0f86db2"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemc7a1f971-e54e-41fd-ac45-e696e0d79fa1"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item075a50f2-3b27-43c1-92f7-f6a489445d97"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item4038ea94-dfe1-4acb-b6a5-7c8e733ad900"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemf6d93e6c-3b73-4c3e-906b-c5839342ac40"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item2a9917d7-7ef6-487c-bff2-47ecef01612b"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item28a22104-3923-49c2-88b2-0b2fb393901b"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemf210eadf-0a4e-47a4-828f-0904986d1d69"),]),
    getItem("Modal", "Itemfba9aee2-fdee-4608-8830-897db72bfbb7", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itembcd51760-a7a1-4293-bb4f-1a6758f7f959"),]),
    getItem("Tabulator Grid", "Item9d9ab71b-86cb-40cf-bfb0-ebdb39753987", <FolderOutlined />, [
        getItem("Async", "Item1a0daa5f-65fa-4562-b41d-be65af32c4d2", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item8172a6bf-a9c7-4465-826e-8ca0369ada50"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemc93eab69-7c24-4092-9751-0067505c4191"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item5d8e606b-0740-488b-bd1e-5b413c3cba8f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item6c66776e-cd22-4d7d-a3d2-6dd857970804"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemd31f79b3-1748-440b-9a99-00ce014ebf90"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item2f4990af-d764-4481-9f4a-f6d51b737de3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item81b61d7f-482c-4ee9-829f-da6bfa85059f"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemcfccee7f-f60d-4302-8338-cbcc8226d84f"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item5e228f1f-0e8d-4074-a54e-3bc7a40700bb"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item7cdecb42-a56d-4342-8aef-a02ac95452d9"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item543255a2-6c5f-463d-a889-e26929119511"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item3fe36a21-4c56-4a38-8d1a-0857ac1385d9"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item027f8cd7-f386-4bc9-9f66-90203ce445a9"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item8ae6fe63-20e5-44a3-919d-6687671718bd"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item536cbccc-0836-4934-bbed-af23c7edd949"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itema34263e5-3fa5-4b07-b4b7-66f3f0c8c2be"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item20cd1d9a-bb75-45d1-ac53-f47374bb776d"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item0ee555f3-aced-4dea-8d4d-45e00b3483d9"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Iteme12344b4-aada-4240-8c73-333f9f26d6aa"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item4d287544-01fa-4e34-9c60-a86854d6e708"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemec611576-ad46-44d1-b9ea-49046139befb"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item94702bde-528d-4c24-8e37-8b38198e587c"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemd06ae73e-a759-403c-a90a-41dd8bf24b12"),]),
    getItem("Tools", "Itemc1db96b8-4e8e-4c19-abf2-0e60d775d5c1", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item23b9286c-ec87-4db0-9138-01eb96a90bda"),]),
    getItem("Tree Select", "Item678dad80-27e6-4540-919d-8acfd5aab405", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemc186e162-d0bd-41f1-9c62-28ab17da08bb"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item6d3fa665-b232-471e-a6cd-6386cacf4140"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemd035b531-f333-425f-a603-e46cf3ab8032"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item26453120-ea34-4f3b-bb29-92e9c50f6259"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item7f5e7ba8-4ce9-44ea-aaff-89e92a28fa14"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item1db3cbe8-383f-4d1d-809a-35d40b5f4594"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item2c2f2a9d-7073-4760-a8a1-599605fd8432"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemafc1e80e-c13d-4683-9075-2a63f4d69808"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item1f4b2de7-d42d-45f3-ae11-d93575367c22"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itema56af8fe-5de2-4828-8665-5635df824734"),]