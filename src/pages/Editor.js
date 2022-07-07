import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import './../App.css';
import MiniDrawer, { TransitionLeft } from './../component/Editor/MiniDrawer';
import editorDimensionsConstants from './../component/Editor/editorDimensionsConstants';
import {
	MusicAndSFX,
	RecordAndCreate,
	StockImages,
	Templates,
	Text,
	YourMedia,
} from './../component/Editor/MiniDrawerComponent';
import ReactPlayer from 'react-player';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import screenfull from 'screenfull';
import BottomDrawer from './../component/Editor/BottomDrawer';
import { TransitionBottom } from './../component/Editor/BottomDrawer';
import BottomDrawerActionContainer from './../component/Editor/BottomDrawerActionContainer';
import VideoActionContainer from './../component/Editor/VideoActionContainer';

const useStyles = makeStyles({
	rootContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		background: '#16161e',
	},
	bottomActionBtnImg: {
		transform: 'scale(0.9)',
		transition: 'all 200ms linear 0s',
		opacity: '1',
		'&:hover': {
			transform: 'scale(1)',
			opacity: '1',
		},
	},
	exportBtn: {
		background: 'blueviolet',
		width: '120px',
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '10px 40px',
		borderRadius: '30px',
		cursor: 'pointer',
		transform: 'scale(0.9)',
		transition: 'all 200ms linear 0s',
		fontSize: '18px',
		paddingLeft: '10px',
		fontFamily: 'sans-serif',
		'&:hover': {
			transform: 'scale(1)',
			opacity: '0.8',
		},
	},
	editorRootContainer: {
		position: 'absolute',
		background: '#16161e',
		transition: 'all linear 0.5s',
		height: '100vh',
		maxHeight: '100vh',
		overflow: 'hidden',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
	},
	leftDrawerComponent: {
		height: '100vh',
		background: '#212425',
		borderRight: '2px solid grey',
		color: 'white',
		overflow: 'auto',
		overflowX: 'hidden',
	},
	editorHeader: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: '100%',
	},
	videoContainerParent: {
		background: '#16161e',
		width: 'inherit',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		transition: 'all linear 0.5s',
	},
	videoContainer: {
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	bottomDrawerParent: {
		background: '#16161e',
		borderTop: '2px solid grey',
		color: 'white',
		transition: 'width linear 0.5s',
		display: 'flex',
		alignItems: 'center',
		borderLeft: '2px solid grey',
	},
});

const format = (seconds) => {
	if (isNaN(seconds)) {
		return `00:00`;
	}
	const date = new Date(seconds * 1000);
	const hh = date.getUTCHours();
	const mm = date.getUTCMinutes();
	const ss = date.getUTCSeconds().toString().padStart(2, '0');
	if (hh) {
		return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
	}
	return `${mm}:${ss}`;
};

const Editor = (props) => {
	const classes = useStyles();
	const [isLeftDrawerOpen, setIsLeftDrawerOpen] = React.useState(true);
	const [isBottomDrawerOpen, setIsBottomDrawerOpen] = React.useState(true);
	const [transitionLeft, setTransitionLeft] = React.useState(undefined);
	const [transitionBottom, setTransitionBottom] = React.useState(undefined);
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [isFullScreen, setIsFullScreen] = React.useState(false);
	const [progress, setProgress] = React.useState(null);
	const [editorWidth, setEditorWidth] = React.useState();
	const [progressBarPosition, setProgressBarPosition] = React.useState(0);

	const playerContainerRef = React.useRef(null);
	const playerRef = React.useRef(null);

	const currentTime =
		playerRef && playerRef.current
			? playerRef.current.getCurrentTime()
			: '00:00';
	const duration =
		playerRef && playerRef.current ? playerRef.current.getDuration() : '00:00';
	const elapsedTime = format(currentTime);
	const totalDuration = format(duration);

	React.useEffect(() => {
		setEditorWidth(
			document.getElementById('main-editor').style.width.split('p')[0] * 1
		);
	}, [isLeftDrawerOpen]);
	React.useEffect(() => {
		let pos = parseInt((currentTime / duration) * editorWidth);
		if (currentTime === duration) pos = pos - 3;
		setProgressBarPosition(pos);
	}, [duration, currentTime, editorWidth]);
	React.useEffect(() => {
		setTransitionBottom(() => TransitionBottom);
	}, []);

	const handleClickLeft = (Transition) => () => {
		if (!isLeftDrawerOpen) {
			setTransitionLeft(() => Transition);
			setIsLeftDrawerOpen(true);
		} else {
			setIsLeftDrawerOpen(false);
		}
	};
	const handleLeftNav = (Transition, curInd) => () => {
		if (!isLeftDrawerOpen) {
			setTransitionLeft(() => Transition);
			setIsLeftDrawerOpen(true);
		}
		setActiveIndex(curInd);
	};
	const handleClickBottomDrawer = (Transition) => () => {
		setTransitionBottom(() => Transition);
		setIsBottomDrawerOpen(true);
	};
	const handleCloseBottomDrawer = () => {
		setIsBottomDrawerOpen(false);
	};

	const handleFastForward = () => {
		playerRef.current.seekTo(playerRef.current.getCurrentTime() + 5);
		console.log('click');
	};

	const handleRewind = () => {
		playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5);
		console.log('click');
	};
	const handlePlay = () => {
		setIsPlaying(!isPlaying);
	};
	const handleToggleFullScreen = () => {
		screenfull.toggle(playerContainerRef.current);
		setIsFullScreen(!isFullScreen);
	};

	const handleProgress = (changedState) => {
		setProgress(() => changedState);
	};

	const dimensionConfigStyles = {
		editorRootContainer: {
			width: `${
				isLeftDrawerOpen
					? window.innerWidth -
					  (editorDimensionsConstants.drawerComponentWidth +
							editorDimensionsConstants.miniDrawerWidth)
					: window.innerWidth - editorDimensionsConstants.miniDrawerWidth
			}px`,
			left: isLeftDrawerOpen
				? `${
						editorDimensionsConstants.miniDrawerWidth +
						editorDimensionsConstants.drawerComponentWidth
				  }px`
				: `${editorDimensionsConstants.miniDrawerWidth}px`,
			maxWidth: `${
				isLeftDrawerOpen
					? window.innerWidth -
					  (editorDimensionsConstants.drawerComponentWidth +
							editorDimensionsConstants.miniDrawerWidth)
					: window.innerWidth - editorDimensionsConstants.miniDrawerWidth
			}px`,
		},
		videoContainerParent: {
			height: `${
				isBottomDrawerOpen
					? window.innerHeight - editorDimensionsConstants.bottomDrawerHeight
					: window.innerHeight
			}px`,
		},
		videoContainer: {
			height: '100%',
			maxHheight: `${
				isBottomDrawerOpen
					? window.innerHeight -
					  editorDimensionsConstants.bottomDrawerHeight -
					  50
					: window.innerHeight - 50
			}px`,
			maxWidth: `${
				isLeftDrawerOpen
					? window.innerWidth -
					  (editorDimensionsConstants.drawerComponentWidth +
							editorDimensionsConstants.miniDrawerWidth +
							40)
					: window.innerWidth - editorDimensionsConstants.miniDrawerWidth - 40
			}px`,
		},
		bottomDrawerParent: {
			width: `${
				isLeftDrawerOpen
					? window.innerWidth -
					  (editorDimensionsConstants.drawerComponentWidth +
							editorDimensionsConstants.miniDrawerWidth)
					: window.innerWidth - editorDimensionsConstants.miniDrawerWidth
			}px`,
			height: `${editorDimensionsConstants.bottomDrawerHeight}px`,
		},
	};

	return (
		<div className="App">
			<div className={classes.rootContainer}>
				{/* Left Part */}
				<div>
					{/* Mini Drawer */}
					<MiniDrawer
						onClick={handleClickLeft(TransitionLeft)}
						handleYourMedia={handleLeftNav(TransitionLeft, 0)}
						handleRecordAndCreate={handleLeftNav(TransitionLeft, 1)}
						handleTemplates={handleLeftNav(TransitionLeft, 2)}
						handleMusicAndSFX={handleLeftNav(TransitionLeft, 3)}
						handleStockImages={handleLeftNav(TransitionLeft, 4)}
						handleStockVideos={handleLeftNav(TransitionLeft, 5)}
						handleText={handleLeftNav(TransitionLeft, 6)}
						currentIndex={activeIndex}
					/>
					{/* DrawerContent */}

					<Snackbar
						open={isLeftDrawerOpen}
						TransitionComponent={transitionLeft}
						key={transitionLeft ? transitionLeft.name : ''}
						style={{
							position: 'absolute',
							bottom: 0,
							left: `${editorDimensionsConstants.miniDrawerWidth}px`,
						}}
						id="drawer-component"
					>
						<div
							className={classes.leftDrawerComponent}
							style={{
								width: `${editorDimensionsConstants.drawerComponentWidth}px`,
							}}
						>
							{activeIndex === 0 && <YourMedia />}
							{activeIndex === 1 && <RecordAndCreate />}
							{activeIndex === 2 && <Templates />}
							{activeIndex === 3 && <MusicAndSFX />}
							{activeIndex === 4 && <StockImages />}
							{activeIndex === 6 && <Text />}
						</div>
					</Snackbar>
				</div>
				{/* Right Part */}
				<div
					className={classes.editorRootContainer}
					style={dimensionConfigStyles.editorRootContainer}
					id="main-editor"
				>
					<div className={classes.editorHeader}>
						<div className={classes.exportBtn}>
							Export
							<ArrowDropDownRoundedIcon fontSize="large" />
						</div>
					</div>
					<div
						className={classes.videoContainerParent}
						style={dimensionConfigStyles.videoContainerParent}
					>
						{/* VIDEO container  */}
						<div
							style={dimensionConfigStyles.videoContainer}
							className={classes.videoContainer}
							id="video-container"
						>
							<div
								ref={playerContainerRef}
								style={{
									width: '640px',
									height: '400px',
								}}
							>
								<ReactPlayer
									ref={playerRef}
									playing={isPlaying}
									controls={false}
									light={false}
									onProgress={handleProgress}
									onDuration={(duration) => {
										console.log(duration);
									}}
									url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
									id="react-player"
									config={{
										file: {
											attributes: {
												crossorigin: 'anonymous',
											},
										},
									}}
									width="100%"
									height="100%"
									loop={true}
								/>
							</div>
							{/* VIDEO Action container  */}
							<VideoActionContainer
								handleFastForward={handleFastForward}
								handlePlay={handlePlay}
								handleRewind={handleRewind}
								handleToggleFullScreen={handleToggleFullScreen}
								isPlaying={isPlaying}
							/>
						</div>
						{/* Footer Action container  */}
						<BottomDrawerActionContainer
							elapsedTime={elapsedTime}
							totalDuration={totalDuration}
							isBottomDrawerOpen={isBottomDrawerOpen}
							TransitionBottom={TransitionBottom}
							handleClickBottomDrawer={handleClickBottomDrawer}
							handleCloseBottomDrawer={handleCloseBottomDrawer}
						/>
					</div>
					<Snackbar
						open={isBottomDrawerOpen}
						TransitionComponent={transitionBottom}
						key={transitionBottom ? transitionBottom.name : ''}
						style={{
							position: 'absolute',
							bottom: 0,
							left: `0`,
							right: '0',
						}}
					>
						<div
							style={dimensionConfigStyles.bottomDrawerParent}
							className={classes.bottomDrawerParent}
						>
							<BottomDrawer progressBarPosition={progressBarPosition} />
						</div>
					</Snackbar>
				</div>
			</div>
		</div>
	);
};

export default Editor;
