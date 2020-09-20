import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../assets/images/room-1.jpeg";
import { Link } from "react-router-dom";

function Room({ room }) {
    const { name, price, slug, images, description } = room;
    return (
        <div className="grid-item featured-rooms">
            <div className="image-wrap">
                <img
                    className="room-image"
                    src={images[0] || defaultImg}
                    alt={slug}
                />
                <h5 className="room-name">{name}</h5>
            </div>
            <div className="room-info-wrap">
                <span className="room-price">
                    ${price} <span className="per-night">Per night</span>
                </span>
                <p className="paragraph">{description}</p>
                <Link to={`/rooms/${slug}`} className="btn rooms-btn">
                    Book now &rarr;
                </Link>
            </div>
        </div>
    );
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        slug: PropTypes.string.isRequired,
    }),
};

export default Room;
