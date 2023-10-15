
    import React from 'react';
    import {FormBetweenFields} from '../../components/dynamicForm/formBetweenFields';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageFormBetweenFields = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import React from 'react';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
const dataSet1 = [
    {
        id: '1',
        title: 'Первый',
    },
    {
        id: '2',
        title: 'Второй',
    },
    {
        id: '3',
        title: 'Третий',
    },
];
const dataSet2_1 = [
    {
        id: '1',
        title: 'Первый процесс',
    },
    {
        id: '2',
        title: 'Второй процесс',
    },
];
const dataSet2_2 = [
    {
        id: '3',
        title: 'Третий процесс',
    },
    {
        id: '4',
        title: 'Четвертый процесс',
    },
];
const formProps: IDFormProps = {
    formId:'TestForm',
    confirmChanges: true,
    fieldsProps: {
        tip: {component: TreeSelectField, label: 'Тип процесса', fetchMode: 'onUse', dataSet: dataSet1, onValueChanged:(value, prevValue, field)=>{
                const tipValue = field.getValue() as Record<'id', unknown>;
                let newDataSet: ITreeSelectFieldProps['dataSet'];
                if (!tipValue) newDataSet = [];
                else if (tipValue.id === '1') newDataSet = dataSet2_1;
                else if (tipValue.id === '2') newDataSet = dataSet2_2;
                else newDataSet = [];
                if (!newDataSet) return;
                const process = field.getModel().getField('process')
                process.updateProps({dataSet: newDataSet})
            }}  as ITreeSelectFieldProps,
        process: {component: TreeSelectField, label: 'Процессы', fetchMode: 'onUse', dataSet: [{}]}
    },
    buttons: {ok: {position: 'right'}}
}
export const FormBetweenFields = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`
    return (
        <>
            <div>
                <FormBetweenFields />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default PageFormBetweenFields;
