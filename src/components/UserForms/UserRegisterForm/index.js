import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import api from '../../../services/api';

import '../styles.css';

function UserRegisterForm(){
	const [redirect, setRedirect] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");

	if(redirect !== ""){
		return (
			<Redirect to={redirect} />
		)
	}

	async function handleRegister(e){
		e.preventDefault();

		if(username === ""){
			console.log("É necessário ter um nome de usuário para continuar");
		}

		if(password === ""){
			console.log("É necessário ter uma senha para continuar!");
		}

		if(password !== passwordConfirmation){
			console.log("As senhas devem estar iguais!");
		}

		const response = await api.post('/register', {
			name: username,
			email,
			password
		});

		if(response.data.status === "error"){
			console.log(response.data.message);
		}else{
			setRedirect('/logado');
		}
	}

	return (
    	<main>
			<strong>Cadastrar</strong>
			<form onSubmit={handleRegister}>
				<div className="input-block">
					<label htmlFor="Usuário">Usuário</label>
					<input 
						type="text" 
						name="username" 
						id="username" 
						required
						value={username}
						onChange={e=>setUsername(e.target.value)}
						/>
				</div>

                <div className="input-block">
					<label htmlFor="Email">Email</label>
					<input 
						type="text" 
						name="email" 
						id="email"
						required
						value={email}
						onChange={e=>setEmail(e.target.value)}
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
						onChange={e=>setPassword(e.target.value)}
						/>
				</div>

                <div className="input-block">
					<label htmlFor="Confirmar Senha">Confirmar Senha</label>
					<input 
						type="password" 
						name="password_confirmation" 
						id="password_confirmation"
						required
						value={passwordConfirmation}
						onChange={e=>setPasswordConfirmation(e.target.value)}
						/>
				</div>

				<button type="submit">Salvar</button>
				
				<hr/>

				<div htmlFor="Fazer Login" className="redirect-login" onClick={()=> setRedirect('/login')}>Entrar com usuário já existente!</div>
			</form>
    	</main>
	)
}

export default UserRegisterForm;