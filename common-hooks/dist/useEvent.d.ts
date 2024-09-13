/** Always returns stable event function instance
* event function shouldn't be called in render time
*/
export declare const useEvent: <TArgs extends unknown[], TReturn>(callback: (...args: TArgs) => TReturn) => (...args: TArgs) => TReturn;
