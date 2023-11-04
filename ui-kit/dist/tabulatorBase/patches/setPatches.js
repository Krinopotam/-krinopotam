import { setScrollToRowPatch } from './scrollToRowPositionPatсh';
import { setFindRowPatch } from './findRowPatch';
import { setDisableErrorOverlayPatch } from "../../tabulatorBase/patches/disableErrorOverlay";
export const setPatches = (tableApi) => {
    setScrollToRowPatch(tableApi);
    setFindRowPatch(tableApi);
    setDisableErrorOverlayPatch(tableApi);
};
//# sourceMappingURL=setPatches.js.map