import React from 'react';
import { makeStyles } from '@mui/styles';
import { UnfoldLessOutlined, UnfoldMoreOutlined } from '@mui/icons-material';
const useStyles = makeStyles({
	root: {
		background: 'black',
		border: '2px solid grey',
		width: 'inherit',
		display: 'flex',
		height: '40px',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	bottomActionBtns: {
		background: 'rgba(28,28,40,0.8)',
		borderRadius: '2px',
		cursor: 'pointer',
		margin: '0 3px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '30px',
		width: '40px',
		transition: 'all 200ms linear 0s',
		transform: 'scale(0.9)',
		'&:hover': {
			background: 'rgba(28,28,40,1)',
			transform: 'scale(1)',
		},
	},
	leftBtnContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginLeft: '20px	',
	},
	centerTimeline: {
		fontFamily: 'monospace',
		fontSize: '15px',
		width: '150px',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	rightBtnContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '20px',
	},
});

const BottomActionsBtn = ({ imgSrc, buttonName, onClick }) => {
	const classes = useStyles();
	return (
		<div className={classes.bottomActionBtns} onClick={onClick}>
			<img src={imgSrc} alt={buttonName} />
		</div>
	);
};
const BottomDrawerActionContainer = ({
	elapsedTime,
	totalDuration,
	isBottomDrawerOpen,
	handleClickBottomDrawer,
	handleCloseBottomDrawer,
	TransitionBottom,
}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.leftBtnContainer}>
				<BottomActionsBtn imgSrc={'./images/undo.svg'} buttonName="Undo" />
				<BottomActionsBtn imgSrc={'./images/redo.svg'} buttonName="Redo" />
				<BottomActionsBtn imgSrc={'./images/copy.svg'} buttonName="Copy" />
			</div>
			<div className={classes.centerTimeline}>
				{elapsedTime.toString().split(':')[0].length === 1
					? `0${elapsedTime}`
					: elapsedTime}{' '}
				/ {totalDuration}
			</div>
			<div className={classes.rightBtnContainer}>
				<BottomActionsBtn imgSrc={'./images/plus.svg'} buttonName="Open" />
				<BottomActionsBtn imgSrc={'./images/minus.svg'} buttonName="Close" />
				<div
					className={classes.bottomActionBtns}
					onClick={
						isBottomDrawerOpen
							? handleCloseBottomDrawer
							: handleClickBottomDrawer(TransitionBottom)
					}
				>
					{isBottomDrawerOpen ? <UnfoldLessOutlined /> : <UnfoldMoreOutlined />}
				</div>
			</div>
		</div>
	);
};

export default BottomDrawerActionContainer;
