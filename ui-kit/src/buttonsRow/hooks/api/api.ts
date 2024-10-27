import {useState} from 'react';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import {IButtonRowProps, IButtonsRowApi, IFormButtons} from '@src/buttonsRow/types/types';
import {useApiGetId} from '@src/_shared/hooks/componentApiMethods/useApiGetId';
import {useApiGetProps} from '@src/_shared/hooks/componentApiMethods/useApiGetProps';
import {useApiSetProps} from '@src/_shared/hooks/componentApiMethods/useApiSetProps';
import {useApiUpdateProps} from '@src/_shared/hooks/componentApiMethods/useApiUpdateProps';
import {useApiIsMounted} from '@src/_shared/hooks/componentApiMethods/useApiIsMointed';
import {useApiButtons} from '@src/buttonsRow/hooks/api/useApiButtons';
import {useApiUpdateButtons} from '@src/buttonsRow/hooks/api/useApiUpdateButtons';
import {useApiSetNextActive} from '@src/buttonsRow/hooks/api/useApiSetNextActive';
import {useApiSetActive} from '@src/buttonsRow/hooks/api/useApiSetActive';
import {useApiLoading} from '@src/buttonsRow/hooks/api/useApiLoading';
import {useApiDisabled} from '@src/buttonsRow/hooks/api/useApiDisabled';
import {useApiDisableAll} from '@src/buttonsRow/hooks/api/useApiDisableAll';
import {useApiHidden} from '@src/buttonsRow/hooks/api/useApiHidden';
import {useApiTriggerClick} from '@src/buttonsRow/hooks/api/useApiTriggerClick';
import {useApiActiveTriggerClick} from '@src/buttonsRow/hooks/api/useApiActiveTriggerClick';

export const useApi = (
    props: IButtonRowProps,
    setProps: (props: IButtonRowProps | ((prevValue: IButtonRowProps) => IButtonRowProps)) => void,
    curButtons: IFormButtons,
    setCurButtons: (buttons: IFormButtons) => void
): IButtonsRowApi => {
    const [api] = useState((props.apiRef ?? {}) as IButtonsRowApi);

    const apiMethods: IButtonsRowApi = {
        /** Common api methods **/
        getId: useApiGetId(props.componentId ?? 'buttons-row-' + GetNanoId()),
        getProps: useApiGetProps(props),
        setProps: useApiSetProps(setProps),
        updateProps: useApiUpdateProps(props, setProps),
        getIsMounted: useApiIsMounted(),

        /** Custom api methods **/
        buttons: useApiButtons(curButtons, setCurButtons, props),
        updateButtons: useApiUpdateButtons(api),
        setNextActive: useApiSetNextActive(api),
        setActive: useApiSetActive(api),
        loading: useApiLoading(api),
        disabled: useApiDisabled(api),
        disableAll: useApiDisableAll(api),
        hidden: useApiHidden(api),
        triggerClick: useApiTriggerClick(api),
        activeTriggerClick: useApiActiveTriggerClick(api),
    };

    Object.assign(api, apiMethods);
    return api;
};
