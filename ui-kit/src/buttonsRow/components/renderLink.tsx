import React from "react";
import {IFormButton} from "@src/buttonsRow";


export const RenderLink = (button:IFormButton): React.JSX.Element => {
    return <a href={button.href} target={button.target} rel={button.rel} style={button.style}>
        {button.title}
    </a>
}