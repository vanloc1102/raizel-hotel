import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content-brand">
                        <a href="index.html" className="logo">
                            <img
                                src={require("../../assets/images/logo.png")}
                                alt=""
                                className="logo-image"
                            />
                        </a>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus dolorum, ex laudantium quia quos
                            repellendus sit ullam voluptatem. A adipisci aliquam
                            debitis dolorem est fugiat nulla provident quaerat,
                            quis unde.
                        </p>
                    </div>
                    <div className="social-media-wrap">
                        <h4 className="footer-heading">Follow us</h4>
                        <div className="social-media">
                            <a className="sm-link" href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="sm-link" href="#">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a className="sm-link" href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a className="sm-link" href="#">
                                <i className="fa fa-pinterest"></i>
                            </a>
                            <a className="sm-link" href="#">
                                <i className="fa fa-tripadvisor"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
