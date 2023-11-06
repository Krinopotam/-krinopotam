export declare const IsElementVisible: (elem: Element | null) => boolean;
export declare const IsDescendant: (parent: HTMLElement | null, child: Element | null, includeSelf?: boolean) => boolean;
export declare const AddToLocalStorage: <T>(key: string, value: T) => void;
export declare const GetFromLocalStorage: <T = unknown>(key: string) => T | undefined;
export declare const RemoveFromLocalStorage: (key: string) => void;
export declare const ClearLocalStorage: () => void;
export declare const IsElementOverlapped: (elem: Element) => boolean;
