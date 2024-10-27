import 'tabulator-tables/dist/css/tabulator_simple.css';
import React, {useCallback, useRef} from 'react';
import {useInit} from './hooks/init';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import {Stylization} from '@src/tabulatorBase/stylization';
import {ITabulator, ITabulatorProps} from '@src/tabulatorBase/types/tabulatorBaseTypes';

const TabulatorBase_ = ({onTableRef, events, containerClassName, width, minWidth, maxWidth, ...props}: ITabulatorProps): React.JSX.Element => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const tableRef = React.useRef<ITabulator>();

    const [newId] = React.useState(props.id ?? GetNanoId());

    useInit({props, events, containerRef, tableRef, onTableRef});

    const containerStyle: React.CSSProperties = {
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
        userSelect: !props.allowTextSelection ? 'none' : undefined,
    };

    return (
        <>
            <Stylization striped={true} />
            <div ref={containerRef} id={newId} data-instance={newId} className={containerClassName} style={containerStyle} />
        </>
    );
};

const TabulatorBaseMemo = React.memo(TabulatorBase_);

export const TabulatorBase = (props: ITabulatorProps) => {
    /** When props data changes, the component should not be re-rendered.
     * If the grid has already been rendered, then all changes to the dataSet are carried out through the internal methods of the grid,
     * and the passed props data is left initial so that the memoized component is returned
     * */
    const newProps = {...props};
    const prevPropsRef = useRef(props);
    const isChanged = isPropsChanged(props, prevPropsRef.current)
    const prevDataRef = useRef(props.data)

    const tableRef = React.useRef<ITabulator>();

    newProps.onTableRef = useCallback(
        (ref: React.MutableRefObject<ITabulator>) => {
            tableRef.current = ref.current;
            props.onTableRef?.(ref);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.onTableRef]
    );

    if (!isChanged) {
        if (prevDataRef.current !== props.data) {
            tableRef.current?.deselectRow();//TODO: keep selected abd active rows to implement react behavior on update props
            tableRef.current?.setData(props.data);
        }
        newProps.data = prevPropsRef.current.data;
    }

    prevDataRef.current = props.data
    prevPropsRef.current = newProps;

    return <TabulatorBaseMemo {...newProps} data={prevDataRef.current} />;
};

const isPropsChanged = (newProps: ITabulatorProps, oldProps: ITabulatorProps) => {
    const newKeys = Object.keys(newProps);
    const oldKeys = Object.keys(oldProps);
    const keys = [...new Set([...newKeys ,...oldKeys])] //merge arrays and remove duplication

    for (const key of keys) {
        if (key === 'data' || key === 'onTableRef') continue;
        if (newProps[key as keyof ITabulatorProps] !== oldProps[key as keyof ITabulatorProps]) return true;
    }

    return false;
};
export default TabulatorBase;
