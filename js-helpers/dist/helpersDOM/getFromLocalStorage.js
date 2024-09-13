/** Retrieve value from browser local storage */
export const GetFromLocalStorage = (key) => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return undefined;
    }
    const userData = localStorage.getItem(key);
    return userData ? JSON.parse(userData) : undefined;
};
