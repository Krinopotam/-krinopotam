
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
    getItem("DForm", "Iteme46f1bb4-1d28-49ca-b73d-28a762f7f4cc", <FolderOutlined />, [
        getItem("Validation", "Itemf6a00acb-65be-4997-beb1-03d77adc16ca", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemf99b4ef7-a2ef-4766-9e47-34a15bb5f5d0"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemeb5ceeeb-07df-4d00-bd0c-c61aa6d94e7c"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item44b8180b-9f74-4fea-9faf-8cd67be63077"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemb2c40b5b-bf2b-4baf-8ae4-92f34f790afa"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item287fb64c-43e4-469a-8430-e0ba0eb92671"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item1fdc5d2f-dccd-437a-b66c-0c0f7f4d173f"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item0feae45c-4a7a-40db-8ad5-a182294ebf4c"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item98de3ede-47df-43c4-8016-e3c52222b149"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item0f3c433f-3718-4422-815d-c05a7401132d"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemd7ff5a01-67cc-4127-bf69-88312de2b1d4"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item6b5a1bf9-bbbc-405b-b5a2-9ba9c6933f2d"),]),
    getItem("DForm Modal", "Itemc3830985-c2a1-42ac-82e9-bbc3e8a7cb02", <FolderOutlined />, [
        getItem("Async", "Item68327b43-3665-44e1-9a38-09ad4c822db0", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item480d6c58-90f0-4b20-9c59-99e777aaa806"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemfca3fa52-34b7-406b-86ed-7b732d4807df"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item0e8180fd-cfe6-4ad8-a93a-1acdb04987dc"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itembf68928a-2578-4f10-988d-10bcce4c0162"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item1c6e4f95-da4a-4e83-b3e0-546bb0f53d55"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item4918d131-54c8-4341-b8a7-3e39aca0da0d"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item163a9d89-ccb4-4375-9587-aa2a5a0323d6"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemf1b84a83-c70e-4ada-ad8b-19206d315a7d"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemf374d29f-3d91-4835-a1fa-2cdaa801daec"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item089d3ad4-eb42-459e-80c2-a71a0dc9e92c"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item08285da6-8b5b-4d7d-95d6-4e6e42f3221c"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itema7878013-eeb3-4429-9213-ce3c154983c9"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemf45bf6b7-10ea-4c84-b7a1-1eb6b033148f"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item550cc51a-4820-4f0d-b98b-207727fc51d5"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item8a335203-02e9-4907-a594-47ed93776829"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemc66b3d2a-b512-42fd-8443-dd4de6f901c1"),]),
    getItem("Tabulator Grid", "Item1601a255-2ca9-4e2a-99d5-e4550f788f9b", <FolderOutlined />, [
        getItem("Async", "Iteme30e8c5b-e09d-46b4-880c-b8173b19929f", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item05e325cc-cd6d-4374-aa46-f5aa55b430ad"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item361958e1-4e3e-48b9-9b56-e1a650266555"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item896d7e66-7684-4e45-9a6e-553bb89c6da9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item25d9572e-2a9a-4b9d-94ee-9a2740d90fd7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemdae8158a-b0e4-4b3b-a67e-85012480ef1c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item1e75ad9f-f012-4606-962f-377a1443e6a6"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemd5cad5f4-da67-4761-996e-1047803a5d74"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemeb34ea5b-7251-4919-8687-e3e7f67e3382"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item4c317cd0-c101-458c-a33b-8491a071c761"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemf4de2149-9085-4e39-9257-08f82fc1f006"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item77d7e8e5-0603-48a8-84d9-27950233c8a5"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemd4f18433-6573-4352-b7cb-3983e20f721e"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd7270a4c-2615-4ced-89c7-f55a66823c7e"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemdce99634-d670-4a10-9f59-9dc721e5d5db"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemaaad6043-0277-4dac-96fc-df7e2134c375"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item0822bd69-0bdb-498a-873f-dcd642f32e42"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item40a54bfa-0914-44ee-8892-94ec9e9a2f73"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemc34b4f00-fb00-4f93-a04b-26d9396e203f"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemf1a0db19-1c06-49a3-a942-15a09d7cda45"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemcf45171a-a8d2-46b1-aa11-d7c532c0cc4c"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item21cb2138-ff88-4ca8-a6a7-a5f2278cab26"),]),
    getItem("Tools", "Itema7d573ed-2e8b-4292-962e-36d7c99fea51", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Iteme9f3338f-3d9d-47a0-b8dd-4a8571d79301"),]),
    getItem("Tree Select", "Item126564e0-02ce-4f51-a792-dd12fd2ab67e", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itembd37c6a2-d49b-440e-bac4-943f722128db"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itema9ac73c8-9d79-4b7f-a14a-cfe48ed52d9e"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itema254d898-7153-4f07-b135-6167d8890514"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemaac90713-424e-4b3f-b43b-46ffb4605086"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item71a6bb0e-e31a-484e-bfff-48fcbf89325c"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item599be622-996a-450c-aacb-72a1aa868bb0"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item4b4f41ed-e792-481b-9d80-5913f814e86f"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item73b3aeaf-e10e-44b1-8de5-215b9c0bc850"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item9864abfa-c801-44da-909e-1d52a0e97daf"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemc59cc78e-8cdc-4766-8330-de3b203aa821"),]