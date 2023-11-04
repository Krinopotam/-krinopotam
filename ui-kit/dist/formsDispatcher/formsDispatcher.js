export class FormsDispatcher {
    constructor() {
        this._formsStack = [];
        this._activeFormId = '';
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    pushToStack(id) {
        if (this._activeFormId === id)
            return;
        this._formsStack.push(id);
        this._activeFormId = id;
    }
    removeFromStack(id) {
        const index = this._formsStack.indexOf(id);
        if (index > -1) {
            this._formsStack.splice(index, 1);
        }
        this._activeFormId = this._formsStack.length ? this._formsStack[this._formsStack.length - 1] : '';
    }
    getActive() {
        return this._activeFormId;
    }
    isActive(id) {
        return this._activeFormId === id;
    }
}
const dispatcher = FormsDispatcher.Instance;
export default dispatcher;
//# sourceMappingURL=formsDispatcher.js.map