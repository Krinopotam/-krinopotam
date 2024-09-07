import {IDFormModalApi} from '@src/dFormModal';
import {useCallback} from 'react';

/** Get the editFormApi */
export const useApiGetEditFormApi = (editFormApi: IDFormModalApi) => {
    return useCallback(() => editFormApi, [editFormApi]);
};