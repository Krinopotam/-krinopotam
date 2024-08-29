
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
    getItem("DForm", "Iteme5e0b82f-9be9-4a5b-a735-d5f7b6083e57", <FolderOutlined />, [
        getItem("Validation", "Item9d31e1f7-02b0-4125-a533-646aafb98c9d", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemb33f3cbd-7f87-48c2-ba5e-5e047b900e79"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemf84e5b2f-6cb1-4b33-bac4-4ef98f5ca434"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item43080495-c1e6-4eec-89ad-8f1db221ea49"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item99e9e683-8a62-4801-9ed0-713317e4a11d"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemc3484b81-0c2f-46d0-8c43-03f4f203b3e5"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item2a6fdd9f-2b3d-44d4-8da7-8285a1e49ada"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemc9b178e7-83aa-4f27-b369-459db1050be1"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item3206e695-d05a-4046-8031-e652e542ca7a"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Iteme29401f5-8066-4257-a25c-8f546e31773c"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item22c8c9ed-b554-47a1-893c-0766fbdd3ec7"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item7e4f67d9-cee2-4819-888f-2a20f60cfc63"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itembb4044df-58d5-40a3-acf3-fc0e6a2cdb24"),]),
    getItem("DForm Modal", "Itema8732fb2-266c-4d3b-9f39-fa5564c2bc35", <FolderOutlined />, [
        getItem("Async", "Item82564ca6-3457-444f-906c-065cad739f22", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item27a1d91e-bbb7-460d-9027-ff03b93b5fef"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemf7b47429-5e2e-49eb-9017-f09bfffb7df5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item78352a23-bf1e-4ae6-b924-1967fcc0b09f"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemd7bdd860-26e4-4d08-a1f2-39729d6e9585"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item2f3a8878-740e-463d-8b48-f53ca47a180a"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item041f970a-29bd-495e-a825-db6ed256e07c"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item761e78bc-e78b-4a76-926e-e4cffea6e6c1"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemcaf1e910-0109-46db-a77b-f9627683f39e"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item85c7bd5a-410d-432a-8b0f-577cac9e17f5"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item96de45c0-7499-4324-bc89-b72dfbbf77ca"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item97b83be1-6aad-436d-b677-ad93945c6782"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemdb684bb7-f64d-41cd-91ca-10d9938dbd5b"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item9a89f994-9c70-448f-80e7-84511406d554"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item65a2368e-5f06-483a-93e9-5a520cfd0028"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemce59e1d0-32ee-414e-a22f-b40b63d74c9e"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2805eb72-1c06-4332-8800-fb5abda864e1"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item4b30c464-07f4-436b-91b8-cb859d9d563b"),]),
    getItem("Modal", "Item578ff1d4-ca0a-44f3-ab58-66064697d7d6", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemaa637cf2-46e7-4df5-b09e-c0a4a11d306b"),]),
    getItem("Tabulator Grid", "Item28168edd-8b2c-4f27-b9f5-3d33d726af67", <FolderOutlined />, [
        getItem("Async", "Itemac2f4879-4676-465f-8be5-6a327b765f69", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item65627990-20b7-4ba7-8bd7-5409a345350e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item6d4e8986-167a-4d6a-82e8-ebf01a8db2ab"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item5767dfa7-ddaf-4b47-a0d1-93fa44401e22"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemfdeba026-bb06-4e25-8558-777e02d879f8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item2f865c4d-942c-416a-bd96-a7261c3bb36f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item67cb2e4d-8c5b-4c78-9df7-62a7c6e04099"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemb6324e1b-9643-445d-a4b9-f0a59d4e73f2"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item1511d65e-3f9d-44b5-9916-a2eda519d5dc"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemc09d0119-e779-4698-b4cb-1564708e6ac9"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item0d9b8ab2-916f-4801-8827-a56e7529bbf2"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemf7bddd58-5b00-4f9c-87a4-7e0e9b4c96c7"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item21662b06-96e0-44f3-af3a-4c140e8a3ee6"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemb84fc408-aa48-46b0-96d4-448b853da8c5"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item5d585a13-c9c5-489e-9ab6-4a8b82348b11"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item2be1cb41-0b6e-4cd5-9e94-fd4cb2c0f4eb"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item95c5fdd8-af73-426b-b86b-c5db972233fe"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item934c5d85-c7b2-48e9-8f3f-8f22cbfeee0c"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item3d9a4c0b-b723-489a-baff-ce3f6bedadf6"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemf135e1af-ed5a-4507-8e58-9611071ae1f7"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itema5ad1531-6d8c-4221-ab68-9ff6f6f90f56"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemeb93e228-1a5c-4152-a79f-13b82cc9571b"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item45a646e3-c0e8-43a0-a20f-0fa1206d4cf1"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemecac9305-8235-449c-9ee4-26134187a024"),]),
    getItem("Tools", "Itemb5193b6d-6c58-4b15-8c29-3a09e12c26f9", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item760f9342-b044-4b96-a03d-5aa824693d64"),]),
    getItem("Tree Select", "Item115d1622-aac6-43a5-a0c9-ec9040b0e594", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item5a1e416f-8095-4237-9776-6a1c13d09086"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item20aa7c77-537c-42fa-b4de-d95f51284404"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item879e7166-fcf7-48b8-8b2e-068e5b355746"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Iteme4948189-b868-4c42-b575-0b2bbae622da"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Iteme4e463ff-676e-4721-af55-872ebc67bc3f"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item36c553d2-7d43-490f-bf4d-f74fa1842442"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item42f69689-e16f-440c-8560-abb685eed8f9"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item6a08ce98-fc11-4948-8e49-7f5174f8e81a"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item7c4fff60-9db4-4971-8e38-6972c4db9775"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemf2ddb928-0d68-4644-bff3-2112a7928178"),]