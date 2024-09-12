import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {TreeSelectFieldRender} from '@src/dForm/fields/treeSelect/treeSelectFieldRender';
import {ITreeSelectNode, ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import {IAddParamToFunction} from '@krinopotam/service-types';

export interface ITreeSelectFieldOnlyProps extends IBaseFieldProps<TreeSelectField, ITreeSelectValue> {
    /** Data set for TreeSelect field */
    dataSet?: ITreeSelectNode[] | ((field: TreeSelectField) => ITreeSelectNode[] | undefined);

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

    /** fires when the TreeSelect trying to fetch data */
    onDataFetch?: IAddParamToFunction<ITreeSelectProps['onDataFetch'], TreeSelectField>;

    /** Fires when the component is ready for use (when it fully downloaded all the data, if necessary) */
    onReady?: IAddParamToFunction<ITreeSelectProps['onReady'], TreeSelectField>;
}

export type ITreeSelectFieldProps = ITreeSelectFieldOnlyProps &
    Omit<ITreeSelectProps, 'placeholder' | 'value' | 'dataSet' | 'onChange' | 'onDataSetChanged' | 'onDataFetch' | 'onReady'>;

export class TreeSelectField extends BaseField<ITreeSelectFieldProps> {
    protected render() {
        return <TreeSelectFieldRender field={this} />;
    }
}
