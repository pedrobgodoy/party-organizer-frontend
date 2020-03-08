import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from "react-cookie";
import { getEvents } from "../../store/actions/EventActions";

import './styles.css';

import MainForm from '../../components/MainPanel/MainForm';
import EventCard from '../../components/MainPanel/EventCard';

function MainPanel(){
    const events = useSelector(state=>state.events)
    const error = useSelector(state=>state.error);
    const [cookies] = useCookies(['authToken']);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(error)
            console.error(error);
    }, [error]);

    useEffect(() => {
        dispatch(getEvents(cookies.authToken));
    }, [cookies.authToken, dispatch]);

    return (
        <div className="main-panel-container">
            <MainForm />
            <div className="events-container">
                {events ? events.map(event=><EventCard key={event.name} event={event}/>) : <div>Nenhum evento encontrado!</div>}
            </div>
        </div>
    )
}

export default MainPanel;