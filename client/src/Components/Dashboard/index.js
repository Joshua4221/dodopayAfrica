import React, { memo, useContext } from "react";
import ChatBox from "../ChatBox";
import { DashboardDiv } from "./dashboard.style";
import { UserContext } from "../../universal-components/Context";

const Dashboard = ({
  closeDashboard,
  userDetails,
  userCollection,
  handleChange,
  SendMessage,
  messageList,
}) => {
  // const { userData, userCollection } = useContext(UserContext);

  console.log(userDetails);
  console.log(userCollection);
  return (
    <DashboardDiv>
      <div className={"nav"}>
        <div className={"navtitle"}>
          <p>Chat Room</p>
        </div>
        <div className={"navbutton"} onClick={closeDashboard}>
          <button>Leave Room</button>
        </div>
      </div>
      <div className={"dashboardbody"}>
        <div className={"sidebar"}>
          <div className={"sidebarhead"}>
            <div className={"sidebarroom"}>
              <p>Room Name</p>
            </div>
            <div className="sidebarroomname">
              <p>{userDetails.room_name}</p>
            </div>
          </div>
          <div className="sidebarfooter">
            <div className="sidebarUser">
              <p>Users</p>
            </div>
            <div className="sidebarUsernames">
              {userCollection?.map((item, key) => (
                <p key={key}>{item.user_name}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={"chatbox"}>
          <ChatBox messageList={messageList} />
        </div>
      </div>
      <div className={"footer"}>
        <input
          className="footerInput"
          name={"message"}
          type="text"
          onChange={handleChange}
        />
        <button onClick={SendMessage}>Send</button>
      </div>
    </DashboardDiv>
  );
};

export default memo(Dashboard);
