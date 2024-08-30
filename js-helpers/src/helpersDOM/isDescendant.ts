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