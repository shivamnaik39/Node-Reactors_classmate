import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import LoginPage from '../components/LogIn/LoginPage'

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path='/' component={LandingPage} exact={true} />
			<Route path='/login' component={LoginPage} exact={true} />
		</Switch>
	</Router>
)

export default AppRouter
