import {ITreeSelectProps} from '@src/treeSelect';
import React, {useEffect, useRef, useState} from 'react';

export const useOpenState = (props: ITreeSelectProps): [open: boolean | undefined, setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>] => {
    const [open, setOpen] = useState<boolean | undefined>(props.open);
    const firstUpdate = useRef(true);
    /** Set open if props changed*/
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setOpen(props.open);
    }, [props.open]);

    return [open, setOpen];
};