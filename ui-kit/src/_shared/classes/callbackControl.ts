export class CallbackControl {
    private _preventOriginal = false;

    preventOriginal() {
        this._preventOriginal = true;
    }

    isPrevented() {
        return this._preventOriginal;
    }
}
