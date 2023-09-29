
    import React from 'react';
    import {FormBetweenFields} from '../../components/dynamicForm/formBetweenFields';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageFormBetweenFields = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import {DForm} from @krinopotam/ui-kit/dynamicForm';
import {DFormConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/dFormConfig';
import React from 'react';
import {TreeSelectComponentConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/treeSelectComponentConfig';
import {IDFormFieldTreeSelectProps} from @krinopotam/ui-kit/dynamicForm/components/treeSelectComponent';
interface IFields {
    tip: string;
    process: string;
}
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
const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        new TreeSelectComponentConfig<IFields>('tip').label('Тип процесса').fetchMode('onUse').dataSet(dataSet1),
        new TreeSelectComponentConfig<IFields>('process').label('Процессы').fetchMode('onUse').dataSet([{}])
    )
    .callbacks({
        onFieldValueChanged: (fieldName, _value, _prevValue, formApi) => {
            if (fieldName !== 'tip') return;
            const tipValue = formApi.model.getFieldValue('tip') as Record<'id', unknown>;
            let newDataSet: IDFormFieldTreeSelectProps['dataSet'];
            if (!tipValue) newDataSet = [];
            else if (tipValue.id === '1') newDataSet = dataSet2_1;
            else if (tipValue.id === '2') newDataSet = dataSet2_2;
            else newDataSet = [];
            if (!newDataSet) return;
            formApi.model.updateFieldProps('process', {dataSet: newDataSet});
        },
    })
    .buttons({ok: {position: 'right'}})
    .getConfig();
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
