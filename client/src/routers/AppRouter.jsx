import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from '../components/LandingPage/Landingpage'
import LoginPage from '../components/LogIn/LoginPage'
import Navbar from '../components/Navbar/Navbar'

const AppRouter = () => (
	<Router>
		<Navbar />
		<Switch>
			<Route path='/' component={LandingPage} exact={true} />
			<Route path='/login' component={LoginPage} exact={true} />
		</Switch>
	</Router>
)

export default AppRouter
