import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import OtpInput from 'react-otp-input';
const useStyles = makeStyles({
	textInput: {
		height: '40px',
		alignItems: 'center',
		fontSize: '16px',
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontFamily: 'Inter',
		outline: 'none',
		border: '1px solid #969696',
		margin: '10px 0',
		color: '#969696',
	},
	background: {
		backgroundRepeat: 'no-repeat',
		minHeight: '100vh',
		backgroundSize: 'cover',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	rootContainer: {
		overflowX: 'auto',
		backgroundColor: '#ffffff',
		boxShadow: '0px 0px 123px rgba(0, 0, 0, 0.1)',
		width: '500px',
		height: '400px',
		maxWidth: '90vw',
		padding: '0 2%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		'@media (max-width: 800px)': {
			width: '85%',
			height: '400px',
			border: '2px solid #ECECEC',
		},
	},
	pageTitle: {
		textAlign: 'center',
		fontSize: '36px',
		fontWeight: 'bold',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		'@media (max-width: 650px)': {
			fontSize: '32px',
		},
	},
	button: {
		border: 'none',
		borderRadius: '234px',
		width: '162px',
		height: '55px',
		backgroundColor: '#fa2d64',
		color: '#ffffff',
		fontStyle: 'normal',
		fontFamily: 'Inter',
		fontWeight: '600',
		textAlign: 'center',
		fontSize: '24px',
		cursor: 'pointer',
	},
});

const VerifyOtp = () => {
	const classes = useStyles();

	const [otp, setOtp] = useState();
	const handleChange = (otp) => {
		setOtp(otp);
	};
	return (
		<div className={classes.background}>
			<div className={classes.rootContainer}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<h1
						className={classes.pageTitle}
						style={{ marginBottom: '0', color: 'black', fontSize: '36px' }}
					>
						Verify your OTP
					</h1>
					<p
						style={{
							textAlign: 'center',
							width: '322px',
							fontFamily: 'Inter',
							fontSize: '18px',
							fontWeight: '500',
							fontStyle: '500',
							color: '#969696',
						}}
					>
						Enter OTP send to your email below.
					</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<OtpInput
						value={otp}
						onChange={handleChange}
						numInputs={4}
						separator={<span>&nbsp;</span>}
						isInputNum={true}
						inputStyle={{
							width: '3rem',
							height: '3rem',
							margin: '0 1rem',
							fontSize: '2rem',
							borderRadius: 0,
							border: '0',
							outline: 'none',
							borderBottom: '1px solid rgba(0,0,0,0.3)',
							color: '#969696',
						}}
					/>
				</div>

				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button
						type="submit"
						className={classes.button}
						onClick={() => {
							console.log(otp);
						}}
					>
						Submit
					</button>
				</div>
				<br />
			</div>
		</div>
	);
};

export default VerifyOtp;
