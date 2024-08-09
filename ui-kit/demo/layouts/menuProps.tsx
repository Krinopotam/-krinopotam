
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
    getItem("DForm", "Item1dd340da-28a7-4076-8625-716fe12c4c1f", <FolderOutlined />, [
        getItem("Validation", "Item5a35f69e-40e1-4f42-baa2-a33f321cb958", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemf13b8bea-e5b3-4139-b0c7-c586c1e40764"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item28bf48f0-9107-4ddb-8cab-75ba8fed8c8a"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemae02804a-6a71-4a73-8181-fd342bcb5cfc"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemed3ae5a5-d402-49f5-8e3a-24b10781fa0b"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item68fa0848-213d-4357-a73e-027265a44879"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item09c903f5-19bf-46c4-b5b8-d68ecf284d9e"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item5aac2689-6f21-4a6f-9782-cbd8380eb544"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item42572e34-9ebc-42e2-897a-5eea074d01fa"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemeecc9143-d879-4943-ba1c-48d0e7e07369"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item252fd060-6b6d-44ee-b50e-12de649b76f0"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item45a57947-5f6c-41bf-ae68-b13d83541f06"),]),
    getItem("DForm Modal", "Item0f38a351-eeaa-4766-b240-b88b774c1014", <FolderOutlined />, [
        getItem("Async", "Item8601abe4-340e-4d5d-b69a-307aff03172c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item9905d824-9199-4089-ab2d-138f5962e086"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item79f5ff94-1d80-4f5c-b1ad-dea3a1381f24"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item49fce96a-37d5-46eb-b33a-3f8f2b9126b6"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item56de13a3-9212-47ca-a362-fc282d0138b3"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemc05d03cf-b20a-42b0-9495-f5083e15591a"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemcba8de57-5b4e-4da3-8003-8220234ac865"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itembcacb011-588a-44c4-9d0a-8fdce7dd965b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item2fbb17e3-b8ad-447a-abb3-eb143865abb0"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemfc9a12b4-4416-40bc-b81d-f8029b9037b4"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item9d88090d-b6d0-4a15-8904-3948b75635f9"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item9f82b46c-ac8a-4c9e-aa54-af59dd9a3f1e"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Iteme1864d05-67c6-433f-9779-5b7856168162"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item8501ac6c-212f-4a5f-902a-ff98682e8e42"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item4971aab8-660f-492f-8cfe-9d95ef1bca8f"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Iteme22e5979-82fb-4988-aa52-86c3d4b1f441"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item9d82b405-4db2-4921-bce8-2fffb864d1f8"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item814daf79-01f4-4889-b78c-74641543ed01"),]),
    getItem("Tabulator Grid", "Item9eeba71a-a3ea-45c1-8ebc-d98bed1c05d7", <FolderOutlined />, [
        getItem("Async", "Item089cfa21-2663-4731-9358-861cf478816d", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemadaeb959-9890-43b6-8e44-70dfb724e3b7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemfebff393-a707-4e81-b775-69391d4eb747"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item725cf57d-0fc1-4b06-bd93-d8eaecdaf29a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemf07cdb9c-28aa-409b-a4fc-19543c5d71b2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemf648c5ca-1c68-4d93-8407-e6ffdf7db921"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item7de1b768-3f37-4ae9-be25-78b43673cd48"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item6138f597-25a2-462a-aa61-6740be2b19a5"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemaff91f99-6f18-49da-b9cb-2b3050afab7c"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item8e813ad6-9c96-4bd4-b3ad-49eb78ee29dd"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item037c3482-83de-47d4-a96d-6abe93a9e4b1"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemed06fc3c-d2b0-41c3-a68b-6e254f07fd53"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemb5a71775-2065-4461-a8f1-83794edd6fe0"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemfa29a5db-b1df-4b3a-980f-d206817bff09"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item4d4e44fe-d943-4e4b-852d-010d502ce884"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemc9e3fb71-6dcc-466f-8eba-eb6d10349928"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemcc70723f-691c-4ca6-a718-a38e9df797fa"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item19ca630f-8941-4bbc-83fd-0602a09c5840"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item7b44014d-d9d3-416c-b9ff-bb69b69a3529"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemaf979a1a-c7a2-4dd8-8df5-3be5437e3b8f"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item405382a3-75aa-4596-9fe1-4e245a4ca680"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item3639347e-2927-4834-a929-d94255569bf7"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item7a8bde79-0ce2-4935-9f09-afa27ce22ebc"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item08993f7b-07ea-4e71-86f4-d172022b183b"),]),
    getItem("Tools", "Item59674215-6976-40ca-b833-f1e1425e6f8c", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemdf9c0c33-4ba8-4bb2-bc1f-934f524b92e9"),]),
    getItem("Tree Select", "Itema81c1106-d4b1-4b77-8b76-60aaf3a4d24b", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item801e697c-a2b2-4afc-8512-0c4f3d2227cc"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item81810c28-85f4-4be9-acf3-b551ac829955"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itema354fa68-aec5-45ae-8f8f-654d63ce0d35"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item06021145-7817-44b2-943b-653b58679f98"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item9a094e30-3a7e-4fd0-b4c9-736110d66f18"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item04c7d402-6e38-4d19-b776-305c0a59f871"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item152d0591-db83-45a8-95ba-c50780342956"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item1294ec80-9c48-4bca-bb22-3319edf70a5e"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item6b24b32f-b25d-43fd-a8a6-5bb13a8e0107"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemd7343862-d0ab-4da4-abdc-1877dfeb3a73"),]