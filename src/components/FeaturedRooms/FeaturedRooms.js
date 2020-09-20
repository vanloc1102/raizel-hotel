import React, { Component } from "react";
import { RoomContext } from "../../context";

import "./FeaturedRooms.scss";
import Loading from "../Loading/Loading";
import Room from "../Rooms/Room";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map((room) => {
            return <Room key={room.id} room={room} />;
        });
        return (
            <>
                <section className="rooms">
                    <div className="container">
                        <h5 className="section-head">
                            <span className="heading">Featured Rooms</span>
                            <span className="sub-heading">
                                Affordable rooms
                            </span>
                        </h5>
                        <div className="grid rooms-grid">
                            {loading ? <Loading /> : rooms}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
