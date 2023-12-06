
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
    getItem("DForm", "Itemd75b42dd-a02c-4a5e-b66c-707070018fcf", <FolderOutlined />, [
        getItem("Validation", "Item97a04b7b-c67e-467a-9951-af142cd786b1", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Iteme9cabfe1-3882-4884-b5fb-a0da4d17a5ca"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item13c65f92-fb24-4ff2-81de-0fa204577a1f"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item7ae7d3e7-6dd0-4c36-b3ca-2b05a972edf0"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemaa3aa7b8-2848-44fa-a225-42ac618e84a4"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item6689acae-83c4-43a0-ba88-3e8747099f0b"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item75d814fa-379c-4d91-97b1-9e89dda54bb0"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item966a76d3-bdd8-4dd9-8176-c96ed1bcaf70"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item26f9c3a2-a2df-4f6a-b131-3e3c88d408ff"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemc1d50588-459e-4f15-b2c3-34219f2c9701"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item6eec939d-1c06-44ed-9e3c-c9366d24ae5f"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemdaf03c2d-ea49-4f5d-aed9-544182b27c08"),]),
    getItem("DForm Modal", "Item3a5ad9ae-2814-4f3c-af38-782c9549c889", <FolderOutlined />, [
        getItem("Async", "Item0a13db8f-c9a7-47b0-bd60-6a5376c3cf1f", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item05a654c9-c5ce-4bb1-87fa-07acf33f4848"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item4de2c73f-e775-494d-ac04-c8174d876e98"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itembacaea74-5bcd-4f14-ab3b-e172774c894e"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item0f588929-cfc1-4379-83b6-a7f64c3df62c"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item74748620-860c-4bd1-9250-fbb1f99ffe13"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item50b408b5-0cba-408c-847f-818513bbc6fe"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemfecadc71-1af1-45ca-a8a1-7f0ee6fc7806"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemb7ab6fbb-a105-4bf8-a7c2-a88e7693b09a"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemaefda5ad-8cd9-4e1e-9028-5e16e1580948"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itema4054bb8-c99b-4164-9a72-8b3ffd7ffef0"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item482b6024-f67d-4023-8139-00c7dd657abc"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itembd4de3c0-c395-489d-82e8-b142139cb9ee"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item65a070c9-bcb6-46c8-9af3-ff687a4f9c78"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemded4e07f-d265-4224-a79d-aff7330bba3a"),]),
    getItem("Tabulator Grid", "Itemc4559532-8687-4ad9-9c3a-08c39de04840", <FolderOutlined />, [
        getItem("Async", "Itemfc05605b-0ea4-4721-b7d6-d88660d8150a", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemdc355cba-cae0-42cc-bcab-757c77f3d4f5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item70c060f2-ad32-4006-811c-047bba0eff5f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemf43382c4-87f5-4166-bdeb-e612b4df5289"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item806530ef-318f-4d61-96f2-86be215369c6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itema8935b4a-8559-471f-ad97-a09ca6afa1cc"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itembf8c7d1c-56f5-4e6b-ba2b-fe79a2ea3025"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item556865cd-c0fc-4120-8faf-a5bc17e1b33d"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item69f5d736-5e29-4604-89e7-4ca17758ea18"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemaebc08eb-380f-4d80-9afc-94806a205224"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd6267504-2e28-466a-8a98-96f67bff1805"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item77b76698-035f-4a91-8bc5-f4184db2f486"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemaf26e2cf-11b7-4973-a33b-0fe4b00880fb"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item1af07f62-2ebe-43e6-ad51-d9fd27a79ae1"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item77381ce4-a3c6-46d0-8ff3-fdc16a68ca3b"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item249a0ed7-1696-4bdd-a075-4326184c9ef1"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemede09cc7-8ecb-4c16-8fbf-4dcae6269194"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item10317beb-e510-44bd-8f5f-746f962d553d"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itema17f20b5-9fad-4a09-b29b-babd7e030f3f"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item5b9b6d18-e291-4be5-8f1c-ec58e109f5e7"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item7f9e5ec7-19c2-4fdf-b50b-dc88c48ad0eb"),]),
    getItem("Tools", "Itemceb5e5c2-153a-4585-b158-f4950e69db04", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item0262cb2a-2249-44d7-9e8f-5d357260c34f"),]),
    getItem("Tree Select", "Item321d3e29-ddbd-4bbc-80f6-98da421f11a6", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item0450a3bd-6c28-4239-97fc-49348ffc8657"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item7cbb361f-23a5-4f6c-b1d3-7ecde8cc460a"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item1c63824f-8af9-497c-89eb-735d78cfa811"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item58c2e5e3-31f1-4952-b1ef-3b8337595faa"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item161721c6-e70d-4670-9420-508c38cd679a"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemfda25d9c-63bf-4e58-9acc-73a315a65d3e"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemc1da6879-1eb8-4548-9605-01bc80c58368"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item5fc78695-4511-4d97-acc4-7436b53d7b2c"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item3d4bcb72-7ff0-4758-82cf-4035aff14a85"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item82893c79-5583-4e0d-83e5-0ab668613ac6"),]