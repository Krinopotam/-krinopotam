
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
    getItem("DForm", "Itemf534b4c5-b1c4-415f-b0dd-bc2b55834e94", <FolderOutlined />, [
        getItem("Validation", "Item4a60a51f-8988-45e2-aa0f-36a6171ff973", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item42371dfa-cd1b-454a-a616-f837970e4fc1"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item589f49b9-471f-40f5-b6d6-ae1d7a9b490e"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item415f09fd-b9db-42b4-a864-3a5274a60e5e"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item967dfe75-b914-4344-ade4-ce8de561f8ff"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item60043c28-1582-4096-a6cf-1eaeda3fcda8"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item53dbd9e8-9d9f-44e5-bd28-8c0a52dc583f"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemcde28751-1dd8-47f0-bd32-766fee2b5848"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item735de62c-b95f-4b23-a3f6-0cb576de92ca"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item9ad134a9-8d67-4a38-b891-f23a1333cc64"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item0c3987f7-2537-4c06-a7fd-49ab8a18adbc"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item92cf5be4-0e35-4451-bc0d-c07c52f185c4"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item3977ebcd-853a-4ece-88e6-7d89ceb17911"),]),
    getItem("DForm Modal", "Item19edb5d8-2f0a-467e-a043-fe05d6bb7e4a", <FolderOutlined />, [
        getItem("Async", "Itemf416ac1f-d787-4d24-a09e-0b931f346d8c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item6287a407-b13b-4f27-9eb1-2522a8604894"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemc2642fcf-785d-47c4-b92d-ac63910b382b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemd61271a1-3b47-40c7-9c66-96169158542c"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemc777d277-3f5e-46e5-9307-7f53a62ba751"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Iteme0948a07-8b42-480d-8d0a-428b79d3770d"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item0251437e-7b50-45c0-a046-4362758d2cb8"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item523e19c9-8567-4b6e-867c-f10be3f4fec8"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item41ccc0fb-fa20-426e-9a36-849bd9df5594"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemd66e7d9c-ee7b-4194-99da-b550dbf76571"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item67eebd80-dc76-4942-9485-5006a28f4133"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item60af1626-3862-43bb-ad28-71fd7d73befc"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item04192b88-f187-432f-85b4-2ce55686e01c"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item5f89769e-1874-4526-b19b-26f32a1780ca"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item0d220282-a563-4cb1-821a-9d366d420987"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item3dc3ce4f-2b7d-41e0-a0f0-526df1355fd0"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemf393bc24-2dd9-435c-98cb-379282318301"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemf70229a8-4c8c-4bed-9b9b-2dc1a722bb34"),]),
    getItem("Modal", "Item3085a268-9c3c-4419-a1e1-21175087ba41", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item4a5df9cc-452c-4ca4-a9fa-687d803e7e97"),]),
    getItem("Tabulator Grid", "Item855299a7-7654-449b-932d-dfe0d6b6bf2a", <FolderOutlined />, [
        getItem("Async", "Itema210f1d2-388f-4ced-a515-8697126cb3d0", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item00fc76d7-1c5b-4a3f-94c3-b5a8744d3f0b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item784ddc96-35fc-49c7-a2b6-fa0828cd25ae"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item2e3fb784-8730-4bdb-9c57-77f5a27a3e05"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item72e94d2e-3df7-455e-a7eb-c11c80603cea"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemcfad5e22-a075-4e58-b1bc-c634c082b981"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemeed907ff-f9fa-45c0-86ea-c1218c2e5e2b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item4e49dbf1-a115-48a1-9dbb-4d2335e06f82"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item9f49a3c1-7ae8-4ba1-a24d-0070d13233ba"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item10abbb3c-9e75-4aee-9d14-bcac4ff4c0ed"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema3029d55-9a38-4489-aeed-d3a0e6e5d4bd"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item3ba71203-e23e-4e40-9e19-1ea4446e212d"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item67aca6c0-80d6-487c-8749-872c5cdf4871"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemf4792663-5a8b-4825-9d2d-53e2fad99d17"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itema826f840-1d68-4e20-95a5-e2ad6d1f1543"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itema09474a9-9f34-4692-abfb-eab850ad645d"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item58e3c35f-0a22-4098-a22c-d2e6c91b0f1e"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itema843d749-42f7-422d-9a7f-bf5a68ba0a1a"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itema39f18a8-c943-4797-b682-81d7e118431b"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemaeb20e01-c99d-45f8-b8f8-38f68b2e0c84"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item6c8b89ac-1813-43c5-8aad-99adadd7b24f"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemd72b110a-506f-4deb-bc51-a77ab0040d17"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item1cc8efe2-826f-4f9a-8eb4-517a483d4fdc"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemc7e97519-a899-4b37-a807-7f5415e7548e"),]),
    getItem("Tools", "Itemb537ee99-7cab-4bfb-aca5-e5e5e508843e", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item79defa10-b5a5-4f58-af38-95076a2b22fd"),]),
    getItem("Tree Select", "Item438faca6-34b1-422e-972b-bb2ab083b502", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item0daf8968-bec2-4125-b949-b5cea72852c1"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemcb3197ed-48a7-4043-9e16-c15e90459de9"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Iteme3539b6e-f52c-4d21-9d59-1594e09b3d74"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item70ddc144-c732-4de0-a307-245016ccd1d3"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item66613467-fd3f-4110-8678-abb4032d23fd"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item1789c518-b286-4491-b5fd-63354d3c71cd"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemeb6b3c39-0afe-4b13-a6fe-17dd8145ca6a"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item259a96d0-c95e-4232-8d98-6d3af5c6bdf3"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemabc951b2-0724-44a5-b1e6-d8adb9654866"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itembcfd221b-d3fa-4cf3-bf3f-a08bf2650afb"),]