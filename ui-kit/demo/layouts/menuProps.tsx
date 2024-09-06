
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
    getItem("Other", "Item7c643709-ec75-45cb-a301-e65e70e73e79", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itema6e253f2-3481-493c-abb2-c765e8adf2b6"),]),
    getItem("DForm", "Item03d057b5-562d-4410-8d5b-bc946d5e8097", <FolderOutlined />, [
        getItem("Validation", "Item8579943f-236b-4d40-bca5-8319590594e9", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item64d9c480-d77b-4fc8-af43-dfb0532986ed"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item9f71b312-691d-423b-a208-a8ce7cd0bfb7"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item29cb5b27-535d-47ae-9d41-dd737d6bf4c0"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemc03a7366-5add-46c7-8835-f6a963537e58"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item2d6ba33f-6eca-4584-af64-288c7e637dc4"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item81cfaaca-6b50-4b3c-9b6a-004646ce6dc6"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemeab0bca7-8554-46ed-a627-88975d0fd4b8"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item35363dc7-6187-4f0c-89bb-5659071178ef"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemd27517fd-4e96-4373-820c-df614baf1fd9"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemcbcc7ad0-6c82-42a8-9b02-0a84de8b33c6"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item76952c08-82d3-405c-8243-5b7f4450d8c5"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item30d161c9-321f-467c-90ca-47ecab993187"),]),
    getItem("DForm Modal", "Item1db73d2d-ecae-40d5-bb98-6c181982729c", <FolderOutlined />, [
        getItem("Async", "Iteme967c958-3d6d-4b28-a75b-4b4a407b8025", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item57416406-1249-4b71-b31b-687672fa4aad"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item45c030e5-a5e0-47bf-810c-6c618f0c34fe"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item86157cf2-26e2-4b80-9fa5-d5d54083cc6c"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemff01940b-30fb-4e5b-a56c-78a6347e16af"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item5dfa7bd7-9ccd-4b32-966d-2fe21b718277"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item1086185f-ed42-4eba-a7fd-918486368c9e"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item1fdeb6d1-b3d7-49b9-94f7-ce71e82560fc"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item99cad159-bdbc-4c19-b65e-d37d23d11a52"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item4bd1ba02-3875-4c78-9e4d-4f10e546487c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item95ba463c-1e41-4f90-b05a-e4456766acc9"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item0a00c2a3-e9bf-4da1-b6fc-33445131fcf2"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item4f3b5aa9-665d-4aa4-aaa8-04891bf05d54"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemcc02a4ed-a5a9-492d-b390-f306b69ffb95"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemd89d901e-b490-4f81-b1fc-1ebc0a990057"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item5166fbfd-df16-48b6-846e-b7a36f911254"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itema1caa5b7-3b96-416a-b6c0-777e76f8f89b"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemb7b302a4-b500-43f8-af2a-4af6050df873"),]),
    getItem("Modal", "Item0689d998-0877-484e-8f0e-e80b19d9fba2", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemaa5a1099-18c4-4462-9962-9dd2800229b1"),]),
    getItem("Tabulator Grid", "Item712c7fd1-3280-4750-ab99-140d32d62e06", <FolderOutlined />, [
        getItem("Async", "Item5666e11b-34c3-4b8c-a876-6d9bfd8a2d56", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Iteme9b05592-c757-45fb-bb9b-d9e87c3f7763"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemeaa3cd33-da7b-455a-9c15-5fd66764f5d6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemb9e089fd-29e8-4a49-8cbb-e7d0cef807a5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemf579cc6d-ae0d-4b8a-a12a-a6311fa5596b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemba591b2e-db16-4cdb-9955-cbb377256063"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemfb550d46-373f-4d7b-a027-598df6c5bda9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item72e6ba68-11e8-48d1-aada-0be3ba9ff062"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item8c4c4c44-ad81-4a31-abbe-e153123b896f"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item28911569-a84d-4910-b74f-328faa7c2acf"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item6247941f-423e-45d4-9711-f7783a987a17"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item03b5bf8d-71d2-499d-a2d6-5c2cecd91d76"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemfe5b74cd-dc32-439e-aa56-bfc3450a15bb"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Iteme861cff7-14b4-4bb2-97ef-a44fe9fc560e"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item1f7c0a42-65ed-4515-b11f-ab9656db8ebc"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Iteme8fdabfb-467e-4e4a-a70d-c215fa893da9"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemded3f6a8-2cc1-4122-90ab-c92e933287e7"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item6e8037ee-f10b-4b76-8402-9d8bdfadd3db"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itema54cc555-faa1-477d-adea-1abea0a47f61"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Iteme8547aa3-5f9d-4d35-8a71-0c4999eecc56"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item99e7c52d-3de6-486b-9825-c61a6fdf643c"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemaff66393-e4fe-411e-8210-8abeff862985"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item11e29330-8a2d-4b1a-9537-150345af3a17"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemc0f65e4e-8600-42a4-b87f-f35d8cf9e1fb"),]),
    getItem("Tools", "Item60fdd471-01ce-4889-8499-731a5f731204", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item4ffbe9b6-0c39-4abe-b858-a1f2e197ae83"),]),
    getItem("Tree Select", "Itemaee1d8c7-b869-4ceb-9c03-c8e8e89b4151", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item0817e1e4-931d-4d7e-a14a-9faa95eb4ef5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item2a9da341-f276-4837-93e6-e0282d2ad244"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item44f1fa61-5093-4ac8-87f7-9cba72eb027b"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item2f295888-1b98-4ab5-911f-44a837aaf9dc"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item789c7994-5faa-4556-9f30-27b4cf432724"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemc2b39e7f-acb7-412c-bc0f-9efc5fe4a07a"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item2d66201e-7a07-4f0f-8df8-3a46cfc83b3f"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemb37c1d5b-315b-4ca8-bd78-d7806fdd49f9"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item4a682b67-78b8-4e6a-b1df-e498cff91eb5"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemda75f818-42e8-41fd-89ef-38654d50751e"),]