import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import "./Services.scss";

export default class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: "Free Cocktails",
                    info:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
                },
                {
                    icon: <FaHiking />,
                    title: "Endless Hiking",
                    info:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
                },
                {
                    icon: <FaShuttleVan />,
                    title: "Free Shuttle",
                    info:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
                },
                {
                    icon: <FaBeer />,
                    title: "Strongest Beer",
                    info:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
                },
            ],
        };
    }

    render() {
        return (
            <section className="services">
                <div className="section-title">
                    <h4>Services</h4>
                    <div></div>
                </div>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
