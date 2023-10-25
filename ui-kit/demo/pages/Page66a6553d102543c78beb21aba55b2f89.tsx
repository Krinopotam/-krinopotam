
    import React from 'react';
    import {TabulatorGridWithFormAsync} from '../components/tabulator/tabulatorGridWithFormAsync';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page66a6553d102543c78beb21aba55b2f89 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const editFormConfig: IDFormModalProps = {
    formId: 'gridEditForm',
    layout: 'horizontal',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
    onSubmit: values => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                else resolve({data: values});
            }, 2000);
        });
    },
};
export const TabulatorGridWithFormAsync = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridWithFormAsync'}
                columns={TabulatorBaseColumns}
                columnDefaults={TabulatorBaseColumnsDef}
                editFormProps={editFormConfig}
                confirmDelete
                height={500}
                layout={'fitColumns'}
                onDataFetch={() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const random = Math.random();
                            if (random < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                            else resolve({data: TabulatorPlainData});
                        }, 2000);
                    });
                }}
                onDelete={rows => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (Math.random() < 0.3) reject({message: 'Ошибка удаления строк', code: 400});
                            else resolve({data: rows});
                        }, 2000);
                    });
                }}
            />
        </>
    );
};
`
    return (
        <>
            <div>
                <TabulatorGridWithFormAsync />
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

export default Page66a6553d102543c78beb21aba55b2f89;
