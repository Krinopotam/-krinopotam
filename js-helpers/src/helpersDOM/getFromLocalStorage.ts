/** Retrieve value from browser local storage */
export const GetFromLocalStorage = <T = unknown>(key: string): T | undefined => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return undefined;
    }
    const userData = localStorage.getItem(key);
    return userData ? JSON.parse(userData) as T : undefined;
}