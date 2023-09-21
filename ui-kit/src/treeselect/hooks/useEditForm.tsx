import {useMemo, useState} from 'react';
import {HelpersStrings} from "@krinopotam/js-helpers";
import {ITreeSelectNode} from '../treeSelect';
import {IDFormModalProps, IDFormModalApi} from '@src/dynamicFormModal';
import {ITreeSelectApi} from './api';

export const useEditableInit = (api: ITreeSelectApi): [typeof formProps, typeof formApi] => {
    const treeProps = api.getProps();
    const treeFormProps = treeProps.editFormProps;
    const [formApi] = useState<IDFormModalApi>((treeFormProps?.apiRef || {}) as IDFormModalApi);
    const [formId] = useState(treeFormProps?.formId ?? 'SelectItemEdit-' + HelpersStrings.getUuid());

    const formProps: IDFormModalProps | undefined = useMemo(() => {
        if (!treeFormProps) return undefined;

        const defaultProps = {
            width: 400,
            minWidth: 200,
            bodyHeight: 200,
            bodyMinHeight: 40,
        };

        const props:IDFormModalProps = {...defaultProps, ...treeFormProps, ...{apiRef: formApi, formId: formId}};

        if (!props.callbacks) props.callbacks = {};

        const userOnSubmitSuccess =  props.callbacks?.onSubmitSuccess
        props.callbacks.onSubmitSuccess = (values, resultVal, formApi) => {
            if (!resultVal || userOnSubmitSuccess?.(values, resultVal, formApi) === false) return;

            const resultNode = {...(formApi.model.getFormDataSet() ?? {}), ...resultVal};

            const formProps = formApi.getFormProps();
            if (formProps.formMode === 'update') api.updateNodes(resultNode);
            else {
                const parents = api.getValues();
                const parent = parents && parents.length > 0 ? parents[0] : undefined;
                api.addNodes(parent, resultNode);
            }

            api.setValues([resultNode as ITreeSelectNode]);
        };

        return props;
    }, [treeFormProps, formApi, formId, api]);

    return [formProps, formApi];
};
