import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import { useCookies } from "react-cookie";

import './styles.css';

function MainForm(){
    const [redirect, setRedirect] = useState("");
    const [,, removeCookie] = useCookies (['authToken']);
    const [events, setEvents] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);

	if(redirect !== ""){
		return (
			<Redirect to={redirect} />
		)
	}

    function handleLogout(){
        removeCookie("authToken", {path: "/"});
        setRedirect("/login");
    }

    function handleAddEvent(e){
        e.preventDefault();

        const newDate = new Date();
        const formatedDate = newDate.getDay() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear();
        
        const newEvent = {name, description, formatedDate, duration};
        
        const newEventList = [...events, newEvent];

        setEvents(newEventList);

        console.log(newEventList);
    }

    return(
        <div className="main-panel">
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="Nome Evento">Nome Evento</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        />
                </div>

                <div className="input-block">
                    <label htmlFor="Descrição Evento">Descrição Evento</label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description" 
                        required
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        />
                </div>

                <div className="input-block">
                    <label htmlFor="Duração">Duração</label>
                    <input 
                        type="number" 
                        name="duration" 
                        id="duration" 
                        required
                        value={duration}
                        onChange={e=>setDuration(e.target.value)}
                        />
                </div>
            </div>

            
            <button className="button" onClick={handleAddEvent}>Adicionar Evento</button>
            <button className="button" onClick={handleLogout}>Deslogar</button>
        </div>
    )
}

export default MainForm;