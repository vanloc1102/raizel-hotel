// import React from "react";
// import RoomList from "../RoomList/RoomList";
// import RoomFilter from "../RoomFilter/RoomFilter";
// import { withRoomConsumer } from "../../context";
// import Loading from "../Loading/Loading";

// function RoomContainer({ context }) {
//     const { loading, sortedRooms, rooms } = context;
//     if (loading) {
//         return <Loading />;
//     }
//     return (
//         <div>
//             <p>Room container</p>
//             <RoomFilter />
//             <RoomList />
//         </div>
//     );
// }

// export default withRoomConsumer(RoomContainer);

import React from "react";
import RoomList from "../RoomList/RoomList";
import RoomFilter from "../RoomFilter/RoomFilter";
import { RoomConsumer } from "../../context";
import Loading from "../Loading/Loading";

export default function RoomContainer() {
    return (
        <>
            <RoomConsumer>
                {(value) => {
                    const { loading, sortedRooms, rooms } = value;
                    if (loading) {
                        return <Loading />;
                    }
                    return (
                        <div>
                            <RoomFilter rooms={rooms} />
                            <RoomList rooms={sortedRooms} />
                        </div>
                    );
                }}
            </RoomConsumer>
        </>
    );
}
