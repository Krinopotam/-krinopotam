
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
    getItem("DForm", "Itemb3127821-3f33-4f6b-943e-a70bce8190c6", <FolderOutlined />, [
        getItem("Validation", "Item34ee12cf-06bc-43f0-9a4f-5f4326b04ea0", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemd434d21e-1c81-46cd-9ac6-7d24d1efe0ab"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Iteme9ac50c7-3a92-4717-adc9-2c3d15bbe8ee"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemc6887514-b242-4caf-a359-09697e42bd1b"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item15b86a66-024c-4da5-8716-17cb3ccf4e88"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item62dfcd2d-1e3b-4411-b27a-02d9cd4f57b7"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item39a216ae-0a9c-4f3f-8a08-8058cb666e8d"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item78017525-d99d-4150-8542-3c358ab2aacf"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item724bab56-ee10-445c-ad40-50dd30fb252a"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item5363d6e7-f6f4-4368-a3e9-c979b1ff9722"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemfb8c6563-c78d-400e-8f3c-548cf79d57b0"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item53287ee5-2a9d-4545-a311-787ff08b4507"),]),
    getItem("DForm Modal", "Itemf6f30244-efb4-423a-9e70-5f81d8945a8f", <FolderOutlined />, [
        getItem("Async", "Item834a9c10-3fa8-48cf-ac10-47f8434dabdd", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item1c53c244-dbd1-4b0a-861c-46cc5d4d9fad"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemd202ec94-b84c-48ad-b79d-dc4f19b34774"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item1508f440-57bd-4772-97ce-68ca1aa3415c"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item80891573-6614-4467-95c8-8438586fbe67"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item208c3b2b-f4d7-4d97-a7e7-882a63541e5c"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item2a856733-a933-4c8f-ae58-3e58a8cb1c58"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemb607b06f-8593-48af-bd40-a742f8ac40dd"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemdb251698-9cc7-4e98-9063-8e2bdb40ed72"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemd39368d2-52b5-4b3d-840b-358a80c851ac"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item23729d9c-25db-44b6-b2f5-992437a8733f"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item5fc0f4eb-b277-458e-956c-602b691698ef"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item30e6c060-7744-4842-acb2-3b11ed2b5ab1"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item0a2d21f6-32c9-4015-9db7-9d2ae312fe1e"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemac7ed8ed-5c56-4912-9a43-286d292b27be"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item107c513b-6cd8-484e-b4c4-6d9c53336826"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item210c43bc-b8f5-4a58-817e-2efe40bdebaa"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item945ecff0-dc0b-4e9b-986c-160c41e2f545"),]),
    getItem("Tabulator Grid", "Item2780570e-ce78-4eef-8c32-140a49df6d66", <FolderOutlined />, [
        getItem("Async", "Itemea0f1140-0079-463c-a3fd-63dc09ce053e", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item6acfb9ef-d25f-4f78-840a-ecdf9cba65c5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item1dfb9655-2e5e-4e3b-85fe-fdbc429e783d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemc4e9281d-c7a7-4ae2-8306-4151033076bd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item6c11fa37-6294-4475-9194-a4ff612883fa"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item0f6f6ede-fee7-49a0-987e-ca377c113953"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item328feb84-4104-4acb-892a-d0bfc1adc6e2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item252804af-cea0-4af0-940d-333ae6874e1b"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item0cf71b18-469f-4eeb-92ef-6cf7468b5864"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemc0f3da41-eb2e-4212-a03e-9bf5e5a432a0"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema44ee988-5de6-4137-a951-550d3e5a94eb"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item3cb88958-3198-495a-bea4-e443ab138328"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item82289c5c-28a4-4c6d-a4ee-1ea974618457"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemd25ec595-673b-4b04-8ef1-51b5cd5ce75e"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item54288fad-a38b-4b1f-a879-6cb15c2f5445"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemb162c5b2-0328-4c96-8ab6-1f42930cb9ad"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item6ca97a7c-8a65-47ec-9f96-56b66a5d3e9a"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item0437206e-8736-4eb0-8e15-121765583a8b"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item75b78156-7c2a-4763-ae22-fdc1adf2156b"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item285ee871-b69c-4c2c-89a2-a5ffb99a0e68"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemc8b6d176-46c4-4a01-a99f-e332e4f3ef51"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item3af7a8d4-099c-4af0-b7db-c2ea6a1e9627"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item36c44ae4-7822-4de6-a23b-b20bc1738148"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item2326d0a8-c318-469e-ad72-5da30c2b01b7"),]),
    getItem("Tools", "Item0a2b08db-b62e-4e9e-941e-5726121f8f76", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item231c5474-6890-4208-bf4a-5b243bca440c"),]),
    getItem("Tree Select", "Itema55a3df0-5e6e-438c-a8df-fd59a92a48ef", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itembccac22e-3456-49e9-b376-78e90b5f77b5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item99079c09-8d8d-4656-97ac-1afe37f2226b"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item0214ab33-dfd5-492c-8d33-34aa701dd407"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemfb95478a-08fb-47c6-84c1-49ec8ae54fe8"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item6fa9e8f1-783d-44b8-bbf5-cc9f7faaf928"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemb73f79cd-51d2-485d-b9d7-f24a2ed1aae1"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item2eb380cf-8409-4822-991f-78fe5122d00c"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item8eac22b6-4d06-426f-8f6f-88825491a3c3"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemd8cb2f22-15cf-4c2c-a76b-4092f0852650"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item22c50c97-96d7-44e3-8672-5f93986fb3f8"),]