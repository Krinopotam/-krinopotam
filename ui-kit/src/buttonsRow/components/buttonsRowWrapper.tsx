import {IsDescendant} from '@krinopotam/js-helpers/helpersDOM/isDescendant';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import React, {CSSProperties, forwardRef, RefObject, useEffect, useMemo, useRef, useState} from 'react';

export interface IButtonRowWrapperContext {
    wrapperId: string;
    wrapperRef: React.RefObject<HTMLDivElement> | undefined;
}

export const ButtonRowWrapperContext = React.createContext<IButtonRowWrapperContext>({
    wrapperId: '',
    wrapperRef: undefined,
});

export interface IButtonRowWrapperRemoteCallbacks {
    /** Callback called by the parent component when it is fully rendered (exist in DOM) */
    onParentComponentRendered?: () => void;
}

export interface IButtonRowWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    remoteCallbacksRef?: React.RefObject<IButtonRowWrapperRemoteCallbacks>;
    /** By default, button wrapper tries to keep focus. Set it false to disable  */
    keepFocus?: boolean;
}

export const ButtonsRowWrapper = forwardRef<HTMLDivElement, IButtonRowWrapperProps>((props, ref): React.JSX.Element => {
    const defaultRef = useRef<HTMLDivElement>(null); //used in case ref is not provided
    const [wrapperId] = useState(GetNanoId());

    const defStyle: CSSProperties = {
        outline: 'none',
        height: '100%',
        width: '100%',
        flex: 1,

        /** for debug  */
        /*
        borderStyle: "solid",
        borderColor: 'red',
        borderWidth: 3
        */
    };

    useEffect(() => {
        if (props.keepFocus !== false) {
            //WORKAROUND: MessageBox cannot tell when it is open. But when opening the MessageBox we need to set focus to the Wrapper for the arrow controls to work
            ensureWrapperFocus(ref ? (ref as RefObject<HTMLDivElement>).current : defaultRef.current, props);
        }
    }, [props, ref]);

    if (props.remoteCallbacksRef?.current && typeof props.remoteCallbacksRef?.current === 'object') {
        props.remoteCallbacksRef.current.onParentComponentRendered = () =>
            ensureWrapperFocus(ref ? (ref as RefObject<HTMLDivElement>).current : defaultRef.current, props);
    }

    const style = {...defStyle, ...props?.style};

    const wrapperContext = useMemo(() => {
        return {
            wrapperId: wrapperId,
            wrapperRef: (ref as RefObject<HTMLDivElement>) ?? defaultRef,
        };
    }, [ref, wrapperId]);

    return (
        <div ref={ref ?? defaultRef} className={'buttons-row-wrapper-' + wrapperId} tabIndex={-1} style={style}>
            <ButtonRowWrapperContext.Provider value={wrapperContext}>{props.children}</ButtonRowWrapperContext.Provider>
        </div>
    );
});
ButtonsRowWrapper.displayName = 'ButtonsRowWrapper';

// noinspection JSUnusedGlobalSymbols
export default ButtonsRowWrapper;

const ensureWrapperFocus = (wrapper: HTMLElement | null, props: IButtonRowWrapperProps) => {
    if (!wrapper || props.keepFocus === false) return;
    if (IsDescendant(wrapper, document.activeElement)) return; //if content inside the wrapper already has focus, do not set it again
    wrapper.focus();
};
