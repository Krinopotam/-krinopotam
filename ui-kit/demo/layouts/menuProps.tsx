
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
    getItem("Other", "Iteme37666cb-089f-471d-81eb-ad0db4d543e2", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemcb1c3183-09f6-4431-ab41-5f3b2f41002e"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item6547cdb9-7e15-4e9b-9b38-019647167bfb"),]),
    getItem("DForm", "Item91ffecf5-8d72-4c63-8351-ce6070fea06d", <FolderOutlined />, [
        getItem("Validation", "Item3e09fa47-fb65-4de9-b517-e15eedae3628", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemdc0b6665-d5fa-47ce-8f05-fbb9030d7007"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item4b1cb462-1e61-488d-8042-5b798ce59b64"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item3d4f5119-3603-472d-a81d-0df7bdd3e34c"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item825af37c-80dc-4080-880d-3d361bed1ce5"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item762bd238-5e6b-41c6-98dd-0852e035c863"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item40b15a62-0c4d-40fa-8657-e0b4dc276ad2"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemb7f983b7-2576-4ff7-8f94-742d06246479"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item9620275a-f0a2-404d-9268-3c4d644fdd30"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Iteme21acfeb-4eb7-4bba-9b1c-6a24f2c76eca"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item8c9881f0-ab9c-477f-9aad-4b0be0a5bb60"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemf3ac5ff4-1e59-433c-80d4-fd02cf8906c6"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item71feca37-deec-45fa-9011-ec61d0daf1a5"),]),
    getItem("DForm Modal", "Itemb078bc94-4f9f-442d-b0c6-3b381f5228f7", <FolderOutlined />, [
        getItem("Async", "Item47f75528-a572-4245-bdd8-79278c87a90e", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itema5ffd0d6-2637-4ed8-a484-535e094c1bf5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item02c0243e-6ff1-4c44-ba01-71e6d3b110b8"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemc4096820-5194-48d9-88f8-3ff104bd7578"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item09d6cd23-af94-420c-97d6-91a50d423ab4"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item2744400c-9295-41c3-8c86-f37ce7abd7f9"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item595c8737-1312-403b-bc4e-cd4c4b2a70ce"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item7bc06a31-2567-4642-b7f0-bed62a6a9c4b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item0da3416f-19e2-4001-83b6-11b2d0dfb9fa"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemab046ac1-c18c-4827-8983-44aa797f7a9a"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item99a7a607-3644-477e-9097-5a7b0a888420"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemb4ec3a61-ac2a-440f-bf9f-e930295d668f"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Iteme12b9f45-41de-449c-b2a3-8e795507dbc1"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item501f8baf-001e-4ba9-b6a9-521eabec55bd"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item35a41e13-8ff1-47e9-a315-975b9d283682"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item4b0cecfc-303b-4af3-80a0-5ffb4d025050"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemaf438d7b-3fb3-41f2-9df7-07338135b99b"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item27404e63-d94f-4306-a513-1d8350861bbb"),]),
    getItem("Modal", "Itemda118c68-3d4c-4103-b97d-16f1ed651a0b", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item1e122e3b-565c-4053-a8e1-7da176ccdcbe"),]),
    getItem("Tabulator Grid", "Itemde4fd748-9c61-41b5-80b9-e0943b1be226", <FolderOutlined />, [
        getItem("Async", "Item2b489d20-4642-473e-8105-257f2ea5e3c5", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item151eb2ba-805d-45a2-8303-509053aa9a98"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item0a1f3bee-e69f-42b3-b378-43bf52de0863"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item067704c6-b463-49de-ba89-a1f84cd773f0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item42d598b8-ec03-4959-82a2-0f6083d92459"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemf7af83cc-567f-4e35-a7f8-c6d8d28ce397"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item0e2cb808-d7aa-4e38-a7b3-b1759278b8f9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itembb40471e-42e3-4388-ae5d-b97fefbe0a07"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemb5f2452e-902c-4b16-ab26-2d88f8ffb7dc"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item166a96cb-0d75-4e12-a336-046f6081cb02"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item4c51eeaa-0e79-4d59-ad49-8fb2c1ee3a21"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item2e194a8c-466d-4b0e-b0c0-68d23cda0e93"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemda896f40-c523-4578-9a66-37515ef255c0"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item72e8d82a-d45f-436b-9c46-678cb1cc96cb"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb2b4e0f6-319d-4cb2-8ea2-cf7ba03c3c15"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item20b1ec20-a37d-437b-af94-6056384101aa"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Iteme45bacee-4122-4905-b8f4-0a7cd4dea3b9"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item39637378-2ae9-4dd0-a0a7-7ab3decf0e57"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item35ddad48-a380-47f7-8c05-164e567419b9"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item1bbe9738-c6ee-45ff-8580-67f185e0b645"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item0017a0e7-1a81-4e51-b4be-37f47baf69de"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item6585a407-c5ae-4b09-946b-3b0287673f06"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item82ee2dd2-da55-41d7-a12b-38c58551e2a6"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itema1b891a3-a17e-4195-854b-b40d164ef655"),]),
    getItem("Tools", "Item1694d233-03bf-4d5e-aecc-5429b8ba83f2", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemacb1550a-0e10-47b4-a71a-3f1e91987dd6"),]),
    getItem("Tree Select", "Item5e5ceb19-e452-4e07-8cc4-9c1b06059b67", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item258f0fa1-dc93-4cac-8c2d-87bd59a1111c"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemb1b992e5-defa-44ed-b12f-cc6967d958f7"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item57138cd8-da81-458e-b045-e3905c784cc9"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemf4c2faa1-b787-470b-82af-6c7ceeb36ac4"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item4ab4bcce-0ad8-41b6-807b-3a3c9c4c0b64"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item04bb49ab-21db-47a8-afb9-e5c9bff94d62"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item6c17c065-aabb-49be-94f2-8470244bc684"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item40616226-0def-489c-a015-e154761adca6"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item34bf6e78-5afe-455d-9760-e005c9bb278b"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item0b9d51cf-e75e-4ee3-a4dd-bc24925f6495"),]