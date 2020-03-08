import api from '../../services/api';

export const ADD_EVENT = "ADD_EVENT";
export const CLEAR_EVENTS = "CLEAR_EVENTS";

export const GET_EVENTS_PENDING = 'GET_EVENTS_PENDING';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';

export const POST_EVENTS_PENDING = 'POST_EVENTS_PENDING';
export const POST_EVENTS_SUCCESS = 'POST_EVENTS_SUCCESS';
export const POST_EVENTS_ERROR = 'POST_EVENTS_ERROR';

function getEventsPending(){
    return { type: GET_EVENTS_PENDING }
}
function getEventsSuccess(events){
    return { type: GET_EVENTS_SUCCESS, events }
}
function getEventsError(error){
    return { type: GET_EVENTS_ERROR, error }
}
export function getEvents(authToken){
    return async dispatch => {
        dispatch(getEventsPending());

        const response = await api.get('evento', {
            headers: { Authorization: `Bearer ${authToken}` }
        })

        if(response.data.status === "error"){
            dispatch(getEventsError(response.data.message));
        }
        if(response.data.status === "success"){
            dispatch(getEventsSuccess(response.data.events));
        }
    }
}

function postEventsPending(){
    return { type: POST_EVENTS_PENDING }
}
function postEventsSuccess(events){
    return { type: POST_EVENTS_SUCCESS, events }
}
function postEventsError(error){
    return { type: POST_EVENTS_ERROR, error }
}

export function postEvent(event, authToken){
    return async dispatch => {
        dispatch(postEventsPending());

        const response = await api.post('evento', {
            ...event
        },{
            headers: { Authorization: `Bearer ${authToken}` }
        })

        if(response.data.status === "error"){
            dispatch(postEventsError(response.data.message));
        }

        dispatch(postEventsSuccess(response.data.message));
    }
}

export function addEvent(event, authToken=""){
    return { type: ADD_EVENT, event };
}

export function clearEvents(){
    return { type: CLEAR_EVENTS };
}