
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
    getItem("DForm", "Iteme8f69a42-8e3a-45f4-93d3-fdc6a64137ec", <FolderOutlined />, [
        getItem("Validation", "Itemb455377f-df1c-4c0a-8b2d-2020882ef69b", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemf0f64cbf-07cc-4797-9f68-5348f27b9e66"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itembb03cbc3-4e59-4747-9edd-f9bcdcaff6fa"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itembdd0f0a9-675b-4de9-bd64-c22b58a5ccd3"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item46f367b6-fdd2-4a9f-876f-080e6bbfc4d4"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemf0f18724-a06a-48fd-87c4-8ff68ae3a2a0"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item9686f2ac-ad30-4704-ad36-b40993ecec88"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item7f1b3087-efa6-4bd2-b388-2cbb7570d63d"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemc4bbddff-68a8-43b4-8ced-130d5051d28c"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemb2b42679-6a40-4778-af2b-a6aa78f816a0"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item2b348778-3253-490e-96ad-13ba06b41725"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item36147ce4-bd5c-4bdd-884f-ea7ffb0026b3"),]),
    getItem("DForm Modal", "Itemf66e92ee-94c3-41d1-a7d5-4672d10db731", <FolderOutlined />, [
        getItem("Async", "Item0a2610eb-11af-4aac-9ff3-526d75dda34e", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemcf77660d-c190-4201-8984-d7e2764e6b39"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemcbb0e003-1a08-49ab-b9dc-56c4260f2971"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item3579ce44-4890-45e5-b9e7-548ec8ad3dcb"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item68af0ff5-3f99-4a25-ab8f-a58e3a565f72"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item826de438-1106-4656-a605-267df926d908"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item179e88f9-dab4-452f-91cf-f5d52c66e354"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item6c5df2c6-e8dd-4890-9606-c345c17db29b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itembc2f16fa-0d52-4a6d-8aad-32195dd96412"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item8f9cb47f-50da-4fe0-bf01-838e0c67dfe5"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itema37a681e-ab78-492a-a933-1c894cf7b5b0"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Iteme7fb7778-ae38-47d4-bcab-03ae3a88fb6f"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemd5df4897-d8fb-414b-8980-6fbab89e3d99"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item7a2f67b8-9d65-452c-9e40-c815a345fbfb"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itembc56bf19-febd-4ce1-ae82-45a47cd20742"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Iteme960b1dd-6b39-4d29-b139-383b48e9d28f"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item30bb96e0-9049-4775-b5f4-16c297dab23a"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemde4adfc4-7e8e-46bb-88bc-7447d9716c35"),]),
    getItem("Modal", "Item507e15a2-d791-47fe-beaa-bb3cee9f2236", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item0c2d8d40-fe4a-4056-8c8e-416d670d18f1"),]),
    getItem("Tabulator Grid", "Item40ac7f58-59ff-4625-9193-30501b567242", <FolderOutlined />, [
        getItem("Async", "Itemf42fc78b-1c52-4be4-94eb-eac0b94e7f31", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemdb5bc8e2-a5a7-4dd7-b9ce-8eed7cc00cbf"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item3388f0da-36bf-4d47-936e-181ec2e8e4db"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item2ef4b0dd-0dae-484c-8bf3-45e325c96da7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item9c3a9e6e-0e40-44e5-b6c1-1fa43800fa68"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemd7dbb795-a5ab-44e6-a7e5-615bf205e140"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item3f10eae7-adc8-4d90-bceb-6f0214c4ac1c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item944c7882-49e9-47a7-a3a5-ad3e84dd748e"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item441897a1-2373-4c4a-aae7-bbe54d0e7807"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item33ef5f18-8fc2-4112-8daf-742af7aa871f"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3852f4f2-b448-4bdf-b9a3-a4c972586073"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd18b02ef-7961-4dc7-bff5-b0686717d039"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemead30feb-bc8c-4b1c-aa03-fdb81668cb1d"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item49ba1102-3d60-40ff-98bd-fb88c460507a"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item52162656-90d5-4628-b698-b69eb925bae9"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item35dcdcdc-50f3-4641-bd21-1258ac81548b"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item9fc530b1-ff1a-48c8-b059-519a4a0518fc"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemf169baec-41ef-4e83-b865-a96e209279ac"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemff2d3508-fea6-4e65-a456-99037cb2eb87"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itema14ce99c-dd43-4b66-985e-d9b45c8de833"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item346344ee-bd12-45aa-b836-a211055b1512"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item3bb35429-670a-4672-b60a-5a113e1bdf53"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item7d848270-b92f-4f9a-98d2-bb0526758ef2"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itembd1d985d-5185-430c-bf4d-90e65671a1c5"),]),
    getItem("Tools", "Item753a06be-b3a3-45a2-9e7a-1429d9e4e57f", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item1d0bae93-5043-4075-b4bc-0d5895ac2be5"),]),
    getItem("Tree Select", "Item13b890c4-3e55-411e-b1b9-7cff3c46c10a", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item058b259a-3461-4fc2-adb0-998b3ac3e8ca"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemebc35960-dee7-4dfb-8652-0592ec9a4982"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemb8079536-9045-4aa7-b87f-a8f5318ed70f"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item5dd2db46-9eca-44be-a492-e7b11272b4f1"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item50eeee12-2cfb-4092-943b-7fbc1bf0a1da"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item79520780-92ca-4148-83da-6834acb6de70"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item67b06a52-e7e4-4550-a64d-b4aa11e60b2c"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemdf374259-97bd-4002-aac2-fc88163e7f12"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemadb116e3-84b9-4205-ab8e-d03dc037c072"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Iteme307879c-1aa2-4e7e-9af3-24a0a6c2117b"),]