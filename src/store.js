import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

function configureStore() {
    return createStore(
        rootReducer,
        window.devToolsExtension && window.devToolsExtension());
        
}

export default configureStore;