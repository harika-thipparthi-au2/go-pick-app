import React from 'react';
import SearchBox from './searchbox';
import SearchResults from './searchresults';

class SearchPage extends React.Component {
    render() {
        return <main>
            <SearchBox />
            <SearchResults />
        </main>

    }
}

export default SearchPage;