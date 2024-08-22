
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
    getItem("DForm", "Iteme0bb9030-7e9e-4270-88a4-c57e7c6ffd2a", <FolderOutlined />, [
        getItem("Validation", "Item7d2a90a3-e1ad-43ba-b495-48048596436c", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item54af8249-5595-494b-b20f-5dfd29629d45"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item4bfe7f9b-2ff8-4eb2-af65-71229a6f741f"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema8566fb2-8416-489d-8c46-e6671e2a8611"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item403d7136-8c82-4131-9689-fe335ec23892"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item7fb5793c-2cad-4efb-844e-4088530aaa41"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item736dbddf-bb02-48d2-a5bf-7e0443af3be3"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item6f515407-a27a-4eda-8d7c-747ef2153d02"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemfefe82fe-c19d-468d-abda-82eef5dac367"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item58a2b273-0163-4a87-aca1-e96b6484b19c"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item267f2ab0-ad97-49d3-b962-afcf61d88530"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item177ee0c1-a650-4c37-8755-9db57592da83"),]),
    getItem("DForm Modal", "Item234aa42e-486e-460b-9774-ba3ecb13828c", <FolderOutlined />, [
        getItem("Async", "Itemfffb5987-362c-44d6-b0b2-45b865b19f39", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item26ea7f3d-951a-4d0c-a7dd-f28aa9905043"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemc1bb6da0-ed68-4fe0-beb1-268fdf3f8602"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemea302831-3b73-475f-afa0-da4356dbdf20"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item5e8aa780-d130-41b2-87dd-6c51f0491ed4"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item61bf6051-1a47-4b7f-a5db-4714a0c4a110"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item4682f11f-5739-49c9-95bf-b7e0e61f40e6"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemffee2a7a-62e4-427f-a890-27f8aacfb9dc"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemaa0f48c1-c05c-4b61-a424-bb13b81d6541"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item10a8923b-3a33-44f5-bd9e-3032e97bcbb4"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item462192a3-b536-4bf7-8d81-c4123ddd725f"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item14ea8e3b-33ea-467e-9ba6-4119a6807192"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemf02de037-5e04-4edb-8aaa-f19c2702ae7c"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item5bfc272b-e4a1-4d4d-8b97-179f0e765824"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemca4a8c97-8121-4da4-9301-e297bc271f7b"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item5c065f1e-1cc7-4702-b963-13ec40c4a477"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemead2f4a5-c3d0-4a5d-b59c-4144bd6544d8"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item67616633-491b-40d8-a784-138cd533de55"),]),
    getItem("Modal", "Itemc3386f15-b1ce-4634-bbbe-9c5939c3d0e5", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemd3232829-ff6f-45cb-830e-2bea823f64c4"),]),
    getItem("Tabulator Grid", "Item69d8d563-f542-4651-a1fb-5bec422f191e", <FolderOutlined />, [
        getItem("Async", "Iteme81cdfbe-2da3-4ea3-a77f-4238193e9fbe", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemededc606-5f9a-4823-9b43-dccb5fb7ce37"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item8ad8e649-7213-4cac-bcb4-bfd64df9fa6f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item6e340487-3473-4266-8a33-f03cf199bb18"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item49968b86-ffdd-4c74-84c7-5c1e275c4b35"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item0ce918a6-e2e1-4914-a3db-170d251700dc"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item5eac8474-a95f-4de5-bed9-a4f235981c99"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item95462ba5-460a-461d-8578-b4ec63e77b0c"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemea45af5d-6249-4ec5-9a6f-3d05cbfdc0cb"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item4a2c96a1-cfb9-4718-8188-3ee859afae32"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item141d80d2-bd48-47a6-b42a-f62c03a7ba88"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item2d8cd7aa-c09b-40b6-8c10-ae8b00e0ee4f"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item8b7c344c-3e55-4eaf-8d9d-9fc495a3f4dc"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item79e0fba5-4dac-45d1-bbe6-37011655019b"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item7054c396-14bb-4d44-b36b-ec5a5f7275cd"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item70aa8a49-ef96-4f0f-97d9-425143474fcd"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item3db0935c-cf90-4056-87bf-cd73fc21ad48"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemda59c227-37ba-4e91-8979-c38653b74f76"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item84d41c5c-c0ce-4fcf-88c1-0458dad79f1c"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemb2b84b64-1d0c-479b-bb92-a1473bcf4620"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item084f47d3-dd16-425e-9a57-94fa89c4bb65"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemf18c6088-7bde-49cc-ac8a-0b44bb14556a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item9bb0c587-ba6c-4d0f-a69b-105ae2671ddf"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemeec97eba-1cf8-4cc9-af62-40df9fc304bb"),]),
    getItem("Tools", "Item25340c53-c5c6-4b87-9296-cc47ed61073a", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item5ce5e131-b7ec-4ca5-9c88-0e0ac6f38009"),]),
    getItem("Tree Select", "Itema9ae5f49-05c4-445c-affb-97ed30bf7f49", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemd45e726c-bfc6-40e7-9967-a6af6c7920ff"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item844af498-274c-46f3-bded-f689dc6b71df"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemba9e7b99-130e-40c2-9bbf-971ec14d8876"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item15cbcf5a-10f9-41a0-ac91-2b09efe29fe2"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item5e4af6ec-3d04-4b91-b376-7c75cf4aa8d3"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item2c624bc7-3aed-4400-9598-701e104b84bd"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item34cd1dfd-4d6c-4cee-8739-f680f5723584"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemd1abacdb-748f-488e-a844-7b4636dd1201"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item620db6d9-6aef-4ad1-984f-2baf48b5c84d"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item53b20c55-3bd4-479f-a676-0244f55fdd0a"),]