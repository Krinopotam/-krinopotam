
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
    getItem("Other", "Item227b5014-2378-484a-a778-5935d1f86fd0", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itema92af451-833d-491e-a2f9-307e2a71c4a6"),]),
    getItem("DForm", "Item09a0a588-356b-4558-8ec0-bfd73dfe5eb7", <FolderOutlined />, [
        getItem("Validation", "Item96a9b0d5-1788-4cb1-8ec6-2b3801ede0f6", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item75e15168-0f13-49aa-a46f-6703edd3fdee"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item98dabc88-0251-4d3f-9d78-7d24892e100d"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item158785c5-c895-4e85-a981-cb64f0bcafee"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemc15c865b-9e83-468d-af82-f7dec73ff9fe"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item2d99ecee-93ef-46e5-8e19-e36f52b2b8ab"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item522253eb-9983-4e8d-aae5-9fd3625c0c72"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itema1588868-6161-46a9-81ce-77afe01b88e9"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item90a929fc-8bd8-4037-8f6d-037c3e857d5f"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item32c987f6-1127-40cd-9159-b0a4e35c501f"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item2f8acbec-93ae-40e3-ad41-301da523ebe5"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item61dba4ff-8697-4f49-a699-45fb1fce81cf"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itema398e469-63e1-4f62-8616-84b6796035ee"),]),
    getItem("DForm Modal", "Iteme85051d2-fb8a-418c-9505-d109c579df20", <FolderOutlined />, [
        getItem("Async", "Item639377b3-9e15-4b6c-9ce8-e0455b1d7e1b", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item6d40bee0-ee48-4411-950e-e40aa8c224e0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itema200b721-0870-40c6-9e25-e8b0194c45c7"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item7f7828a0-f385-4d88-afe1-042ffa23e69c"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Iteme21908fc-01be-4392-83d3-25cccb9a5dc7"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemafebde79-1fbd-4843-bb5b-f2b54ec938df"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item65e8cbb5-e018-4a70-b2d5-716beb0534bd"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item278059c0-9b21-486c-be24-e1cc630df301"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemc835ddee-0b81-47b4-bc62-ac0b4db7a0e9"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item47b68e2b-a34b-447d-84f8-10d61298ea75"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itembd4cbed8-b06c-4386-811f-e557fdcf7645"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemb81eb69b-76ee-4753-a332-7da3db5777bc"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemffd6d1b9-e76c-4eee-b573-0c7ffcf354ce"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item351f6f8c-be5e-4151-b66a-62d7eae0bc10"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item6828d1b2-78dc-448b-afe8-9f2a0ac278e4"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item5f10fba4-4867-4a8e-9e1c-60156fc227df"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item7045001a-3104-4f92-be31-766d44ebb401"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Iteme8273256-6616-49ae-a2ad-b172caeb97a7"),]),
    getItem("Modal", "Item17c382ae-25f6-4a15-8667-b2e28f2b97fa", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item0f2e4f0e-a619-4d53-b6fd-c8a1e7e9080c"),]),
    getItem("Tabulator Grid", "Itemf5c55d9f-f0a8-430f-a3d3-35d2b1940ef9", <FolderOutlined />, [
        getItem("Async", "Item738c48b6-9551-4039-8660-f7b116a990b7", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemadb98559-e1ce-44a2-934b-1e32ab5a298e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itema5aa5555-3a53-4806-9174-a28d58d2b108"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item51283a26-9731-4087-9ff9-dbfcbd84458d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemaa7370b6-ea10-4426-b08e-4b626562c9dc"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item3ae17311-3786-4f28-9fa0-36c287f119f5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item9f3f495d-7909-49bb-baf3-7c22def836d9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item4832a884-17a8-4777-ad0c-510c904d55ec"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item0edf3e9c-fded-4533-b94a-ebe19f3262f2"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemc18398da-986e-42ae-bcc5-6df752dfdab3"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item5aafca58-e0c4-45c1-abe3-8e9679992a9b"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item2e93ec7b-fa46-4d30-b319-97e1a1bcd95e"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item8189ca97-cb76-4cfd-bafe-7e1562a7bee4"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item0192fbf8-685d-4afa-9ffe-745d6b2f57e6"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb12ad3f5-3824-4d44-950c-9ea57688b67d"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itema7ccf281-961e-4d0d-a330-5f92df083870"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemd73017ab-b378-4905-ae9d-5fa6fe0c5a6d"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemac09a2d0-abcd-43bb-8102-5ded9c393c4a"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item5b76d16c-4a6e-45cd-bf98-c5ce563bf32f"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item766477ef-6de1-4974-9afd-810f4782112b"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemeb83bca0-0b49-4c68-a1a7-aab9b118efbd"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item78c1cdb2-18e0-4fd0-9319-efc9d0ae60ca"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item52d0a3cf-5c5b-4bcc-b9d0-da3a70345cc6"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itembb6fbae8-b421-480b-ab5a-8f5f74a2aef8"),]),
    getItem("Tools", "Item2555f6eb-750a-400a-b760-74af2db3a365", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Iteme759c32c-127d-4738-8852-c5cba695b334"),]),
    getItem("Tree Select", "Item5b454405-d1e3-45a5-a6a1-ec16836f9ae8", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemde154486-2b7f-4f8f-be2c-0ef3aae34dde"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemc2856ca4-2eba-47d9-af46-4069be78cf5b"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item9b35d7b6-a0b8-486a-9457-807ea93ee4a3"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item413de029-8b4d-4ac4-9aca-d1ed7dabd815"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemacff4506-f586-4923-aebb-70d274a3f0b4"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item5253b908-d9bf-4d66-a49d-084d7bf496fe"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item727a22dd-c1f4-4a97-bab4-df5079be545a"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itembe590e16-f0df-4f29-a489-cebe45bad82d"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Iteme9b66399-f155-4529-b430-9183f1db81ee"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemfa61f112-7235-4f12-9ca2-e3781394f588"),]