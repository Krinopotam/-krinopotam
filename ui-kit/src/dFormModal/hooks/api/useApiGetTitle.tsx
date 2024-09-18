import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';

export const useApiGetTitle =
    (title: IDFormModalProps['title']): IDFormModalApi['getTitle'] =>
        () =>
            title;