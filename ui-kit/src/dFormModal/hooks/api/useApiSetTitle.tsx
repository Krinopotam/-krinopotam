import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';

export const useApiSetTitle = (setTitle: (title: IDFormModalProps['title']) => void): IDFormModalApi['setTitle'] => {
    return (title: IDFormModalProps['title']) => {
        setTitle(title);
    };
};