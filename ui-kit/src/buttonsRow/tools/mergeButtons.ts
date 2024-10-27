import {IFormButtons} from '@src/buttonsRow/types/types';
import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';

export const mergeButtons = <T1 extends IFormButtons, T2 extends IFormButtons>(buttons1: T1, buttons2?: T2 | null) => {
    return MergeObjects(buttons1, buttons2);
};
