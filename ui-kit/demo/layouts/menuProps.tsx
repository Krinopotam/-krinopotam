
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
    getItem("DForm", "Item70cfa3e0-db49-4f8e-9bf2-e4451773e3d1", <FolderOutlined />, [
        getItem("Validation", "Item0e0f2101-2d39-4ede-90b6-3696e56d0d33", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item1b95b275-a969-4056-b9f0-8aa6490d2468"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemcbdf7cfb-ce1d-43a0-806b-e9b49bb3cce3"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemdae73efb-78c1-4208-974d-dd7f07343db7"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item36cd59ba-47f6-4b05-a5ee-d40e5eb0d191"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item7166bb99-406a-4076-8e18-218014bd22eb"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item03aa87a8-7cc3-4b86-9b39-6fb1a2ae3691"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemf49da8bc-08c2-4326-897c-de70d7bb93b1"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item708815bf-2af9-45d4-b479-4c88a0b2549c"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemd879c74c-25f7-4295-8997-a1898897e762"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item39b8d6c1-4685-4510-b348-69aca771e7b9"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itema9afff04-9f50-4fef-ab30-67400f5ef1ec"),]),
    getItem("DForm Modal", "Itemc8648465-6a41-4e3e-b7d1-77f562ef2229", <FolderOutlined />, [
        getItem("Async", "Item75fa59a8-f762-4ab8-9b93-b4f3ef58798c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item303937cb-9449-4cc7-bd9a-ed35545e057b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item70dce26a-f006-40b1-93cf-002d720c46c5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Iteme9de228d-3503-4170-b698-93135d057c54"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item711885ca-8bb4-43fb-8a98-3ca3f7744a75"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itema7ec1a72-3db5-4bf6-a787-2d9cc64410f3"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item3b266a66-0ec2-48aa-b2ff-648da140eebe"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item5424efcf-629b-44dc-b04b-42019f3c8763"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemfad85825-a412-492c-9ccf-5814f909c818"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item37db9547-0af1-4f41-9296-3eca2e79c0d0"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item77d8ecd9-5f15-44f7-8538-f020bc2bce45"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itema12bd1e1-683f-44da-9a61-04a215e6e157"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item0513c291-4ab5-4ba2-b38d-db21674f2568"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemb2b10f41-11a8-4f06-8587-1beae7b61cd9"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item02235ba3-8604-404d-8c68-840b1396cb1c"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item0e07161b-b371-4b6a-8120-b197f28c0a5f"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemb684162c-78e3-436d-98f6-ed36ccaca1c7"),]),
    getItem("Tabulator Grid", "Itemb86d2f5e-b3a3-4b60-b1ec-9c81e7c224e2", <FolderOutlined />, [
        getItem("Async", "Item7e03c801-5d63-4cbe-ab64-2edf499d7e03", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemc7fa9c0a-f78a-448e-8c1f-ff8ef57ec11d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item6ac7eec9-92bf-49c5-a962-ac45153b5105"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itembf4190d4-8f50-462f-a51b-ca894a8edfd3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item5b0f1838-ba28-4f53-b68a-758aa7f96876"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item3c79bc08-ee4b-4eda-8a92-94b618bdf0d9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item89a11c2b-0833-4a45-9fe2-38d2093902aa"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item3403229c-04c9-48b1-a46e-12411dc32cd8"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item8584281a-ccc9-4bf7-9ad2-8439a1a5f727"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item6c135d75-7ff0-45fa-ba7f-1883bdc14001"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item8ed911c3-a458-4d92-b701-719d8981f1a3"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item53171d85-e73d-49aa-9cb2-2afd62501db5"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemf9c810db-453e-4be4-ab46-a1f00cdba4d6"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item0758e5d6-b4ff-441d-a6a9-64d2201e7a72"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item44b08e7d-8e2f-4f7e-926c-59532415dccc"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item7b5c6061-09e0-4d1c-abeb-16eeca9e1f97"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item133a0f49-04f5-41c9-b18d-76818fd90750"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemb11620c3-2a73-4744-88f9-cd1829c06794"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemfcf234b6-43e6-46aa-a059-89cafcadb950"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item81a19e9f-f531-4ded-b9b5-e765cf75afe7"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item59596b2d-9979-46dd-b4cf-e4e4b9151e43"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Iteme4de1877-1f51-458c-adf1-1f21043b13da"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item37f231de-8dac-42e1-b1a5-94b21cc72e0e"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item4c9b59cd-dce2-4734-baad-72ae3d986b5a"),]),
    getItem("Tools", "Itemf9005351-e143-4686-877b-774522fd2eef", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item61650510-b8fa-4857-9fe7-bc7d85396870"),]),
    getItem("Tree Select", "Item648f3286-86e0-4c56-90ca-463db63caddb", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemd28f5197-83d3-4af8-84aa-11f0b06d9eac"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item9248d728-1c66-4b90-b6ad-ff409038fe4b"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itema96e2cb8-cd4f-4b3b-91ed-5df82390e2e6"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemc8546fa9-8212-4e88-9331-49de8e078b98"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item52fcb271-6e14-4708-af66-0a45c199dba9"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item92d357eb-60cb-448e-8c26-96a630a47c47"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item4841c014-64e7-4dfc-9709-6a0413ce426c"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item32cccd14-7d72-4c27-b19d-2f5dbbbbfa44"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemf3532a84-9ffe-4bc0-84fc-b08747976b14"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemab61c08a-b0e9-4380-bf77-32e50e902e9e"),]