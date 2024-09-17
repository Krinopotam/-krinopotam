import React, {useMemo, useState} from 'react';
import {IExtTreeApi, IExtTreeNode, IExtTreeProps, IOwnExtTreeProps} from '@src/tree/types/types';
import {SplitObject} from '@krinopotam/js-helpers';
import {useInitTreeApi} from '@src/tree/hooks/api';
import {ContainerRender} from '@src/tree/renders/containerRender';
import {TreeProps} from 'antd/es/tree/Tree';

export const Tree = (props: IExtTreeProps): React.JSX.Element => {
    const [, antdTreeProps] = useSeparateProps(props);

    const [editFormApi] = useState((props.editFormProps?.apiRef ?? {}) as IExtTreeApi['editFormApi']);
    const [editGroupFormApi] = useState((props.editGroupFormProps?.apiRef ?? {}) as IExtTreeApi['editFormApi']);
    const [buttonsApi] = useState({} as IExtTreeApi['buttonsApi']);
    const [treeApi] = useState((props.apiRef || {}) as IExtTreeApi);

    useInitTreeApi({treeApi, props, editFormApi, editGroupFormApi, buttonsApi});

    return <ContainerRender allProps={props} antdTreeProps={antdTreeProps} treeApi={treeApi} />;
};

const useSeparateProps = (props: IExtTreeProps) => {
    return useMemo((): [IOwnExtTreeProps, TreeProps<IExtTreeNode>] => {
        const [ownExtendedTreeProps, antdTreeProps] = SplitObject<IOwnExtTreeProps, TreeProps<IExtTreeNode>>(props, {
            /** these properties will be in extendedTreeProps, rest in treeProps */
            id: true,
            buttons: true,
            buttonsIconsOnly: true,
            buttonsPosition: true,
            buttonsSize: true,
            confirmDelete: true,
            editFormProps: true,
            editGroupFormProps: true,
            language: true,
            readOnly: true,
            deleteMessage: true,
            translation: true,
            apiRef: true,
            headerLabel: true,
            responsiveBreakpoint: true,
            buttonsRowStyle: true,
            buttonsRowWrapperStyle: true,
            dataSet: true,
            dataMutator: true,
            noDeselect: true,
            groupsMode: true,
            /** common props */
            fieldNames: true,
        });

        return [ownExtendedTreeProps, {...antdTreeProps, fieldNames: ownExtendedTreeProps.fieldNames}];
    }, [props]);
};
