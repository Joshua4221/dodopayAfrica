import React, { memo } from "react";
import { ChatBoxDiv } from "./chatbox.style";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatBox = ({ messageList }) => {
  return (
    <ChatBoxDiv>
      <ScrollToBottom className="MessageContainer">
        <div>
          {messageList.map((item, key) => (
            <div className={"chatbody"}>
              <div className="chatHeader">
                <p className="chatname">{item.user_name}</p>
                <p className="chattime">{item.time}</p>
              </div>
              <div className="chattextbody">
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollToBottom>
    </ChatBoxDiv>
  );
};

export default memo(ChatBox);
