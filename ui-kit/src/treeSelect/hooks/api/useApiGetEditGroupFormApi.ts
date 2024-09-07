import {IDFormModalApi} from '@src/dFormModal';
import {useCallback} from 'react';

/** Get the editGroupFormApi */
export const useApiGetEditGroupFormApi = (editGroupFormApi: IDFormModalApi) => {
    return useCallback(() => editGroupFormApi, [editGroupFormApi]);
};