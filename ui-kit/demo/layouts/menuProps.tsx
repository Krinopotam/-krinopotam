
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
    getItem("Other", "Item11fd9995-9eec-43ce-96c5-fcf26e08b8a7", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item7626d770-be83-4bb4-83b2-1918730b3121"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item2f368db0-2474-4bb3-bcac-9e33f6eb6820"),]),
    getItem("DForm", "Item5436dc44-5de8-498b-b9ea-0aba33ecd036", <FolderOutlined />, [
        getItem("Validation", "Item3e9b3a31-2a55-42a8-b123-33a1b67134d3", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item6bb18217-19ea-4898-b27a-90edc78ae241"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itema9386e00-cdd6-4cb3-842c-d819a4329639"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemfe1ae310-abfd-4fe0-90b2-9f5a47b1c122"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item04be6528-85f8-4731-a80a-0ed35709516d"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item45462c6d-1fc6-4535-b3b8-893333a9c3e9"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item0f914968-ab40-4e61-a567-5268e08a7c60"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item913e9bc2-c8b1-4e19-9cb8-c126e301273d"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item691c1bcb-247f-4ba0-87dd-4eb73c3e7a4b"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item59e145f9-35f1-44d6-8e22-f4cac599b890"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item1e5f1915-8558-4a65-80c3-016e2abe729d"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemae32a390-376e-4cdd-91cd-4e000d4c55f1"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item97024756-c4a1-4607-9038-4e99c24758c3"),]),
    getItem("DForm Modal", "Item649c38a8-b822-4e32-aa04-42587b2844d3", <FolderOutlined />, [
        getItem("Async", "Item72de6dca-3d23-4579-961b-06c7f23114dd", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item9f842321-22fb-4049-84d6-05c66de324ac"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Iteme2a0dd12-6540-481d-8850-cd1d4826c1d9"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item3a084de7-5294-4d0a-9081-8e845ed8c725"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemd89669ec-93b6-410f-9948-1d6c8ef46efa"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item1eefa50e-e475-49e8-9026-2ff4d54f76d6"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item13446d0b-792b-4db9-81bb-487484eb900b"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item2c4cef00-530c-4f3c-9728-a1178bfc7994"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item64b5d272-c946-467e-8512-b3f69013b180"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemaa368814-b163-4e63-9765-2e09166e8833"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item057b553e-39f3-4f42-ba2f-53175df6879f"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemeafb30a6-7a95-4714-bc2c-9f660fe73814"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item4f157602-1382-460b-8d04-656fbc5fa96e"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item9387adcb-5273-41ce-a7d7-42f7b8059ec6"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item56310c27-921a-483c-807a-d696e90d7ca8"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item2c3d5a06-22c2-439a-875c-098bd0b1ad55"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item6dc22e1b-a9e3-4bcb-8079-730d6fe61d2c"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item78edb360-bc24-47fb-9046-5df8d20771d1"),]),
    getItem("Modal", "Item0b39228c-cc07-4b53-bf24-348347b0abe3", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item1350966d-4bc8-4731-808c-7a1979bc2548"),]),
    getItem("Tabulator Grid", "Item643ab4c4-28d3-42c8-be1e-11d33044adf9", <FolderOutlined />, [
        getItem("Async", "Item720ee674-cd94-4e2b-9496-dead08a7caf6", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemf29acdc6-8be9-4092-af2e-168dd2a947a1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemc7831953-469b-4b95-aed5-af4823730e27"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemb58e6da7-a4c1-4546-8186-5172d0b091dc"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item878af129-8799-4f18-9f5d-72798f0b0b8f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item701ee641-727e-40ec-8cbc-ab60423b476c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item03b5f058-ef5c-40e3-9eff-91413eb521a5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item3589547e-7e98-4c0d-8707-f30332766644"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item7b5108f7-5a3f-4253-b022-692e0032ce31"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item409afef7-7a5f-45e0-a330-0b3e417bd4a8"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item537e3f34-25d7-46e7-8b37-67105439dc36"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemedefa586-319c-4950-a22f-241a2b69dcf8"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item273f2b3e-96cb-486e-a4f3-ec891164ebac"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemb8c1cfd3-55df-436c-a379-dbb002671031"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item3a863693-3513-439d-8b22-0d2d9bbb994e"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item3df4bec1-d7a1-4654-846d-e35c62daad31"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item1152fe09-5259-4ee8-8f48-2194d364f896"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item153b74c7-2aa2-4342-b04f-1c01b3c93193"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemf2cd5d7e-8b8a-4c33-8739-7d463c7617e6"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemef276a15-1860-406f-81c5-7ffea6358d2f"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemcb6dee65-bd8e-4d5f-b7e2-ef70662619be"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemad4dfff9-0014-4d12-b389-7d923afc2b2a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemc327e682-3291-4d34-8153-da3e4880508b"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemf4369571-f3fa-4d8a-ae11-1a5c6c7d7cfc"),]),
    getItem("Tools", "Item08f0697b-119d-49ed-aebf-7d3a407c4d9e", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8a0763b1-f311-4cd0-9846-c6b66ba03d58"),]),
    getItem("Tree Select", "Item407537c2-e217-4753-bd60-ac8bc78c42a7", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item1dba7c6f-660a-4946-a2ef-cca69d7d69b5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item59f8351e-78c9-46e2-8a12-62c62d8e36e8"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item5c7a6c8a-d0e1-42b2-beb2-dae890de2e66"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemcee9b874-2b31-45e7-b7c5-d34937d3b6e2"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item8878cc96-88af-4b2b-89d9-eee5c2b3ec4a"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item02c79ded-bf2d-465c-a72f-dc91fc2e5d19"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemc560800b-f0a9-419f-997d-42d510069198"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemc697738c-6e9e-4686-845e-c1f8427bc2e9"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item07bf5120-2c9c-448b-bb92-abf7a5979f84"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemdb62dd57-f2d8-4adf-82f9-410b76a740c3"),]