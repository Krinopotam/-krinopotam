import {Typography} from 'antd';
import React, {useContext, useRef, useState, useSyncExternalStore} from 'react';
import {IExtTreeApi, Tree} from '@src/tree';
import {useGetTreeProps} from '@src/dFormConstructor/renders/fieldsTree/config/useGetTreeProps';
import {useGetTreeEditFormProps} from '@src/dFormConstructor/renders/fieldsTree/config/useGetTreeEditFormProps';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';

export const FieldsTree = (): React.JSX.Element => {
    const [treeApi] = useState({} as IExtTreeApi);
    const {formInfo} = useContext(FormInfoContext);
    const {sourceVer} = useSyncExternalStore(formInfo.fieldsTreeSubscribe.bind(formInfo), formInfo.getFieldsTreeRerenderSnapshot.bind(formInfo));
    const prevSourceVerRef = useRef(sourceVer)
    const sourceChanged = prevSourceVerRef.current !== sourceVer;
    prevSourceVerRef.current = sourceVer

    const dataSet = formInfo.toTreeDataSet();
    const editFormProps = useGetTreeEditFormProps(treeApi, formInfo);
    const treeProps = useGetTreeProps(treeApi, editFormProps, dataSet, sourceChanged);

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
