
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
    getItem("Other", "Item892fcb39-91c4-4153-9607-fdb6f625f512", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item533defd5-2d55-4f80-9449-6d8659899d2e"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item02edc344-a0ea-4b7a-9f5a-d40e3c95d693"),]),
    getItem("DForm", "Item2e4fedf1-0f2e-45d2-a302-16069152445d", <FolderOutlined />, [
        getItem("Validation", "Itemf45256ad-ea28-4589-9adc-3c337f31ffa6", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item2098d947-65bb-439f-808c-00062bf6cf94"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item85349feb-d04d-4222-ad81-a99959076d61"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item98f036fd-042e-4b1e-ae5c-f490c068aa25"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema59c2b8b-279b-412e-9df5-3545ff6c1196"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item597ba86a-eb65-44d0-a7f5-447553cdbbb8"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item8289d4df-a0ed-4c87-858c-1d6655b1b0dc"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item26c20789-0ed3-44c3-ae5c-5803ad54040a"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemfb94334f-238c-47f0-a576-d76a191855b3"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item4559ed21-05c8-4a5f-b4e8-136377d51187"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item5cb96045-a840-4032-9d5c-b515f5611aba"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item31cedcd5-42bc-43ff-ade7-7258c0f35341"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item1116036a-f35f-4a21-bb4d-c79e3aaf5dcb"),]),
    getItem("DForm Modal", "Item3073ff2d-d3c6-4daf-9a27-c9184e55d875", <FolderOutlined />, [
        getItem("Async", "Item3fab9e77-e32c-434a-89f1-28b0fd4d2300", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item9fcc94f9-28bf-4b4f-9760-3ad48b4ed26b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item6844e626-d083-4ac0-b54f-aea206f544dd"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item958f0ecf-150b-4c4e-af85-6031ab458e8b"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itembc16eac0-0087-4843-ac9b-e04a3102216d"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item80e8278b-80ab-40c4-a2b2-4001dc9643ee"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemb128dd79-0e88-4806-9f8d-dd823fd974df"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item703486fb-45c5-4024-9269-edee0595a3a5"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item11751abb-e518-47a8-90a7-a2244b072e6f"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item9771001c-f65c-4f4f-b2eb-93b6b1cea0c7"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item812f3359-b7ab-43e9-a3de-4afa16444478"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item2063a820-1a86-4f2a-b9aa-6877fa586173"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item9a3e50e4-2ddc-4f4b-b53c-bf958d3d0baa"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item36747189-9434-453e-b6ed-f927ee62afd5"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemf508172e-8dce-4ce8-8850-516a12fd9f7f"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item41b2033f-39d4-4d17-a002-0ae90fcd67d5"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item4f13f244-a1d7-449c-b6dc-067abcf923dc"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item66cb6d4c-edb2-409e-a932-c1fb558642b7"),]),
    getItem("Modal", "Item028302d0-36b7-43fd-aaa5-fc67618e9b97", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemafdb1775-2848-4684-84ed-bfa16c0dbb58"),]),
    getItem("Tabulator Grid", "Itemf1d0a35c-7a24-4e06-bb43-683a43fbc93e", <FolderOutlined />, [
        getItem("Async", "Item0d630d58-0ddb-4acf-bb9f-c8504137e280", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item805e6b52-48fa-4b8b-aa80-ea4e81f5f8c2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item61bac0fd-65c1-49c8-8793-8b94ba678e95"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item4175107f-b484-437d-a382-b9eb7e086f15"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemdc517349-597f-4941-8c41-7be7f6c4ee56"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item705239f4-ade3-4d8e-ac4d-75b050e27514"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item9a856161-13df-4f89-a881-46c5cfec1610"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item88b72b63-f6bb-4b77-b59b-efae0748b99b"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item6609ab94-36c9-4b29-8144-2ddb0af680ca"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Iteme1cbb901-ed25-4c75-9ccf-acd874582961"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item64c3e75a-6de2-451a-a845-14256243ebc4"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item5026d883-0ef8-43e1-a502-3eca564c829b"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item3afaf55f-669c-48b2-9a2b-3ee127445738"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemf210c7ea-cc87-4ee5-80a1-324060920065"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemd3d5c996-32de-4e52-92d6-198eb441e983"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itema45a6a0e-01a1-4c5d-9a5e-0d455755e090"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itema26d290b-5179-40c1-8e82-e117011d8d10"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item9a820984-19a5-41c0-9bec-1b715c18b947"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemd92cdaff-fecc-47fb-9c3b-4927587b38f2"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemfe00480a-0805-4957-8e5a-9a434d87459e"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemee0a8654-5347-4fb0-9c32-0d8b224ba663"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item390231c2-f477-4146-93d7-03dbbcb22aba"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item20888503-93f4-4f73-860e-e1f1d96a249f"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemeee15c28-e71d-46a4-b3b5-fcb9065106a5"),]),
    getItem("Tools", "Itemc44cfbc2-5f65-4bf5-ba09-db5123438488", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item213bc925-9fee-435b-9d91-2d94c4c04e47"),]),
    getItem("Tree Select", "Itema8a5fd6b-76d9-4e83-80e4-0840e2cf0ad4", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Itemd9a465a1-385a-4cc6-8e60-1c151d7f3086"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Item6b00fab9-043a-4998-b8d4-1d93447da7c6"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Item24460a7a-826e-4fec-a21d-760300549212"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Itembd8529ec-f9bf-473d-84d3-1e66c51a26bf"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Item3951e1c0-2d0b-4e58-bd40-2ee99b99215c"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Item04181141-28af-4f10-8512-63890280fe83"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Item1e226aa4-772e-46f6-a709-b8258ba862ec"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Item2ab8dd3e-44ba-4b47-9156-9f3a8e2c2644"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Item6f6b2513-8568-4082-9f66-e2daf29a6068"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Item79b32760-3a6b-4a8b-9472-c369025b85a1"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itembdd7cb01-3048-48a3-9ad3-f67fd31c4823"),]