import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import api from '../../../services/api';

import '../styles.css';

function UserLoginForm(){
	const [redirect, setRedirect] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	if(redirect !== ""){
		return (
			<Redirect to={redirect} />
		)
	}

	async function handleLogin(e){
		e.preventDefault();

		if(username === ""){
			console.log("É necessário ter um nome de usuário para continuar");
		}

		if(password === ""){
			console.log("É necessário ter uma senha para continuar!");
		}

		const response = await api.get('/login', {
			auth: {
				username,
				password
			}
		});

		if(response.data.status === "error"){
			console.log(response.data.message);
		}else{
			setRedirect('/logado');
		}
	}

	return (
    <main>
		<strong>Entrar</strong>
		<form onSubmit={handleLogin}>
			<div className="input-block">
				<label htmlFor="Usuário">Usuário</label>
				<input 
					type="text" 
					name="username" 
					id="username" 
					required
					value={username} 
					onChange={e => setUsername(e.target.value)} 
					/>
			</div>

			<div className="input-block">
				<label htmlFor="Senha">Senha</label>
				<input 
					type="password" 
					name="password" 
					id="password" 
					required
					value={password}
					onChange={e => setPassword(e.target.value)}/>
			</div>

			<button type="submit">Entrar</button>
			
			<hr/>
			
			<div htmlFor="Cadastrar novo Usuário" className="redirect-login" onClick={()=> setRedirect('/signup')}>Cadastrar novo Usuário</div>
		</form>
    </main>
	)
}

export default UserLoginForm;