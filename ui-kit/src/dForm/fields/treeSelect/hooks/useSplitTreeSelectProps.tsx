import {IAnyFieldProps} from '@src/dForm/fields/base';
import {useMemo} from 'react';
import {ITreeSelectProps} from '@src/treeSelect';
import {SplitObject} from '@krinopotam/js-helpers';
import {ITreeSelectFieldOnlyProps} from '@src/dForm/fields/treeSelect/treeSelectField';

export const useSplitTreeSelectProps = (props: IAnyFieldProps) => {
    return useMemo((): ITreeSelectProps => {
        const result = SplitObject<ITreeSelectFieldOnlyProps, ITreeSelectProps>(props, {
            autoFocus: true,
            autoHeightResize: true,
            component: true,
            dependsOn: true,
            disabled: true,
            helpClass: true,
            hidden: true,
            inlineGroup: true,
            label: true,
            nonEditable: true,
            onDirtyStateChanged: true,
            onDisabledStateChanged: true,
            onErrorChanged: true,
            onHiddenStateChanged: true,
            onLabelChanged: true,
            onReadOnlyStateChanged: true,
            onReady: true,
            onReadyStateChanged: true,
            onTouchedStateChanged: true,
            onValidated: true,
            onValueChanged: true,
            placeholder: true,
            readOnly: true,
            requiredMark: true,
            rowStyle: true,
            rules: true,
            style: true,
            tab: true,
            tooltip: true,
            value: true,
            width: true,
            valueType: true,
            onDataSetChanged: true,
            onChange: true,
        });

        return result[1];
    }, [props]);
};