import {setScrollToRowPatch} from './scrollToRowPositionPatсh';
import {setFindRowPatch} from './findRowPatch';

export const setPatches = (tableApi) => {
    //setScrollToRowPatch(tableApi);
    setFindRowPatch(tableApi);
};
