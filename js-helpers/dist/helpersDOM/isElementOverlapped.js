export const _IsElementOverlapped = (elem) => {
    const isOverlap = (elem1, elem2) => {
        const rect1 = elem1.getBoundingClientRect();
        const rect2 = elem2.getBoundingClientRect();
        return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
    };
    const recursiveCheck = (target, entry, parent) => {
        if (!parent)
            return false;
        const childrenCount = parent.childElementCount;
        let isBeforeEntry = true;
        const parseZIndex = parseInt(window.getComputedStyle(target).zIndex);
        const targetZIndex = isNaN(parseZIndex) ? 0 : parseZIndex;
        for (let i = 0; i < childrenCount; i++) {
            const curElem = parent.children[i];
            if (curElem === entry) {
                isBeforeEntry = false;
                continue;
            }
            const parseCurZIndex = parseInt(window.getComputedStyle(curElem).zIndex);
            const curZIndex = isNaN(parseCurZIndex) ? 0 : parseCurZIndex;
            if (isBeforeEntry && targetZIndex >= curZIndex)
                continue;
            return isOverlap(target, curElem);
        }
        return recursiveCheck(target, parent, parent.parentElement);
    };
    return recursiveCheck(elem, elem, elem.parentElement);
};