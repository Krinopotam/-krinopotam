/** Remove value from browser local storage */
export const RemoveFromLocalStorage = (key: string) => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return;
    }
    localStorage.removeItem(key);
}