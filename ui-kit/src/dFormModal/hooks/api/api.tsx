import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import React, {useState} from 'react';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {useApiGetId} from '@src/_shared/hooks/componentApiMethods/useApiGetId';
import {useApiGetProps} from '@src/_shared/hooks/componentApiMethods/useApiGetProps';
import {useApiSetProps} from '@src/_shared/hooks/componentApiMethods/useApiSetProps';
import {useApiUpdateProps} from '@src/_shared/hooks/componentApiMethods/useApiUpdateProps';
import {useApiIsMounted} from '@src/_shared/hooks/componentApiMethods/useApiIsMointed';
import {useApiGetButtonsApi} from '@src/_shared/hooks/componentApiMethods/useApiGetButtonsApi';
import {useApiT} from '@src/dFormModal/hooks/api/useApiT';
import {useTitleState} from '@src/dFormModal/hooks/api/useTitleState';
import {useApiGetTitle} from '@src/dFormModal/hooks/api/useApiGetTitle';
import {useApiSetTitle} from '@src/dFormModal/hooks/api/useApiSetTitle';
import {useApiFormOpen} from '@src/dFormModal/hooks/api/useApiFormOpen';
import {useApiFormForceClose} from '@src/dFormModal/hooks/api/useApiFormForceClose';
import {useApiTryToCloseForm} from '@src/dFormModal/hooks/api/useApiTryToCloseForm';

export const useInitApi = ({props, setProps}: {props: IDFormModalProps; setProps: React.Dispatch<React.SetStateAction<IDFormModalProps>>}) => {
    const [api] = useState((props.apiRef || {}) as IDFormModalApi);

    /*********** overridden api ***************/
    api.getId = useApiGetId(props.formId ?? 'dFormModal-' + GetNanoId());
    api.getButtonsApi = useApiGetButtonsApi();
    api.getProps = useApiGetProps(props);
    api.setProps = useApiSetProps(setProps);
    api.updateProps = useApiUpdateProps(props, setProps);
    api.getIsMounted = useApiIsMounted();
    api.t = useApiT(api);
    /** --------------*/

    api.open = useApiFormOpen(api);
    api.close = useApiTryToCloseForm(api, props);
    api.forceClose = useApiFormForceClose(api);

    const [title, setTitle] = useTitleState(props, api);
    api.getTitle = useApiGetTitle(title);
    api.setTitle = useApiSetTitle(setTitle);

    return api;
};
