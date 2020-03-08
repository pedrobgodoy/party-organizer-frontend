import {ADD_EVENT} from '../actions/EventActions';

const INITIAL_STATE = {
    events:[]
};

function events(state = INITIAL_STATE, action){
    switch(action.type){
        case ADD_EVENT:
            return {...state, events: [...state.events, action.event]};
        default:
            return state;
    }
}

const EventReducer = events

export default EventReducer;