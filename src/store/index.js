import {createStore} from 'redux';
import EventReducer from './reducers/EventReducer';

const Store = createStore(EventReducer);

export default Store;