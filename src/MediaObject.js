import React from 'react';

class MediaObject extends React.Component {
	render () {
		const { name, img, description } = this.props;

		return (
			<div className="media">
  				{img && <img src={img} className="mr-3" alt="" />}

				<div className="media-body">
					{name && <h5 className="mt-0">{name}</h5>}
					{description && <p>{description}</p>}
				</div>
			</div>
		);
	}
}

export default MediaObject;
