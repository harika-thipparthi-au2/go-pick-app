export function displayingProducts(result) {
    console.log("action:DISPLAYING_PRODUCTS");
    return {
        type: 'DISPLAYING_PRODUCTS',
        products: result

    };
};