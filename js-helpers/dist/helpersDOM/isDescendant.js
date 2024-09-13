/** Returns true if child is descendant of parent on any level */
export const IsDescendant = (parent, child, includeSelf) => {
    if (!parent || !child)
        return false;
    if (includeSelf && parent === child)
        return true;
    let node = child.parentNode;
    while (node != null) {
        if (node == parent)
            return true;
        node = node.parentNode;
    }
    return false;
};
