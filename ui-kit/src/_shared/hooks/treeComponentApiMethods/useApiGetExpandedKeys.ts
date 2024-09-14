import {IKey} from '@krinopotam/service-types';

export const useApiGetExpandedKeys = (expandedKeys: IKey[] | undefined) => () => expandedKeys;
