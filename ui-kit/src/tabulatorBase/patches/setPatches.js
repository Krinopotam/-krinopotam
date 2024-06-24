//import {setScrollToRowPatch} from './scrollToRowPositionPatсh';
import {setFindRowPatch} from './findRowPatch';
import {setDisableErrorOverlayPatch} from "@src/tabulatorBase/patches/disableErrorOverlay";
import {setAjaxRequestDataCheckPatch} from "@src/tabulatorBase/patches/ajaxRequestDataCheck";

export const setPatches = (tableApi) => {
    //setScrollToRowPatch(tableApi);
    setFindRowPatch(tableApi);
    setDisableErrorOverlayPatch(tableApi)
    setAjaxRequestDataCheckPatch(tableApi)
};
