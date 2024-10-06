import {IFormButton} from '@src/buttonsRow';
import deepmerge from "deepmerge";

export const MergeObjects = <T1 extends object, T2 extends object >(obj1:T1, obj2:T2 | undefined, opt?:deepmerge.Options):T1 & T2=>{
    return deepmerge(obj1, obj2 ?? {}, opt) as T1 & T2
}

/*export const mergeButton = (button1: IFormButton, button2: IFormButton) => {
    const result:IFormButton = {...button1}
    const recursive = () => {
        for (const key in button2) {
           const tKey = key as keyof IFormButton;
            if (!tKey) continue
            const val = button2[tKey];
            if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean' ) {
                result[tKey] = val;

            }
        }

    };

    return recursive();
};*/

function mergeButtons(button1: IFormButton, button2: IFormButton): IFormButton {
    const mergedButton: IFormButton = { ...button1 };

    Object.keys(button2).forEach((key) => {
        const keyAsIFormButtonKey = key as keyof IFormButton;

        if (typeof button2[keyAsIFormButtonKey] === 'object' && button2[keyAsIFormButtonKey] !== null) {
            if (Array.isArray(button2[keyAsIFormButtonKey])) {
                mergedButton[keyAsIFormButtonKey] = [...(mergedButton[keyAsIFormButtonKey] || []), ...button2[keyAsIFormButtonKey]];
            } else {
                mergedButton[keyAsIFormButtonKey] = mergeButtons(mergedButton[keyAsIFormButtonKey] || {}, button2[keyAsIFormButtonKey]);
            }
        } else {
            mergedButton[keyAsIFormButtonKey] = button2[keyAsIFormButtonKey];
        }
    });

    return mergedButton;
}