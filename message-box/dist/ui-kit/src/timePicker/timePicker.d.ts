import * as React from 'react';
import { TimePicker as AntTimePicker } from 'antd';
export type ITimePickerProps = Omit<React.ComponentProps<typeof AntTimePicker>, 'hashId'> & {
    readOnly?: boolean;
};
export declare const TimePicker: {
    ({ allowClear, open, panelRender, inputReadOnly, readOnly, ...props }: ITimePickerProps): React.JSX.Element;
    displayName: string;
};
