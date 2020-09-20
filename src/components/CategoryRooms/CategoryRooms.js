import React, { Component } from "react";
import "./CategoryRooms.scss";

export default class CategoryRooms extends Component {
    render() {
        return (
            <div>
                <section className="hotels">
                    <div className="container">
                        <h5 className="section-head">
                            <span className="heading">Explore</span>
                            <span className="sub-heading">
                                Our beautiful hotels
                            </span>
                        </h5>
                        <div className="grid">
                            <div className="grid-item featured-hotels">
                                <img
                                    src={require("../../assets/images/hotel_astro_resort.jpg")}
                                    alt=""
                                    className="hotel-image"
                                />
                                <h5 className="hotel-name">Astro Hotel</h5>
                                <span className="hotel-price">
                                    From $200/Night
                                </span>
                                <a href="#" className="btn btn-gradient">
                                    Book now
                                    <span className="dots">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="grid-item featured-hotels">
                                <img
                                    src={require("../../assets/images/hotel_the_enchanted_garden.jpg")}
                                    alt=""
                                    className="hotel-image"
                                />
                                <h5 className="hotel-name">Astro Hotel</h5>
                                <span className="hotel-price">
                                    From $200/Night
                                </span>
                                <a href="#" className="btn btn-gradient">
                                    Book now
                                    <span className="dots">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="grid-item featured-hotels">
                                <img
                                    src={require("../../assets/images/hotel_the_paradise.jpg")}
                                    alt=""
                                    className="hotel-image"
                                />
                                <h5 className="hotel-name">Astro Hotel</h5>
                                <span className="hotel-price">
                                    From $200/Night
                                </span>
                                <a href="#" className="btn btn-gradient">
                                    Book now
                                    <span className="dots">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="line-seprate"></div>
            </div>
        );
    }
}
