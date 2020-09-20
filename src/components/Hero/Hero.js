import React from "react";

import "./Hero.scss";

function Hero(props) {
    return (
        <div className={props.hero}>
            <div className="container">
                <div className="main-heading">
                    <h1 className="title">{props.title}</h1>
                    <h2 className="sub-title">{props.subTitle}</h2>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Hero;
