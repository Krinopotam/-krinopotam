import {ILabeledValue} from '@src/treeSelect/types/types';

export const useApiGetValues = (value: ILabeledValue[] | undefined) => {
    return () => value;
};
