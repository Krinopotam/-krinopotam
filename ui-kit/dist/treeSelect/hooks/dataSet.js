import { useCallback, useState } from 'react';
export const useDataSet = (titleRender, labelRender, isMountedRef) => {
    const [dataSet, setDataSet] = useState();
    const setPreparedDataSet = useCallback((newDataSet) => {
        if (!isMountedRef.current)
            return;
        if (!newDataSet) {
            setDataSet(undefined);
            return;
        }
        let preparedDataSet;
        if (titleRender || labelRender)
            preparedDataSet = prepareNodeRender(newDataSet, titleRender, labelRender);
        else
            preparedDataSet = newDataSet;
        setDataSet(preparedDataSet);
    }, [titleRender, labelRender, isMountedRef]);
    return [dataSet, setPreparedDataSet];
};
const prepareNodeRender = (dataSet, titleRender, labelRender) => {
    if (!dataSet)
        return [];
    const newDataSet = [];
    for (const node of dataSet) {
        const nodeClone = Object.assign({}, node);
        if (labelRender)
            nodeClone['__label'] = labelRender(node);
        if (titleRender)
            nodeClone['__title'] = titleRender(node);
        newDataSet.push(nodeClone);
        if (node.children)
            nodeClone.children = prepareNodeRender(nodeClone.children, titleRender, labelRender);
    }
    return newDataSet;
};
