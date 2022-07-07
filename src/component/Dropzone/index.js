import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@mui/styles';
import Dropzone from 'react-dropzone';
import { FolderOpenOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
	dropzone: {
		width: `100%`,
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '50px 0',
	},
});

export default function DropzoneComponent({ style }) {
	const classes = useStyles();
	const [fileNames, setFileNames] = useState([]);
	const handleDrop = useCallback((acceptedFiles) => {
		setFileNames(acceptedFiles.map((file) => file.name));
		console.log(acceptedFiles);
	}, []);

	useEffect(() => {
		console.log(fileNames);
	}, [fileNames]);
	return (
		<div>
			<Dropzone onDrop={handleDrop} accept="image/*" multiple={true}>
				{({
					getRootProps,
					getInputProps,
					isDragActive,
					isDragAccept,
					isDragReject,
				}) => {
					const additionalClass = isDragAccept
						? 'accept'
						: isDragReject
						? 'reject'
						: '';

					return (
						<div
							{...getRootProps({
								className: `${classes.dropzone} ${additionalClass}`,
							})}
						>
							<input {...getInputProps()} />
							<span style={{ fontSize: '50px' }}>
								<FolderOpenOutlined
									style={{ color: '#b3b3b6', fontSize: '50px' }}
								/>
							</span>
							<p>
								Drag'n'drop images,
								<br /> or <br />
								click to select files
							</p>
						</div>
					);
				}}
			</Dropzone>
		</div>
	);
}
