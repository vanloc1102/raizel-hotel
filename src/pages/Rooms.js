import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import StyledHero from "../components/Hero/StyledHero";
import defaultRoomImg from "../assets/images/room-1.jpeg";
import RoomContainer from "../components/RoomContainer/RoomContainer";

export const Rooms = () => {
    return (
        <>
            <StyledHero img={defaultRoomImg}>
                <Hero
                    title={"Our Rooms"}
                    subTitle={"Luxury hotels"}
                    hero={"hero-room"}
                >
                    <Link to="/" exact="true" className="btn btn-gradient">
                        Return Home
                        <span className="dots">
                            <i className="fa fa-ellipsis-h"></i>
                        </span>
                    </Link>
                </Hero>
            </StyledHero>
            <RoomContainer />
        </>
    );
};
