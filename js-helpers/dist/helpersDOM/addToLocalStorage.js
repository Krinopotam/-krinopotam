export const AddToLocalStorage = (key, value) => {
    if (typeof (Storage) === "undefined") {
        console.error("Local storage is not supported in this browser.");
        return;
    }
    const userData = JSON.stringify(value);
    localStorage.setItem(key, userData);
};
