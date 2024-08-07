
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
    getItem("DForm", "Itemc203471c-40f0-46dc-a158-b2d12eb44bbe", <FolderOutlined />, [
        getItem("Validation", "Item99d8d790-c749-43ea-a30d-5465b5ae69b2", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item0c8e78d4-7f3d-462f-893a-50b2afc62aad"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemce4780c9-41b8-420e-9774-2d227372ed96"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item44a83677-9055-4f9f-8e22-519082eac989"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item554cc033-5b42-402f-b7c2-c1a0813689bd"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item7d2d6a8a-8383-436e-8ac2-425097fccd43"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item337af76f-0a10-423b-ada3-88fd2d5a86a3"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item1a8d69c2-c9b5-4a5d-8a97-ca4862722cb9"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemcbee629c-0ad8-43e6-bfa4-d0794de5a25b"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item546b0aad-a75a-429c-a9fc-58eac4e623f2"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemafb7d427-326f-475b-9be6-1b562a348b5b"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item5aa5582c-7c6a-4abf-ad34-b8fd8d95f359"),]),
    getItem("DForm Modal", "Item57f02af9-e8c5-4f39-80f9-7a780827763b", <FolderOutlined />, [
        getItem("Async", "Itembb35063e-4c62-426d-ac1e-b476e695af50", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item4f5c5302-3a77-46ec-a083-42ec5007e00f"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item7c9e0f88-4b39-4ed8-ad0b-33881d232aa2"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemc35968c9-b2b3-451c-8cff-e7e8e8dcb6f0"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item6118ee7c-2a7f-4a13-8b32-153e4041bad2"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itema2a7bc3c-0e72-4f81-9cd0-e9d953da73e5"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item72de96d3-2584-4996-bc5e-7efd8529eec7"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item33daf121-4796-41bc-bc69-505e56eae9ea"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemee061ab5-3730-4704-87f0-b385886acd3c"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item9636e779-7ff0-437e-a218-cec4d683c8f9"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item73bf20c2-d025-4bae-a1dd-2732dc1025ab"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item74550033-c649-4390-b51f-7d54ec2597cd"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item158f1b5b-fb00-4466-acfa-8773a7f63090"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item85a647de-e485-4c12-9953-84563167834e"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemd24b9597-57b6-4e5b-8443-e3464cadd808"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item9c7d13b6-d6fe-4030-8c9f-7189eb3c14b1"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Iteme5d7b151-1781-424d-a1c5-e35f36900bbf"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item3478b3e9-c5f6-4731-9dc5-5f0da7fc5742"),]),
    getItem("Tabulator Grid", "Item82ce8649-47a2-427a-8660-a40b43e6ad14", <FolderOutlined />, [
        getItem("Async", "Item68edb092-c0ee-47fd-9634-8137e603d042", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item264bc1e0-22df-41ce-a199-511fb156f17e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itembc88cdcc-ceff-4478-a199-f9a85eb5966c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item19622663-09f0-49b7-b465-568c93bbe4d5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemd8fa9109-d187-464e-b02b-a1ca5d498a82"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item39ebe80a-656f-4f8e-861a-a87e7c4d95f3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item0208abb2-9eae-4946-a023-e543c4a3b261"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item8fe51d91-1287-4588-945d-e6ecb5a01e68"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemb34da654-5007-4f50-bb24-7c3ac7e52043"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itema6ab1efa-b16e-44b5-8161-b5141bcca45e"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item212b7833-1999-43b4-bebe-fe4c216ace55"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item19bd4461-aafb-4c92-8b65-714d0cb7d284"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item6c0b2a6f-0323-4dad-8e1a-c5e48caaa5e0"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item6d21e26c-e1e1-40ba-953f-df2cbd6540ea"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Iteme4db0dce-70b9-43a6-b0a6-36482b0461fa"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item0200273e-1c68-49aa-9427-724bfb2472aa"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemacccb626-4c8c-42ad-8a5e-c1e025ac5794"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itema1765036-272a-4d7e-9a20-5e3bb8a6f67e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item22fac9e8-fcf2-4940-82b5-2731c17971fe"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemd9a410cc-3dbf-4cc0-a907-75de3c09dfa6"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itema51db1b1-e537-4f09-80e0-f9f6d92a479f"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itema598d98d-9f89-41f6-a917-5eafda6572b4"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itema298ca34-f163-420b-9134-ea1fbc7358a0"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemb4165823-00d0-4e99-9b29-c7e8fd2edf36"),]),
    getItem("Tools", "Item27bcc9bf-243c-415e-8e8d-b7703b753e22", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item9aafeaa1-4b71-42c3-a055-43a44e1c2d48"),]),
    getItem("Tree Select", "Item7be564cb-0260-4e4f-8ef3-5df23aaf1786", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item0aaffa22-fd26-4089-aae7-a959bfc0f280"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item4efb7b15-8594-4329-99b6-72aec34028e0"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item1bb03df4-0bf1-4128-a0fd-260d18fbd308"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item9edb6392-4729-4dd8-b99d-b3bcd1c1d3b8"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item7a4c2466-6f80-4575-9d57-9de8a1e851db"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemf501ae9d-6100-43a7-9042-bddad6c50b60"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item7d61b20c-5ae6-4e45-84a4-1ed267a10faf"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item0dfdc22b-2a8f-414a-a3d2-057ac7df4310"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item3ec38842-1652-4d76-9a45-fe126dd6a402"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Iteme68f0f6e-5776-45fa-8bef-e8943352d4ab"),]