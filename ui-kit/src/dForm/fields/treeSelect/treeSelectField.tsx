import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {TreeSelectFieldRender} from '@src/dForm/fields/treeSelect/treeSelectFieldRender';
import {ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import {IAddParamToFunction} from '@krinopotam/service-types';

export interface ITreeSelectFieldOnlyProps extends IBaseFieldProps<TreeSelectField, ITreeSelectValue> {
    /** Callback for onReady event */
    onReady?: (field: TreeSelectField) => void;

    /**
     *  Value type of TreeSelect field which will be used in form (default: node)
     *  - 'key' - value will react key (string | number | bigint)
     *  - 'labeledValue' - value will TreeSelect labeled value {value: string | number | bigint, label: ReactNode}
     *  - 'node' - value will TreeSelect node, for example {id:string, title:string, ...}
     */
    valueType?: 'key' | 'labeledValue' | 'node';

    onChange?: IAddParamToFunction<ITreeSelectProps['onChange'], TreeSelectField>;

    /** Fires when the TreeSelect dataSet is changed */
    onDataSetChanged?: IAddParamToFunction<ITreeSelectProps['onDataSetChanged'], TreeSelectField>;
}

export type ITreeSelectFieldProps = ITreeSelectFieldOnlyProps & Omit<ITreeSelectProps, 'placeholder' | 'value' | 'onReady' | 'onDataSetChanged' | 'onChange'>;

export class TreeSelectField extends BaseField<ITreeSelectFieldProps> {
    protected render() {
        return <TreeSelectFieldRender field={this} />;
    }
}
