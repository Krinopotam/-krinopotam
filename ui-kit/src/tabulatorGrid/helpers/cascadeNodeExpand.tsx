import {RowComponent} from 'tabulator-tables';

export const cascadeNodeExpand = (node: RowComponent | false) => {
    if (!node) return;
    const nodeParent = node.getTreeParent();
    cascadeNodeExpand(nodeParent);
    if (!node.isTreeExpanded()) node.treeExpand();
};