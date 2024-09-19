export class CallbackControl {
    private _preventOriginal = false;

    /**
     * Prevents the execution of the original callback (do not be confused, this will not cancel the callback call)
     * It is used in cases where it is necessary to inherit callbacks.
     * The successor callback can cancel the execution of the original callback
     */
    preventOriginal() {
        this._preventOriginal = true;
    }

    /**
     * Returns true if original callback was prevented
     */
    isPrevented() {
        return this._preventOriginal;
    }
}
