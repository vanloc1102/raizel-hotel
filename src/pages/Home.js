import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import CategoryRooms from "../components/CategoryRooms/CategoryRooms";
import FeaturedRooms from "../components/FeaturedRooms/FeaturedRooms";
import StyledHero from "../components/Hero/StyledHero";
import defaultImg from "../assets/images/hero.jpg";

export const Home = () => {
    return (
        <>
            <StyledHero img={defaultImg}>
                <Hero
                    title={"Discover"}
                    subTitle={"Luxury hotels"}
                    hero={"hero"}
                >
                    <Link to="/rooms" exact="true" className="btn btn-gradient">
                        Explore now
                        <span className="dots">
                            <i className="fa fa-ellipsis-h"></i>
                        </span>
                    </Link>
                </Hero>
            </StyledHero>
            <Services />
            <CategoryRooms />
            <FeaturedRooms />
        </>
    );
};
