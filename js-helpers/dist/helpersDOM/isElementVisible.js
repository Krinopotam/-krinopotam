export const IsElementVisible = (elem) => {
    if (!elem)
        return false;
    const recursiveCheck = (target) => {
        if (!target)
            return true;
        const display = window.getComputedStyle(target).display;
        const visibility = window.getComputedStyle(target).visibility;
        if (display === 'none' || visibility === 'hidden')
            return false;
        return recursiveCheck(target.parentElement);
    };
    return recursiveCheck(elem);
};
