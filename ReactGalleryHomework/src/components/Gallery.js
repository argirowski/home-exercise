import React from "react";
import { NavLink } from 'react-router-dom';


export class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                {
                    this.props.photos.slice(0, 50).map(photo => {
                        return (
                            <NavLink to={"/gallery/" + photo.id} className="gallery-holder" key={photo.id}>
                                <img
                                    src={photo.thumbnailUrl}
                                    alt={photo.tiitle}
                                />
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }
}