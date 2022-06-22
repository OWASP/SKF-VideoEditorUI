import React from 'react';

const RightSidebar = (props) => {
	return (
		<div
			style={{
				background: 'rgba(0,0,0,0.9)',
				height: '100vh',
				width: '17%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-start',
				overflow: 'auto',
			}}
		>
			{props.images.map((el, ind) => {
				return (
					<>
						<div
							style={{
								margin: '10px 0',
								color: 'white',
							}}
						>
							<p style={{ textAlign: 'center' }}>
								Block-{ind + 1}: Image <br /> Time interval {ind * 5} to{' '}
								{(ind + 1) * 5} sec
							</p>
							<div
								style={{
									background: '#a15fd3',
									width: '14vw',
									borderRadius: '6px',
									height: '150px',
									backgroundImage: `url(${el})`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							></div>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default RightSidebar;
