import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

function MediaObject(props) {
	const theme = useSelector(state => state.theme.theme);
	const { name, img, description } = props;

	return (
		<div className={`mb-4 card bg-${theme}`}>
			<div className="card-body">
				<div className="media">
	  				{img && <img src={img} className="mr-3" alt="" />}

					<div className="media-body">
						{name && <h5 className="mt-0">{name}</h5>}
						{description && <p>{description}</p>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MediaObject;
