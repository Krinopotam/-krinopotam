
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
    getItem("DForm", "Itema5280484-3938-4867-928c-6bc66a12101c", <FolderOutlined />, [
        getItem("Validation", "Item8a7d03e1-753a-4808-a397-9fd73c6cc89f", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item9ab8dfdc-74db-4ef4-8b52-41becdd42bf3"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item76c39637-dd3e-421b-92e3-369ed73ec218"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema41bbaed-fcb0-416c-a2f6-5a2ce7f398cf"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemda5bbd5d-ff27-49b1-8b92-680d8b26ad49"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item9c3b2a27-b1e6-4001-b932-253569fd507b"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item32e11b0a-fd60-4089-8fd6-19f7d5b9f8da"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemfd1d292d-cd32-4a30-949f-be46a47b1caa"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item0d63578a-2045-440e-b340-43b58f3d4c01"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemc34510ac-001a-4c7d-b576-e17336080aeb"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item6662661b-5c3c-4bcd-952d-fda5d019c41f"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemb4d5f3df-e887-4e9c-8648-bac416b6adc5"),]),
    getItem("DForm Modal", "Item5405f449-90e5-471d-8be7-f23e7a764f16", <FolderOutlined />, [
        getItem("Async", "Item63b995f9-b65d-4b5d-a068-097dc9ffdf0c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item80e9ad30-a589-40c5-87f0-409676847067"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemc37b3065-2fef-423a-92f2-6538f0c44a08"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemb69893ca-c7e5-4776-ac1c-ffb346449a8e"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item2ca28e2e-7ff3-482d-9d31-cb3a4eef755b"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item24654eea-6015-490e-b690-55bc18300cc4"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item016156ba-7173-4ce7-9a5b-715920fa7eb8"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item07b9f361-84ee-471d-9907-6600dff0f055"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemc93e267f-4306-49fc-b776-d90015b5e406"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Iteme17f8537-7958-43ce-b3a8-ed306930b7c7"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemc1e96f48-3e46-46c0-9b05-cea6b51881bd"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item26c7476a-db2c-44d6-9510-7d87b093288e"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item5f67528f-8cdf-409a-8a6b-77abc383ef7f"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item53fa5472-9d24-422a-99f1-5e062cc4d749"),]),
    getItem("Tabulator Grid", "Iteme34edadd-5136-4bc1-b6f5-5f29573d77e6", <FolderOutlined />, [
        getItem("Async", "Item98e5cfe2-31d2-46b7-adc9-1b65bfc97927", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemd42e6c71-c7ba-41d9-92a6-3c460f1a44c0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item75c169ae-9357-4392-9260-7d321232077b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item4e8fe28c-ece2-468f-bcb2-b2db21629f5c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item7927f655-75a4-40af-85de-5109455f5062"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemd208d02c-b108-4273-b666-91ca94844100"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item7b49d4aa-2a95-4c1a-bd5c-04721b43ad52"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item867ff564-7575-4d31-be36-ae3e1fc42a98"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item4c049efe-5b58-4f84-adec-b2f35e0cc0c1"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Iteme384d9a5-7a27-46dd-a3a4-a3c1e42bb9d8"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itema5d650c9-3948-4fc4-aa75-5a2da42532a0"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Iteme8e3fc53-76bb-430d-9229-a3bc76aed040"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemb3a3dab2-b285-4c5e-b31e-2be3f2a53e66"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemcdd616a4-724f-4130-a643-e9b7f52457a9"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item7bf6879a-a79b-43b8-8707-fd354f642308"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item0ebe4f78-9e6b-4a16-8f5b-b0ec0d2cc7d6"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemc3548e33-6df6-44e5-a8ec-314e69cb0beb"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemda4cd557-0f2c-4fb9-a351-61db4938249f"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item9704d36e-abf8-4ec2-a7a0-792bafd866c9"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemc6a5b92a-6edb-4b63-bd05-cd92daa08ab8"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item433622d7-4a66-4baf-bacd-0f3f1bfef4fa"),]),
    getItem("Tools", "Itema1deb928-cbe8-4d5b-8ec5-78313ae736d6", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item161b292a-1cd8-4d44-9219-c8a422171e76"),]),
    getItem("Tree Select", "Iteme73c4a16-fb13-4fe2-b58d-07d99061f26f", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item16a56a85-6f1a-47c4-9ba3-6abe273fb074"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itema5a911cc-5a1d-4282-b146-8aa7e616bcaf"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item27819060-0337-498b-8ca0-00e8a7b091aa"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item15d73a51-e929-4d4d-870d-34717f9443d2"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item830890b7-944f-4144-86cd-53ee21bbf9d1"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item184832dc-f918-4779-8510-ec7effb16a1d"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item10008954-f33b-49ba-8c40-a71744094b06"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item187c09ee-616d-4cc1-9cb0-b7698bc70a23"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item964ff368-efb6-4ff6-b1bd-064400102ed1"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item88d8e9a2-5c0b-4e37-ac63-2f8ea837779d"),]