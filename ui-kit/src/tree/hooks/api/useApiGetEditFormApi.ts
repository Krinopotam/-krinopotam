import {IDFormModalApi} from '@src/dFormModal';

/** Get the editFormApi */
export const useApiGetEditFormApi = (editFormApi: IDFormModalApi) => {
    return () => editFormApi;
};
