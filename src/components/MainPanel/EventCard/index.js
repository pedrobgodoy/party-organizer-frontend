import React from "react";

import './styles.css';

function EventCard({event}){
    
    return (
        <div className="event-card box-shadow">
            Nome: {event.name}<br/>
            Descrição: {event.description}
        </div>
    )
}

export default EventCard;