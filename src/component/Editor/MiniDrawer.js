import React from 'react';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';
import dimensions from './editorDimensionsConstants';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import { TextFieldsOutlined, WindowOutlined } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';

const useStyles = makeStyles({
	drawerButtonTitle: {
		color: 'grey',
		fontSize: '13px',
		fontWeight: '500',
		textAlign: 'center',
		margin: '5px 0',
	},
	drawerBtn: {
		padding: '13px 0',
		cursor: 'pointer',
		'&:hover': {
			background: 'rgba(39, 39, 49,0.8)',
		},
	},
	miniDrawerContainer: {
		background: '#16161e',
		position: 'absolute',
		width: `${dimensions.miniDrawerWidthLarge}vw`,
		height: '100vh',
		left: 0,
		zIndex: '+10000',
		overflow: 'auto',
		borderRight: '1px solid grey',
		'@media (max-width:1300px)': {
			width: `${dimensions.miniDrawerWidthMedium}vw`,
		},
		'@media (max-width:1000px)': {
			width: `${dimensions.miniDrawerWidthSmall}vw`,
		},
		'@media (max-width:600px)': {
			width: `${dimensions.miniDrawerWidthMobile}vw`,
		},
	},
	menuBtn: {
		cursor: 'pointer',
		transform: 'scale(0.9)',
		transition: 'all 200ms linear 0s',
		'&:hover': {
			transform: 'scale(1)',
		},
	},
});

export function TransitionLeft(props) {
	return (
		<Slide
			{...props}
			direction="right"
			style={{ margin: '0' }}
			timeout={{ enter: 820, exit: 500 }}
		></Slide>
	);
}

const DrawerButtons = (props) => {
	const classes = useStyles();
	return (
		<div
			className={classes.drawerBtn}
			style={{
				background: props.active ? '#272731' : '',
			}}
			onClick={props.onClick}
		>
			{props.icon}

			<p className={classes.drawerButtonTitle}>{props.title}</p>
		</div>
	);
};

const MiniDrawer = (props) => {
	const classes = useStyles();
	const isSmall = useMediaQuery('(max-width: 1000px)');
	return (
		<div className={classes.miniDrawerContainer} id="mini-drawer">
			{!isSmall && (
				<div style={{ margin: '20px 0 10px' }}>
					<img
						src="./images/menu_btn.svg"
						alt="menu"
						onClick={props.onClick}
						className={classes.menuBtn}
					/>
				</div>
			)}
			{isSmall && <div style={{ height: '8vh' }}></div>}
			<DrawerButtons
				title="Create & Upload"
				active={props.currentIndex === 1}
				icon={<CameraOutlinedIcon style={{ color: '#b3b3b6' }} />}
				onClick={props.handleRecordAndCreate}
			/>
			<DrawerButtons
				title="Media"
				active={props.currentIndex === 0}
				icon={<FolderOpenOutlinedIcon style={{ color: '#b3b3b6' }} />}
				onClick={props.handleYourMedia}
				size="25px"
			/>

			<DrawerButtons
				title="Music & SFX"
				active={props.currentIndex === 3}
				icon={<MusicVideoOutlinedIcon style={{ color: '#b3b3b6' }} />}
				onClick={props.handleMusicAndSFX}
			/>
			<DrawerButtons
				title="Images"
				active={props.currentIndex === 4}
				icon={<ImageSearchOutlinedIcon style={{ color: '#b3b3b6' }} />}
				onClick={props.handleStockImages}
			/>
			<DrawerButtons
				title="Text"
				active={props.currentIndex === 6}
				icon={<TextFieldsOutlined style={{ color: '#b3b3b6' }} />}
				onClick={props.handleText}
			/>
			<DrawerButtons
				title="Templates"
				active={props.currentIndex === 2}
				icon={<WindowOutlined style={{ color: '#b3b3b6' }} />}
				onClick={props.handleTemplates}
			/>
		</div>
	);
};
export default MiniDrawer;
