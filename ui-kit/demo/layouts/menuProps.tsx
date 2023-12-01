
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
    getItem("DForm", "Item273e9d25-8b10-49c2-b6ee-376a2bea8403", <FolderOutlined />, [
        getItem("Validation", "Item2bd7d185-d8a6-4721-9d89-3c26ed614592", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item12198062-3097-426a-958a-50292ec3ce61"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item357dd88e-d929-43c6-80dc-09d6d3b487ad"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item4502e80d-0748-4afc-b9fb-acce9e592458"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item2aa90c38-8a4c-4da0-bc99-6d25ec8f426e"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item187b2dae-3e2b-4b8c-8ee0-b962c8aa7f8b"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item5a93af69-33e6-46c9-8829-3f390706691e"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item29b512d5-fac3-4859-85b0-c592a75876a3"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item805c915f-e9fc-4a78-9584-8168d0741a5c"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemab01151c-9620-45ca-b9fa-1227b3cb73de"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item51f51fdd-f2ab-4c65-b064-a97f6afa61aa"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item7e74b1ed-e17e-420f-b132-1c044fb269c7"),]),
    getItem("DForm Modal", "Item28cee510-73fd-4439-896b-9aecd95368e3", <FolderOutlined />, [
        getItem("Async", "Item0c7fb78f-218e-4475-96a9-afe54a2caf9e", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item01d28d6f-490c-4c98-af67-502227f471b9"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item8088f8c4-6a04-4ae4-b3eb-e581a4481319"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item239a0402-268a-49bd-8d1a-f7ee1a839e45"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item9de8bc98-0ec6-42a2-8b18-3c40bbaeb3cb"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Itemb284a830-20f2-4f9c-a489-97aefac7abbd"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemc8d0d378-b2af-444e-8c2f-b8e48212808c"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item5737535b-334b-46e0-892c-3175c7630fd3"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemc27680fa-6398-4098-8031-fbd477e8e7d6"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemfcc91995-2fd2-4658-9995-2510dfce3068"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemdb2a0123-82b6-4384-89de-7179a82b9af7"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Iteme12cc2f5-23ad-4fd0-a8d2-fa11d52e1918"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Iteme961135e-f4ca-4dd9-9a83-6815d51f4f12"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemc5eb84b8-a02d-46b2-9ada-85be6a91fddf"),]),
    getItem("Tabulator Grid", "Itemd812b9a4-2b41-4d42-856a-728305ea792d", <FolderOutlined />, [
        getItem("Async", "Item6e7fbd4a-9afc-4ba9-810f-e1b970a77474", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item0dec591b-53eb-414f-a99c-862efb0b332c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item297849fa-260b-4db3-b437-3ca29e92efc8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemf9ed179e-acc8-44aa-ac70-2dfdf158582c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item43e20ebd-7233-4a9e-882c-d9ea16fef4c3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item462b6ab4-9742-426c-b0bc-02e207927ae2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item10d14d59-3f84-4ef7-9d24-5bdd9facbffa"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item45cfc487-55a5-4c91-8082-8d51bae299ee"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item88ceb59d-0a6f-40bb-a12e-6ac0ffee24c0"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemadc91cad-c2c7-4c98-b357-a7b414a3203b"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item046d1cc1-b8a0-4fa3-bebb-6bc08621e620"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item3d0346e6-b2aa-49d3-8a17-499bde8b5fb9"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemafd56087-8e3b-481d-a9bc-50e2a934e782"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item21c43e3a-60e2-4bf1-a098-110b9dcfb513"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item5dc633d5-638b-4282-a074-e2e5055818b3"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemf882f7ce-d6aa-42a7-b150-542ee3037e3e"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Iteme4bc842c-b26d-4258-a5a3-e42f647ff278"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item7c2336fb-bb53-4e70-b1b9-918e0f5a586e"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item665e3d6c-f5b9-4a42-8759-92a57fc0f618"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item99ceb7c3-1f53-4030-acf6-ece574c58d6e"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item798d235e-3b68-4538-ab70-a73c03053bae"),]),
    getItem("Tools", "Item225fcea2-95ed-4ae7-9b33-e0ce5c1b308c", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item50ad1a95-09a9-4a6b-a028-69c60d59b771"),]),
    getItem("Tree Select", "Item31a3e579-25e3-4621-90b2-c16c9cbb2ef0", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemb4252250-a14b-4281-ae74-39801f5485ac"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item54a34fe4-6b8b-4274-a1e1-30fb215522b8"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemde5aa735-34be-4696-9460-36b3d03cba36"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item06755831-7702-4422-838d-c63464208aed"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item9e9959b4-d39c-44bd-9969-fdd5f36ca6b1"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itema4a1d388-7e05-4206-b432-1ffdf09adcd1"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemb1cb179c-30cf-4321-9e1d-2200898e232a"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item3f62890e-6b02-49b8-b6f8-a768d88bc697"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item08998239-0895-4b73-b089-c9b26f0c0407"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item39ac2ae3-b23e-446b-92d1-93a766b2180d"),]