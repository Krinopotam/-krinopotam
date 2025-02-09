import {Typography} from 'antd';
import React, {useState} from 'react';
import {Tree} from '@src/tree';
import {ITreeSelectApi} from '@src/treeSelect';
import {useGetTreeProps} from '@src/dFormConstructor/renders/fieldsTree/config/useGetTreeProps';
import {useGetTreeEditFormProps} from '@src/dFormConstructor/renders/fieldsTree/config/useGetTreeEditFormProps';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';

export const FieldsTree = (props: {setFormProps: React.Dispatch<React.SetStateAction<object>>}): React.JSX.Element => {
    const [treeApi] = useState({} as ITreeSelectApi);
    const [, setRerenderTree] = useState({});
    const [formInfo] = useState<FormInfo>(new FormInfo({id: 'form1', label: 'My form'}));
    const dataSet = formInfo.toTreeDataSet();
    const editFormProps = useGetTreeEditFormProps(treeApi, formInfo, setRerenderTree, props.setFormProps);
    const treeProps = useGetTreeProps(treeApi, formInfo, editFormProps, dataSet, setRerenderTree, props.setFormProps);
    return (
        <>
            <Typography.Title level={3} style={{marginBottom: 10, marginTop:0}}>
                Fields
            </Typography.Title>
            <div
                style={{
                    flex: 1,
                    overflow: 'auto',
                    scrollbarColor: 'rgb(234, 234, 234)',
                    scrollbarGutter: 'stable',
                    scrollbarWidth: 'thin',
                }}
            >
                <Tree {...treeProps} />{' '}
            </div>
        </>
    );
};
