export const RemoveFromLocalStorage = (key) => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return;
    }
    localStorage.removeItem(key);
};
