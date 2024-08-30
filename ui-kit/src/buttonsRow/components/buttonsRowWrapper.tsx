import React, {CSSProperties, useMemo, useRef, useState} from 'react';
import {GetNanoId, IsDescendant} from '@krinopotam/js-helpers';

export interface IButtonRowWrapperContext {
    wrapperId: string;
    wrapperRef: React.RefObject<HTMLDivElement> | undefined;
}

export const ButtonRowWrapperContext = React.createContext<IButtonRowWrapperContext>({wrapperId: '', wrapperRef: undefined});

export interface IButtonRowWrapperRemoteCallbacks {
    /** Callback called by the parent component when it is fully rendered (exist in DOM) */
    onParentComponentRendered?: () => void
}

export interface IButtonRowWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    remoteCallbacksRef?: React.RefObject<IButtonRowWrapperRemoteCallbacks>;
}

export const ButtonsRowWrapper = (props: IButtonRowWrapperProps): React.JSX.Element => {
    const [wrapperId] = useState(GetNanoId());

    const defStyle: CSSProperties = {
        outline: 'none',
        height: '100%',
        width: '100%',
        flex:1

        /** for debug  */
        /*
        borderStyle: "solid",
        borderColor: 'red',
        borderWidth: 3
        */
    }

    if (props.remoteCallbacksRef?.current && typeof props.remoteCallbacksRef?.current === 'object') {
        props.remoteCallbacksRef.current.onParentComponentRendered = () => ensureWrapperFocus(wrapperRef.current);
    }

    setTimeout(() => { //WORKAROUND: MessageBox cannot tell when it is open. But when opening the MessageBox we need to set focus to the Wrapper for the arrow controls to work
        ensureWrapperFocus(wrapperRef.current);
    }, 0)

    const wrapperRef = useRef<HTMLDivElement>(null)

    // eslint-disable-next-line react/prop-types
    const style = {...defStyle, ...props?.style}

    const wrapperContext = useMemo(() => {
        return {
            wrapperId: wrapperId,
            wrapperRef: wrapperRef
        }
    }, [wrapperId])

    return <div ref={wrapperRef} className={'buttons-row-wrapper-' + wrapperId} tabIndex={-1} style={style}>
        <ButtonRowWrapperContext.Provider value={wrapperContext}>
            {props.children}
        </ButtonRowWrapperContext.Provider>
    </div>
}

// noinspection JSUnusedGlobalSymbols
export default ButtonsRowWrapper;

const ensureWrapperFocus = (wrapper: HTMLElement | null) => {
    if (!wrapper) return;
    if (IsDescendant(wrapper, document.activeElement)) return;
    wrapper.focus();
}