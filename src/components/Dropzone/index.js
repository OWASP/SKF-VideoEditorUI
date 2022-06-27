import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';

const useStyles = makeStyles({
	dropzone: {
		background: 'white',
		width: '100%',
		height: '40vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default function DropzoneComponent() {
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
								{isDragActive ? '📂' : '📁'}
							</span>
							<p>Drag'n'drop images, or click to select files</p>
						</div>
					);
				}}
			</Dropzone>
		</div>
	);
}
