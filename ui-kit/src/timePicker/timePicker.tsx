import * as React from 'react';
import {TimePicker as AntTimePicker} from 'antd';


export type ITimePickerProps = Omit<React.ComponentProps<typeof AntTimePicker>, 'hashId'> & {
    readOnly?: boolean;
};


export const TimePicker = ({allowClear, open, panelRender, inputReadOnly, readOnly, ...props}: ITimePickerProps) => {
    return (
        <AntTimePicker
            {...props}
            allowClear={readOnly ? false : allowClear}
            open={readOnly ? false : open}
            inputReadOnly={readOnly ? true : inputReadOnly}
            panelRender={readOnly ? () => null : panelRender}
        />
    );
};

TimePicker.displayName = 'TimePicker';

