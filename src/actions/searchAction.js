export function searchAction(searchText) {
    console.log("action:SEARCH_TEXT");
    return {
        type: 'SEARCH_TEXT',
        searchText: searchText

    };
};