import React from 'react';
import TextField from 'material-ui/TextField';
import { makeStyles } from '@material-ui/core';
import './style.css';

const useStyles = makeStyles({
	button: {
		border: 'none',
		borderRadius: '100px',
		width: '150px',
		height: '55px',
		backgroundColor: '#fa2d64',
		color: '#ffffff',
		fontStyle: 'normal',
		fontFamily: 'Inter',
		fontWeight: '600',
		textAlign: 'center',
		fontSize: '26px',
		cursor: 'pointer',
	},
	fontname: {
		fontFamily: 'Inter',
	},
});

const SignInForm = ({
	history,
	onSubmit,
	onChange,
	errors,
	user,
	score,
	btnTxt,
	type,
	pwMask,
	onPwChange,
}) => {
	const classes = useStyles();
	return (
		<div className="loginBox">
			<h1 style={{ fontSize: '38px' }} className={classes.fontname}>
				Developer Login
			</h1>
			{errors.message && (
				<p className={classes.fontname} style={{ color: 'red' }}>
					{errors.message}
				</p>
			)}

			<form
				onSubmit={onSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
				}}
				className={classes.fontname}
			>
				<TextField
					name="email"
					floatingLabelText="Email"
					value={user.email}
					onChange={onChange}
					errorText={errors.email}
					style={{ width: '80%' }}
					className={classes.fontname}
				/>

				<TextField
					type={type}
					name="password"
					floatingLabelText="Password"
					value={user.password}
					onChange={onPwChange}
					errorText={errors.password}
					style={{ width: '80%' }}
					className={classes.fontname}
				/>
				<br />
				<button className={classes.button} onClick={(e) => {}}>
					Submit
				</button>
				<br />
			</form>
			<p className={classes.fontname}>
				or
				<br />
				<a href="/" className={classes.fontname}>
					Log in with anonymous account
				</a>
			</p>
		</div>
	);
};

export default SignInForm;
