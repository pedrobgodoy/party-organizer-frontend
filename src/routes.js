import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {CookiesProvider } from 'react-cookie';

import './global.css';
import './App.css';

import PrivateRoute from './helpers/PrivateRoute';

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import MainPanel from './pages/MainPanel';

function Routes(){
	return(
		<div id="app">
			<CookiesProvider >
				<BrowserRouter>
					<Switch>
						<Route exact path="/" ><Redirect to="/login" /></Route>
						<Route path="/login" component={() => <UserLogin />} />
						<Route path="/signup" component={() => <UserRegister />} />
						<PrivateRoute path="/main-panel" component={() => <MainPanel />} />
						<Route path="*" component={() => <h1>Página não encontrada!</h1>} />
					</Switch>
				</BrowserRouter>
			</CookiesProvider >
		</div>
	)
}

export default Routes;