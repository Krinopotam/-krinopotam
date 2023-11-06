// noinspection JSUnusedGlobalSymbols

/**
 * @DomHelpers
 * @version 1.0.32
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

/** check if element visible */
export const IsElementVisible = (elem: Element | null) => {
    if (!elem) return false;
    const recursiveCheck = (target: Element | null): boolean => {
        if (!target) return true;
        const display = window.getComputedStyle(target).display;
        const visibility = window.getComputedStyle(target).visibility;
        if (display === 'none' || visibility === 'hidden') return false;
        return recursiveCheck(target.parentElement);
    };

    return recursiveCheck(elem);
};

/** Returns true if child is descendant of parent on any level */
export const IsDescendant = (parent: HTMLElement | null, child: Element | null, includeSelf?: boolean) => {
    if (!parent || !child) return false;

    if (includeSelf && parent === child) return true;

    let node = child.parentNode;
    while (node != null) {
        if (node == parent) return true;
        node = node.parentNode;
    }
    return false;
};

/** Add value to browser local storage */
export const AddToLocalStorage = <T>(key: string, value: T) => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return;
    }

    const userData = JSON.stringify(value)
    localStorage.setItem(key, userData);
}

/** Retrieve value from browser local storage */
export const GetFromLocalStorage = <T = unknown>(key: string): T | undefined => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return undefined;
    }
    const userData = localStorage.getItem(key);
    return userData ? JSON.parse(userData) as T : undefined;
}

/** Remove value from browser local storage */
export const RemoveFromLocalStorage = (key: string) => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return;
    }
    localStorage.removeItem(key);
}

/** Clear browser local storage */
export const ClearLocalStorage = () => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return;
    }
    localStorage.clear();
}

/** Check is element is overlapped by another element */
// !Function uncompleted and doesn't work
export const IsElementOverlapped = (elem: Element) => {
    const isOverlap = (elem1: Element, elem2: Element) => {
        const rect1 = elem1.getBoundingClientRect();
        const rect2 = elem2.getBoundingClientRect();
        return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
    };

    const recursiveCheck = (target: Element, entry: Element, parent: Element | null): boolean => {
        if (!parent) return false;
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

            if (isBeforeEntry && targetZIndex >= curZIndex) continue;
            return isOverlap(target, curElem);
        }

        return recursiveCheck(target, parent, parent.parentElement);
    };

    return recursiveCheck(elem, elem, elem.parentElement);
};
