import React, { useState, useEffect, useCallback, memo } from "react";
import CreateRoom from "../CreateRoom/index";
import Rooms from "../Rooms/index";
import { SelectionDiv } from "./selectionOverView.style";
// import { withTheme } from "styled-components";
// import { CreateRoomArray } from "../../utils/CreateData/createDAtaArray";
// import { EditArray } from "../../utils/EditData/editArray";

const SelectionOverView = ({
  socket,
  theme,
  HandleChange,
  JoinRoom,
  createRooms,
  handleChangeOnRoom,
  handleCreateRoom,
  handleChangeShowCreateRoom,
  showCreateRoom
}) => {
  return (
    <SelectionDiv color={theme}>
      <div className={"selectfirstlayout"}>
        <div className={"boxInput"}>
          <div className={"inputbody"}>
            <label>User Name:</label>
            <input
              required
              className={"input"}
              type={"text"}
              name={"user_name"}
              onChange={HandleChange}
            />
          </div>
          <div className="inputbody">
            <label>Room Name:</label>
            <input
              required
              className="input"
              type={"text"}
              name={"room"}
              onChange={HandleChange}
            />
          </div>
        </div>
      </div>
      <div className={"selectsecondlayout"}>
        <div className={"roomsbody"}>
          <h2>Room List View</h2>
          <Rooms createRooms={createRooms} />
        </div>
      </div>
      {showCreateRoom && (
        <CreateRoom
          socket={socket}
          RemoveHandle={handleChangeShowCreateRoom}
          handleChange={handleChangeOnRoom}
          handleClick={handleCreateRoom}
        />
      )}
      <div className={"selectfourthlayout"}>
        <button onClick={JoinRoom} className="button">
          Enter Room
        </button>
        <button onClick={handleChangeShowCreateRoom} className={"button"}>
          Create Room
        </button>
      </div>
    </SelectionDiv>
  );
};

export default memo(SelectionOverView);
