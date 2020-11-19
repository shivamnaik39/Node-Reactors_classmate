import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import LandingPage from '../components/LandingPage/Landingpage'
import LoginPage from '../components/LogIn/LoginPage'
import Navbar from '../components/Navbar/Navbar'


const AppRouter = () => (
	<Router>
		<Navbar />
		<Switch>
			<Route path='/' component={LandingPage} exact={true} />
			<Route path='/login' component={LoginPage} exact={true} />
			<Route path="/home" component={Home} exact={true} />
		</Switch>
	</Router>
)

export default AppRouter
