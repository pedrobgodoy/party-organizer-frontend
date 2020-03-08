import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {CookiesProvider } from 'react-cookie';
import {Provider} from 'react-redux';

import Store from './store';

import './global.css';
import './App.css';

import PrivateRoute from './helpers/PrivateRoute';

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import MainPanel from './pages/MainPanel';

function Routes(){
	return(
		<div id="app">
			<Provider store={Store}>
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
			</Provider>
		</div>
	)
}

export default Routes;