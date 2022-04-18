import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PasswordStr from './PasswordStr';
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

const SignUpForm = ({
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
			<h1 className={classes.fontname}>Developer Sign Up</h1>
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
					name="name"
					floatingLabelText="Name"
					value={user.username}
					onChange={onChange}
					errorText={errors.username}
					style={{ width: '80%' }}
					className={classes.fontname}
				/>
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
					name="organisation"
					floatingLabelText="Organisation"
					value={user.organisation}
					onChange={onChange}
					errorText={errors.organisation}
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
				<TextField
					type={type}
					name="pwconfirm"
					floatingLabelText="Confirm Password"
					value={user.pwconfirm}
					onChange={onChange}
					errorText={errors.pwconfirm}
					style={{ width: '80%' }}
					className={classes.fontname}
				/>
				<br />
				<button className={classes.button} onClick={(e) => {}}>
					Submit
				</button>
			</form>
			<p className={classes.fontname}>
				or
				<br />
				<a className={classes.fontname} href="/">
					Log in with anonymous account
				</a>
			</p>
		</div>
	);
};

export default SignUpForm;
