/** Add value to browser local storage */
export const AddToLocalStorage = <T>(key: string, value: T) => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return;
    }

    const userData = JSON.stringify(value)
    localStorage.setItem(key, userData);
}