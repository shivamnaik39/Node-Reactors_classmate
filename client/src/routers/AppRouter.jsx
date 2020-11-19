import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from '../components/LandingPage/Landingpage'
import LoginPage from '../components/LogIn/LoginPage'
import Form from '../components/LogIn/MyForm'
import PageNotFound from '../components/PageNotFound'
import Navbar from '../components/Navbar/Navbar'
import StudentSignup from '../components/signUp/StudentSignup'
import CompanySignup from '../components/signUp/CompanySignup'


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
			<Route path='/student/signup' component={StudentSignup} exact={true} />
			<Route path='/company/signup' component={CompanySignup} exact={true} />
			<Route
				path='/student/login'
				render={(props) => <Form {...props} signUp={false} company={false} />}
				exact={true}
			/>
			<Route
				path='/company/login'
				render={(props) => <Form {...props} signUp={false} company={true} />}
				exact={true}
			/>
			<Route component={PageNotFound} />
		</Switch>
	</Router>
)

export default AppRouter
