
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
    getItem("Other", "Item41e7da8f-3e9b-4bd7-8674-0e212265b29d", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item135d8463-4f4b-472c-8dbc-b52b7b0a0e43"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itemc47ff0e1-be7c-4d4e-b895-9149634c1bf8"),]),
    getItem("DForm", "Item226a2c2d-e314-4304-a607-4f4e0ee0c005", <FolderOutlined />, [
        getItem("Validation", "Item3e8ee4cb-ee01-433e-8543-d245e66b470b", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item6d47a98c-390b-469e-981c-beb4dccd4365"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item78bda3e7-84d3-4086-b031-c95462eefdd3"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item526aaf3c-6094-4e38-b1e0-2bd2d605f399"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item2d8a7060-2524-44cd-b764-f203c73a326a"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item40cafde4-fc7c-4f1a-a174-2d069ea1137f"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item374006bb-c494-4c53-93e4-84bb247ad376"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemd4737651-e104-4af5-9f28-49634cf7c891"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item1159d9d0-c985-4713-8baa-d0a213b0459e"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item58d114e7-95e6-4d45-94c1-5f9cd3469fbe"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item7b1a7137-82e5-4434-b98e-5323a562a0ad"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemf15b2f89-bfb8-4d9e-9e11-a07dd35925f0"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item6d364284-c945-44f5-959f-bdeb010294cf"),]),
    getItem("DForm Modal", "Item4662adfb-12c3-450d-9246-189ea62ed0be", <FolderOutlined />, [
        getItem("Async", "Itemc6d3ca02-1774-4b81-a597-d757d59778bb", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item8ba7d5cc-7eb7-40fa-ae5c-3a0360b97475"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itembf35cbbc-df85-4204-aba1-8fc8dfb4bba8"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemef9c5152-09aa-4e7b-a91d-fd0131eb0c60"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item2c42cf14-4d81-4d9e-882b-c9ae8e2e6fc2"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item2e2cad36-026b-4fb0-b9d7-557470731d5f"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemc2933435-31f1-445a-a0b9-01b7499ccfc1"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item68df8ccd-cf21-4622-a48f-2a9ccf3b701d"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item30446272-a748-4057-ba50-946ec0a6cc79"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item6ec52f68-cccc-4412-b127-a8a1d451cf92"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item6461853e-6d43-41d6-b049-49dfeb9d435d"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item3b392b65-e4af-4a96-b538-e97cc7b412f0"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item9547915f-9012-4a11-859d-b68de0b86afd"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item9fbbef3b-bcf6-41d2-89ac-65cf13363f6c"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemcc4474cc-0a8b-4d5c-9e2c-587a3ffdddff"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemda1372de-5fa8-4b89-908c-5a4a307400ab"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item81758a36-d161-4683-8304-897fa29345f2"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item22a37f2c-aef6-444b-8ec6-debbe3df99a5"),]),
    getItem("Modal", "Itemab7d72cb-de62-4386-8548-9a6d70e9f0c5", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item0f4b1a2f-71a4-4b9b-987d-5b4431b018c5"),]),
    getItem("Tabulator Grid", "Itemca9e9824-6e01-400e-9588-d545d70e8ee9", <FolderOutlined />, [
        getItem("Async", "Item2e41a5d9-5f06-4b6f-a444-63e27b016ea2", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Iteme93a92b7-1cc3-47b9-89dc-5dc310108779"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item2c215f7e-089f-419d-a5f5-8ca7a11d3d50"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item101a01df-0946-4b89-a1a3-f5e85b9a0f5a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item6c724a83-7f25-4287-aa4c-65b774071b79"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item88b5dcb2-4b1f-4f99-a8a6-7f385c2abf69"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemd34d0889-e5bb-47cd-ae7a-139cfa3f3782"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itembdc60a59-9545-4aa0-9c92-73229011fe76"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item53f8ee34-1721-43ae-a6d0-9f48aafb0379"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Iteme4e22737-eb60-4026-8790-44a75c83832d"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemcaf893b4-c65d-40e2-9fdc-d24a1198abfe"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemc16d529f-e861-48f0-872f-242c91d2b881"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item292662ed-508e-4f5c-92c4-be5a7c834008"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item5038a48f-62d9-4fe7-8297-f3c66fd6a559"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item6517e4cc-b3d2-4a73-981a-dd8d14031304"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itema3443030-bbb9-4e01-8252-de2d03901559"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item594ff006-e502-4158-87fc-21f02784945a"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item8f2dffd3-b37f-4711-afa6-f65cc6eb858b"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item9808f0bc-cec7-4a28-a496-59f197d3b7fd"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item41c858ad-7385-4e4a-8646-f6861ed5391f"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item899de6fe-f963-4f14-8f94-80f2e866a7f0"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item2686f54f-669e-438a-82cf-abf6433005c7"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Iteme8e10885-c1fe-43e4-b2ef-844f3e6795fc"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemc48c5861-8a2c-4ee8-bcde-590f583262d4"),]),
    getItem("Tools", "Item98fcef0c-5c34-4c79-a775-3cff8cc8db17", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemb475bfee-3c4a-4693-a39a-8c7692a89710"),]),
    getItem("Tree Select", "Item290d3bf8-9f25-49f8-82b6-737d3147ec1f", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item46354d52-6c76-4269-9457-db8da67f1f59"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemef5506cb-18d1-467e-9284-349a8c414878"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item57a6f337-c48d-47fa-954e-e217eb28c0c4"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item75a5828d-09cd-4baa-9b2d-580812d3f8bd"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemb6a6a322-16ea-445b-9840-e2de2edf57c3"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item420bc831-43e5-4b9e-a8a3-c147a9b315f2"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item430cffb8-8573-4dd7-ae1f-a8e960ffcb38"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemecb7ff93-e852-489a-a466-31bdaa7d7d91"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemfa0b64bb-1ed1-490c-a8ef-912524a9659b"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item9ee27633-8657-41de-864a-5559ebf79a03"),]