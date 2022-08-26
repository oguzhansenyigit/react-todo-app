import { legacy_createStore as createStore } from 'redux';

import RootReducer from './Root';

export const Store = () => {
    return createStore(RootReducer);
}

