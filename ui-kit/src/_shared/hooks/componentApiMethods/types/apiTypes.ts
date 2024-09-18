import {AnyType} from "@krinopotam/service-types";

export interface IBaseComponentApi<TProps extends object = AnyType> {
    /** Get component ID */
    getId: () => string;

    /** Get component props */
    getProps: () => TProps;

    /** Set current props */
    setProps: (props: TProps) => void;

    /** Partial update current TreeSelect props */
    updateProps: (props: Partial<TProps>) => void;

    /** Get current mounted state */
    getIsMounted: () => boolean;
}

