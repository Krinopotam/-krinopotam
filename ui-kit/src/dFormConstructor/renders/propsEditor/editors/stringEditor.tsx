import React, {useState} from 'react';
import {Input} from 'antd';

export const StringEditor = (props: {val: string | undefined; setVal: (val: string) => void}): React.JSX.Element => {
    const [curVal, setCurVal] = useState<string | undefined>(props.val);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurVal(e.target.value);
        props.setVal(e.target.value);
    };

    return (
        <Input
            //onBlur={onBlur}
            //onChange={onChange}
            //placeholder={fieldProps.placeholder}
            //showCount={fieldProps.showCount}
            onChange={onChange}
            value={curVal}
        />
    );
};
