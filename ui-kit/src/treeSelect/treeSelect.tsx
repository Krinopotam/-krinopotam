import {Col, Row} from 'antd';
import {DFormModal} from '@src/dFormModal';
import React, {useEffect, useMemo, useState} from 'react';
import {GetNanoId, SplitObject} from '@krinopotam/js-helpers';
import {TreeSelectRender} from '@src/treeSelect/renders/treeSelectRender';
import {useEditableInit} from '@src/treeSelect/hooks/useEditForm';
import {useInitApi} from '@src/treeSelect/hooks/api';
import {useGetActualProps} from '@krinopotam/common-hooks';
import {ButtonsRow, IButtonsRowApi} from '@src/buttonsRow/buttonsRow';
import {useInitButtons} from '@src/treeSelect/hooks/buttons';

import {IAntTreeSelectProps, ITreeSelectApi, ITreeSelectBaseProps, ITreeSelectProps} from "@src/treeSelect/types/types";

//endregion

export const TreeSelect = (props: ITreeSelectProps): React.JSX.Element => {
    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const treeSelectProps = useSplitProps(allProps);

    const [componentId] = useState(allProps.componentId ?? 'treeSelect-' + GetNanoId());
    const [api] = useState((allProps.apiRef ?? {}) as ITreeSelectApi);
    const [buttonsApi] = useState({} as IButtonsRowApi);
    useInitApi({api, componentId, props: allProps, setProps: setAllProps, buttonsApi});
    const [editFormProps, formApi] = useEditableInit(api);
    const buttons = useInitButtons(api, formApi); //init buttons

    /** Fetch on load */
    useEffect(() => {
        if ((!allProps.fetchMode || allProps.fetchMode === 'onLoad') && !allProps.minSearchLength) api.fetchData('');
        else if (!api.getIsReady()) allProps?.onReady?.();
    }, [api, allProps, allProps.fetchMode, allProps.minSearchLength]);


    if (!editFormProps || allProps.readOnly || allProps.disabled)
        return <TreeSelectRender api={api} allProps={props} treeSelectProps={treeSelectProps}/>;

    return (
        <Row wrap={false}>
            {/*<Col flex="auto">{treeSelect}</Col> */}
            <TreeSelectRender api={api} allProps={props} treeSelectProps={treeSelectProps}/>
            <Col>
                <ButtonsRow buttons={buttons} apiRef={buttonsApi} context={api}/>
            </Col>
            <DFormModal {...editFormProps} />
        </Row>
    );
};

const useSplitProps = (props: ITreeSelectProps) => {
    return useMemo((): IAntTreeSelectProps => {
        const result = SplitObject<ITreeSelectBaseProps, IAntTreeSelectProps>(props, {
            apiRef: true,
            componentId: true,
            dataMutator: true,
            readOnly: true,
            value: true,
            defaultValueCallback: true,
            filterTreeNode: true,
            dataSet: true,
            fetchMode: true,
            noCacheFetchedData: true,
            minSearchLength: true,
            debounce: true,
            editFormProps: true,
            nodeDeleteMessage: true,
            confirmDelete: true,
            editButtons: true,
            plainList: true,
            onReady: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchComplete: true,
            onDelete: true,
            fieldNames: true,
            titleRender: true,
            labelRender: true,
        });

        return result[1];
    }, [props]);
};
