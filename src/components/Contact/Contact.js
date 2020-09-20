import React from "react";
import "./Contact.scss";

function Contact(props) {
    return (
        <section className="contact" id="contact-go">
            <div className="container">
                <h5 className="section-head">
                    <span className="heading">Contact</span>
                    <span className="sub-heading">Get in touch with us</span>
                </h5>
                <div className="contact-content">
                    <div className="traveler-wrap">
                        <img
                            src={require("../../assets/images/traveler.png")}
                            alt=""
                        />
                    </div>
                    <form action="" className="form contact-form">
                        <div className="input-group-wrap">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                />
                                <span className="bar"></span>
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="E-mail"
                                />
                                <span className="bar"></span>
                            </div>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input"
                                placeholder="Subject"
                            />
                            <span className="bar"></span>
                        </div>
                        <div className="input-group">
                            <textarea
                                className="input"
                                cols="30"
                                rows="8"
                                placeholder="Message"
                                required
                            ></textarea>
                            <span className="bar"></span>
                        </div>
                        <button
                            type="submit"
                            className="btn form-btn btn-purple"
                        >
                            Send Message
                            <span className="dots">
                                <i className="fa fa-ellipsis-h"></i>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
