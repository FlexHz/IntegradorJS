/* ===== LOCAL STORAGE =====*/
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    };
};

/* ===== GUARDAR EN LOCALSTORAGE =====*/
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        let productsInLocal = handleGetProductLocalStorage();
        const existingIndex = productsInLocal.findIndex(
            (productsLocal) => productsLocal.id === productIn.id
        );
        if (existingIndex !== -1) {
            productsInLocal[existingIndex] = productIn;
        } else {
            productsInLocal.push(productIn);
        };
        localStorage.setItem("products", JSON.stringify(productsInLocal));
    };
};