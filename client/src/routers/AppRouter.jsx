import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from '../components/Landingpage/Landingpage'
import LoginPage from '../components/LogIn/LoginPage'
import Form from '../components/LogIn/MyForm'
import PageNotFound from '../components/PageNotFound'
import Navbar from '../components/Navbar/Navbar'
import StudentSignup from '../components/signUp/StudentSignup'
import CompanySignup from '../components/signUp/CompanySignup'
import AddSubject from '../components/AddWidgets/AddSubject'
import TestModal from '../components/TestModal'
import Home from '../components/Home/Home'
import Sidebar from '../components/SubjectPage/Sidebar'
import Jobs from '../components/Jobs/Jobs'
import JobDescription from '../components/Jobs/JobDescription'
import Loans from '../components/Loans/Loans'

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
			<Route path='/student/addsub' component={AddSubject} exact={true} />
			<Route path='/testmodal' component={TestModal} exact={true} />
			<Route path='/home' component={Home} exact={true} />
			<Route path='/classwork' component={Sidebar} />
			<Route path='/jobs' component={Jobs} exact={true} />
			<Route path='/jobs/:id' component={JobDescription} exact={true} />
			<Route path='/loans' component={Loans} exact={true} />

			<Route component={PageNotFound} />
		</Switch>
	</Router>
)

export default AppRouter
