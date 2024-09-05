
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
    getItem("Other", "Item2ee30b4c-6ddd-4023-9afd-23c6f34f4086", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itembcad190b-6eba-47ed-bd20-bad786e760ad"),]),
    getItem("DForm", "Item71ef09e1-402c-48d5-a323-e8b162806b17", <FolderOutlined />, [
        getItem("Validation", "Itemed35ca4e-434d-4955-80f1-8a3bd900ec0d", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Iteme3f0ce01-268d-471e-9c12-bcc78e933de5"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemdcb404e1-692c-4e00-82dc-093de39194d0"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itembfb5eee7-15ba-4c46-87a9-a58eb171e5dc"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item903d387b-b576-4957-8774-04c49aadb3f9"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item34e403f8-5f9c-493e-8c82-0ec6f0ac1887"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemd3b30706-3919-4537-b546-fca68802bba0"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item82ef009b-9cab-4bdd-8f60-46fdcb43bdc6"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item6277b8f7-58da-4efa-88f9-eeda9d279cae"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemdf9b69bd-b61d-4687-9249-a85457b7ed3f"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item009c81f4-18ad-4232-899d-7308f996cce9"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemcc6025c0-301b-4304-b593-722a4bf7d927"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item4c0ad974-6e4e-4172-b1db-e3a6c62a30fa"),]),
    getItem("DForm Modal", "Item9d755aaa-afe8-4aa1-948c-c622dbc51785", <FolderOutlined />, [
        getItem("Async", "Item4c69ff9b-9f58-40b8-b3a8-0ec39dee3311", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item90651d60-fb77-462a-9873-091151b1ec39"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemd83b7f6f-44af-40df-9a6a-79cd6d3356d5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item9626209d-17f3-4829-8be7-21dc3063dcdd"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itema835d1bc-ebde-47fa-87e8-4d3ab3e5cbca"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item535c0e43-2909-4e29-a731-ca03a484bc2b"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item1dab77dc-9f53-47d0-b49f-197462980e1f"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemadc4d471-2d41-4bb4-a4b3-599789915ad2"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item0268e796-092d-4031-86ba-956eb75a29c6"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item94429738-41b6-44f1-839e-f35accd534c8"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemc6187541-d42f-42c6-b6bc-2887fc82a99d"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item4ed7958b-f596-41f5-958f-e025cfb87296"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item0eff71db-53c7-4f6d-b03c-c28d00451b67"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemb3e40221-5072-4b08-a142-dc722db95e64"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item919615cf-88d2-4dc5-bc30-089cd9fa648e"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itema4e5eee8-d1ca-4818-a4a9-4fe9af370ea4"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item5853f0a1-0382-469d-a8cd-d33defe22bca"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item3e6babd9-0a74-4640-9104-ab542e635dac"),]),
    getItem("Modal", "Item09e475ff-5e43-4195-85f1-821523a61e90", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item9b6b7194-ba36-4b78-b0b5-b3972a8bc216"),]),
    getItem("Tabulator Grid", "Item0132e00c-597b-40be-bfaf-6a0107988088", <FolderOutlined />, [
        getItem("Async", "Itemad78ef61-3ad8-41fb-8a6a-a40edbfd6462", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemc26c5ccb-c232-42e3-8d1d-a2c31d6134c5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item7318eeb2-565c-458a-a201-62df072c4481"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item9a280069-951a-45dd-a46f-474f14a80c8a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemb330d827-bad7-43c0-badd-19830efe4241"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item0175844b-98a4-48d5-97e1-6c1175461223"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemce8a4d80-c825-4e8d-a734-76529f879b55"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item98c28007-d516-4e4c-9458-7f61c52d0f47"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itembfdede5e-1ed7-4a3f-9239-5ffd292a9b9b"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemc4253692-9b8d-466b-bd53-a58494ba4009"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item7530842f-7a1e-4daa-88b2-b9d2f924add5"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item629d996e-a547-4622-8786-52b677ddd855"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item00e75dc3-2d9e-4e54-b1b3-82d595348923"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itema841998d-824b-44d0-9be0-4644c3bda92d"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item66af4c58-d536-464e-9b11-6193f4a8be52"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemadadbf42-dacd-4379-a12d-0b2203a1d668"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemb8c87cf5-00c2-4291-b21c-f9bd4e9678d3"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemd9fbb8db-6f4e-4125-8de7-7a88529a85aa"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item7823673a-b3df-4752-9dab-5c3154a08bc2"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item40b41b0e-0bc2-43d0-a257-3932f90b480d"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itema54d218d-2764-4001-baa1-7db428cb9daf"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item4425dc70-0c6a-4205-9d4c-f9f835f7ee07"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemc7293bb7-df64-40e7-a0cb-d685be774529"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item1dcdc458-bd02-44cb-acc2-116895c856b1"),]),
    getItem("Tools", "Item8185094d-332f-4567-b4e0-9db92eef64e9", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item0a631ce6-7663-4703-a8fa-814311ad6628"),]),
    getItem("Tree Select", "Itemfb445a4a-54bc-46e4-953e-6986bc8329d4", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item559dc34f-b146-4417-be61-a522a29453e7"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemd92f46dc-66d7-4361-b881-43ee8367b7fe"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item68f634d0-53bb-45bd-a882-4a30283cd6fe"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item57e27e0e-2246-44b9-9aa8-7970293804d9"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item24d98329-0db0-4ecc-90c1-d5c4391a5f3e"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item5dbc3184-7fdb-40bc-a318-c8c36eaa4245"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemee897f44-4d13-49f8-aabc-c38ad752399f"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemd7a5491d-e736-41f8-aac6-0433ece63c26"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item4349d683-a115-4f93-bd81-94da37df6f5d"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemeb3dfaaf-2959-4b6b-9de0-28e44f38daa3"),]