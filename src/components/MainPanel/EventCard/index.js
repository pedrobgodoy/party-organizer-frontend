import React from "react";

function EventCard({event}){
    
    return (
        <div>
            Nome: {event.name}<br/>
            Descrição: {event.description}
        </div>
    )
}

export default EventCard;