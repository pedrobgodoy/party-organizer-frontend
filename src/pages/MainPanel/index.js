import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useCookies } from "react-cookie";
import {addEvent} from "../../store/actions/EventActions";

import api from '../../services/api';

import MainForm from '../../components/MainPanel/MainForm';
import EventCard from '../../components/MainPanel/EventCard';

function MainPanel(){
    const events = useSelector(state=>state.events)
    const [cookies] = useCookies(['authToken']);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(_authToken){
            const response = await api.get('evento', {
                headers: { Authorization: `Bearer ${_authToken}` }
            })
    
            if(response.data.status === "error"){
                console.error(response.data.message)
            }
            if(response.data.status === "success"){
                response.data.events.forEach(event => dispatch(addEvent(event)));
            }
        }

        fetchData(cookies.authToken);
    }, [cookies.authToken]);

    return (
        <div>
            <MainForm />
            {events.map(event=><EventCard key={event.name} event={event}/>)}
        </div>
    )
}

export default MainPanel;