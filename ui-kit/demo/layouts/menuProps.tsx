
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
    getItem("Other", "Item7b0e450b-af82-4f7a-b82e-577571b3807e", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item7b81dada-a66f-4c2f-a8df-df6b1b380134"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item546be6ad-6cbd-4064-b5f5-cd0d12230fc4"),]),
    getItem("DForm", "Itemb02b2286-297e-4af0-8b1f-fecaa0001ba5", <FolderOutlined />, [
        getItem("Validation", "Item9d6f9439-6643-4faa-9582-0260d186cce2", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item1c9f4da0-f237-41b4-afce-daa6863b8a15"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item40e6aaad-fe17-4a8a-9984-ca57eca0074b"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item01b35278-b4a6-4204-a145-f3a0a17989db"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item71c63a89-9436-48ef-8667-4ecef26f1705"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemec374a13-a7bc-432d-a5c7-bafadd4a6409"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item67c5f8cf-5b4e-4331-a30a-7e5d0b0cc5bf"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item294cc0b8-be27-48de-b7b6-b2e8437e084e"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item2ef56006-96b6-4924-8ea5-1d68959ccc80"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemc1530cc5-b759-40ce-a891-98cc2facbdb8"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Iteme78a97a2-0edf-4b65-8960-bb81cb7e4a42"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item39e6ab23-df81-4e6e-ad4f-4217d36f93a1"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item36643a52-feb9-42a2-b164-18fa6359be26"),]),
    getItem("DForm Modal", "Itemdb0e0b3d-f5ca-4f4c-91e4-ffe8ad6b9e7b", <FolderOutlined />, [
        getItem("Async", "Item3a4536af-74d6-4bcd-8202-3bbfe6fbbd76", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item7a8f5ef9-4a79-470a-81a3-f42ae7028e71"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item869aafff-77c3-499b-8573-e1c94ca7e4a0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemf38bc572-4780-4479-bd96-47b6f435f2fe"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemfb45fc1b-e63f-4fdd-82de-e23a91640d79"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item57dbcde4-e84a-48df-955b-3262839419a0"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item74aa6c7f-89b8-4bf4-9265-8e60b9e8eae2"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item4abad7a4-92db-4868-a581-9fc792559c21"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item8f60d83f-660d-4136-84e3-43eca3e76033"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemb0686105-1dbc-4cf4-af5f-3934fe3e0d68"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item92f653ac-119c-4d4e-9724-0558c8f7b203"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item0d1f6651-8aca-411d-b1d4-55ca26fcb5ac"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item0c31a5f9-42a7-4b0c-be12-f48d1e53af81"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemb1fbd969-9789-454e-b310-05366ef35fa5"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item0c102bf3-ab90-4d2c-b1b4-1ef8d1d74f5d"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemb78d74c9-cb86-490a-a530-02a128649ab8"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2cd38c58-2b6f-4df5-a398-86836420b45d"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item77dcfc8d-0d16-4aa9-8f81-c0f0c4939907"),]),
    getItem("Modal", "Item5a8a80a5-6cd1-4fa3-9b2c-ca70dbc13538", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item27ef63ed-0306-4899-803d-b89236660cc2"),]),
    getItem("Tabulator Grid", "Iteme998ec73-f196-4480-a88c-a9e3d77bed88", <FolderOutlined />, [
        getItem("Async", "Itemae603db5-aaec-453e-be0e-267d2eb47f62", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item470c2874-8201-48d5-b89d-91b436a7c3bd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item7121e5a0-84cd-45b1-b891-043e8abad14e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item4a72aaef-8d24-4d9e-ad54-f2eefe6ec57b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemabaa8379-319a-45a6-ad71-796115e78e1d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemaffc63a6-7172-4d87-b1c1-9f46db58f1cf"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item2e52a95b-7f7f-4da3-9dd4-ed352e8d3738"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item20da29af-c0ff-4f72-a9ad-88db8679f5b7"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemf919b1ea-a08c-4ef7-b9b8-91b73a3902e0"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item89b5f6cc-fa99-425c-9493-fe95f03eaf88"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemc6c38bfd-a23b-4a79-8ed3-34dbed160c27"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item74121b3d-f2a2-43cb-9a01-0d6b4a54cbf8"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemaaa9da0d-5d3e-4f38-b656-70494d6185ee"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item7038741e-6635-4339-9701-de248dc3f8af"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb872bfb1-685a-4f4d-b2ca-3549923476c9"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd7ca8e8e-4cec-4e74-9f1e-0d3e7ad36de1"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item1f31c695-8dd7-41ad-9e5f-832d95566729"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item8426e2e5-42bd-40f5-b56d-0e719dcc3b97"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item64cb00c8-e9b1-41ad-809f-10c93f7979f5"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item1590666e-4890-439a-b698-8b2d8b249711"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item8ad9fd9e-af27-4129-a7a2-4e767a253663"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemd4cad47e-ae04-4899-ade5-503f73bc97ed"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item56c1512f-1143-46f8-9bdc-fae8ef19ab8f"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemcc32a64d-9783-4e3f-aaea-477666d03a1f"),]),
    getItem("Tools", "Item495fd36c-d204-40ec-99a8-9c164418a090", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item74ad8187-2eb6-40b6-96ea-362f48c20fbe"),]),
    getItem("Tree Select", "Item076bc136-153d-43be-a13a-2ba85ab4a8da", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item30c60333-de0a-4198-b713-8520569a0284"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item772827ed-26f3-4696-956d-e196c442be1a"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item5b44f02d-ac87-4083-907c-ce143123f390"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item361e3e64-41c4-4755-a051-7699f53a8af8"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item3495985f-76c0-4e23-809f-8208191162ab"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item20fcc81a-c548-49e9-89c5-3029bb74e6f7"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemb306535b-5c4f-47a1-a1ca-8a2b866c2d47"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemd1107499-2a75-41c0-9514-623282eeb756"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item3db54c14-6504-4e19-b69a-0a3bc96bb0ab"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemafd84ccb-f3c4-42b2-9c9b-2a628da0b55d"),]