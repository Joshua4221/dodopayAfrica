import React, { memo, useCallback, useState } from "react";
import { withTheme } from "styled-components";
import { CreateRoomDiv } from "./createroom.style";
import { MdClose } from "react-icons/md";

const CreateRoom = ({ RemoveHandle, socket }) => {
  const [roomData, setRoomData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleClick = useCallback(() => {
    if (Object.keys(roomData).length > 1) {
      socket.emit("create-room", roomData);
      RemoveHandle();
    }
  }, [socket, roomData, RemoveHandle]);

  return (
    <CreateRoomDiv>
      <div className="createRoom">
        <div>
          <div className={"iconbody"} onClick={RemoveHandle}>
            <MdClose className={"icon"} />
          </div>
          <div className={"createRoombody"}>
            <div className={"createRoombodyD"}>
              <div className={"createRoomHeader"}>
                <p>Create Room</p>
              </div>

              <div className="inputbody">
                <label>Creator:</label>
                <input
                  required
                  className="input"
                  type={"text"}
                  name={"creator"}
                  onChange={handleChange}
                />
              </div>
              <div className="inputbody">
                <label>Room Name:</label>
                <input
                  required
                  className="input"
                  type={"text"}
                  name={"room_name"}
                  onChange={handleChange}
                />
              </div>

              <div className={"buttonbody"}>
                <button onClick={handleClick} className="button">
                  CreateRoom
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CreateRoomDiv>
  );
};

export default CreateRoom;
