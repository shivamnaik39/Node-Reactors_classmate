import {
	Button,
	LinearProgress,
	Typography,
	makeStyles,
	createStyles,
	Grid,
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			minHeight: '100vh',
		},
		title: {
			textAlign: 'center',
			marginBottom: '2rem',
			color: theme.palette.primary.main,
			fontWeight: '500',
		},
		form: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: '10px',
			background: '#e0e0e0',
			padding: '2rem',
			[theme.breakpoints.up('sm')]: {
				maxWidth: '500px',
			},
		},
		fields: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			[theme.breakpoints.up('sm')]: {
				width: '400px',
			},
		},
		fieldInput: {
			background: '#f4f4f4',
			borderRadius: '10px',
			[theme.breakpoints.up('sm')]: {
				width: '330px',
			},
		},

		signup: {
			marginBottom: '1rem',
			textAlign: 'center',
			[theme.breakpoints.down('sm')]: {
				marginBottom: '0',
				'& p': {
					fontSize: '12px',
				},
			},
		},

		action: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-evenly',
			alignItems: 'center',

			maxWidth: '300px',
			marginBottom: '0px',
		},

		loginButton: {
			marginTop: '2rem',
			fontWeight: 'bold',
			fontSize: '1rem',
		},
	})
)

const StudentSignup = ({ signUp, company }) => {
	const classes = useStyles()
	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	}

	const submit = (values, { setSubmitting }) => {
		setTimeout(() => {
			setSubmitting(false)

			alert(JSON.stringify(values, null, 2))
		}, 500)
	}

	const validate = (values) => {
		const errors = {}
		if (!values.firstName) {
			errors.firstName = 'Required'
		}
		if (!values.lastName) {
			errors.lastName = 'Required'
		}
		if (!values.email) {
			errors.email = 'Required'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}
		if (!values.password) {
			errors.password = 'Required'
		} else if (values.password.length < 8) {
			errors.password = 'Password must be atleast 8 characters long!'
		}
		if (!values.confirmPassword) {
			errors.confirmPassword = 'Required'
		} else if (values.password !== values.confirmPassword) {
			errors.confirmPassword = 'Passwords must match!'
		}
		return errors
	}
	return (
		<Grid
			container
			direction='column'
			justify='center'
			alignItems='center'
			className={classes.root}
		>
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={submit}
			>
				{({ submitForm, isSubmitting }) => (
					<Form className={classes.form} autoComplete='off'>
						<Typography variant='h5' component='h2' className={classes.title}>
							Classmate
						</Typography>
						<div className={classes.fields}>
							<Field
								className={classes.field}
								component={TextField}
								name='firstName'
								type='text'
								label='First Name'
								variant='outlined'
								InputProps={{
									className: classes.fieldInput,
								}}
							/>
							<br />
							<Field
								className={classes.field}
								component={TextField}
								name='lastName'
								type='text'
								label='Last Name'
								variant='outlined'
								InputProps={{
									className: classes.fieldInput,
								}}
							/>
							<br />
							<Field
								className={classes.field}
								component={TextField}
								name='email'
								type='email'
								label='Email Id'
								variant='outlined'
								InputProps={{
									className: classes.fieldInput,
								}}
							/>
							<br />
							<Field
								className={classes.field}
								component={TextField}
								type='password'
								label='Password'
								name='password'
								variant='outlined'
								InputProps={{
									className: classes.fieldInput,
								}}
							/>
							<br />
							<Field
								className={classes.field}
								component={TextField}
								type='password'
								label='Confirm Password'
								name='confirmPassword'
								variant='outlined'
								InputProps={{
									className: classes.fieldInput,
								}}
							/>
							{isSubmitting && <LinearProgress />}
						</div>

						{/* Log In Action */}
						<div className={classes.action}>
							<Button
								className={classes.loginButton}
								variant='contained'
								disabled={isSubmitting}
								onClick={submitForm}
								color='primary'
								size='large'
							>
								Sign Up
							</Button>
						</div>
						<br />
						<br />
					</Form>
				)}
			</Formik>
		</Grid>
	)
}

export default StudentSignup
