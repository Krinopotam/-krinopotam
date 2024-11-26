import {IAnyFieldProps} from '@src/dForm/fields/base';
import {useMemo} from 'react';
import {ITreeSelectProps} from '@src/treeSelect';
import {SplitObject} from '@krinopotam/js-helpers/helpersObjects/splitObject';
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
            defaultValue: true,
            width: true,
            valueType: true,
            onDataSetChanged: true,
            onChange: true,
            dataSet: true,
            onDataFetch: true,
            onFieldDataFetch: true,
            onFieldDataFetchError: true,
            onFieldDataFetchSuccess: true,
            className: true,
            itemClassName: true,
        });

        return result[1];
    }, [props]);
};
