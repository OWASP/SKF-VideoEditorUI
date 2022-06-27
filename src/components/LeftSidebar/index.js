import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DropzoneComponent from '../Dropzone';

const useStyles = makeStyles((theme) => ({
	parentContainer: {
		background: 'rgba(0,0,0,0.9)',
		height: '100vh',
		width: '23%',
		display: 'flex',
		flexDirection: 'row',
	},
	leftNavbar: {
		height: '100vh',
		background: '#23123d',
		flex: '0.2',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
	menuBtn: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '20px',
		marginBottom: '20px',
		cursor: 'pointer',
	},
	addBtn: {
		width: '45px',
		height: '45px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '20px',
		marginBottom: '20px',
		background: 'white',
		cursor: 'pointer',
	},
	navBtns: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '15px 0',
		cursor: 'pointer',
	},
	navBtnTitle: {
		padding: '0',
		margin: '10px 0 0',
		textAlign: 'center',
		fontSize: '12px',
		fontWeight: 'bold',
		color: '#eaeafa',
		fontFamily: 'Roboto',
	},
	rightContainer: {
		display: 'flex',
		flex: '0.8',
		flexDirection: 'column',
		alignItems: 'center',
	},
	actionContainer: {
		height: '70px',
		width: '100%',
		background: 'rgb(0,0,0) ',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchBtn: {
		width: '40px',
		height: '40px',
		background: 'white',
		borderTopLeftRadius: '5px',
		borderBottomLeftRadius: '5px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
	},
	searchInput: {
		height: '40px',
		padding: '0',
		margin: '0',
		border: 'none',
		outline: 'none ',
		borderTopRightRadius: '5px',
		borderBottomRightRadius: '5px',
		background: 'white',
		fontFamily: 'Inter',
	},
	filterBtn: {
		height: '40px',
		width: '40px',
		border: 'none',
		margin: '0',
		background: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '5px',
		marginLeft: '4px',
		cursor: 'pointer',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: 'none',
		boxShadow: theme.shadows[5],
		width: '50vw',
		height: '40vh',
	},
}));

const LeftSidebar = (props) => {
	const classes = useStyles();

	const [sideBtns, setSideBtns] = React.useState([
		{
			img: './images/your_media.png',
			title: 'Your media',
		},
		{
			img: './images/music.png',
			title: 'Music & SFX',
		},
		{
			img: './images/stock_images.png',
			title: 'Stock images',
		},
		{
			img: './images/text.png',
			title: 'Text',
		},
	]);

	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	return (
		<div className={classes.parentContainer}>
			<div className={classes.leftNavbar}>
				<div className={classes.menuBtn}>
					<img src="./images/menu_btn.svg" alt="menu" />
				</div>
				<div className={classes.addBtn} onClick={handleOpen}>
					<img src="./images/plus_btn.svg" alt="" />
				</div>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open} style={{ border: 'none' }}>
						<div className={classes.paper}>
							<DropzoneComponent />
						</div>
					</Fade>
				</Modal>
				{sideBtns.map((el, ind) => (
					<div className={classes.navBtns}>
						<img
							src={`${el.img}`}
							alt={el.title}
							style={{ width: '20px', height: 'auto' }}
						/>
						<p className={classes.navBtnTitle}>{el.title}</p>
					</div>
				))}
			</div>
			<div className={classes.rightContainer}>
				<div className={classes.actionContainer}>
					<form className={classes.searchContainer}>
						<div className={classes.searchBtn}>
							<img src="./images/search_btn.svg" alt="" />
						</div>
						<input
							className={classes.searchInput}
							placeholder="Search Templates"
							type="search"
						/>
						<div className={classes.filterBtn}>
							<img src="./images/filter_btn.svg" alt="" />
						</div>
					</form>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						overflow: 'auto',
						width: '100%',
					}}
				>
					{[1, 2, 3].map((el) => {
						return (
							<>
								<div
									style={{
										margin: '10px 0',
										color: 'white',
									}}
								>
									<div
										style={{
											background: '#a15fd3',
											width: '16vw',
											borderRadius: '6px',
											height: '150px',
										}}
									></div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
