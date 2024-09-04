
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
    getItem("Other", "Itemb968fb98-e51a-44e2-8779-f8df3f693f11", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item3078db5e-658b-456c-bfe4-e52934925822"),]),
    getItem("DForm", "Itembea1cf37-5bb1-4750-90c7-09915531dff6", <FolderOutlined />, [
        getItem("Validation", "Item0653e848-49cd-437c-a16e-a2bedf153c4e", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemc4e38b64-a0b1-4939-9e17-31043ef81e54"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item355e5d64-9348-4fdb-82c6-c7996ac3efbd"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item52ed2a99-cf4a-4f42-8692-1701c8eedaf7"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemdb7d1bde-1a4a-42db-ae3d-3d7311fb0cea"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item08b66f59-d1f3-4ec2-9ba5-80769896145b"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item60a09d65-6087-42d5-8266-61d567a658da"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item716935aa-9551-4659-80da-cf7a7cf26d54"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemed7f0cf3-86bf-442f-9caf-e3f5f455e7a5"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item4b2a8000-8a97-408e-82f4-711c0e379281"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itema85c7ec7-3e84-4c5c-801c-9f8ba58d5f0b"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item151e14aa-5e39-4bf7-a1ac-704e758e3877"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item68792d08-0edc-4624-96f2-38c8974522d9"),]),
    getItem("DForm Modal", "Item86c2cd05-a1ad-45ab-989f-5213548dc097", <FolderOutlined />, [
        getItem("Async", "Item5a2a69d2-0b7a-4f14-a816-14090e299350", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item7e308ec4-1291-4303-abf9-7ac969130cd0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item1ef9e3e8-d03e-49b0-a503-e495ae16beee"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itembd8e11bb-5680-49fe-b771-8928a3394d1a"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item6bb017d7-8275-4c22-b332-0bf5a8b3a03a"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item7a763341-b7e7-434c-8904-c38320c4e2a2"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item8ccb9135-3dbb-4773-a8e4-1b29a4f9e7c6"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemf0a9b785-00df-49ae-b76c-c2dae36a8d50"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemf5727ff8-5c87-45be-ba71-7ce4483abe71"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item179a76e8-6fe7-46ef-bc8d-f80156cf3b14"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item16294e35-638a-4517-b42c-1d464625bdd3"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemd63ae576-08dd-41ff-8ae5-9a227681a81a"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item80f2674d-04d3-4037-8a1a-9a1a425bf77e"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item8049aad1-e31a-45eb-b59b-8df6847a19df"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemc0471cca-30a6-4346-b1a3-476b5707263e"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item7fa28dec-74f7-484d-a7a6-ed48bafb18b2"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item3b58f1ca-a439-4d66-b6f8-5cb87af09871"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item9d3d2448-ae4d-44a4-bfb9-348b55539a67"),]),
    getItem("Modal", "Itemd5cad370-a700-43de-9505-4eaade823ac6", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item86441bd4-63c0-45cc-8405-22ee93dfa429"),]),
    getItem("Tabulator Grid", "Itemb266e2e4-725c-4638-9ba4-7493171d1408", <FolderOutlined />, [
        getItem("Async", "Itemc6afeb9b-1365-4404-8541-74fe4a534c3c", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item950aa058-abb9-4750-9934-45ec016faba3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemdc9d7de3-cb56-48da-b727-9302cc16d1b9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemdeb1a452-a30d-405f-a588-39619a489a06"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itema575469d-5110-498f-acf1-a25caed889cb"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemc8d0c426-7737-4c8c-970a-d2273e24047a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item8865229e-1caa-4c42-8980-961a0a4cc31b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item643c5240-39a0-4579-afaa-7f5503c9d999"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item8b4179d1-5724-4c96-b0bd-f2a3a58abf70"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item312e146e-6709-4273-86d5-2d9317537240"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemb6128873-c5ab-49d6-b236-f5af7228e70c"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemfd89caa8-9c0c-42ce-9e53-b651e5b4aad5"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item4610b74d-fdb8-4798-a891-2a0bcfaaa355"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itema172b2b7-d660-417d-a6b2-2281c87b7b30"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Iteme39cb8a7-48cb-440d-a9ad-21fa8466891d"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd9ec46f2-bfdb-48e4-9dd8-bd117cc0e702"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itema0e3780c-94a0-4f2b-8d0d-7202964e9bba"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item2aff8d11-2b9c-4a7b-8483-8e222aea5a0e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item304eca7e-d9cb-451d-a7d7-277422490f84"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item001b529f-908b-43ec-93bb-282fd84f6508"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item2d126b7d-48f7-4024-a980-3620cafb0346"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item1d2cba17-735a-48c3-a899-72ac4dfc65dd"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Iteme799b83b-3ca5-442f-8717-064f6a48cbe6"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item955d0408-3bfa-4ea7-b68f-f5da08010d07"),]),
    getItem("Tools", "Item0cc98405-1c3c-4274-8fa3-9c3613796435", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8934c03a-4787-4e6a-8417-18278184d6f6"),]),
    getItem("Tree Select", "Item77cbe69b-2c7a-41c3-baae-11563e9019ad", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemb48e1b4f-d152-4db6-94a8-79da7bd6c9d6"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item84f7a64b-69fb-47a4-81d8-7c41a04b35a4"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemb34e98c9-055a-4ac3-be9a-52346193bd33"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item96cd3453-77c1-4a09-a39f-f47866f5a104"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item22007b93-ca99-4abc-91c4-96792152ee4f"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemeb972299-7e14-4eaa-a679-4432a32fb721"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itembddeecf7-4f87-4873-9742-400598983a37"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item8a7af8f6-2130-457e-b1c4-b7fd6feffd1c"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item9eb20f98-b260-4e6c-87ce-71ccd6822180"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item57df70d6-0c8c-44bb-89d1-83ce39a1d6cf"),]