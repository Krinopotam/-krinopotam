import React, {useEffect, useMemo} from 'react';
import {SplitObject} from '@krinopotam/js-helpers/helpersObjects/splitObject';
import {TreeSelectRender} from '@src/treeSelect/renders/treeSelectRender';
import {useInitApi} from '@src/treeSelect/hooks/api/api';
import {useGetActualProps} from '@krinopotam/common-hooks';

import {IAntTreeSelectProps, ITreeSelectOwnProps, ITreeSelectProps} from '@src/treeSelect/types/types';
import {TreeSelectProvider} from '@src/treeSelect/context/context';

export const TreeSelect = (props: ITreeSelectProps): React.JSX.Element => {
    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const treeSelectProps = useSplitProps(allProps);

    const api = useInitApi({props: allProps, setProps: setAllProps});

    /** Fetch on load */
    useEffect(() => {
        if ((!allProps.fetchMode || allProps.fetchMode === 'onLoad') && !allProps.minSearchLength) api.fetchData();
        else if (!api.getIsReady()) {
            api.setIsReady(true);
            allProps?.onReady?.();
        }
    }, [api, allProps, allProps.fetchMode, allProps.minSearchLength]);

    return (
        <TreeSelectProvider>
            <TreeSelectRender api={api} allProps={allProps} treeSelectProps={treeSelectProps} />
        </TreeSelectProvider>
    );
};

const useSplitProps = (props: ITreeSelectProps) => {
    return useMemo((): IAntTreeSelectProps => {
        const result = SplitObject<ITreeSelectOwnProps, IAntTreeSelectProps>(props, {
            apiRef: true,
            componentId: true,
            dataMutator: true,
            readOnly: true,
            value: true,
            filterTreeNode: true,
            dataSet: true,
            fetchMode: true,
            noCacheFetchedData: true,
            minSearchLength: true,
            debounce: true,
            editFormProps: true,
            nodeDeleteMessage: true,
            confirmDelete: true,
            buttons: true,
            onReady: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchComplete: true,
            onDelete: true,
            fieldNames: true,
            titleRender: true,
            selectedRender: true,
            editGroupFormProps: true,
            defaultExpandAll: true,
            defaultExpandedKeys: true,
            expandedKeys: true,
            buttonsRowStyle: true,
            buttonsRowStyles: true,
            buttonsRowWrapperStyle: true,
            buttonsIconsOnly: true,
            buttonsPosition: true,
            buttonsSize: true,
            headerLabel: true,
            language: true,
            translation: true,
            selectNewNode: true,
            groupsMode: true,
            sortOnChange: true,
            sortComparator: true,
            onChange: true,
            onGetLabelCallback: true,
            onDataSetChanged: true,
        });

        return result[1];
    }, [props]);
};
