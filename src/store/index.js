import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import EventReducer from './reducers/EventReducer';

const Store = createStore(EventReducer, applyMiddleware(thunk));

export default Store;