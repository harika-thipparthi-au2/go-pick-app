function searchReducer(state = { products: [] }, action) {
    console.log("reducers=>searchReducer");
    switch (action.type) {
        case 'DISPLAYING_PRODUCTS':
            return Object.assign({}, state, { products: action.products, filteredProducts: action.products });
        case 'SEARCH_TEXT':
                return Object.assign({}, state, {searchText:action.searchText});
        default:
            return state;


    }
}

export default searchReducer;