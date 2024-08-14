
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
    getItem("DForm", "Item1a148868-97ea-4468-94fc-46f50cd573e5", <FolderOutlined />, [
        getItem("Validation", "Item41ad2089-75e6-41e7-b8c3-1bfce4020b50", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item4b893d13-c287-4145-a70a-f9120e6c676a"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item26922f88-1930-4752-984a-27c64f44a3c8"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemce4721e6-3832-4516-94d0-e21c8c39f852"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item4f268fcf-b9fe-4783-bea7-edaa5acb0bfe"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item68ffdd80-7a58-45c4-8db3-bfdfaffd94d6"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itembf0e5f1e-876c-468e-84e2-346a1f00fb93"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item7c71cb77-091d-44e9-99ef-0ec95411b818"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item50c36a3c-af82-4c50-83b3-86e846b8ca9a"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Iteme5b8c535-6686-45cd-9a78-a3e9dbd9c9e4"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item46d330a7-752f-4cbf-8710-1828a2326c0d"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item2aecdc77-4403-4812-a2ff-9fd7b60d3499"),]),
    getItem("DForm Modal", "Item22d7ee03-ac29-4547-b925-5877d929a30d", <FolderOutlined />, [
        getItem("Async", "Itemdd6b58a7-2fdc-4fef-8800-e37744d064b4", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item2673a7f4-c9a1-456e-b782-7fa9a49965d0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item472ba866-4f27-4c0f-be54-b48648374c05"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemd776e4db-fdc4-4b40-91de-65b8ae8ccc1a"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item84591e34-b69b-4bb1-ba6f-60975101307f"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item8600818c-6384-480e-a7fd-99b95c0249bc"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item45e6f921-bd77-46db-84cc-8eb0507a19d3"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemfbb4315e-9b16-42c8-afb2-0fdb0f1cdd2d"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item3b5eecf8-5a3c-4fba-8a39-1a50ccea72d2"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item936f213e-3ad5-452e-800c-c4e77469afd3"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item0caae5ba-0b71-4db5-b22d-530175da2709"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item3deaf614-70c7-4b9c-b12d-c638e8241f66"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item08a9cce0-90a0-4100-9f3c-b3179c6150f0"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item6df7bf11-3de7-4d2a-bd48-7393b13cf6c2"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item2ee4aa5e-f63b-4164-b1cb-d19c39f48851"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item29a1145c-7883-4eb4-b57e-6518d0faaae5"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item8c00628a-4e05-4f32-b220-1e6b0691de3f"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item372f45fa-8695-48c0-a917-e4ad69dfcf1b"),]),
    getItem("Tabulator Grid", "Itemac4e533c-4743-4688-b181-a125a4cd8a05", <FolderOutlined />, [
        getItem("Async", "Item298d1b89-8d02-46b0-a2f5-dcf70f5fcb08", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item65097532-29bf-49f4-a34e-c63451c1d6bb"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itema814c3ab-c8a9-4011-88a0-cebe12cd1d36"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item6b629396-87e1-47be-922a-58fa82824cff"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemb3a5944d-e126-43a9-bc23-259dd17ec37e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemaf353369-7f6c-4f20-b5ab-df8c2d72c8d8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itema0d743c9-3287-421c-9e09-a2a930e980c1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item6b8c4e18-293e-430a-91ad-d7a70498be43"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemd9bd5e64-a898-4bb6-9afb-d88b7b4dc422"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item4ad4cf2e-2453-4d6a-ba5f-528d96f13277"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item09d9f19b-0f75-4985-8c0b-ad74de1d91eb"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd70144da-49de-4420-8a4a-a3e7e042e378"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item3c42c6ea-8159-4bcb-b569-2ad8700c7c0e"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item8c61b9a1-bf4b-4d4b-8580-3d4611f5dcba"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemfdf5cc56-d826-44e9-baa4-bb095d2c4e76"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item906bfcb3-8820-4ff5-b156-ab7a6529332a"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item882889ad-58b7-4acc-a432-2ed562cf0613"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item33c9667e-a6e2-41d6-888a-65373cf07a28"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item16b3352c-56e8-4bac-8ae8-7dad72a95691"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemb8c00591-5bdb-416a-a615-2c4c2684fb72"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itema0763a01-6534-45b7-93eb-2c1b68b244e4"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemde02492c-fe29-40e9-9590-f5c316d55524"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Iteme7c62083-cf37-4857-8184-5eabdae3aef0"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemc7e5d420-fc57-4524-ac94-99eb7fcda1bd"),]),
    getItem("Tools", "Iteme9a3730c-20c2-4042-bd74-34626f721ba0", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemca1269ae-aa8e-4fec-9c2f-35e28adbdfe9"),]),
    getItem("Tree Select", "Item118eac7a-2ef8-477a-9fb7-b99b7f7456b8", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item76128aa5-c191-472d-92ac-1e251d5debb5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemf9a939d4-7546-47d2-b874-c568f3988337"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item8ecf7b26-8bf8-4279-b094-1862a797e516"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Iteme9a759f2-e32f-43a4-8b12-648ed837324e"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item84d688fa-72be-42f8-a92d-bde6baa071d2"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item39f8bc16-03ed-4405-859f-4b35ddcc6dd8"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item115c6ee5-8c9b-4bb1-9f3d-1862c059772d"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item6959ec49-232e-4c17-9bb2-6246ac63c9c4"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item88186f5a-bf9f-4e4e-b00c-2094d8e79f8d"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item65d9250b-0ecd-414f-8906-b35465208aea"),]