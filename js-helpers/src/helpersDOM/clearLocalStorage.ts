/** Clear browser local storage */
export const ClearLocalStorage = () => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return;
    }
    localStorage.clear();
}