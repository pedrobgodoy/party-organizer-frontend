import {ADD_EVENT
        , CLEAR_EVENTS
        , GET_EVENTS_ERROR
        , GET_EVENTS_SUCCESS
        , GET_EVENTS_PENDING
        , POST_EVENTS_ERROR
        , POST_EVENTS_SUCCESS
        , POST_EVENTS_PENDING} from '../actions/EventActions';

const INITIAL_STATE = {
    pending: false,
    events: [],
    error: null
};

function events(state = INITIAL_STATE, action){
    switch(action.type){
        case POST_EVENTS_PENDING:
        case GET_EVENTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                events: action.events
            }
        case POST_EVENTS_ERROR:
        case GET_EVENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case POST_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false
            }

        case ADD_EVENT:
            return {
                ...state, 
                events: [...state.events, action.event]
            }
        case CLEAR_EVENTS:
            return INITIAL_STATE;
        default:
            return state;
    }
}

const EventReducer = events

export default EventReducer;