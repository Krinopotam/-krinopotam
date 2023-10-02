import React, {CSSProperties} from "react";

export const ButtonsRowWrapper = (props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => {
    const defStyle:CSSProperties = {
        outline: 'none',
        height:'100%'
    }
    // eslint-disable-next-line react/prop-types
    const style = {...defStyle, ...props?.style}
    return <div className={"managed-dynamic-buttons-row"} tabIndex={0} style={style}>
        {props.children}
    </div>
}

export default ButtonsRowWrapper;