
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
    getItem("Other", "Item837ce804-4238-4987-b9e5-82ccbba0345e", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemb5ed6c21-8138-42f0-ba99-119b5842f5b3"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item4b7811ae-d14a-4a2c-89bc-c31d20d42a13"),]),
    getItem("DForm", "Item31596894-1346-4328-8a9f-1aae7dde7e46", <FolderOutlined />, [
        getItem("Validation", "Item23e7bef2-95a8-418e-8d02-586ca9d22f97", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item6c763ebf-8555-40d0-8cc2-1259a04d1e30"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemade343e4-f229-4090-9b49-51cecede8133"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item9eb3c63a-f650-4824-965d-efae529fed98"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemc5e599ca-1b86-4d8f-bdad-a01e3134c136"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item08bad936-ea1b-4461-8827-f9d84f35a563"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemda3492a8-8f26-427d-bb8d-c7efdf83de5b"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item2a7fdc5e-b9ad-4765-bbca-f9afec8ad302"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item2c648431-7e25-4595-b4da-e1ee034d3117"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item416ac1c8-0a82-46b8-b6f3-84452a025a48"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item1d3809b8-dcd0-42d9-8edc-7617e803448b"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemedc231ff-b8cd-4523-8ea3-fbd034726e12"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item85495c69-ebd6-4d15-a5bb-1660448e9faa"),]),
    getItem("DForm Modal", "Itembe0c8bb9-4113-4aa6-b44e-6caf724e2cbe", <FolderOutlined />, [
        getItem("Async", "Item21b912a5-83d7-4e58-8b8e-707cfe377a79", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item56d0729f-9066-4f55-8e35-7ffee993147d"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itema147c4e4-1f14-45ee-9f5a-dc0055bb39b2"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item8cbbcb9e-9c5a-4f4b-aba4-dfd4ebb0d194"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item8cb95859-cefd-441f-a84e-fdda4232f1f4"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item20969435-d7b6-4941-9b36-7f3b6c6ba28b"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item7f917f96-06be-43e9-afd5-f29cddff0281"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itema60b43c4-305b-44a7-8246-9ee1358be82a"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemd87bd158-d3d1-439b-bcda-95c77accb555"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Iteme3340afe-c750-4935-915f-8b041b2a92c2"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itembbfb03d8-71e9-4aff-b4e7-b57e10d49218"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item715f8985-1e95-4f7c-83e6-a9a7cd85d627"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item66091f09-3c52-433a-9ecc-e40be42364bb"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item4958936f-691f-49b3-ac98-c0e3b48b6fc0"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemcb5c93db-6d51-4ba4-afd9-d64af70a0ca1"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemd7f3e396-13df-49a9-b622-33201ada3654"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item354cb1e9-add5-4d44-ba04-138937a2c5b9"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemf98d3672-11b2-4e5f-86d0-e0f2fbc925d4"),]),
    getItem("Modal", "Iteme78ea387-f69d-4173-ac51-133fb403e45a", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item07287873-4180-4ce2-bce2-5c84800e0108"),]),
    getItem("Tabulator Grid", "Item000ad60e-f2f5-4e3a-b08a-e452b09d032e", <FolderOutlined />, [
        getItem("Async", "Itemb161b409-da80-4b6b-95c7-1deb67047c58", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item303d26e4-142a-4e54-a198-6aeebf21212b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item9c335650-5fea-4e6f-b55a-6eb8d8da1319"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item5857f23f-90c9-490a-8473-e3a6a00984b5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemf350e2cd-a08a-4caa-872c-6e6eb3d6be6d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itembfab9e11-5d9e-4a47-9551-655915be9015"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemce5f7106-f4ea-401b-a525-89b89a2ed677"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item0e5f49bf-bcc0-4276-8bd1-80fe022d39dc"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item089cfaeb-a2b5-4582-a5c0-28ff277af976"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itema17bcd16-889d-4698-aed4-fed0a0d28335"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemc9eeb6ec-a535-461c-a732-0b15c2e162db"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd9737d2f-3d25-4e6f-a95b-7add9c088444"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemc133716b-a85a-48db-803c-5753691f07be"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item65514203-7a96-4f24-83ad-a28a9821da7b"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item88fdf1aa-4e54-4b19-b817-5ae608b2bde9"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item5bb0a8a1-e1de-45dc-aaf9-bb303d51e5b9"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item99ef56b3-95e6-40e1-b568-580793428d80"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item26b0cca8-18d9-4e4d-a16f-8b166f18f1df"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item576471c3-977d-4ca4-baa1-adc505ef11ae"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item31050c51-5b92-4f9d-87a3-23d8219ad1e2"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item2db29e11-b688-42e0-89de-6084361c00c1"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemf6c8003b-0fc8-4030-b7b5-094179655caa"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item61ffeaac-2a00-4be3-8c1c-f8517ec76513"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itembb599483-dd88-49fc-a4a9-79e5d28e4e0c"),]),
    getItem("Tools", "Item6b591ecd-ba4a-465d-94a7-7bb6ec580cd9", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item88952c76-cabc-4fc6-a063-643d2b0b6c6e"),]),
    getItem("Tree Select", "Item77b7ba82-9ea7-402a-9b4b-d8a0672939c5", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Itemc0451c55-3d7a-4ee1-91c5-ff623550bd86"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Item61166fc9-a57b-4c33-b135-90368d2953ec"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Item28bbb865-f8cd-4906-8d9a-234996e3749e"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Itema0114a51-9e49-42c6-a0a4-d50665ac4511"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Item199f6e2f-1939-400c-99b9-043afe4a1da7"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Item0edc761a-42dd-4a01-affe-7c76d362a8fa"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Itembf546014-578f-485f-8282-f95c0b6ca10c"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Item07bf658b-10fb-46e7-bca0-44d62c09d987"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Itemb031d92c-7d54-448a-9d20-7410f09aa12b"),
        getItem(<Link to="/treeSelect/WithFormAndNodeRenderers">With Form AndNode Renderers</Link>, "Item24a35b0f-6e44-4dbe-be48-0b1bc2e579e5"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Item07949db4-0384-47a6-a6d8-ea53a2548198"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item5c4690b2-d620-4fa1-b4f7-63233d4de691"),]