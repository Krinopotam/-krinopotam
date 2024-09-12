
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
    getItem("Other", "Item9f4d76ec-8ac4-48e3-b3c1-6307d6e510f2", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemaae0d917-3912-4b18-9d2e-59df0e996cc6"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itemf88eeb0d-4636-4cb5-b6a2-9b912784f082"),]),
    getItem("DForm", "Iteme0570946-ca10-4cc0-9498-322bd71b4ea3", <FolderOutlined />, [
        getItem("Validation", "Itemfd1cfa3d-3f83-4f7b-a1a0-b5daf894cd7e", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Iteme1c6c80a-58b2-4de2-b94f-431bedb475b7"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item4ce8f16a-0475-46f8-ba4a-00421cc2ac02"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item65b4157f-f6b1-480e-83e6-d37093c1ccf9"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item0694a0a4-21a3-421a-bd78-d6e938ef4606"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemdcd9cca4-eba7-448e-9d99-1353ce7fd7e5"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item3dabed32-68e8-4348-8b84-7bfceaac149d"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item944aff73-e9d8-42ba-8560-ee0634214046"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itema98cdcac-5228-4e3b-ba03-746562362d7a"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item991b213e-8eb9-4bbf-92d9-2a6887621180"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemf4460f13-3658-4fe1-be92-3cc54b949543"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item4bdf2aaa-1531-45d0-ae19-0defc5868963"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item54c83fe7-9f90-41db-abc8-5aa9feeb7da0"),]),
    getItem("DForm Modal", "Item3ee72041-c2ae-4f2e-bdfe-dbff052530ec", <FolderOutlined />, [
        getItem("Async", "Itemaa81fe62-05e3-43bf-acb9-4574f7e0341c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itema0ea4ac3-901d-4f19-b543-0063b6b6cfe1"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item564b3628-ecc3-44d6-9a7c-42ccdfa91305"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item16949a1e-f28c-48cd-878d-375b21192f97"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Iteme1a757f6-e54c-449e-9f56-7d56bc83e457"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item29632698-beb2-48e0-af9c-c538c27802c4"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itema6f0a9d0-7d43-4214-86af-9e0a85ea6fb7"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item0d4062f6-3a49-4c8d-909d-5ec41ddf395f"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item8a0ee170-2a49-421d-abcc-6538b9feb47d"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemcb261ef5-bb48-4be7-ae4a-fd1cf053f270"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemcf8c7570-5baf-4cb1-b944-6aceb33a6578"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item0050b577-9e22-47ca-aacd-22c4c8efaaee"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item1b0b2d0a-89ba-418d-a85c-ff9c3225959a"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item13a2572f-daf3-446f-a3a8-b1b97eafaafd"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item7eaa6367-0638-4b77-915a-be851d99dc5e"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemb57fcc3f-c109-42fe-b44c-8680385a23eb"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item6cc74ee9-041f-45b3-be71-191f00780df0"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item89a30abc-177c-40ec-ab3c-6a1bfdc31558"),]),
    getItem("Modal", "Item3b23b527-1339-4738-8b43-af13e7df17c5", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item504c67a5-158f-4757-8ba9-f5dba7ff627b"),]),
    getItem("Tabulator Grid", "Item3a3220ea-e678-4268-b8bd-e68f231881db", <FolderOutlined />, [
        getItem("Async", "Item3ba84996-5b8c-402f-8c55-02f07a805368", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item0c6edeb0-4751-4245-8ae9-01d25724876c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item79ef1189-819a-44e3-923a-c9677c728c73"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item5efa3979-adc0-4a09-b246-49e992a70288"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemd3c2559f-9c6f-406c-a4d6-36ab0131a76c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itembe9643cf-b38d-4a53-a18e-e1b8735052fd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item5a31d6a5-be48-43db-886b-9008e703b62b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Iteme2a2a815-4699-4a3a-8c80-9eb11a35631d"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item96f57f2e-1b31-44e3-be32-18faa17aaa59"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemb1d837f0-3b93-4157-bb93-06628bbc1f6f"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item676d4d7d-44cd-487e-bafa-3e548c4d58c1"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemc80330fc-13fe-4edf-9fcd-e475575a8153"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemae9f66e7-d4a2-4727-9921-ecae1d89e397"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item48efbbf4-a10b-45e6-8d7a-1294960a1777"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemd88bae9a-ebda-487e-bf54-f9a898c6fa3c"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item0c1486ad-fef9-44d4-87ad-77dc3650d75b"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Iteme880d7af-d19a-431b-bce9-c246fbbf952f"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item22dc7b26-025d-4f2d-a01b-2f7e627ebda1"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemde47a3dc-9ce5-4b75-8902-52d2fab507d4"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemc9d31252-938f-4358-8a3f-6b6680d969fe"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item22e5cb1e-5a22-414e-a414-3940543aa2f1"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemcab4a6ad-1583-4e60-9f59-7910649b0c1c"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemf1e85971-f322-4e41-a9ff-22930fc7422b"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item2247c6de-5a5e-4225-a229-c54ed3b376f9"),]),
    getItem("Tools", "Item3a441938-b514-4d81-9693-46397d65bb5f", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item70ac90c5-dd52-4b2c-992d-da2cc617fa50"),]),
    getItem("Tree Select", "Itemaab08bd1-2c83-42e9-84da-a3680c7d3644", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item83744bd0-c5d5-4346-8aa4-941d346b4db4"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item9975b46f-0844-4a04-9d78-1590fef643cf"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemb5b0c4b3-ac82-4774-bbe0-3ac281bf4d70"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item057c9c00-3fc0-4e00-b692-da54ab57e83e"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item824dbcd7-f54d-40be-8c6d-f0b10c27d7fc"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item998d031d-0483-44e3-883d-5581b1504401"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item3a3fd97b-d497-4147-9919-5d04fa5209de"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemdbc2d1f2-2334-4b96-b175-575dc0aa2959"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item5ecabaee-babe-41ad-b03e-45d4bc746dee"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item56e7ab61-b85c-459f-bee3-522181c59e73"),]