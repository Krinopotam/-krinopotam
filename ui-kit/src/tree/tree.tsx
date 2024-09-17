import React, {useMemo} from 'react';
import {IExtTreeNode, IExtTreeProps, IOwnExtTreeProps} from '@src/tree/types/types';
import {SplitObject} from '@krinopotam/js-helpers';
import {useInitApi} from '@src/tree/hooks/api/api';
import {ContainerRender} from '@src/tree/renders/containerRender';
import {TreeProps} from 'antd/es/tree/Tree';
import {useGetActualProps} from '@krinopotam/common-hooks';

export const Tree = (props: IExtTreeProps): React.JSX.Element => {
    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const [, antdTreeProps] = useSeparateProps(allProps);

    const api = useInitApi({props: allProps, setProps: setAllProps});

    return <ContainerRender allProps={allProps} antdTreeProps={antdTreeProps} api={api} />;
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
            onDataSetChanged: true,
            /** common props */
            fieldNames: true,
            defaultCheckedKeys: true,
            checkedKeys: true,
            defaultExpandedKeys: true,
            expandedKeys: true,
            defaultSelectedKeys: true,
            selectedKeys: true,
        });

        return [ownExtendedTreeProps, {...antdTreeProps, fieldNames: ownExtendedTreeProps.fieldNames}];
    }, [props]);
};
