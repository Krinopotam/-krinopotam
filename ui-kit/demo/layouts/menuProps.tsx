
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
    getItem("DForm", "Itemfe1d6ba3-8c51-4e9d-bdde-59464a26e9c5", <FolderOutlined />, [
        getItem("Validation", "Item7e5a29ad-1bfc-4c2a-9b3b-a233e592bb90", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item4babb1db-0e77-41e9-80fe-a54dda8aa514"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemaa3e737f-217c-43ea-b984-f98123c4185d"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item1f057177-376a-400e-a0a8-23876779ab41"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Iteme6f1e16c-55b1-4c1b-b063-b02bdbda8bb0"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemf80262a5-bc33-4f8c-bb3c-f0e46c66ee13"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Iteme7346b28-26fc-4fae-91c5-1e901ddd37ad"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item9d1ecb16-96a0-4b00-aac9-9f5f3abe3f4c"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Iteme4796940-d00a-4eef-ba60-7da313cacfeb"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item7f6c2e5e-3eb2-4e8a-b288-df430266f95c"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemc596f74a-37a8-41fb-8cce-47a26e2b7f59"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item9092d803-d7a7-48df-b97e-390dee69c41a"),]),
    getItem("DForm Modal", "Item9acd1f77-f747-41f4-94f7-cdb18a1e44cc", <FolderOutlined />, [
        getItem("Async", "Itemcf9730a6-12ff-444a-a134-bd0703e3c099", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemc4f40be7-65e6-4e13-8449-3294ce363225"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item7c27c5a8-f467-4efb-adac-ca450c1f9da1"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item8919fb12-5bd1-48ee-92ae-f3b0fd2b5293"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item1072eada-8ce7-4f34-8cf3-837bb2c543b2"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item750d15bd-cd11-42e9-8fc1-f4f109e06a2a"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item4e0b2da2-b959-4679-90e6-3f3a7d4cb13d"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Iteme0fe41ef-dd21-444f-8ba2-6a8b24712aec"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemabd35fc9-a32c-461b-a250-3dd4a8659a4d"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item0f066764-e5d7-4567-a8fc-81824c14c639"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item90d9a4d4-f463-47f0-a4d4-8d4ac851e495"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item24f437d2-f1d2-4d1f-ab77-054b2753cb38"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemfe40cafd-070c-4f5e-aee0-0acc2f94155c"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item674c5cb5-681f-463d-bf87-34a4ac78913c"),]),
    getItem("Tabulator Grid", "Itema8e88a55-e0ef-4177-8897-0c85be4845d3", <FolderOutlined />, [
        getItem("Async", "Item6145ddcf-76bc-4ff8-8454-43326bd999f9", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemdf09835a-5d2a-4496-b113-94ec4d1d0238"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item6ab08668-cb1e-4aa2-a961-644670e84ea7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item1983d286-9a0b-4cb7-bfc2-a2a8c4c2fdd2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itema1cdb921-4413-4f9e-831c-9b0acb1f77d6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Iteme4ca9e66-3e69-4748-aba2-dd7a1bbf01c7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item8e6b0767-d7b8-42ef-becc-315fd1aba145"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item2d79f6ba-24a7-4c47-9903-60159e61c114"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item26c70852-7c50-41c2-9f78-d8576a78db92"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item83eba7ca-e1b9-429d-ad07-739675aae3da"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemca9af4d6-6b5f-456f-90dc-c3fb86cf8abd"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item9f0441ae-de06-44db-82c0-a4fc692406e6"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item37908361-f121-49f3-bc38-56dfacb8c016"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item41fba201-282f-4a9d-87f4-c2538ba753cb"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item5d8c6ea1-ad68-43e8-9702-7b1e9c832ed0"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemcfc2d341-130e-49be-a2c5-4e00ea5b6213"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemdb20207a-21eb-4ed9-8e73-c5039f4eab8f"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemc79744d5-7adb-4538-a44c-beaa7253f1fa"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item102dcd62-8f32-4a61-b317-d94b4587a503"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item701ab8ea-d0a7-4d09-9bdb-618c48ba8f60"),]),
    getItem("Tools", "Itemff891787-9afb-4f8c-b197-a022e9dce96e", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemda298907-9f3c-457b-94b0-2cd96e326572"),]),
    getItem("Tree Select", "Itemcf5a1546-c2ba-4bcc-8c5e-910cf31ca4eb", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemb2bed104-ddce-4d3c-b3af-916e0b8cee13"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item072aa1ed-bd67-4f6d-b24d-4870d3dfbf11"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item22c8c1f4-9658-4788-a214-db590e152dfb"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item617d3c86-6827-427c-9f61-2fdceced2893"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item54250de0-5552-4abc-8581-444ba4e591ba"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemb05eb3fa-78e1-4123-a8d0-b9b6453d9521"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemd06cf4c0-c136-4c0c-a865-4f8824ca8e1c"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item8f4c1cf4-bdbc-4aa9-a4b1-44906fafa9eb"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item2b232ddf-d2e9-4ba0-8658-902f8df1e36b"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item285c7433-0827-4f76-a75a-37d5c4f631ff"),]