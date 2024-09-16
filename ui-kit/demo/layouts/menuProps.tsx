
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
    getItem("Other", "Itemb39de533-009a-4d2d-bb36-f81529d9fa92", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item50b3922f-5421-4cf8-aab8-ebde1efa515c"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itemf2b27384-a9c9-47bb-ad99-b0bb604ee3da"),]),
    getItem("DForm", "Itemdc05add0-bc0f-4fd3-bc15-a6ac83df90d9", <FolderOutlined />, [
        getItem("Validation", "Itemf93d1de1-4d33-48e4-be4f-4b1db17dc10c", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item8a306d3e-df04-40ef-a9ad-580cd2ed83cf"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemd19297a6-eca6-45e2-800d-a551cede3abf"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemadbec564-f323-4c90-81a6-e4dac94b9905"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemcf601ce6-7cd2-4f88-aa0b-c481aa5331da"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemcff61989-700a-46b8-b867-eb869ccc4a3a"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item841fb1dc-4cb5-4513-87ca-937cea3e6675"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item9d12a7b9-9162-4515-8adf-7d2522406129"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemf72e5457-21c7-4506-ae30-c9fe6ee11cc6"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item53bea475-52d8-45b7-88e0-f9b9f9466735"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item4e473933-6569-4e64-9567-696f8c3d82fc"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemafca811a-8f75-46e1-a8e3-04d66a0cd342"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item6e671094-e06a-43eb-998f-aaac8c635d17"),]),
    getItem("DForm Modal", "Item9a7319be-6e2f-4c39-b2a2-28fe7f6003a3", <FolderOutlined />, [
        getItem("Async", "Itemdae87eba-b962-45a5-88bc-1a12f2d90f11", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item5561b4db-d588-4f03-ba18-0c2f8d0a9102"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item7a00f626-0b79-4b73-816c-126cd4377b3d"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item51d1d4fd-65e3-4653-ace4-8429ed60a56c"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item82ab8153-5eef-4ad3-9cd9-3d79f7244bd7"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Iteme352f1ca-bdd8-466a-bf23-8f078df7c440"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemc41cfd6b-8baa-421a-aa4e-1288b499fa24"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item4e4e833c-8de1-45f7-888c-63b306ece0e4"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item65b56b27-2507-4db5-b4d0-84270249bdef"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item50ed0555-b500-40fe-832b-abab6c775ea2"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item23fd7f82-f611-4d1f-8e2a-7625001f1846"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Iteme8b0e19d-fca7-49a4-9fd2-e2606fcad8e3"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item2c99a872-0da8-42bc-a2f2-34f1679c293e"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item631a4fdf-145e-4a0f-a414-228f1c880ac4"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemff19e891-6d72-4ecd-abff-a77f95c66b86"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item07203e58-259c-4610-a7d6-ce651721820e"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itema593554a-f345-4d5d-ad4a-375ccdf728df"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item12f40ddc-5616-442a-a53b-d24a11269b7c"),]),
    getItem("Modal", "Item0841b7ed-45bc-4abf-a197-78f18fdd87df", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item4c058721-5c80-4d0b-8c84-b38d4ce62f3e"),]),
    getItem("Tabulator Grid", "Itemae83e004-6626-4bb1-bd12-a040d7cfb5d4", <FolderOutlined />, [
        getItem("Async", "Item395a4e0f-c93d-41ff-a6ef-84f995a0bedc", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item09b75ad3-c43a-4c81-b70f-14492a4b074d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item71f6932d-d0c5-4ded-af3b-c79f4f23efe0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itema1bce94d-3844-4078-a542-b27c6eea894e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemc4df3c98-31b7-4119-b457-30524f51b78b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemb32e4837-0954-4b3c-9e54-54f72b6abdbd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item2430b4d2-f4ca-4140-aa6b-32f81a4d362f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item2060bdce-73c5-42bd-9c4a-f0d1bc94eb9b"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemaab6a3f7-f0c2-4c80-be55-62fde3cfc4d7"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item81918c84-477a-41d6-a8f0-d11b12ef496b"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3bd25359-1b15-4e17-9c6c-778d05e53c57"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemcfa8e6c5-1c85-4831-b1f5-7b6fbc28df54"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item580daf61-8345-416b-ac6b-cd84dba78cc1"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Iteme58638f5-f4ed-4fd7-b4bf-6f33e6f24de5"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemffe4c22c-aee9-4727-965a-9bc14158680e"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item17fd0579-a866-4231-aa9b-60f4e67c2220"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item1e425ae5-6d68-4aa2-af26-e33c6f24b0c0"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item1808ffad-882c-4903-9103-1707e4c19dac"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item12012aec-5c86-4597-a966-fe58553681ef"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item83edbaf4-8336-46bf-80d0-e52a1571132e"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemac5bb591-f496-4476-9ea8-e712af25760c"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item14314a7e-7110-48df-b392-2acbf8151b96"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemd61da311-b603-40d4-a13b-2869cbcaa608"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemabe8237a-cde7-40d4-8a42-4bac42bc56ae"),]),
    getItem("Tools", "Iteme902a56b-6a92-45c5-b0a1-a7ee57546394", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item6af43cfa-bb38-40d4-b64d-4b7fc2c06873"),]),
    getItem("Tree Select", "Item9458d488-27b8-433e-a605-def061656fa5", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Item19d42f3e-d1ab-44e1-b014-ea0852b4bbfd"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Item53549253-6549-43da-9b39-13aa3f2ea60b"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Item559219d4-96de-4919-ab65-d58e49555595"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Item658162f8-93c4-4154-acfc-38f5e5a91156"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Item7234ccda-9363-40d1-ac69-5eb62b22d85e"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Item323f1c50-7bf1-4bb2-bf51-094c236ddea0"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Item966a5ac8-e322-4c65-9a8a-34d51f81c6a9"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Item898f29a2-225c-4238-a5d0-8e11e984bb96"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Item334cdaae-70de-482b-bcb0-7592d791645b"),
        getItem(<Link to="/treeSelect/WithFormAndNodeRenderers">With Form AndNode Renderers</Link>, "Item03b69fc2-cabd-415e-bcfd-480195362b62"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Item56bf5beb-3ac9-466d-befb-7dbf7c358f26"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Iteme6e59cd8-ef17-4c74-8815-22b00e4b5e0b"),]