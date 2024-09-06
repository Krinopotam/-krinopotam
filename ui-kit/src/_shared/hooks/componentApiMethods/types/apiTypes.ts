export interface IBaseComponentApi<TProps extends object> {
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

