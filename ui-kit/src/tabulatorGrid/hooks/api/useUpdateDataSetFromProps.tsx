import {MutableRefObject, useRef} from 'react';
import {IGridProps} from '@src/tabulatorGrid';

/**
 * DataSet can change both via Props and via api.
 * If the DataSet has changed via Props, set the new current dataSet
 */
export const useUpdateDataSetFromProps = (curDataSetRef: MutableRefObject<IGridProps['dataSet'] | undefined>, propsDataSet: IGridProps['dataSet']) => {
    const propsDataSetRef = useRef<IGridProps['dataSet']>(undefined);
    if (propsDataSetRef.current === propsDataSet) return;
    propsDataSetRef.current = propsDataSet;
    curDataSetRef.current = propsDataSet;
};