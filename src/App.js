import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import { makeStyles } from '@material-ui/core';
import SignUpContainer from '../src/Forms/SignUpContainer';
import SignInContainer from '../src/Forms/SignInContainer';
import VerifyOtp from '../src/Forms/VerifyOtp';

const useStyles = makeStyles({
	logo: {
		bottom: '0',
		right: '20px',
		'@media (max-width: 800px)': {
			bottom: '-50px',
			right: '0',
			left: '0',
			margin: 'auto',
			display: 'flex',
			width: '100vw',
			justifyContent: 'center',
		},
	},
});

const App = () => {
	const classes = useStyles();
	return (
		<MuiThemeProvider>
			<SignInContainer />

			<div style={{ position: 'fixed' }} className={classes.logo}>
				<img src="./skf.png" style={{ width: '150px', height: 'auto' }} />
			</div>
		</MuiThemeProvider>
	);
};

export default App;
