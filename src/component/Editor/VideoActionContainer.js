import React from 'react';
import { makeStyles } from '@mui/styles';
import FullscreenRounded from '@mui/icons-material/FullscreenRounded';
import { Pause, PlayArrow } from '@mui/icons-material';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
	},
	videoActionBtn: {
		transform: 'scale(0.9)',
		transition: 'all 200ms linear 0s',
		padding: '0 10px',
		opacity: '0.6',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1)',
			opacity: '1',
		},
	},
	mainBtnContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '5px',
	},
});

const VideoActionBtn = ({ imgSrc, onClick, buttonName }) => {
	const classes = useStyles();
	return (
		<img
			src={imgSrc}
			alt={buttonName}
			className={classes.videoActionBtn}
			onClick={onClick}
		/>
	);
};

const VideoActionContainer = ({
	handleRewind,
	handlePlay,
	handleFastForward,
	handleToggleFullScreen,
	isPlaying,
}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div></div>
			<div className={classes.mainBtnContainer}>
				<VideoActionBtn
					imgSrc="./images/back_5sec_btn.svg"
					buttonName="rewind"
					onClick={handleRewind}
				/>
				<div
					onClick={handlePlay}
					className={classes.videoActionBtn}
					style={{
						display: 'flex',
						alignItems: 'center',
						transition: 'all 200ms ease-in-out 0s',
					}}
				>
					{isPlaying ? (
						<Pause fontSize="large" />
					) : (
						<PlayArrow fontSize="large" />
					)}
				</div>
				<VideoActionBtn
					imgSrc="./images/forward_5sec_btn.svg"
					buttonName="fast forward"
					onClick={handleFastForward}
				/>
			</div>
			<div onClick={handleToggleFullScreen}>
				<FullscreenRounded className={classes.videoActionBtn} />
			</div>
		</div>
	);
};

export default VideoActionContainer;
