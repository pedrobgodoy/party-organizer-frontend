import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import './global.css';
import './App.css';

import UserLoginForm from './components/UserForms/UserLoginForm';
import UserRegisterForm from './components/UserForms/UserRegisterForm';

function Routes(){
	return(
		<div id="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" ><Redirect to="/login" /></Route>
					<Route path="/login" component={() => <UserLoginForm />} />
					<Route path="/signup" component={() => <UserRegisterForm />} />
					<Route path="*" component={() => <h1>Página não encontrada!</h1>} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Routes;