import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { postEvent, clearEvents } from "../../../store/actions/EventActions";

import './styles.css';

function MainForm(){
    const [redirect, setRedirect] = useState("");
    const [cookies,, removeCookie] = useCookies (['authToken']);
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);

    const dispatch = useDispatch();

	if(redirect !== ""){
		return (
			<Redirect to={redirect} />
		)
	}

    function handleLogout(){
        dispatch(clearEvents());

        removeCookie("authToken", {path: "/"});
        setRedirect("/login");
    }

    function handleAddEvent(e){
        e.preventDefault();

        const newEvent = {name, description, date: Date.now(), duration};

        dispatch(postEvent(newEvent, cookies.authToken));
    }

    return(
        <div className="aside box-shadow">
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