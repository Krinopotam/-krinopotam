
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
    getItem("DForm", "Itemf99a50c6-5c95-4aa4-8878-0f2b4117ff95", <FolderOutlined />, [
        getItem("Validation", "Item20720cc7-10eb-4a32-913b-76ab5a746e8b", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemdda19c2e-af93-44ea-9be3-99c4930be5e1"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item0ac43bac-6d87-4f7a-9bbd-cfbbe5943c0b"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema9d1300d-dc71-419e-b06a-98feed520c9c"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item2dcab133-eb52-4d28-adce-2e20ce756949"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemea138901-72f3-4644-8eda-a9d4100fee31"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item3bbc2423-4f0d-4725-a731-6ec49c767c05"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item084f955d-0928-4a2e-a4ca-f64ff48cbdfa"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item05ddad5d-91f1-4e4e-9fc8-3491cd9ed20e"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item1404603a-2450-4f38-af71-642c652c72b8"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item521ec39e-c4d8-417f-98aa-4b2091ae4d71"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item1176034f-4618-4041-8777-1c83bcfd4cfc"),]),
    getItem("DForm Modal", "Itemd05d3d2f-0d95-4287-8402-2e1a498eb183", <FolderOutlined />, [
        getItem("Async", "Item42890a3e-e019-4ef9-a8f1-76ad19e322a1", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemcb4873ce-9a6b-494c-a3f0-69b194c62e9f"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item00904b9d-c703-4736-af21-2b8a922ee846"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item3d3c6061-9f79-484b-ae03-2602925d36a6"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemc17f87fc-4fd3-481c-b381-47fdc4fffbe3"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item2597e113-f378-4605-abb0-e5f268ca89cc"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item88c687b8-ba90-4576-8a55-c124f85be733"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item6b6e3ddb-ab30-47fc-b4a8-14263a52a714"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item48d7b4d1-3be9-4553-b021-82f8fab7a5a6"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item6969a6f6-9b90-414d-954e-f0bd2204f3e1"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itema0bab4a1-397b-4fd0-9ae3-380c3aa2d9a7"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemb696a346-2df8-4447-8d64-20f5fa8018d5"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item11e1598c-9c23-44b4-b6d3-dc92bb66f65a"),]),
    getItem("Tabulator Grid", "Item640e1d52-3f83-4f6a-94d2-32a9565b3266", <FolderOutlined />, [
        getItem("Async", "Item5342011c-553b-4279-ae43-50ffa7338004", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item475903f6-67a4-4a99-80a1-3b2c38bf8c35"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item87769871-2f0a-4a01-911a-aa8d9a79c11a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item1e11eb4f-8260-4509-9d36-5a4316581660"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemb429d2dd-97d5-4437-91f4-dec2395909a7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item533fafb3-7781-4947-bcac-a0730827a59a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemcbefec00-3823-4f0c-8704-918b6750332b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item95043a39-a590-4f2b-987d-fa8d854609f0"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item32a9689f-cc07-4364-ba6e-1ce373478790"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Iteme48e5695-3d33-461e-9d4a-76da7a2dc35f"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item0e54040e-9423-4e59-b05d-ca7c89034313"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item3d7ef8fa-3f4e-4672-b5cc-3030127368d1"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item22d8b9b5-b404-400f-9ce1-1fbd588e5662"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item665a5747-1c0d-4b99-8e52-39a0272e0396"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item4a05a091-9273-4b89-bb2f-213e38cea101"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item6e771da1-1e59-4d9c-988c-2ac92326ee5f"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemb0e914f4-2620-4892-bc3a-45d3a1cc749e"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Iteme9939905-0539-4be2-bccb-b7aab6472edb"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1664b3d0-0280-4420-87a3-c98ad25dc06a"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemc7d1c5a1-80bc-4c9f-a1fd-d628e0075f3c"),]),
    getItem("Tools", "Itemd4eb2b60-96a1-496b-a7f2-1e460486bbc3", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item7f0d80ba-aed4-4b4b-a569-129f5432cbe0"),]),
    getItem("Tree Select", "Item7386038a-0ad5-4e6c-9660-da77d7b848bb", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item4a035098-ee54-4073-8382-4b8b7723f001"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Iteme3555cf1-982a-444f-98fe-66a4026ecaff"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item7cff771b-cb6f-4633-8458-d7d343c299d0"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Iteme63dde37-eb8d-4478-8f75-8741411f7bf5"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item9d2e3b0b-0db9-4175-84d9-3721d2d24972"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item0c549025-5260-4929-96ed-5b9b9d8133f9"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemb815c16a-eaff-46c3-bc68-6a4bc86ccb92"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemeeb5d475-bcaa-46c7-8570-b1932048b2a0"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Iteme8bab37e-eed7-498e-b963-d95c140e3f84"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item4156f8cf-8456-4740-83ac-1ee1baafa217"),]