import React, { memo } from "react";
import { RoomsDiv } from "./room.style";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import ScrollToBottom from "react-scroll-to-bottom";

const Room = ({ createRooms }) => {
  return (
    <RoomsDiv>
      <ScrollToBottom className="RoomContainer">
        <div className="containerWrapper">
          {createRooms?.map((item, key) => (
            <div key={key} className={"cardbody"}>
              <div className={"title"}>
                <p>{item.room}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollToBottom>
    </RoomsDiv>
  );
};

export default memo(Room);
