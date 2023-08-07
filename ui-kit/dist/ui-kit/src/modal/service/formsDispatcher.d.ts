export declare class FormsDispatcher {
    private static _instance;
    private readonly _formsStack;
    private _activeFormId;
    constructor();
    static get Instance(): FormsDispatcher;
    pushToStack(id: string): void;
    removeFromStack(id: string): void;
    getActive(): string;
    isActive(id: string): boolean;
}
declare const dispatcher: FormsDispatcher;
export default dispatcher;
