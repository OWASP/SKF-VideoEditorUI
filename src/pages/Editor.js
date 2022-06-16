import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

const useStyles = makeStyles({
	rootContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '100vw',
		height: '100vh',
		overflow: 'hidden',
	},
	mainEditorContainer: {
		background: 'rgba(0,0,0,0.9)',
		height: '100vh',
		width: '60%',
	},
	playVideoSection: {
		background: 'green',
		height: '60%',
		width: '60vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		backgroundSize: 'contain',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
	},
	videoActionContainer: {
		width: '100%',
		position: 'relative',
		background: 'transparent',
		bottom: '0',
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	actionBtns: {
		cursor: 'pointer',
	},
});
const Editor = () => {
	const classes = useStyles();
	const [images, setImages] = useState([
		'https://picsum.photos/200/300',
		'https://picsum.photos/200/310',
		'https://picsum.photos/200/305',
		'https://picsum.photos/205/300',
		'https://picsum.photos/210/300',
		'https://picsum.photos/200/299',
		'https://picsum.photos/200/301',
	]);

	return (
		<>
			<div className={classes.rootContainer}>
				<LeftSidebar />
				<div className={classes.mainEditorContainer}>
					<div className={classes.playVideoSection}>
						<div className={classes.videoActionContainer}>
							<img
								className={classes.actionBtns}
								src="./images/play_prev_btn.svg"
								style={{ margin: '0 10px' }}
								alt="play previous"
							/>
							<img
								className={classes.actionBtns}
								src="./images/back_5sec_btn.svg"
								style={{ margin: '0 10px' }}
								alt="back"
							/>

							<img
								className={classes.actionBtns}
								src="./images/play_btn.svg"
								style={{ margin: '0 10px' }}
								alt="play"
							/>
							<img
								className={classes.actionBtns}
								src="./images/forward_5sec_btn.svg"
								style={{ margin: '0 10px' }}
								alt="forward"
							/>
							<img
								className={classes.actionBtns}
								src="./images/play_next_btn.svg"
								style={{ margin: '0 10px' }}
								alt="next"
							/>
						</div>
					</div>
					<div
						style={{ background: 'rgb(0,0,0)', height: '40%', width: '60vw' }}
					></div>
				</div>
				<RightSidebar images={images} />
			</div>
		</>
	);
};

export default Editor;
