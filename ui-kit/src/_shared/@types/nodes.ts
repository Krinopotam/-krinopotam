import * as React from "react";

export type IKey = string | number | bigint;

export interface IFindNodeOptions {
    /** If true, search will be performed only in the same level */
    sameLevelOnly?: boolean;
    /** If true, search will be performed only in the expanded nodes (default true) */
    expandedOnly?: boolean;
    /** If true, search will be performed only in the selectable nodes (default true) */
    selectableOnly?: boolean;
    /** If true, search will be performed only in the not disabled nodes (default true) */
    notDisabled?: boolean;
}

export type IFieldNames = {key: string; title: string; children: string};

export interface IBaseTreeComponentProps<T extends Record<string, unknown> = Record<string, unknown>> {
    dataSet?: T[];
    defaultExpandAll?: boolean;
    fieldNames?: Partial<IFieldNames>;
    expandedKeys?: React.Key[];
    defaultExpandedKeys?: React.Key[];
    multiple?: boolean;
    [key: `aria-${string}`]: string | number | boolean | undefined ;
}

export type INodePosition = 'below' | 'above' | 'insideTop' | 'insideBottom';
