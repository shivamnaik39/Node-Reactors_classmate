import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from '../components/Landingpage/Landingpage'
import LoginPage from '../components/LogIn/LoginPage'
import Form from '../components/LogIn/MyForm'
import PageNotFound from '../components/PageNotFound'
import Navbar from '../components/Navbar/Navbar'

const AppRouter = () => (
	<Router>
		<Navbar />
		<Switch>
			<Route path='/' component={LandingPage} exact={true} />
			<Route
				path='/login'
				render={(props) => <LoginPage {...props} signUp={false} />}
				exact={true}
			/>
			<Route
				path='/signup'
				render={(props) => <LoginPage {...props} signUp={true} />}
				exact={true}
			/>
			<Route
				path='/student/login'
				render={(props) => <Form {...props} signUp={false} company={false} />}
				exact={true}
			/>
			<Route
				path='/student/signup'
				render={(props) => <Form {...props} signUp={true} company={false} />}
				exact={true}
			/>
			<Route
				path='/company/login'
				render={(props) => <Form {...props} signUp={false} company={true} />}
				exact={true}
			/>
			<Route
				path='/company/signup'
				render={(props) => <Form {...props} signUp={true} company={true} />}
				exact={true}
			/>
			<Route component={PageNotFound} />
		</Switch>
	</Router>
)

export default AppRouter
