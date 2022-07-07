import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Slide } from '@mui/material';

const useStyles = makeStyles({
	progressLine: {
		width: '0px',
		height: 'inherit',
		borderLeft: '2px solid #b3b3b6',
		opacity: '0.6',
		position: 'absolute',
		transition: 'all 200ms linear 0s',
	},
	progressImgContainer: {
		background: '#292d3e',
		border: '1px solid rgba(179,179,182,0.5)',
		transition: 'all 200ms linear 0s',
		borderRadius: '4px',
		width: '100%',
		height: '100px',
		overflow: 'hidden',
	},
});
export function TransitionBottom(props) {
	return (
		<Slide
			{...props}
			direction="up"
			style={{ margin: '0' }}
			timeout={{ enter: 820, exit: 500 }}
		></Slide>
	);
}

const BottomDrawer = ({ progressBarPosition }) => {
	const classes = useStyles();
	useEffect(() => {
		console.log(progressBarPosition);
	}, [progressBarPosition]);
	return (
		<>
			<div
				className={classes.progressLine}
				style={{ left: `${progressBarPosition}px` }}
			></div>
			<div className={classes.progressImgContainer}></div>
		</>
	);
};

export default BottomDrawer;
