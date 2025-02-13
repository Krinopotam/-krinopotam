import {Typography} from 'antd';
import React, {useContext, useState} from 'react';
import {Tree} from '@src/tree';
import {ITreeSelectApi} from '@src/treeSelect';
import {useGetTreeProps} from '@src/dFormConstructor/renders/fieldsTree/config/useGetTreeProps';
import {useGetTreeEditFormProps} from '@src/dFormConstructor/renders/fieldsTree/config/useGetTreeEditFormProps';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';

export const FieldsTree = (): React.JSX.Element => {
    const [treeApi] = useState({} as ITreeSelectApi);
    const {formInfo} = useContext(FormInfoContext);
    const dataSet = formInfo.toTreeDataSet();
    const editFormProps = useGetTreeEditFormProps(treeApi, formInfo);
    const treeProps = useGetTreeProps(treeApi, editFormProps, dataSet);
    return (
        <>
            <Typography.Title level={4} style={{marginBottom: 10, marginTop: 0}}>
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
