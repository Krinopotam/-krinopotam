
    import React from 'react';
    import {TabulatorGridTreeWithForm} from '../components/tabulator/tabulatorGridTreeWithForm';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page55badc6de1e54e52bf6ed2b4a0858906 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from "../../data/tabulatorData";
const treeSelectDataSet = [...TabulatorTreeData];
const editFormConfig: IDFormModalProps = {
    formId: 'gridEditForm',
    fieldsProps: {
        parent: {component: TreeSelectField, label: 'Родитель', dataSet: treeSelectDataSet, fieldNames: {title: 'name'}},
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
};
export const TabulatorGridTreeWithForm = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridTreeWithForm'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={TabulatorBaseColumns}
                dataSet={TabulatorTreeData}
                dataTree={true}
                height={500}
                layout={'fitColumns'}
                editFormProps={editFormConfig}
                confirmDelete
                multiSelect
            />
        </>
    );
};
`
    return (
        <>
            <div>
                <TabulatorGridTreeWithForm />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default Page55badc6de1e54e52bf6ed2b4a0858906;
