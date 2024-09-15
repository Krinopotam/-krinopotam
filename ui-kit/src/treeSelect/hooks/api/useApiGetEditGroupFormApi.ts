import {IDFormModalApi} from '@src/dFormModal';

/** Get the editGroupFormApi */
export const useApiGetEditGroupFormApi = (editGroupFormApi: IDFormModalApi) => {
    return () => editGroupFormApi;
};
