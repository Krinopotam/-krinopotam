import {useMemo, useState} from 'react';
import {GetNanoId} from "@krinopotam/js-helpers";
import {ITreeSelectNode, ITreeSelectApi} from '@src/treeSelect';
import {IDFormModalProps, IDFormModalApi} from '@src/dFormModal';
import {IDFormDataSet} from "@src/dForm";

export const useEditableInit = (api: ITreeSelectApi): [typeof formProps, typeof formApi] => {
    const treeProps = api.getProps();
    const treeFormProps = treeProps.editFormProps;
    const [formApi] = useState<IDFormModalApi>((treeFormProps?.apiRef || {}) as IDFormModalApi);
    const [formId] = useState(treeFormProps?.formId ?? 'SelectItemEdit-' + GetNanoId());

    const formProps: IDFormModalProps | undefined = useMemo(() => {
        if (!treeFormProps) return undefined;

        const defaultProps = {
            width: 400,
            minWidth: 200,
            bodyHeight: 200,
            bodyMinHeight: 40,
        };

        const props: IDFormModalProps = {...defaultProps, ...treeFormProps, ...{apiRef: formApi, formId: formId}};

        const userOnSubmitSuccess = props?.onSubmitSuccess
        props.onSubmitSuccess = (values, dataSet: IDFormDataSet, resultData, formApi) => {
            if (!resultData || userOnSubmitSuccess?.(values, dataSet, resultData, formApi) === false) return;

            const resultNode = {...(formApi.model.getFormDataSet() ?? {}), ...resultData};

            const formProps = formApi.getFormProps();
            if (formProps.formMode === 'update') api.updateNodes(resultNode);
            else {
                const parents = api.getSelectedKeys();
                const parent = parents && parents.length > 0 ? parents[0] : undefined;
                api.addNode(parent, resultNode);
            }

            api.setSelectedKeys([resultNode as ITreeSelectNode]);
        };

        return props;
    }, [treeFormProps, formApi, formId, api]);

    return [formProps, formApi];
};
