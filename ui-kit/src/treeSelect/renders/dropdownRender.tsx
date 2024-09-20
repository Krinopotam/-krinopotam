import {ITreeSelectApi} from '@src/treeSelect';
import React, {useContext} from 'react';
import {DefaultDropdownRender} from '@src/treeSelect/renders/defaultDropdownRender';
import TreeSelectContext from 'rc-tree-select/es/TreeSelectContext';

export const DropdownRender = ({api, children}: {api: ITreeSelectApi; children: React.ReactElement}): React.JSX.Element => {
    const treeProps = api.getProps();

    /** WORKAROUND:  TreeSelect treeTitleRender prop is used to render both list items and the selected value, which is not suitable for us
     * Here we replace (mutate) treeTitleRender in the internal treeSelectContext, which is responsible only for rendering list elements
     * For render the selected value, treeTitleRender continues to be used, which is set via props TreeSelect */
    const treeSelectContext = useContext(TreeSelectContext);
    if (treeSelectContext) {
        if (treeProps.titleRender) treeSelectContext.treeTitleRender = treeProps.titleRender;
        else treeSelectContext.treeTitleRender = undefined;
    }

    if (treeProps.dropdownRender) return treeProps.dropdownRender(children);
    return <DefaultDropdownRender api={api}>{children}</DefaultDropdownRender>;
};

export {TreeSelectContext}