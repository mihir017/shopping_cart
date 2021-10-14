// GET ALL DATA
export const setAllData = (data) => {
    localStorage.setItem("allStoreData", JSON.stringify(data));
};
export const getAllStoreData = (query = "") => {
    if (query) {
        const data = JSON.parse(localStorage.getItem("allStoreData"));
        return data.filter((d) => query === d.product_departmentId);
    } else {
        return JSON.parse(localStorage.getItem("allStoreData"));
    }
};

export const getSearchData = (query = "") => {
    if (query) {
        const data = JSON.parse(localStorage.getItem("allStoreData"));
        return data.filter((d) => d.product_name.toLowerCase().includes(query));
    } else {
        return [];
    }
};

// GET SINGLE DATA
export const getSingleProduct = (id) => {
    const data = JSON.parse(localStorage.getItem("allStoreData"));
    return data.find((d) => {
        return d.id === id;
    });
};
export const getSingleCartProduct = (id) => {
    const data = JSON.parse(localStorage.getItem("storeCart"));
    return data.find((d) => {
        return d.id === id;
    });
};

// ADD CART DATA
export const setCartData = (cartProduct) => {
    cartProduct.cartItem = 1;
    let cart = [];
    if (Object.keys(cartProduct).length > 0) {
        if (!localStorage.getItem("storeCart")) {
            localStorage.setItem("storeCart", JSON.stringify([cartProduct]));
            return JSON.parse(localStorage.getItem("storeCart"));
        } else {
            cart = JSON.parse(localStorage.getItem("storeCart"));
            cart.forEach((storeProduct) => {
                if (storeProduct.id === cartProduct.id) {
                    storeProduct.product_price += cartProduct.product_price;
                    storeProduct.cartItem += 1;
                    cartProduct = {};
                }
            });
            if (Object.keys(cartProduct).length > 0) {
                localStorage.setItem(
                    "storeCart",
                    JSON.stringify([...cart, cartProduct])
                );
                return JSON.parse(localStorage.getItem("storeCart"));
            } else {
                localStorage.setItem("storeCart", JSON.stringify([...cart]));
                return JSON.parse(localStorage.getItem("storeCart"));
            }
        }
    }
};

export const deleteCartData = (cartProduct, query) => {
    let cart = [];
    cart = JSON.parse(localStorage.getItem("storeCart"));
    if (query === "decrese") {
        cart.forEach((storeProduct) => {
            if (storeProduct.id === cartProduct.id) {
                storeProduct.product_price -= cartProduct.product_price;
                storeProduct.cartItem -= 1;
            }
        });
        localStorage.setItem(
            "storeCart",
            JSON.stringify(cart.filter((cart_item) => cart_item.cartItem !== 0))
        );
    } else if (query === "remove") {
        localStorage.setItem(
            "storeCart",
            JSON.stringify(
                cart.filter((cart_item) => cart_item.id !== cartProduct.id)
            )
        );
    }
    return JSON.parse(localStorage.getItem("storeCart"));
};
export const deleteCart = () => {
    localStorage.setItem("storeCart", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("storeCart"));
};

// GET ALL CART DATA
export const getCartData = () => {
    return JSON.parse(localStorage.getItem("storeCart"));
};

export const setPlaceOrder = (orderProduct) => {
    let order = [];
    if (Object.keys(orderProduct).length > 0) {
        if (!localStorage.getItem("myOrder")) {
            localStorage.setItem("myOrder", JSON.stringify([orderProduct]));
            return JSON.parse(localStorage.getItem("myOrder"));
        } else {
            order = JSON.parse(localStorage.getItem("myOrder"));
            localStorage.setItem(
                "myOrder",
                JSON.stringify([...order, orderProduct])
            );
            return JSON.parse(localStorage.getItem("myOrder"));
        }
    }
};

export const getMyOrderData = () => {
    return JSON.parse(localStorage.getItem("myOrder"));
};

export const getCartTotalPrice = () => {
    let cart = JSON.parse(localStorage.getItem("storeCart"));
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.product_price;
    });
    return totalPrice;
};
