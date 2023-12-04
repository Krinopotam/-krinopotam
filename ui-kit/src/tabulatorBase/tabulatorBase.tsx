import 'tabulator-tables/dist/css/tabulator_simple.css';
import React from 'react';
import {useInit} from './hooks/init';
import {GetUuid} from '@krinopotam/js-helpers';
import {Stylization} from '@src/tabulatorBase/stylization';
import {ITabulator, ITabulatorProps} from "@src/tabulatorBase/types/tabulatorBaseTypes";

export const TabulatorBase = ({onTableRef, events, containerClassName, width, minWidth, maxWidth, ...props}: ITabulatorProps): React.JSX.Element => {
    const containerRef = React.useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
    const tableRef = React.useRef<ITabulator>();

    const [newId] = React.useState(GetUuid());

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
            <div ref={containerRef} id={props.id ?? newId} data-instance={props.id ?? newId} className={containerClassName} style={containerStyle} />
        </>
    );
};

export default TabulatorBase;
