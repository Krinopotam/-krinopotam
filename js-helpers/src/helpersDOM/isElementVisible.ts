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